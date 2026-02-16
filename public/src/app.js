import { useState, useEffect } from "react";

// ═══════════════════════════════════════════════════════════
// COLORS — Edit these to change the entire site palette
// ═══════════════════════════════════════════════════════════
const COLORS = {
  cream: "#FBF7F0",       // Main background
  warmWhite: "#F5EDE0",   // Card backgrounds
  bark: "#3D2B1F",        // Primary dark (headings, nav, buttons)
  leather: "#8B5E3C",     // Secondary text
  honey: "#D4A04A",       // Gold accent (929 could be this color)
  sage: "#7A8B6F",        // Subtle green accent
  rust: "#B85C38",        // CTA / price color
  linen: "#EDE4D3",       // Light accent
  parchment: "#E8DCC8",   // Borders
  softBlack: "#1A1A1A",   // Footer background
};

// ═══════════════════════════════════════════════════════════
// PRODUCTS — Add, remove, or edit products here
// Each product needs: id, name, category, price, desc, options, material, icon
// Icon must match a key in ICON_MAP below
// ═══════════════════════════════════════════════════════════
const PRODUCTS = [
  {
    id: 1,
    name: "Custom Pet Tag",
    category: "tags",
    price: 18.99,
    desc: "Your pet's name, your number, and whatever shape speaks to their personality. Because even their ID should have flair.",
    options: ["Bone", "Circle", "Heart", "Paw"],
    material: "Birch Wood / Acrylic",
    icon: "tag",
  },
  {
    id: 2,
    name: "Owner & Pet Matching Keychain Set",
    category: "keychains",
    price: 24.99,
    desc: "One for you, one for the collar. Matching silhouettes so everyone knows you're taken.",
    options: ["Dog", "Cat", "Rabbit", "Custom"],
    material: "Walnut Wood",
    icon: "keychain",
  },
  {
    id: 3,
    name: "Pet Portrait Sign",
    category: "decor",
    price: 34.99,
    desc: "Upload a photo. We engrave it onto solid wood. Your pet becomes wall art. As they should be.",
    options: ['5"x7"', '8"x10"', '11"x14"'],
    material: "Maple / Cherry",
    icon: "sign",
  },
  {
    id: 4,
    name: "Family Pet Silhouette Plaque",
    category: "decor",
    price: 42.99,
    desc: "Your whole crew — humans and animals — as custom silhouettes. Add names, a date, or whatever makes your family, yours.",
    options: ["Horizontal", "Vertical"],
    material: "Reclaimed Barnwood",
    icon: "plaque",
  },
  {
    id: 5,
    name: "Paw & Hand Print Ornament",
    category: "keychains",
    price: 15.99,
    desc: "Your handprint meets their paw print. Sentimental? Absolutely. Worth it? Obviously.",
    options: ["Circle", "Star", "Heart"],
    material: "Birch Wood",
    icon: "paw",
  },
  {
    id: 6,
    name: "Pet Memorial Marker",
    category: "decor",
    price: 39.99,
    desc: "For the ones who crossed the rainbow bridge. Name, dates, and a message — engraved with the care they deserve.",
    options: ["Stake", "Flat", "Standing"],
    material: "Slate / Hardwood",
    icon: "memorial",
  },
  {
    id: 7,
    name: "Custom Pet Coaster Set",
    category: "decor",
    price: 22.99,
    desc: "A set of four coasters with your pet's face on them. Finally, a reason to use a coaster.",
    options: ["Round", "Square", "Hexagon"],
    material: "Cork / Birch",
    icon: "coaster",
  },
];

// ═══════════════════════════════════════════════════════════
// DOODLE PRODUCT ICONS — outline-style drawings for products
// ═══════════════════════════════════════════════════════════
function DoodleTag({ size = 80, color = COLORS.bark }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path d="M30 20 L70 20 C75 20 78 23 78 28 L78 75 C78 78 76 80 73 82 L50 95 L27 82 C24 80 22 78 22 75 L22 28 C22 23 25 20 30 20Z" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="50" cy="38" r="8" stroke={color} strokeWidth="2" fill="none"/>
      <path d="M38 55 L62 55" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M42 63 L58 63" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="50" cy="20" r="4" stroke={color} strokeWidth="2" fill="none"/>
    </svg>
  );
}

function DoodleKeychain({ size = 80, color = COLORS.bark }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="40" cy="38" r="18" stroke={color} strokeWidth="2.5" fill="none"/>
      <circle cx="40" cy="38" r="8" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M54 48 L72 66" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M72 66 L78 60" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M68 70 L74 64" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M72 66 L72 80 L66 80" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <ellipse cx="40" cy="40" rx="6" ry="5" stroke={color} strokeWidth="1.2" fill="none"/>
    </svg>
  );
}

