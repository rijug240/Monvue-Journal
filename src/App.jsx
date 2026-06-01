import React, { useMemo, useState } from "react";
import { Plus, Trash2, Search, ArrowLeft, Clock, Tag, Edit3, Heart, Share2, MessageCircle, Copy } from "lucide-react";

const starterArticles = [
  { id: 1, category: "Beauty & Style", title: "The Quiet Luxury of Brown Eyes", subtitle: "Why the most sophisticated lens trend is no longer about changing how you look.", readTime: "5 min read", featuredLens: "Stone Brown", image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1600&auto=format&fit=crop", body: [
    { type: "heading", text: "The shift from transformation to enhancement" },
    { type: "paragraph", text: "There was a time when coloured lenses were meant to be noticed immediately. Blue lenses. Grey lenses. Patterns designed to transform. The intention was obvious: change your appearance." },
    { type: "paragraph", text: "But beauty rarely stands still. The most interesting shift today is not toward more drama, but toward more believability. The new aspiration is not, ‘Can people tell I am wearing lenses?’ It is, ‘Can people tell why I look fresher?’" },
    { type: "quote", text: "The best cosmetic lens does not create a new identity. It reveals a version of yourself that already existed." },
    { type: "heading", text: "Why brown works so well" },
    { type: "paragraph", text: "Brown is often dismissed as the safe colour. In reality, it is one of the most sophisticated shades because it works with the natural warmth of Indian skin tones instead of fighting them." },
    { type: "paragraph", text: "A good brown lens adds definition around the iris, softens the overall gaze and gives the face a quieter polish. It should not look like a costume. It should look like you slept well, found better light and somehow look more composed." },
    { type: "link", text: "Explore natural-looking brown lenses", href: "https://monvue.in/collections/all" },
    { type: "heading", text: "The Monvue point of view" },
    { type: "paragraph", text: "For Monvue, brown is not basic. It is foundational. It is the shade family that allows cosmetic lenses to feel wearable, intimate and modern. The kind of beauty that does not need to announce itself." }
  ]},
  { id: 2, category: "Beauty & Style", title: "The Art of Looking Effortless", subtitle: "Why modern beauty is moving away from obvious transformation.", readTime: "5 min read", featuredLens: "Mocha Mist", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop", body: [
    { type: "heading", text: "Effortless is not accidental" },
    { type: "paragraph", text: "The most natural-looking beauty often requires the most careful choices. A good base, a soft lip, clean brows, skin that still looks like skin — and eyes that feel defined without becoming the whole story." },
    { type: "paragraph", text: "This is where cosmetic lenses are changing. The older idea was to make the eye colour dramatic. The newer idea is to make the whole face feel more balanced." },
    { type: "quote", text: "Modern beauty is not about hiding the original. It is about editing gently." },
    { type: "heading", text: "Why subtle lenses photograph better" },
    { type: "paragraph", text: "A lens that is too opaque can flatten the iris. A lens that is too large can overpower the face. A lens that is too cool-toned can clash with warm undertones. Subtle lenses photograph better because they let the eye retain dimension." },
    { type: "paragraph", text: "The result is not a different person. It is the same person with a softer gaze and more depth in the eye area." },
    { type: "link", text: "Read more on Monvue lens design", href: "https://monvue.in/pages/about" }
  ]},
  { id: 3, category: "Lens Education", title: "What Actually Makes a Contact Lens Comfortable?", subtitle: "It is not just about water content. Here is what really matters.", readTime: "6 min read", featuredLens: "Daily Mocha", image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=1600&auto=format&fit=crop", body: [
    { type: "heading", text: "Comfort is a system, not a single feature" },
    { type: "paragraph", text: "Most people think coloured lenses become uncomfortable because of colour. They usually do not. Comfort is created by a combination of material, hydration, oxygen flow, edge design, fit and how long the lens is worn." },
    { type: "paragraph", text: "A lens should feel almost invisible. Not dry. Not heavy. Not sharp at the edge. It should move naturally with the eye and stay hydrated through the day." },
    { type: "heading", text: "Water content is important — but not everything" },
    { type: "paragraph", text: "Water content is often treated like the headline number. But more water is not always automatically better. The real question is whether the lens material can retain moisture without compromising oxygen flow." },
    { type: "quote", text: "Lens quality is often felt before it is seen." },
    { type: "paragraph", text: "If your eyes feel tired after a few hours, the design has already failed. Comfort is not a luxury add-on. It is the foundation of daily wear." },
    { type: "link", text: "See Monvue lens options", href: "https://monvue.in/collections/all" }
  ]},
  { id: 4, category: "Lens Education", title: "Daily vs Monthly Lenses: What Should You Choose?", subtitle: "A simple guide for people buying cosmetic lenses for the first time.", readTime: "6 min read", featuredLens: "Trial Pack", image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1600&auto=format&fit=crop", body: [
    { type: "heading", text: "The real question is lifestyle" },
    { type: "paragraph", text: "Daily and monthly lenses are not simply two price points. They are two different habits. The right choice depends on how often you wear lenses, how disciplined you are with storage and how sensitive your eyes feel after long wear." },
    { type: "heading", text: "Daily lenses" },
    { type: "paragraph", text: "Daily lenses are convenient because every pair is fresh. There is no cleaning routine and no storage case. For new users, travel days, occasional wear and people who want simplicity, dailies often make sense." },
    { type: "heading", text: "Monthly lenses" },
    { type: "paragraph", text: "Monthly lenses can be more economical for frequent users, but they require proper cleaning, storage and hygiene. They are only as good as the care routine around them." },
    { type: "quote", text: "The best lens is not the one with the longest use. It is the one you will use correctly." },
    { type: "link", text: "Try Monvue before choosing", href: "https://monvue.in/products/trial-pack" }
  ]},
  { id: 5, category: "Culture & Trends", title: "Why Korean Beauty Changed Cosmetic Lenses Forever", subtitle: "The global shift from dramatic transformation to natural enhancement.", readTime: "5 min read", featuredLens: "Hazel Dew", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1600&auto=format&fit=crop", body: [
    { type: "heading", text: "A different beauty philosophy" },
    { type: "paragraph", text: "Korean beauty changed cosmetic lenses because it changed the objective. The goal was no longer to look dramatically different. It was to look like the best version of yourself." },
    { type: "paragraph", text: "This philosophy shaped everything: softer colours, natural iris patterns, smaller design changes and lenses that work in real life — not only in heavily edited photographs." },
    { type: "heading", text: "From Seoul to everyday beauty" },
    { type: "paragraph", text: "The Korean influence made subtle enhancement feel aspirational. Lenses became less about costume and more about mood: fresh, soft, awake, polished." },
    { type: "quote", text: "The cultural shift is clear: enhancement over transformation." },
    { type: "paragraph", text: "That is the space Monvue wants to own in India: Korean precision, interpreted for Indian eyes." },
    { type: "link", text: "Learn about Monvue", href: "https://monvue.in/pages/about" }
  ]},
  { id: 6, category: "Culture & Trends", title: "Why Everyone Wants Natural-Looking Lenses Now", subtitle: "The trend is not less beauty. It is more intelligent beauty.", readTime: "5 min read", featuredLens: "Soft Hazel", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1600&auto=format&fit=crop", body: [
    { type: "heading", text: "The end of obvious beauty" },
    { type: "paragraph", text: "Consumers are becoming more visually literate. They can spot filters, heavy editing, exaggerated makeup and artificial lens patterns faster than before. This has changed what feels premium." },
    { type: "paragraph", text: "Natural-looking lenses sit perfectly inside this shift. They create enough change to be felt, but not so much that they become distracting." },
    { type: "heading", text: "The new compliment" },
    { type: "paragraph", text: "The best compliment is no longer, ‘Your lenses look nice.’ It is, ‘You look really good today.’ That difference is the whole point." },
    { type: "quote", text: "A beautiful lens should improve the face, not interrupt it." },
    { type: "link", text: "Explore subtle lens shades", href: "https://monvue.in/collections/all" }
  ]},
  { id: 7, category: "Monvue Stories", title: "Designing Monvue for Indian Eyes", subtitle: "A story of purpose, research and a different point of view.", readTime: "6 min read", featuredLens: "Trial Pack", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1600&auto=format&fit=crop", body: [
    { type: "heading", text: "Starting with the right question" },
    { type: "paragraph", text: "For decades, many cosmetic lenses were designed around lighter natural eye colours. Indian eyes were often treated as an afterthought. Monvue started with a different question: what would lenses look like if they were designed for Indian skin tones and darker irises first?" },
    { type: "paragraph", text: "That question changes everything. It affects colour, opacity, pattern, diameter and how the lens behaves in daylight, office light and evening light." },
    { type: "heading", text: "Korean precision, Indian context" },
    { type: "paragraph", text: "The objective was not to import a trend blindly. It was to bring Korean manufacturing precision into a beauty context that feels relevant for Indian wearers." },
    { type: "quote", text: "Made for your eyes. Made for your everyday. Made for you." },
    { type: "link", text: "Read the Monvue story", href: "https://monvue.in/pages/about" }
  ]},
  { id: 8, category: "Monvue Stories", title: "From Seoul to India: The Monvue Moodboard", subtitle: "How product, packaging and skin-tone thinking come together.", readTime: "5 min read", featuredLens: "Stone Brown", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop", body: [
    { type: "heading", text: "The moodboard is not just visual" },
    { type: "paragraph", text: "Every beauty brand has references. For Monvue, the references are not only colours and packaging. They are also moments: morning light, bare skin, soft eyes, easy confidence and lenses that feel wearable in Indian life." },
    { type: "paragraph", text: "The Seoul influence appears in precision, softness and restraint. The Indian influence appears in warmth, depth and the need to work beautifully on darker natural irises." },
    { type: "heading", text: "Why restraint matters" },
    { type: "paragraph", text: "Too much opacity can make a lens feel artificial. Too little can disappear completely. The sweet spot is a lens that shows up just enough." },
    { type: "quote", text: "Monvue is built around the tension between visible and believable." },
    { type: "link", text: "Explore the collection", href: "https://monvue.in/collections/all" }
  ]}
];

