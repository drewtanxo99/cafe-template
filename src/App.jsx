import { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import OverlineFlank from "./components/OverlineFlank";
import OutlinedButton from "./components/OutlinedButton";
import RatingWidget from "./components/RatingWidget";
import ReviewCard from "./components/ReviewCard";
import {
  business,
  hero,
  aboutImage,
  aboutImageSecondary,
  gallery,
  highlights,
  rating,
  reviews,
  faq,
} from "./config";

function Row({ icon, label }) {
  const paths = {
    location: (
      <path d="M12 21s-7-7.2-7-12a7 7 0 0 1 14 0c0 4.8-7 12-7 12Z M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    ),
    phone: (
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2c-8 0-14-6-14-14a2 2 0 0 1 2-2Z" />
    ),
    clock: <path d="M12 7v5l3 3 M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />,
  };
  return (
    <div className="flex items-center gap-3">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d49653" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
        {paths[icon]}
      </svg>
      <span style={{ fontSize: "15px", fontWeight: 500, color: "#2c2c2c" }}>{label}</span>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderTop: "1px solid #b6ab9c", paddingTop: "20px", paddingBottom: "4px" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
        style={{ background: "transparent", border: "none", cursor: "pointer", padding: 0 }}
      >
        <span style={{ fontSize: "15px", fontWeight: 700, color: "#2c2c2c" }}>{q}</span>
        <span style={{ fontSize: "18px", color: "#615b53" }}>{open ? "–" : "+"}</span>
      </button>
      {open && (
        <p style={{ fontSize: "14px", fontWeight: 500, color: "#615b53", lineHeight: 1.4, marginTop: "12px" }}>
          {a}
        </p>
      )}
    </div>
  );
}

function App() {
  return (
    <div id="top" style={{ background: "#d8cbb8" }}>
      <Nav />

      {/* Dark hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "#2c2c2c" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(44,44,44,0.55), rgba(41,38,34,0.85)), url(${hero.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-[1200px] w-full mx-auto px-6 text-center">
          <div className="mb-8">
            <OverlineFlank left={business.overlineLeft} right={business.overlineRight} />
          </div>
          <h1
            className="font-display"
            style={{ fontSize: "clamp(48px, 10vw, 115px)", lineHeight: 0.8, letterSpacing: "-0.04em", color: "#dfdad5" }}
          >
            {business.tagline}
          </h1>
        </div>
      </section>

      {/* Section opener — headline + rating */}
      <section className="py-16 px-6" style={{ background: "#d8cbb8" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <h2
            className="font-display"
            style={{ fontSize: "clamp(36px, 6vw, 69px)", lineHeight: 0.85, letterSpacing: "-0.03em", color: "#2c2c2c" }}
          >
            {business.name}
          </h2>
          <RatingWidget rating={rating} />
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6" style={{ background: "#dfdad5" }}>
        <div className="max-w-[560px] mx-auto text-center">
          <p style={{ fontSize: "15px", fontWeight: 500, color: "#2c2c2c", lineHeight: 1.4 }}>
            {business.intro}
          </p>
        </div>
      </section>

      {/* Highlights teaser */}
      <section className="py-20 px-6" style={{ background: "#d8cbb8" }}>
        <div className="max-w-[1200px] mx-auto">
          <h3
            className="font-display mb-12"
            style={{ fontSize: "clamp(28px, 4vw, 50px)", lineHeight: 0.9, letterSpacing: "-1.5px", color: "#2c2c2c" }}
          >
            What to expect
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <div key={i}>
                <div className="aspect-[4/3] mb-4 overflow-hidden" style={{ borderRadius: "3px" }}>
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <p style={{ fontSize: "15px", fontWeight: 700, color: "#2c2c2c", margin: 0 }}>{item.name}</p>
                <p style={{ fontSize: "14px", fontWeight: 500, color: "#615b53", marginTop: "4px" }}>{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About anchor — image overlay + extended story */}
      <section id="about" className="relative py-32 px-6 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(41,38,34,0.85), rgba(41,38,34,0.45)), url(${aboutImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-[1200px] mx-auto">
          <h3
            className="font-display"
            style={{ fontSize: "clamp(32px, 5vw, 69px)", lineHeight: 0.85, letterSpacing: "-2.42px", color: "#dfdad5", maxWidth: "560px" }}
          >
            About {business.name}
          </h3>
          <p style={{ fontSize: "15px", fontWeight: 500, color: "#d8cbb8", lineHeight: 1.4, maxWidth: "480px", marginTop: "20px" }}>
            {business.story}
          </p>
        </div>
      </section>

      {/* Extended story + secondary image */}
      <section className="py-16 px-6" style={{ background: "#d8cbb8" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
          <div>
            <p style={{ fontSize: "15px", fontWeight: 500, color: "#2c2c2c", lineHeight: 1.4 }}>
              {business.storyExtended}
            </p>
          </div>
          <div className="aspect-[4/3] overflow-hidden" style={{ borderRadius: "3px" }}>
            <img src={aboutImageSecondary} alt="Cafe table" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-20 px-6" style={{ background: "#dfdad5" }}>
        <div className="max-w-[760px] mx-auto">
          <div className="mb-10 text-center">
            <OverlineFlank left="Hours" right={business.address} color="#2c2c2c" />
          </div>
          <div className="flex flex-col gap-0">
            {business.hoursDetailed.map((row, i) => (
              <div key={i} className="flex justify-between py-4" style={{ borderTop: "1px solid #b6ab9c" }}>
                <span style={{ fontSize: "15px", fontWeight: 700, color: "#2c2c2c" }}>{row.day}</span>
                <span style={{ fontSize: "15px", fontWeight: 500, color: "#615b53" }}>{row.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery anchor */}
      <section id="gallery" className="py-20 px-6" style={{ background: "#d8cbb8" }}>
        <div className="max-w-[1200px] mx-auto">
          <h3
            className="font-display mb-10"
            style={{ fontSize: "clamp(28px, 4vw, 50px)", lineHeight: 0.9, letterSpacing: "-1.5px", color: "#2c2c2c" }}
          >
            Gallery
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gallery.map((img, i) => (
              <div key={i} className="overflow-hidden" style={{ borderRadius: "3px", aspectRatio: i % 3 === 0 ? "3/4" : "4/3" }}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-6" style={{ background: "#dfdad5" }}>
        <div className="max-w-[1200px] mx-auto">
          <h3
            className="font-display mb-10"
            style={{ fontSize: "clamp(28px, 4vw, 50px)", lineHeight: 0.9, letterSpacing: "-1.5px", color: "#2c2c2c" }}
          >
            What people say
          </h3>
          <div className="flex gap-5 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
            {reviews.map((r, i) => (
              <ReviewCard key={i} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* Visit anchor — contact + map + FAQ */}
      <section id="visit" className="py-20 px-6" style={{ background: "#d8cbb8" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-6">
              <OverlineFlank left="Come say hello" right={business.overlineRight} color="#2c2c2c" />
            </div>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(32px, 5vw, 65px)", lineHeight: 0.9, letterSpacing: "-0.03em", color: "#2c2c2c" }}
            >
              Visit us
            </h2>
            <div className="mt-8 flex flex-col gap-4">
              <Row icon="location" label={business.address} />
              <Row icon="phone" label={business.phone} />
              <Row icon="clock" label={business.hours} />
            </div>
            <div className="mt-8">
              <a href={`https://wa.me/${business.phone}`} target="_blank" rel="noopener noreferrer">
                <OutlinedButton as="button" color="#2c2c2c">
                  Message on WhatsApp
                </OutlinedButton>
              </a>
            </div>
          </div>
          <div
            className="overflow-hidden"
            style={{ borderRadius: "3px", border: "1px solid #b6ab9c", minHeight: "320px" }}
          >
            <iframe
              src={business.mapEmbedUrl}
              title="Location map"
              className="w-full h-full border-0"
              style={{ minHeight: "320px" }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: "#dfdad5" }}>
        <div className="max-w-[760px] mx-auto">
          <h2
            className="font-display mb-10 text-center"
            style={{ fontSize: "clamp(28px, 4.5vw, 50px)", lineHeight: 0.9, letterSpacing: "-1.5px", color: "#2c2c2c" }}
          >
            Frequently asked
          </h2>
          <div className="flex flex-col">
            {faq.map((item, i) => (
              <FaqItem key={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 px-6 text-center" style={{ background: "#2c2c2c" }}>
        <h3
          className="font-display"
          style={{ fontSize: "clamp(32px, 5vw, 65px)", lineHeight: 0.9, letterSpacing: "-0.03em", color: "#dfdad5" }}
        >
          Come sit a while
        </h3>
        <div className="mt-8">
          <a href={`https://wa.me/${business.phone}`} target="_blank" rel="noopener noreferrer">
            <OutlinedButton as="button" color="#d8cbb8">
              Message on WhatsApp
            </OutlinedButton>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
