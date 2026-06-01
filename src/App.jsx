import React, { useMemo, useState } from "react";
import { ArrowLeft, Clock, Copy, Heart, MessageCircle, Search, Share2, Tag } from "lucide-react";

const articles = [
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
      { type: "paragraph", text: "But beauty rarely stands still. The most interesting movement today is quieter. It is not about becoming someone else; it is about looking more considered, more awake, more polished, while still recognisably yourself." },
      { type: "highlight", text: "The most premium beauty choices today are often the least obvious ones." },
      { type: "heading", text: "Why brown works so naturally on Indian eyes" },
      { type: "paragraph", text: "Brown is sometimes dismissed as a safe colour. In reality, it is one of the most sophisticated shades because the margin for error is small. Too flat, and it disappears. Too opaque, and it looks artificial. Too light, and it can create a harsh contrast against darker eyes." },
      { type: "quote", text: "The best cosmetic lens does not create a new identity. It reveals a version of yourself that already existed." },
      { type: "paragraph", text: "For Monvue, brown is not basic. It is foundational. It is the shade family that allows cosmetic lenses to feel intimate, wearable and modern." },
      { type: "link", text: "Explore natural-looking brown lenses", href: "https://monvue.in/collections/all" }
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
      { type: "paragraph", text: "Cosmetic lenses belong inside this new language of beauty. The lens is no longer a party trick. It is part of the face architecture." },
      { type: "highlight", text: "Effortless beauty does not mean doing less. It means making the result look less forced." },
      { type: "heading", text: "The problem with obvious lenses" },
      { type: "paragraph", text: "When a lens is too large, too pale or too sharply patterned, it can interrupt the face. The eye becomes the product. That may work for a costume moment, but it rarely works for daily beauty." },
      { type: "quote", text: "The best compliment is not ‘nice lenses.’ It is ‘you look really good today.’" },
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
      { type: "paragraph", text: "A comfortable lens should almost disappear from your awareness. It should not feel sharp when you blink. It should not dry out after a short time." },
      { type: "highlight", text: "The first ten minutes tell you very little. Real comfort is what happens after three to six hours." },
      { type: "heading", text: "Water content matters, but not alone" },
      { type: "paragraph", text: "Water content is often treated like a simple score. Higher sounds better. But the reality is more nuanced. A lens must retain moisture while still allowing oxygen to reach the eye." },
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
      { type: "paragraph", text: "Daily lenses are convenient because each pair is fresh. There is no storage case, no cleaning routine and no risk of wearing a pair beyond its intended hygiene cycle." },
      { type: "heading", text: "Monthly lenses need discipline" },
      { type: "paragraph", text: "Monthly lenses can be more economical for frequent users, but they require proper cleaning, lens solution and storage habits." },
      { type: "highlight", text: "The best lens is not the one with the longest use. It is the one you will use correctly." },
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
      { type: "paragraph", text: "For Indian wearers, this is especially relevant. Natural dark irises need thoughtful colour design. A lens has to show up without becoming fake." },
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
      { type: "paragraph", text: "The best compliment is no longer, ‘Your lenses look nice.’ It is, ‘You look really good today.’ That difference captures the whole trend." },
      { type: "highlight", text: "A beautiful lens should improve the face, not interrupt it." },
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
      { type: "paragraph", text: "A lens behaves differently depending on the natural iris beneath it. The same hazel can look subtle on one eye and harsh on another." },
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
      { type: "paragraph", text: "Too much opacity can make a lens feel artificial. Too little can disappear completely. The sweet spot is a lens that shows up just enough." },
      { type: "highlight", text: "Monvue is built around the tension between visible and believable." },
      { type: "link", text: "Explore the collection", href: "https://monvue.in/collections/all" }
    ]
  }
];

const categories = ["All", "Beauty & Style", "Lens Education", "Culture & Trends", "Monvue Stories"];

function renderBlock(block, index) {
  if (block.type === "heading") return <h2 key={index} className="mt-8 text-2xl md:text-3xl font-light tracking-[-0.04em] text-neutral-950">{block.text}</h2>;
  if (block.type === "highlight") return <div key={index} className="rounded-3xl border border-pink-100 bg-pink-50 px-6 py-5 text-xl leading-snug tracking-[-0.03em] text-pink-600">{block.text}</div>;
  if (block.type === "quote") return <blockquote key={index} className="border-l-4 border-pink-300 pl-5 text-2xl italic leading-snug tracking-[-0.03em] text-pink-500">{block.text}</blockquote>;
  if (block.type === "link") return <a key={index} className="inline-flex w-fit rounded-full border border-pink-100 bg-pink-50 px-5 py-3 text-sm font-semibold text-pink-600" href={block.href} target="_blank" rel="noreferrer">{block.text}</a>;
  return <p key={index} className="text-base md:text-lg leading-8 text-neutral-600">{block.text}</p>;
}

