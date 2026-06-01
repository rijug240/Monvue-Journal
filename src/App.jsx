
import React, { useMemo, useState } from "react";
import { Search, Clock, Tag, Heart, Copy, Share2, MessageCircle, ArrowLeft, Menu, X } from "lucide-react";

const starterArticles = [
  {
    id: 1,
    category: "Beauty & Style",
    title: "The Quiet Luxury of Brown Eyes",
    subtitle: "Why the most sophisticated lens trend is no longer about changing how you look.",
    readTime: "7 min read",
    featuredLens: "Stone Brown",
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1600&auto=format&fit=crop",
    body: [
      { type: "heading", text: "The shift from transformation to enhancement" },
      { type: "paragraph", text: "There was a time when coloured lenses were meant to be noticed immediately. Blue lenses. Grey lenses. Patterns designed to transform the entire face. The intention was clear: to create a visible change, almost like a beauty accessory announcing itself before anything else." },
      { type: "paragraph", text: "But beauty rarely stands still. The most interesting movement today is quieter. It is not about becoming someone else; it is about looking more considered, more awake, more polished, while still recognisably yourself. The new question is not “Can people tell I am wearing lenses?” It is “Can people tell why I look fresher today?”" },
      { type: "highlight", text: "The most premium beauty choices today are often the least obvious ones." },
      { type: "paragraph", text: "This is exactly why brown lenses have become so important. Brown does not fight the face. It sits close to what already exists for most Indian wearers: darker irises, warmer undertones, deeper contrast around the eyes and naturally expressive features. A good brown lens does not need to shout to be effective." },
      { type: "heading", text: "Why brown works so naturally on Indian eyes" },
      { type: "paragraph", text: "Brown is sometimes dismissed as a safe colour. In reality, it is one of the most sophisticated shades because the margin for error is small. Too flat, and it disappears. Too opaque, and it looks artificial. Too light, and it can create a harsh contrast against darker eyes. The best brown lenses are built through gradients, soft patterning and gentle definition." },
      { type: "paragraph", text: "On melanin-rich skin tones, brown has a special advantage. It complements rather than competes. It brings warmth to the eye area, creates a softer gaze and allows the rest of the face — skin, brows, lips, hair — to remain in harmony. That is what makes it wearable in office light, daylight, evening light and photographs." },
      { type: "quote", text: "The best cosmetic lens does not create a new identity. It reveals a version of yourself that already existed." },
      { type: "heading", text: "The difference between looking better and looking different" },
      { type: "paragraph", text: "This is the real distinction. A dramatic lens can make you look different. A carefully designed lens can make you look better. One attracts attention to the product. The other improves the whole face. For a beauty brand like Monvue, the second outcome is far more interesting." },
      { type: "paragraph", text: "A natural brown lens should add dimension around the iris, softly define the limbal area and give the eye more depth without making the viewer pause for the wrong reason. Ideally, the reaction should not be “Nice lenses.” It should be “You look really good today.”" },
      { type: "link", text: "Explore natural-looking brown lenses", href: "https://monvue.in/collections/all" },
      { type: "heading", text: "The Monvue point of view" },
      { type: "paragraph", text: "For Monvue, brown is not basic. It is foundational. It is the shade family that allows cosmetic lenses to feel intimate, wearable and modern. It belongs to the world of everyday beauty — the kind that looks effortless, even when it has been designed very carefully." }
    ]
  },
  {
    id: 2,
    category: "Beauty & Style",
    title: "The Art of Looking Effortless",
    subtitle: "Why modern beauty is moving away from obvious transformation.",
    readTime: "6 min read",
    featuredLens: "Mocha Mist",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop",
    body: [
      { type: "heading", text: "Effortless is designed" },
      { type: "paragraph", text: "The word effortless is misleading. The most natural-looking beauty is rarely accidental. It is usually a series of quiet decisions: skin that still looks like skin, a lip colour that does not overpower, brows that are groomed but not severe, and eyes that feel defined without becoming theatrical." },
      { type: "paragraph", text: "Cosmetic lenses belong inside this new language of beauty. The lens is no longer a party trick. It is part of the face architecture. It can soften the gaze, create dimension, brighten the overall expression and make the eye area feel more awake." },
      { type: "highlight", text: "Effortless beauty does not mean doing less. It means making the result look less forced." },
      { type: "heading", text: "The problem with obvious lenses" },
      { type: "paragraph", text: "When a lens is too large, too pale or too sharply patterned, it can interrupt the face. The eye becomes the product. That may work for a costume moment or a dramatic shoot, but it rarely works for daily beauty." },
      { type: "paragraph", text: "The most wearable lenses are different. They do not erase the original iris. They layer over it. They allow natural darkness, warmth and depth to remain visible. This creates a more believable result, especially for Indian eyes." },
      { type: "quote", text: "The best compliment is not ‘nice lenses.’ It is ‘you look really good today.’" },
      { type: "heading", text: "How to choose an effortless shade" },
      { type: "paragraph", text: "Start close to your natural eye family. Browns, hazels and soft olives usually sit more naturally on darker irises than icy greys or very pale blues. Look for soft edges, gradual pigment and designs that do not create a harsh ring unless that is intentionally your style." },
      { type: "link", text: "View Monvue’s everyday lens collection", href: "https://monvue.in/collections/all" }
    ]
  },
  {
    id: 3,
    category: "Lens Education",
    title: "What Actually Makes a Contact Lens Comfortable?",
    subtitle: "It is not just about water content. Here is what really matters.",
    readTime: "7 min read",
    featuredLens: "Daily Mocha",
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=1600&auto=format&fit=crop",
    body: [
      { type: "heading", text: "Comfort is a system" },
      { type: "paragraph", text: "Most people assume coloured lenses become uncomfortable because of the colour. Usually, that is not the real issue. Comfort comes from a balance of material, hydration, oxygen flow, edge design, diameter, fit and how the lens behaves after hours of wear." },
      { type: "paragraph", text: "A comfortable lens should almost disappear from your awareness. It should not feel sharp when you blink. It should not dry out after a short time. It should not make you constantly remember that something is sitting on your eye." },
      { type: "heading", text: "Water content matters, but not alone" },
      { type: "paragraph", text: "Water content is often treated like a simple score. Higher sounds better. But the reality is more nuanced. A lens must retain moisture while still allowing oxygen to reach the eye. The wrong balance can make a lens feel good initially and uncomfortable later." },
      { type: "highlight", text: "The first ten minutes tell you very little. Real comfort is what happens after three to six hours." },
      { type: "heading", text: "Edge design changes everything" },
      { type: "paragraph", text: "The edge of the lens is one of the most overlooked factors. A smooth edge reduces friction during blinking. A poorly finished edge can make even a beautiful lens feel irritating. This is why premium lenses often feel better before you even understand why." },
      { type: "paragraph", text: "The diameter also matters. A lens that is too large may create a more dramatic look but can be less natural and less comfortable for some wearers. Daily beauty needs balance." },
      { type: "quote", text: "Lens quality is often felt before it is seen." },
      { type: "link", text: "Explore Monvue lenses", href: "https://monvue.in/collections/all" }
    ]
  },
  {
    id: 4,
    category: "Lens Education",
    title: "Daily vs Monthly Lenses: What Should You Choose?",
    subtitle: "A simple guide for first-time cosmetic lens buyers.",
    readTime: "6 min read",
    featuredLens: "Trial Pack",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1600&auto=format&fit=crop",
    body: [
      { type: "heading", text: "The right answer depends on your routine" },
      { type: "paragraph", text: "Daily and monthly lenses are not just two price options. They are two different lifestyles. The right choice depends on how often you wear lenses, how disciplined you are with care and how sensitive your eyes feel after long hours." },
      { type: "heading", text: "Daily lenses are simple" },
      { type: "paragraph", text: "Daily lenses are convenient because each pair is fresh. There is no storage case, no cleaning routine and no risk of wearing a pair beyond its intended hygiene cycle. For first-time users, travel, events and occasional wear, dailies are often the easiest starting point." },
      { type: "heading", text: "Monthly lenses need discipline" },
      { type: "paragraph", text: "Monthly lenses can be more economical for frequent users, but they require proper cleaning, lens solution and storage habits. A monthly lens is only as safe as the routine around it." },
      { type: "highlight", text: "The best lens is not the one with the longest use. It is the one you will use correctly." },
      { type: "paragraph", text: "If you are unsure, begin with a trial pack or occasional wear option. Learn what shade suits your eyes, how your eyes respond and what routine feels realistic." },
      { type: "link", text: "Try Monvue first", href: "https://monvue.in/products/trial-pack" }
    ]
  },
  {
    id: 5,
    category: "Culture & Trends",
    title: "Why Korean Beauty Changed Cosmetic Lenses Forever",
    subtitle: "The global shift from dramatic transformation to natural enhancement.",
    readTime: "6 min read",
    featuredLens: "Hazel Dew",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1600&auto=format&fit=crop",
    body: [
      { type: "heading", text: "A new beauty philosophy" },
      { type: "paragraph", text: "Korean beauty changed cosmetic lenses because it changed the goal. Instead of asking how to make the eye look dramatically different, it asked how to make the face look softer, fresher and more balanced." },
      { type: "paragraph", text: "This philosophy shaped lens design. Softer colours. More natural iris patterns. Smaller shifts. Designs that work in real daylight, not only under studio lights." },
      { type: "highlight", text: "The Korean influence made subtle enhancement feel aspirational." },
      { type: "heading", text: "From Seoul to everyday beauty" },
      { type: "paragraph", text: "The most successful Korean beauty ideas rarely feel heavy. They are about skin quality, light, balance and small details that improve the whole face. Cosmetic lenses followed the same path." },
      { type: "paragraph", text: "For Indian wearers, this is especially relevant. Natural dark irises need thoughtful colour design. A lens has to show up without becoming fake. It has to brighten without clashing. It has to be visible but believable." },
      { type: "quote", text: "The cultural shift is clear: enhancement over transformation." },
      { type: "link", text: "Read the Monvue story", href: "https://monvue.in/pages/about" }
    ]
  },
  {
    id: 6,
    category: "Culture & Trends",
    title: "Why Everyone Wants Natural-Looking Lenses Now",
    subtitle: "The trend is not less beauty. It is more intelligent beauty.",
    readTime: "6 min read",
    featuredLens: "Soft Hazel",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1600&auto=format&fit=crop",
    body: [
      { type: "heading", text: "The end of obvious beauty" },
      { type: "paragraph", text: "Consumers have become much better at reading images. They can spot heavy filters, over-editing, exaggerated makeup and artificial lens patterns faster than before. This has changed what feels premium." },
      { type: "paragraph", text: "Natural-looking lenses sit perfectly inside this shift. They create enough change to be felt, but not so much that they become distracting." },
      { type: "heading", text: "The new compliment" },
      { type: "paragraph", text: "The best compliment is no longer, “Your lenses look nice.” It is, “You look really good today.” That difference captures the whole trend." },
      { type: "highlight", text: "A beautiful lens should improve the face, not interrupt it." },
      { type: "paragraph", text: "That is why softer browns, hazels and warm neutrals are becoming more important than dramatic greys and blues for everyday wear. The beauty world is not becoming less expressive. It is becoming more precise." },
      { type: "link", text: "Explore subtle lens shades", href: "https://monvue.in/collections/all" }
    ]
  },
  {
    id: 7,
    category: "Monvue Stories",
    title: "Designing Monvue for Indian Eyes",
    subtitle: "A story of purpose, research and a different point of view.",
    readTime: "7 min read",
    featuredLens: "Trial Pack",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1600&auto=format&fit=crop",
    body: [
      { type: "heading", text: "Starting with the right question" },
      { type: "paragraph", text: "For decades, many cosmetic lenses were designed around lighter natural eye colours. Indian eyes were often treated as a secondary use case. The result was predictable: shades that looked beautiful in a catalogue but did not always translate naturally on darker irises." },
      { type: "paragraph", text: "Monvue started with a different question: what would lenses look like if they were designed for Indian skin tones and darker eyes first?" },
      { type: "highlight", text: "Not as an afterthought. Not as a variant. As the starting point." },
      { type: "heading", text: "Why context matters" },
      { type: "paragraph", text: "A lens behaves differently depending on the natural iris beneath it. The same hazel can look subtle on one eye and harsh on another. The same brown can disappear completely if the opacity is wrong. Designing for Indian eyes means thinking carefully about colour, pattern, diameter and real-life lighting." },
      { type: "paragraph", text: "It also means understanding how lenses interact with Indian undertones, hair colour, brow density and everyday beauty preferences. The goal is not to copy a global trend. The goal is to make it feel local, wearable and beautiful." },
      { type: "quote", text: "Korean precision, Indian context — that is the Monvue idea." },
      { type: "link", text: "Learn more about Monvue", href: "https://monvue.in/pages/about" }
    ]
  },
  {
    id: 8,
    category: "Monvue Stories",
    title: "From Seoul to India: The Monvue Moodboard",
    subtitle: "How product, packaging and skin-tone thinking come together.",
    readTime: "6 min read",
    featuredLens: "Stone Brown",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop",
    body: [
      { type: "heading", text: "The moodboard is not only visual" },
      { type: "paragraph", text: "Every beauty brand has references. For Monvue, the references are not only colours, boxes and campaign images. They are moments: morning light, bare skin, soft eyes, fresh makeup, easy confidence and lenses that feel wearable in Indian life." },
      { type: "paragraph", text: "The Seoul influence appears in precision, restraint and softness. The Indian influence appears in warmth, depth and the need to work beautifully on darker natural irises." },
      { type: "heading", text: "Visible but believable" },
      { type: "paragraph", text: "Too much opacity can make a lens feel artificial. Too little can disappear completely. The sweet spot is a lens that shows up just enough — enough for the wearer to feel the difference, not so much that the lens becomes the only thing people see." },
      { type: "highlight", text: "Monvue is built around the tension between visible and believable." },
      { type: "paragraph", text: "That tension shapes the product, the packaging and the tone of the brand. It is why the language is soft, the shades are wearable and the promise is enhancement rather than transformation." },
      { type: "link", text: "Explore the collection", href: "https://monvue.in/collections/all" }
    ]
  }
];

