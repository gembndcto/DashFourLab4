// App.js
// A single-file modern React app that includes routing, a polished Navbar, Footer,
// and expanded page content (Home, About, Contact, Product list + detail, NotFound).
// Paste this file into src/App.js (replace existing). It injects its own CSS at runtime.

import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";

// ------- Styles injected at runtime (keeps this file self-contained) -------
const APP_CSS = `
:root{
  --bg: #0f172a;
  --card: #0b1220;
  --muted: #94a3b8;
  --accent: #06b6d4;
  --glass: rgba(255,255,255,0.03);
}
*{box-sizing:border-box}
html,body,#root{height:100%}
body{
  margin:0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  background: linear-gradient(180deg, #071022 0%, #0b1220 100%);
  color: #e6eef6;
  -webkit-font-smoothing:antialiased;
}
.app-container{min-height:100vh;display:flex;flex-direction:column}
.header{
  padding:20px 28px;display:flex;align-items:center;justify-content:space-between;gap:16px;
  background: linear-gradient(90deg, rgba(6,182,212,0.08), rgba(99,102,241,0.06));
  border-bottom: 1px solid rgba(255,255,255,0.03);
}
.brand{display:flex;align-items:center;gap:12px}
.logo{width:48px;height:48px;border-radius:10px;background:linear-gradient(135deg,var(--accent),#6366f1);display:flex;align-items:center;justify-content:center;font-weight:700;color:#021018}
.title{font-size:18px;font-weight:700}
.subtitle{font-size:12px;color:var(--muted)}
.navbar{display:flex;gap:14px;align-items:center}
.navbar a{padding:8px 12px;border-radius:8px;color:var(--muted);text-decoration:none;font-weight:600}
.navbar a.active{background:rgba(255,255,255,0.03);color:var(--accent);box-shadow:0 6px 18px rgba(6,182,212,0.06)}
.container{width:100%;max-width:1100px;margin:28px auto;padding:0 18px;flex:1}
.hero{display:flex;gap:24px;align-items:center;background:linear-gradient(180deg, rgba(255,255,255,0.02), transparent);padding:28px;border-radius:14px;box-shadow:0 10px 30px rgba(2,6,23,0.6)}
.hero-left{flex:1}
.hero h1{margin:0;font-size:28px}
.hero p{color:var(--muted);margin-top:8px}
.cta{margin-top:16px;display:flex;gap:12px}
.btn{background:var(--accent);border:none;padding:10px 14px;border-radius:10px;color:#002428;font-weight:700;cursor:pointer}
.secondary{background:transparent;border:1px solid rgba(255,255,255,0.04);color:var(--muted)}
.hero-right{width:320px;display:flex;justify-content:center}
.card-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-top:22px}
.card{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));padding:16px;border-radius:12px;border:1px solid rgba(255,255,255,0.03)}
.card h3{margin:0 0 8px 0}
.card p{color:var(--muted);font-size:14px}
.grid-products{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-top:18px}
.product{background:var(--glass);padding:14px;border-radius:12px;border:1px solid rgba(255,255,255,0.03);text-align:left}
.product h4{margin:0}
.product p{color:var(--muted);font-size:13px}
.footer{padding:18px 24px;border-top:1px solid rgba(255,255,255,0.02);background:linear-gradient(0deg, rgba(255,255,255,0.01), transparent);display:flex;justify-content:space-between;align-items:center;gap:12px}
.small{font-size:13px;color:var(--muted)}
.meta{display:flex;flex-direction:column;gap:2px}
@media(max-width:720px){.hero{flex-direction:column}.hero-right{width:100%}}
.link{color:var(--accent);text-decoration:none;font-weight:700}
`;

// ------- Sample data -------
const PRODUCTS = [
  { id: 1, name: "AeroPhone Mini", price: "$99", desc: "Lightweight music phone with 18h battery." },
  { id: 2, name: "CloudPad 10", price: "$249", desc: "10-inch tablet built for students and creators." },
  { id: 3, name: "Volt Watch S", price: "$179", desc: "Sleek watch with health tracking." },
  { id: 4, name: "NeoDesk Lamp", price: "$39", desc: "Warm LED lamp with touch controls." },
];

// ------- UI Components -------
function Navbar() {
  return (
    <div className="header">
      <div className="brand">
        <div className="logo">L7</div>
        <div>
          <div className="title">Lab 7 — Web Dev (React Routing)</div>
          <div className="subtitle">Section: BSIT 3-4 — Ernest & Sandy</div>
        </div>
      </div>

      <div className="navbar" role="navigation">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? "active" : "")}>Products</NavLink>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div className="meta">
        <div className="small">Creator: Ernest Jules S. Santiago</div>
        <div className="small">Co-Creator: Sandy Mae Macusi</div>
        <div className="small">Section: BSIT 3-4</div>
      </div>
      <div className="small">© Lab 7 — Web Development through React • {new Date().getFullYear()}</div>
    </div>
  );
}

