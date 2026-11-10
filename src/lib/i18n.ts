export type Lang = "en" | "te" | "tenglish";

export const LANG_COOKIE = "mms_lang";
export const DEFAULT_LANG: Lang = "en";

export const LANGUAGES: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "te", label: "తెలుగు", short: "తె" },
  { code: "tenglish", label: "Tenglish", short: "TE+EN" },
];

export function normalizeLang(value: string | undefined | null): Lang {
  return value === "te" || value === "tenglish" || value === "en" ? value : DEFAULT_LANG;
}

const en = {
  // Brand & navigation
  brandName: "Madina Mutton Shop",
  brandAlt: "మదీనా మటన్ షాపు",
  navHome: "Home",
  navProducts: "Products",
  navRates: "Live Rates",
  navServices: "Doorstep Cutting",
  navContact: "Contact",
  language: "Language",
  callNow: "Call Now",
  whatsappUs: "WhatsApp Us",
  bookNow: "Book Now",
  menu: "Menu",
  shopOpen: "Live — Shop Open Now",
  shopClosed: "Shop Closed — Opens {time}",

  // Badges
  halal: "Halal",
  halalFull: "100% Halal Certified",
  doorstepBadge: "Doorstep Cutting 15kg+",

  // Hero
  heroBadge: "100% Halal • Hygienic • Premium",
  heroTitleA: "Fresh Mutton,",
  heroTitleB: "Cut Right at Your Doorstep",
  heroSubtitle:
    "Narmetta's most trusted halal mutton shop — fresh goat & sheep meat, Mandya / Kubeek breed rams and live animals. Ordering 15kg+ for a function? Our master butchers come to your venue and cut live, on the spot.",
  heroCtaRates: "See Today's Rates",
  heroCtaBook: "Book Doorstep Cutting",
  heroStat1Value: "786",
  heroStat1Label: "Halal Certified",
  heroStat2Value: "15kg+",
  heroStat2Label: "Live Cutting at Home",
  heroStat3Value: "Daily",
  heroStat3Label: "Fresh Market Rates",
  ramCaption: "Mandya / Kubeek Breed Ram",

  // Rates ticker / shared rate labels
  tickerTitle: "Today's Live Rates",
  retail: "Retail",
  wholesale: "Wholesale",
  updatedOn: "Updated {time}",
  viewAllRates: "View All Rates →",
  soldOut: "Sold Out",
  inStock: "Available",
  ratesEmpty: "Rates will be updated shortly. Please call us for today's price.",
  unitPerKg: "per kg",
  unitPerPiece: "per piece",
  unitPerSet: "per set",

  // Offer cards (home)
  offerTitle: "What We Offer",
  offerSubtitle: "Fresh Mutton, Live Stock & Special Cuts",
  offer1Title: "Fresh Goat & Sheep Mutton",
  offer1Desc: "Cut fresh every morning — never frozen.",
  offer2Title: "Mandya / Kubeek Breed Ram",
  offer2Desc: "Heavy, healthy rams for Bakrid, functions and breeding.",
  offer3Title: "Live Goats & Sheep",
  offer3Desc: "Choose your own animal — sold live at fair prices.",
  offer4Title: "Specialty Cuts",
  offer4Desc: "Paya, liver, boti, brain, head meat and boneless.",
  exploreProducts: "Explore All Products →",

  // VIP banner
  vipBadge: "VIP Service • 15kg+",
  vipTitle: "Doorstep Live Cutting for 15kg+ Orders",
  vipSubtitle: "Functions • Weddings • Aqiqah • Bulk Buyers",
  vipDesc:
    "We don't do ordinary parcel delivery. Instead, for orders of 15kg or more, our master butchers travel to your house or venue and cut the animal fresh, live, right in front of you. You see it. You trust it.",
  vipPoint1: "Fresh live cutting on the spot",
  vipPoint2: "Halal slaughter with Bismillah",
  vipPoint3: "Own tools, clean & hygienic setup",
  vipPoint4: "Cut your way — curry, biryani or boti",

  // Quick WhatsApp
  waTitle: "Quick WhatsApp Order",
  waDesc: "Pick an item and quantity — we'll create your message instantly.",
  waName: "Your Name",
  waNamePlaceholder: "Enter your name",
  waItem: "Item",
  waQty: "Quantity",
  waPurpose: "Purpose",
  waPurposeHome: "Home use",
  waPurposeFunction: "Function / Wedding",
  waPurposeShop: "Hotel / Wholesale",
  waPreview: "Message preview",
  waSend: "Send on WhatsApp",
  waDoorstepHint: "15kg+ qualifies for Doorstep Live Cutting at your venue!",
  waMsg:
    "Assalamu Alaikum! I am {name}. I would like to order {qty} of {item} ({purpose}). Please confirm availability and today's rate. Thank you.",
  waCustomer: "a customer",

  // Founders & trust
  foundersTitle: "Meet the Proprietors",
  foundersDesc:
    "Madina Mutton Shop is run by Tahir Pasha and Ishaan — two partners who stand behind every kilo with their name.",
  founderRole: "Founder & Proprietor",
  founderName1: "Tahir Pasha",
  founderName2: "Ishaan",
  trust1Title: "100% Halal",
  trust1Desc: "Every animal is slaughtered strictly as per Islamic halal rules.",
  trust2Title: "Hygienic Slaughter",
  trust2Desc: "Clean tools, clean surfaces, clean hands — always.",
  trust3Title: "Premium Quality",
  trust3Desc: "Healthy, hand-picked livestock — tender, flavourful meat.",
  trust4Title: "Honest Weight",
  trust4Desc: "Digital scale, fair rates and no hidden charges.",

  // Products page
  productsTitle: "Meat Varieties & Live Stock",
  productsSubtitle: "Fresh cuts, live animals and specialty offal — all halal, all hand-picked.",
  catAll: "All",
  catFresh: "Fresh Cuts",
  catLive: "Live Animals",
  catOffal: "Offal & Special Cuts",
  inquire: "Inquire on WhatsApp",
  todaysRate: "Today's rate",
  callForPrice: "Call for price",
  productInquiryMsg:
    "Assalamu Alaikum! I would like to know about {item}. Please share today's rate and availability.",

  // Rates page
  ratesTitle: "Live Daily & Wholesale Rates",
  ratesSubtitle:
    "Prices move every day with livestock market supply. What you see here is today's rate, straight from the shop.",
  colItem: "Item",
  colRetail: "Retail Price",
  colWholesale: "Wholesale Price",
  colUnit: "Unit",
  colStatus: "Status",
  lastUpdated: "Last updated: {time}",
  ratesNote: "Rates change daily. Please call to confirm the final price before visiting.",
  saveLabel: "Save {amount}",
  wholesaleTitle: "Wholesale Tier Benefits",
  wholesaleDesc: "Buy more, pay less. Wholesale rates apply as your order grows.",
  tier1Range: "1 – 14 kg",
  tier1Title: "Retail Rate",
  tier1Desc: "Walk into the shop and pick up fresh cuts at the retail rate.",
  tier2Range: "15 – 49 kg",
  tier2Title: "Wholesale + Doorstep Cutting",
  tier2Desc: "Wholesale rate plus our doorstep live cutting service at your venue.",
  tier3Range: "50 kg+",
  tier3Title: "Bulk & Hotel Deals",
  tier3Desc: "Best negotiated rate for hotels, caterers and large functions. Call to fix your price.",
  ratesCallCta: "Call to confirm today's rate",

  // Services page
  servicesTitle: "Doorstep Live Cutting — 15kg+ Function Orders",
  servicesSubtitle:
    "Weddings, engagements, aqiqah, Bakrid and family functions — our master butchers come to you.",
  howTitle: "How It Works",
  step1Title: "Book Your Date",
  step1Desc: "Fill the form or call us with your date, location and estimated kg (minimum 15kg).",
  step2Title: "We Confirm & Plan",
  step2Desc: "We confirm the rate, timing and number of animals needed for your guest count.",
  step3Title: "Master Butchers Arrive",
  step3Desc:
    "Our team reaches your house or venue with live animals, tools and clean cutting gear.",
  step4Title: "Live Halal Cutting",
  step4Desc:
    "Halal slaughter and fresh cutting on the spot — curry cut, biryani cut or boti, weighed in front of you.",
  toolsTitle: "Tools & Setup We Bring",
  tool1: "Razor-sharp stainless steel knives",
  tool2: "Heavy chopping block and cleavers",
  tool3: "Digital weighing scale",
  tool4: "Clean sheets, gloves and aprons",
  tool5: "Food-grade containers and bags",
  hygieneTitle: "Hygiene Standards",
  hyg1: "Clean sheet laid before cutting begins",
  hyg2: "Gloves and aprons worn by every butcher",
  hyg3: "Tools sanitised and washed before and after",
  hyg4: "Waste cleared and the area left tidy",
  occasionsTitle: "Perfect For",
  occ1: "Weddings & engagements",
  occ2: "Aqiqah & naming ceremonies",
  occ3: "Bakrid & festival feasts",
  occ4: "Family functions & bulk buyers",
  formTitle: "Book Doorstep Live Cutting",
  formSubtitle: "Minimum 15kg. We'll confirm on WhatsApp or by call.",
  fName: "Full Name",
  fPhone: "Phone Number",
  fDate: "Event Date",
  fLocation: "Village / Location",
  fLocationPlaceholder: "Village, street, landmark",
  fKg: "Estimated Weight (kg)",
  fKgHint: "Minimum 15 kg. For less than 15kg please visit the shop.",
  fSubmit: "Submit & Open WhatsApp",
  fSubmitting: "Submitting…",
  fSuccess: "Booking #{id} received! WhatsApp is opening so you can confirm with us.",
  fError: "Something went wrong. Please try again or call us directly.",
  fOpenWhatsApp: "Open WhatsApp",
  errName: "Please enter your name.",
  errPhone: "Enter a valid 10-digit mobile number.",
  errDate: "Choose today's date or a future date.",
  errLocation: "Please enter the village / location.",
  errKg: "Minimum 15 kg is required for doorstep live cutting.",
  waBookingMsg:
    "Assalamu Alaikum! 🐐 *Doorstep Live Cutting Booking* (#{id})\n\nName: {name}\nPhone: {phone}\nEvent Date: {date}\nLocation: {location}\nEstimated Weight: {kg} kg\n\nPlease confirm availability and rate. Thank you.",

  // Contact page
  contactTitle: "Visit Our Shop",
  contactSubtitle: "Come see the freshest halal mutton in Narmetta — or call and we'll come to you.",
  addressTitle: "Shop Address",
  addressValue:
    "Madina Mutton Shop, Narmetta (Village), Beside Bank of Baroda, Vellanda Road, Telangana.",
  callTitle: "Call Us",
  callSub: "Tap a number to call directly",
  proprietors: "Tahir Pasha & Ishaan",
  hoursTitle: "Shop Timings",
  hoursValue: "Every day: {open} – {close}",
  hoursNote: "Fresh stock is best early in the morning. Please book doorstep cutting a day ahead.",
  directionsTitle: "Directions",
  directionsDesc:
    "Find us in Narmetta village, right beside the Bank of Baroda on Vellanda Road.",
  getDirections: "Open in Google Maps",

  // Footer & floating
  footerAbout:
    "Premium halal mutton, live Mandya rams and doorstep live cutting for functions — serving Narmetta and nearby villages.",
  footerLinks: "Quick Links",
  footerContact: "Contact",
  footerRights: "© {year} Madina Mutton Shop. All rights reserved.",
  footerHalalNote: "Halal certified • Hygienic slaughter",
  shopAdmin: "Shop admin",
  floatCall: "Call the shop",
  floatWhatsApp: "Chat on WhatsApp",
  floatMsg: "Assalamu Alaikum! I would like to know today's mutton rate.",
};

