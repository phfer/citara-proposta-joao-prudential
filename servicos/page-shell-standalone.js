/* =========================================================
   page-shell.js, injects topbar/footer/banner into sub-pages
   ========================================================= */
(function() {
  const base = window.location.pathname.includes('/servicos/') ? '../' : '';

  const banner = `
  <div class="ai-banner" id="ai-banner" role="status">
    <div class="flow" aria-hidden="true"></div>
    <div class="inner">
      <span class="tag"><span class="pulse"></span> Em breve</span>
      <span class="msg">Cítara lança <b>Cítara A.I.</b>, o braço de inteligência artificial da agência &mdash; automação, criativos e insights em escala.</span>
    </div>
    <button class="close" id="ai-banner-close" aria-label="Fechar">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </button>
  </div>`;

  const topbar = `
  <div class="topbar-wrap">
    <div class="container">
      <header class="topbar">
        <a class="brand" href="${base}Citara Landing.html" aria-label="Cítara, início">
          <img src="${window.__resources.logoHorizontal}" alt="Cítara" style="height: 32px; width: auto; display: block;">
        </a>
        <nav class="nav-links">
          <a href="${base}sobre.html">Sobre</a>
          <a href="${base}Citara Landing.html#servicos">Serviços</a>
          <a href="${base}portfolio.html">Portfólio</a>
          <a href="${base}Citara Landing.html#ecossistema">Ecossistema</a>
          <a href="${base}Citara Landing.html#contato">Contato</a>
        </nav>
        <div class="topbar-cta">
          <a class="btn btn-primary" href="${base}Citara Landing.html#contato">Falar com o time</a>
        </div>
      </header>
    </div>
  </div>`;

  const footer = `
  <footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <div>
          <a class="brand" href="${base}Citara Landing.html">
            <img src="${window.__resources.logoVertical}" alt="Cítara" style="height: 96px; width: auto; display: block;">
          </a>
          <div class="footer-tag" style="margin-top:16px;">Comunicação que ressoa.</div>
          <div class="footer-socials" style="margin-top: 20px;">
            <a href="#" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
            <a href="#" aria-label="Instagram"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/></svg></a>
          </div>
        </div>
        <div>
          <h5>Serviços</h5>
          <ul>
            <li><a href="${base}servicos/midia-de-performance.html">Mídia de performance</a></li>
            <li><a href="${base}servicos/seo.html">SEO orgânico</a></li>
            <li><a href="${base}servicos/crm-automacao.html">CRM e automação</a></li>
            <li><a href="${base}servicos/gestao-de-redes.html">Gestão de redes</a></li>
            <li><a href="${base}servicos/branding.html">Branding</a></li>
            <li><a href="${base}servicos/analytics-bi.html">Analytics e BI</a></li>
          </ul>
        </div>
        <div>
          <h5>Agência</h5>
          <ul>
            <li><a href="${base}sobre.html">Sobre</a></li>
            <li><a href="${base}portfolio.html">Portfólio</a></li>
            <li><a href="${base}Citara Landing.html#ecossistema">Ecossistema</a></li>
            <li><a href="${base}Citara Landing.html#contato">Contato</a></li>
          </ul>
        </div>
        <div>
          <h5>Contato</h5>
          <ul>
            <li>Av. Maria de Jesus Condeixa, 600<br>Sala 234, Ribeirão Preto, SP</li>
            <li><a href="mailto:contato@citaramarketing.com.br">contato@citaramarketing.com.br</a></li>
            <li><a href="tel:+5516991864510">16 99186-4510</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div>© 2026 Cítara Marketing · CNPJ 00.000.000/0001-00</div>
        <div>Made in Ribeirão Preto + São Paulo</div>
      </div>
    </div>
  </footer>`;

  const mount = document.getElementById('page-mount');
  const mountEnd = document.getElementById('page-mount-end');
  if (mount) {
    mount.insertAdjacentHTML('beforebegin', banner + topbar);
  }
  if (mountEnd) {
    mountEnd.insertAdjacentHTML('afterend', footer);
  } else {
    document.body.insertAdjacentHTML('beforeend', footer);
  }
  // Safety: ensure footer is the last element of body, regardless of where inserted
  const footerEl = document.querySelector('body > footer.footer');
  if (footerEl && footerEl !== document.body.lastElementChild) {
    document.body.appendChild(footerEl);
  }

  // Banner close
  const aiBanner = document.getElementById('ai-banner');
  const aiBannerClose = document.getElementById('ai-banner-close');
  if (aiBanner && aiBannerClose) {
    if (localStorage.getItem('citara-ai-banner-closed') === '1') aiBanner.classList.add('hidden');
    aiBannerClose.addEventListener('click', () => {
      aiBanner.classList.add('hidden');
      localStorage.setItem('citara-ai-banner-closed', '1');
    });
  }

  // Spotlight pointer tracking
  document.querySelectorAll('.deliverable, .port-card, .team-card, .related-svcs a').forEach(el => {
    el.setAttribute('data-glow', 'magenta');
  });
  const sync = (e) => {
    document.querySelectorAll('[data-glow]').forEach(el => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--x', (e.clientX - r.left).toFixed(0));
      el.style.setProperty('--y', (e.clientY - r.top).toFixed(0));
      el.style.setProperty('--xp', ((e.clientX - r.left) / r.width).toFixed(3));
    });
  };
  document.addEventListener('pointermove', sync, { passive: true });
})();
