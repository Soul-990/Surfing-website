/* Shared helpers */
const $ = (s, r = document) => r.querySelector(s);
const qs = new URLSearchParams(location.search);

function stars(n) {
  let h = "";
  for (let i = 1; i <= 5; i++) h += `<i class="fa-solid fa-star${i <= n ? "" : " off"}"></i>`;
  return `<span class="stars" aria-label="${n} out of 5 stars">${h}</span>`;
}
function priceText(t) { return `$${t.price} <small>${t.unit}</small>`; }
function tourCard(t) {
  return `<article class="tcard">
    <a href="tour.html?id=${t.id}" class="tcard-img"><img src="${t.img}" alt="${t.title}" loading="lazy"><span class="tag">${t.type}</span></a>
    <div class="tcard-body">
      <h3><a href="tour.html?id=${t.id}">${t.title}</a></h3>
      <p class="meta"><i class="fa-solid fa-location-dot"></i> ${t.place}</p>
      ${stars(t.rating)}
      <p class="meta">${t.days} day${t.days > 1 ? "s" : ""} &middot; ${t.level}</p>
      <div class="tcard-foot"><strong class="price">${priceText(t)}</strong><a class="btn btn-sm" href="tour.html?id=${t.id}">Read more</a></div>
    </div></article>`;
}
function tourRow(t) {
  return `<article class="trow">
    <a href="tour.html?id=${t.id}"><img src="${t.img}" alt="${t.title}" loading="lazy"></a>
    <div class="trow-body">
      <span class="tag tag-static">${t.type}</span>
      <h3><a href="tour.html?id=${t.id}">${t.title}</a></h3>
      <p class="meta"><i class="fa-solid fa-location-dot"></i> ${t.place} &middot; ${t.days} day${t.days > 1 ? "s" : ""} &middot; ${t.level}</p>
      <p>${t.blurb}</p>
    </div>
    <div class="trow-side">${stars(t.rating)}<strong class="price">${priceText(t)}</strong><a class="btn btn-sm" href="tour.html?id=${t.id}">View tour</a></div>
  </article>`;
}
function fmtDate(d) { return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }); }
function postCard(p) {
  return `<article class="tcard">
    <a href="post.html?id=${p.id}" class="tcard-img"><img src="${p.img}" alt="${p.title}" loading="lazy"><span class="tag">${p.cat}</span></a>
    <div class="tcard-body"><p class="meta">${fmtDate(p.date)}</p>
    <h3><a href="post.html?id=${p.id}">${p.title}</a></h3><p>${p.excerpt}</p>
    <div class="tcard-foot"><a class="link-more" href="post.html?id=${p.id}">Read article &rarr;</a></div></div></article>`;
}

// Tour list page /
if ($("#tour-list")) {
  const render = type => {
    const list = TOURS.filter(t => type === "All" || t.type === type);
    $("#tour-list").innerHTML = list.map(tourRow).join("");
    $("#tour-count").textContent = `${list.length} tour${list.length === 1 ? "" : "s"}`;
    document.querySelectorAll(".chips button").forEach(b => b.classList.toggle("active", b.dataset.type === type));
  };
  document.querySelectorAll(".chips button").forEach(b => b.addEventListener("click", () => render(b.dataset.type)));
  render(qs.get("type") && ["Surf Day", "Surf & Stay", "Surf Trips", "Surf Guide"].includes(qs.get("type")) ? qs.get("type") : "All");
}

// Tour search page /
if ($("#search-results")) {
  const f = { q: $("#f-q"), type: $("#f-type"), level: $("#f-level"), price: $("#f-price"), sort: $("#f-sort") };
  if (qs.get("q")) f.q.value = qs.get("q");
  if (qs.get("type")) f.type.value = qs.get("type");
  const run = () => {
    const q = f.q.value.trim().toLowerCase(), max = +f.price.value;
    $("#f-price-val").textContent = "$" + max;
    let r = TOURS.filter(t =>
      (!q || (t.title + " " + t.place + " " + t.blurb).toLowerCase().includes(q)) &&
      (f.type.value === "" || t.type === f.type.value) &&
      (f.level.value === "" || t.level === f.level.value) &&
      t.price <= max);
    const s = f.sort.value;
    if (s === "price-asc") r.sort((a, b) => a.price - b.price);
    if (s === "price-desc") r.sort((a, b) => b.price - a.price);
    if (s === "rating") r.sort((a, b) => b.rating - a.rating);
    if (s === "days") r.sort((a, b) => b.days - a.days);
    $("#search-count").textContent = `${r.length} tour${r.length === 1 ? "" : "s"} found`;
    $("#search-results").innerHTML = r.length ? r.map(tourCard).join("") : `<p class="empty">No tours match your filters. Try widening your search.</p>`;
  };
  Object.values(f).forEach(el => el.addEventListener("input", run));
  $("#f-reset").addEventListener("click", () => { f.q.value = ""; f.type.value = ""; f.level.value = ""; f.price.value = 400; f.sort.value = ""; run(); });
  run();
}

