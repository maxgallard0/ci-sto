// Ci Sto · Organizer flow mockups: shared nav, icons and small interactions.
// Mockup code only, not platform code.

const ICONS = {
  check: '<path d="M20 6 9 17l-5-5"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  userCheck: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m16 11 2 2 4-4"/>',
  euro: '<path d="M4 10h12"/><path d="M4 14h9"/><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
  calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
  pin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  minus: '<path d="M5 12h14"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
  eye: '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
  chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  chevronLeft: '<path d="m15 18-6-6 6-6"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  bell: '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>'
};

function drawIcons(root = document) {
  root.querySelectorAll('i[data-icon]').forEach((el) => {
    const svg = `<svg class="i ${el.className}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[el.dataset.icon] || ''}</svg>`;
    el.outerHTML = svg;
  });
}

function drawNav() {
  const slot = document.getElementById('nav');
  if (!slot) return;
  slot.outerHTML = `
  <header class="nav">
    <a class="logo" href="index.html"><span class="logo-mark" aria-hidden="true"></span>Ci Sto</a>
    <nav class="nav-links" aria-label="Main">
      <a href="#">Find your plans</a>
      <a href="o1-become-organizer.html" aria-current="page">Organize</a>
      <a href="#">Chats</a>
      <a href="#">Cerchia</a>
    </nav>
    <div class="nav-account">
      <button class="icon-btn" aria-label="Search"><i data-icon="search"></i></button>
      <button class="icon-btn" aria-label="Notifications"><i data-icon="bell"></i></button>
      <span class="me"><span class="avatar" style="width:36px;height:36px;font-size:13px">CA</span>Camila</span>
    </div>
  </header>`;
}

function wireInteractions() {
  // Chips: single choice in [data-single], multiple choice otherwise
  document.querySelectorAll('.chips').forEach((group) => {
    group.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip');
      if (!chip || chip.hasAttribute('data-static')) return;
      if (group.hasAttribute('data-single')) group.querySelectorAll('.chip').forEach((c) => c.setAttribute('aria-pressed', 'false'));
      chip.setAttribute('aria-pressed', chip.getAttribute('aria-pressed') === 'true' && !group.hasAttribute('data-single') ? 'false' : 'true');
    });
  });
  // Group size stepper (6 to 12)
  document.querySelectorAll('[data-stepper]').forEach((st) => {
    const out = st.querySelector('[data-value]');
    st.addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      const n = Math.min(12, Math.max(6, parseInt(out.textContent, 10) + (b.dataset.step === '+' ? 1 : -1)));
      out.textContent = `${n} people`;
      const prev = document.getElementById('pv-size'); if (prev) prev.textContent = `0 of ${n} going · small group`;
    });
  });
  // Switches
  document.querySelectorAll('.switch').forEach((s) => s.addEventListener('click', () => s.setAttribute('aria-checked', s.getAttribute('aria-checked') === 'true' ? 'false' : 'true')));
  // Live preview of the title
  const t = document.getElementById('f-title'), pv = document.getElementById('pv-title');
  if (t && pv) t.addEventListener('input', () => { pv.textContent = t.value || 'Your plan title'; });
  // Approve / decline requests
  document.querySelectorAll('[data-request]').forEach((row) => {
    row.addEventListener('click', (e) => {
      const b = e.target.closest('button[data-act]'); if (!b) return;
      const ok = b.dataset.act === 'approve';
      row.querySelector('[data-actions]').outerHTML = `<span class="badge ${ok ? 'b-soft' : 'b-surface'}" role="status">${ok ? 'Approved' : 'Declined'}</span>`;
    });
  });
  // Copy link
  const copy = document.getElementById('copy-link');
  if (copy) copy.addEventListener('click', () => { navigator.clipboard?.writeText(document.getElementById('plan-link').value); copy.textContent = 'Copied'; });
}

drawNav();
drawIcons();
wireInteractions();