const categories = ["All", "Beauty & Style", "Lens Education", "Culture & Trends", "Monvue Stories"];

function renderBlock(block, index) {
  if (typeof block === "string") return <p key={index}>{block}</p>;
  if (block.type === "heading") return <h2 key={index}>{block.text}</h2>;
  if (block.type === "quote") return <blockquote key={index}>{block.text}</blockquote>;
  if (block.type === "link") return <a key={index} href={block.href} target="_blank" rel="noreferrer">{block.text}</a>;
  return <p key={index}>{block.text}</p>;
}

export default function App() {
  const [articles, setArticles] = useState(starterArticles);
  const [selectedId, setSelectedId] = useState(1);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [likedArticles, setLikedArticles] = useState([]);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ title: "", category: "Beauty & Style", subtitle: "", featuredLens: "", image: "", body: "" });

  const selectedArticle = articles.find((article) => article.id === selectedId) || articles[0];

  const filteredArticles = useMemo(() => {
    const q = query.toLowerCase();
    return articles.filter((article) => {
      const matchesSearch = [article.title, article.category, article.subtitle, article.featuredLens].join(" ").toLowerCase().includes(q);
      const matchesCategory = activeCategory === "All" || article.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [articles, query, activeCategory]);

  function chooseCategory(category) {
    setActiveCategory(category);
    const firstMatch = articles.find((article) => category === "All" || article.category === category);
    if (firstMatch) setSelectedId(firstMatch.id);
  }

  function addArticle() {
    if (!form.title.trim()) return;
    const newArticle = {
      id: Date.now(), category: form.category, title: form.title,
      subtitle: form.subtitle || "Short editorial description goes here.", readTime: "5 min read",
      featuredLens: form.featuredLens || "Monvue Lens",
      image: form.image || "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop",
      body: form.body ? form.body.split("\n").filter(Boolean).map((text) => ({ type: "paragraph", text })) : [{ type: "paragraph", text: "Start your article here. Keep paragraphs short, editorial and useful." }]
    };
    setArticles([newArticle, ...articles]);
    setSelectedId(newArticle.id);
    setForm({ title: "", category: "Beauty & Style", subtitle: "", featuredLens: "", image: "", body: "" });
  }

  function deleteArticle(id) {
    const remaining = articles.filter((article) => article.id !== id);
    setArticles(remaining);
    if (selectedId === id && remaining.length) setSelectedId(remaining[0].id);
  }

  function toggleLike(id) {
    setLikedArticles((current) => current.includes(id) ? current.filter((articleId) => articleId !== id) : [...current, id]);
  }

  function copyArticleLink() {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }

  return <div className="app">
    <header className="topbar"><div className="topbar-inner">
      <div className="brand"><div className="logo">MONVUE</div><button className="pill" onClick={() => chooseCategory("All")}>JOURNAL</button></div>
      <nav className="nav">{categories.map((category) => <button key={category} onClick={() => chooseCategory(category)} className={activeCategory === category ? "active" : ""}>{category === "Culture & Trends" ? "Culture" : category === "Monvue Stories" ? "Stories" : category}</button>)}</nav>
    </div></header>

    <main className="layout">
      <aside className="sidebar">
        <div className="search"><Search size={16}/><input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search articles"/></div>
        <div className="article-list">{filteredArticles.map((article) => <button key={article.id} onClick={() => setSelectedId(article.id)} className={`article-button ${selectedId === article.id ? "selected" : ""}`}><div className="cat">{article.category}</div><div className="article-title-small">{article.title}</div><div className="read">{article.readTime}</div></button>)}</div>
        <div className="add-title"><Edit3 size={16}/> Add Article</div>
        <div className="form">
          <input placeholder="Title" value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})}/>
          <select value={form.category} onChange={(e)=>setForm({...form,category:e.target.value})}>{categories.filter(c=>c!=="All").map(c=><option key={c}>{c}</option>)}</select>
          <input placeholder="Subtitle" value={form.subtitle} onChange={(e)=>setForm({...form,subtitle:e.target.value})}/>
          <input placeholder="Featured lens" value={form.featuredLens} onChange={(e)=>setForm({...form,featuredLens:e.target.value})}/>
          <input placeholder="Image URL" value={form.image} onChange={(e)=>setForm({...form,image:e.target.value})}/>
          <textarea placeholder="Article body. Put each paragraph on a new line." value={form.body} onChange={(e)=>setForm({...form,body:e.target.value})}/>
          <button className="primary" onClick={addArticle}><Plus size={16}/> Add Article</button>
        </div>
      </aside>

      {selectedArticle && <article className="article">
        <section className="hero">
          <div className="hero-text">
            <button className="back" onClick={() => { setActiveCategory("All"); setQuery(""); }}><ArrowLeft size={14}/> Back to Journal</button>
            <div className="cat">{selectedArticle.category}</div>
            <h1 className="h1">{selectedArticle.title}</h1>
            <p className="subtitle">{selectedArticle.subtitle}</p>
            <div className="meta"><span><Clock size={14}/>{selectedArticle.readTime}</span><span><Tag size={14}/>{selectedArticle.featuredLens}</span></div>
            <div className="actions"><button onClick={() => toggleLike(selectedArticle.id)} className={`action ${likedArticles.includes(selectedArticle.id) ? "liked" : ""}`}><Heart size={16} fill={likedArticles.includes(selectedArticle.id) ? "currentColor" : "none"}/>{likedArticles.includes(selectedArticle.id) ? "Liked" : "Like"}</button><button onClick={copyArticleLink} className="action"><Copy size={16}/>{copied ? "Copied" : "Copy Link"}</button></div>
          </div>
          <div className="hero-img"><img src={selectedArticle.image} alt="Article visual"/></div>
        </section>
        <section className="body-section"><div className="pullquote">“The best lens should feel like you — only a little more awake, a little more defined.”</div><div className="content">{selectedArticle.body.map(renderBlock)}</div></section>
        <section className="share"><div className="share-inner"><div><div className="share-title"><Share2 size={14}/> Share this story</div><p>Let readers share Monvue Journal articles across social platforms. Once hosted, these buttons can use the final article URL.</p></div><div className="share-buttons"><a href={`https://www.linkedin.com/shareArticle?mini=true&title=${encodeURIComponent(selectedArticle.title)}`} target="_blank" rel="noreferrer">in LinkedIn</a><a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedArticle.title + " — Monvue Journal")}`} target="_blank" rel="noreferrer">𝕏 Share</a><a href={`https://wa.me/?text=${encodeURIComponent(selectedArticle.title + " — Monvue Journal")}`} target="_blank" rel="noreferrer"><MessageCircle size={16}/> WhatsApp</a></div></div></section>
        <section className="featured"><div><div className="label">Featured Lens</div><h2>{selectedArticle.featuredLens}</h2><p>Designed to enhance, not overpower.</p></div><div style={{display:'flex',gap:12,flexWrap:'wrap'}}><a className="primary" href="https://monvue.in/collections/all" target="_blank" rel="noreferrer">Explore Lens</a><button className="outline" onClick={() => deleteArticle(selectedArticle.id)}><Trash2 size={16}/> Delete Article</button></div></section>
      </article>}
    </main>
  </div>
}