type Dict = Record<keyof typeof en, string>;

const te: Dict = {
  brandName: "మదీనా మటన్ షాపు",
  brandAlt: "Madina Mutton Shop",
  navHome: "హోమ్",
  navProducts: "ఉత్పత్తులు",
  navRates: "నేటి ధరలు",
  navServices: "ఇంటి వద్ద కటింగ్",
  navContact: "సంప్రదించండి",
  language: "భాష",
  callNow: "ఇప్పుడే కాల్ చేయండి",
  whatsappUs: "వాట్సాప్ చేయండి",
  bookNow: "బుక్ చేయండి",
  menu: "మెనూ",
  shopOpen: "లైవ్ — షాపు ఇప్పుడు తెరిచి ఉంది",
  shopClosed: "షాపు మూసి ఉంది — {time}కు తెరుస్తాం",

  halal: "హలాల్",
  halalFull: "100% హలాల్ సర్టిఫైడ్",
  doorstepBadge: "ఇంటి వద్ద కటింగ్ 15కిలోలు+",

  heroBadge: "100% హలాల్ • పరిశుభ్రత • ప్రీమియం",
  heroTitleA: "తాజా మటన్,",
  heroTitleB: "మీ ఇంటి వద్దే కటింగ్",
  heroSubtitle:
    "నర్మెట్టలోని అత్యంత నమ్మకమైన హలాల్ మటన్ షాపు — తాజా మేక, గొర్రె మాంసం, కూభీక్ / మండ్య జాతి గొర్రె పోతులు మరియు సజీవ జీవాలు. ఫంక్షన్‌కు 15 కిలోలు+ కావాలా? మా మాస్టర్ కసాయిలు మీ వేదికకే వచ్చి అక్కడికక్కడే లైవ్ కటింగ్ చేస్తారు.",
  heroCtaRates: "నేటి ధరలు చూడండి",
  heroCtaBook: "ఇంటి వద్ద కటింగ్ బుక్ చేయండి",
  heroStat1Value: "786",
  heroStat1Label: "హలాల్ సర్టిఫైడ్",
  heroStat2Value: "15కిలోలు+",
  heroStat2Label: "ఇంటి వద్ద లైవ్ కటింగ్",
  heroStat3Value: "రోజూ",
  heroStat3Label: "తాజా మార్కెట్ ధరలు",
  ramCaption: "కూభీక్ / మండ్య జాతి గొర్రె పోతు",

  tickerTitle: "నేటి లైవ్ ధరలు",
  retail: "రిటైల్",
  wholesale: "హోల్‌సేల్",
  updatedOn: "నవీకరణ {time}",
  viewAllRates: "అన్ని ధరలు చూడండి →",
  soldOut: "అయిపోయింది",
  inStock: "అందుబాటులో ఉంది",
  ratesEmpty: "ధరలు త్వరలో అప్‌డేట్ అవుతాయి. నేటి ధర కోసం దయచేసి కాల్ చేయండి.",
  unitPerKg: "కిలోకు",
  unitPerPiece: "ఒక్కొక్కటి",
  unitPerSet: "సెట్‌కు",

  offerTitle: "మా వద్ద లభించేవి",
  offerSubtitle: "తాజా మటన్, సజీవ జీవాలు & ప్రత్యేక కట్స్",
  offer1Title: "తాజా మేక మరియు గొర్రె మాంసం",
  offer1Desc: "ప్రతి ఉదయం తాజాగా కోస్తాం — ఫ్రీజ్ చేసినది కాదు.",
  offer2Title: "కూభీక్ / మండ్య జాతి గొర్రె పోతులు",
  offer2Desc: "బక్రీద్, ఫంక్షన్లు, పెంపకం కోసం బలమైన, ఆరోగ్యవంతమైన పోతులు.",
  offer3Title: "సజీవ మేకలు & గొర్రెలు",
  offer3Desc: "మీ జీవాన్ని మీరే ఎంచుకోండి — సరసమైన ధరకు సజీవంగా అమ్ముతాం.",
  offer4Title: "ప్రత్యేక కట్స్",
  offer4Desc: "పాయా, లివర్, బోటీ, బ్రెయిన్, తల మాంసం మరియు బోన్‌లెస్.",
  exploreProducts: "అన్ని ఉత్పత్తులు చూడండి →",

  vipBadge: "VIP సేవ • 15కిలోలు+",
  vipTitle: "15 కిలోలు+ ఆర్డర్లకు ఇంటి వద్దే లైవ్ కటింగ్",
  vipSubtitle: "ఫంక్షన్లు • పెళ్లిళ్లు • అఖీకా • బల్క్ కొనుగోలుదారులు",
  vipDesc:
    "మేము సాధారణ పార్శిల్ డెలివరీ చేయం. బదులుగా 15 కిలోలు లేదా అంతకంటే ఎక్కువ ఆర్డర్లకు మా మాస్టర్ కసాయిలు మీ ఇంటికి లేదా వేదికకే వచ్చి, మీ కళ్లముందే తాజాగా లైవ్ కటింగ్ చేస్తారు. మీరే చూస్తారు, మీరే నమ్ముతారు.",
  vipPoint1: "అక్కడికక్కడే తాజా లైవ్ కటింగ్",
  vipPoint2: "బిస్మిల్లాతో హలాల్ జబీహా",
  vipPoint3: "సొంత పరికరాలు, శుభ్రమైన ఏర్పాట్లు",
  vipPoint4: "మీకు నచ్చినట్టు కటింగ్ — కర్రీ, బిర్యానీ లేదా బోటీ",

  waTitle: "క్విక్ వాట్సాప్ ఆర్డర్",
  waDesc: "ఐటమ్, పరిమాణం ఎంచుకోండి — మీ సందేశం వెంటనే సిద్ధమవుతుంది.",
  waName: "మీ పేరు",
  waNamePlaceholder: "మీ పేరు రాయండి",
  waItem: "ఐటమ్",
  waQty: "పరిమాణం",
  waPurpose: "ఉపయోగం",
  waPurposeHome: "ఇంటి అవసరం",
  waPurposeFunction: "ఫంక్షన్ / పెళ్లి",
  waPurposeShop: "హోటల్ / హోల్‌సేల్",
  waPreview: "సందేశం ప్రివ్యూ",
  waSend: "వాట్సాప్‌లో పంపండి",
  waDoorstepHint: "15 కిలోలు+ అయితే మీ వేదికకే వచ్చి లైవ్ కటింగ్ చేస్తాం!",
  waMsg:
    "అస్సలాము అలైకుం! నేను {name}. నాకు {item} {qty} కావాలి ({purpose}). లభ్యత మరియు నేటి ధర దయచేసి తెలియజేయండి. ధన్యవాదాలు.",
  waCustomer: "ఒక కస్టమర్",

  foundersTitle: "మా యజమానులను కలవండి",
  foundersDesc:
    "మదీనా మటన్ షాపును తాహిర్ పాషా మరియు ఇషాన్ నడుపుతున్నారు — ప్రతి కిలో వెనుక తమ పేరును నిలబెట్టే ఇద్దరు భాగస్వాములు.",
  founderRole: "వ్యవస్థాపకుడు & యజమాని",
  founderName1: "తాహిర్ పాషా",
  founderName2: "ఇషాన్",
  trust1Title: "100% హలాల్",
  trust1Desc: "ప్రతి జీవాన్ని ఇస్లామిక్ హలాల్ నియమాల ప్రకారమే కోస్తాం.",
  trust2Title: "పరిశుభ్రమైన కటింగ్",
  trust2Desc: "శుభ్రమైన పరికరాలు, శుభ్రమైన ప్రదేశం, శుభ్రమైన చేతులు — ఎల్లప్పుడూ.",
  trust3Title: "ప్రీమియం నాణ్యత",
  trust3Desc: "ఆరోగ్యవంతమైన, ఎంపిక చేసిన జీవాలు — మెత్తని, రుచికరమైన మాంసం.",
  trust4Title: "నిజాయితీ తూకం",
  trust4Desc: "డిజిటల్ కాంటా, సరసమైన ధరలు, దాచిన ఛార్జీలు లేవు.",

  productsTitle: "మాంసం రకాలు & సజీవ జీవాలు",
  productsSubtitle:
    "తాజా కట్స్, సజీవ జీవాలు, ప్రత్యేక అవయవ మాంసం — అన్నీ హలాల్, అన్నీ ఎంపిక చేసినవి.",
  catAll: "అన్నీ",
  catFresh: "తాజా కట్స్",
  catLive: "సజీవ జీవాలు",
  catOffal: "అవయవాలు & ప్రత్యేక కట్స్",
  inquire: "వాట్సాప్‌లో విచారించండి",
  todaysRate: "నేటి ధర",
  callForPrice: "ధర కోసం కాల్ చేయండి",
  productInquiryMsg:
    "అస్సలాము అలైకుం! నాకు {item} గురించి తెలుసుకోవాలి. నేటి ధర మరియు లభ్యత దయచేసి తెలియజేయండి.",

  ratesTitle: "రోజువారీ లైవ్ & హోల్‌సేల్ ధరలు",
  ratesSubtitle:
    "పశువుల మార్కెట్ సరఫరాను బట్టి ధరలు ప్రతిరోజూ మారుతుంటాయి. ఇక్కడ కనిపించేది షాపు నుంచి నేరుగా వచ్చిన నేటి ధర.",
  colItem: "ఐటమ్",
  colRetail: "రిటైల్ ధర",
  colWholesale: "హోల్‌సేల్ ధర",
  colUnit: "యూనిట్",
  colStatus: "స్థితి",
  lastUpdated: "చివరిగా నవీకరించినది: {time}",
  ratesNote: "ధరలు రోజూ మారుతాయి. రావడానికి ముందు తుది ధరను కాల్ చేసి నిర్ధారించుకోండి.",
  saveLabel: "{amount} ఆదా",
  wholesaleTitle: "హోల్‌సేల్ టైర్ ప్రయోజనాలు",
  wholesaleDesc: "ఎక్కువ కొంటే తక్కువ ధర. ఆర్డర్ పెరిగే కొద్దీ హోల్‌సేల్ ధరలు వర్తిస్తాయి.",
  tier1Range: "1 – 14 కిలోలు",
  tier1Title: "రిటైల్ ధర",
  tier1Desc: "షాపుకు వచ్చి రిటైల్ ధరకు తాజా కట్స్ తీసుకెళ్లండి.",
  tier2Range: "15 – 49 కిలోలు",
  tier2Title: "హోల్‌సేల్ + ఇంటి వద్ద కటింగ్",
  tier2Desc: "హోల్‌సేల్ ధరతో పాటు మీ వేదిక వద్దే మా లైవ్ కటింగ్ సేవ.",
  tier3Range: "50 కిలోలు+",
  tier3Title: "బల్క్ & హోటల్ డీల్స్",
  tier3Desc:
    "హోటళ్లు, క్యాటరర్లు, పెద్ద ఫంక్షన్లకు అత్యుత్తమ చర్చల ధర. ధర ఖరారు చేయడానికి కాల్ చేయండి.",
  ratesCallCta: "నేటి ధర నిర్ధారించడానికి కాల్ చేయండి",

  servicesTitle: "ఇంటి వద్ద లైవ్ కటింగ్ — 15 కిలోలు+ ఫంక్షన్ ఆర్డర్లు",
  servicesSubtitle:
    "పెళ్లిళ్లు, నిశ్చితార్థాలు, అఖీకా, బక్రీద్, కుటుంబ ఫంక్షన్లు — మా మాస్టర్ కసాయిలు మీ దగ్గరకే వస్తారు.",
  howTitle: "ఇది ఎలా పనిచేస్తుంది",
  step1Title: "మీ తేదీని బుక్ చేయండి",
  step1Desc:
    "ఫారం నింపండి లేదా మీ తేదీ, ప్రదేశం, అంచనా కిలోలతో (కనీసం 15 కిలోలు) మాకు కాల్ చేయండి.",
  step2Title: "మేము నిర్ధారించి ప్లాన్ చేస్తాం",
  step2Desc: "ధర, సమయం మరియు మీ అతిథులకు సరిపడా జీవాల సంఖ్యను నిర్ధారిస్తాం.",
  step3Title: "మాస్టర్ కసాయిలు చేరుకుంటారు",
  step3Desc:
    "మా బృందం సజీవ జీవాలు, పరికరాలు, శుభ్రమైన కటింగ్ సామగ్రితో మీ ఇంటికి లేదా వేదికకు చేరుతుంది.",
  step4Title: "లైవ్ హలాల్ కటింగ్",
  step4Desc:
    "అక్కడికక్కడే హలాల్ జబీహా మరియు తాజా కటింగ్ — కర్రీ కట్, బిర్యానీ కట్ లేదా బోటీ, మీ ముందే తూకం.",
  toolsTitle: "మేము తెచ్చే పరికరాలు",
  tool1: "పదునైన స్టెయిన్‌లెస్ స్టీల్ కత్తులు",
  tool2: "బరువైన చాపింగ్ బ్లాక్ మరియు చాపర్లు",
  tool3: "డిజిటల్ తూకం కాంటా",
  tool4: "శుభ్రమైన షీట్లు, గ్లోవ్స్, ఆప్రాన్లు",
  tool5: "ఫుడ్-గ్రేడ్ డబ్బాలు మరియు సంచులు",
  hygieneTitle: "పరిశుభ్రత ప్రమాణాలు",
  hyg1: "కటింగ్ మొదలుపెట్టే ముందు శుభ్రమైన షీట్ పరుస్తాం",
  hyg2: "ప్రతి కసాయి గ్లోవ్స్, ఆప్రాన్ ధరిస్తారు",
  hyg3: "పరికరాలను ముందు, తరువాత శుభ్రం చేసి శానిటైజ్ చేస్తాం",
  hyg4: "వ్యర్థాలను తొలగించి ప్రదేశాన్ని శుభ్రంగా ఉంచుతాం",
  occasionsTitle: "వీటికి సరైనది",
  occ1: "పెళ్లిళ్లు & నిశ్చితార్థాలు",
  occ2: "అఖీకా & నామకరణ వేడుకలు",
  occ3: "బక్రీద్ & పండుగ విందులు",
  occ4: "కుటుంబ ఫంక్షన్లు & బల్క్ కొనుగోలుదారులు",
  formTitle: "ఇంటి వద్ద లైవ్ కటింగ్ బుక్ చేయండి",
  formSubtitle: "కనీసం 15 కిలోలు. వాట్సాప్ లేదా కాల్ ద్వారా నిర్ధారిస్తాం.",
  fName: "పూర్తి పేరు",
  fPhone: "ఫోన్ నంబర్",
  fDate: "ఫంక్షన్ తేదీ",
  fLocation: "గ్రామం / ప్రదేశం",
  fLocationPlaceholder: "గ్రామం, వీధి, ల్యాండ్‌మార్క్",
  fKg: "అంచనా బరువు (కిలోలు)",
  fKgHint: "కనీసం 15 కిలోలు. 15 కిలోల కంటే తక్కువకు దయచేసి షాపుకు రండి.",
  fSubmit: "సబ్మిట్ చేసి వాట్సాప్ తెరవండి",
  fSubmitting: "పంపుతున్నాం…",
  fSuccess: "బుకింగ్ #{id} అందింది! నిర్ధారణ కోసం వాట్సాప్ తెరుచుకుంటోంది.",
  fError: "ఏదో తప్పు జరిగింది. దయచేసి మళ్లీ ప్రయత్నించండి లేదా నేరుగా కాల్ చేయండి.",
  fOpenWhatsApp: "వాట్సాప్ తెరవండి",
  errName: "దయచేసి మీ పేరు రాయండి.",
  errPhone: "సరైన 10 అంకెల మొబైల్ నంబర్ ఇవ్వండి.",
  errDate: "ఈ రోజు లేదా భవిష్యత్తు తేదీని ఎంచుకోండి.",
  errLocation: "దయచేసి గ్రామం / ప్రదేశం రాయండి.",
  errKg: "ఇంటి వద్ద లైవ్ కటింగ్‌కు కనీసం 15 కిలోలు అవసరం.",
  waBookingMsg:
    "అస్సలాము అలైకుం! 🐐 *ఇంటి వద్ద లైవ్ కటింగ్ బుకింగ్* (#{id})\n\nపేరు: {name}\nఫోన్: {phone}\nతేదీ: {date}\nప్రదేశం: {location}\nఅంచనా బరువు: {kg} కిలోలు\n\nలభ్యత మరియు ధర దయచేసి నిర్ధారించండి. ధన్యవాదాలు.",

  contactTitle: "మా షాపును సందర్శించండి",
  contactSubtitle:
    "నర్మెట్టలోని తాజా హలాల్ మటన్‌ను స్వయంగా చూడండి — లేదా కాల్ చేయండి, మేమే మీ దగ్గరకు వస్తాం.",
  addressTitle: "షాపు చిరునామా",
  addressValue:
    "మదీనా మటన్ షాపు, నర్మెట్ట (గ్రామం), బ్యాంక్ ఆఫ్ బరోడా పక్కన, వెల్లంద రోడ్, తెలంగాణ.",
  callTitle: "మాకు కాల్ చేయండి",
  callSub: "నేరుగా కాల్ చేయడానికి నంబర్‌ను నొక్కండి",
  proprietors: "తాహిర్ పాషా & ఇషాన్",
  hoursTitle: "షాపు సమయాలు",
  hoursValue: "ప్రతిరోజూ: {open} – {close}",
  hoursNote:
    "తాజా స్టాక్ ఉదయాన్నే బాగుంటుంది. ఇంటి వద్ద కటింగ్‌ను ఒక రోజు ముందే బుక్ చేయండి.",
  directionsTitle: "దారి వివరాలు",
  directionsDesc:
    "నర్మెట్ట గ్రామంలో, వెల్లంద రోడ్డులో బ్యాంక్ ఆఫ్ బరోడా పక్కనే మా షాపు ఉంది.",
  getDirections: "గూగుల్ మ్యాప్స్‌లో తెరవండి",

  footerAbout:
    "ప్రీమియం హలాల్ మటన్, లైవ్ మండ్య గొర్రె పోతులు, ఫంక్షన్లకు ఇంటి వద్ద లైవ్ కటింగ్ — నర్మెట్ట మరియు చుట్టుపక్కల గ్రామాలకు సేవ.",
  footerLinks: "త్వరిత లింకులు",
  footerContact: "సంప్రదింపు",
  footerRights: "© {year} మదీనా మటన్ షాపు. అన్ని హక్కులూ రక్షితం.",
  footerHalalNote: "హలాల్ సర్టిఫైడ్ • పరిశుభ్రమైన కటింగ్",
  shopAdmin: "షాపు అడ్మిన్",
  floatCall: "షాపుకు కాల్ చేయండి",
  floatWhatsApp: "వాట్సాప్‌లో చాట్ చేయండి",
  floatMsg: "అస్సలాము అలైకుం! నేటి మటన్ ధర తెలుసుకోవాలి.",
};

