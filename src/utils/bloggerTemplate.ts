/**
 * Production-ready Blogger-compatible XML Template Generator
 * 
 * Strict specifications met:
 * 1. 100% valid XML - all tags closed properly (self-closing <meta />, <link />, <input />, <hr />)
 * 2. CDATA wrappers used for all CSS styles and JavaScript logic
 * 3. No unescaped '&' characters
 * 4. No duplicate IDs
 * 5. Vanilla JavaScript only — zero external runtime dependencies
 * 6. Responsive CSS grid and flexbox, mobile touch ergonomics
 * 7. Privacy compliant — contact details in JS config, never printed as visible raw text
 */

export function generateBloggerXML(): string {
  return `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultwidgetversion='2' b:layoutsversion='3' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
  <meta charset='utf-8' />
  <meta content='width=device-width, initial-scale=1.0' name='viewport' />
  <title><data:view.title.escaped/> — Digital Developer</title>
  <meta content='Digital Developer is a professional website development agency offering custom-built websites, landing pages, e-commerce, Blogger templates, and responsive redesigns.' name='description' />
  
  <b:skin><![CDATA[
  /* Reset & Box Sizing */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  :root {
    --bg-primary: #090d16;
    --bg-surface: #0f172a;
    --bg-card: #141e33;
    --border-color: #1e293b;
    --border-highlight: #334155;
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
    --accent: #2563eb;
    --accent-hover: #1d4ed8;
    --accent-light: rgba(37, 99, 235, 0.15);
    --whatsapp-green: #25d366;
    --whatsapp-green-hover: #1ebe57;
    --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  html {
    scroll-behavior: smooth;
    background-color: var(--bg-primary);
    color: var(--text-main);
    font-family: var(--font-family);
    line-height: 1.6;
  }

  body {
    background-color: var(--bg-primary);
    color: var(--text-main);
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* Containers */
  .site-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Header */
  .site-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(9, 13, 22, 0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border-color);
  }

  .nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
  }

  .brand-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    font-size: 1.25rem;
    letter-spacing: -0.02em;
  }

  .brand-badge {
    background: var(--accent);
    color: #ffffff;
    font-size: 0.85rem;
    font-weight: 700;
    padding: 4px 8px;
    border-radius: 6px;
  }

  .nav-menu {
    display: flex;
    align-items: center;
    gap: 28px;
    list-style: none;
  }

  .nav-link {
    color: var(--text-muted);
    font-size: 0.95rem;
    font-weight: 500;
    transition: color 0.2s ease;
  }

  .nav-link:hover {
    color: var(--text-main);
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    border: none;
    transition: all 0.2s ease;
  }

  .btn-primary {
    background: var(--accent);
    color: #ffffff;
  }

  .btn-primary:hover {
    background: var(--accent-hover);
  }

  .btn-whatsapp {
    background: #15803d;
    color: #ffffff;
  }

  .btn-whatsapp:hover {
    background: #166534;
  }

  .btn-outline {
    background: transparent;
    border: 1px solid var(--border-highlight);
    color: var(--text-main);
  }

  .btn-outline:hover {
    background: var(--bg-card);
    border-color: var(--accent);
  }

  .menu-toggle {
    display: none;
    background: none;
    border: 1px solid var(--border-color);
    color: var(--text-main);
    padding: 8px 12px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1.25rem;
  }

  /* Hero Section */
  .hero-section {
    padding: 80px 0 60px;
    text-align: center;
  }

  .hero-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--accent-light);
    border: 1px solid rgba(37, 99, 235, 0.3);
    color: #60a5fa;
    padding: 6px 14px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 24px;
  }

  .hero-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -0.03em;
    max-width: 900px;
    margin: 0 auto 20px;
  }

  .hero-subtitle {
    font-size: 1.15rem;
    color: var(--text-muted);
    max-width: 720px;
    margin: 0 auto 36px;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px;
    margin-bottom: 40px;
  }

  /* Section Common */
  .section-pad {
    padding: 80px 0;
    border-top: 1px solid var(--border-color);
  }

  .section-header {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 50px;
  }

  .section-tag {
    color: #60a5fa;
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 8px;
    display: block;
  }

  .section-title {
    font-size: 2.2rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 14px;
  }

  .section-desc {
    color: var(--text-muted);
    font-size: 1rem;
  }

  /* Grid Layouts */
  .grid-3 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
  }

  .card {
    background: var(--bg-surface);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 28px;
    transition: transform 0.2s ease, border-color 0.2s ease;
  }

  .card:hover {
    transform: translateY(-3px);
    border-color: var(--border-highlight);
  }

  .card-icon {
    width: 44px;
    height: 44px;
    border-radius: 8px;
    background: var(--accent-light);
    color: #60a5fa;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 18px;
  }

  .card-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .card-text {
    color: var(--text-muted);
    font-size: 0.95rem;
    margin-bottom: 20px;
  }

  .feature-list {
    list-style: none;
    margin-bottom: 24px;
  }

  .feature-list li {
    font-size: 0.88rem;
    color: #cbd5e1;
    margin-bottom: 8px;
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  .feature-list li::before {
    content: "✓";
    color: #38bdf8;
    font-weight: bold;
  }

  /* Form Elements */
  .form-group {
    margin-bottom: 18px;
    text-align: left;
  }

  .form-label {
    display: block;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 6px;
    color: #cbd5e1;
  }

  .form-control {
    width: 100%;
    padding: 12px 14px;
    background: #0b1120;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    color: var(--text-main);
    font-size: 0.95rem;
    font-family: inherit;
  }

  .form-control:focus {
    outline: none;
    border-color: var(--accent);
  }

  .form-error {
    color: #f87171;
    font-size: 0.8rem;
    margin-top: 4px;
    display: none;
  }

  /* Floating WhatsApp */
  .floating-wa {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 999;
    background: #25d366;
    color: #ffffff;
    padding: 12px 18px;
    border-radius: 50px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 0.9rem;
    transition: transform 0.2s ease;
  }

  .floating-wa:hover {
    transform: scale(1.05);
  }

  /* Footer */
  .site-footer {
    border-top: 1px solid var(--border-color);
    padding: 50px 0 30px;
    background: var(--bg-surface);
    color: var(--text-muted);
    font-size: 0.9rem;
  }

  /* Responsive Media Queries */
  @media (max-width: 768px) {
    .nav-menu {
      display: none;
      position: absolute;
      top: 72px;
      left: 0;
      right: 0;
      background: var(--bg-surface);
      border-bottom: 1px solid var(--border-color);
      flex-direction: column;
      padding: 20px;
      gap: 16px;
    }

    .nav-menu.active {
      display: flex;
    }

    .menu-toggle {
      display: block;
    }

    .grid-3 {
      grid-template-columns: 1fr;
    }
  }
  ]]></b:skin>
</head>
<body>

  <!-- Sticky Header -->
  <header class='site-header'>
    <div class='site-container'>
      <div class='nav-wrapper'>
        <a class='brand-logo' href='#'>
          <span class='brand-badge'>&lt;/&gt;</span>
          <span>Digital Developer</span>
        </a>

        <button aria-label='Toggle navigation menu' class='menu-toggle' id='menuBtn'>☰</button>

        <ul class='nav-menu' id='navMenu'>
          <li><a class='nav-link' href='#services'>Services</a></li>
          <li><a class='nav-link' href='#portfolio'>Portfolio</a></li>
          <li><a class='nav-link' href='#process'>Process</a></li>
          <li><a class='nav-link' href='#pricing'>Pricing</a></li>
          <li><a class='nav-link' href='#contact'>Contact</a></li>
          <li><button class='btn btn-primary' id='headerStartBtn'>Start a Project</button></li>
        </ul>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class='hero-section'>
    <div class='site-container'>
      <div class='hero-pill'>Custom Web Development Agency</div>
      <h1 class='hero-title'>Custom Website Development Engineered for Growth &amp; Performance</h1>
      <p class='hero-subtitle'>
        We design and build bespoke business websites, high-converting landing pages, e-commerce stores, and custom Blogger templates tailored precisely to your requirements.
      </p>
      <div class='hero-actions'>
        <button class='btn btn-primary' id='heroStartBtn'>Start a Project</button>
        <a class='btn btn-outline' href='#portfolio'>View Our Work</a>
        <button class='btn btn-whatsapp' id='heroWaBtn'>WhatsApp Us</button>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class='section-pad' id='services'>
    <div class='site-container'>
      <div class='section-header'>
        <span class='section-tag'>What We Build</span>
        <h2 class='section-title'>Comprehensive Web Development Services</h2>
        <p class='section-desc'>Handcrafted code, mobile-first responsiveness, and performance-focused engineering for businesses of all sizes.</p>
      </div>

      <div class='grid-3'>
        <!-- Service 1 -->
        <div class='card'>
          <div class='card-icon'>💼</div>
          <h3 class='card-title'>Business Websites</h3>
          <p class='card-text'>Corporate multi-page websites designed to establish trust, showcase authority, and convert prospective clients.</p>
          <ul class='feature-list'>
            <li>Strategic information architecture</li>
            <li>Inquiry &amp; lead capture funnels</li>
            <li>Sub-second loading speeds</li>
          </ul>
          <button class='btn btn-outline service-inquire-btn' data-service='Business Websites'>Inquire on WhatsApp</button>
        </div>

        <!-- Service 2 -->
        <div class='card'>
          <div class='card-icon'>🚀</div>
          <h3 class='card-title'>Landing Pages</h3>
          <p class='card-text'>Laser-focused, single-page promotional and product launch funnels built for maximum conversion rates.</p>
          <ul class='feature-list'>
            <li>Distraction-free conversion hierarchy</li>
            <li>Above-the-fold value proposition</li>
            <li>A/B testing readiness</li>
          </ul>
          <button class='btn btn-outline service-inquire-btn' data-service='Landing Pages'>Inquire on WhatsApp</button>
        </div>

        <!-- Service 3 -->
        <div class='card'>
          <div class='card-icon'>🛍️</div>
          <h3 class='card-title'>E-Commerce Websites</h3>
          <p class='card-text'>Seamless storefronts with catalog browsing, instant product filtering, and frictionless WhatsApp or gateway checkout.</p>
          <ul class='feature-list'>
            <li>Structured catalog &amp; variant selection</li>
            <li>Direct WhatsApp order routing</li>
            <li>Low checkout abandonment UX</li>
          </ul>
          <button class='btn btn-outline service-inquire-btn' data-service='E-Commerce Websites'>Inquire on WhatsApp</button>
        </div>

        <!-- Service 4 -->
        <div class='card'>
          <div class='card-icon'>🎨</div>
          <h3 class='card-title'>Portfolio Websites</h3>
          <p class='card-text'>Visual-first portfolios for architects, agencies, and creators to showcase case studies and book high-value clients.</p>
          <ul class='feature-list'>
            <li>Filterable project gallery layouts</li>
            <li>Case study deep-dive sections</li>
            <li>Direct booking &amp; contact buttons</li>
          </ul>
          <button class='btn btn-outline service-inquire-btn' data-service='Portfolio Websites'>Inquire on WhatsApp</button>
        </div>

        <!-- Service 5 -->
        <div class='card'>
          <div class='card-icon'>⚡</div>
          <h3 class='card-title'>Blogger Websites</h3>
          <p class='card-text'>Custom Blogger XML templates with modern layouts, zero-maintenance Google cloud hosting, and AdSense readiness.</p>
          <ul class='feature-list'>
            <li>100% compliant XML with CDATA styling</li>
            <li>Custom widget loops &amp; layout modules</li>
            <li>99/100 Mobile PageSpeed score</li>
          </ul>
          <button class='btn btn-outline service-inquire-btn' data-service='Blogger Websites'>Inquire on WhatsApp</button>
        </div>

        <!-- Service 6 -->
        <div class='card'>
          <div class='card-icon'>⚙️</div>
          <h3 class='card-title'>Custom Web Solutions</h3>
          <p class='card-text'>Bespoke calculators, quote generators, customer intake tools, and lightweight web apps built with vanilla JS.</p>
          <ul class='feature-list'>
            <li>Custom business calculations &amp; logic</li>
            <li>Interactive user input workflows</li>
            <li>Lightweight, zero plugin bloat</li>
          </ul>
          <button class='btn btn-outline service-inquire-btn' data-service='Custom Web Solutions'>Inquire on WhatsApp</button>
        </div>

        <!-- Service 7 -->
        <div class='card'>
          <div class='card-icon'>🔄</div>
          <h3 class='card-title'>Website Redesign</h3>
          <p class='card-text'>Modernize outdated sites, eliminate slow legacy code, retain existing SEO rankings, and elevate brand perception.</p>
          <ul class='feature-list'>
            <li>Complete visual &amp; structural overhaul</li>
            <li>SEO ranking preservation</li>
            <li>Improved mobile touch ergonomics</li>
          </ul>
          <button class='btn btn-outline service-inquire-btn' data-service='Website Redesign'>Inquire on WhatsApp</button>
        </div>

        <!-- Service 8 -->
        <div class='card'>
          <div class='card-icon'>📱</div>
          <h3 class='card-title'>Responsive Design</h3>
          <p class='card-text'>Flawless visual presentation and effortless ergonomics across all smartphones, tablets, and desktop screens.</p>
          <ul class='feature-list'>
            <li>Mobile-first fluid grid architecture</li>
            <li>Thumb-friendly touch targets (44px+)</li>
            <li>Cross-browser rendering tests</li>
          </ul>
          <button class='btn btn-outline service-inquire-btn' data-service='Responsive Design'>Inquire on WhatsApp</button>
        </div>

        <!-- Service 9 -->
        <div class='card'>
          <div class='card-icon'>🔍</div>
          <h3 class='card-title'>SEO-Friendly Development</h3>
          <p class='card-text'>Semantic HTML5 markup, Open Graph previews, and fast Core Web Vitals to maximize search engine discoverability.</p>
          <ul class='feature-list'>
            <li>Semantic heading structure (H1, H2, H3)</li>
            <li>Social Open Graph &amp; Twitter tags</li>
            <li>Core Web Vitals optimization</li>
          </ul>
          <button class='btn btn-outline service-inquire-btn' data-service='SEO-Friendly Development'>Inquire on WhatsApp</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Process Section -->
  <section class='section-pad' id='process'>
    <div class='site-container'>
      <div class='section-header'>
        <span class='section-tag'>Transparent Workflow</span>
        <h2 class='section-title'>How We Work</h2>
        <p class='section-desc'>A structured 8-step journey from initial concept to live launch with clear milestones.</p>
      </div>

      <div class='grid-3'>
        <div class='card'>
          <h3 class='card-title'>1. Requirements</h3>
          <p class='card-text'>We review your website goals, target audience, page count, and key functionality requirements.</p>
        </div>
        <div class='card'>
          <h3 class='card-title'>2. Discussion</h3>
          <p class='card-text'>Direct consultation via WhatsApp or email to align on technical choices, milestones, and timeline.</p>
        </div>
        <div class='card'>
          <h3 class='card-title'>3. Design</h3>
          <p class='card-text'>Structuring visual hierarchy, typography, mobile layouts, and conversion paths before coding.</p>
        </div>
        <div class='card'>
          <h3 class='card-title'>4. Development</h3>
          <p class='card-text'>Handcrafting lightweight, semantic, and fast code with zero unnecessary external bloat.</p>
        </div>
        <div class='card'>
          <h3 class='card-title'>5. Review</h3>
          <p class='card-text'>You test an interactive staging preview on your phone and laptop to verify every detail.</p>
        </div>
        <div class='card'>
          <h3 class='card-title'>6. Revisions</h3>
          <p class='card-text'>We fine-tune spacing, typography, colors, and content according to your feedback.</p>
        </div>
        <div class='card'>
          <h3 class='card-title'>7. Delivery</h3>
          <p class='card-text'>Live domain deployment, Blogger XML installation, and clean source code handover.</p>
        </div>
        <div class='card'>
          <h3 class='card-title'>8. Support</h3>
          <p class='card-text'>Post-launch assistance and guidance to keep your new website running smoothly.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing Section -->
  <section class='section-pad' id='pricing'>
    <div class='site-container'>
      <div class='section-header'>
        <span class='section-tag'>Fair &amp; Transparent</span>
        <h2 class='section-title'>Project-Based Custom Pricing</h2>
        <p class='section-desc'>Every project is unique. Rather than charging arbitrary fixed rates, we price based on your exact page count, features, complexity, and deadline.</p>
      </div>

      <div class='card' style='max-width: 800px; margin: 0 auto; text-align: center;'>
        <h3 class='card-title' style='font-size: 1.5rem;'>Get a Transparent Custom Quote</h3>
        <p class='card-text'>Share your requirements with us to receive a clear, milestone-based proposal with no hidden fees.</p>
        <div style='display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;'>
          <button class='btn btn-primary' id='quoteWaBtn'>Get Custom Quote via WhatsApp</button>
          <button class='btn btn-outline' id='quoteEmailBtn'>Email Us for a Quote</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section class='section-pad' id='contact'>
    <div class='site-container'>
      <div class='section-header'>
        <span class='section-tag'>Direct Contact</span>
        <h2 class='section-title'>Start Your Project</h2>
        <p class='section-desc'>Fill out your details below to send a pre-filled project brief directly via WhatsApp or Email.</p>
      </div>

      <div class='card' style='max-width: 640px; margin: 0 auto;'>
        <form id='projectForm' novalidate='novalidate'>
          <div class='form-group'>
            <label class='form-label' for='clientName'>Your Name *</label>
            <input class='form-control' id='clientName' placeholder='e.g. Alex Morgan' type='text' />
            <div class='form-error' id='nameError'>Please enter your name.</div>
          </div>

          <div class='form-group'>
            <label class='form-label' for='clientEmail'>Your Email *</label>
            <input class='form-control' id='clientEmail' placeholder='e.g. alex@example.com' type='email' />
            <div class='form-error' id='emailError'>Please enter a valid email address.</div>
          </div>

          <div class='form-group'>
            <label class='form-label' for='projectTypeSelect'>Website Type</label>
            <select class='form-control' id='projectTypeSelect'>
              <option value='Business Website'>Business Website</option>
              <option value='Landing Page'>Landing Page</option>
              <option value='E-Commerce Store'>E-Commerce Store</option>
              <option value='Portfolio Website'>Portfolio Website</option>
              <option value='Blogger Website'>Blogger Website / Template</option>
              <option value='Website Redesign'>Website Redesign</option>
              <option value='Custom Web Solution'>Custom Web Solution</option>
            </select>
          </div>

          <div class='form-group'>
            <label class='form-label' for='projectDetails'>Project Details &amp; Notes</label>
            <textarea class='form-control' id='projectDetails' placeholder='Briefly tell us about your project goals, pages needed, or references...' rows='4'></textarea>
          </div>

          <div style='display: flex; gap: 12px; flex-wrap: wrap; margin-top: 24px;'>
            <button class='btn btn-whatsapp' id='submitWaBtn' style='flex: 1;' type='submit'>Send to WhatsApp</button>
            <button class='btn btn-outline' id='submitEmailBtn' style='flex: 1;' type='button'>Send via Email</button>
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- Blogger Body Section (Required by Blogger engine) -->
  <main style='display:none;'>
    <b:section class='main' id='main' maxwidgets='1' showaddelement='no'>
      <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog' version='2'>
        <b:includable id='main'>
          <!-- Content placeholder for Blogger runtime -->
        </b:includable>
      </b:widget>
    </b:section>
  </main>

  <!-- Floating WhatsApp Button -->
  <a aria-label='WhatsApp Us' class='floating-wa' href='#' id='floatingWaBtn'>
    <span>💬</span>
    <span>WhatsApp Us</span>
  </a>

  <!-- Footer -->
  <footer class='site-footer'>
    <div class='site-container' style='text-align: center;'>
      <div style='margin-bottom: 16px; font-weight: 700; font-size: 1.1rem;'>Digital Developer</div>
      <p style='max-width: 500px; margin: 0 auto 20px;'>
        Bespoke website development agency delivering high-performance, handcrafted web solutions tailored to your requirements.
      </p>
      <div style='display: flex; justify-content: center; gap: 14px; margin-bottom: 24px;'>
        <button class='btn btn-whatsapp' id='footerWaBtn'>WhatsApp Us</button>
        <button class='btn btn-outline' id='footerEmailBtn'>Email Us</button>
      </div>
      <div style='font-size: 0.82rem; color: #64748b;'>
        &copy; 2026 Digital Developer. All rights reserved.
      </div>
    </div>
  </footer>

  <!-- Central JS Configuration & Logic -->
  <script type='text/javascript'><![CDATA[
  // Central Contact Configuration (Private - Never printed as raw visible text)
  const AGENCY_CONFIG = {
    brandName: "Digital Developer",
    whatsappNumber: "923467237420",
    emailAddress: "umarkwork.pk@gmail.com",
    defaultMessage: "Hello Digital Developer, I am interested in discussing a website development project.",
    quoteMessage: "Hello Digital Developer, I would like to request a custom quote for my website project.",
    getServiceMessage: function(serviceName) {
      return "Hello Digital Developer, I would like to inquire about your \"" + serviceName + "\" service.";
    }
  };

  // Helper to open WhatsApp
  function openWhatsApp(customText) {
    var text = customText || AGENCY_CONFIG.defaultMessage;
    var url = "https://wa.me/" + AGENCY_CONFIG.whatsappNumber + "?text=" + encodeURIComponent(text);
    window.open(url, "_blank");
  }

  // Helper to open Mailto
  function openEmail(subject, body) {
    var sub = subject || "Website Development Inquiry — " + AGENCY_CONFIG.brandName;
    var b = body ? ("&body=" + encodeURIComponent(body)) : "";
    window.location.href = "mailto:" + AGENCY_CONFIG.emailAddress + "?subject=" + encodeURIComponent(sub) + b;
  }

  // Mobile Menu Toggle
  var menuBtn = document.getElementById("menuBtn");
  var navMenu = document.getElementById("navMenu");
  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", function() {
      navMenu.classList.toggle("active");
    });
  }

  // Bind Buttons
  function bindClick(id, handler) {
    var el = document.getElementById(id);
    if (el) el.addEventListener("click", handler);
  }

  bindClick("heroStartBtn", function() {
    var el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  });

  bindClick("headerStartBtn", function() {
    var el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  });

  bindClick("heroWaBtn", function() {
    openWhatsApp(AGENCY_CONFIG.defaultMessage);
  });

  bindClick("floatingWaBtn", function(e) {
    e.preventDefault();
    openWhatsApp(AGENCY_CONFIG.defaultMessage);
  });

  bindClick("quoteWaBtn", function() {
    openWhatsApp(AGENCY_CONFIG.quoteMessage);
  });

  bindClick("quoteEmailBtn", function() {
    openEmail("Quote Request — Digital Developer", "Hello Digital Developer,\n\nI would like to request a custom quote for a website project.");
  });

  bindClick("footerWaBtn", function() {
    openWhatsApp(AGENCY_CONFIG.defaultMessage);
  });

  bindClick("footerEmailBtn", function() {
    openEmail("General Inquiry — Digital Developer", "Hello Digital Developer,\n\nI am contacting you regarding a potential website development project.");
  });

  // Bind Service Inquire Buttons
  var serviceButtons = document.querySelectorAll(".service-inquire-btn");
  serviceButtons.forEach(function(btn) {
    btn.addEventListener("click", function() {
      var serviceName = btn.getAttribute("data-service") || "Web Development";
      openWhatsApp(AGENCY_CONFIG.getServiceMessage(serviceName));
    });
  });

  // Contact Form Submission & Validation
  var form = document.getElementById("projectForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      handleFormSubmit(true);
    });

    var submitEmailBtn = document.getElementById("submitEmailBtn");
    if (submitEmailBtn) {
      submitEmailBtn.addEventListener("click", function() {
        handleFormSubmit(false);
      });
    }
  }

  function handleFormSubmit(isWhatsApp) {
    var nameInput = document.getElementById("clientName");
    var emailInput = document.getElementById("clientEmail");
    var typeInput = document.getElementById("projectTypeSelect");
    var detailsInput = document.getElementById("projectDetails");

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");

    var name = nameInput ? nameInput.value.trim() : "";
    var email = emailInput ? emailInput.value.trim() : "";
    var type = typeInput ? typeInput.value : "Website Project";
    var details = detailsInput ? detailsInput.value.trim() : "";

    var isValid = true;

    // Validate Name
    if (!name) {
      if (nameError) nameError.style.display = "block";
      isValid = false;
    } else {
      if (nameError) nameError.style.display = "none";
    }

    // Validate Email
    var emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      if (emailError) emailError.style.display = "block";
      isValid = false;
    } else {
      if (emailError) emailError.style.display = "none";
    }

    if (!isValid) return;

    var summaryText = "Project Inquiry from " + name + "\\n" +
      "Email: " + email + "\\n" +
      "Type: " + type + "\\n" +
      (details ? ("Details: " + details) : "");

    if (isWhatsApp) {
      openWhatsApp(summaryText);
    } else {
      openEmail("Project Request: " + type + " (" + name + ")", summaryText);
    }
  }
  ]]></script>
</body>
</html>`;
}