function DoodleSign({ size = 80, color = COLORS.bark }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect x="15" y="15" width="70" height="55" rx="3" stroke={color} strokeWidth="2.5" fill="none"/>
      <rect x="22" y="22" width="56" height="41" rx="1" stroke={color} strokeWidth="1.2" fill="none"/>
      <circle cx="50" cy="36" r="8" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M44 30 L42 26" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M56 30 L58 26" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M36 52 L64 52" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M40 57 L60 57" stroke={color} strokeWidth="1" strokeLinecap="round"/>
      <path d="M38 15 L50 8 L62 15" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

function DoodlePlaque({ size = 80, color = COLORS.bark }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path d="M15 25 C15 20 20 15 25 15 L75 15 C80 15 85 20 85 25 L85 70 C85 75 80 80 75 80 L25 80 C20 80 15 75 15 70Z" stroke={color} strokeWidth="2.5" fill="none"/>
      <circle cx="35" cy="40" r="5" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M35 45 L35 58" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M30 52 L40 52" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="55" cy="44" r="4" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M55 48 L55 56 L52 62" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M55 56 L58 62" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="70" cy="46" r="3" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M70 49 L70 58" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M28 70 L72 70" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function DoodlePaw({ size = 80, color = COLORS.bark }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="15" r="8" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M50 8 L50 5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <ellipse cx="50" cy="55" rx="12" ry="10" stroke={color} strokeWidth="2" fill="none"/>
      <circle cx="38" cy="40" r="5" stroke={color} strokeWidth="1.5" fill="none"/>
      <circle cx="62" cy="40" r="5" stroke={color} strokeWidth="1.5" fill="none"/>
      <circle cx="42" cy="30" r="4" stroke={color} strokeWidth="1.5" fill="none"/>
      <circle cx="58" cy="30" r="4" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M35 80 L65 80" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function DoodleMemorial({ size = 80, color = COLORS.bark }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path d="M50 85 C50 85 15 60 15 38 C15 25 25 18 35 18 C42 18 48 22 50 28 C52 22 58 18 65 18 C75 18 85 25 85 38 C85 60 50 85 50 85Z" stroke={color} strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
      <ellipse cx="50" cy="52" rx="7" ry="5" stroke={color} strokeWidth="1.5" fill="none"/>
      <circle cx="42" cy="44" r="3" stroke={color} strokeWidth="1.2" fill="none"/>
      <circle cx="58" cy="44" r="3" stroke={color} strokeWidth="1.2" fill="none"/>
      <circle cx="45" cy="37" r="2.5" stroke={color} strokeWidth="1.2" fill="none"/>
      <circle cx="55" cy="37" r="2.5" stroke={color} strokeWidth="1.2" fill="none"/>
      <path d="M50 12 L52 17 L57 17 L53 20 L55 25 L50 22 L45 25 L47 20 L43 17 L48 17Z" stroke={color} strokeWidth="1" fill="none"/>
    </svg>
  );
}

function DoodleCoaster({ size = 80, color = COLORS.bark }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="38" stroke={color} strokeWidth="2.5" fill="none"/>
      <circle cx="50" cy="50" r="30" stroke={color} strokeWidth="1.2" fill="none" strokeDasharray="4 3"/>
      <ellipse cx="50" cy="54" rx="7" ry="5" stroke={color} strokeWidth="1.5" fill="none"/>
      <circle cx="43" cy="46" r="3" stroke={color} strokeWidth="1.2" fill="none"/>
      <circle cx="57" cy="46" r="3" stroke={color} strokeWidth="1.2" fill="none"/>
      <circle cx="46" cy="39" r="2.5" stroke={color} strokeWidth="1.2" fill="none"/>
      <circle cx="54" cy="39" r="2.5" stroke={color} strokeWidth="1.2" fill="none"/>
    </svg>
  );
}

const ICON_MAP = {
  tag: DoodleTag,
  keychain: DoodleKeychain,
  sign: DoodleSign,
  plaque: DoodlePlaque,
  paw: DoodlePaw,
  memorial: DoodleMemorial,
  coaster: DoodleCoaster,
};

// ═══════════════════════════════════════════════════════════
// GRAIN TEXTURE OVERLAY — subtle paper feel
// ═══════════════════════════════════════════════════════════
function GrainOverlay() {
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
      pointerEvents: "none", zIndex: 9999, opacity: 0.03,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }}/>
  );
}

