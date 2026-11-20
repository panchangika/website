(() => {
  "use strict";

  const UI = {
    en: {
      title: "Know today's good hours before you step out.",
      lead: "A free daily panchangam in Telugu, Tamil and English. Tithi, nakshatra, Rahu kalam and the good times of the day, on your phone every morning.",
      join: "Join our Telegram Channel", watch: "Subscribe on YouTube", follow: "Follow on Instagram", wa: "Follow our WhatsApp Channel",
      full: "Today in full", get: "Get it every morning",
      getLead: "Pick your language. The card comes at the same time every day, free.",
      cityTe: "Times for Hyderabad", cityTa: "Times for Chennai", cityEn: "Times for Hyderabad",
      how: "How the times are worked out",
      how1: "Every time is calculated from the real positions of the sun and moon for the city shown, using the Lahiri ayanamsa that most Indian almanacs follow. Each day's figures are checked against standard printed panchangams.",
      how2: "Rahu kalam, Yamagandam and Gulika come from the length of the day between sunrise and sunset, so they shift a little every day and from city to city. For a wedding, griha pravesham or other important event, confirm the muhurtham with your family priest.",
      privacy: "Privacy", terms: "Terms", meanings: "Meanings", stotrams: "Stotrams with meaning", stotramsSub: "Read daily prayers with their meaning", stotramsGo: "Open stotrams", lgGood: "Good time", lgRahu: "Rahu Kalam", lgSoft: "Other times to avoid", stotramsNav: "Stotrams",
      fullLead: c => `All times are Indian Standard Time for ${c}.`,
      now: "Now", nowGood: "Good time now", until: "until", next: "Next", from: "from",
      angas: "Today's panchangam", hour: "Your day, hour by hour", dlSub: c => `Sunrise to sunset · ${c}`, timesFor: c => `Times for ${c}`, sunRow: "Sun", tagGood: "good", tagAvoid: "avoid", clearShort: "Clear time", ytTitle: "Watch every day on YouTube", ytLead: "Today's panchangam, festival specials and short explainers · free", dailyOn: "Daily card every morning on", seeAll: "See all times, with meanings", evTitle: "Plan an event", evSub: "Muhurtam for griha pravesham, wedding, vehicle · coming soon", samv: s => `${s} nama samvatsaram`, masa: m => `${m} masa`, clear: "Clear for now.", nextAvoid: "Next to avoid", set: "The sun has set.", tomorrowRise: "Sunrise tomorrow",
      before: "Before sunrise.", city: { hyderabad: "Hyderabad", chennai: "Chennai" },
      changeCity: "Change city",
      noData: "Today's panchangam will be back shortly.", noPeriod: "No special period at this time",
    },
    te: {
      title: "బయటికి వెళ్ళే ముందు నేటి శుభ సమయం తెలుసుకోండి.",
      lead: "తెలుగు, తమిళం, ఇంగ్లీష్‌లో ప్రతి రోజు ఉచిత పంచాంగం. తిథి, నక్షత్రం, రాహుకాలం, శుభ సమయాలు ప్రతి ఉదయం మీ ఫోన్‌లో.",
      join: "Telegram ఛానెల్‌లో చేరండి", watch: "YouTube ఛానెల్ సబ్‌స్క్రైబ్ చేయండి", follow: "Instagram లో ఫాలో అవ్వండి", wa: "WhatsApp ఛానెల్ ఫాలో అవ్వండి",
      full: "నేటి పూర్తి పంచాంగం", get: "ప్రతి ఉదయం మీ ఫోన్‌కి",
      getLead: "మీ భాషను ఎంచుకోండి. ప్రతి రోజు అదే సమయానికి, ఉచితంగా.",
      cityTe: "హైదరాబాద్ సమయాలు", cityTa: "చెన్నై సమయాలు", cityEn: "హైదరాబాద్ సమయాలు",
      how: "సమయాలు ఎలా లెక్కిస్తాం",
      how1: "ప్రతి సమయాన్ని ఆ నగరానికి సూర్య చంద్రుల అసలు స్థానాల నుండి, చాలా పంచాంగాలు అనుసరించే లాహిరి అయనాంశతో లెక్కిస్తాం. ప్రతి రోజు వివరాలను ప్రామాణిక పంచాంగాలతో సరిచూస్తాం.",
      how2: "రాహుకాలం, యమగండం, గుళిక కాలం సూర్యోదయం నుండి సూర్యాస్తమయం వరకు ఉన్న పగటి నిడివి మీద ఆధారపడతాయి, అందుకే రోజుకీ నగరానికీ కొద్దిగా మారుతాయి. పెళ్ళి, గృహప్రవేశం వంటి ముఖ్యమైన కార్యాలకు ముహూర్తాన్ని మీ పురోహితుల దగ్గర నిర్ధారించుకోండి.",
      privacy: "గోప్యత", terms: "నిబంధనలు", meanings: "అర్థాలు", stotrams: "అర్థంతో స్తోత్రాలు", stotramsSub: "రోజువారీ ప్రార్థనలను వాటి అర్థంతో చదవండి", stotramsGo: "స్తోత్రాలు చూడండి", lgGood: "శుభ సమయం", lgRahu: "రాహుకాలం", lgSoft: "ఇతర అశుభ సమయాలు", stotramsNav: "స్తోత్రాలు",
      fullLead: c => `అన్ని సమయాలు ${c} భారత కాలమానం ప్రకారం.`,
      now: "ఇప్పుడు", nowGood: "ఇప్పుడు శుభ సమయం", until: "వరకు", next: "తదుపరి", from: "నుండి",
      angas: "నేటి పంచాంగం", hour: "మీ రోజు, గంట గంటకు", dlSub: c => `సూర్యోదయం నుండి సూర్యాస్తమయం వరకు · ${c}`, timesFor: c => `${c} సమయాలు`, sunRow: "సూర్యుడు", tagGood: "శుభం", tagAvoid: "అశుభం", clearShort: "వర్జించవలసిన సమయం లేదు", ytTitle: "ప్రతి రోజు YouTube లో చూడండి", ytLead: "నేటి పంచాంగం, పండుగ ప్రత్యేకాలు, చిన్న వివరణ వీడియోలు · ఉచితం", dailyOn: "రోజువారీ కార్డు – ప్రతి ఉదయం:", seeAll: "అన్ని సమయాలు, వాటి అర్థాలతో", evTitle: "శుభ కార్యానికి ముహూర్తం", evSub: "గృహప్రవేశం, వివాహం, వాహనం · త్వరలో", samv: s => `${s} నామ సంవత్సరం`, masa: m => m, clear: "ప్రస్తుతానికి వర్జించవలసిన సమయం లేదు.", nextAvoid: "తదుపరి అశుభ సమయం", set: "సూర్యాస్తమయం అయింది.", tomorrowRise: "రేపు సూర్యోదయం",
      before: "ఇంకా సూర్యోదయం కాలేదు.", city: { hyderabad: "హైదరాబాద్", chennai: "చెన్నై" },
      changeCity: "ఊరు మార్చండి",
      noData: "నేటి పంచాంగం త్వరలో వస్తుంది.", noPeriod: "ఈ సమయంలో ప్రత్యేక కాలం లేదు",
    },
    ta: {
      title: "வெளியே கிளம்பும் முன் இன்றைய நல்ல நேரத்தை அறிந்துகொள்ளுங்கள்.",
      lead: "தமிழ், தெலுங்கு, ஆங்கிலத்தில் தினசரி இலவச பஞ்சாங்கம். திதி, நட்சத்திரம், ராகு காலம், கௌரி நல்ல நேரம் ஒவ்வொரு காலையும் உங்கள் போனில்.",
      join: "Telegram சேனலில் சேருங்கள்", watch: "YouTube சேனலை சப்ஸ்கிரைப் செய்யுங்கள்", follow: "Instagram-இல் பின்தொடருங்கள்", wa: "WhatsApp சேனலைப் பின்தொடருங்கள்",
      full: "இன்றைய முழு பஞ்சாங்கம்", get: "ஒவ்வொரு காலையும் உங்கள் போனுக்கு",
      getLead: "உங்கள் மொழியைத் தேர்ந்தெடுங்கள். தினமும் அதே நேரத்தில், இலவசமாக.",
      cityTe: "ஹைதராபாத் நேரப்படி", cityTa: "சென்னை நேரப்படி", cityEn: "ஹைதராபாத் நேரப்படி",
      how: "நேரங்கள் எப்படி கணக்கிடப்படுகின்றன",
      how1: "ஒவ்வொரு நேரமும் அந்த நகரத்திற்கான சூரியன், சந்திரன் உண்மையான நிலைகளிலிருந்து, பெரும்பாலான பஞ்சாங்கங்கள் பின்பற்றும் லாஹிரி அயனாம்சத்துடன் கணக்கிடப்படுகிறது. தினசரி விவரங்கள் நிலையான பஞ்சாங்கங்களுடன் சரிபார்க்கப்படுகின்றன.",
      how2: "ராகு காலம், எமகண்டம், குளிகை ஆகியவை சூரிய உதயம் முதல் அஸ்தமனம் வரையிலான பகல் நேரத்தைப் பொறுத்தவை, எனவே நாளுக்கு நாள், ஊருக்கு ஊர் சற்று மாறும். திருமணம், கிரகப்பிரவேசம் போன்ற முக்கிய நிகழ்வுகளுக்கு முகூர்த்தத்தை உங்கள் குடும்ப புரோகிதரிடம் உறுதி செய்துகொள்ளுங்கள்.",
      privacy: "தனியுரிமை", terms: "விதிமுறைகள்", meanings: "விளக்கங்கள்", stotrams: "பொருளுடன் ஸ்தோத்திரங்கள்", stotramsSub: "தினசரி பிரார்த்தனைகளை அவற்றின் பொருளுடன் படியுங்கள்", stotramsGo: "ஸ்தோத்திரங்களைப் பாருங்கள்", lgGood: "நல்ல நேரம்", lgRahu: "ராகு காலம்", lgSoft: "தவிர்க்க வேண்டிய பிற நேரங்கள்", stotramsNav: "ஸ்தோத்திரங்கள்",
      fullLead: c => `எல்லா நேரங்களும் ${c} இந்திய நேரப்படி.`,
      now: "இப்போது", nowGood: "இப்போது நல்ல நேரம்", until: "வரை", next: "அடுத்து", from: "முதல்",
      angas: "இன்றைய பஞ்சாங்கம்", hour: "உங்கள் நாள், மணி வாரியாக", dlSub: c => `சூரிய உதயம் முதல் அஸ்தமனம் வரை · ${c}`, timesFor: c => `${c} நேரம்`, sunRow: "சூரியன்", tagGood: "நல்லது", tagAvoid: "தவிர்க்கவும்", clearShort: "தவிர்க்க வேண்டிய நேரம் இல்லை", ytTitle: "தினமும் YouTube-இல் பாருங்கள்", ytLead: "இன்றைய பஞ்சாங்கம், பண்டிகை சிறப்புகள், சிறு விளக்க வீடியோக்கள் · இலவசம்", dailyOn: "தினசரி அட்டை – ஒவ்வொரு காலையும்:", seeAll: "அனைத்து நேரங்களும், விளக்கங்களுடன்", evTitle: "சுப காரியத்துக்கு முகூர்த்தம்", evSub: "கிரகப்பிரவேசம், திருமணம், வாகனம் · விரைவில்", samv: s => `${s} வருடம்`, masa: m => m, clear: "இப்போதைக்கு தவிர்க்க வேண்டிய நேரம் இல்லை.", nextAvoid: "அடுத்து தவிர்க்க வேண்டியது", set: "சூரியன் மறைந்துவிட்டது.", tomorrowRise: "நாளை சூரிய உதயம்",
      before: "இன்னும் சூரிய உதயம் ஆகவில்லை.", city: { hyderabad: "ஹைதராபாத்", chennai: "சென்னை" },
      changeCity: "ஊரை மாற்றுங்கள்",
      noData: "இன்றைய பஞ்சாங்கம் விரைவில் வரும்.", noPeriod: "இந்த நேரத்தில் தனி காலம் இல்லை",
    },
  };

  // short meanings shown on hover / tap (Telugu and Tamil to be checked by a native reader)
  const DEF = {
    en: {
      rahu: "About 1½ hours each day (one-eighth of the daytime) linked to Rahu. Traditionally avoided for starting new work, journeys, purchases or ceremonies.",
      yama: "One-eighth of the daytime linked to Yama. Traditionally considered unsuitable for auspicious beginnings, especially setting out on a journey.",
      gulika: "One-eighth of the daytime ruled by Gulika, son of Shani. Whatever is started now is believed to repeat, so families avoid it for funerals or taking loans.",
      durmuhurtham: "An inauspicious muhurtham of about 48 minutes, fixed by the weekday (once or twice a day). Avoided for weddings, griha pravesham and new ventures.",
      varjyam: "A period of about 1½ hours linked to the day's nakshatra, considered harmful. Auspicious work is not started in it.",
      amrita: "A favourable period linked to the day's nakshatra. Considered good for starting important work and ceremonies.",
      abhijit: "About 48 minutes around local midday, considered auspicious for most new beginnings. Traditionally not used on Wednesdays.",
      gowri: "Gowri panchangam divides the day and the night into eight parts each. The good parts (Amirdham, Uthi, Labam, Dhanam, Sugam) suit new work.",
      chandrashtamam: "The roughly 2¼ days when the Moon passes the 8th sign from a person's birth rasi. People of the rasi shown are advised to be careful and avoid big decisions.",
    },
    te: {
      rahu: "పగటి సమయంలో ఎనిమిదో వంతు (సుమారు గంటన్నర) రాహువుకు చెందిన కాలం. కొత్త పనులు, ప్రయాణాలు, కొనుగోళ్లు, శుభకార్యాలు ఈ సమయంలో ప్రారంభించరాదని సంప్రదాయం.",
      yama: "పగటి సమయంలో యముడికి చెందిన ఎనిమిదో భాగం. శుభకార్యాలు, ముఖ్యంగా ప్రయాణాలు ప్రారంభించడానికి అనుకూలం కాదని నమ్మకం.",
      gulika: "శని పుత్రుడైన గుళికుడికి చెందిన పగటి ఎనిమిదో భాగం. ఈ సమయంలో మొదలుపెట్టిన పని మళ్లీ మళ్లీ జరుగుతుందని నమ్మకం; అందుకే అంత్యక్రియలు, అప్పులు ఈ సమయంలో చేయరు.",
      durmuhurtham: "వారాన్ని బట్టి వచ్చే సుమారు 48 నిమిషాల అశుభ ముహూర్తం (రోజుకు ఒకటి లేదా రెండు సార్లు). పెళ్లి, గృహప్రవేశం, కొత్త వ్యాపారాలకు దీనిని వదిలేస్తారు.",
      varjyam: "ఆ రోజు నక్షత్రాన్ని బట్టి వచ్చే సుమారు గంటన్నర అశుభ కాలం. శుభకార్యాలు ఈ సమయంలో ప్రారంభించరు.",
      amrita: "ఆ రోజు నక్షత్రాన్ని బట్టి వచ్చే శుభ సమయం. ముఖ్యమైన పనులు, శుభకార్యాలు ప్రారంభించడానికి మంచిదని నమ్మకం.",
      abhijit: "మధ్యాహ్నం చుట్టూ ఉండే సుమారు 48 నిమిషాల శుభ ముహూర్తం. చాలా కొత్త పనులకు అనుకూలం; బుధవారం దీనిని పాటించరు.",
    },
    ta: {
      rahu: "பகல் நேரத்தின் எட்டில் ஒரு பங்கு (சுமார் ஒன்றரை மணி நேரம்) ராகுவுக்குரிய காலம். புதிய காரியங்கள், பயணம், பொருள் வாங்குதல், சுப நிகழ்ச்சிகளை இந்த நேரத்தில் தொடங்குவதில்லை என்பது மரபு.",
      yama: "பகல் நேரத்தில் எமனுக்குரிய எட்டில் ஒரு பங்கு. சுப காரியங்களுக்கு, குறிப்பாக பயணம் தொடங்க, ஏற்றதல்ல என்பது நம்பிக்கை.",
      gulika: "சனியின் மகனான குளிகனுக்குரிய பகல் நேரப் பகுதி. இந்த நேரத்தில் தொடங்கும் செயல் மீண்டும் மீண்டும் நடக்கும் என்பது நம்பிக்கை; அதனால் இறுதிச் சடங்கு, கடன் வாங்குதல் போன்றவற்றைத் தவிர்ப்பார்கள்.",
      gowri: "கௌரி பஞ்சாங்கம் பகலையும் இரவையும் தலா எட்டு பகுதிகளாகப் பிரிக்கிறது. அமிர்தம், உத்தி, லாபம், தனம், சுகம் ஆகிய பகுதிகள் நல்ல காரியங்களுக்கு ஏற்றவை.",
      chandrashtamam: "பிறந்த ராசியிலிருந்து எட்டாவது ராசியில் சந்திரன் சஞ்சரிக்கும் சுமார் இரண்டே கால் நாட்கள். குறிப்பிட்ட ராசிக்காரர்கள் முக்கிய முடிவுகளைத் தவிர்த்து கவனமாக இருப்பது நல்லது என்பது நம்பிக்கை.",
    },
  };
  const CITY = { te: "hyderabad", en: "hyderabad", ta: "chennai" };
  const cityOf = l => document.documentElement.dataset.city || CITY[l];
  // city pages (/city/<slug>/, /te/city/<slug>/, /ta/city/<slug>/) carry their own name and location
  const H = document.documentElement.dataset;
  const isCityPage = !!H.lat;
  const cityName = l => (isCityPage && H.name) ? H.name : UI[l].city[cityOf(l)];
  const LINKS = {
    te: ["https://t.me/panchangika_te", "https://www.youtube.com/@PanchangikaTelugu", null, "/te/stotrams/", "https://whatsapp.com/channel/0029Vb9rGqR8fewtWX36kT3n"],
    ta: ["https://t.me/panchangika_ta", "https://www.youtube.com/@PanchangikaTamil", "https://www.instagram.com/panchangika.tamil/", "/ta/stotrams/", "https://whatsapp.com/channel/0029VbDjBHEBfxo65RFk7V47"],
    en: ["https://t.me/panchangika_en", "https://www.youtube.com/@Panchangika", "https://www.instagram.com/panchangika.in/", "/stotrams/", "https://whatsapp.com/channel/0029VbED6csKQuJRkevtPc3c"],
  };

  const $ = id => document.getElementById(id);
  const cache = {};
  let N = null, lang = "en", timer = null, firstDraw = true, seq = 0, current = null;

  const store = {
    get() { try { return localStorage.getItem("pk-lang"); } catch (e) { return null; } },
    set(v) { try { localStorage.setItem("pk-lang", v); } catch (e) { /* storage off */ } },
  };

  async function json(path) {
    if (!cache[path]) cache[path] = fetch(path).then(r => { if (!r.ok) throw new Error(path); return r.json(); });
    return cache[path];
  }

  // Current time in India, whatever the visitor's own time zone
  function istNow() {
    const d = new Date(Date.now() + 330 * 60000);
    return { iso: d.toISOString().slice(0, 10), min: d.getUTCHours() * 60 + d.getUTCMinutes() };
  }

  function fmt(m) {
    const next = m >= 1440;
    const mm = ((m % 1440) + 1440) % 1440;
    const h = Math.floor(mm / 60), mi = String(mm % 60).padStart(2, "0");
    const h12 = (h % 12) || 12;
    let s;
    if (lang === "en") s = `${h12}:${mi} ${h < 12 ? "AM" : "PM"}`;
    else {
      let part = "";
      for (const [from, label] of N.DAYPART[lang]) if (h >= from) part = label;
      s = `${part} ${h12}:${mi}`;
    }
    return next ? `${s} (+1)` : s;
  }
  const span = w => (w[0] >= 1440 && w[1] >= 1440) ? `${fmt(w[0]).replace(" (+1)", "")} – ${fmt(w[1])}` : `${fmt(w[0])} – ${fmt(w[1])}`;

  function tithiName(i) {
    if (i === 14) return N.PURNIMA[lang];
    if (i === 29) return N.AMAVASYA[lang];
    return N.TITHI[lang][i % 15];
  }

  function windows(D) {
    const L = N.LABEL[lang];
    const good = [], avoid = [];
    if (lang === "ta") D.gowri.forEach(w => good.push({ id: "gowri", k: L.gowri, w }));
    else {
      if (document.documentElement.dataset.city === "chennai" && !isCityPage) D.gowri.forEach(w => good.push({ id: "gowri", k: L.gowri, w }));
      if (D.abh) good.push({ id: "abhijit", k: L.abhijit, w: D.abh });
      D.amr.forEach(w => good.push({ id: "amrita", k: L.amrita, w }));
    }
    avoid.push({ id: "rahu", k: L.rahu, w: D.rahu, main: true }, { id: "yama", k: L.yama, w: D.yama }, { id: "gulika", k: L.gulika, w: D.gul });
    if (lang !== "ta") {
      D.dur.forEach(w => avoid.push({ id: "durmuhurtham", k: L.durmuhurtham, w }));
      D.varj.forEach(w => avoid.push({ id: "varjyam", k: L.varjyam, w }));
    }
    return { good, avoid };
  }

  function status(D, W, now) {
    const t = UI[lang], el = $("status");
    el.className = "status";
    const inW = list => list.find(o => now >= o.w[0] && now < o.w[1]);
    const bad = inW(W.avoid), good = inW(W.good);
    if (now < D.sr) { el.innerHTML = `${t.before} <b>${N.LABEL[lang].sunrise} ${fmt(D.sr)}</b>`; return; }
    if (bad) { el.innerHTML = `${t.now}: <b>${bad.k}</b> ${lang === "en" ? `${t.until} ${fmt(bad.w[1])}` : `${fmt(bad.w[1])} ${t.until}`}`; return; }
    if (good) { el.classList.add("good"); el.innerHTML = `${lang === "ta" ? t.now : t.nowGood}: <b>${good.k}</b> ${lang === "en" ? `${t.until} ${fmt(good.w[1])}` : `${fmt(good.w[1])} ${t.until}`}`; return; }
    const nxt = W.avoid.filter(o => o.w[0] > now && o.w[0] < D.ss).sort((a, b) => a.w[0] - b.w[0])[0];
    if (now > D.ss) { el.innerHTML = t.set; return; }
    el.innerHTML = nxt ? `${t.clear} ${t.nextAvoid}: <b>${nxt.k}</b> ${lang === "en" ? `${t.from} ${fmt(nxt.w[0])}` : `${fmt(nxt.w[0])} ${t.from}`}` : t.clear;
  }

  function header(D) {
    const t = UI[lang];
    const d = new Date(D.d + "T00:00:00Z");
    const day = d.getUTCDate(), mon = N.GREG_MONTH[lang][d.getUTCMonth()], yr = d.getUTCFullYear();
    const wd = N.VAARA[lang][D.w];
    const paksha = N.PAKSHA[lang][Math.floor(D.t[0][0] / 15)];
    $("date").innerHTML = `<span class="wd">${wd}</span> <span class="dn">${day}</span> <span class="mo">${mon} ${yr}</span>`;
    let l1, sv;
    if (lang === "ta") { l1 = `${N.TAMIL_MONTH.ta[D.tm]} ${D.td} · ${paksha}`; sv = t.samv(N.SAMVATSARA.ta[D.sva]); }
    else { l1 = `${(D.adh ? N.ADHIKA[lang] : "")}${t.masa(N.LUNAR_MONTH[lang][D.lm])} · ${paksha}`; sv = t.samv(N.SAMVATSARA[lang][D.svt]); }
    $("sub").innerHTML = `${l1}<br>${sv}`;
    $("cityline").textContent = t.timesFor(cityName(lang));
  }

  function limbs(D) {
    const L = N.LABEL[lang], t = UI[lang];
    const row = (label, items, namer) => {
      if (!items || !items.length) return "";
      const [i, e] = items[0], [j] = items[1] || [];
      const when = lang === "en" ? `${t.until} ${fmt(e)}` : `${fmt(e)} ${L.until}`;
      const then = items[1] ? ` · ${L.then} ${namer(j)}` : "";
      return `<div><dt>${label}</dt><dd><b>${namer(i)}</b> <span>${when}${then}</span></dd></div>`;
    };
    $("limbs").innerHTML = row(L.tithi, D.t, tithiName) + row(L.nakshatra, D.n, i => N.NAKSHATRA[lang][i])
      + (N.YOGA ? row(L.yoga, D.y, i => N.YOGA[lang][i]) : "") + (N.KARANA ? row(L.karana, D.k, i => N.KARANA[lang][i]) : "")
      + `<div><dt>${t.sunRow}</dt><dd><span>${L.sunrise} <b>${fmt(D.sr)}</b> · ${L.sunset} <b>${fmt(D.ss)}</b></span></dd></div>`;
  }

  function timeline(D, W, now) {
    const t = UI[lang], L = N.LABEL[lang];
    $("dl-sub").textContent = t.dlSub(cityName(lang));
    const evs = [];
    W.avoid.forEach(o => { if (o.w[1] > D.sr && o.w[0] < D.ss) evs.push({ ...o, bad: true }); });
    W.good.forEach(o => { if (o.w[1] > D.sr && o.w[0] < D.ss) evs.push({ ...o, bad: false }); });
    evs.sort((a, b) => a.w[0] - b.w[0]);
    const tag = o => `<i>· ${o.bad ? t.tagAvoid : t.tagGood}</i>`;
    const item = o => {
      const cls = ["ev", o.bad ? "avoid" : "good"];
      if (o.main) cls.push("main");
      if (now >= o.w[1]) cls.push("past");
      if (now >= o.w[0] && now < o.w[1]) cls.push("cur");
      return `<li class="${cls.join(" ")}"><span class="tm">${span(o.w)}</span><span class="nm">${o.k} ${tag(o)}</span></li>`;
    };
    const inW = list => list.find(o => now >= o.w[0] && now < o.w[1]);
    const bad = inW(W.avoid), good = inW(W.good);
    let nowTxt;
    if (bad) nowTxt = lang === "en" ? `<b>${bad.k}</b> ${t.until} ${fmt(bad.w[1])}` : `<b>${bad.k}</b> ${fmt(bad.w[1])} ${t.until}`;
    else if (good) nowTxt = lang === "en" ? `<b>${good.k}</b> ${t.until} ${fmt(good.w[1])}` : `<b>${good.k}</b> ${fmt(good.w[1])} ${t.until}`;
    else if (now < D.sr) nowTxt = t.before;
    else if (now > D.ss) nowTxt = t.set;
    else nowTxt = t.clearShort;
    const nowCls = bad ? "now bad" : good ? "now good" : "now";
    const nowLi = `<li class="${nowCls}"><span class="tm">${t.now} · ${fmt(now)}</span><span class="nm">${nowTxt}</span></li>`;
    let html = `<li class="ev sun${now >= D.sr ? " past" : ""}"><span class="tm">${fmt(D.sr)}</span><span class="nm">${L.sunrise}</span></li>`;
    let placed = now < D.sr;
    if (placed) html = nowLi + html;
    evs.forEach(o => { if (!placed && o.w[0] > now) { html += nowLi; placed = true; } html += item(o); });
    if (!placed && now <= D.ss) { html += nowLi; placed = true; }
    html += `<li class="ev sun"><span class="tm">${fmt(D.ss)}</span><span class="nm">${L.sunset}</span></li>`;
    if (!placed) html += nowLi;
    $("timeline").innerHTML = html;
  }

  function lists(D, W) {
    const L = N.LABEL[lang], t = UI[lang];
    $("h-good").textContent = L.good;
    $("h-avoid").textContent = lang === "ta" ? L.avoid : (lang === "te" ? "వర్జించవలసిన సమయాలు" : "Times to avoid");
    const term = (id, label) => DEF[lang][id]
      ? `<button type="button" class="term" data-id="${id}" aria-describedby="deftip">${label}<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M8 7v4.2M8 4.6v.1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button>`
      : `<span>${label}</span>`;
    const li = o => `<li>${term(o.id, o.k)}<span>${span(o.w)}</span></li>`;
    $("l-good").innerHTML = W.good.map(li).join("") || `<li><span>–</span><span></span></li>`;
    let av = W.avoid.map(li).join("");
    if (lang !== "te") av += `<li>${term("chandrashtamam", L.chandrashtamam)}<span>${N.RASI[lang][D.ch]}</span></li>`;
    $("l-avoid").innerHTML = av;
    $("full-lead").textContent = t.fullLead(cityName(lang));
  }

  async function render() {
    const t = UI[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-t]").forEach(el => { const v = t[el.dataset.t]; if (typeof v === "string") el.textContent = v; });
    document.querySelectorAll(".langs button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.l === lang)));
    $("cta-tg").href = LINKS[lang][0]; $("cta-yt").href = LINKS[lang][1];
    if ($("cta-ig")) { $("cta-ig").style.display = LINKS[lang][2] ? "" : "none"; if (LINKS[lang][2]) $("cta-ig").href = LINKS[lang][2]; }
    if ($("cta-wa")) $("cta-wa").href = LINKS[lang][4];
    if ($("cta-st")) $("cta-st").href = LINKS[lang][3];
    if ($("nav-st")) $("nav-st").href = LINKS[lang][3];
    if ($("city-change")) $("city-change").href = { en: "/city/", te: "/te/city/", ta: "/ta/city/" }[lang];
    const mine = ++seq;
    try {
      N = N || await json("/data/names.json");
      const { iso, min } = istNow();
      let days;
      if (isCityPage) {   // worked out here from the city's own sunrise and sunset (assets/city.js)
        const G = await json("/data/global.json");
        days = [window.PanchangCity.build(iso, +H.lat, +H.lon, G)].filter(Boolean);
      } else days = await json(`/data/${cityOf(lang)}.json`);
      if (mine !== seq) return; // a newer render (language switch) has started
      const D = days.find(x => x.d === iso);
      if (!D) { $("status").textContent = t.noData; if ($("timeline")) $("timeline").innerHTML = `<li class="now"><span class="nm">${t.noData}</span></li>`; return; }
      const W = windows(D);
      current = { D, W };
      header(D); status(D, W, min); limbs(D); timeline(D, W, min); lists(D, W);
    } catch (e) {
      $("status").textContent = t.noData; if ($("timeline")) $("timeline").innerHTML = `<li class="now"><span class="nm">${t.noData}</span></li>`;
    }
  }

  // each language has its own address: / (English), /te/, /ta/
  const PATH = isCityPage ? { en: `/city/${H.slug}/`, te: `/te/city/${H.slug}/`, ta: `/ta/city/${H.slug}/` }
                          : { en: "/", te: "/te/", ta: "/ta/" };
  const pageLang = document.documentElement.dataset.lang || "en";
  function pick() {
    const saved = store.get();
    // on the English home page only, send people who chose Telugu or Tamil before to their page
    if (location.pathname === "/" && saved && saved !== "en" && PATH[saved]) { location.replace(PATH[saved]); return saved; }
    return UI[pageLang] ? pageLang : "en";
  }

  document.querySelectorAll(".langs button").forEach(b => b.addEventListener("click", () => {
    const l = b.dataset.l; store.set(l);
    if (l !== pageLang) location.href = PATH[l] + (isCityPage ? location.search : ""); 
  }));


  // ---------- meaning popover for each period name ----------
  function setupMeanings() {
    const tip = $("deftip");
    let openBtn = null, wasOpen = false;
    function place(btn) {
      const id = btn.dataset.id, text = DEF[lang][id];
      if (!text) return;
      tip.innerHTML = `<b>${btn.textContent}</b>${text}`;
      tip.hidden = false;
      const r = btn.getBoundingClientRect(), w = tip.offsetWidth;
      let left = r.left + window.scrollX;
      left = Math.max(12, Math.min(left, window.scrollX + document.documentElement.clientWidth - w - 12));
      tip.style.left = left + "px";
      tip.style.top = (r.bottom + window.scrollY + 8) + "px";
      openBtn = btn;
    }
    function hide() { tip.hidden = true; openBtn = null; }
    const lists = [$("l-good"), $("l-avoid")];
    lists.forEach(ul => {
      ul.addEventListener("mouseover", e => { const b = e.target.closest(".term"); if (b && matchMedia("(hover: hover)").matches) place(b); });
      ul.addEventListener("mouseout", e => { const b = e.target.closest(".term"); if (b && matchMedia("(hover: hover)").matches && !b.contains(e.relatedTarget)) hide(); });
      ul.addEventListener("focusin", e => { const b = e.target.closest(".term"); if (b) place(b); });
      ul.addEventListener("focusout", hide);
      ul.addEventListener("pointerdown", e => { const b = e.target.closest(".term"); wasOpen = !!b && openBtn === b; });
      ul.addEventListener("click", e => { const b = e.target.closest(".term"); if (!b) return; e.stopPropagation(); if (wasOpen && !matchMedia("(hover: hover)").matches) hide(); else { place(b); tip.scrollIntoView({ block: "nearest", behavior: "smooth" }); } wasOpen = false; });
    });
    document.addEventListener("click", e => { if (!e.target.closest(".term")) hide(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") hide(); });
    window.addEventListener("resize", hide);
  }

  // ---------- hover / tap on the arc: show the time and what period it falls in ----------
  // enlarge a sample card in place instead of leaving the page
  const viewer = $("viewer"), vimg = $("viewer-img");
  if (viewer) {
  let lastFocus = null;
  function closeViewer() { viewer.hidden = true; vimg.removeAttribute("src"); if (lastFocus) lastFocus.focus(); }
  document.querySelectorAll("a.shot").forEach(a => a.addEventListener("click", e => {
    e.preventDefault(); lastFocus = a;
    vimg.src = a.getAttribute("href"); vimg.alt = a.querySelector("img").alt;
    viewer.hidden = false; $("viewer-close").focus();
  }));
  viewer.addEventListener("click", e => { if (e.target !== vimg) closeViewer(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !viewer.hidden) closeViewer(); });
  }

  setupMeanings();
  lang = pick();
  // PIN code: /city/<nearest city>/?pin=500032 works out the times for that PIN's own location (data/pin/NN.json)
  async function pinSetup() {
    const pin = new URLSearchParams(location.search).get("pin") || "";
    if (!isCityPage || !/^[1-9][0-9]{5}$/.test(pin)) return;
    try {
      const d = await json(`/data/pin/${pin.slice(0, 2)}.json`), e = d && d[pin];
      if (!e) return;
      const office = e[2].split(", ")[0], old = H.name, nm = `${office} · PIN ${pin}`, oldSt = H.state || "";
      let st = "";
      try { const S = await json("/data/pin/states.json"); st = (S[e[6]] || [])[{ en: 0, te: 1, ta: 2 }[pageLang]] || ""; } catch (err) { }
      H.lat = e[0]; H.lon = e[1]; H.name = nm;
      document.querySelectorAll("h1, main .lead").forEach(el => {
        let t = el.textContent;
        if (old) t = t.split(old).join(el.tagName === "H1" ? nm : office);
        if (oldSt) t = t.split(`(${oldSt})`).join(st ? `(${st})` : "").split(`, ${oldSt}`).join(st ? `, ${st}` : "");
        el.textContent = t;
      });
      document.title = document.title.split(old).join(nm);
    } catch (err) { /* keep the city's own times */ }
  }
  pinSetup().then(render);
  clearInterval(timer);
  timer = setInterval(render, 60000);
})();