// ------- Pages -------
function Home() {
  return (
    <div>
      <div className="hero">
        <div className="hero-left">
          <h1>Build modern single-page apps with React Router</h1>
          <p>
            This lab demonstrates routes, dynamic URLs, protected pages, and smooth in-app navigation —
            styled to be pleasing and practical for presentation.
          </p>
          <div className="cta">
            <Link className="btn" to="/products">View Products</Link>
            <Link className="btn secondary" to="/about">Learn More</Link>
          </div>

          <div className="card-grid">
            <div className="card">
              <h3>Routing</h3>
              <p>Organize your app into multiple URLs without full page reloads.</p>
            </div>
            <div className="card">
              <h3>Dynamic Pages</h3>
              <p>Use URL parameters to render specific content for each product or user.</p>
            </div>
            <div className="card">
              <h3>Reusable Components</h3>
              <p>Create a single Navbar, Footer, and page components for clarity.</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div style={{width:260}} className="card">
            <h3>Lab Details</h3>
            <p className="small">Title: <strong>Lab 7 — Routing and Navigation</strong></p>
            <p className="small">Creators: Ernest Jules S. Santiago & Sandy Mae Macusi</p>
            <p className="small">Section: BSIT 3-4</p>
            <p style={{marginTop:8}} className="small">Tip: Click Products to see dynamic routes for each item.</p>
          </div>
        </div>
      </div>

      <section style={{marginTop:22}}>
        <h2>Featured Products</h2>
        <div className="grid-products">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="product card">
              <h4>{p.name}</h4>
              <p className="small">{p.desc}</p>
              <p style={{marginTop:8,fontWeight:700}}>{p.price}</p>
              <div style={{marginTop:8}}>
                <Link className="link" to={`/products/${p.id}`}>View details →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About this Lab</h2>
      <div className="card" style={{marginTop:12}}>
        <h3>Objective</h3>
        <p className="small">Implement React Router to manage navigation, use dynamic routes, and practice component structure. Upload final project to GitHub on a personal branch.</p>
      </div>

      <div className="card" style={{marginTop:12}}>
        <h3>What you learned</h3>
        <ul className="small">
          <li>Setting up BrowserRouter, Routes, and Route components</li>
          <li>Using NavLink for active link styles</li>
          <li>Capturing URL parameters with useParams()</li>
          <li>Using useNavigate() for programmatic navigation</li>
        </ul>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <div className="card" style={{marginTop:12}}>
        <p className="small">For questions about the lab, contact the creators:</p>
        <p className="small"><strong>Ernest Jules S. Santiago</strong> — ej@example.com</p>
        <p className="small"><strong>Sandy Mae Macusi</strong> — sandy@example.com</p>
      </div>

      <div className="card" style={{marginTop:12}}>
        <h3>Submission</h3>
        <p className="small">Push your branch to GitHub and include a README with instructions to run the project (npm install, npm start).</p>
      </div>
    </div>
  );
}

function Products() {
  return (
    <div>
      <h2>Products</h2>
      <div className="grid-products" style={{marginTop:12}}>
        {PRODUCTS.map((p) => (
          <div key={p.id} className="product card">
            <h4>{p.name}</h4>
            <p className="small">{p.desc}</p>
            <p style={{marginTop:8,fontWeight:700}}>{p.price}</p>
            <div style={{marginTop:8}}>
              <Link className="link" to={`/products/${p.id}`}>Open details →</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <div>
        <h2>Product not found</h2>
        <div className="card" style={{marginTop:12}}>
          <p className="small">We couldn't find that product. Try another one from the <Link className="link" to="/products">products list</Link>.</p>
          <button className="btn" style={{marginTop:10}} onClick={() => navigate(-1)}>Go back</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <div className="card" style={{marginTop:12}}>
        <p className="small">{product.desc}</p>
        <p style={{marginTop:8,fontWeight:700}}>{product.price}</p>
        <div style={{marginTop:12}}>
          <button className="btn" onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h2>404 — Page not found</h2>
      <div className="card" style={{marginTop:12}}>
        <p className="small">The page you're looking for doesn't exist. Use the navigation above to go back.</p>
        <Link className="link" to="/">Return home</Link>
      </div>
    </div>
  );
}

// ------- Main App -------
export default function App() {
  useEffect(() => {
    const style = document.createElement("style");
    style.id = "lab7-styles";
    style.textContent = APP_CSS;
    document.head.appendChild(style);
    return () => {
      const s = document.getElementById("lab7-styles");
      if (s) s.remove();
    };
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
