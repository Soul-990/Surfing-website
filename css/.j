@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Dancing+Script:wght@400;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}

body {
  font-family: "Roboto", sans-serif;
  color: #111;
  line-height: 1.45;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 24px;
}

:root {
  --accent: #0383ec;
  --muted: #6b6b6b;
  --white: #ffffff;
  --card-shadow: rgba(0, 0, 0, 0.12);
}

.btn {
  display: inline-block;
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
}

.btn-primary {
  background: var(--accent);
  color: var(--white);
  border: none;
}

.btn-ghost {
  background: rgba(255, 255, 255, 0.9);
  color: #0d7f7f;
  border: none;
}

.btn-sm {
  padding: 8px 12px;
  font-size: 0.95rem;
}

.site-header {
  background: #fff;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 40;
}

.header-inner {
  display: flex;
  align-items: center;
  gap: 20px;
}

.logo img {
  height: 56px;
  display: block;
}

.nav {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 18px;
}

.nav-list {
  display: flex;
  gap: 16px;
  align-items: center;
  list-style: none;
}

.nav-list a {
  color: #1a1515;
  text-decoration: none;
  padding: 8px 6px;
  display: inline-block;
}

.nav-cta {
  white-space: nowrap;
}

.nav-toggle {
  display: none;
}

.hamburger {
  display: none;
  width: 40px;
  height: 28px;
  position: relative;
  cursor: pointer;
}

.hamburger span {
  display: block;
  height: 3px;
  background: #111;
  border-radius: 3px;
  position: absolute;
  left: 0;
  right: 0;
  transition: transform .25s ease, opacity .25s ease;
}

.hamburger span:nth-child(1) {
  top: 0;
}

.hamburger span:nth-child(2) {
  top: 50%;
  transform: translateY(-50%);
}

.hamburger span:nth-child(3) {
  bottom: 0;
}

.hero {
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  padding: 72px 0;
}

.hero-content {
  display: grid;
  gap: 18px;
  align-items: start;
}

.hero h1 {
  font-family: "Dancing Script", cursive;
  font-size: clamp(32px, 6vw, 62px);
  line-height: 1.02;
}

.hero p {
  font-size: clamp(16px, 2.2vw, 20px);
  max-width: 760px;
}

.intro {
  text-align: center;
  padding-top: 34px;
  padding-bottom: 42px;
}

.section-title {
  font-size: 1.6rem;
  margin-bottom: 10px;
}

.lead {
  color: var(--muted);
  margin-bottom: 28px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 26px;
}

.card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px var(--card-shadow);
  display: flex;
  flex-direction: column;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.card-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.card-title {
  font-weight: 700;
  color: #201b1b;
  text-decoration: none;
}

.rating i {
  color: #FFD43B;
  margin-right: 4px;
}

.price {
  font-weight: 700;
  color: #0f9;
  /* subtle */
}

.card .btn-sm {
  align-self: flex-start;
  margin-top: auto;
}

.feature {
  background-repeat: no-repeat;
  background-size: cover;
  color: #111;
  padding: 48px 0;
}

.feature-content {
  text-align: center;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  margin-top: 26px;
}

.service {
  background: rgba(255, 255, 255, 0.92);
  padding: 18px;
  border-radius: 10px;
  box-shadow: 0 6px 18px var(--card-shadow);
}

.service img {
  height: 64px;
  display: block;
  margin: 0 auto 8px;
}

.service h3 {
  margin: 6px 0;
}

.site-footer {
  background: url('../pictures/imgi_54_footer-bg.jpg') no-repeat center/cover, #0b3a4a;
  color: #fff;
  padding: 40px 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.site-footer a {
  color: #fff;
  text-decoration: none;
}


@media (max-width: 992px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .service-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .header-inner {
    align-items: center;
    gap: 12px;
  }

  .nav-list {
    display: none;
  }

  .nav-cta {
    display: none;
  }

  .hamburger {
    display: block;
    margin-left: auto;
  }

  /* When nav toggle is checked, show a mobile menu */
  .nav {
    position: fixed;
    inset: 0 0 0 auto;
    width: 280px;
    max-width: 84%;
    background: #fff;
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.25);
    transform: translateX(100%);
    transition: transform .28s ease;
    padding: 32px 20px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    z-index: 80;
  }

  .nav .nav-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .nav .nav-list a {
    color: #111;
    padding: 8px 0;
  }

  /* show nav when checked */
  .nav-toggle:checked+.hamburger+.nav {
    transform: translateX(0);
  }

  /* animate hamburger to X */
  .nav-toggle:checked+.hamburger span:nth-child(1) {
    transform: translateY(11px) rotate(45deg);
  }

  .nav-toggle:checked+.hamburger span:nth-child(2) {
    opacity: 0;
  }

  .nav-toggle:checked+.hamburger span:nth-child(3) {
    transform: translateY(-11px) rotate(-45deg);
  }

  /* layout changes */
  .hero {
    padding: 48px 0;
  }

  .card-grid {
    grid-template-columns: 1fr;
  }

  .service-grid {
    grid-template-columns: 1fr;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }

  .logo img {
    height: 48px;
  }
}

/* Tiny phones */
@media (max-width: 420px) {
  .container {
    padding-left: 16px;
    padding-right: 16px;
  }

  .hero-content {
    gap: 12px;
  }

  .hero p {
    font-size: 14px;
  }

  .card img {
    height: 160px;
  }
}