const tenglish: Dict = {
  brandName: "Madina Mutton Shop",
  brandAlt: "మదీనా మటన్ షాపు",
  navHome: "Home",
  navProducts: "Products",
  navRates: "Ivaalti Rates",
  navServices: "Intiki Cutting",
  navContact: "Contact",
  language: "Bhasha",
  callNow: "Ippude Call Cheyyandi",
  whatsappUs: "WhatsApp Cheyyandi",
  bookNow: "Book Cheyyandi",
  menu: "Menu",
  shopOpen: "Live — Shop ippudu Open undi",
  shopClosed: "Shop Closed — {time} ki open chestham",

  halal: "Halal",
  halalFull: "100% Halal Certified",
  doorstepBadge: "Intiki Cutting 15kg+",

  heroBadge: "100% Halal • Hygiene • Premium",
  heroTitleA: "Fresh Mamsam,",
  heroTitleB: "Mee Intike Vachi Cutting",
  heroSubtitle:
    "Narmetta lo most trusted halal mutton shop — fresh meka, gorre mamsam, Mandya / Kubeek rams mariyu live jeevalu. Function ki 15kg+ kavala? Mee intike vachi 15kg+ cutting chestham — akkadikkade live ga.",
  heroCtaRates: "Ivaalti Rates Chudandi",
  heroCtaBook: "Intiki Cutting Book Cheyyandi",
  heroStat1Value: "786",
  heroStat1Label: "Halal Certified",
  heroStat2Value: "15kg+",
  heroStat2Label: "Intiki Live Cutting",
  heroStat3Value: "Roju",
  heroStat3Label: "Fresh Market Rates",
  ramCaption: "Mandya / Kubeek Gorre Pothu",

  tickerTitle: "Ivaalti Live Rates",
  retail: "Retail",
  wholesale: "Wholesale",
  updatedOn: "Update chesindi {time}",
  viewAllRates: "Anni Rates Chudandi →",
  soldOut: "Ayipoyindi",
  inStock: "Available",
  ratesEmpty: "Rates tvaralo update avthayi. Ivaalti price kosam call cheyyandi.",
  unitPerKg: "kg ki",
  unitPerPiece: "okkokkati",
  unitPerSet: "set ki",

  offerTitle: "Maa Daggara Emi Dorukuthayi",
  offerSubtitle: "Fresh Mamsam, Live Stock & Special Cuts",
  offer1Title: "Fresh Meka & Gorre Mamsam",
  offer1Desc: "Prathi udayam fresh ga kostham — frozen kaadu.",
  offer2Title: "Mandya / Kubeek Gorre Pothulu",
  offer2Desc: "Bakrid, functions, pempakam kosam balamaina, healthy pothulu.",
  offer3Title: "Live Mekalu & Gorrelu",
  offer3Desc: "Mee jeevanni meere select cheskondi — fair price ki live ga ammutham.",
  offer4Title: "Special Cuts",
  offer4Desc: "Paya, liver, boti, brain, thala mamsam mariyu boneless.",
  exploreProducts: "Anni Products Chudandi →",

  vipBadge: "VIP Service • 15kg+",
  vipTitle: "15kg+ Orders ki Intike Live Cutting",
  vipSubtitle: "Functions • Pellillu • Aqiqah • Bulk Buyers",
  vipDesc:
    "Memu normal parcel delivery cheyyam. Kani 15kg leda antha kante ekkuva order ki, maa master butchers mee intike leda function venue ke vachi, mee mundhe fresh ga live cutting chestharu. Meere chudandi, meere nammandi.",
  vipPoint1: "Akkadikkade fresh live cutting",
  vipPoint2: "Bismillah tho halal zabiha",
  vipPoint3: "Own tools, clean & hygienic setup",
  vipPoint4: "Mee style ki cutting — curry, biryani leda boti",

  waTitle: "Quick WhatsApp Order",
  waDesc: "Item, quantity select cheyyandi — message ventane ready avthundi.",
  waName: "Mee Peru",
  waNamePlaceholder: "Mee peru rayandi",
  waItem: "Item",
  waQty: "Quantity",
  waPurpose: "Purpose",
  waPurposeHome: "Intiki",
  waPurposeFunction: "Function / Pelli",
  waPurposeShop: "Hotel / Wholesale",
  waPreview: "Message preview",
  waSend: "WhatsApp lo Pampandi",
  waDoorstepHint: "15kg+ aithe mee venue ke vachi Live Cutting chestham!",
  waMsg:
    "Assalamu Alaikum! Nenu {name}. Naku {item} {qty} kavali ({purpose}). Availability mariyu ivaalti rate cheppandi please. Dhanyavadalu.",
  waCustomer: "oka customer",

  foundersTitle: "Maa Owners ni Kalavandi",
  foundersDesc:
    "Madina Mutton Shop ni Tahir Pasha mariyu Ishaan naduputhunnaru — prathi kilo venaka vaari peru untundi.",
  founderRole: "Founder & Owner",
  founderName1: "Tahir Pasha",
  founderName2: "Ishaan",
  trust1Title: "100% Halal",
  trust1Desc: "Prathi jeevanni Islamic halal rules prakaram mathrame kostham.",
  trust2Title: "Hygienic Slaughter",
  trust2Desc: "Clean tools, clean place, clean hands — yellappudu.",
  trust3Title: "Premium Quality",
  trust3Desc: "Healthy, hand-picked jeevalu — soft, tasty mamsam.",
  trust4Title: "Honest Tookam",
  trust4Desc: "Digital kanta, fair rates, hidden charges levu.",

  productsTitle: "Mamsam Rakalu & Live Stock",
  productsSubtitle:
    "Fresh cuts, live jeevalu, special offal — anni halal, anni hand-picked.",
  catAll: "Anni",
  catFresh: "Fresh Cuts",
  catLive: "Live Animals",
  catOffal: "Offal & Special Cuts",
  inquire: "WhatsApp lo Adagandi",
  todaysRate: "Ivaalti rate",
  callForPrice: "Price kosam call cheyyandi",
  productInquiryMsg:
    "Assalamu Alaikum! Naku {item} gurinchi telusukovali. Ivaalti rate mariyu availability cheppandi please.",

  ratesTitle: "Roju Live & Wholesale Rates",
  ratesSubtitle:
    "Livestock market supply ni batti rates prathi roju maruthayi. Ikkada kanipinchedi shop nunchi neraga vachina ivaalti rate.",
  colItem: "Item",
  colRetail: "Retail Price",
  colWholesale: "Wholesale Price",
  colUnit: "Unit",
  colStatus: "Status",
  lastUpdated: "Last update: {time}",
  ratesNote: "Rates roju maruthayi. Randi mundu final price call chesi confirm cheskondi.",
  saveLabel: "{amount} save",
  wholesaleTitle: "Wholesale Tier Benefits",
  wholesaleDesc: "Ekkuva konte takkuva price. Order perige kotthi wholesale rates apply avthayi.",
  tier1Range: "1 – 14 kg",
  tier1Title: "Retail Rate",
  tier1Desc: "Shop ki vachi retail rate ki fresh cuts teesukellandi.",
  tier2Range: "15 – 49 kg",
  tier2Title: "Wholesale + Intiki Cutting",
  tier2Desc: "Wholesale rate tho patu mee venue daggare maa live cutting service.",
  tier3Range: "50 kg+",
  tier3Title: "Bulk & Hotel Deals",
  tier3Desc:
    "Hotels, caterers, pedda functions ki best negotiated rate. Price fix cheyadaniki call cheyyandi.",
  ratesCallCta: "Ivaalti rate confirm cheyadaniki call cheyyandi",

  servicesTitle: "Intiki Live Cutting — 15kg+ Function Orders",
  servicesSubtitle:
    "Pellillu, engagement, aqiqah, Bakrid, family functions — maa master butchers mee daggaraku vastharu.",
  howTitle: "Idi Ela Panichestundi",
  step1Title: "Mee Date Book Cheyyandi",
  step1Desc:
    "Form fill cheyyandi leda mee date, location, estimated kg (minimum 15kg) tho call cheyyandi.",
  step2Title: "Memu Confirm chesi Plan chestham",
  step2Desc: "Rate, timing mariyu mee guests ki saripada jeevala sankhya confirm chestham.",
  step3Title: "Master Butchers Vastharu",
  step3Desc:
    "Maa team live jeevalu, tools, clean cutting gear tho mee intiki leda venue ki chereputhundi.",
  step4Title: "Live Halal Cutting",
  step4Desc:
    "Akkadikkade halal zabiha mariyu fresh cutting — curry cut, biryani cut leda boti, mee mundhe tookam.",
  toolsTitle: "Memu Techche Tools & Setup",
  tool1: "Paina sharp stainless steel kathulu",
  tool2: "Heavy chopping block mariyu choppers",
  tool3: "Digital tookam kanta",
  tool4: "Clean sheets, gloves, aprons",
  tool5: "Food-grade dabbalu mariyu sanchulu",
  hygieneTitle: "Hygiene Standards",
  hyg1: "Cutting modalupettey mundu clean sheet parustham",
  hyg2: "Prathi butcher gloves, apron vestharu",
  hyg3: "Tools ni mundu, tarvata clean chesi sanitise chestham",
  hyg4: "Waste teesesi place ni clean ga unchutham",
  occasionsTitle: "Veetiki Perfect",
  occ1: "Pellillu & engagements",
  occ2: "Aqiqah & namakarana veduka",
  occ3: "Bakrid & festival virundhulu",
  occ4: "Family functions & bulk buyers",
  formTitle: "Intiki Live Cutting Book Cheyyandi",
  formSubtitle: "Minimum 15kg. WhatsApp leda call lo confirm chestham.",
  fName: "Full Peru",
  fPhone: "Phone Number",
  fDate: "Function Date",
  fLocation: "Village / Location",
  fLocationPlaceholder: "Village, street, landmark",
  fKg: "Estimated Weight (kg)",
  fKgHint: "Minimum 15 kg. 15kg kante takkuva ayithe shop ki randi.",
  fSubmit: "Submit chesi WhatsApp Open Cheyyandi",
  fSubmitting: "Pamputhunnam…",
  fSuccess: "Booking #{id} andindi! Confirm cheyadaniki WhatsApp open avthundi.",
  fError: "Emo tappu jarigindi. Malli try cheyyandi leda neraga call cheyyandi.",
  fOpenWhatsApp: "WhatsApp Open Cheyyandi",
  errName: "Dayachesi mee peru rayandi.",
  errPhone: "Sarina 10 digit mobile number ivvandi.",
  errDate: "Ee roju leda future date select cheyyandi.",
  errLocation: "Dayachesi village / location rayandi.",
  errKg: "Intiki live cutting ki minimum 15 kg avasaram.",
  waBookingMsg:
    "Assalamu Alaikum! 🐐 *Intiki Live Cutting Booking* (#{id})\n\nPeru: {name}\nPhone: {phone}\nDate: {date}\nLocation: {location}\nEstimated Weight: {kg} kg\n\nAvailability mariyu rate confirm cheyyandi please. Dhanyavadalu.",

  contactTitle: "Maa Shop ki Randi",
  contactSubtitle:
    "Narmetta lo freshest halal mamsam neraga chudandi — leda call cheyyandi, memu mee daggaraku vastham.",
  addressTitle: "Shop Address",
  addressValue:
    "Madina Mutton Shop, Narmetta (Village), Bank of Baroda pakkana, Vellanda Road, Telangana.",
  callTitle: "Maaku Call Cheyyandi",
  callSub: "Neraga call cheyadaniki number meeda tap cheyyandi",
  proprietors: "Tahir Pasha & Ishaan",
  hoursTitle: "Shop Timings",
  hoursValue: "Prathi roju: {open} – {close}",
  hoursNote:
    "Fresh stock udayame best. Intiki cutting ni oka roju mundhe book cheyyandi.",
  directionsTitle: "Directions",
  directionsDesc:
    "Narmetta village lo, Vellanda Road meeda Bank of Baroda pakkane maa shop undi.",
  getDirections: "Google Maps lo Open Cheyyandi",

  footerAbout:
    "Premium halal mamsam, live Mandya pothulu, functions ki intiki live cutting — Narmetta mariyu chuttu pakkala villages ki seva.",
  footerLinks: "Quick Links",
  footerContact: "Contact",
  footerRights: "© {year} Madina Mutton Shop. Anni hakkulu rakshitham.",
  footerHalalNote: "Halal certified • Hygienic slaughter",
  shopAdmin: "Shop admin",
  floatCall: "Shop ki call cheyyandi",
  floatWhatsApp: "WhatsApp lo chat cheyyandi",
  floatMsg: "Assalamu Alaikum! Ivaalti mutton rate telusukovali.",
};