const categories = ["All", "Beauty & Style", "Lens Education", "Culture & Trends", "Monvue Stories"];

export default function App() {
  const [articles] = useState(starterArticles);
  const [selectedId, setSelectedId] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [likedArticles, setLikedArticles] = useState([]);
  const [copied, setCopied] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileArticleOpen, setMobileArticleOpen] = useState(false);

  const selectedArticle = articles.find((article) => article.id === selectedId) || articles[0];

  const filteredArticles = useMemo(() => {
    const q = query.toLowerCase();
    return articles.filter((article) => {
      const matchesSearch = [article.title, article.category, article.subtitle, article.featuredLens].join(" ").toLowerCase().includes(q);
      const matchesCategory = activeCategory === "All" || article.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [articles, query, activeCategory]);

  const groupedArticles = categories.filter((c) => c !== "All").map((category) => ({
    category,
    articles: articles.filter((article) => article.category === category)
  }));

  function selectCategory(category) {
    setActiveCategory(category);
    setMobileMenuOpen(false);
    const firstMatch = articles.find((article) => category === "All" || article.category === category);
    if (firstMatch) setSelectedId(firstMatch.id);
  }

  function openArticle(id) {
    setSelectedId(id);
    setMobileArticleOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleLike(id) {
    setLikedArticles((current) => current.includes(id) ? current.filter((articleId) => articleId !== id) : [...current, id]);
  }

  function copyText(label, text) {
    navigator.clipboard?.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 1400);
  }

  const shareText = `${selectedArticle.title} — Monvue Journal`;
  const shareUrl = typeof window !== "undefined" ? window.location.href : "https://monvue.in";

  return (
    <div className="site">
      <header className="topbar">
        <div className="brand">
          <span className="logo">MONVUE</span>
          <span className="pill">JOURNAL</span>
        </div>

        <nav className="desktop-nav">
          {categories.map((category) => (
            <button key={category} onClick={() => selectCategory(category)} className={activeCategory === category ? "active" : ""}>
              {category === "Culture & Trends" ? "Culture" : category === "Monvue Stories" ? "Stories" : category}
            </button>
          ))}
        </nav>

        <button className="mobile-menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          {categories.map((category) => (
            <button key={category} onClick={() => selectCategory(category)} className={activeCategory === category ? "active" : ""}>
              {category}
            </button>
          ))}
        </div>
      )}

      <main className="desktop-shell">
        <aside className="sidebar">
          <div className="searchbox">
            <Search size={16} />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search articles" />
          </div>

          <div className="article-index">
            {filteredArticles.map((article) => (
              <button key={article.id} onClick={() => setSelectedId(article.id)} className={selectedId === article.id ? "index-card active" : "index-card"}>
                <span>{article.category}</span>
                <strong>{article.title}</strong>
                <small>{article.readTime}</small>
              </button>
            ))}
          </div>
        </aside>

        <ArticleView
          article={selectedArticle}
          liked={likedArticles.includes(selectedArticle.id)}
          onLike={() => toggleLike(selectedArticle.id)}
          copied={copied}
          copyText={copyText}
          shareText={shareText}
          shareUrl={shareUrl}
        />
      </main>

      <main className="mobile-shell">
        {!mobileArticleOpen ? (
          <>
            <section className="mobile-hero">
              <div className="mobile-hero-image">
                <img src={articles[0].image} alt={articles[0].title} />
              </div>
              <div className="mobile-hero-copy">
                <span>{articles[0].category}</span>
                <h1>{articles[0].title}</h1>
                <p>{articles[0].subtitle}</p>
                <button onClick={() => openArticle(articles[0].id)}>Read Feature</button>
              </div>
            </section>

            <div className="mobile-tabs">
              {categories.map((category) => (
                <button key={category} onClick={() => selectCategory(category)} className={activeCategory === category ? "active" : ""}>{category}</button>
              ))}
            </div>

            {groupedArticles.map((group) => {
              const visible = activeCategory === "All" || activeCategory === group.category;
              if (!visible) return null;
              return (
                <section key={group.category} className="mobile-section">
                  <h2>{group.category}</h2>
                  <div className="mobile-card-grid">
                    {group.articles.map((article) => (
                      <button key={article.id} className="mobile-card" onClick={() => openArticle(article.id)}>
                        <img src={article.image} alt={article.title} />
                        <div>
                          <span>{article.readTime}</span>
                          <h3>{article.title}</h3>
                          <p>{article.subtitle}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </section>
              );
            })}
          </>
        ) : (
          <div className="mobile-article-wrap">
            <button className="back-mobile" onClick={() => setMobileArticleOpen(false)}><ArrowLeft size={16} /> Back to Journal</button>
            <ArticleView
              article={selectedArticle}
              liked={likedArticles.includes(selectedArticle.id)}
              onLike={() => toggleLike(selectedArticle.id)}
              copied={copied}
              copyText={copyText}
              shareText={shareText}
              shareUrl={shareUrl}
            />
          </div>
        )}
      </main>
    </div>
  );
}

function ArticleView({ article, liked, onLike, copied, copyText, shareText, shareUrl }) {
  const instagramCopy = `${article.title}\n\nRead on Monvue Journal: ${shareUrl}`;

  return (
    <article className="article">
      <section className="article-hero">
        <div className="article-hero-copy">
          <button className="back-desktop"><ArrowLeft size={14} /> Back to Journal</button>
          <div className="category">{article.category}</div>
          <h1>{article.title}</h1>
          <p>{article.subtitle}</p>
          <div className="meta">
            <span><Clock size={14} /> {article.readTime}</span>
            <span><Tag size={14} /> {article.featuredLens}</span>
          </div>
          <div className="quick-actions">
            <button onClick={onLike} className={liked ? "liked" : ""}><Heart size={16} fill={liked ? "currentColor" : "none"} /> {liked ? "Liked" : "Like"}</button>
            <button onClick={() => copyText("link", shareUrl)}><Copy size={16} /> {copied === "link" ? "Copied" : "Copy Link"}</button>
          </div>
        </div>
        <div className="article-image">
          <img src={article.image} alt={article.title} />
        </div>
      </section>

      <section className="article-body">
        <aside className="pullquote">“The best lens should feel like you — only a little more awake, a little more defined.”</aside>
        <div className="content">
          {article.body.map((block, index) => {
            if (block.type === "heading") return <h2 key={index}>{block.text}</h2>;
            if (block.type === "highlight") return <div key={index} className="highlight">{block.text}</div>;
            if (block.type === "quote") return <blockquote key={index}>{block.text}</blockquote>;
            if (block.type === "link") return <a key={index} href={block.href} target="_blank" rel="noreferrer" className="story-link">{block.text}</a>;
            return <p key={index}>{block.text}</p>;
          })}
        </div>
      </section>

      <section className="share-panel">
        <div>
          <div className="share-title"><Share2 size={14} /> Share this story</div>
          <p>Share the article with your team or readers. Instagram copies the article text so you can paste it into a Story.</p>
        </div>
        <div className="share-buttons">
          <a href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
          <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(article.title)}`} target="_blank" rel="noreferrer">in LinkedIn</a>
          <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer">𝕏 Share</a>
          <button onClick={() => copyText("insta", instagramCopy)}>📸 {copied === "insta" ? "Copied for Instagram" : "Instagram Story"}</button>
        </div>
      </section>

      <section className="featured-lens">
        <div>
          <span>Featured Lens</span>
          <h2>{article.featuredLens}</h2>
          <p>Designed to enhance, not overpower.</p>
        </div>
        <a href="https://monvue.in/collections/all" target="_blank" rel="noreferrer">Explore Lens</a>
      </section>
    </article>
  );
}
