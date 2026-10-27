(() => {
  const body = document.body;
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  const toast = document.getElementById('coming-toast');
  const toastClose = document.querySelector('.toast-close');
  const langSelect = document.getElementById('language-select');
  let toastTimer;

  function showComingSoon() {
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 5500);
  }
  document.querySelectorAll('[data-coming-soon]').forEach(button => {
    button.addEventListener('click', showComingSoon);
  });
  toastClose.addEventListener('click', () => toast.classList.remove('show'));

  menu.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(isOpen));
    menu.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }));

  const searchPanel = document.getElementById('search-panel');
  document.querySelector('.search-toggle').addEventListener('click', () => {
    searchPanel.hidden = !searchPanel.hidden;
    if (!searchPanel.hidden) document.getElementById('site-search').focus();
  });
  document.querySelector('.search-close').addEventListener('click', () => searchPanel.hidden = true);
  const searchInput = document.getElementById('site-search');
  const searchFeedback = document.getElementById('search-feedback');
  document.getElementById('search-submit').addEventListener('click', runSearch);
  searchInput.addEventListener('keydown', event => { if (event.key === 'Enter') runSearch(); });
  function runSearch() {
    const term = searchInput.value.trim().toLowerCase();
    if (!term) {
      searchFeedback.textContent = body.dir === 'rtl' ? 'اكتب ما تريد اكتشافه أولًا.' : 'Type something you would like to discover.';
      return;
    }
    const cards = [...document.querySelectorAll('.experience-card')];
    const match = cards.find(card => card.textContent.toLowerCase().includes(term));
    if (match) {
      searchFeedback.textContent = body.dir === 'rtl' ? 'وجدنا قسمًا قد يهمك.' : 'We found a section that may interest you.';
      searchPanel.hidden = true;
      match.scrollIntoView({behavior:'smooth', block:'center'});
      match.focus({preventScroll:true});
      match.style.outline = '2px solid #bd812b';
      setTimeout(() => match.style.outline = '', 1800);
    } else {
      searchFeedback.textContent = body.dir === 'rtl' ? 'لم نعثر على تطابق. جرّب المراكب أو الإقامات أو المطاعم.' : 'No match found. Try boats, stays, marketplace, dining or day use.';
    }
  }

  const original = new Map();
  document.querySelectorAll('[data-en][data-ar]').forEach(el => original.set(el, el.innerHTML));
  function setLanguage(language) {
    const isArabic = language === 'ar';
    body.lang = language;
    body.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.documentElement.dir = body.dir;
    document.querySelectorAll('[data-en][data-ar]').forEach(el => {
      el.innerHTML = el.dataset[isArabic ? 'ar' : 'en'];
    });
    document.querySelectorAll('[data-en-placeholder][data-ar-placeholder]').forEach(el => {
      el.placeholder = el.dataset[isArabic ? 'arPlaceholder' : 'enPlaceholder'];
    });
    document.querySelector('.search-toggle').setAttribute('aria-label', isArabic ? 'فتح البحث' : 'Show search');
    searchInput.placeholder = isArabic ? 'مراكب، إقامات، مطاعم...' : 'Boats, stays, dining…';
    langSelect.value = language;
    try { localStorage.setItem('nilvora-language', language); } catch (e) {}
  }
  langSelect.addEventListener('change', event => setLanguage(event.target.value));
  let savedLanguage = 'en';
  try { savedLanguage = localStorage.getItem('nilvora-language') || 'en'; } catch (e) {}
  setLanguage(savedLanguage);
  document.getElementById('year').textContent = new Date().getFullYear();
})();