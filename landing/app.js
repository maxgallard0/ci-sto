// Ci Sto · Landing interactions (demo: no backend yet, state lives in the browser)
(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  function toast(msg) {
    let t = $("#toast");
    if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("show");
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 2400);
  }

  function save(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }
  function load(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }

  // ---------- Entry: sign up / log in ----------
  $$("[data-open]").forEach(b => b.addEventListener("click", () => {
    const d = $("#dlg-" + b.dataset.open); if (d && d.showModal) { d.showModal(); const i = $("input", d); if (i) i.focus(); }
  }));
  $$("dialog [data-close]").forEach(b => b.addEventListener("click", () => b.closest("dialog").close()));

  function nameFromEmail(email) {
    const first = email.split("@")[0].split(/[._-]/)[0] || "";
    return first.charAt(0).toUpperCase() + first.slice(1);
  }

  $$("form[data-flow]").forEach(form => form.addEventListener("submit", e => {
    e.preventDefault();
    const err = $(".error", form); err.textContent = "";
    const email = (form.email.value || "").trim().toLowerCase();
    const flow = form.dataset.flow;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { err.textContent = "Enter a valid email."; return; }
    if (flow === "member" && !email.endsWith("@mail.polimi.it")) { err.textContent = "Use your @mail.polimi.it address."; return; }
    if (flow === "host") {
      if (!form.venue.value.trim()) { err.textContent = "Tell us the name of your venue."; return; }
      form.hidden = true; $(".notice", form.closest("dialog")).hidden = false; return;
    }
    if (flow === "login" && !form.password.value) { err.textContent = "Enter your password."; return; }
    save("cisto:name", nameFromEmail(email));
    window.location.href = "home.html";
  }));

  // ---------- Home ----------
  const name = load("cisto:name");
  if (name && $("#me-name")) { $("#me-name").textContent = name; $("#me-initials").textContent = name.slice(0, 2).toUpperCase(); }

  $$("[data-soon]").forEach(el => el.addEventListener("click", e => { e.preventDefault(); toast(el.dataset.soon + " opens in the app"); }));

  const chips = $$(".chip[data-filter]");
  chips.forEach(chip => chip.addEventListener("click", () => {
    chips.forEach(c => c.setAttribute("aria-pressed", String(c === chip)));
    const f = chip.dataset.filter; let shown = 0;
    $$(".plan-row[data-tags]").forEach(r => { const ok = f === "all" || r.dataset.tags.split(" ").includes(f); r.hidden = !ok; if (ok) shown++; });
    const empty = $("#empty"); if (empty) empty.hidden = shown > 0;
  }));

  const btn = $("#cisto");
  if (btn) {
    const going = $("#going"), bar = $(".progress span"), pb = $(".progress"), av = $("#ft-avatars");
    let joined = load("cisto:dolomites") === "1";
    const render = () => {
      const n = joined ? 6 : 5;
      going.textContent = `${n} of 8 going · ${8 - n} spots left`;
      bar.style.width = (n / 8 * 100) + "%"; pb.setAttribute("aria-valuenow", n);
      btn.classList.toggle("is-in", joined); btn.setAttribute("aria-pressed", String(joined));
      $("span", btn).textContent = joined ? "You're in" : "Ci sto";
      const me = $("#av-me", av);
      if (joined && !me) { const a = document.createElement("span"); a.className = "avatar a3"; a.id = "av-me"; a.textContent = ($("#me-initials") || {}).textContent || "ME"; av.insertBefore(a, av.lastElementChild); }
      if (!joined && me) me.remove();
    };
    render();
    btn.addEventListener("click", () => {
      joined = !joined; save("cisto:dolomites", joined ? "1" : "0"); render();
      toast(joined ? "Ci sto! Marco will approve you and the group chat opens." : "You left the plan.");
    });
    $("#skip").addEventListener("click", () => toast("Skipped. We'll show you fewer plans like this."));
  }
})();
