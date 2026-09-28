export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ar";
export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);
export const dir = (l: Locale) => (l === "ar" ? "rtl" : "ltr");

type Service = { title: string; desc: string; from: string; sessions: string };
type Plan = { name: string; price: string; unit: string; features: string[]; badge?: string };
type Step = { title: string; desc: string };
type QA = { q: string; a: string };
type Review = { name: string; text: string; area: string };
type Result = { title: string; caption: string };

export type Dictionary = {
  meta: { title: string; description: string; keywords: string[] };
  nav: { services: string; why: string; results: string; pricing: string; faq: string; contact: string; book: string; lang: string };
  hero: {
    badge: string; title1: string; title2: string; subtitle: string;
    ctaPrimary: string; ctaSecondary: string; offer: string; rating: string;
    stats: { value: string; label: string }[];
  };
  trust: string[];
  services: { eyebrow: string; title: string; subtitle: string; from: string; sessions: string; items: Service[]; cta: string };
  why: { eyebrow: string; title: string; subtitle: string; items: { title: string; desc: string }[] };
  results: { eyebrow: string; title: string; subtitle: string; before: string; after: string; items: Result[] };
  pricing: { eyebrow: string; title: string; subtitle: string; note: string; plans: Plan[]; cta: string };
  process: { eyebrow: string; title: string; steps: Step[] };
  reviews: { eyebrow: string; title: string; subtitle: string; items: Review[] };
  faq: { eyebrow: string; title: string; items: QA[] };
  booking: {
    eyebrow: string; title: string; subtitle: string;
    name: string; phone: string; branch: string; service: string; date: string; time: string; notes: string;
    submit: string; sending: string; hint: string; success: string;
    times: string[];
  };
  contact: { eyebrow: string; title: string; subtitle: string; branches: string; address: string; hours: string; hoursValue: string; phone: string; directions: string; whatsapp: string; call: string };
  footer: { tagline: string; quick: string; services: string; contact: string; rights: string; developed: string };
  floating: { whatsapp: string; call: string; book: string };
  waMessage: string;
};