// ═══════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════
function Nav({ currentPage, setCurrentPage, cartCount }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const linkStyle = (active) => ({
    background: "none", border: "none", cursor: "pointer",
    fontFamily: "'Cormorant Garamond', serif", fontSize: "15px",
    letterSpacing: "1.5px", textTransform: "uppercase",
    color: active ? COLORS.rust : COLORS.bark,
    borderBottom: active ? `2px solid ${COLORS.rust}` : "2px solid transparent",
    paddingBottom: "4px", transition: "all 0.3s ease",
  });

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? "10px 32px" : "18px 32px",
      background: scrolled ? "rgba(251,247,240,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? `1px solid ${COLORS.parchment}` : "none",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      transition: "all 0.4s ease",
    }}>
      <button onClick={() => setCurrentPage("home")} style={{
        background: "none", border: "none", cursor: "pointer",
        display: "flex", alignItems: "center", gap: "8px",
      }}>
        {/* ── LOGO PLACEHOLDER: Replace this paw with your own logo image ── */}
        <span style={{ fontSize: "28px" }}>🐾</span>
        <div style={{ textAlign: "left" }}>
          <div style={{
            fontFamily: "'Playfair Display', serif", fontSize: "20px",
            fontWeight: 700, color: COLORS.bark, lineHeight: 1,
          }}>The 929 Line</div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: "10px",
            letterSpacing: "3px", textTransform: "uppercase",
            color: COLORS.leather, marginTop: "2px",
          }}>Your animals matter more</div>
        </div>
      </button>

      <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
        {["home", "shop", "about", "custom"].map((page) => (
          <button key={page} onClick={() => setCurrentPage(page)} style={linkStyle(currentPage === page)}>
            {page === "custom" ? "Customize" : page}
          </button>
        ))}
        <button onClick={() => setCurrentPage("cart")} style={{
          ...linkStyle(currentPage === "cart"), position: "relative",
        }}>
          Cart
          {cartCount > 0 && (
            <span style={{
              position: "absolute", top: "-8px", right: "-14px",
              background: COLORS.rust, color: "white", fontSize: "10px",
              fontFamily: "'DM Sans', sans-serif", width: "18px", height: "18px",
              borderRadius: "50%", display: "flex", alignItems: "center",
              justifyContent: "center",
            }}>{cartCount}</span>
          )}
        </button>
      </div>
    </nav>
  );
}

