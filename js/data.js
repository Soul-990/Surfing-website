/* Shared data for tours and blog posts */
const IMG = {
  a: "pictures/imgi_13_delfi-de-la-rua-Sj5efgWguDs-unsplash-700x450.jpg",
  b: "pictures/imgi_21_surf-gallery-2.jpg",
  c: "pictures/imgi_23_surf-gallery-4.jpg",
  d: "pictures/imgi_55_sutf-hero-bg-768x432.jpg"
};

const TOURS = [
  {
    id: "byron-bay-lesson", title: "Byron Bay Surf Lesson", place: "Byron Bay, Australia", type: "Surf Day", level: "Beginner", days: 1, price: 89, unit: "per person", rating: 5, img: IMG.a,
    blurb: "A relaxed half-day lesson on one of Australia's friendliest beach breaks, with board and wetsuit included.",
    includes: ["Board & wetsuit hire", "Certified instructor (max 6 per group)", "Beach safety briefing", "Action photos"],
    plan: [["Morning", "Meet at the beach, safety briefing and dry-land practice"], ["Midday", "Two hours in the water with your instructor"], ["Afternoon", "Photo review and tips for continuing on your own"]]
  },
  {
    id: "surf-with-mike", title: "9 Days Surf with Mike", place: "Ericeira, Portugal", type: "Surf & Stay", level: "Intermediate", days: 9, price: 200, unit: "per day", rating: 5, img: IMG.b,
    blurb: "Nine days of coaching with local legend Mike, staying in a seaside guesthouse minutes from the best breaks.",
    includes: ["Daily guided sessions", "Video analysis", "Guesthouse accommodation & breakfast", "Airport transfers"],
    plan: [["Days 1-2", "Arrival, spot tour and technique assessment"], ["Days 3-6", "Daily coaching sessions on different breaks"], ["Days 7-8", "Free surf days with guide support"], ["Day 9", "Final video review and farewell dinner"]]
  },
  {
    id: "adventure-with-rio", title: "6 Days Adventure with Rio", place: "Santa Teresa, Costa Rica", type: "Surf Trips", level: "All levels", days: 6, price: 100, unit: "per day", rating: 5, img: IMG.c,
    blurb: "Six days of jungle, sunsets and warm-water waves. Rio takes you to a new beach every day.",
    includes: ["Daily surf trips with transport", "Jungle-view eco lodge", "Breakfast and lunch", "Yoga sessions"],
    plan: [["Day 1", "Arrive and settle into the lodge"], ["Days 2-5", "Guided surf trips to different beaches"], ["Day 6", "Sunrise session and departure"]]
  },
  {
    id: "uluwatu-camp", title: "Uluwatu Surf Camp", place: "Bali, Indonesia", type: "Surf & Stay", level: "Intermediate", days: 7, price: 150, unit: "per day", rating: 4, img: IMG.d,
    blurb: "Reef breaks, cliff-top cafes and a camp built around surfing from sunrise to sunset.",
    includes: ["Shared or private room", "Daily coaching", "Scooter hire", "Breakfast"],
    plan: [["Days 1-2", "Reef safety and local break orientation"], ["Days 3-6", "Coaching sessions at several Uluwatu breaks"], ["Day 7", "Free surf and farewell BBQ"]]
  },
  {
    id: "weligama-week", title: "Weligama Beginner Week", place: "Weligama, Sri Lanka", type: "Surf Trips", level: "Beginner", days: 7, price: 95, unit: "per day", rating: 4, img: IMG.b,
    blurb: "A gentle sandy bay and warm water make this the ideal place to learn. Small groups, plenty of patience.",
    includes: ["Daily lessons", "Board hire", "Beachfront guesthouse", "Welcome dinner"],
    plan: [["Days 1-3", "Fundamentals: paddling, pop-up and wave selection"], ["Days 4-6", "Green waves and first lines"], ["Day 7", "Progress review"]]
  },
  {
    id: "north-shore-guide", title: "North Shore Private Guide", place: "Oahu, Hawaii", type: "Surf Guide", level: "Advanced", days: 3, price: 350, unit: "per day", rating: 5, img: IMG.a,
    blurb: "A private local guide to read the swell, choose the break and keep you safe at the world's most famous waves.",
    includes: ["1-on-1 guide", "Daily swell and tide briefing", "Photographer on request", "Local transport"],
    plan: [["Day 1", "Swell check and warm-up session"], ["Day 2", "Main session at the best break of the day"], ["Day 3", "Choose your own adventure"]]
  },
  {
    id: "taghazout-yoga-surf", title: "Taghazout Surf & Yoga", place: "Taghazout, Morocco", type: "Surf & Stay", level: "All levels", days: 7, price: 120, unit: "per day", rating: 4, img: IMG.c,
    blurb: "Point breaks by day, yoga and mint tea by night, in a laid-back Atlantic fishing village.",
    includes: ["Surf coaching", "Daily yoga", "Rooftop accommodation", "Breakfast and dinner"],
    plan: [["Days 1-2", "Arrival and beginner or intermediate grouping"], ["Days 3-6", "Surf mornings, yoga evenings"], ["Day 7", "Free surf and goodbye tagine"]]
  },
  {
    id: "sunset-surf-day", title: "Sunset Surf Day", place: "Newquay, England", type: "Surf Day", level: "Beginner", days: 1, price: 65, unit: "per person", rating: 4, img: IMG.d,
    blurb: "Catch the golden hour in the water. A relaxed evening lesson followed by a beach fire.",
    includes: ["Board & wetsuit", "Instructor", "Hot drink by the fire"],
    plan: [["Late afternoon", "Briefing and warm-up"], ["Sunset", "Guided session in the water"], ["Evening", "Beach fire and hot chocolate"]]
  },
  {
    id: "guide-your-trip", title: "Custom Surf Guide Service", place: "Worldwide", type: "Surf Guide", level: "All levels", days: 2, price: 180, unit: "per day", rating: 5, img: IMG.b,
    blurb: "Tell us where you are going and we match you with a vetted local guide who knows every break.",
    includes: ["Vetted local guide", "Break recommendations", "Travel concierge support", "Flexible dates"],
    plan: [["Before", "Chat with our concierge about your goals"], ["On the trip", "Meet your guide and go surfing"], ["After", "Feedback and tips for next time"]]
  }
];