// Tour detail page /
if ($("#tour-detail")) {
  const t = TOURS.find(x => x.id === qs.get("id")) || TOURS[0];
  document.title = `${t.title} | Surfing`;
  $("#tour-detail").innerHTML = `
    <div class="detail-main">
      <img class="detail-img" src="${t.img}" alt="${t.title}">
      <span class="tag tag-static">${t.type}</span>
      <h1>${t.title}</h1>
      <p class="meta"><i class="fa-solid fa-location-dot"></i> ${t.place} &middot; ${t.days} day${t.days > 1 ? "s" : ""} &middot; ${t.level} ${stars(t.rating)}</p>
      <p class="lead">${t.blurb}</p>
      <h2>What's included</h2>
      <ul class="ticks">${t.includes.map(i => `<li><i class="fa-solid fa-circle-check"></i> ${i}</li>`).join("")}</ul>
      <h2>Itinerary</h2>
      <ol class="plan">${t.plan.map(p => `<li><strong>${p[0]}</strong><span>${p[1]}</span></li>`).join("")}</ol>
    </div>
    <aside class="book-box">
      <p class="price big">${priceText(t)}</p>
      <form id="book-form">
        <label>Full name<input required name="name" autocomplete="name"></label>
        <label>Email<input required type="email" name="email" autocomplete="email"></label>
        <label>Preferred start date<input required type="date" name="date"></label>
        <label>Guests<input required type="number" min="1" max="12" value="1" name="guests"></label>
        <button class="btn btn-block" type="submit">Request booking</button>
      </form>
      <p class="form-ok" id="book-ok" hidden></p>
    </aside>`;
  const min = new Date(); $("#book-form input[type=date]").min = min.toISOString().slice(0, 10);
  $("#book-form").addEventListener("submit", e => {
    e.preventDefault();
    const n = e.target.name.value;
    $("#book-ok").hidden = false;
    $("#book-ok").textContent = `Thanks ${n}! We have received your request for ${t.title} and will email you within 24 hours.`;
    e.target.reset();
  });
  const rel = TOURS.filter(x => x.id !== t.id && x.type === t.type).concat(TOURS.filter(x => x.id !== t.id && x.type !== t.type)).slice(0, 3);
  $("#related").innerHTML = rel.map(tourCard).join("");
}

// Blog list + post /
if ($("#blog-grid")) {
  const cats = ["All", ...new Set(POSTS.map(p => p.cat))];
  $("#blog-cats").innerHTML = cats.map(c => `<button data-c="${c}"${c === "All" ? ' class="active"' : ""}>${c}</button>`).join("");
  const show = c => {
    $("#blog-grid").innerHTML = POSTS.filter(p => c === "All" || p.cat === c).map(postCard).join("");
    document.querySelectorAll("#blog-cats button").forEach(b => b.classList.toggle("active", b.dataset.c === c));
  };
  document.querySelectorAll("#blog-cats button").forEach(b => b.addEventListener("click", () => show(b.dataset.c)));
  show("All");
}
if ($("#post")) {
  const p = POSTS.find(x => x.id === qs.get("id")) || POSTS[0];
  document.title = `${p.title} | Surfing Blog`;
  $("#post").innerHTML = `<span class="tag tag-static">${p.cat}</span><h1>${p.title}</h1><p class="meta">${fmtDate(p.date)}</p>
    <img class="detail-img" src="${p.img}" alt="${p.title}">${p.body.map(x => `<p>${x}</p>`).join("")}
    <p><a class="link-more" href="blog.html">&larr; Back to blog</a></p>`;
  $("#more-posts").innerHTML = POSTS.filter(x => x.id !== p.id).slice(0, 3).map(postCard).join("");
}

// Simple front-end forms /
document.querySelectorAll("form[data-ok]").forEach(f => f.addEventListener("submit", e => {
  e.preventDefault();
  const ok = f.parentElement.querySelector(".form-ok") || f.nextElementSibling;
  ok.hidden = false; ok.textContent = f.dataset.ok; f.reset();
}));

// FAQ accordion: only one open at a time /
document.querySelectorAll(".faq details").forEach(d => d.addEventListener("toggle", () => {
  if (d.open) document.querySelectorAll(".faq details").forEach(o => { if (o !== d) o.open = false; });
}));

// Gallery lightbox /
const lb = $("#lightbox");
if (lb) {
  document.querySelectorAll(".gallery img").forEach(img => img.addEventListener("click", () => {
    $("#lightbox img").src = img.src; $("#lightbox img").alt = img.alt; lb.classList.add("open");
  }));
  lb.addEventListener("click", () => lb.classList.remove("open"));
  document.addEventListener("keydown", e => { if (e.key === "Escape") lb.classList.remove("open"); });
}
