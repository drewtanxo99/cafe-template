/* ============================================================
   CONFIG — this is the ONLY file you need to edit per client.
   Swap the business info, images, highlights, reviews, and FAQ
   below, and the whole site updates.
   ============================================================ */

export const business = {
  name: "Majheri Cafe",
  tagline: "Slow mornings stay",
  overlineLeft: "Bhanu Chowk, Dharan",
  overlineRight: "Est. 2021",
  intro:
    "Tucked just off the main road, Majheri Cafe is where the city slows down. Hand-pulled coffee, fresh-baked pastries, and a kitchen that still cooks like home.",
  story:
    "Majheri started as a small counter with two chairs and one coffee machine. Today it's grown into a proper corner table for Dharan — but the coffee is still pulled the same careful way it always was, and the kitchen still bakes fresh every morning before the first customer walks in.",
  storyExtended:
    "We believe a cafe should feel like a pause, not a stop. Every table here is meant to be sat at for a while — with a book, a laptop, or good company. Our beans are roasted in small batches, our pastries are baked fresh daily, and our staff remember your usual order after the third visit. That's the kind of place we wanted to build, and the kind of place we still are.",
  phone: "9842565983",
  whatsappMessage: "Hi! I'd like to know more about Majheri Cafe.",
  address: "Bhanu Chowk, Dharan",
  mapEmbedUrl: "https://www.google.com/maps?q=Dharan&output=embed",
  hours: "7:00 AM – 8:00 PM, all week",
  hoursDetailed: [
    { day: "Monday – Friday", time: "7:00 AM – 8:00 PM" },
    { day: "Saturday", time: "7:30 AM – 9:00 PM" },
    { day: "Sunday", time: "8:00 AM – 7:00 PM" },
  ],
};

export const hero = {
  image:
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop",
};

export const aboutImage =
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop";

export const aboutImageSecondary =
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200&auto=format&fit=crop";

export const gallery = [
  { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop", alt: "Coffee being poured" },
  { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop", alt: "Cafe interior seating" },
  { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop", alt: "Fresh pastries on display" },
  { src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800&auto=format&fit=crop", alt: "Latte art close up" },
  { src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800&auto=format&fit=crop", alt: "Cafe table from above" },
  { src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=800&auto=format&fit=crop", alt: "Cafe counter and menu board" },
];

export const highlights = [
  {
    name: "Hand-Pulled Espresso",
    note: "Small-batch roasted, pulled to order",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Fresh-Baked Pastries",
    note: "Baked every morning before opening",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "All-Day Brunch",
    note: "Easy plates for long mornings",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=600&auto=format&fit=crop",
  },
];

export const rating = {
  score: "4.8",
  label: "Excellent",
  basedOn: "Based on 120+ reviews",
};

export const reviews = [
  {
    text: "My go-to work-from-cafe spot in Dharan. Quiet, good wifi, and the coffee is genuinely great.",
    author: "Priya S.",
    source: "Google",
  },
  {
    text: "The pastries sell out fast for a reason. Get there early on weekends.",
    author: "Roshan M.",
    source: "Facebook",
  },
  {
    text: "Cozy corner table energy. I've spent entire afternoons here and never felt rushed.",
    author: "Asha T.",
    source: "Google",
  },
];

export const faq = [
  {
    q: "Is there wifi?",
    a: "Yes, free wifi is available throughout the cafe — happy to share the password when you arrive.",
  },
  {
    q: "Can I work here for a few hours?",
    a: "Absolutely, that's exactly the kind of space we built. No pressure to rush your table.",
  },
  {
    q: "Do you take group bookings?",
    a: "For groups of 6 or more, message us ahead on WhatsApp so we can set a table aside.",
  },
  {
    q: "Do you have vegan options?",
    a: "Yes, a few of our pastries and plates are vegan — just ask at the counter.",
  },
];
