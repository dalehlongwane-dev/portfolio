/* MAIN.JS - makes the site work. You should not need to edit this file. */
(function () {
  var C = window.SITE;
  var $ = function (s) { return document.querySelector(s); };

  // Small helper: make an element with classes, text and attributes
  function el(tag, cls, text, attrs) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    for (var k in (attrs || {})) e.setAttribute(k, attrs[k]);
    return e;
  }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function slug(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

  /* ---------- ABOUT ---------- */
  $("#name").textContent = C.name;
  $("#aboutNote").textContent = C.aboutNote;
  $("#bio").textContent = C.bio;
  $("#letsTalk").textContent = C.letsTalk + " →";
  $("#photo").src = C.photo; $("#photo").alt = C.photoAlt;
  $("#tagline").textContent = C.tagline;
  $("#worksNote").textContent = C.worksNote;
  $("#city").textContent = C.city;
  $("#working").textContent = C.working;
  var labels = $("#labels");
  C.labels.forEach(function (l, i) {
    var item = el("div", "lab lab" + (i + 1));
    item.appendChild(el("span", "num", "(" + pad(i + 1) + ")"));
    item.appendChild(el("span", "hl " + l.color, l.text));
    labels.appendChild(item);
  });
  labels.appendChild(el("span", "year", "(" + C.year + ")"));

  // Live clock for your city
  function tick() {
    try { $("#clock").textContent = new Date().toLocaleTimeString("en-US", { timeZone: C.timezone }); }
    catch (e) { $("#clock").textContent = new Date().toLocaleTimeString("en-US"); }
  }
  tick(); setInterval(tick, 1000);

  /* ---------- WORKS (grid + list) ---------- */
  var body = $("#worksBody");
  function renderWorks(view) {
    body.innerHTML = ""; body.className = view;
    C.projects.forEach(function (p, i) {
      var a = el("a", "item", null, { href: "#project-" + slug(p.title) });
      if (view === "grid") {
        a.appendChild(el("span", "num", "(" + pad(i + 1) + ")"));
        a.appendChild(el("img", null, null, { src: p.image, alt: p.title + " - " + p.category, loading: "lazy" }));
        a.appendChild(el("span", "hl dark", p.title));
        a.appendChild(el("span", "cat", p.category));
      } else {
        [["num", "(" + pad(i + 1) + ")"], ["ttl", p.title], ["cat", p.category], ["yr", p.year]].forEach(function (c) {
          a.appendChild(el("span", c[0], c[1]));
        });
      }
      body.appendChild(a);
    });
  }
  $("#btnGrid").onclick = function () { $("#btnGrid").classList.add("on"); $("#btnList").classList.remove("on"); renderWorks("grid"); };
  $("#btnList").onclick = function () { $("#btnList").classList.add("on"); $("#btnGrid").classList.remove("on"); renderWorks("list"); };
  renderWorks("grid");

  /* ---------- SINGLE PROJECT ---------- */
  function renderProject(p) {
    var b = $("#projectBody"); b.innerHTML = "";
    b.appendChild(el("a", "back", "← BACK", { href: "#works" }));
    b.appendChild(el("h1", "giant small", p.title));
    var meta = el("div", "meta");
    [["CATEGORY", p.category], ["ROLE", p.role], ["YEAR", p.year]].forEach(function (m) {
      var d = el("div"); d.appendChild(el("span", "lbl", m[0])); d.appendChild(el("span", null, m[1])); meta.appendChild(d);
    });
    b.appendChild(meta);
    b.appendChild(el("p", "bio", p.description));
    var g = el("div", "gallery");
    (p.gallery || [p.image]).forEach(function (src) { g.appendChild(el("img", null, null, { src: src, alt: p.title + " gallery image", loading: "lazy" })); });
    b.appendChild(g);
  }

  /* ---------- CONTACT ---------- */
  $("#contactIntro").textContent = C.contactIntro;
  var sr = $("#socialsRow");
  C.socials.forEach(function (s) {
    sr.appendChild(el("a", "cell", s.label + " →", { href: s.link, target: "_blank", rel: "noopener noreferrer" }));
  });
  $("#emailLink").textContent = C.email + " →";
  $("#emailLink").href = "mailto:" + C.email;
  $("#copyBtn").onclick = function () {
    var btn = this;
    function done() { btn.textContent = "Copied!"; setTimeout(function () { btn.textContent = "COPY"; }, 1500); }
    if (navigator.clipboard && window.isSecureContext) { navigator.clipboard.writeText(C.email).then(done); }
    else { var t = el("textarea"); t.value = C.email; document.body.appendChild(t); t.select(); document.execCommand("copy"); t.remove(); done(); }
  };
  var sel = $("#scope");
  sel.appendChild(el("option", null, "Select...", { value: "" }));
  C.scopes.forEach(function (s) { sel.appendChild(el("option", null, s, { value: s })); });

  // Form: check fields, then send to Web3Forms or Formspree
  var form = $("#form"), msg = $("#formMsg");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = form.elements, data = { scope: f.scope.value, name: f.name.value.trim(), email: f.email.value.trim(), message: f.message.value.trim() };
    msg.className = "form-msg";
    if (!data.scope || !data.name || !data.email || !data.message) { msg.textContent = "Please fill in every field."; msg.classList.add("err"); return; }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) { msg.textContent = "Please enter a valid email address."; msg.classList.add("err"); return; }
    if (C.formKey.indexOf("PASTE") === 0) { msg.textContent = "Form key missing: see the README, step 6."; msg.classList.add("err"); return; }
    var url, payload;
    if (C.formService === "formspree") { url = "https://formspree.io/f/" + C.formKey; payload = data; }
    else { url = "https://api.web3forms.com/submit"; payload = { access_key: C.formKey, subject: "New message from your portfolio", from_name: data.name, name: data.name, email: data.email, scope: data.scope, message: data.message }; }
    msg.textContent = "Sending...";
    fetch(url, { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(payload) })
      .then(function (r) { if (!r.ok) throw 0; form.reset(); msg.textContent = C.formSuccess; msg.classList.add("ok"); })
      .catch(function () { msg.textContent = "Something went wrong. Please email me directly."; msg.classList.add("err"); });
  });

  /* ---------- PAGE SWITCHING (uses the # in the address) ---------- */
  var tabs = document.querySelectorAll(".tab");
  function route() {
    var h = location.hash.slice(1) || "about", page = h, proj = null;
    if (h.indexOf("project-") === 0) {
      proj = C.projects.filter(function (p) { return slug(p.title) === h.slice(8); })[0];
      page = proj ? "project" : "works";
      if (proj) renderProject(proj);
    }
    if (["about", "works", "contact", "project"].indexOf(page) < 0) page = "about";
    document.querySelectorAll(".page").forEach(function (p) {
      var on = p.id === "page-" + page;
      p.classList.toggle("active", on);
      if (on && page === "project") p.querySelector(".scroll").scrollTop = 0;
    });
    var tabName = page === "project" ? "works" : page;
    tabs.forEach(function (t) { t.classList.toggle("active", t.dataset.tab === tabName); });
    document.title = (proj ? proj.title : tabName.charAt(0).toUpperCase() + tabName.slice(1)) + " | " + C.siteTitle.split("|")[0].trim();
  }
  window.addEventListener("hashchange", route);
  route();
})();
