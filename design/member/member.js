// Ci Sto · Member area mockups: shared nav, icons and small interactions.
// Mockup code only, not platform code. Icons and nav follow design/organizer.

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
  bell: '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 16v-5"/><path d="M12 8h.01"/>',
  flag: '<path d="M4 22V4"/><path d="M4 4h12l-2 4 2 4H4"/>',
  star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  sliders: '<path d="M4 6h10"/><path d="M18 6h2"/><path d="M4 12h4"/><path d="M12 12h8"/><path d="M4 18h12"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
  userPlus: '<circle cx="9" cy="8" r="4"/><path d="M2 21v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1"/><path d="M19 8v6"/><path d="M16 11h6"/>',
  sparkle: '<path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2z"/>',
  music: '<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
  bike: '<circle cx="5.5" cy="17" r="3.5"/><circle cx="18.5" cy="17" r="3.5"/><path d="M5.5 17 9 9h6l3.5 8"/><path d="M9 9 7.5 6H6"/>'
};

function drawIcons(root = document) {
  root.querySelectorAll('i[data-icon]').forEach((el) => {
    el.outerHTML = `<svg class="i ${el.className}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[el.dataset.icon] || ''}</svg>`;
  });
}

function drawNav() {
  const slot = document.getElementById('nav');
  if (!slot) return;
  const active = slot.dataset.active;
  const link = (label, href) => `<a href="${href}"${label === active ? ' aria-current="page"' : ''}>${label}</a>`;
  slot.outerHTML = `
  <header class="nav">
    <a class="logo" href="index.html"><span class="logo-mark" aria-hidden="true"></span>Ci Sto</a>
    <nav class="nav-links" aria-label="Main">
      ${link('Find your plans', 'm3-find-your-plans.html')}
      ${link('Organize', '../organizer/o1-become-organizer.html')}
      ${link('Chats', 'm4-chats.html')}
      ${link('Cerchia', 'm6-your-cerchia.html')}
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
      const on = chip.getAttribute('aria-pressed') === 'true';
      if (group.hasAttribute('data-single')) group.querySelectorAll('.chip').forEach((c) => c.setAttribute('aria-pressed', 'false'));
      chip.setAttribute('aria-pressed', on && !group.hasAttribute('data-single') ? 'false' : 'true');
      updateCounts();
    });
  });
  // Switches
  document.querySelectorAll('.switch').forEach((s) => s.addEventListener('click', () => s.setAttribute('aria-checked', s.getAttribute('aria-checked') === 'true' ? 'false' : 'true')));
  // Segmented control
  document.querySelectorAll('.seg').forEach((g) => g.addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b) return;
    g.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
  }));
  // Add / Added toggles on "Who did you click with"
  document.querySelectorAll('.toggle-add').forEach((b) => b.addEventListener('click', () => {
    const on = b.getAttribute('aria-pressed') !== 'true';
    b.setAttribute('aria-pressed', String(on));
    b.innerHTML = on ? '<i data-icon="check" class="i-sm"></i>Added' : '<i data-icon="plus" class="i-sm"></i>Add';
    b.closest('.person-card').classList.toggle('added', on);
    drawIcons(b); updateCounts();
  }));
  // Stars
  document.querySelectorAll('.stars').forEach((g) => g.addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b) return;
    const n = [...g.children].indexOf(b);
    [...g.children].forEach((x, i) => x.classList.toggle('on', i <= n));
  }));
  // 24h confirmation
  const yes = document.getElementById('confirm-yes');
  if (yes) yes.addEventListener('click', () => { document.getElementById('confirm-box').innerHTML = '<p role="status" style="color:var(--lime);font-weight:800;font-size:17px">You\'re in. See you tomorrow at 18:30.</p>'; });
  // Add back
  document.querySelectorAll('[data-add-back]').forEach((b) => b.addEventListener('click', () => { b.outerHTML = '<span class="badge b-lime" role="status">In your Cerchia</span>'; }));
}

function updateCounts() {
  const n = document.querySelectorAll('.toggle-add[aria-pressed="true"]').length;
  const add = document.getElementById('add-count'); if (add) add.textContent = `Add ${n} to my Cerchia`;
  const picked = document.getElementById('picked-count');
  if (picked) picked.textContent = `Show my plans · ${document.querySelectorAll('[data-count] .chip[aria-pressed="true"]').length} picked`;
}

drawNav();
drawIcons();
wireInteractions();
updateCounts();