// ═══════════════════════════════════════════════════════════
// HOME PAGE
// ═══════════════════════════════════════════════════════════
function HomePage({ setCurrentPage }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <div>
      {/* ── HERO SECTION ── */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center", textAlign: "center",
        padding: "120px 32px 80px",
        background: `linear-gradient(175deg, ${COLORS.cream} 0%, ${COLORS.warmWhite} 40%, ${COLORS.linen} 100%)`,
        position: "relative", overflow: "hidden",
      }}>
        {/* Decorative background circles */}
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "400px", height: "400px", borderRadius: "50%", border: `1px solid ${COLORS.parchment}`, opacity: 0.5 }}/>
        <div style={{ position: "absolute", bottom: "-50px", left: "-80px", width: "300px", height: "300px", borderRadius: "50%", background: `radial-gradient(circle, ${COLORS.honey}15, transparent)` }}/>

        {/* ── LOGO AREA: Replace this placeholder with your actual logo image ── */}
        {/* Example: <img src="/your-logo.png" alt="The 929 Line" style={{ width: 200 }} /> */}
        <div style={{
          fontSize: "72px", marginBottom: "8px",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(30px)",
          transition: "all 1s ease",
        }}>🐾</div>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 700,
          color: COLORS.bark, marginTop: "8px", lineHeight: 1,
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(30px)",
          transition: "all 1s ease 0.2s",
        }}>The 929 Line</h1>

        <div style={{
          width: "60px", height: "2px", background: COLORS.honey,
          margin: "24px auto",
          opacity: loaded ? 1 : 0, transition: "all 1s ease 0.4s",
        }}/>

        {/* ── TAGLINE: Edit this text to change the main tagline ── */}
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(18px, 2.5vw, 26px)", color: COLORS.leather,
          maxWidth: "600px", lineHeight: 1.6, fontStyle: "italic",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(20px)",
          transition: "all 1s ease 0.5s",
        }}>Designed to take your money, but your animals will love it.</p>

        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "13px",
          letterSpacing: "2.5px", textTransform: "uppercase",
          color: COLORS.sage, marginTop: "16px",
          opacity: loaded ? 1 : 0, transition: "all 1s ease 0.7s",
        }}>Made with love from the 929</p>

        <button onClick={() => setCurrentPage("shop")} style={{
          marginTop: "40px", padding: "16px 48px",
          fontFamily: "'Cormorant Garamond', serif", fontSize: "16px",
          letterSpacing: "2px", textTransform: "uppercase",
          background: COLORS.bark, color: COLORS.cream, border: "none",
          cursor: "pointer", transition: "all 0.3s ease",
          opacity: loaded ? 1 : 0,
        }}
          onMouseOver={(e) => e.target.style.background = COLORS.rust}
          onMouseOut={(e) => e.target.style.background = COLORS.bark}
        >Shop the Collection</button>
      </section>

      {/* ── VALUES STRIP ── */}
      <section style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
        background: COLORS.bark, color: COLORS.cream,
      }}>
        {[
          { icon: "✦", title: "Handcrafted", text: "Every piece engraved by hand in our home studio. Mass production? We don't know her." },
          { icon: "🐾", title: "Pet-First", text: "Designed by people whose animals run the household. We get it." },
          { icon: "♻️", title: "Thoughtful", text: "Sustainable materials, small batches, and zero regrets." },
        ].map((v, i) => (
          <div key={i} style={{
            padding: "48px 32px", textAlign: "center",
            borderRight: i < 2 ? `1px solid ${COLORS.leather}40` : "none",
          }}>
            <div style={{ fontSize: "28px", marginBottom: "12px" }}>{v.icon}</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 600, marginBottom: "8px" }}>{v.title}</h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", lineHeight: 1.6, opacity: 0.8 }}>{v.text}</p>
          </div>
        ))}
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section style={{ padding: "80px 32px", background: COLORS.cream, textAlign: "center" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", color: COLORS.sage, marginBottom: "8px" }}>Our collection</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "40px", color: COLORS.bark, marginBottom: "12px" }}>Your animals matter more</h2>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontStyle: "italic", color: COLORS.leather, marginBottom: "48px" }}>...and your wallet already knows it</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", maxWidth: "1000px", margin: "0 auto" }}>
          {PRODUCTS.slice(0, 3).map((p) => {
            const IC = ICON_MAP[p.icon];
            return (
              <div key={p.id} onClick={() => setCurrentPage("shop")} style={{
                cursor: "pointer", background: COLORS.warmWhite,
                padding: "40px 24px", textAlign: "center",
                transition: "all 0.3s ease", border: `1px solid ${COLORS.parchment}`,
              }}
                onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(61,43,31,0.1)"; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
                  <IC size={70} color={COLORS.leather} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: COLORS.bark, marginBottom: "8px" }}>{p.name}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: COLORS.leather, lineHeight: 1.6, marginBottom: "16px" }}>{p.desc}</p>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", color: COLORS.rust, fontWeight: 600 }}>${p.price}</span>
              </div>
            );
          })}
        </div>

        <button onClick={() => setCurrentPage("shop")} style={{
          marginTop: "48px", padding: "14px 40px",
          fontFamily: "'Cormorant Garamond', serif", fontSize: "15px",
          letterSpacing: "2px", textTransform: "uppercase",
          background: "transparent", color: COLORS.bark,
          border: `1.5px solid ${COLORS.bark}`, cursor: "pointer",
          transition: "all 0.3s ease",
        }}
          onMouseOver={(e) => { e.target.style.background = COLORS.bark; e.target.style.color = COLORS.cream; }}
          onMouseOut={(e) => { e.target.style.background = "transparent"; e.target.style.color = COLORS.bark; }}
        >View All Products</button>
      </section>

      {/* ── STORY TEASER ── */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "500px" }}>
        <div style={{
          background: `linear-gradient(135deg, ${COLORS.sage}30, ${COLORS.linen})`,
          display: "flex", flexDirection: "column", justifyContent: "center",
          alignItems: "center", padding: "60px",
        }}>
          {/* ── Replace with a photo of Loki or your products ── */}
          <div style={{ fontSize: "120px", opacity: 0.8 }}>🐾</div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "16px", fontStyle: "italic", color: COLORS.sage, marginTop: "20px" }}>Loki says buy something.</p>
        </div>
        <div style={{
          background: COLORS.warmWhite, display: "flex", flexDirection: "column",
          justifyContent: "center", padding: "60px",
        }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", color: COLORS.honey, marginBottom: "12px" }}>Our Story</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", color: COLORS.bark, marginBottom: "20px", lineHeight: 1.2 }}>
            Born at home.<br/>Made with heart.<br/>Funded by impulse purchases.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: COLORS.leather, lineHeight: 1.8, marginBottom: "28px" }}>
            Patsy and Sean — animal enthusiasts with more pets than sense — decided it would be a great idea to arts and crafts together. One laser engraver and a lot of trial-and-error later, The 929 Line was born.
          </p>
          <button onClick={() => setCurrentPage("about")} style={{
            alignSelf: "flex-start", padding: "12px 32px",
            fontFamily: "'Cormorant Garamond', serif", fontSize: "14px",
            letterSpacing: "2px", textTransform: "uppercase",
            background: "transparent", color: COLORS.bark,
            border: `1.5px solid ${COLORS.bark}`, cursor: "pointer",
            transition: "all 0.3s ease",
          }}
            onMouseOver={(e) => { e.target.style.background = COLORS.bark; e.target.style.color = COLORS.cream; }}
            onMouseOut={(e) => { e.target.style.background = "transparent"; e.target.style.color = COLORS.bark; }}
          >Read Our Story</button>
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SHOP PAGE
// ═══════════════════════════════════════════════════════════
function ShopPage({ addToCart }) {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section style={{ padding: "140px 32px 80px", background: COLORS.cream, minHeight: "100vh" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "44px", color: COLORS.bark, marginBottom: "8px" }}>The Collection</h1>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontStyle: "italic", color: COLORS.leather, marginBottom: "24px" }}>At the 929 — your animals matter more</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            {["all", "tags", "keychains", "decor"].map((f) => (
              <button key={f} onClick={() => setFilter(f)} style={{
                padding: "8px 20px", fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase",
                background: filter === f ? COLORS.bark : "transparent",
                color: filter === f ? COLORS.cream : COLORS.leather,
                border: `1px solid ${filter === f ? COLORS.bark : COLORS.parchment}`,
                cursor: "pointer", transition: "all 0.3s ease",
              }}>
                {f === "all" ? "All" : f === "tags" ? "Pet Tags" : f === "keychains" ? "Keychains" : "Home Decor"}
              </button>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {filtered.map((product) => <ProductCard key={product.id} product={product} addToCart={addToCart} />)}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, addToCart }) {
  const [selectedOption, setSelectedOption] = useState(product.options[0]);
  const [petName, setPetName] = useState("");
  const [hovered, setHovered] = useState(false);
  const IC = ICON_MAP[product.icon];

  return (
    <div style={{
      background: COLORS.warmWhite, border: `1px solid ${COLORS.parchment}`,
      padding: "32px 24px", display: "flex", flexDirection: "column",
      transition: "all 0.3s ease",
      transform: hovered ? "translateY(-4px)" : "translateY(0)",
      boxShadow: hovered ? "0 12px 40px rgba(61,43,31,0.08)" : "none",
    }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div style={{ display: "flex", justifyContent: "center", padding: "20px", background: `linear-gradient(135deg, ${COLORS.linen}, ${COLORS.cream})`, marginBottom: "16px" }}>
        <IC size={70} color={COLORS.leather} />
      </div>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: COLORS.bark, marginBottom: "4px" }}>{product.name}</h3>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color: COLORS.sage, marginBottom: "12px" }}>{product.material}</p>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: COLORS.leather, lineHeight: 1.7, flex: 1, marginBottom: "16px" }}>{product.desc}</p>

      <div style={{ marginBottom: "12px" }}>
        <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color: COLORS.leather, display: "block", marginBottom: "6px" }}>Style</label>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {product.options.map((opt) => (
            <button key={opt} onClick={() => setSelectedOption(opt)} style={{
              padding: "6px 14px", fontFamily: "'DM Sans', sans-serif", fontSize: "12px",
              background: selectedOption === opt ? COLORS.bark : "transparent",
              color: selectedOption === opt ? COLORS.cream : COLORS.bark,
              border: `1px solid ${COLORS.bark}`, cursor: "pointer",
              transition: "all 0.2s ease",
            }}>{opt}</button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color: COLORS.leather, display: "block", marginBottom: "6px" }}>Pet's Name</label>
        <input type="text" value={petName} onChange={(e) => setPetName(e.target.value)} placeholder="e.g. Loki" style={{
          width: "100%", padding: "10px 14px", fontFamily: "'DM Sans', sans-serif",
          fontSize: "14px", border: `1px solid ${COLORS.parchment}`,
          background: COLORS.cream, color: COLORS.bark, outline: "none", boxSizing: "border-box",
        }}/>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px", fontWeight: 600, color: COLORS.rust }}>${product.price}</span>
        <button onClick={() => addToCart({ ...product, selectedOption, petName: petName || "Not specified" })} style={{
          padding: "10px 24px", fontFamily: "'DM Sans', sans-serif", fontSize: "12px",
          letterSpacing: "1px", textTransform: "uppercase",
          background: COLORS.rust, color: "white", border: "none",
          cursor: "pointer", transition: "all 0.3s ease",
        }}
          onMouseOver={(e) => e.target.style.background = COLORS.bark}
          onMouseOut={(e) => e.target.style.background = COLORS.rust}
        >Add to Cart</button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// ABOUT PAGE
// ═══════════════════════════════════════════════════════════
function AboutPage() {
  return (
    <section style={{ padding: "140px 32px 80px", background: COLORS.cream, minHeight: "100vh" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ fontSize: "64px" }}>🐾</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "48px", color: COLORS.bark, marginTop: "12px", marginBottom: "12px" }}>Our Story</h1>
          <div style={{ width: "50px", height: "2px", background: COLORS.honey, margin: "0 auto" }}/>
        </div>

        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: COLORS.leather, lineHeight: 2 }}>
          <p style={{ marginBottom: "24px" }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "48px", float: "left", lineHeight: 0.8, marginRight: "8px", marginTop: "4px", color: COLORS.bark }}>P</span>
            atsy and Sean are animal enthusiasts who live together at the 929 with more pets than most people have houseplants. One day, in a moment of questionable judgment, they decided it would be a great idea to arts and crafts together.
          </p>

          <p style={{ marginBottom: "24px" }}>
            Here's the thing: Sean can't arts and crafts. He's a numbers guy — give him a spreadsheet and he's in heaven, give him a glue gun and someone's calling the fire department. Patsy, on the other hand, can't reconcile a bank account to save her life, but she can turn a chunk of wood into something you'd cry over. Together, they make approximately one functional human being.
          </p>

          <div style={{ background: COLORS.warmWhite, border: `1px solid ${COLORS.parchment}`, padding: "32px 40px", margin: "40px 0", textAlign: "center" }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontStyle: "italic", color: COLORS.bark, lineHeight: 1.6 }}>
              "Patsy makes the art. Sean does the math.<br/>The animals supervise.<br/>It works out."
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: COLORS.sage, marginTop: "16px" }}>— The 929 business model</p>
          </div>

          <p style={{ marginBottom: "24px" }}>
            It all started because of Loki — a former racing greyhound rescued through a prison greyhound program. He came to them with the longest legs, the gentlest spirit, and a talent for taking up an entire couch. When they made his first custom tag, it felt like something clicked. Not the laser (well, that too) — but the idea that the bond between people and their animals deserved something more personal than what you grab off a rack at the pet store.
          </p>

          <p style={{ marginBottom: "24px" }}>
            So they invested in an ACMER K1 laser engraver, cleared off the kitchen table (sorry, dinner), and started making things — tags, keychains, signs, coasters, memorial markers. Every single piece is engraved by hand in their home studio. Nothing is mass-produced. Nothing ships without being inspected by at least three animals first.
          </p>

          <p>
            The 929 Line exists because your animals matter more. More than your furniture. More than your schedule. More than whatever that couch used to look like before they got to it. We're here to celebrate that — one custom piece at a time.
          </p>
        </div>

        {/* ── THE CREW — Do not change per Sean's request ── */}
        <div style={{ marginTop: "60px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", color: COLORS.bark, marginBottom: "32px" }}>The Crew at 929</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            {[
              { name: "Sean", role: "Co-Founder & Engraver", emoji: "🧑‍💻", desc: "Numbers guy by day, craftsman by night. Believes every pet deserves a name tag as unique as they are." },
              { name: "Patsy McDonald", role: "Co-Founder & Designer", emoji: "🎨", desc: "The creative eye behind every design. If it looks gorgeous, Patsy touched it." },
              { name: "Loki", role: "Chief Inspiration Officer", emoji: "🐕", desc: "Prison greyhound rescue. Fast sleeper. Professional couch model. The reason this all started." },
              { name: "The Rest of the Pack", role: "Quality Assurance", emoji: "🐾", desc: "3 more dogs and 4 cats who test every product by trying to knock it off the table." },
            ].map((m, i) => (
              <div key={i} style={{ background: COLORS.warmWhite, border: `1px solid ${COLORS.parchment}`, padding: "32px", textAlign: "center" }}>
                <div style={{ fontSize: "40px", marginBottom: "12px" }}>{m.emoji}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: COLORS.bark, marginBottom: "4px" }}>{m.name}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", color: COLORS.rust, marginBottom: "12px" }}>{m.role}</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: COLORS.leather, lineHeight: 1.6 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// CUSTOM ORDER PAGE
// ═══════════════════════════════════════════════════════════
function CustomPage() {
  const [form, setForm] = useState({ name: "", email: "", petName: "", petType: "Dog", description: "", budget: "$25-50" });
  const [submitted, setSubmitted] = useState(false);

  const inputStyle = {
    width: "100%", padding: "12px 16px", fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px", border: `1px solid ${COLORS.parchment}`,
    background: COLORS.cream, color: COLORS.bark, outline: "none", boxSizing: "border-box",
  };
  const labelStyle = {
    fontFamily: "'DM Sans', sans-serif", fontSize: "11px",
    letterSpacing: "1.5px", textTransform: "uppercase",
    color: COLORS.leather, display: "block", marginBottom: "6px",
  };

  if (submitted) {
    return (
      <section style={{ padding: "200px 32px", background: COLORS.cream, minHeight: "100vh", textAlign: "center" }}>
        <span style={{ fontSize: "64px" }}>🐾</span>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "40px", color: COLORS.bark, marginBottom: "16px", marginTop: "24px" }}>Request Received!</h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: COLORS.leather, maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
          We'll review your custom order and get back to you within 48 hours. Loki has been notified and is very excited.
        </p>
      </section>
    );
  }

  return (
    <section style={{ padding: "140px 32px 80px", background: COLORS.cream, minHeight: "100vh" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "44px", color: COLORS.bark, marginBottom: "12px" }}>Custom Orders</h1>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontStyle: "italic", color: COLORS.leather }}>Dream it up. We'll engrave it. Your wallet will forgive you eventually.</p>
        </div>
        <div style={{ background: COLORS.warmWhite, border: `1px solid ${COLORS.parchment}`, padding: "40px" }}>
          <div style={{ display: "grid", gap: "20px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div><label style={labelStyle}>Your Name</label><input style={inputStyle} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Sean"/></div>
              <div><label style={labelStyle}>Email</label><input style={inputStyle} type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="hello@the929line.com"/></div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div><label style={labelStyle}>Pet's Name</label><input style={inputStyle} value={form.petName} onChange={(e) => setForm({ ...form, petName: e.target.value })} placeholder="Loki"/></div>
              <div><label style={labelStyle}>Pet Type</label><select style={inputStyle} value={form.petType} onChange={(e) => setForm({ ...form, petType: e.target.value })}>{["Dog", "Cat", "Rabbit", "Bird", "Reptile", "Other"].map((t) => <option key={t}>{t}</option>)}</select></div>
            </div>
            <div><label style={labelStyle}>Budget Range</label><select style={inputStyle} value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}>{["Under $25", "$25-50", "$50-100", "$100+", "Not sure"].map((b) => <option key={b}>{b}</option>)}</select></div>
            <div>
              <label style={labelStyle}>Tell us about your idea</label>
              <textarea style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Describe what you're dreaming of — matching owner/pet sets, a memorial piece, a family plaque... we've heard it all."/>
            </div>
            <div>
              <label style={labelStyle}>Upload a photo of your pet (optional)</label>
              <div style={{ border: `2px dashed ${COLORS.parchment}`, padding: "32px", textAlign: "center", background: COLORS.cream, cursor: "pointer" }}>
                <div style={{ fontSize: "32px", marginBottom: "8px" }}>📸</div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: COLORS.leather }}>Click to upload or drag & drop</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: COLORS.sage, marginTop: "4px" }}>JPG, PNG up to 10MB</p>
              </div>
            </div>
            <button onClick={() => setSubmitted(true)} style={{
              padding: "16px", fontFamily: "'Cormorant Garamond', serif",
              fontSize: "16px", letterSpacing: "2px", textTransform: "uppercase",
              background: COLORS.bark, color: COLORS.cream, border: "none",
              cursor: "pointer", transition: "all 0.3s ease", marginTop: "8px",
            }}
              onMouseOver={(e) => e.target.style.background = COLORS.rust}
              onMouseOut={(e) => e.target.style.background = COLORS.bark}
            >Submit Custom Request</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// CART PAGE
