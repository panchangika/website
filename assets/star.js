/* Panchangika · Find your star birthday (27 Nov 2026).
   Birth date + time -> birth nakshatra (Moon's sidereal position, Lahiri, from /data/star/sky.json)
   -> the next star birthdays: the day in your birth month (lunar or Tamil solar) on which that
   nakshatra is running at sunrise in the town where you live now.
   Sunrise/sunset: same method as assets/city.js (Sun's upper limb with refraction). */
(function () {
  "use strict";
  const app = document.getElementById("sb-app");
  if (!app) return;
  const lang = app.dataset.lang || "en";
  const D2R = Math.PI / 180, IST = 5.5 / 24;
  const $ = id => document.getElementById(id);

  const T = {
    en: { go: "Find my star birthday", star: "Your birth star", month: "Your birth month", next: "Your next star birthdays",
      row: "The star is running at sunrise on two days in a row. Families follow different rules, so ask your elders which day you keep.",
      twice: "The star comes twice this month. Families follow different rules, so ask your elders which one you keep.",
      none: "This month the star is not running at any sunrise. The day shown is the one with the star for most of the daytime; ask your elders which day your family keeps.",
      change: (a, b, t) => `That day the Moon moved from ${a} into ${b} at ${t}. Pick the one that fits your birth time:`,
      pickTime: "Please enter your date of birth.", adh: "You were born in an adhika (extra) month; star birthdays are kept in the regular month of the same name.",
      lunar: "lunar month", solar: "Tamil solar month", share: "Share on WhatsApp", shareText: "I just found my star birthday on Panchangika:", noTown: "Choose a town from the list.",
      left: n => n === 0 ? "today!" : n === 1 ? "tomorrow" : `in ${n} days`, range: "Dates from 1930 to 2049 only." },
    te: { go: "నా నక్షత్ర పుట్టినరోజు చూపించు", star: "మీ జన్మ నక్షత్రం", month: "మీరు పుట్టిన మాసం", next: "మీ తర్వాతి నక్షత్ర పుట్టినరోజులు",
      row: "వరుసగా రెండు రోజులు సూర్యోదయానికి ఈ నక్షత్రం ఉంది. కుటుంబాల్లో పద్ధతులు వేరు, మీ ఇంట్లో ఏ రోజు చేసుకుంటారో పెద్దలను అడగండి.",
      twice: "ఈ మాసంలో నక్షత్రం రెండుసార్లు వస్తుంది. కుటుంబాల్లో పద్ధతులు వేరు, మీ ఇంట్లో ఏది పాటిస్తారో పెద్దలను అడగండి.",
      none: "ఈ మాసంలో ఏ సూర్యోదయానికీ ఈ నక్షత్రం లేదు. పగటిలో ఎక్కువ సేపు ఈ నక్షత్రం ఉన్న రోజు చూపించాం; మీ ఇంట్లో ఏ రోజు చేసుకుంటారో పెద్దలను అడగండి.",
      change: (a, b, t) => `ఆ రోజు ${t}కి చంద్రుడు ${a} నుండి ${b}లోకి మారాడు. మీ పుట్టిన సమయానికి సరిపోయేది ఎంచుకోండి:`,
      pickTime: "దయచేసి పుట్టిన తేదీ ఇవ్వండి.", adh: "మీరు అధిక మాసంలో పుట్టారు; నక్షత్ర పుట్టినరోజు అదే పేరుగల నిజ మాసంలో చేసుకుంటారు.",
      lunar: "చాంద్రమాన మాసం", solar: "తమిళ సౌర మాసం", share: "WhatsAppలో పంపండి", shareText: "పంచాంగికలో నా నక్షత్ర పుట్టినరోజు తెలుసుకున్నాను:", noTown: "జాబితా నుండి ఊరు ఎంచుకోండి.",
      left: n => n === 0 ? "ఈరోజే!" : n === 1 ? "రేపు" : `${n} రోజుల్లో`, range: "1930 నుండి 2049 వరకు తేదీలు మాత్రమే." },
    ta: { go: "என் நட்சத்திரப் பிறந்தநாளைக் காட்டு", star: "உங்க ஜென்ம நட்சத்திரம்", month: "நீங்க பிறந்த மாதம்", next: "உங்க அடுத்த நட்சத்திரப் பிறந்தநாட்கள்",
      row: "தொடர்ந்து இரண்டு நாள் சூரிய உதயத்தில் இந்த நட்சத்திரம் இருக்கிறது. குடும்பங்களில் வழக்கம் மாறுபடும்; உங்க வீட்டில் எந்த நாள் என்று பெரியவர்களிடம் கேளுங்க.",
      twice: "இந்த மாதம் நட்சத்திரம் இரண்டு முறை வருகிறது. குடும்பங்களில் வழக்கம் மாறுபடும்; உங்க வீட்டில் எதைக் கொண்டாடுவார்கள் என்று பெரியவர்களிடம் கேளுங்க.",
      none: "இந்த மாதம் எந்தச் சூரிய உதயத்திலும் இந்த நட்சத்திரம் இல்லை. பகலில் அதிக நேரம் நட்சத்திரம் இருக்கும் நாளைக் காட்டியிருக்கிறோம்; உங்க வீட்டு வழக்கத்தைப் பெரியவர்களிடம் கேளுங்க.",
      change: (a, b, t) => `அன்று ${t}க்கு சந்திரன் ${a}-இலிருந்து ${b}-க்கு மாறியது. உங்க பிறந்த நேரத்துக்குப் பொருந்துவதைத் தேர்ந்தெடுங்க:`,
      pickTime: "பிறந்த தேதியைக் கொடுங்க.", adh: "நீங்க அதிக மாதத்தில் பிறந்தீர்கள்; நட்சத்திரப் பிறந்தநாள் அதே பெயருடைய நிஜ மாதத்தில் கொண்டாடப்படும்.",
      lunar: "சாந்திரமான மாதம்", solar: "தமிழ் மாதம்", share: "WhatsApp-இல் அனுப்புங்க", shareText: "பஞ்சாங்கிகாவில் என் நட்சத்திரப் பிறந்தநாளைக் கண்டுபிடித்தேன்:", noTown: "பட்டியலிலிருந்து ஊரைத் தேர்ந்தெடுங்க.",
      left: n => n === 0 ? "இன்றே!" : n === 1 ? "நாளை" : `இன்னும் ${n} நாளில்`, range: "1930 முதல் 2049 வரையிலான தேதிகள் மட்டும்." },
  }[lang];

  // ---------------------------------------------------------------- data
  let SKY, N, CITIES;
  const unpack = d => { let m = 0; return d.map(x => (m += x)); };
  function bsearch(a, x) { let lo = 0, hi = a.length - 1, r = -1; while (lo <= hi) { const mid = (lo + hi) >> 1; if (a[mid] <= x) { r = mid; lo = mid + 1; } else hi = mid - 1; } return r; }
  const toMin = jd => (jd - SKY.jd0) * 1440;
  const nakAt = jd => { const i = bsearch(SKY.nakT, toMin(jd)); return ((SKY.nak.k0 + i) % 27 + 27) % 27; };   // i=-1: the one before
  const signAt = jd => { const i = bsearch(SKY.sunT, toMin(jd)); return ((SKY.sun.k0 + i) % 12 + 12) % 12; };
  const monthIdx = jd => bsearch(SKY.nmT, toMin(jd));
  const jdOfMin = m => SKY.jd0 + m / 1440;

  // ---------------------------------------------------------------- sunrise (as city.js)
  function sun(jd) {
    const T_ = (jd - 2451545) / 36525;
    const L0 = 280.46646 + 36000.76983 * T_ + 0.0003032 * T_ * T_;
    const M = (357.52911 + 35999.05029 * T_ - 0.0001537 * T_ * T_) * D2R;
    const C = (1.914602 - 0.004817 * T_ - 0.000014 * T_ * T_) * Math.sin(M) + (0.019993 - 0.000101 * T_) * Math.sin(2 * M) + 0.000289 * Math.sin(3 * M);
    const om = (125.04 - 1934.136 * T_) * D2R;
    const lam = (L0 + C - 0.00569 - 0.00478 * Math.sin(om)) * D2R;
    const eps = (23 + (26 + (21.448 - T_ * (46.815 + T_ * (0.00059 - T_ * 0.001813))) / 60) / 60 + 0.00256 * Math.cos(om)) * D2R;
    const ra = Math.atan2(Math.cos(eps) * Math.sin(lam), Math.cos(lam)) / D2R;
    const dec = Math.asin(Math.sin(eps) * Math.sin(lam));
    const gmst = 280.46061837 + 360.98564736629 * (jd - 2451545) + 0.000387933 * T_ * T_ - T_ * T_ * T_ / 38710000;
    return { ra, dec, gmst };
  }
  const norm180 = x => ((x % 360) + 540) % 360 - 180;
  function event(guess, lat, lon, rise) {
    let t = guess; const phi = lat * D2R, h0 = -0.8333 * D2R;
    for (let k = 0; k < 6; k++) {
      const s = sun(t);
      const cosH0 = (Math.sin(h0) - Math.sin(phi) * Math.sin(s.dec)) / (Math.cos(phi) * Math.cos(s.dec));
      const H0 = Math.acos(Math.max(-1, Math.min(1, cosH0))) / D2R;
      const H = norm180(s.gmst + lon - s.ra);
      t += norm180((rise ? -H0 : H0) - H) / 360.9856;
    }
    return t;
  }
  // a calendar day (y, m0, d) in India: JD of local midnight (IST), sunrise, sunset
  const jdMidIST = (y, m0, d) => Date.UTC(y, m0, d) / 864e5 + 2440587.5 - IST;
  function dayInfo(y, m0, d, c) {
    const mid = jdMidIST(y, m0, d);
    const sr = event(mid + 0.25 - c.lon / 360 + 82.5 / 360, c.lat, c.lon, true);
    const ss = event(sr + 0.47, c.lat, c.lon, false);
    return { y, m0, d, sr, ss };
  }
  const istHM = jd => { const ms = (jd + IST - 2440587.5) * 864e5, t = new Date(ms); return t.getUTCHours() * 60 + t.getUTCMinutes(); };
  const fmtHM = mins => { const h = Math.floor(mins / 60), m = mins % 60, h12 = ((h + 11) % 12) + 1; return `${h12}:${String(m).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`; };
  const dateOf = jd => { const t = new Date((jd + IST - 2440587.5) * 864e5); return [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]; };
  const fmtDate = (y, m0, d) => {
    const w = N.VAARA[lang][new Date(Date.UTC(y, m0, d)).getUTCDay()], mo = N.GREG_MONTH[lang][m0];
    return lang === "en" ? `${w}, ${d} ${mo} ${y}` : `${d} ${mo} ${y}, ${w}`;
  };

  // ---------------------------------------------------------------- the star birthdays
  // days whose sunrise (lunar) / sunset (Tamil solar, sankranti-before-sunset rule) falls in [a, b)
  function daysIn(a, b, c, solar) {
    const out = []; let [y, m0, d] = dateOf(a - 1);
    for (let k = 0; k < 36; k++) {
      const D = dayInfo(y, m0, d + k, c), key = solar ? D.ss : D.sr;
      if (key >= a && key < b) { const [yy, mm, dd] = dateOf(jdMidIST(y, m0, d + k) + 0.5); out.push({ ...D, y: yy, m0: mm, d: dd }); }
      if (key >= b) break;
    }
    return out;
  }
  // how much of the daytime (sunrise..sunset) the star is running
  function dayShare(D, star) {
    let s = 0; const n = 48;
    for (let i = 0; i < n; i++) if (nakAt(D.sr + (D.ss - D.sr) * (i + 0.5) / n) === star) s++;
    return s / n;
  }
  function starDays(days, star) {
    const hit = days.filter(D => nakAt(D.sr) === star);
    if (hit.length) {
      const gaps = hit.slice(1).map((D, i) => Math.round(D.sr - hit[i].sr));
      return { days: hit, row: gaps.some(g => g === 1), twice: gaps.some(g => g > 1) };
    }
    let best = null, bs = 0;
    days.forEach(D => { const s = dayShare(D, star); if (s > bs) { bs = s; best = D; } });
    return { days: best ? [best] : [], none: true };
  }
  function nextBirthdays(star, solar, mon, c, nowJD, count) {
    const res = [];
    if (solar) {
      const i0 = Math.max(0, bsearch(SKY.sunT, toMin(nowJD)) - 1);
      for (let i = i0; i < SKY.sunT.length - 1 && res.length < count; i++) {
        if ((SKY.sun.k0 + i) % 12 !== mon) continue;
        const r = starDays(daysIn(jdOfMin(SKY.sunT[i]), jdOfMin(SKY.sunT[i + 1]), c, true), star);
        if (r.days.length && r.days[r.days.length - 1].sr >= nowJD - 1) res.push(r);
      }
    } else {
      const i0 = Math.max(0, monthIdx(nowJD) - 1);
      for (let i = i0; i < SKY.nmT.length - 1 && res.length < count; i++) {
        if (SKY.nm.m[i] !== mon || SKY.nm.a[i]) continue;   // the regular (nija) month only
        const r = starDays(daysIn(jdOfMin(SKY.nmT[i]), jdOfMin(SKY.nmT[i + 1]), c, false), star);
        if (r.days.length && r.days[r.days.length - 1].sr >= nowJD - 1) res.push(r);
      }
    }
    return res;
  }

  // ---------------------------------------------------------------- page
  const out = $("sb-out");
  const esc = s => String(s).replace(/[&<>"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
  function town() {
    const v = $("sb-town").value.trim().toLowerCase();
    return CITIES.find(c => [c.en, c.te, c.ta, c.slug].some(n => n && n.toLowerCase() === v));
  }
  function birthJD() {
    const dv = $("sb-date").value; if (!dv) return null;
    const tv = $("sb-unknown").checked ? "12:00" : ($("sb-time").value || "12:00");
    const off = +$("sb-tz").value;                // hours east of UTC
    const [y, m, d] = dv.split("-").map(Number), [hh, mm] = tv.split(":").map(Number);
    return Date.UTC(y, m - 1, d, hh, mm) / 864e5 + 2440587.5 - off / 24;
  }
  function show(star, mon, solar, adh, choice) {
    const c = town(); if (!c) { out.innerHTML = `<p class="sb-warn">${esc(T.noTown)}</p>`; return; }
    const now = Date.now() / 864e5 + 2440587.5;
    const list = nextBirthdays(star, solar, mon, c, now, 3);
    const mname = solar ? N.TAMIL_MONTH[lang === "te" ? "en" : lang][mon] : N.LUNAR_MONTH[lang][mon];
    const today = Math.floor((now + IST - 2440587.5));
    let h = choice || "";
    h += `<div class="sb-res"><div class="sb-star"><span>${esc(T.star)}</span><b>${esc(N.NAKSHATRA[lang][star])}</b><small>${star + 1} / 27</small></div>`;
    h += `<div class="sb-star"><span>${esc(T.month)}</span><b>${esc(mname)}</b><small>${esc(solar ? T.solar : T.lunar)}</small></div></div>`;
    if (adh) h += `<p class="sb-note">${esc(T.adh)}</p>`;
    h += `<h2>${esc(T.next)}</h2><ol class="sb-list">`;
    let first = "";
    list.forEach(r => {
      r.days.forEach(D => {
        const n = Math.round(Date.UTC(D.y, D.m0, D.d) / 864e5 - today);
        const txt = fmtDate(D.y, D.m0, D.d); if (!first && n >= 0) first = txt;
        h += `<li><b>${esc(txt)}</b><span>${esc(n >= 0 ? T.left(n) : "")}</span></li>`;
      });
      if (r.twice) h += `<li class="sb-note">${esc(T.twice)}</li>`;
      if (r.row) h += `<li class="sb-note">${esc(T.row)}</li>`;
      if (r.none) h += `<li class="sb-note">${esc(T.none)}</li>`;
    });
    h += `</ol><p class="sb-town">${esc(lang === "en" ? `Times for ${c.en}` : lang === "te" ? `${c.te} సూర్యోదయం ప్రకారం` : `${c.ta} சூரிய உதயப்படி`)}</p>`;
    const msg = `${T.shareText} ${N.NAKSHATRA[lang][star]} – ${first} ${location.href}`;
    h += `<p><a class="cal-share" href="https://wa.me/?text=${encodeURIComponent(msg)}" rel="noopener" data-goatcounter-click="star-share-${lang}">${esc(T.share)}</a></p>`;
    out.innerHTML = h;
    out.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function run() {
    const solar = $("sb-cal").value === "solar";
    if ($("sb-mode-known").checked) {
      show(+$("sb-kstar").value, +$("sb-kmon").value, solar, false, "");
      return;
    }
    const jd = birthJD(); if (jd == null) { out.innerHTML = `<p class="sb-warn">${esc(T.pickTime)}</p>`; return; }
    if (jd < SKY.jd0 + 1 || jd > SKY.jd0 + SKY.nmT[SKY.nmT.length - 1] / 1440 - 400) { out.innerHTML = `<p class="sb-warn">${esc(T.range)}</p>`; return; }
    const i = monthIdx(jd), mon = solar ? signAt(jd) : SKY.nm.m[i], adh = !solar && !!SKY.nm.a[i];
    let star = nakAt(jd), choice = "";
    if ($("sb-unknown").checked) {                 // time not known: does the star change that day?
      const off = +$("sb-tz").value, [y, m, d] = $("sb-date").value.split("-").map(Number);
      const d0 = Date.UTC(y, m - 1, d) / 864e5 + 2440587.5 - off / 24, a = nakAt(d0), b = nakAt(d0 + 0.999);
      if (a !== b) {
        const k = bsearch(SKY.nakT, toMin(d0 + 0.999)), tm = istHM(jdOfMin(SKY.nakT[k]) + (off / 24 - IST));
        const pick = +(app.dataset.pick ?? -1); star = pick >= 0 ? pick : a;
        choice = `<p class="sb-note">${esc(T.change(N.NAKSHATRA[lang][a], N.NAKSHATRA[lang][b], fmtHM(tm)))} `
          + [a, b].map(s => `<button type="button" class="sb-pick${s === star ? " on" : ""}" data-s="${s}">${esc(N.NAKSHATRA[lang][s])}</button>`).join(" ") + `</p>`;
      }
    }
    show(star, mon, solar, adh, choice);
    out.querySelectorAll(".sb-pick").forEach(b => b.onclick = () => { app.dataset.pick = b.dataset.s; run(); });
  }

  // ---------------------------------------------------------------- load
  Promise.all([fetch("/data/star/sky.json").then(r => r.json()), fetch("/data/names.json").then(r => r.json()), fetch("/data/star/cities.json").then(r => r.json())])
    .then(([s, n, c]) => {
      SKY = s; SKY.nakT = unpack(s.nak.d); SKY.sunT = unpack(s.sun.d); SKY.nmT = unpack(s.nm.d); N = n;
      CITIES = c.map(([slug, en, te, ta, lat, lon]) => ({ slug, en, te, ta, lat, lon }));
      $("sb-towns").innerHTML = CITIES.map(x => `<option value="${esc(x[lang] || x.en)}">`).join("");
      const ks = $("sb-kstar"); ks.innerHTML = N.NAKSHATRA[lang].map((x, i) => `<option value="${i}">${esc(x)}</option>`).join("");
      const fillMon = () => { const solar = $("sb-cal").value === "solar";
        $("sb-kmon").innerHTML = (solar ? N.TAMIL_MONTH[lang === "te" ? "en" : lang] : N.LUNAR_MONTH[lang]).map((x, i) => `<option value="${i}">${esc(x)}</option>`).join(""); };
      fillMon(); $("sb-cal").onchange = () => { fillMon(); if (out.innerHTML) run(); };
      const known = () => { const k = $("sb-mode-known").checked; $("sb-birth").hidden = k; $("sb-known").hidden = !k; };
      $("sb-mode-known").onchange = known; $("sb-mode-birth").onchange = known; known();
      $("sb-unknown").onchange = () => { $("sb-time").disabled = $("sb-unknown").checked; app.dataset.pick = -1; };
      $("sb-date").onchange = () => { app.dataset.pick = -1; };
      $("sb-go").disabled = false;
      $("sb-form").onsubmit = e => { e.preventDefault(); run(); };
      window.__sb = { nakAt, signAt, nextBirthdays, dayInfo, CITIES: () => CITIES, SKY: () => SKY };   // for tests
    });
})();
