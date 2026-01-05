
import { Benefit } from '../types';

export const benefitsCatalog: Benefit[] = [
  {
    id: "benefit_1",
    cardTypes: ["visa_signature", "visa_infinite"],
    category: "travel",
    priority: "high",
    title: {
      en: "Priority Pass Airport Lounge Access",
      ta: "Priority Pass விமான நிலைய லவுஞ்ச் அணுகல்",
      hi: "Priority Pass हवाई अड्डे का लाउंज एक्सेस"
    },
    shortDescription: {
      en: "Free airport lounge access 4 times per year",
      ta: "வருடத்திற்கு 4 முறை இலவச விமான நிலைய லவுஞ்ச் அணுகல்",
      hi: "वर्ष में 4 बार मुफ्त हवाई अड्डे का लाउंज एक्सेस"
    },
    originalTnC: "Cardholder shall be entitled to complimentary access to Priority Pass lounges subject to availability and presentation of valid Priority Pass membership card obtained through the issuing bank's enrollment process. Access is limited to four (4) complimentary visits per calendar year, thereafter a nominal fee of USD 27 or INR 2000 per visit shall be levied...",
    simplifiedExplanation: {
      en: {
        whatYouGet: "Free entry to airport lounges 4 times per year using Priority Pass",
        howToUse: [
          "Sign up for Priority Pass on your bank's website",
          "Receive your Priority Pass card in 7-10 days",
          "Show your card at any participating lounge",
          "Enjoy free food, drinks, and WiFi"
        ],
        limitations: [
          "Only 4 free visits per year (Jan-Dec)",
          "After 4 visits: ₹2,000 per visit",
          "Guests not included (they pay separately)",
          "Subject to lounge availability"
        ],
        proTips: [
          "Download Priority Pass app to find lounges",
          "Arrive 2 hours before flight to ensure entry"
        ]
      },
      ta: {
        whatYouGet: "Priority Pass மூலம் வருடத்திற்கு 4 முறை விமான நிலைய லவுஞ்ச் இலவச நுழைவு",
        howToUse: [
          "உங்கள் வங்கியின் இணையதளத்தில் Priority Pass-க்கு பதிவு செய்யவும்",
          "7-10 நாட்களில் உங்கள் Priority Pass அட்டையைப் பெறவும்",
          "பங்கேற்கும் லவுஞ்சில் உங்கள் அட்டையைக் காட்டவும்",
          "இலவச உணவு, பானங்கள் மற்றும் WiFi அனுபவிக்கவும்"
        ],
        limitations: [
          "வருடத்திற்கு 4 இலவச வருகைகள் மட்டும் (ஜனவரி-டிசம்பர்)",
          "4 வருகைகளுக்குப் பிறகு: ₹2,000 ஒரு வருகைக்கு",
          "விருந்தினர்கள் சேர்க்கப்படவில்லை (அவர்கள் தனியாக செலுத்துகிறார்கள்)",
          "லவுஞ்ச் கிடைக்கும்பட்சத்தில் மட்டும்"
        ],
        proTips: [
          "லவுஞ்ச் கண்டுபிடிக்க Priority Pass செயலியைப் பதிவிறக்கவும்",
          "நுழைவை உறுதிப்படுத்த விமானத்திற்கு 2 மணி நேரத்திற்கு முன் வாருங்கள்"
        ]
      },
      hi: {
        whatYouGet: "Priority Pass के माध्यम से वर्ष में 4 बार हवाई अड्डे के लाउंज में मुफ्त प्रवेश",
        howToUse: [
          "अपने बैंक की वेबसाइट पर Priority Pass के लिए साइन अप करें",
          "7-10 दिनों में अपना Priority Pass कार्ड प्राप्त करें",
          "किसी भी भाग लेने वाले लाउंज में अपना कार्ड दिखाएं",
          "मुफ्त भोजन, पेय और WiFi का आनंद लें"
        ],
        limitations: [
          "प्रति वर्ष केवल 4 मुफ्त विज़िट (जनवरी-दिसंबर)",
          "4 विज़िट के बाद: ₹2,000 प्रति विज़िट",
          "अतिथि शामिल नहीं (वे अलग से भुगतान करते हैं)",
          "लाउंज उपलब्धता के अधीन"
        ],
        proTips: [
          "लाउंज खोजने के लिए Priority Pass ऐप डाउनलोड करें",
          "प्रवेश सुनिश्चित करने के लिए फ्लाइट से 2 घंटे पहले पहुंचें"
        ]
      }
    },
    monetaryValue: 2000,
    usageFrequency: "4 per year",
    activationMethod: "manual_enrollment",
    relevanceTriggers: {
      locations: ["airport"],
      dayOfWeek: "any"
    }
  },
  {
    id: "benefit_2",
    cardTypes: ["visa_signature", "visa_infinite", "visa_classic"],
    category: "dining",
    priority: "medium",
    title: {
      en: "Weekend Dining Rewards (5X Points)",
      ta: "வார இறுதி உணவக வெகுமதிகள் (5X புள்ளிகள்)",
      hi: "सप्ताहांत भोजन पुरस्कार (5X अंक)"
    },
    shortDescription: {
      en: "Earn 5X reward points at restaurants on weekends",
      ta: "வார இறுதிகளில் உணவகங்களில் 5X வெகுமதி புள்ளிகளைப் பெறுங்கள்",
      hi: "सप्ताहांत पर रेस्तरां में 5X रिवॉर्ड पॉइंट अर्जित करें"
    },
    originalTnC: "Cardmembers will accrue 5X Reward Points on eligible dining transactions performed on Saturdays and Sundays. Eligible transactions must be categorized under Merchant Category Code (MCC) 5812 or 5814...",
    simplifiedExplanation: {
      en: {
        whatYouGet: "Earn 5 times the normal reward points when you dine at restaurants on Saturday or Sunday",
        howToUse: [
          "Use your card at any restaurant on Saturday or Sunday",
          "Points are automatically credited within 3 days",
          "No enrollment needed"
        ],
        limitations: [
          "Only on weekends (Saturday-Sunday)",
          "Must be at restaurants (not food delivery)",
          "Minimum spend: ₹500 per transaction"
        ],
        proTips: [
          "Combine with restaurant-specific offers for maximum savings",
          "Check partner restaurant list on bank website"
        ]
      },
      ta: {
        whatYouGet: "சனி அல்லது ஞாயிற்றுக்கிழமை உணவகங்களில் சாப்பிடும்போது சாதாரண வெகுமதி புள்ளிகளை விட 5 மடங்கு பெறுங்கள்",
        howToUse: [
          "சனி அல்லது ஞாயிற்றுக்கிழமை எந்த உணவகத்திலும் உங்கள் கார்டைப் பயன்படுத்தவும்",
          "புள்ளிகள் 3 நாட்களுக்குள் தானாகவே வரவு வைக்கப்படும்",
          "பதிவு தேவையில்லை"
        ],
        limitations: [
          "வார இறுதிகளில் மட்டும் (சனி-ஞாயிறு)",
          "உணவகங்களில் மட்டும் (உணவு விநியோகம் அல்ல)",
          "குறைந்தபட்ச செலவு: ஒரு பரிவர்த்தனைக்கு ₹500"
        ],
        proTips: [
          "அதிகபட்ச சேமிப்புக்காக உணவக-குறிப்பிட்ட சலுகைகளுடன் இணைக்கவும்",
          "வங்கி இணையதளத்தில் கூட்டாளர் உணவக பட்டியலைச் சரிபார்க்கவும்"
        ]
      },
      hi: {
        whatYouGet: "शनिवार या रविवार को रेस्तरां में भोजन करने पर सामान्य रिवॉर्ड पॉइंट से 5 गुना अधिक अर्जित करें",
        howToUse: [
          "शनिवार या रविवार को किसी भी रेस्तरां में अपने कार्ड का उपयोग करें",
          "पॉइंट 3 दिनों के भीतर स्वचालित रूप से जमा हो जाते हैं",
          "नामांकन की आवश्यकता नहीं"
        ],
        limitations: [
          "केवल सप्ताहांत पर (शनिवार-रविवार)",
          "रेस्तरां में होना चाहिए (फूड डिलीवरी नहीं)",
          "न्यूनतम खर्च: ₹500 प्रति लेनदेन"
        ],
        proTips: [
          "अधिकतम बचत के लिए रेस्तरां-विशिष्ट ऑफ़र के साथ संयोजन करें",
          "बैंक वेबसाइट पर पार्टनर रेस्तरां सूची देखें"
        ]
      }
    },
    monetaryValue: 500,
    usageFrequency: "unlimited",
    activationMethod: "automatic",
    relevanceTriggers: {
      locations: ["restaurant", "mall"],
      dayOfWeek: ["saturday", "sunday"]
    }
  },
  {
    id: "benefit_3",
    cardTypes: ["visa_signature", "visa_infinite"],
    category: "shopping",
    priority: "high",
    title: {
      en: "Extended Warranty on Electronics",
      ta: "மின்னணு பொருட்களுக்கான நீட்டிக்கப்பட்ட உத்தரவாதம்",
      hi: "इलेक्ट्रॉनिक्स पर विस्तारित वारंटी"
    },
    shortDescription: {
      en: "Get 1 year extra warranty on electronics automatically",
      ta: "மின்னணு பொருட்களில் தானாகவே 1 வருட கூடுதல் உத்தரவாதம் பெறுங்கள்",
      hi: "इलेक्ट्रॉनिक्स पर स्वचालित रूप से 1 साल की अतिरिक्त वारंटी प्राप्त करें"
    },
    originalTnC: "This coverage doubles the original manufacturer's warranty up to a maximum of one (1) additional year on eligible items with a purchase price exceeding INR 10,000...",
    simplifiedExplanation: {
      en: {
        whatYouGet: "Automatic 1-year warranty extension on electronics purchased with your card (worth ₹3,000-5,000)",
        howToUse: [
          "Buy any electronic item over ₹10,000 with this card",
          "Warranty activates automatically (no registration needed)",
          "If it breaks after manufacturer warranty ends, file a claim",
          "Get repair or replacement up to purchase price"
        ],
        limitations: [
          "Only for items over ₹10,000",
          "Extends manufacturer warranty by 1 year maximum",
          "Doesn't cover intentional damage",
          "Must have original receipt"
        ],
        proTips: [
          "Great for laptops, smartphones, cameras",
          "Keep purchase receipt and warranty card safe",
          "Claim process takes 7-14 days"
        ]
      },
      ta: {
        whatYouGet: "உங்கள் கார்டுடன் வாங்கிய மின்னணு பொருட்களில் தானியங்கி 1 வருட உத்தரவாத நீட்டிப்பு (மதிப்பு ₹3,000-5,000)",
        howToUse: [
          "இந்த கார்டுடன் ₹10,000க்கு மேல் உள்ள எந்த மின்னணு பொருளையும் வாங்கவும்",
          "உத்தரவாதம் தானாகவே செயல்படுத்தப்படும் (பதிவு தேவையில்லை)",
          "உற்பத்தியாளர் உத்தரவாதம் முடிந்த பிறகு அது உடைந்தால், கோரிக்கை தாக்கல் செய்யவும்",
          "வாங்கிய விலை வரை பழுதுபார்ப்பு அல்லது மாற்று பெறவும்"
        ],
        limitations: [
          "₹10,000க்கு மேல் உள்ள பொருட்களுக்கு மட்டும்",
          "உற்பத்தியாளர் உத்தரவாதத்தை அதிகபட்சம் 1 வருடம் நீட்டிக்கிறது",
          "வேண்டுமென்றே செய்யப்பட்ட சேதத்தை உள்ளடக்காது",
          "அசல் ரசீது இருக்க வேண்டும்"
        ],
        proTips: [
          "மடிக்கணினி, ஸ்மார்ட்போன்கள், கேமராக்களுக்கு சிறந்தது",
          "வாங்கிய ரசீது மற்றும் உத்தரவாத அட்டையை பாதுகாப்பாக வைக்கவும்",
          "கோரிக்கை செயல்முறைக்கு 7-14 நாட்கள் ஆகும்"
        ]
      },
      hi: {
        whatYouGet: "आपके कार्ड से खरीदे गए इलेक्ट्रॉनिक्स पर स्वचालित 1 साल की वारंटी विस्तार (मूल्य ₹3,000-5,000)",
        howToUse: [
          "इस कार्ड से ₹10,000 से अधिक का कोई भी इलेक्ट्रॉनिक आइटम खरीदें",
          "वारंटी स्वचालित रूप से सक्रिय हो जाती है (पंजीकरण की आवश्यकता नहीं)",
          "यदि निर्माता वारंटी समाप्त होने के बाद टूट जाती है, तो दावा दर्ज करें",
          "खरीद मूल्य तक मरम्मत या प्रतिस्थापन प्राप्त करें"
        ],
        limitations: [
          "केवल ₹10,000 से अधिक के आइटम के लिए",
          "निर्माता वारंटी को अधिकतम 1 वर्ष बढ़ाता है",
          "जानबूझकर हुई क्षति को कवर नहीं करता",
          "मूल रसीद होनी चाहिए"
        ],
        proTips: [
          "लैपटॉप, स्मार्टफोन, कैमरा के लिए बढ़िया",
          "खरीद रसीद और वारंटी कार्ड सुरक्षित रखें",
          "दावा प्रक्रिया में 7-14 दिन लगते हैं"
        ]
      }
    },
    monetaryValue: 4000,
    usageFrequency: "unlimited",
    activationMethod: "automatic",
    relevanceTriggers: {
      locations: ["mall"],
      dayOfWeek: "any"
    }
  },
  {
    id: "benefit_4",
    cardTypes: ["visa_signature", "visa_infinite", "visa_classic"],
    category: "shopping",
    priority: "medium",
    title: {
      en: "Online Shopping Protection",
      ta: "ஆன்லைன் ஷாப்பிங் பாதுகாப்பு",
      hi: "ऑनलाइन शॉपिंग सुरक्षा"
    },
    shortDescription: {
      en: "Coverage against damage or non-delivery for online purchases",
      ta: "ஆன்லைன் வாங்குதல்களுக்கு சேதம் அல்லது டெலிவரி செய்யப்படாததற்கு எதிரான கவரேஜ்",
      hi: "ऑनलाइन खरीदारी के लिए क्षति या गैर-वितरण के खिलाफ कवरेज"
    },
    originalTnC: "Cardholder is insured against theft or accidental damage of eligible items purchased online for a period of 45 days from date of purchase...",
    simplifiedExplanation: {
      en: {
        whatYouGet: "Insurance for items you buy online - get your money back if it arrives damaged or doesn't arrive at all",
        howToUse: [
          "Pay for your online shopping using this card",
          "Keep digital invoice and order confirmation",
          "If item is stolen or damaged within 45 days, file a claim online",
          "Documentation required: police report or courier confirmation"
        ],
        limitations: [
          "Maximum claim: ₹25,000 per year",
          "Item must be over ₹2,000",
          "Only for new items (not used or refurbished)",
          "Claim must be filed within 7 days of event"
        ],
        proTips: [
          "Perfect for expensive gadgets or furniture",
          "Always record unboxing videos for high-value items",
          "Use on trusted e-commerce platforms only"
        ]
      },
      ta: {
        whatYouGet: "நீங்கள் ஆன்லைனில் வாங்கும் பொருட்களுக்கான காப்பீடு - சேதமடைந்தால் அல்லது வராமல் போனால் உங்கள் பணத்தை திரும்பப் பெறுங்கள்",
        howToUse: [
          "இந்த கார்டைப் பயன்படுத்தி உங்கள் ஆன்லைன் ஷாப்பிங்கிற்கு பணம் செலுத்துங்கள்",
          "டிஜிட்டல் விலைப்பட்டியல் மற்றும் ஆர்டர் உறுதிப்படுத்தலை வைத்திருங்கள்",
          "45 நாட்களுக்குள் பொருள் திருடப்பட்டால் அல்லது சேதமடைந்தால், ஆன்லைனில் கோரிக்கை தாக்கல் செய்யவும்",
          "தேவையான ஆவணங்கள்: போலீஸ் அறிக்கை அல்லது கூரியர் உறுதிப்படுத்தல்"
        ],
        limitations: [
          "அதிகபட்ச உரிமை: வருடத்திற்கு ₹25,000",
          "பொருள் ₹2,000க்கு மேல் இருக்க வேண்டும்",
          "புதிய பொருட்களுக்கு மட்டும் (பயன்படுத்தப்பட்டவை அல்ல)",
          "நிகழ்வு நடந்த 7 நாட்களுக்குள் கோரிக்கை தாக்கல் செய்யப்பட வேண்டும்"
        ],
        proTips: [
          "விலையுயர்ந்த கேஜெட்டுகள் அல்லது தளபாடங்களுக்கு சிறந்தது",
          "உயர் மதிப்புள்ள பொருட்களுக்கு எப்போதும் அன்பாக்சிங் வீடியோக்களை பதிவு செய்யவும்",
          "நம்பகமான மின்-வணிக தளங்களில் மட்டும் பயன்படுத்தவும்"
        ]
      },
      hi: {
        whatYouGet: "ऑनलाइन खरीदी गई वस्तुओं के लिए बीमा - यदि सामान क्षतिग्रस्त हो जाए या न आए तो पैसे वापस पाएं",
        howToUse: [
          "इस कार्ड का उपयोग करके अपनी ऑनलाइन खरीदारी का भुगतान करें",
          "डिजिटल इनवॉइस और ऑर्डर पुष्टिकरण रखें",
          "यदि 45 दिनों के भीतर वस्तु चोरी या क्षतिग्रस्त हो जाती है, तो ऑनलाइन दावा करें",
          "आवश्यक दस्तावेज: पुलिस रिपोर्ट या कूरियर पुष्टिकरण"
        ],
        limitations: [
          "अधिकतम दावा: ₹25,000 प्रति वर्ष",
          "वस्तु ₹2,000 से अधिक होनी चाहिए",
          "केवल नई वस्तुओं के लिए (पुरानी नहीं)",
          "घटना के 7 दिनों के भीतर दावा किया जाना चाहिए"
        ],
        proTips: [
          "महंगे गैजेट्स या फर्नीचर के लिए बढ़िया",
          "उच्च-मूल्य वाली वस्तुओं के लिए हमेशा अनबॉक्सिंग वीडियो रिकॉर्ड करें",
          "केवल विश्वसनीय ई-कॉमर्स प्लेटफॉर्म पर उपयोग करें"
        ]
      }
    },
    monetaryValue: 1200,
    usageFrequency: "unlimited",
    activationMethod: "automatic",
    relevanceTriggers: {
      locations: ["mall", "any"],
      dayOfWeek: "any"
    }
  },
  {
    id: "benefit_5",
    cardTypes: ["visa_signature", "visa_infinite", "visa_classic"],
    category: "fuel",
    priority: "medium",
    title: {
      en: "Fuel Surcharge Waiver",
      ta: "எரிபொருள் கூடுதல் கட்டணம் தள்ளுபடி",
      hi: "ईंधन अधिभार छूट"
    },
    shortDescription: {
      en: "Save 1% on fuel purchases (surcharge waived)",
      ta: "எரிபொருள் வாங்குதல்களில் 1% சேமிக்கவும் (கூடுதல் கட்டணம் தள்ளுபடி)",
      hi: "ईंधन खरीद पर 1% बचाएं (अधिभार माफ)"
    },
    originalTnC: "1% fuel surcharge waiver is applicable at all fuel stations in India. Maximum waiver capped at INR 250 per billing cycle...",
    simplifiedExplanation: {
      en: {
        whatYouGet: "1% fuel surcharge waived on every fuel purchase (saves ₹10-15 per 1000 spent)",
        howToUse: [
          "Swipe card at any fuel station",
          "Discount applied automatically",
          "No minimum or maximum spend"
        ],
        limitations: [
          "Only at fuel stations (not for online fuel vouchers)",
          "1% waiver only (not additional cashback)",
          "Some co-branded cards may exclude this"
        ],
        proTips: [
          "Use for both petrol and diesel",
          "Combine with fuel station loyalty programs",
          "Save ₹500-800 per year on average"
        ]
      },
      ta: {
        whatYouGet: "ஒவ்வொரு எரிபொருள் வாங்குதலிலும் 1% எரிபொருள் கூடுதல் கட்டணம் தள்ளுபடி (1000 செலவினத்திற்கு ₹10-15 சேமிக்கிறது)",
        howToUse: [
          "எந்த எரிபொருள் நிலையத்திலும் கார்டை ஸ்வைப் செய்யவும்",
          "தள்ளுபடி தானாகவே பயன்படுத்தப்படும்",
          "குறைந்தபட்ச அல்லது அதிகபட்ச செலவு இல்லை"
        ],
        limitations: [
          "எரிபொருள் நிலையங்களில் மட்டும் (ஆன்லைன் எரிபொருள் வவுச்சர்களுக்கு அல்ல)",
          "1% தள்ளுபடி மட்டும் (கூடுதல் பணத்திரும்பப்பெறுதல் அல்ல)",
          "சில இணை-பிராண்ட் அட்டைகள் இதை விலக்கலாம்"
        ],
        proTips: [
          "பெட்ரோல் மற்றும் டீசல் இரண்டிற்கும் பயன்படுத்தவும்",
          "எரிபொருள் நிலைய லாயல்டி திட்டங்களுடன் இணைக்கவும்",
          "சராசரியாக வருடத்திற்கு ₹500-800 சேமிக்கவும்"
        ]
      },
      hi: {
        whatYouGet: "प्रत्येक ईंधन खरीद पर 1% ईंधन अधिभार माफ (1000 खर्च पर ₹10-15 बचाता है)",
        howToUse: [
          "किसी भी ईंधन स्टेशन पर कार्ड स्वाइप करें",
          "छूट स्वचालित रूप से लागू होती है",
          "कोई न्यूनतम या अधिकतम खर्च नहीं"
        ],
        limitations: [
          "केवल ईंधन स्टेशनों पर (ऑनलाइन ईंधन वाउचर के लिए नहीं)",
          "केवल 1% छूट (अतिरिक्त कैशबैक नहीं)",
          "कुछ को-ब्रांडेड कार्ड इसे बाहर कर सकते हैं"
        ],
        proTips: [
          "पेट्रोल और डीजल दोनों के लिए उपयोग करें",
          "ईंधन स्टेशन लॉयल्टी प्रोग्राम के साथ संयोजन करें",
          "औसतन प्रति वर्ष ₹500-800 बचाएं"
        ]
      }
    },
    monetaryValue: 600,
    usageFrequency: "unlimited",
    activationMethod: "automatic",
    relevanceTriggers: {
      locations: ["gas_station"],
      dayOfWeek: "any"
    }
  },
  {
    id: "benefit_6",
    cardTypes: ["visa_signature", "visa_infinite", "visa_classic"],
    category: "insurance",
    priority: "low",
    title: {
      en: "Personal Accident Insurance",
      ta: "தனிநபர் விபத்து காப்பீடு",
      hi: "व्यक्तिगत दुर्घटना बीमा"
    },
    shortDescription: {
      en: "Complimentary coverage up to ₹2 Lakh for accidental protection",
      ta: "விபத்து பாதுகாப்பிற்காக ₹2 லட்சம் வரை பாராட்டு கவரேஜ்",
      hi: "आकस्मिक सुरक्षा के लिए ₹2 लाख तक का मुफ्त कवरेज"
    },
    originalTnC: "Complimentary personal accident insurance cover for death due to accident. Card must have been active with at least one transaction in last 30 days...",
    simplifiedExplanation: {
      en: {
        whatYouGet: "Free insurance cover of ₹2,00,000 for you and your family in case of accidental emergencies",
        howToUse: [
          "Keep your card active (use it at least once every 30 days)",
          "Ensure nominee details are updated in your bank records",
          "In case of event, bank must be notified within 90 days",
          "Submission of standard medical/police records required"
        ],
        limitations: [
          "Card must have been used within 30 days prior to event",
          "Coverage for death/permanent disability only",
          "Doesn't cover risky adventure sports",
          "Must have valid bank account"
        ],
        proTips: [
          "Make sure your family knows this benefit exists",
          "Regular card usage ensures continuous protection",
          "Keep a copy of the policy terms downloaded"
        ]
      },
      ta: {
        whatYouGet: "விபத்து அவசரநிலைகளில் உங்களுக்கும் உங்கள் குடும்பத்திற்கும் ₹2,00,000 இலவச காப்பீடு",
        howToUse: [
          "உங்கள் கார்டை செயலில் வைத்திருங்கள் (30 நாட்களுக்கு ஒருமுறை பயன்படுத்தவும்)",
          "வங்கி பதிவுகளில் நாமினி விவரங்கள் புதுப்பிக்கப்பட்டுள்ளதை உறுதி செய்யவும்",
          "நிகழ்வு நடந்தால், 90 நாட்களுக்குள் வங்கிக்கு அறிவிக்கப்பட வேண்டும்",
          "சாதாரண மருத்துவ/போலீஸ் பதிவுகளை சமர்ப்பிக்க வேண்டும்"
        ],
        limitations: [
          "நிகழ்வுக்கு 30 நாட்களுக்கு முன்பு கார்டு பயன்படுத்தப்பட்டிருக்க வேண்டும்",
          "இறப்பு/நிரந்தர ஊனம் ஆகியவற்றிற்கு மட்டுமே கவரேஜ்",
          "ஆபத்தான விளையாட்டுக்களை உள்ளடக்காது",
          "செல்லுபடியாகும் வங்கி கணக்கு இருக்க வேண்டும்"
        ],
        proTips: [
          "இந்த பலன் இருப்பதை உங்கள் குடும்பத்தினருக்கு தெரியப்படுத்துங்கள்",
          "தொடர்ச்சியான கார்டு பயன்பாடு பாதுகாப்பை உறுதி செய்கிறது",
          "பாலிசி விதிமுறைகளின் நகலை பதிவிறக்கம் செய்து வைக்கவும்"
        ]
      },
      hi: {
        whatYouGet: "आकस्मिक आपात स्थिति के मामले में आपके और आपके परिवार के लिए ₹2,00,000 का मुफ्त बीमा कवर",
        howToUse: [
          "अपने कार्ड को सक्रिय रखें (हर 30 दिनों में कम से कम एक बार इसका उपयोग करें)",
          "सुनिश्चित करें कि आपके बैंक रिकॉर्ड में नॉमिनी विवरण अपडेट हैं",
          "घटना के मामले में, बैंक को 90 दिनों के भीतर सूचित किया जाना चाहिए",
          "मानक चिकित्सा/पुलिस रिकॉर्ड जमा करना आवश्यक है"
        ],
        limitations: [
          "घटना से 30 दिन पहले कार्ड का उपयोग किया जाना चाहिए",
          "केवल मृत्यु/स्थायी विकलांगता के लिए कवरेज",
          "जोखिम भरे साहसिक खेलों को कवर नहीं करता",
          "वैध बैंक खाता होना चाहिए"
        ],
        proTips: [
          "सुनिश्चित करें कि आपके परिवार को इस लाभ के बारे में पता है",
          "नियमित कार्ड उपयोग निरंतर सुरक्षा सुनिश्चित करता है",
          "पॉलिसी शर्तों की एक प्रति डाउनलोड करके रखें"
        ]
      }
    },
    monetaryValue: 200,
    usageFrequency: "one-time",
    activationMethod: "automatic",
    relevanceTriggers: {
      locations: ["any"],
      dayOfWeek: "any"
    }
  }
];