// ═══════════════════════════════════════════════════════════
function CartPage({ cart, removeFromCart, setCurrentPage }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <section style={{ padding: "200px 32px", background: COLORS.cream, minHeight: "100vh", textAlign: "center" }}>
        <span style={{ fontSize: "64px" }}>🛒</span>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", color: COLORS.bark, marginBottom: "16px", marginTop: "24px" }}>Your cart is empty</h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: COLORS.leather, marginBottom: "32px" }}>Your animals are judging you. Go buy them something.</p>
        <button onClick={() => setCurrentPage("shop")} style={{
          padding: "14px 40px", fontFamily: "'Cormorant Garamond', serif",
          fontSize: "15px", letterSpacing: "2px", textTransform: "uppercase",
          background: COLORS.bark, color: COLORS.cream, border: "none", cursor: "pointer",
        }}>Browse Products</button>
      </section>
    );
  }

  return (
    <section style={{ padding: "140px 32px 80px", background: COLORS.cream, minHeight: "100vh" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "40px", color: COLORS.bark, marginBottom: "40px", textAlign: "center" }}>Your Cart</h1>
        {cart.map((item, i) => {
          const IC = ICON_MAP[item.icon] || DoodleTag;
          return (
            <div key={i} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "20px 24px", background: COLORS.warmWhite,
              border: `1px solid ${COLORS.parchment}`, marginBottom: "12px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <IC size={40} color={COLORS.leather} />
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", color: COLORS.bark }}>{item.name}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: COLORS.leather }}>{item.selectedOption} · Pet: {item.petName}</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: COLORS.rust, fontWeight: 600 }}>${item.price}</span>
                <button onClick={() => removeFromCart(i)} style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontSize: "18px", color: COLORS.leather, opacity: 0.5,
                  transition: "opacity 0.2s",
                }}
                  onMouseOver={(e) => e.target.style.opacity = 1}
                  onMouseOut={(e) => e.target.style.opacity = 0.5}
                >✕</button>
              </div>
            </div>
          );
        })}

        <div style={{ borderTop: `2px solid ${COLORS.bark}`, marginTop: "24px", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", color: COLORS.bark }}>Total</span>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", color: COLORS.rust, fontWeight: 700 }}>${total.toFixed(2)}</span>
        </div>

        <button onClick={() => alert("Stripe Checkout — Total: $" + total.toFixed(2))} style={{
          width: "100%", padding: "18px", marginTop: "32px",
          fontFamily: "'Cormorant Garamond', serif", fontSize: "17px",
          letterSpacing: "2px", textTransform: "uppercase",
          background: COLORS.bark, color: COLORS.cream, border: "none",
          cursor: "pointer", transition: "all 0.3s ease",
        }}
          onMouseOver={(e) => e.target.style.background = COLORS.rust}
          onMouseOut={(e) => e.target.style.background = COLORS.bark}
        >Checkout with Stripe →</button>

        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: COLORS.sage, textAlign: "center", marginTop: "16px" }}>
          🔒 Secure checkout powered by Stripe · Free shipping on orders over $50
        </p>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// FOOTER
