/* =========================================================
   megamenu.js, attaches a Serviços dropdown to the topbar
   Works on landing + sub-pages (detects base path from DOM)
   ========================================================= */
(function() {
  // Wait for topbar to exist, page-shell may inject it async on sub-pages
  function attach() {
    const nav = document.querySelector('.nav-links');
    if (!nav) { setTimeout(attach, 30); return; }

    // Find the "Serviços" link
    const links = [...nav.querySelectorAll('a')];
    const servLink = links.find(a => /serviços/i.test(a.textContent.trim()));
    if (!servLink) return;

    // Detect base path — on sub-pages we are one folder deep
    const inSub = window.location.pathname.includes('/servicos/');
    const base = inSub ? '../' : '';

    // Wrap link in .nav-item if not already
    if (!servLink.parentElement.classList.contains('nav-item')) {
      const wrap = document.createElement('span');
      wrap.className = 'nav-item';
      servLink.parentNode.insertBefore(wrap, servLink);
      wrap.appendChild(servLink);
    }
    const navItem = servLink.parentElement;

    // Build the megamenu
    const items = [
      { slug: 'midia-de-performance', name: 'Mídia de performance', desc: 'Meta, Google, TikTok e LinkedIn com server-side.',
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 6-6"/></svg>' },
      { slug: 'seo', name: 'SEO orgânico', desc: 'Canal de aquisição que fica mais barato no tempo.',
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>' },
      { slug: 'crm-automacao', name: 'CRM e automação', desc: 'Kommo, n8n e Chatwoot em orquestra.',
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
      { slug: 'gestao-de-redes', name: 'Gestão de redes', desc: 'Estratégia editorial por persona, semana a semana.',
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/></svg>' },
      { slug: 'branding', name: 'Branding e identidade', desc: 'Posicionamento, naming e design system.',
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>' },
      { slug: 'analytics-bi', name: 'Analytics e BI', desc: 'GA4 server-side, BigQuery e Looker.',
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>' },
    ];

    const menu = document.createElement('div');
    menu.className = 'megamenu';
    menu.setAttribute('role', 'menu');
    menu.innerHTML = `
      <div class="megamenu-inner">
        <div class="megamenu-items">
          ${items.map(i => `
            <a class="megamenu-item" href="${base}servicos/${i.slug}.html" role="menuitem">
              <div class="row">
                <div class="icon">${i.icon}</div>
                <div class="text">
                  <div class="name">${i.name} <span class="arrow">→</span></div>
                  <div class="desc">${i.desc}</div>
                </div>
              </div>
            </a>
          `).join('')}
        </div>
        <div class="megamenu-cta">
          <div>
            <div class="eb">Diagnóstico</div>
            <h4>Não sabe por onde começar?</h4>
            <p>30 minutos com um estrategista sênior. Sem pitch, sem slide. Você sai com 3 hipóteses para a sua operação.</p>
          </div>
          <a class="btn btn-primary" target="_blank" rel="noopener" href="https://wa.me/5516991864510?text=Ol%C3%A1%2C%20vim%20pelo%20site.">Agendar conversa</a>
        </div>
      </div>
    `;
    document.body.appendChild(menu);

    // Position the menu under the nav-item
    const position = () => {
      const r = navItem.getBoundingClientRect();
      // Center horizontally on the nav-item, clamp to viewport
      const viewportW = window.innerWidth;
      const menuW = Math.min(1080, viewportW * 0.92);
      const idealLeft = r.left + r.width / 2;
      const minLeft = 20 + menuW / 2;
      const maxLeft = viewportW - 20 - menuW / 2;
      const centerX = Math.max(minLeft, Math.min(maxLeft, idealLeft));
      menu.style.left = centerX + 'px';
      menu.style.top = (r.bottom + 10) + 'px';
      // Dynamic max-height based on actual top position
      const topPx = r.bottom + 10;
      menu.style.maxHeight = (window.innerHeight - topPx - 20) + 'px';
    };

    // Hover open, with a generous close delay so moving to the menu doesn't kill it
    let closeTimer = null;
    const open = () => {
      clearTimeout(closeTimer);
      position();
      menu.classList.add('open');
    };
    const scheduleClose = () => {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(() => menu.classList.remove('open'), 180);
    };

    navItem.addEventListener('mouseenter', open);
    navItem.addEventListener('mouseleave', scheduleClose);
    menu.addEventListener('mouseenter', open);
    menu.addEventListener('mouseleave', scheduleClose);

    // Click on Serviços link on landing scrolls to #servicos anchor, but on sub-pages it should go home
    servLink.addEventListener('click', (e) => {
      if (inSub) return; // natural navigation
      // On landing, keep default scroll behavior
    });

    // Reposition (not close) on scroll — topbar is sticky, menu should follow
    window.addEventListener('scroll', () => { if (menu.classList.contains('open')) position(); }, { passive: true });
    window.addEventListener('resize', () => { if (menu.classList.contains('open')) position(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') menu.classList.remove('open'); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attach);
  } else {
    attach();
  }
})();