export const dictionaries: Record<Lang, Dict> = { en, te, tenglish };

export type TranslationKey = keyof typeof en;

export function translate(
  lang: Lang,
  key: TranslationKey,
  vars?: Record<string, string | number>,
): string {
  let text: string = dictionaries[lang][key] ?? dictionaries.en[key];
  if (vars) {
    for (const [name, value] of Object.entries(vars)) {
      text = text.split(`{${name}}`).join(String(value));
    }
  }
  return text;
}

/* ------------------------------------------------------------------ */
/* Product catalogue copy (names + descriptions in all 3 languages)    */
/* ------------------------------------------------------------------ */

export type ProductId =
  | "goat"
  | "sheep"
  | "boneless"
  | "mandya"
  | "liveGoat"
  | "liveSheep"
  | "paya"
  | "liver"
  | "boti"
  | "brain"
  | "head";

type Copy = { name: string; desc: string };

export const productCopy: Record<ProductId, Record<Lang, Copy>> = {
  goat: {
    en: {
      name: "Goat Mutton",
      desc: "Fresh-cut goat meat with bone — rich, tender and ideal for curry, fry and biryani.",
    },
    te: {
      name: "మేక మాంసం",
      desc: "ఎముకతో తాజాగా కోసిన మేక మాంసం — రుచికరం, మెత్తగా ఉండి కర్రీ, ఫ్రై, బిర్యానీకి సరైనది.",
    },
    tenglish: {
      name: "Meka Mamsam",
      desc: "Bone tho fresh ga kosina meka mamsam — rich, soft, curry, fry, biryani ki perfect.",
    },
  },
  sheep: {
    en: {
      name: "Sheep Mutton",
      desc: "Fresh sheep meat from healthy local rams — soft texture with a deep, authentic flavour.",
    },
    te: {
      name: "గొర్రె మాంసం",
      desc: "ఆరోగ్యవంతమైన స్థానిక గొర్రెల నుంచి తాజా మాంసం — మెత్తని ఆకృతి, అసలైన రుచి.",
    },
    tenglish: {
      name: "Gorre Mamsam",
      desc: "Healthy local gorrela nunchi fresh mamsam — soft texture, asalaina ruchi.",
    },
  },
  boneless: {
    en: {
      name: "Boneless Mutton",
      desc: "Clean, trimmed boneless cuts — perfect for kebabs, keema and quick-cook dishes.",
    },
    te: {
      name: "బోన్‌లెస్ మటన్",
      desc: "శుభ్రంగా ట్రిమ్ చేసిన బోన్‌లెస్ ముక్కలు — కబాబ్, ఖీమా, త్వరగా వండే వంటలకు సరైనవి.",
    },
    tenglish: {
      name: "Boneless Mutton",
      desc: "Clean ga trim chesina boneless ukkalu — kebab, keema, quick-cook dishes ki perfect.",
    },
  },
  mandya: {
    en: {
      name: "Mandya / Kubeek Breed Ram",
      desc: "Heavy-bodied Mandya / Kubeek breed rams — ideal for Bakrid, weddings, functions and breeding.",
    },
    te: {
      name: "కూభీక్ / మండ్య జాతి గొర్రె పోతు",
      desc: "బరువైన కూభీక్ / మండ్య జాతి గొర్రె పోతులు — బక్రీద్, పెళ్లిళ్లు, ఫంక్షన్లు, పెంపకానికి అనువైనవి.",
    },
    tenglish: {
      name: "Kubeek / Mandya Gorre Pothu",
      desc: "Baruvaina Kubeek / Mandya jati gorre pothulu — Bakrid, pellillu, functions, pempakam ki best.",
    },
  },
  liveGoat: {
    en: {
      name: "Live Goat",
      desc: "Healthy live goats, hand-picked and sold at fair prices. Choose your own animal.",
    },
    te: {
      name: "సజీవ మేక",
      desc: "ఆరోగ్యవంతమైన సజీవ మేకలు, ఎంపిక చేసి సరసమైన ధరకు అమ్ముతాం. మీ జీవాన్ని మీరే ఎంచుకోండి.",
    },
    tenglish: {
      name: "Live Meka",
      desc: "Healthy live mekalu, hand-pick chesi fair price ki ammutham. Mee jeevanni meere select cheskondi.",
    },
  },
  liveSheep: {
    en: {
      name: "Live Sheep",
      desc: "Strong, well-fed live sheep for home slaughter, functions and farming.",
    },
    te: {
      name: "సజీవ గొర్రె",
      desc: "ఇంటి అవసరాలు, ఫంక్షన్లు, పెంపకం కోసం బలమైన, బాగా మేపిన సజీవ గొర్రెలు.",
    },
    tenglish: {
      name: "Live Gorre",
      desc: "Intiki, functions, pempakam kosam balamaina, baaga mepina live gorrelu.",
    },
  },
  paya: {
    en: {
      name: "Paya (Trotters)",
      desc: "Cleaned and singed goat / sheep trotters — slow-cook for a rich, collagen-packed paya soup.",
    },
    te: {
      name: "పాయా (కాళ్లు)",
      desc: "శుభ్రం చేసి కాల్చిన మేక / గొర్రె కాళ్లు — నెమ్మదిగా ఉడికించి రుచికరమైన పాయా సూప్ చేసుకోండి.",
    },
    tenglish: {
      name: "Paya (Kallu)",
      desc: "Clean chesi kalchina meka / gorre kallu — nemmadiga udikinchi rich paya soup cheskondi.",
    },
  },
  liver: {
    en: {
      name: "Liver (Kaleji)",
      desc: "Fresh, dark-red goat liver — packed with iron, great for fry and masala.",
    },
    te: {
      name: "లివర్ (కలేజీ)",
      desc: "తాజా, ముదురు ఎరుపు రంగు మేక లివర్ — ఐరన్ సమృద్ధి, ఫ్రై మరియు మసాలాకు చాలా బాగుంటుంది.",
    },
    tenglish: {
      name: "Liver (Kaleji)",
      desc: "Fresh, dark-red meka liver — iron ekkuva, fry mariyu masala ki chala bagundi.",
    },
  },
  boti: {
    en: {
      name: "Boti",
      desc: "Freshly cleaned goat boti (intestine) — cleaned carefully and ready to cook.",
    },
    te: {
      name: "బోటీ",
      desc: "తాజాగా శుభ్రం చేసిన మేక బోటీ — జాగ్రత్తగా శుభ్రం చేసి వండడానికి సిద్ధంగా ఉంటుంది.",
    },
    tenglish: {
      name: "Boti",
      desc: "Fresh ga clean chesina meka boti — jaagrathaga clean chesi vandadaniki ready ga untundi.",
    },
  },
  brain: {
    en: {
      name: "Brain (Mogaj)",
      desc: "Soft, fresh goat brain — a delicacy for masala fry and curry.",
    },
    te: {
      name: "బ్రెయిన్ (మెదడు)",
      desc: "మెత్తని, తాజా మేక మెదడు — మసాలా ఫ్రై, కర్రీకి రుచికరమైన వంటకం.",
    },
    tenglish: {
      name: "Brain (Mogaj)",
      desc: "Soft, fresh meka brain — masala fry, curry ki oka delicacy.",
    },
  },
  head: {
    en: {
      name: "Head Meat",
      desc: "Cleaned goat head meat (thala kaya) — traditional favourite for flavourful curry.",
    },
    te: {
      name: "తల మాంసం",
      desc: "శుభ్రం చేసిన మేక తల మాంసం (తలకాయ) — రుచికరమైన కర్రీకి సంప్రదాయ ఇష్టమైనది.",
    },
    tenglish: {
      name: "Thala Mamsam",
      desc: "Clean chesina meka thala mamsam (thalakaya) — ruchikaramaina curry ki traditional favourite.",
    },
  },
};

/** Maps the `daily_rates.item_name` value to a catalogue product. */
export const rateItemToProduct: Record<string, ProductId> = {
  "Goat Mutton": "goat",
  "Sheep Mutton": "sheep",
  "Boneless Mutton": "boneless",
  "Mandya Ram (Kubeek)": "mandya",
  "Live Goat": "liveGoat",
  "Live Sheep": "liveSheep",
  "Paya (Trotters)": "paya",
  Liver: "liver",
  Boti: "boti",
  Brain: "brain",
  "Head Meat": "head",
};

export function productNameForItem(itemName: string, lang: Lang): string {
  const id = rateItemToProduct[itemName];
  return id ? productCopy[id][lang].name : itemName;
}

export function unitLabel(unit: string, lang: Lang): string {
  const normalized = unit.trim().toLowerCase();
  if (normalized === "per kg") return translate(lang, "unitPerKg");
  if (normalized === "per piece") return translate(lang, "unitPerPiece");
  if (normalized === "per set") return translate(lang, "unitPerSet");
  return unit;
}
