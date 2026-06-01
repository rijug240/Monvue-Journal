import React, { useMemo, useState } from "react";
import { Plus, Trash2, Search, ArrowLeft, Clock, Tag, Edit3 } from "lucide-react";

const starterArticles = [
  {
    id: 1,
    category: "Beauty & Style",
    title: "The Quiet Luxury of Brown Eyes",
    subtitle: "Why the most sophisticated lens trend is no longer about changing how you look.",
    readTime: "5 min read",
    featuredLens: "Stone Brown",
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1600&auto=format&fit=crop",
    body: [
      "There was a time when coloured lenses were meant to be noticed. Blue lenses. Grey lenses. Patterns designed to transform. The objective was obvious: change your appearance.",
      "But beauty rarely stands still. Today, the aspiration is different. The most sought-after lenses are not necessarily the most dramatic. They are the most believable.",
      "Brown works because it does not compete with the face. It adds warmth, definition and depth without announcing itself. On Indian skin tones, this matters. The right brown lens does not look like a new eye colour. It looks like a better version of your own.",
      "The best cosmetic lens does not create a new identity. It reveals a version of yourself that already existed."
    ]
  },
  {
    id: 2,
    category: "Lens Education",
    title: "What Actually Makes a Contact Lens Comfortable?",
    subtitle: "It is not just about water content. Here is what really matters.",
    readTime: "6 min read",
    featuredLens: "Daily Mocha",
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=1600&auto=format&fit=crop",
    body: [
      "Most people think lenses become uncomfortable because of colour. They usually do not. Comfort is a combination of material, hydration, oxygen flow, edge design and fit.",
      "A good lens should feel almost invisible. Not dry. Not heavy. Not sharp at the edge. It should move naturally with your eye and stay hydrated through the day.",
      "Water content matters, but more water is not always better. The balance between moisture retention and oxygen permeability is what creates real comfort.",
      "This is why lens quality is often felt before it is seen. If your eyes are tired after a few hours, the design has already failed."
    ]
  },
  {
    id: 3,
    category: "Culture & Trends",
    title: "Why Korean Beauty Changed Cosmetic Lenses Forever",
    subtitle: "The global shift from dramatic transformation to natural enhancement.",
    readTime: "5 min read",
    featuredLens: "Hazel Dew",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1600&auto=format&fit=crop",
    body: [
      "Korean beauty changed the conversation around cosmetic lenses because it changed the objective. The goal was no longer to look different. It was to look like the best version of yourself.",
      "This philosophy shaped everything: softer colours, more natural iris patterns, smaller design changes and lenses that work in real life, not just in photographs.",
      "From Seoul to Mumbai, a new generation of lens wearers wants subtlety. They want eyes that look brighter, softer and more defined without looking artificial.",
      "That is the cultural shift Monvue is built around: enhancement over transformation."
    ]
  },
  {
    id: 4,
    category: "Monvue Stories",
    title: "Designing Monvue for Indian Eyes",
    subtitle: "A story of purpose, research and a different point of view.",
    readTime: "6 min read",
    featuredLens: "Trial Pack",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1600&auto=format&fit=crop",
    body: [
      "For decades, many cosmetic lenses were designed around lighter natural eye colours. Indian eyes were often treated as an afterthought.",
      "Monvue started with a different question: what would lenses look like if they were designed for Indian skin tones and darker irises first?",
      "That question changes everything. It affects colour, opacity, pattern, diameter and how the lens behaves in daylight, office light and evening light.",
      "Monvue exists at the meeting point of Korean precision and Indian beauty. Made for your eyes. Made for your everyday. Made for you."
    ]
  }
];