const ar: Dictionary = {
  meta: {
    title: "2nd Home Clinic | د. نوران جهاد - ليزر وجلدية وتجميل في الشيخ زايد",
    description:
      "عيادة 2nd Home في كازان مول، الشيخ زايد / السادس من أكتوبر. إزالة الشعر بالليزر بجهاز كانديلا ماكس برو، سكين بوستر، فيلر، تفتيح ونحت الجسم بإشراف د. نوران جهاد. جلسة فل بودي في ٢٠ دقيقة بـ ١١٩٩ ج.م. احجزي الآن.",
    keywords: ["ليزر الشيخ زايد", "عيادة تجميل أكتوبر", "كانديلا ماكس برو", "سكين بوستر", "فيلر الشيخ زايد", "2nd home clinic", "د. نوران جهاد"],
  },
  nav: { services: "الخدمات", why: "لماذا نحن", results: "النتائج", pricing: "العروض", faq: "الأسئلة الشائعة", contact: "تواصلي معنا", book: "احجزي الآن", lang: "English" },
  hero: {
    badge: "كازان مول - الشيخ زايد",
    title1: "بيتك التاني",
    title2: "لبشرة بلا عيوب",
    subtitle:
      "عيادة جلدية وتجميل بإشراف د. نوران جهاد: ليزر كانديلا ماكس برو، سكين بوستر، فيلر، تفتيح ونحت الجسم - في مكان يشبه بيتك، بنتائج تشبه أحلامك.",
    ctaPrimary: "احجزي موعدك",
    ctaSecondary: "تواصلي واتساب",
    offer: "عرض محدود: جلسة فل بودي ليزر بـ ١١٩٩ ج.م فقط - في ٢٠ دقيقة",
    rating: "تقييم جوجل",
    stats: [
      { value: "٤.٧", label: "تقييم جوجل" },
      { value: "+٦٨", label: "مراجعة حقيقية" },
      { value: "٢٠ د", label: "جلسة فل بودي" },
      { value: "FDA", label: "أجهزة معتمدة" },
    ],
  },
  trust: ["كانديلا ماكس برو", "إشراف طبي - د. نوران جهاد", "أجهزة معتمدة FDA", "خصوصية كاملة", "تعقيم كامل", "أسعار شفافة"],
  services: {
    eyebrow: "خدماتنا",
    title: "كل ما تحتاجه بشرتك في مكان واحد",
    subtitle: "من الليزر إلى العناية الطبية بالبشرة والجسم - بروتوكولات مخصصة لكل نوع بشرة تحت إشراف طبي.",
    from: "يبدأ من",
    sessions: "الجلسات المتوقعة",
    items: [
      { title: "ليزر فل بودي", desc: "كانديلا ماكس برو - جلسة كاملة في ٢٠ دقيقة بدون ألم.", from: "١٬١٩٩ ج.م", sessions: "٦ - ٨" },
      { title: "ليزر مناطق", desc: "وجه، إبط، بكيني، ذراعين أو ساقين - حسب احتياجك.", from: "٢٠٠ ج.م", sessions: "٦ - ٨" },
      { title: "ليزر للرجال", desc: "الليزر هيخلي الحلاقة اليومية مش روتينك - لحية، ظهر، صدر.", from: "٣٥٠ ج.م", sessions: "٨ - ١٠" },
      { title: "سكين بوستر", desc: "ترطيب عميق ونضارة من الداخل - بشرتك محتاجة بوستر ولا مرطب؟", from: "٢٬٥٠٠ ج.م", sessions: "١ - ٣" },
      { title: "فيلر", desc: "شفايف، خدود وتحديد الوجه بنتائج طبيعية - Glow starts here.", from: "٣٬٥٠٠ ج.م", sessions: "١" },
      { title: "تفتيح البشرة", desc: "بروتوكول Whitening طبي للوجه والمناطق الحساسة - ابدئي بالاختيار الصح.", from: "٨٠٠ ج.م", sessions: "٤ - ٦" },
      { title: "نحت وشد الجسم", desc: "تفتيت الدهون الموضعية وشد الترهلات بأحدث الأجهزة.", from: "١٬٠٠٠ ج.م", sessions: "٤ - ٨" },
      { title: "تنظيف وتقشير", desc: "هيدرافيشيال وتقشير كيميائي لبشرة صافية ومتجددة.", from: "٦٠٠ ج.م", sessions: "١ - ٤" },
    ],
    cta: "اسألي عن سعر خدمتك",
  },
  why: {
    eyebrow: "لماذا 2nd Home؟",
    title: "لأن بشرتك تستاهل بيت تاني",
    subtitle: "إشراف طبي، أجهزة عالمية، وتجربة مريحة من أول لحظة.",
    items: [
      { title: "إشراف طبي متخصص", desc: "كل حالة تُفحص وتُتابع شخصياً من د. نوران جهاد، مع خطة علاج مخصصة لنوع بشرتك." },
      { title: "مش أي جهاز ليزر يناسب بشرتك", desc: "نمتلك أكثر من جهاز ليزر معتمد ونختار الأنسب لدرجة بشرتك ونوع شعرك - وليس العكس." },
      { title: "كانديلا ماكس برو", desc: "الجهاز الأمريكي الأشهر عالمياً: أسرع، أأمن، وبتبريد يمنع الألم. فل بودي في ٢٠ دقيقة." },
      { title: "نتائج موثقة", desc: "صور قبل وبعد حقيقية لعميلاتنا في الفيلر والسكين بوستر ونحت الجسم." },
      { title: "خصوصية وراحة", desc: "غرف خاصة، تعقيم كامل بعد كل جلسة، وأجواء هادئة تشبه بيتك." },
      { title: "أسعار تنافسية وعروض دائمة", desc: "أفضل سعر لجلسة فل بودي في الشيخ زايد، مع عروض شهرية وباقات مرنة." },
    ],
  },
  results: {
    eyebrow: "قبل وبعد",
    title: "النتائج تتكلم",
    subtitle: "صور حقيقية لعميلات 2nd Home - بدون فلاتر.",
    before: "قبل",
    after: "بعد",
    items: [
      { title: "فيلر ٢ مل", caption: "Glow starts here - نضارة وتحديد طبيعي للوجه من جلسة واحدة." },
      { title: "نحت الجسم", caption: "A boost of glow, a touch of confidence - شد ونحت منطقة البطن." },
    ],
  },
  pricing: {
    eyebrow: "العروض",
    title: "عروض الشهر",
    subtitle: "أسعار واضحة بدون رسوم مخفية. كل الباقات تشمل استشارة طبية مجانية.",
    note: "* الأسعار تقريبية وتُحدد نهائياً بعد الاستشارة. العروض لفترة محدودة.",
    plans: [
      { name: "جلسة فل بودي", price: "١٬١٩٩", unit: "ج.م / الجلسة", badge: "العرض الأقوى", features: ["كانديلا ماكس برو", "الجسم بالكامل في ٢٠ دقيقة", "بدون ألم مع التبريد", "استشارة طبية مجانية", "مناسبة لكل أنواع البشرة"] },
      { name: "باقة ٦ جلسات فل بودي", price: "٥٬٩٩٩", unit: "ج.م / ٦ جلسات", features: ["توفير أكثر من ١٬٠٠٠ ج.م", "متابعة طبية بين الجلسات", "جلسة صيانة مجانية", "أولوية في الحجز"] },
      { name: "باقة الجلو", price: "٥٬٥٠٠", unit: "ج.م", features: ["سكين بوستر + تنظيف عميق", "استشارة تفتيح مجانية", "خصم ١٠٪ على الفيلر", "روتين عناية منزلي"] },
    ],
    cta: "احجزي هذا العرض",
  },
  process: {
    eyebrow: "كيف تتم الزيارة؟",
    title: "٤ خطوات بسيطة",
    steps: [
      { title: "استشارة طبية", desc: "نفحص بشرتك ونحدد الجهاز والبروتوكول المناسب لك." },
      { title: "جلسة تجريبية", desc: "نجرب على منطقة صغيرة لتطمئني على الأمان والراحة." },
      { title: "الجلسة", desc: "فل بودي في ٢٠ دقيقة، أو جلسة عناية مخصصة حسب الخدمة." },
      { title: "متابعة", desc: "نتابعك بعد الجلسة ونعدّل الخطة لضمان أفضل نتيجة." },
    ],
  },
  reviews: {
    eyebrow: "آراء عملائنا",
    title: "٤.٧ من ٥ على جوجل",
    subtitle: "أكثر من ٦٨ مراجعة حقيقية من عملاء 2nd Home في الشيخ زايد.",
    items: [
      { name: "منة ع.", area: "الشيخ زايد", text: "المكان فعلاً بيت تاني. د. نوران بتشرح كل حاجة بصبر وجلسة الفل بودي خلصت في ٢٠ دقيقة زي ما قالوا." },
      { name: "ياسمين ه.", area: "٦ أكتوبر", text: "عملت سكين بوستر والفرق واضح من أول أسبوع. النظافة والتعقيم ممتازين والأسعار معقولة جداً." },
      { name: "أحمد ر.", area: "الشيخ زايد", text: "ليزر اللحية غيّر روتيني اليومي. تعامل محترم ومواعيد منظمة." },
    ],
  },
  faq: {
    eyebrow: "الأسئلة الشائعة",
    title: "كل ما تحتاجين معرفته",
    items: [
      { q: "هل الليزر مؤلم؟", a: "لا. جهاز كانديلا ماكس برو مزود بتبريد ديناميكي يبرّد البشرة قبل كل نبضة، فتشعرين بلمسة باردة فقط." },
      { q: "كيف تختارون جهاز الليزر المناسب لي؟", a: "بعد فحص درجة بشرتك ونوع شعرك، نختار الطول الموجي المناسب (ألكسندرايت أو Nd:YAG) لضمان الأمان والفعالية." },
      { q: "كم عدد جلسات الليزر المطلوبة؟", a: "عادة من ٦ إلى ٨ جلسات بفاصل ٤ - ٦ أسابيع حسب المنطقة ونوع الشعر." },
      { q: "ما الفرق بين السكين بوستر والمرطب؟", a: "المرطب يعمل على سطح البشرة فقط، أما السكين بوستر فيُحقن حمض الهيالورونيك داخل الجلد لترطيب ونضارة تدوم لشهور." },
      { q: "هل الفيلر نتيجته طبيعية؟", a: "نعم. نستخدم فيلر معتمد وكميات مدروسة (مثل ٢ مل للوجه) للحصول على نتيجة طبيعية ومتناسقة." },
      { q: "هل تستقبلون الرجال؟", a: "نعم، نوفر جلسات ليزر للرجال في مواعيد مخصصة (اللحية، الظهر، الصدر)." },
    ],
  },
  booking: {
    eyebrow: "احجزي موعدك",
    title: "استشارة طبية مجانية",
    subtitle: "املئي البيانات وسنؤكد موعدك خلال دقائق عبر واتساب.",
    name: "الاسم", phone: "رقم الموبايل", branch: "الفرع", service: "الخدمة", date: "التاريخ المفضل", time: "الوقت المفضل", notes: "ملاحظات (اختياري)",
    submit: "تأكيد الحجز عبر واتساب", sending: "جارٍ التحويل...", hint: "سيتم فتح واتساب برسالة جاهزة تحتوي بياناتك. لا نشارك بياناتك مع أي طرف.",
    success: "تم تجهيز رسالتك! أكملي الإرسال من واتساب.",
    times: ["١٢ م - ٣ م", "٣ م - ٦ م", "٦ م - ٩ م", "٩ م - ١١ م"],
  },
  contact: {
    eyebrow: "موقعنا",
    title: "في كازان مول - الشيخ زايد",
    subtitle: "مبنى A4، وحدة ١٢١، الدور الأول.",
    branches: "فروعنا",
    address: "العنوان", hours: "مواعيد العمل", hoursValue: "يومياً حتى ١١ مساءً",
    phone: "الهاتف", directions: "الاتجاهات على الخريطة", whatsapp: "راسلينا واتساب", call: "اتصلي بنا",
  },
  footer: {
    tagline: "Your second home for flawless skin - عيادة جلدية وتجميل بإشراف د. نوران جهاد.",
    quick: "روابط سريعة", services: "الخدمات", contact: "تواصلي معنا",
    rights: "جميع الحقوق محفوظة", developed: "2nd Home Clinic",
  },
  floating: { whatsapp: "واتساب", call: "اتصال", book: "احجزي" },
  waMessage: "مرحباً 2nd Home Clinic، أرغب في حجز استشارة مجانية.",
};

