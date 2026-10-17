import Starfield from "@/components/Starfield";

const categories = ["All stories", "Gaming", "Anime & Manga", "Movies & TV", "Technology", "Internet Culture"];

const stories = [
  { category: "ANIME & MANGA", time: "5 MIN READ", title: "The details that make an anime world feel alive", description: "From background storytelling to carefully built power systems, the little things can make a fictional world unforgettable.", tag: "Deep dive", shape: "art-one" },
  { category: "GAMING", time: "4 MIN READ", title: "What makes a game worth coming back to?", description: "The best games give players more than a destination. They build a reason to return, experiment, and discover.", tag: "Culture", shape: "art-two" },
  { category: "TECHNOLOGY", time: "6 MIN READ", title: "The next era of creativity is already taking shape", description: "AI tools are changing how people make things. The real advantage may belong to those who combine them with taste and originality.", tag: "Perspective", shape: "art-three" }
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="ambient-glow" aria-hidden="true" />
      <Starfield />
      <header className="topbar">
        <a className="brand" href="#" aria-label="LoreLuminion home">
          <img src="/logo.png" alt="LoreLuminion symbol" className="brand-mark" />
          <span className="brand-name">Lore<span>Luminion</span><small>ILLUMINATING EVERY STORY</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#latest">Discover</a><a href="#categories">Categories</a><a href="#about">About</a>
        </nav>
        <a className="top-cta" href="#latest">Explore stories <span>↗</span></a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot" /> YOUR SIGNAL FOR WHAT'S NEXT</div>
          <h1>Stories shape<br />the <span>worlds</span> we love.</h1>
          <p className="hero-description">From the games we play to the worlds we escape into. Discover the ideas, details, and culture behind what captures our imagination.</p>
          <div className="hero-actions">
            <a className="button-primary" href="#latest">Explore the latest <span>↗</span></a>
            <a className="button-quiet" href="#categories">Browse topics <span>↓</span></a>
          </div>
          <div className="hero-footnote"><span className="gold-line" /> CURIOUS MINDS. UNCOMMON STORIES.</div>
        </div>
        <div className="hero-art" aria-label="Abstract gold and black orbital artwork">
          <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" />
          <div className="core"><img src="/logo.png" alt="" /></div>
          <span className="orbit-label label-top">IDEAS IN ORBIT <i>01</i></span>
          <span className="orbit-label label-bottom"><i>✦</i> CULTURE · CURIOSITY · DISCOVERY</span>
          <div className="art-cross cross-one" /><div className="art-cross cross-two" />
        </div>
        <div className="hero-index"><span>01</span><span className="index-rule" /><span>05</span></div>
      </section>

      <section className="category-strip" id="categories">
        <div className="strip-label">EXPLORE THE UNIVERSE</div>
        <div className="category-links">{categories.map((category, i) => <a key={category} className={i === 0 ? "active" : ""} href="#latest">{category}{i === 0 && <span> ↗</span>}</a>)}</div>
      </section>

      <section className="latest-section" id="latest">
        <div className="section-heading">
          <div><div className="eyebrow"><span className="gold-square" /> THE EDITOR'S SIGNAL</div><h2>Worth your <span>attention.</span></h2></div>
          <a className="view-all" href="#latest">All stories <span>↗</span></a>
        </div>
        <div className="story-grid">
          {stories.map((story, i) => (
            <article className="story-card" key={story.title}>
              <div className={`story-art ${story.shape}`}><span className="art-number">0{i + 1}</span><span className="art-symbol">{i === 0 ? "✳" : i === 1 ? "◈" : "⌘"}</span><span className="art-caption">{story.tag.toUpperCase()} / LORELUMINION</span></div>
              <div className="story-meta"><span>{story.category}</span><span>{story.time}</span></div>
              <h3>{story.title}</h3><p>{story.description}</p>
              <a className="read-link" href="#about">Explore perspective <span>↗</span></a>
            </article>
          ))}
        </div>
        <div className="editor-note"><span className="note-icon">✦</span><div><strong>A universe of stories. One place to explore.</strong><p>Fresh perspectives across gaming, anime, film, technology, and the culture connecting them.</p></div><a href="#categories" aria-label="Browse categories">↗</a></div>
      </section>

      <section className="manifesto" id="about"><div className="manifesto-orb">L.</div><div><div className="eyebrow">THE LORELUMINION POINT OF VIEW</div><h2>Look closer.<br /><span>Find something extraordinary.</span></h2></div><p>We believe the best stories do more than entertain. They open doors to new ideas, unexpected connections, and whole new ways of seeing the world.</p></section>

      <footer className="footer"><a className="footer-brand" href="#"><img src="/logo.png" alt="" /> LoreLuminion</a><span>ILLUMINATING EVERY STORY.</span><span>© 2026 LORELUMINION</span></footer>
    </main>
  );
}