export default function MonvueJournalContentApp() {
  const [articles, setArticles] = useState(starterArticles);
  const [selectedId, setSelectedId] = useState(1);
  const [query, setQuery] = useState("");
  const [form, setForm] = useState({ title: "", category: "Beauty & Style", subtitle: "", featuredLens: "", image: "", body: "" });
  const selectedArticle = articles.find((article) => article.id === selectedId) || articles[0];
  const filteredArticles = useMemo(() => {
    const q = query.toLowerCase();
    return articles.filter((article) => [article.title, article.category, article.subtitle, article.featuredLens].join(" ").toLowerCase().includes(q));
  }, [articles, query]);

  function addArticle() {
    if (!form.title.trim()) return;
    const newArticle = {
      id: Date.now(), category: form.category, title: form.title,
      subtitle: form.subtitle || "Short editorial description goes here.", readTime: "5 min read",
      featuredLens: form.featuredLens || "Monvue Lens",
      image: form.image || "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop",
      body: form.body ? form.body.split("\n").filter(Boolean) : ["Start your article here. Keep paragraphs short, editorial and useful."]
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

  return (
    <div className="min-h-screen bg-white text-[#1d1b20] font-sans">
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4"><div className="text-2xl tracking-[0.18em] font-medium">MONVUE</div><span className="rounded-full bg-pink-100 text-pink-600 text-xs px-3 py-1 font-semibold tracking-wide">JOURNAL</span></div>
          <nav className="hidden md:flex gap-8 text-xs uppercase tracking-[0.18em] text-neutral-600"><a>Beauty & Style</a><a>Lens Education</a><a>Culture</a><a>Stories</a></nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-5 py-8 grid lg:grid-cols-[360px_1fr] gap-8">
        <aside className="lg:sticky lg:top-24 self-start rounded-3xl border border-neutral-200 bg-neutral-50 p-5">
          <div className="flex items-center gap-2 rounded-full bg-white border border-neutral-200 px-4 py-3 mb-5"><Search size={16} className="text-neutral-400" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search articles" className="bg-transparent outline-none text-sm w-full" /></div>
          <div className="space-y-3 mb-8">{filteredArticles.map((article) => (<button key={article.id} onClick={() => setSelectedId(article.id)} className={`w-full text-left rounded-2xl p-4 transition border ${selectedId === article.id ? "bg-white border-pink-200 shadow-sm" : "bg-transparent border-transparent hover:bg-white"}`}><div className="text-[10px] uppercase tracking-[0.18em] text-pink-500 font-bold mb-2">{article.category}</div><div className="font-semibold leading-snug">{article.title}</div><div className="text-xs text-neutral-500 mt-2">{article.readTime}</div></button>))}</div>
          <div className="border-t border-neutral-200 pt-6"><div className="flex items-center gap-2 mb-4 font-semibold"><Edit3 size={16} /> Add Article</div><div className="space-y-3"><input className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /><select className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}><option>Beauty & Style</option><option>Lens Education</option><option>Culture & Trends</option><option>Monvue Stories</option></select><input className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm" placeholder="Subtitle" value={form.subtitle} onChange={(e) => setForm({ ...form, subtitle: e.target.value })} /><input className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm" placeholder="Featured lens" value={form.featuredLens} onChange={(e) => setForm({ ...form, featuredLens: e.target.value })} /><input className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm" placeholder="Image URL" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} /><textarea className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm min-h-28" placeholder="Article body. Put each paragraph on a new line." value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} /><button onClick={addArticle} className="w-full rounded-full bg-[#1d1b20] text-white py-3 text-sm font-semibold flex items-center justify-center gap-2"><Plus size={16} /> Add Article</button></div></div>
        </aside>
        {selectedArticle ? (<article className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm"><section className="grid md:grid-cols-2 border-b border-neutral-200"><div className="p-8 md:p-12 flex flex-col justify-center min-h-[480px]"><button className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-neutral-500 mb-10"><ArrowLeft size={14} /> Back to Journal</button><div className="text-xs uppercase tracking-[0.2em] text-pink-500 font-bold mb-5">{selectedArticle.category}</div><h1 className="text-5xl md:text-7xl tracking-[-0.06em] leading-[0.92] font-light max-w-xl">{selectedArticle.title}</h1><p className="mt-7 text-lg text-neutral-600 leading-relaxed max-w-md">{selectedArticle.subtitle}</p><div className="mt-8 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.14em] text-neutral-500"><span className="flex items-center gap-2"><Clock size={14} /> {selectedArticle.readTime}</span><span className="flex items-center gap-2"><Tag size={14} /> {selectedArticle.featuredLens}</span></div></div><div className="min-h-[480px] bg-neutral-100"><img src={selectedArticle.image} alt="Article visual" className="h-full w-full object-cover" /></div></section><section className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 p-8 md:p-12 border-b border-neutral-200"><div className="text-3xl md:text-4xl tracking-[-0.04em] leading-tight font-light">“The best lens should feel like you — only a little more awake, a little more defined.”</div><div className="space-y-6 text-neutral-700 leading-relaxed text-base md:text-lg">{selectedArticle.body.map((para, index) => (<p key={index}>{para}</p>))}</div></section><section className="grid md:grid-cols-3 border-b border-neutral-200"><div className="p-8 border-b md:border-b-0 md:border-r border-neutral-200"><div className="text-pink-500 text-sm font-bold mb-5">01</div><h3 className="text-2xl tracking-[-0.04em] mb-4">Why this matters</h3><p className="text-neutral-600 leading-relaxed">Each article should build trust, educate gently, and make Monvue feel like a thoughtful beauty brand.</p></div><div className="p-8 border-b md:border-b-0 md:border-r border-neutral-200"><div className="text-pink-500 text-sm font-bold mb-5">02</div><h3 className="text-2xl tracking-[-0.04em] mb-4">How to write it</h3><p className="text-neutral-600 leading-relaxed">Use short paragraphs, specific observations and human language. Avoid generic SEO filler.</p></div><div className="p-8"><div className="text-pink-500 text-sm font-bold mb-5">03</div><h3 className="text-2xl tracking-[-0.04em] mb-4">Soft conversion</h3><p className="text-neutral-600 leading-relaxed">Mention the featured lens naturally and invite readers to explore, without turning the article into an ad.</p></div></section><section className="p-8 md:p-12 bg-gradient-to-br from-pink-50 to-white flex flex-col md:flex-row gap-6 justify-between items-start md:items-center"><div><div className="text-xs uppercase tracking-[0.18em] text-pink-500 font-bold mb-3">Featured Lens</div><h2 className="text-3xl tracking-[-0.04em]">{selectedArticle.featuredLens}</h2><p className="text-neutral-600 mt-2">Designed to enhance, not overpower.</p></div><div className="flex gap-3"><button className="rounded-full bg-[#1d1b20] text-white px-6 py-3 text-sm font-semibold">Explore Lens</button><button onClick={() => deleteArticle(selectedArticle.id)} className="rounded-full border border-neutral-300 px-5 py-3 text-sm font-semibold flex items-center gap-2"><Trash2 size={16} /> Delete Article</button></div></section></article>) : (<div className="rounded-3xl border border-neutral-200 p-10 text-neutral-500">No articles yet. Add one from the left panel.</div>)}
      </main>
    </div>
  );
}