const POSTS = [
  {
    id: "first-surf-lesson", title: "What to Expect at Your First Surf Lesson", date: "2026-10-12", cat: "Beginners", img: IMG.a,
    excerpt: "Nervous about your first time on a board? Here is how a good lesson runs, from the beach briefing to your first wave.",
    body: ["Your first lesson starts on the sand, not in the water. A good instructor will teach you how to lie on the board, paddle, and pop up to your feet before you ever get wet.", "Expect to fall a lot. That is completely normal and part of the fun. Soft foam boards are used for beginners so falling is safe.", "By the end of two hours most people stand up on at least one wave. Wear a rash vest, use plenty of reef-safe sunscreen and drink water before you start."]
  },
  {
    id: "best-spots-2026", title: "5 Best Surf Spots for Intermediates", date: "2026-09-28", cat: "Destinations", img: IMG.b,
    excerpt: "Ready to leave the white water behind? These five destinations offer consistent waves and friendly line-ups.",
    body: ["Ericeira in Portugal offers a huge variety of breaks within a short drive, so you can always find a wave that matches the conditions.", "Uluwatu in Bali is a classic reef break experience, while Santa Teresa in Costa Rica gives warm water and reliable beach breaks.", "Whichever you choose, book a few guided sessions first. A local guide will save you days of searching for the right spot."]
  },
  {
    id: "choose-a-surfboard", title: "How to Choose the Right Surfboard", date: "2026-09-10", cat: "Gear", img: IMG.c,
    excerpt: "Longboard, funboard or shortboard? A quick guide to picking a board that matches your level and the waves.",
    body: ["Beginners should start on a long, wide and thick foam board. It is stable, floats well and catches waves easily.", "As your skills improve, move to a funboard and eventually a shorter, more responsive shortboard.", "Ask your coach before buying. Renting at camp lets you try different shapes first."]
  },
  {
    id: "surf-safety", title: "Surf Safety: Reading the Ocean", date: "2026-08-22", cat: "Safety", img: IMG.d,
    excerpt: "Rip currents, tides and etiquette: the essentials every surfer should know before paddling out.",
    body: ["Always watch the water for ten minutes before you go in. Look for where waves break, where people paddle out and any channels of calmer water, which can be rip currents.", "If caught in a rip, stay calm, do not fight it and paddle parallel to the shore until you are free.", "Respect the line-up: the surfer closest to the peak has priority. Never drop in."]
  },
  {
    id: "surf-and-stay", title: "Why a Surf & Stay Trip Beats a Day Lesson", date: "2026-08-05", cat: "Travel", img: IMG.b,
    excerpt: "Living by the ocean for a week changes how fast you learn. Here is why camps work so well.",
    body: ["Daily sessions build muscle memory far faster than occasional weekends.", "You also pick up local knowledge from guides, share tips with other surfers and recover properly between sessions.", "Add yoga, good food and sunsets, and you have a holiday you will remember."]
  },
  {
    id: "travel-with-board", title: "Travelling With a Surfboard: A Checklist", date: "2026-07-18", cat: "Gear", img: IMG.a,
    excerpt: "Airline fees, board bags and packing tips so your board arrives in one piece.",
    body: ["Check your airline's sports equipment policy before you book. Fees vary a lot.", "Use a padded board bag and wrap the fins and rails with extra protection.", "Pack wetsuit, wax, leash and reef-safe sunscreen in your carry-on if you can."]
  }
];
