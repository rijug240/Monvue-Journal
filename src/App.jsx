import React, { useMemo, useState } from "react";
import { Plus, Trash2, Search, ArrowLeft, Clock, Tag, Edit3, Heart, Share2, MessageCircle, Copy } from "lucide-react";

const starterArticles = [
  {
    "id": 1,
    "category": "Beauty & Style",
    "title": "The Quiet Luxury of Brown Eyes",
    "subtitle": "Why the most sophisticated lens trend is no longer about changing how you look.",
    "readTime": "7 min read",
    "featuredLens": "Stone Brown",
    "image": "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1600&auto=format&fit=crop",
    "body": [
      {
        "type": "heading",
        "text": "The shift from transformation to enhancement"
      },
      {
        "type": "paragraph",
        "text": "There was a time when coloured lenses were meant to be noticed immediately. Blue lenses. Grey lenses. Patterns designed to transform the entire face. The intention was clear: to create a visible change, almost like a beauty accessory announcing itself before anything else."
      },
      {
        "type": "paragraph",
        "text": "But beauty rarely stands still. The most interesting movement today is quieter. It is not about becoming someone else; it is about looking more considered, more awake, more polished, while still recognisably yourself. The new question is not “Can people tell I am wearing lenses?” It is “Can people tell why I look fresher today?”"
      },
      {
        "type": "highlight",
        "text": "The most premium beauty choices today are often the least obvious ones."
      },
      {
        "type": "paragraph",
        "text": "This is exactly why brown lenses have become so important. Brown does not fight the face. It sits close to what already exists for most Indian wearers: darker irises, warmer undertones, deeper contrast around the eyes and naturally expressive features. A good brown lens does not need to shout to be effective."
      },
      {
        "type": "heading",
        "text": "Why brown works so naturally on Indian eyes"
      },
      {
        "type": "paragraph",
        "text": "Brown is sometimes dismissed as a safe colour. In reality, it is one of the most sophisticated shades because the margin for error is small. Too flat, and it disappears. Too opaque, and it looks artificial. Too light, and it can create a harsh contrast against darker eyes. The best brown lenses are built through gradients, soft patterning and gentle definition."
      },
      {
        "type": "paragraph",
        "text": "On melanin-rich skin tones, brown has a special advantage. It complements rather than competes. It brings warmth to the eye area, creates a softer gaze and allows the rest of the face — skin, brows, lips, hair — to remain in harmony. That is what makes it wearable in office light, daylight, evening light and photographs."
      },
      {
        "type": "quote",
        "text": "The best cosmetic lens does not create a new identity. It reveals a version of yourself that already existed."
      },
      {
        "type": "heading",
        "text": "The difference between looking better and looking different"
      },
      {
        "type": "paragraph",
        "text": "This is the real distinction. A dramatic lens can make you look different. A carefully designed lens can make you look better. One attracts attention to the product. The other improves the whole face. For a beauty brand like Monvue, the second outcome is far more interesting."
      },
      {
        "type": "paragraph",
        "text": "A natural brown lens should add dimension around the iris, softly define the limbal area and give the eye more depth without making the viewer pause for the wrong reason. Ideally, the reaction should not be “Nice lenses.” It should be “You look really good today.”"
      },
      {
        "type": "link",
        "text": "Explore natural-looking brown lenses",
        "href": "https://monvue.in/collections/all"
      },
      {
        "type": "heading",
        "text": "The Monvue point of view"
      },
      {
        "type": "paragraph",
        "text": "For Monvue, brown is not basic. It is foundational. It is the shade family that allows cosmetic lenses to feel intimate, wearable and modern. It belongs to the world of everyday beauty — the kind that looks effortless, even when it has been designed very carefully."
      }
    ]
  },
  {
    "id": 2,
    "category": "Beauty & Style",
    "title": "The Art of Looking Effortless",
    "subtitle": "Why modern beauty is moving away from obvious transformation.",
    "readTime": "6 min read",
    "featuredLens": "Mocha Mist",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop",
    "body": [
      {
        "type": "heading",
        "text": "Effortless is not accidental"
      },
      {
        "type": "paragraph",
        "text": "The word effortless is misleading. The most effortless-looking beauty often comes from the most careful editing: a base that still looks like skin, brows that frame without hardening, a lip colour that lifts the face without dominating it, and eyes that feel clear, soft and defined."
      },
      {
        "type": "paragraph",
        "text": "This is where cosmetic lenses are beginning to play a different role. Older coloured lenses often treated the eye as a standalone feature. The lens was the statement. The newer approach is more intelligent: the lens supports the face instead of competing with it."
      },
      {
        "type": "highlight",
        "text": "Effortless beauty is not about doing less. It is about making the right things disappear."
      },
      {
        "type": "heading",
        "text": "Why subtle lenses feel more expensive"
      },
      {
        "type": "paragraph",
        "text": "A lens that is too opaque can flatten the iris. A lens that is too large can make the eye look doll-like. A lens that is too cool-toned can create a mismatch with warm Indian undertones. These small errors are exactly what make a lens feel artificial, even if the colour looks attractive in isolation."
      },
      {
        "type": "paragraph",
        "text": "Subtle lenses feel more premium because they preserve the eye’s natural complexity. Real irises are not flat circles. They have variation, shadows, tiny shifts in colour and depth. The best cosmetic lenses respect that irregularity rather than covering it completely."
      },
      {
        "type": "quote",
        "text": "Modern beauty is not about hiding the original. It is about editing gently."
      },
      {
        "type": "heading",
        "text": "The new beauty signal"
      },
      {
        "type": "paragraph",
        "text": "A decade ago, transformation felt aspirational. Today, taste is often expressed through restraint. This is visible in fashion, interiors, skincare and makeup. Logos have become smaller. Skin has become less masked. Hair is styled to look less styled. Beauty has moved from performance to presence."
      },
      {
        "type": "paragraph",
        "text": "Cosmetic lenses are following the same path. The best lens for everyday wear is not necessarily the one with the most visible colour. It is the one that makes your natural features look more intentional."
      },
      {
        "type": "link",
        "text": "Read more on Monvue lens design",
        "href": "https://monvue.in/pages/about"
      },
      {
        "type": "heading",
        "text": "How to choose an effortless lens"
      },
      {
        "type": "paragraph",
        "text": "Start with your natural eye colour and skin tone. If your eyes are very dark, choose shades with soft opacity and layered patterns. If your skin has warm undertones, browns, hazels and muted mocha shades often feel more natural than icy greys or bright blues. The aim is not to erase your iris. It is to give it more dimension."
      }
    ]
  },
  {
    "id": 3,
    "category": "Lens Education",
    "title": "What Actually Makes a Contact Lens Comfortable?",
    "subtitle": "It is not just about water content. Here is what really matters.",
    "readTime": "7 min read",
    "featuredLens": "Daily Mocha",
    "image": "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=1600&auto=format&fit=crop",
    "body": [
      {
        "type": "heading",
        "text": "Comfort is a system, not a single feature"
      },
      {
        "type": "paragraph",
        "text": "Most people assume coloured lenses become uncomfortable because of the colour. Usually, that is not the real reason. Comfort is created by a combination of material, hydration, oxygen flow, edge design, fit, hygiene and the number of hours the lens is worn."
      },
      {
        "type": "paragraph",
        "text": "A good lens should feel almost invisible. It should not feel dry within the first hour. It should not feel heavy when you blink. It should not create a sharp sensation near the edge. It should move naturally with the eye and remain stable enough that you forget about it."
      },
      {
        "type": "highlight",
        "text": "Lens quality is often felt before it is seen."
      },
      {
        "type": "heading",
        "text": "Water content matters — but it is not the whole story"
      },
      {
        "type": "paragraph",
        "text": "Water content is often used like a headline claim, but it can be misunderstood. Higher water content may sound automatically better, but what matters is how the material holds moisture over time and how it balances hydration with oxygen permeability."
      },
      {
        "type": "paragraph",
        "text": "A lens can feel comfortable at the beginning and then dry out later. This is why moisture retention matters. The real test of comfort is not the first five minutes. It is hour four, hour six, and how your eyes feel after removing the lens at the end of the day."
      },
      {
        "type": "heading",
        "text": "Edge design is underrated"
      },
      {
        "type": "paragraph",
        "text": "The edge of the lens touches the eye every time you blink. If the edge is not smooth, even a beautiful lens can feel irritating. A well-designed edge reduces friction and allows the eyelid to move over the lens more naturally."
      },
      {
        "type": "quote",
        "text": "A comfortable lens should not keep reminding you that it exists."
      },
      {
        "type": "heading",
        "text": "Fit and diameter also matter"
      },
      {
        "type": "paragraph",
        "text": "Diameter is often discussed only as an aesthetic choice, but it also affects comfort. If a lens feels too large, too tight or unstable, it can become tiring. The right diameter should give the desired look while still feeling natural through normal blinking and eye movement."
      },
      {
        "type": "paragraph",
        "text": "For first-time users, this is why starting with a trial pack can be useful. It allows you to understand not only what shade suits your face, but also how your eyes respond to lens wear."
      },
      {
        "type": "link",
        "text": "See Monvue lens options",
        "href": "https://monvue.in/collections/all"
      }
    ]
  },
  {
    "id": 4,
    "category": "Lens Education",
    "title": "Daily vs Monthly Lenses: What Should You Choose?",
    "subtitle": "A simple guide for people buying cosmetic lenses for the first time.",
    "readTime": "7 min read",
    "featuredLens": "Trial Pack",
    "image": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1600&auto=format&fit=crop",
    "body": [
      {
        "type": "heading",
        "text": "The real question is lifestyle"
      },
      {
        "type": "paragraph",
        "text": "Daily and monthly lenses are not simply two price points. They are two different habits. The right choice depends on how often you wear lenses, how comfortable you are with cleaning routines, how sensitive your eyes are and whether you are buying for daily use or occasional styling."
      },
      {
        "type": "paragraph",
        "text": "A first-time buyer often asks, “Which one is better?” The more useful question is, “Which one fits the way I will actually use them?” Because a lens is only safe and comfortable when it is used correctly."
      },
      {
        "type": "heading",
        "text": "Daily lenses: fresh, simple, low-maintenance"
      },
      {
        "type": "paragraph",
        "text": "Daily lenses are designed to be worn once and discarded. That makes them very convenient. You do not need a storage case, cleaning solution or a nightly care routine. Every time you wear them, you start with a fresh pair."
      },
      {
        "type": "paragraph",
        "text": "This makes dailies especially useful for travel, events, occasional wear, beginners and people who do not want to think too much about maintenance. They can also be a good way to test whether cosmetic lenses suit your lifestyle before committing to frequent wear."
      },
      {
        "type": "highlight",
        "text": "Daily lenses are usually the easiest entry point for new lens users."
      },
      {
        "type": "heading",
        "text": "Monthly lenses: better for disciplined frequent users"
      },
      {
        "type": "paragraph",
        "text": "Monthly lenses can make sense if you wear lenses regularly and are careful about hygiene. They must be cleaned, stored properly and replaced on schedule. The monthly cycle starts after opening, not after thirty wears. This is an important distinction many new users miss."
      },
      {
        "type": "paragraph",
        "text": "If you are disciplined, monthly lenses can be practical. But if you are likely to forget cleaning, reuse old solution or leave lenses in a case for too long, daily lenses may be the safer choice."
      },
      {
        "type": "quote",
        "text": "The best lens is not the one with the longest use. It is the one you will use correctly."
      },
      {
        "type": "heading",
        "text": "How to decide"
      },
      {
        "type": "paragraph",
        "text": "Choose dailies if you are new, travelling, wearing lenses occasionally or want maximum convenience. Choose monthlies if you wear lenses often and are comfortable with proper care. If you are unsure, start with a trial pack and pay attention to both look and comfort."
      },
      {
        "type": "link",
        "text": "Try Monvue before choosing",
        "href": "https://monvue.in/products/trial-pack"
      }
    ]
  },
  {
    "id": 5,
    "category": "Culture & Trends",
    "title": "Why Korean Beauty Changed Cosmetic Lenses Forever",
    "subtitle": "The global shift from dramatic transformation to natural enhancement.",
    "readTime": "7 min read",
    "featuredLens": "Hazel Dew",
    "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1600&auto=format&fit=crop",
    "body": [
      {
        "type": "heading",
        "text": "A different beauty philosophy"
      },
      {
        "type": "paragraph",
        "text": "Korean beauty changed cosmetic lenses because it changed the objective. The goal was no longer to look dramatically different. It was to look like the most refined version of yourself: brighter, softer, fresher, but still natural."
      },
      {
        "type": "paragraph",
        "text": "This philosophy reshaped how lenses were designed. Colours became less harsh. Patterns became more iris-like. Diameters became more wearable. The lens stopped being a costume and started becoming part of a complete beauty routine."
      },
      {
        "type": "highlight",
        "text": "K-beauty made subtle enhancement feel aspirational."
      },
      {
        "type": "heading",
        "text": "From product to mood"
      },
      {
        "type": "paragraph",
        "text": "The Korean approach to beauty has always been sensitive to mood. Dewy skin, soft gradients, blurred lips and natural brows are not only techniques; they create an emotional effect. The face looks rested, approachable and quietly polished."
      },
      {
        "type": "paragraph",
        "text": "Cosmetic lenses fit into that same language. Instead of producing a sharp change, they create atmosphere. A warmer iris can make the face feel softer. A slightly defined limbal ring can make the eye area feel clearer. A muted hazel can lift the face without looking theatrical."
      },
      {
        "type": "quote",
        "text": "The cultural shift is clear: enhancement over transformation."
      },
      {
        "type": "heading",
        "text": "Why this matters in India"
      },
      {
        "type": "paragraph",
        "text": "India has a large base of naturally dark eyes and warm skin tones. Many global lens styles were not originally designed with this context in mind. Korean lens design, with its focus on softness and believable enhancement, gives Indian consumers a better starting point — but it still needs interpretation."
      },
      {
        "type": "paragraph",
        "text": "That is where Monvue’s positioning becomes meaningful: Korean precision, but chosen and presented for Indian eyes. Not copied blindly. Not made for a generic global face. Curated for how Indian consumers actually wear beauty."
      },
      {
        "type": "link",
        "text": "Learn about Monvue",
        "href": "https://monvue.in/pages/about"
      }
    ]
  },
  {
    "id": 6,
    "category": "Culture & Trends",
    "title": "Why Everyone Wants Natural-Looking Lenses Now",
    "subtitle": "The trend is not less beauty. It is more intelligent beauty.",
    "readTime": "6 min read",
    "featuredLens": "Soft Hazel",
    "image": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1600&auto=format&fit=crop",
    "body": [
      {
        "type": "heading",
        "text": "The end of obvious beauty"
      },
      {
        "type": "paragraph",
        "text": "Consumers are becoming more visually literate. They can spot filters, heavy editing, exaggerated makeup and artificial lens patterns faster than before. This has changed what feels premium. Obvious beauty can still be fun, but it does not always feel sophisticated."
      },
      {
        "type": "paragraph",
        "text": "Natural-looking lenses sit perfectly inside this shift. They create enough change to be felt, but not so much that they become distracting. They are designed for real faces, real light and real days — not just a close-up product shot."
      },
      {
        "type": "heading",
        "text": "The new compliment"
      },
      {
        "type": "paragraph",
        "text": "The best compliment is no longer “Your lenses look nice.” It is “You look really good today.” That difference is the whole point. When a lens becomes the first thing people notice, it can interrupt the face. When it is well chosen, it improves the overall impression."
      },
      {
        "type": "quote",
        "text": "A beautiful lens should improve the face, not interrupt it."
      },
      {
        "type": "heading",
        "text": "Why natural does not mean boring"
      },
      {
        "type": "paragraph",
        "text": "Natural-looking lenses can still be expressive. The difference lies in how they express. A soft hazel can warm the gaze. A muted brown can add quiet depth. A gentle grey-brown can cool the face without making it look unfamiliar. Natural is not the absence of design; it is design that knows when to stop."
      },
      {
        "type": "highlight",
        "text": "The most modern lens trend is not less beauty. It is better judgement."
      },
      {
        "type": "heading",
        "text": "How to pick a natural-looking lens"
      },
      {
        "type": "paragraph",
        "text": "Look for shades close to your natural colour family, soft edges, layered iris patterns and moderate diameter. Avoid anything that looks like a flat disc. In photographs, the best lenses should catch light while still allowing your natural eye expression to come through."
      },
      {
        "type": "link",
        "text": "Explore subtle lens shades",
        "href": "https://monvue.in/collections/all"
      }
    ]
  },
  {
    "id": 7,
    "category": "Monvue Stories",
    "title": "Designing Monvue for Indian Eyes",
    "subtitle": "A story of purpose, research and a different point of view.",
    "readTime": "7 min read",
    "featuredLens": "Trial Pack",
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1600&auto=format&fit=crop",
    "body": [
      {
        "type": "heading",
        "text": "Starting with the right question"
      },
      {
        "type": "paragraph",
        "text": "For decades, many cosmetic lenses were designed around lighter natural eye colours. Indian eyes were often treated as an afterthought. A shade that looks subtle on a light iris can look completely different on a dark brown iris. A pattern that appears soft in one context can become too stark in another."
      },
      {
        "type": "paragraph",
        "text": "Monvue started with a different question: what would lenses look like if they were designed for Indian skin tones and darker irises first? That question changes everything. It affects colour, opacity, pattern, diameter and how the lens behaves in daylight, office light and evening light."
      },
      {
        "type": "heading",
        "text": "Why Indian eyes need their own lens logic"
      },
      {
        "type": "paragraph",
        "text": "Most Indian eyes already have depth and intensity. A cosmetic lens does not need to create that from scratch. It needs to work with it. Too much opacity can look theatrical. Too little pigment can disappear. The ideal design lives between visible and believable."
      },
      {
        "type": "highlight",
        "text": "For darker irises, subtlety has to be engineered. It does not happen by accident."
      },
      {
        "type": "heading",
        "text": "Korean precision, Indian context"
      },
      {
        "type": "paragraph",
        "text": "The objective was not to import a trend blindly. It was to bring Korean manufacturing precision into a beauty context that feels relevant for Indian wearers. That means looking at shades through the lens of Indian complexions, natural iris darkness, daily wear occasions and comfort expectations."
      },
      {
        "type": "quote",
        "text": "Made for your eyes. Made for your everyday. Made for you."
      },
      {
        "type": "heading",
        "text": "What Monvue wants to stand for"
      },
      {
        "type": "paragraph",
        "text": "Monvue is not built around dramatic before-and-after beauty. It is built around a softer promise: lenses that make you feel more put together without making you feel unlike yourself. This is why the brand language should stay close to enhancement, comfort, skin-tone harmony and everyday confidence."
      },
      {
        "type": "link",
        "text": "Read the Monvue story",
        "href": "https://monvue.in/pages/about"
      }
    ]
  },
  {
    "id": 8,
    "category": "Monvue Stories",
    "title": "From Seoul to India: The Monvue Moodboard",
    "subtitle": "How product, packaging and skin-tone thinking come together.",
    "readTime": "6 min read",
    "featuredLens": "Stone Brown",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop",
    "body": [
      {
        "type": "heading",
        "text": "The moodboard is not just visual"
      },
      {
        "type": "paragraph",
        "text": "Every beauty brand has references. For Monvue, the references are not only colours and packaging. They are moments: morning light on skin, a soft gaze in a mirror, the feeling of getting ready without trying too hard, the confidence of looking polished but not overdone."
      },
      {
        "type": "paragraph",
        "text": "The Seoul influence appears in precision, softness and restraint. The Indian influence appears in warmth, depth and the need to work beautifully on darker natural irises. The brand sits at the meeting point of both."
      },
      {
        "type": "heading",
        "text": "Packaging as a beauty signal"
      },
      {
        "type": "paragraph",
        "text": "For a lens brand, packaging matters because the product is intimate. It touches the eye. The box, the typography, the colour palette and the way information is presented should all signal trust. A cluttered pack can make a premium lens feel ordinary. A calm pack can make the experience feel considered."
      },
      {
        "type": "highlight",
        "text": "The product may be tiny, but the emotional experience around it is large."
      },
      {
        "type": "heading",
        "text": "Why restraint matters"
      },
      {
        "type": "paragraph",
        "text": "Too much opacity can make a lens feel artificial. Too little can disappear completely. Too much branding can make packaging look noisy. Too little information can reduce trust. The Monvue moodboard should always balance desire with clarity."
      },
      {
        "type": "quote",
        "text": "Monvue is built around the tension between visible and believable."
      },
      {
        "type": "heading",
        "text": "A visual language for everyday beauty"
      },
      {
        "type": "paragraph",
        "text": "The future of Monvue Journal should follow the same rule. It should be useful, but not clinical. Beautiful, but not intimidating. Editorial, but not detached from the product. Every article should make the reader feel that Monvue understands both beauty and eyes."
      },
      {
        "type": "link",
        "text": "Explore the collection",
        "href": "https://monvue.in/collections/all"
      }
    ]
  }
];

const categories = ["All", "Beauty & Style", "Lens Education", "Culture & Trends", "Monvue Stories"];

function renderBlock(block, index) {
  if (typeof block === "string") return <p key={index}>{block}</p>;
  if (block.type === "heading") return <h2 key={index}>{block.text}</h2>;
  if (block.type === "quote") return <blockquote key={index}>{block.text}</blockquote>;
  if (block.type === "highlight") return <div key={index} className="highlight">{block.text}</div>;
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