const en: Dictionary = {
  meta: {
    title: "2nd Home Clinic | Dr. Nuran Jehad - Laser, Skin & Aesthetics in Sheikh Zayed",
    description:
      "2nd Home Clinic at Kazan Mall, Sheikh Zayed / 6th of October. Candela Max Pro laser hair removal, skin boosters, filler, whitening and body contouring under Dr. Nuran Jehad. Full-body laser in 20 minutes for EGP 1,199. Book now.",
    keywords: ["laser Sheikh Zayed", "aesthetic clinic 6th October", "Candela Max Pro", "skin booster Cairo", "filler Sheikh Zayed", "2nd home clinic", "Dr. Nuran Jehad"],
  },
  nav: { services: "Services", why: "Why Us", results: "Results", pricing: "Offers", faq: "FAQ", contact: "Contact", book: "Book Now", lang: "عربي" },
  hero: {
    badge: "Kazan Mall - Sheikh Zayed",
    title1: "Your second home",
    title2: "for flawless skin",
    subtitle:
      "A dermatology and aesthetics clinic led by Dr. Nuran Jehad: Candela Max Pro laser, skin boosters, filler, whitening and body contouring - in a place that feels like home, with results that feel like a dream.",
    ctaPrimary: "Book Your Appointment",
    ctaSecondary: "Chat on WhatsApp",
    offer: "Limited offer: full-body laser session for only EGP 1,199 - in 20 minutes",
    rating: "Google rating",
    stats: [
      { value: "4.7", label: "Google rating" },
      { value: "68+", label: "Real reviews" },
      { value: "20 min", label: "Full-body session" },
      { value: "FDA", label: "Approved devices" },
    ],
  },
  trust: ["Candela Max Pro", "Led by Dr. Nuran Jehad", "FDA-approved devices", "Total privacy", "Full sterilisation", "Transparent pricing"],
  services: {
    eyebrow: "Our Services",
    title: "Everything your skin needs, in one place",
    subtitle: "From laser to medical skin and body care - protocols tailored to every skin type under medical supervision.",
    from: "From",
    sessions: "Expected sessions",
    items: [
      { title: "Full-Body Laser", desc: "Candela Max Pro - a complete session in 20 minutes, pain-free.", from: "EGP 1,199", sessions: "6 - 8" },
      { title: "Laser by Area", desc: "Face, underarms, bikini, arms or legs - your choice.", from: "EGP 200", sessions: "6 - 8" },
      { title: "Laser for Men", desc: "Make daily shaving a thing of the past - beard line, back, chest.", from: "EGP 350", sessions: "8 - 10" },
      { title: "Skin Booster", desc: "Deep hydration and glow from within - booster or moisturizer? Now you know.", from: "EGP 2,500", sessions: "1 - 3" },
      { title: "Filler", desc: "Lips, cheeks and contouring with natural results - glow starts here.", from: "EGP 3,500", sessions: "1" },
      { title: "Whitening", desc: "Medical whitening protocols for face and sensitive areas - start with the right choice.", from: "EGP 800", sessions: "4 - 6" },
      { title: "Body Contouring", desc: "Localised fat reduction and skin tightening with the latest devices.", from: "EGP 1,000", sessions: "4 - 8" },
      { title: "Cleansing & Peels", desc: "HydraFacial and chemical peels for clear, renewed skin.", from: "EGP 600", sessions: "1 - 4" },
    ],
    cta: "Ask about your treatment",
  },
  why: {
    eyebrow: "Why 2nd Home?",
    title: "Because your skin deserves a second home",
    subtitle: "Medical supervision, world-class devices and a comfortable experience from the first moment.",
    items: [
      { title: "Specialist medical supervision", desc: "Every case is assessed and followed personally by Dr. Nuran Jehad, with a plan tailored to your skin type." },
      { title: "Not every laser suits your skin", desc: "We own several certified laser devices and choose the right one for your skin tone and hair type - not the other way round." },
      { title: "Candela Max Pro", desc: "The world's most trusted US laser: faster, safer, with cooling that prevents pain. Full body in 20 minutes." },
      { title: "Documented results", desc: "Real before-and-after photos of our clients in filler, skin boosters and body contouring." },
      { title: "Privacy and comfort", desc: "Private rooms, full sterilisation after every session and a calm atmosphere that feels like home." },
      { title: "Competitive prices and ongoing offers", desc: "The best full-body session price in Sheikh Zayed, with monthly offers and flexible packages." },
    ],
  },
  results: {
    eyebrow: "Before & After",
    title: "Results that speak",
    subtitle: "Real photos of 2nd Home clients - no filters.",
    before: "Before",
    after: "After",
    items: [
      { title: "2 ml Filler", caption: "Glow starts here - natural facial glow and definition from a single session." },
      { title: "Body Contouring", caption: "A boost of glow, a touch of confidence - abdominal tightening and contouring." },
    ],
  },
  pricing: {
    eyebrow: "Offers",
    title: "This month's offers",
    subtitle: "Clear prices, no hidden fees. Every package includes a free medical consultation.",
    note: "* Prices are indicative and confirmed after consultation. Offers are for a limited time.",
    plans: [
      { name: "Full-Body Session", price: "1,199", unit: "EGP / session", badge: "Best offer", features: ["Candela Max Pro", "Full body in 20 minutes", "Pain-free with cooling", "Free medical consultation", "Suitable for all skin types"] },
      { name: "6 Full-Body Sessions", price: "5,999", unit: "EGP / 6 sessions", features: ["Save over EGP 1,000", "Medical follow-up between sessions", "Free maintenance session", "Priority booking"] },
      { name: "Glow Package", price: "5,500", unit: "EGP", features: ["Skin booster + deep cleansing", "Free whitening consultation", "10% off filler", "Home skincare routine"] },
    ],
    cta: "Book this offer",
  },
  process: {
    eyebrow: "How it works",
    title: "4 simple steps",
    steps: [
      { title: "Medical consultation", desc: "We assess your skin and select the right device and protocol for you." },
      { title: "Patch test", desc: "A small test area so you can feel the comfort and safety first-hand." },
      { title: "Your session", desc: "Full body in 20 minutes, or a tailored skin treatment depending on the service." },
      { title: "Follow-up", desc: "We check in after your session and adjust the plan for the best result." },
    ],
  },
  reviews: {
    eyebrow: "Client Reviews",
    title: "4.7 out of 5 on Google",
    subtitle: "Over 68 real reviews from 2nd Home clients in Sheikh Zayed.",
    items: [
      { name: "Menna A.", area: "Sheikh Zayed", text: "The place truly feels like a second home. Dr. Nuran explains everything patiently and the full-body session took 20 minutes as promised." },
      { name: "Yasmine H.", area: "6th of October", text: "Had a skin booster and the difference was clear within a week. Hygiene is excellent and the prices are very reasonable." },
      { name: "Ahmed R.", area: "Sheikh Zayed", text: "Beard laser changed my daily routine. Respectful staff and well-organised appointments." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Everything you need to know",
    items: [
      { q: "Does laser hair removal hurt?", a: "No. The Candela Max Pro uses dynamic cooling that chills the skin before every pulse, so you only feel a light cool touch." },
      { q: "How do you choose the right laser for me?", a: "After assessing your skin tone and hair type, we select the appropriate wavelength (Alexandrite or Nd:YAG) for safety and effectiveness." },
      { q: "How many laser sessions do I need?", a: "Typically 6 to 8 sessions spaced 4 - 6 weeks apart, depending on the area and hair type." },
      { q: "Skin booster vs moisturizer - what's the difference?", a: "A moisturizer works on the surface only; a skin booster injects hyaluronic acid into the skin for hydration and glow that lasts months." },
      { q: "Will filler look natural?", a: "Yes. We use certified fillers in measured amounts (e.g. 2 ml for the face) for a natural, balanced result." },
      { q: "Do you treat men?", a: "Yes, we offer laser for men in dedicated slots (beard line, back, chest)." },
    ],
  },
  booking: {
    eyebrow: "Book Your Visit",
    title: "Free medical consultation",
    subtitle: "Fill in your details and we will confirm your appointment within minutes on WhatsApp.",
    name: "Name", phone: "Mobile number", branch: "Branch", service: "Service", date: "Preferred date", time: "Preferred time", notes: "Notes (optional)",
    submit: "Confirm via WhatsApp", sending: "Redirecting...", hint: "WhatsApp will open with a pre-filled message containing your details. We never share your data.",
    success: "Your message is ready - just hit send in WhatsApp.",
    times: ["12 PM - 3 PM", "3 PM - 6 PM", "6 PM - 9 PM", "9 PM - 11 PM"],
  },
  contact: {
    eyebrow: "Find Us",
    title: "Kazan Mall - Sheikh Zayed",
    subtitle: "Building A4, Unit 121, 1st floor.",
    branches: "Our branches",
    address: "Address", hours: "Opening hours", hoursValue: "Daily until 11 PM",
    phone: "Phone", directions: "Get directions", whatsapp: "WhatsApp us", call: "Call us",
  },
  footer: {
    tagline: "Your second home for flawless skin - dermatology and aesthetics led by Dr. Nuran Jehad.",
    quick: "Quick links", services: "Services", contact: "Contact",
    rights: "All rights reserved", developed: "2nd Home Clinic",
  },
  floating: { whatsapp: "WhatsApp", call: "Call", book: "Book" },
  waMessage: "Hi 2nd Home Clinic, I would like to book a free consultation.",
};

export const dictionaries: Record<Locale, Dictionary> = { ar, en };
