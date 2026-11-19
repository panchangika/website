/* Panchangika city pages: build a day's panchangam for any Indian city in the browser.
   Tithi/nakshatra/yoga/karana and Varjyam/Amrita come from /data/global.json (same moment
   everywhere); sunrise and sunset are computed here for the city's latitude/longitude,
   and everything that depends on them (Rahu, Yama, Gulika, Abhijit, Durmuhurtham, Gowri)
   follows the same tables as the engine (panchang/tables.py). Output = same record as
   /data/hyderabad.json, so app.js can show it unchanged. */
(function (root) {
  "use strict";
  const RAHU = [8, 2, 7, 5, 6, 4, 3], YAMA = [5, 4, 3, 2, 1, 7, 6], GULIKA = [7, 6, 5, 4, 3, 2, 1];
  const DUR = [[14], [9, 12], [4, "N7"], [8], [6, 12], [4, 9], [1, 2]];
  const GOWRI_DAY = [[0, 1, 2, 3, 4, 5, 6, 7], [1, 7, 2, 3, 4, 5, 6, 0], [2, 3, 4, 5, 6, 0, 7, 1], [3, 4, 5, 6, 7, 0, 1, 2],
                     [4, 5, 6, 0, 1, 7, 2, 3], [5, 6, 0, 7, 1, 2, 3, 4], [6, 0, 7, 1, 2, 3, 4, 5]];
  const GOWRI_GOOD = new Set([0, 1, 3, 4, 5]);
  const BASE_JD = 2461041.5 - 330 / 1440;      // 2026-01-01 00:00 IST
  const D2R = Math.PI / 180;

  // Sun's right ascension / declination (Meeus ch. 25, ~0.01 deg) and sidereal time
  function sun(jd) {
    const T = (jd - 2451545) / 36525;
    const L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T * T;
    const M = (357.52911 + 35999.05029 * T - 0.0001537 * T * T) * D2R;
    const C = (1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(M) + (0.019993 - 0.000101 * T) * Math.sin(2 * M) + 0.000289 * Math.sin(3 * M);
    const om = (125.04 - 1934.136 * T) * D2R;
    const lam = (L0 + C - 0.00569 - 0.00478 * Math.sin(om)) * D2R;
    const eps = (23 + (26 + (21.448 - T * (46.815 + T * (0.00059 - T * 0.001813))) / 60) / 60 + 0.00256 * Math.cos(om)) * D2R;
    const ra = Math.atan2(Math.cos(eps) * Math.sin(lam), Math.cos(lam)) / D2R;
    const dec = Math.asin(Math.sin(eps) * Math.sin(lam));
    const gmst = 280.46061837 + 360.98564736629 * (jd - 2451545) + 0.000387933 * T * T - T * T * T / 38710000;
    return { ra, dec, gmst };
  }
  const norm180 = x => ((x % 360) + 540) % 360 - 180;

  // time (JD) of sunrise (rise=true) or sunset near the guess; Sun's upper limb with refraction (-0.8333 deg)
  function event(guess, lat, lon, rise) {
    let t = guess;
    const phi = lat * D2R, h0 = -0.8333 * D2R;
    for (let k = 0; k < 6; k++) {
      const s = sun(t);
      const cosH0 = (Math.sin(h0) - Math.sin(phi) * Math.sin(s.dec)) / (Math.cos(phi) * Math.cos(s.dec));
      const H0 = Math.acos(Math.max(-1, Math.min(1, cosH0))) / D2R;
      const H = norm180(s.gmst + lon - s.ra);
      const want = rise ? -H0 : H0;
      t += norm180(want - H) / 360.9856 ;
    }
    return t;
  }

  const minsBase = jd => (jd - BASE_JD) * 1440;
  const dayBase = iso => (Date.UTC(+iso.slice(0, 4), +iso.slice(5, 7) - 1, +iso.slice(8, 10)) - Date.UTC(2026, 0, 1)) / 60000;
  const r = x => Math.round(x);

  function build(iso, lat, lon, G) {
    const b = dayBase(iso);                       // minutes from BASE to this date's midnight (IST)
    const midJD = BASE_JD + b / 1440;
    const srJD = event(midJD + 0.25 - lon / 360 + 82.5 / 360, lat, lon, true);
    const ssJD = event(srJD + 0.47, lat, lon, false);
    const nsJD = event(ssJD + 0.53, lat, lon, true);
    const sr = minsBase(srJD) - b, ss = minsBase(ssJD) - b, ns = minsBase(nsJD) - b;
    const w = new Date(Date.UTC(+iso.slice(0, 4), +iso.slice(5, 7) - 1, +iso.slice(8, 10))).getUTCDay();
    const dl = ss - sr, nl = ns - ss, p8 = dl / 8, mu = dl / 15, nmu = nl / 15;
    const part8 = k => [r(sr + (k - 1) * p8), r(sr + k * p8)];
    const dmu = k => [r(sr + (k - 1) * mu), r(sr + k * mu)];
    const nmuh = k => [r(ss + (k - 1) * nmu), r(ss + k * nmu)];
    // like the engine: a piece that starts less than a minute before the next sunrise is left out
    const two = list => list.filter(x => x[2] - b > sr && x[1] - b < ns).filter((x, i) => i === 0 || ns - (x[1] - b) >= 1)
                            .slice(0, 2).map(x => [x[0], r(x[2] - b)]);
    const at = (list, m) => list.find(x => x[1] - b <= m && x[2] - b > m);
    const inWin = list => list.filter(x => x[0] - b >= sr && x[0] - b < ns).map(x => [r(x[0] - b), r(x[1] - b)]);
    const gw = [];
    GOWRI_DAY[w].forEach((g, i) => {
      if (!GOWRI_GOOD.has(g)) return;
      const a = sr + i * p8, e = sr + (i + 1) * p8;
      if (gw.length && Math.abs(gw[gw.length - 1][1] - a) < 1e-6) gw[gw.length - 1][1] = e; else gw.push([a, e]);
    });
    const di = G.days.findIndex(x => x[0] === iso);
    if (di < 0) return null;
    const day = G.days[di];
    // lunar month / samvatsara were taken at Hyderabad's sunrise; if this city's sunrise falls on the other
    // side of a new moon (Amavasya <-> Pratipada), use the neighbouring day's month instead
    const tc = (at(G.t, sr) || [day[8]])[0], th = day[8];
    const src = (th === 0 && tc === 29 && G.days[di - 1]) ? G.days[di - 1] : (th === 29 && tc === 0 && G.days[di + 1]) ? G.days[di + 1] : day;
    const mr = at(G.r, sr);
    return {
      d: iso, w, sr: r(sr), ss: r(ss),
      t: two(G.t), n: two(G.n), y: two(G.y), k: two(G.k),
      rahu: part8(RAHU[w]), yama: part8(YAMA[w]), gul: part8(GULIKA[w]),
      abh: w === 3 ? null : dmu(8),
      dur: DUR[w].map(k => typeof k === "string" ? nmuh(+k.slice(1)) : dmu(k)),
      varj: inWin(G.varj), amr: inWin(G.amr), gowri: gw.map(x => [r(x[0]), r(x[1])]),
      lm: src[1], adh: !!src[2], svt: src[3], tm: day[4], td: day[5], sva: day[6], ch: mr ? (mr[0] + 5) % 12 : day[7],
    };
  }

  root.PanchangCity = { build, sunEvent: event };
  if (typeof module !== "undefined") module.exports = root.PanchangCity;
})(typeof window !== "undefined" ? window : globalThis);