// ═══════════════════════════════════════════════════════════
function Footer() {
  return (
    <footer style={{ background: COLORS.softBlack, color: COLORS.parchment, padding: "60px 32px 40px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "48px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span style={{ fontSize: "28px" }}>🐾</span>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: COLORS.cream }}>The 929 Line</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: COLORS.honey }}>Indianapolis, IN</div>
            </div>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", lineHeight: 1.7, opacity: 0.7, maxWidth: "350px" }}>
            Handcrafted keepsakes celebrating the bond between people and their pets. At the 929 — your animals matter more.
          </p>
        </div>
        <div>
          <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: COLORS.honey, marginBottom: "16px" }}>Shop</h4>
          {["Pet Tags", "Keychains", "Coasters", "Home Decor", "Custom Orders"].map((l) => (
            <p key={l} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", marginBottom: "8px", opacity: 0.7, cursor: "pointer" }}>{l}</p>
          ))}
        </div>
        <div>
          <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: COLORS.honey, marginBottom: "16px" }}>Connect</h4>
          {["Instagram", "Facebook", "Email Us", "About Us"].map((l) => (
            <p key={l} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", marginBottom: "8px", opacity: 0.7, cursor: "pointer" }}>{l}</p>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: "1000px", margin: "40px auto 0", paddingTop: "24px", borderTop: `1px solid ${COLORS.leather}30`, display: "flex", justifyContent: "space-between", fontFamily: "'DM Sans', sans-serif", fontSize: "11px", opacity: 0.5 }}>
        <span>© 2026 The 929 Line. All rights reserved.</span>
        <span>Made with ♥ in Indianapolis</span>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════
// APP — Main router
// ═══════════════════════════════════════════════════════════
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart([...cart, item]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [currentPage]);
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div style={{ background: COLORS.cream, minHeight: "100vh" }}>
      <GrainOverlay />
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} cartCount={cart.length} />
      {currentPage === "home" && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === "shop" && <ShopPage addToCart={addToCart} />}
      {currentPage === "about" && <AboutPage />}
      {currentPage === "custom" && <CustomPage />}
      {currentPage === "cart" && <CartPage cart={cart} removeFromCart={removeFromCart} setCurrentPage={setCurrentPage} />}
      <Footer />
    </div>
  );
}