function ArticlePage({ article, onBack, liked, onLike, copied, copyLink, copyInstagram }) {
  const shareText = `${article.title} — Monvue Journal`;

  return (
    <article className="overflow-hidden rounded-[1.8rem] border border-neutral-200 bg-white shadow-sm">
      <section className="grid lg:grid-cols-2 border-b border-neutral-200">
        <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
          <button onClick={onBack} className="mb-8 flex w-fit items-center gap-2 text-xs uppercase tracking-[0.18em] text-neutral-500">
            <ArrowLeft size={14} /> Back to Journal
          </button>
          <div className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-pink-500">{article.category}</div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[0.95] tracking-[-0.065em] text-neutral-950">{article.title}</h1>
          <p className="mt-6 max-w-xl text-base md:text-lg leading-7 text-neutral-600">{article.subtitle}</p>
          <div className="mt-7 flex flex-wrap gap-4 text-[11px] uppercase tracking-[0.14em] text-neutral-500">
            <span className="flex items-center gap-2"><Clock size={14} /> {article.readTime}</span>
            <span className="flex items-center gap-2"><Tag size={14} /> {article.featuredLens}</span>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={onLike} className={`flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold ${liked ? "border-pink-500 bg-pink-500 text-white" : "border-neutral-200 bg-white text-neutral-800"}`}>
              <Heart size={16} fill={liked ? "currentColor" : "none"} /> {liked ? "Liked" : "Like"}
            </button>
            <button onClick={copyLink} className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-800">
              <Copy size={16} /> {copied === "link" ? "Copied" : "Copy Link"}
            </button>
          </div>
        </div>
        <div className="h-[320px] md:h-[460px] lg:h-auto min-h-[320px] bg-neutral-100">
          <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="grid gap-8 p-6 md:p-10 lg:grid-cols-[0.75fr_1.25fr] lg:p-12 border-b border-neutral-200">
        <aside className="text-2xl md:text-3xl leading-tight tracking-[-0.04em] text-neutral-950">
          “The best lens should feel like you — only a little more awake, a little more defined.”
        </aside>
        <div className="space-y-6">
          {article.body.map(renderBlock)}
        </div>
      </section>

      <section className="grid gap-5 p-6 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12 border-b border-neutral-200">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-pink-500"><Share2 size={14} /> Share this story</div>
          <p className="max-w-2xl text-sm md:text-base leading-7 text-neutral-600">Instagram sharing copies the article text and link so you can paste it into an Instagram Story.</p>
        </div>
        <div className="grid gap-3 sm:flex sm:flex-wrap lg:justify-end">
          <a className="flex items-center justify-center gap-2 rounded-full border border-neutral-200 px-5 py-3 text-sm font-semibold" href={`https://wa.me/?text=${encodeURIComponent(shareText)}`} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
          <a className="flex items-center justify-center rounded-full border border-neutral-200 px-5 py-3 text-sm font-semibold" href={`https://www.linkedin.com/shareArticle?mini=true&title=${encodeURIComponent(article.title)}`} target="_blank" rel="noreferrer">in LinkedIn</a>
          <a className="flex items-center justify-center rounded-full border border-neutral-200 px-5 py-3 text-sm font-semibold" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`} target="_blank" rel="noreferrer">𝕏 Share</a>
          <button onClick={copyInstagram} className="flex items-center justify-center rounded-full border border-neutral-200 px-5 py-3 text-sm font-semibold">📸 {copied === "insta" ? "Copied" : "Instagram Story"}</button>
        </div>
      </section>

      <section className="flex flex-col gap-5 bg-gradient-to-br from-pink-50 to-white p-6 md:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
        <div>
          <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-pink-500">Featured Lens</div>
          <h2 className="text-3xl font-light tracking-[-0.04em]">{article.featuredLens}</h2>
          <p className="mt-1 text-neutral-600">Designed to enhance, not overpower.</p>
        </div>
        <a href="https://monvue.in/collections/all" target="_blank" rel="noreferrer" className="rounded-full bg-neutral-950 px-6 py-3 text-center text-sm font-semibold text-white">Explore Lens</a>
      </section>
    </article>
  );
}

export default function MonvueJournalContentApp() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(1);
  const [mobileArticleOpen, setMobileArticleOpen] = useState(false);
  const [likedArticles, setLikedArticles] = useState([]);
  const [copied, setCopied] = useState("");

  const selectedArticle = articles.find((article) => article.id === selectedId) || articles[0];

  const filteredArticles = useMemo(() => {
    const q = query.toLowerCase();
    return articles.filter((article) => {
      const matchesCategory = activeCategory === "All" || article.category === activeCategory;
      const matchesQuery = [article.title, article.subtitle, article.category, article.featuredLens].join(" ").toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const groupedArticles = categories.filter((c) => c !== "All").map((category) => ({
    category,
    articles: articles.filter((article) => article.category === category)
  }));

  function chooseArticle(id, mobile = false) {
    setSelectedId(id);
    if (mobile) setMobileArticleOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleLike(id) {
    setLikedArticles((current) => current.includes(id) ? current.filter((articleId) => articleId !== id) : [...current, id]);
  }

  function markCopied(type) {
    setCopied(type);
    setTimeout(() => setCopied(""), 1500);
  }

  function copyLink() {
    navigator.clipboard?.writeText(window.location.href);
    markCopied("link");
  }

  function copyInstagram() {
    navigator.clipboard?.writeText(`${selectedArticle.title}

Read on Monvue Journal: ${window.location.href}`);
    markCopied("insta");
  }

  const articleProps = {
    article: selectedArticle,
    onBack: () => setMobileArticleOpen(false),
    liked: likedArticles.includes(selectedArticle.id),
    onLike: () => toggleLike(selectedArticle.id),
    copied,
    copyLink,
    copyInstagram
  };

  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="text-xl md:text-2xl font-medium tracking-[0.18em]">MONVUE</div>
            <div className="rounded-full bg-pink-100 px-3 py-1 text-[10px] md:text-xs font-bold tracking-[0.12em] text-pink-600">JOURNAL</div>
          </div>
          <nav className="hidden gap-6 text-xs uppercase tracking-[0.14em] text-neutral-600 md:flex">
            {categories.map((category) => (
              <button key={category} onClick={() => setActiveCategory(category)} className={activeCategory === category ? "font-bold text-pink-500" : "hover:text-pink-500"}>
                {category === "Culture & Trends" ? "Culture" : category === "Monvue Stories" ? "Stories" : category}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="hidden md:grid mx-auto max-w-7xl grid-cols-[340px_1fr] gap-6 p-6">
        <aside className="sticky top-24 self-start rounded-[1.7rem] border border-neutral-200 bg-neutral-50 p-4 max-h-[calc(100vh-120px)] overflow-y-auto">
          <div className="mb-4 flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-3">
            <Search size={16} className="text-neutral-400" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search articles" className="w-full bg-transparent text-sm outline-none" />
          </div>
          <div className="grid gap-3">
            {filteredArticles.map((article) => (
              <button key={article.id} onClick={() => chooseArticle(article.id)} className={`rounded-2xl border p-4 text-left transition ${selectedId === article.id ? "border-pink-200 bg-white shadow-sm" : "border-transparent hover:bg-white"}`}>
                <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-pink-500">{article.category}</div>
                <div className="font-semibold leading-snug">{article.title}</div>
                <div className="mt-2 text-xs text-neutral-500">{article.readTime}</div>
              </button>
            ))}
          </div>
        </aside>
        <ArticlePage {...articleProps} onBack={() => { setActiveCategory("All"); setQuery(""); }} />
      </main>

      <main className="md:hidden p-4">
        {!mobileArticleOpen ? (
          <>
            <section className="mb-5 overflow-hidden rounded-[1.7rem] border border-neutral-200 bg-white shadow-sm">
              <div className="h-72 bg-neutral-100">
                <img src={articles[0].image} alt={articles[0].title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-pink-500">Featured Story</div>
                <h1 className="text-4xl font-light leading-[0.95] tracking-[-0.06em]">{articles[0].title}</h1>
                <p className="mt-4 text-sm leading-6 text-neutral-600">{articles[0].subtitle}</p>
                <button onClick={() => chooseArticle(articles[0].id, true)} className="mt-5 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white">Read Feature</button>
              </div>
            </section>

            <div className="mb-5 flex gap-2 overflow-x-auto pb-1">
              {categories.map((category) => (
                <button key={category} onClick={() => setActiveCategory(category)} className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold ${activeCategory === category ? "border-pink-200 bg-pink-50 text-pink-600" : "border-neutral-200 bg-white text-neutral-600"}`}>
                  {category}
                </button>
              ))}
            </div>

            {groupedArticles.map((group) => {
              if (activeCategory !== "All" && activeCategory !== group.category) return null;
              return (
                <section key={group.category} className="mb-8">
                  <h2 className="mb-3 text-2xl font-light tracking-[-0.04em]">{group.category}</h2>
                  <div className="grid gap-3">
                    {group.articles.map((article) => (
                      <button key={article.id} onClick={() => chooseArticle(article.id, true)} className="grid grid-cols-[105px_1fr] gap-3 rounded-3xl border border-neutral-200 bg-white p-3 text-left">
                        <div className="h-32 overflow-hidden rounded-2xl bg-neutral-100">
                          <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
                        </div>
                        <div className="py-1">
                          <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-pink-500">{article.readTime}</div>
                          <h3 className="text-lg font-medium leading-tight tracking-[-0.04em]">{article.title}</h3>
                          <p className="mt-2 line-clamp-3 text-xs leading-5 text-neutral-600">{article.subtitle}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </section>
              );
            })}
          </>
        ) : (
          <ArticlePage {...articleProps} />
        )}
      </main>
    </div>
  );
}
