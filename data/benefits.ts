
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
    id: "benefit_13",
    cardTypes: ["visa_signature", "visa_infinite", "visa_classic"],
    category: "loans",
    priority: "high",
    title: {
      en: "Instant Personal Loan Against Credit Limit",
      ta: "கார்டு வரம்பிற்கு எதிரான உடனடி தனிநபர் கடன்",
      hi: "क्रेडिट सीमा के विरुद्ध तत्काल व्यक्तिगत ऋण"
    },
    shortDescription: {
      en: "Convert your available credit limit into cash instantly",
      ta: "உங்கள் கிரெடிட் வரம்பை உடனடியாக பணமாக மாற்றிக்கொள்ளுங்கள்",
      hi: "अपनी उपलब्ध क्रेडिट सीमा को तुरंत नकद में बदलें"
    },
    originalTnC: "Cardholder is eligible for an instant personal loan up to 90% of the available credit limit. Repayment tenures range from 12 to 60 months. Interest rates vary based on credit history...",
    simplifiedExplanation: {
      en: {
        whatYouGet: "Get immediate cash in your bank account by using your card's credit limit without any extra paperwork.",
        howToUse: [
          "Open your bank app and check for 'Loan on Card' section",
          "Select the amount (up to your available limit)",
          "Choose a monthly payment plan (1 to 5 years)",
          "Confirm and receive money in your account in seconds"
        ],
        limitations: [
          "Interest rates apply (usually lower than standard personal loans)",
          "Credit limit will be blocked for the loan amount",
          "Processing fee of up to 1% might apply",
          "Repayments are added to your monthly card statement"
        ],
        proTips: [
          "Perfect for urgent medical expenses or emergencies",
          "Often much cheaper than 'payday' loans or bank overdrafts"
        ]
      },
      ta: {
        whatYouGet: "எந்த கூடுதல் ஆவணங்களும் இல்லாமல் உங்கள் கார்டின் கிரெடிட் வரம்பைப் பயன்படுத்தி உங்கள் வங்கி கணக்கில் உடனடியாக பணத்தைப் பெறுங்கள்.",
        howToUse: [
          "வங்கி செயலியைத் திறந்து 'Loan on Card' பகுதியைப் பார்க்கவும்",
          "தொகையைத் தேர்ந்தெடுக்கவும் (உங்கள் வரம்பு வரை)",
          "திருப்பிச் செலுத்தும் காலத்தைத் தேர்ந்தெடுக்கவும் (1 முதல் 5 ஆண்டுகள் வரை)",
          "உறுதிப்படுத்திய சில நொடிகளில் பணம் உங்கள் கணக்கில் வரவு வைக்கப்படும்"
        ],
        limitations: [
          "வட்டி விகிதங்கள் பொருந்தும்",
          "கடன் தொகைக்கு உங்கள் கிரெடிட் வரம்பு முடக்கப்படும்",
          "1% வரை செயலாக்கக் கட்டணம் விதிக்கப்படலாம்"
        ],
        proTips: [
          "அவசர மருத்துவச் செலவுகளுக்கு இது மிகவும் பயனுள்ளதாக இருக்கும்"
        ]
      },
      hi: {
        whatYouGet: "बिना किसी अतिरिक्त कागजी कार्रवाई के अपने कार्ड की क्रेडिट सीमा का उपयोग करके अपने बैंक खाते में तत्काल नकद प्राप्त करें।",
        howToUse: [
          "अपना बैंक ऐप खोलें और 'लोन ऑन कार्ड' सेक्शन देखें",
          "राशि चुनें (अपनी उपलब्ध सीमा तक)",
          "मासिक भुगतान योजना चुनें (1 से 5 वर्ष)",
          "पुष्टि करें और कुछ ही सेकंड में अपने खाते में पैसे प्राप्त करें"
        ],
        limitations: [
          "ब्याज दरें लागू होती हैं",
          "ऋण राशि के लिए क्रेडिट सीमा ब्लॉक कर दी जाएगी",
          "1% तक का प्रोसेसिंग शुल्क लग सकता है"
        ],
        proTips: [
          "तत्काल चिकित्सा व्यय या आपात स्थिति के लिए बिल्कुल सही"
        ]
      }
    },
    monetaryValue: 10000,
    usageFrequency: "one-time",
    activationMethod: "manual_enrollment",
    relevanceTriggers: {
      locations: ["any"],
      dayOfWeek: "any"
    }
  },
  {
    id: "benefit_14",
    cardTypes: ["visa_signature", "visa_infinite", "visa_classic"],
    category: "credit_score",
    priority: "medium",
    title: {
      en: "Free Monthly Credit Score Monitoring",
      ta: "இலவச மாதாந்திர கிரெடிட் ஸ்கோர் கண்காணிப்பு",
      hi: "मुफ्त मासिक क्रेडिट स्कोर निगरानी"
    },
    shortDescription: {
      en: "Track your CIBIL/Experian score for free every month",
      ta: "ஒவ்வொரு மாதமும் உங்கள் கிரெடிட் ஸ்கோரை இலவசமாகப் பாருங்கள்",
      hi: "हर महीने अपना सिबिल/एक्सपेरियन स्कोर मुफ्त में ट्रैक करें"
    },
    originalTnC: "Cardmembers can access their credit score once a month via the mobile application. This service is provided in partnership with authorized credit bureaus...",
    simplifiedExplanation: {
      en: {
        whatYouGet: "Full access to your credit score and detailed credit health report without paying subscription fees.",
        howToUse: [
          "Go to the 'Services' section in your banking app",
          "Click on 'Check Credit Score'",
          "Agree to the terms to fetch your latest report",
          "View your score and see tips to improve it"
        ],
        limitations: [
          "Updated only once every 30 days",
          "Report is for informational purposes only",
          "Requires identity verification for first-time use"
        ],
        proTips: [
          "Regularly check for errors to protect against identity theft",
          "Monitor how your usage affects your score to get better loan rates later"
        ]
      },
      ta: {
        whatYouGet: "சந்தா கட்டணம் எதுவும் செலுத்தாமல் உங்கள் கிரெடிட் ஸ்கோர் மற்றும் விரிவான அறிக்கையை முழுமையாக அணுகலாம்.",
        howToUse: [
          "வங்கி செயலியில் 'Services' பகுதிக்குச் செல்லவும்",
          "'Check Credit Score' என்பதை கிளிக் செய்யவும்",
          "புதிய அறிக்கையைப் பெற விதிமுறைகளை ஏற்கவும்",
          "உங்கள் ஸ்கோர் மற்றும் அதை மேம்படுத்துவதற்கான குறிப்புகளைப் பாருங்கள்"
        ],
        limitations: [
          "30 நாட்களுக்கு ஒருமுறை மட்டுமே புதுப்பிக்கப்படும்"
        ],
        proTips: [
          "அடையாளத் திருட்டைத் தவிர்க்க அடிக்கடி பிழைகள் இருக்கிறதா என்று சோதிக்கவும்"
        ]
      },
      hi: {
        whatYouGet: "बिना किसी सदस्यता शुल्क के अपने क्रेडिट स्कोर और विस्तृत रिपोर्ट तक पूरी पहुंच प्राप्त करें।",
        howToUse: [
          "अपने बैंकिंग ऐप में 'सेवाएं' सेक्शन पर जाएं",
          "'चेक क्रेडिट स्कोर' पर क्लिक करें",
          "अपनी नवीनतम रिपोर्ट प्राप्त करने के लिए शर्तों से सहमत हों",
          "अपना स्कोर देखें और इसे सुधारने के टिप्स देखें"
        ],
        limitations: [
          "हर 30 दिनों में केवल एक बार अपडेट किया जाता है"
        ],
        proTips: [
          "पहचान की चोरी से बचने के लिए नियमित रूप से त्रुटियों की जाँच करें"
        ]
      }
    },
    monetaryValue: 500,
    usageFrequency: "monthly",
    activationMethod: "automatic",
    relevanceTriggers: {
      locations: ["any"],
      dayOfWeek: "any"
    }
  },
  {
    id: "benefit_9",
    cardTypes: ["visa_signature", "visa_infinite", "visa_classic"],
    category: "shopping",
    priority: "high",
    title: {
      en: "10% Instant Discount on Amazon & Flipkart",
      ta: "Amazon & Flipkart-ல் 10% உடனடி தள்ளுபடி",
      hi: "Amazon और Flipkart पर 10% तत्काल छूट"
    },
    shortDescription: {
      en: "Save up to ₹1,500 on online festival sales",
      ta: "ஆன்லைன் பண்டிகை கால விற்பனையில் ₹1,500 வரை சேமிக்கவும்",
      hi: "ऑनलाइन त्योहारी सेल पर ₹1,500 तक बचाएं"
    },
    originalTnC: "Cardholders are eligible for a 10% instant discount on minimum purchase of INR 5,000 during the promotion period on Amazon.in and Flipkart.com. Capped at INR 1,500 per card...",
    simplifiedExplanation: {
      en: {
        whatYouGet: "Flat 10% off instantly when you shop during big sales on Amazon or Flipkart.",
        howToUse: [
          "Wait for major sale events (e.g., Big Billion Days)",
          "Add items worth at least ₹5,000 to your cart",
          "Pay using this Visa card at checkout",
          "Discount is applied before you pay"
        ],
        limitations: [
          "Minimum purchase: ₹5,000",
          "Maximum savings: ₹1,500 per sale event",
          "Excludes some mobile phones and grocery items",
          "Valid only during specific sale periods"
        ],
        proTips: [
          "Save your card details beforehand for faster checkout",
          "Combine with brand-specific coupons for deeper discounts"
        ]
      },
      ta: {
        whatYouGet: "Amazon அல்லது Flipkart-ன் பெரிய விற்பனை காலங்களில் ஷாப்பிங் செய்யும்போது 10% உடனடி தள்ளுபடி.",
        howToUse: [
          "முக்கிய விற்பனை நிகழ்வுகளுக்காக காத்திருங்கள்",
          "குறைந்தபட்சம் ₹5,000 மதிப்பிலான பொருட்களை கார்ட்டில் சேர்க்கவும்",
          "செக் அவுட்டின் போது இந்த விசா கார்டைப் பயன்படுத்தி பணம் செலுத்துங்கள்",
          "நீங்கள் பணம் செலுத்தும் முன்பே தள்ளுபடி பயன்படுத்தப்படும்"
        ],
        limitations: [
          "குறைந்தபட்ச கொள்முதல்: ₹5,000",
          "அதிகபட்ச சேமிப்பு: ஒரு விற்பனைக்கு ₹1,500",
          "சில மொபைல் போன்கள் மற்றும் மளிகைப் பொருட்கள் தவிர",
          "குறிப்பிட்ட விற்பனை காலங்களில் மட்டுமே செல்லுபடியாகும்"
        ],
        proTips: [
          "வேகமாக செக் அவுட் செய்ய உங்கள் கார்டு விவரங்களை முன்கூட்டியே சேமிக்கவும்",
          "அதிக தள்ளுபடிக்காக பிராண்ட் கூப்பன்களுடன் இணைக்கவும்"
        ]
      },
      hi: {
        whatYouGet: "Amazon या Flipkart पर बड़ी सेल के दौरान खरीदारी करने पर फ्लैट 10% की तत्काल छूट।",
        howToUse: [
          "प्रमुख सेल इवेंट का इंतज़ार करें",
          "अपने कार्ट में कम से कम ₹5,000 का सामान जोड़ें",
          "चेकआउट पर इस वीज़ा कार्ड का उपयोग करके भुगतान करें",
          "भुगतान करने से पहले छूट लागू हो जाती है"
        ],
        limitations: [
          "न्यूनतम खरीद: ₹5,000",
          "अधिकतम बचत: प्रति सेल इवेंट ₹1,500",
          "कुछ मोबाइल फोन और ग्रोसरी आइटम शामिल नहीं",
          "केवल विशिष्ट सेल अवधि के दौरान मान्य"
        ],
        proTips: [
          "तेजी से चेकआउट के लिए अपने कार्ड का विवरण पहले से सुरक्षित रखें",
          "गहरी छूट के लिए ब्रांड-विशिष्ट कूपन के साथ संयोजन करें"
        ]
      }
    },
    monetaryValue: 1500,
    usageFrequency: "per sale event",
    activationMethod: "automatic",
    relevanceTriggers: {
      locations: ["any"],
      dayOfWeek: "any"
    }
  },
  {
    id: "benefit_10",
    cardTypes: ["visa_infinite", "visa_signature"],
    category: "shopping",
    priority: "medium",
    title: {
      en: "Complimentary Amazon Prime Membership",
      ta: "இலவச Amazon Prime சந்தா",
      hi: "मुफ्त Amazon Prime सदस्यता"
    },
    shortDescription: {
      en: "Get 1 year of Prime for free (worth ₹1,499)",
      ta: "1 வருட Prime சந்தா இலவசமாகப் பெறுங்கள் (மதிப்பு ₹1,499)",
      hi: "1 साल के लिए मुफ्त प्राइम प्राप्त करें (मूल्य ₹1,499)"
    },
    originalTnC: "Eligible Visa Infinite/Signature cardholders can avail a complimentary 12-month Amazon Prime membership upon performing one transaction of any value within 30 days of card issuance...",
    simplifiedExplanation: {
      en: {
        whatYouGet: "A full year of Amazon Prime (Free delivery, Prime Video, Music) absolutely free.",
        howToUse: [
          "Activate your card and make any single purchase",
          "Wait for the welcome email with a unique code",
          "Go to Amazon Prime 'Redeem' page",
          "Enter your code to start your 12-month free membership"
        ],
        limitations: [
          "Available only for new Prime members or after current sub expires",
          "One-time benefit per card life",
          "Must perform one transaction within 30 days of getting card"
        ],
        proTips: [
          "Set a reminder to cancel auto-renewal after 11 months",
          "Use Prime Video on up to 3 screens simultaneously"
        ]
      },
      ta: {
        whatYouGet: "ஒரு வருடத்திற்கான Amazon Prime சந்தா (இலவச டெலிவரி, Prime Video, Music) முற்றிலும் இலவசம்.",
        howToUse: [
          "உங்கள் கார்டை ஆக்டிவேட் செய்து ஏதேனும் ஒரு பொருளை வாங்கவும்",
          "தனித்துவமான குறியீட்டுடன் கூடிய வரவேற்பு மின்னஞ்சலுக்காக காத்திருங்கள்",
          "Amazon Prime 'Redeem' பக்கத்திற்குச் செல்லவும்",
          "உங்கள் 12 மாத இலவச சந்தாவைத் தொடங்க குறியீட்டை உள்ளிடவும்"
        ],
        limitations: [
          "புதிய Prime உறுப்பினர்களுக்கு மட்டும்",
          "ஒரு கார்டிற்கு ஒருமுறை மட்டுமே",
          "கார்டு பெற்ற 30 நாட்களுக்குள் ஒரு பரிவர்த்தனை செய்ய வேண்டும்"
        ],
        proTips: [
          "11 மாதங்களுக்குப் பிறகு தானாகப் புதுப்பித்தலை ரத்து செய்ய நினைவூட்டலை அமைக்கவும்"
        ]
      },
      hi: {
        whatYouGet: "Amazon Prime का पूरा एक साल (मुफ्त डिलीवरी, प्राइम वीडियो, म्यूजिक) बिल्कुल मुफ्त।",
        howToUse: [
          "अपना कार्ड सक्रिय करें और कोई भी एक खरीदारी करें",
          "एक यूनिक कोड के साथ स्वागत ईमेल का इंतज़ार करें",
          "Amazon Prime 'Redeem' पेज पर जाएं",
          "अपनी 12 महीने की मुफ्त सदस्यता शुरू करने के लिए अपना कोड दर्ज करें"
        ],
        limitations: [
          "केवल नए प्राइम सदस्यों के लिए उपलब्ध",
          "प्रति कार्ड जीवन में एक बार का लाभ",
          "कार्ड मिलने के 30 दिनों के भीतर एक लेनदेन करना अनिवार्य है"
        ],
        proTips: [
          "11 महीने बाद ऑटो-रिन्यूअल रद्द करने के लिए रिमाइंडर सेट करें"
        ]
      }
    },
    monetaryValue: 1499,
    usageFrequency: "annual",
    activationMethod: "manual_enrollment",
    relevanceTriggers: {
      locations: ["any"],
      dayOfWeek: "any"
    }
  },
  {
    id: "benefit_11",
    cardTypes: ["visa_signature", "visa_infinite"],
    category: "shopping",
    priority: "medium",
    title: {
      en: "10X Rewards on Myntra & Nykaa",
      ta: "Myntra & Nykaa-ல் 10X வெகுமதிகள்",
      hi: "Myntra और Nykaa पर 10X रिवॉर्ड"
    },
    shortDescription: {
      en: "Earn 10 reward points for every ₹100 spent",
      ta: "செலவிடும் ஒவ்வொரு ₹100-க்கும் 10 வெகுமதி புள்ளிகளைப் பெறுங்கள்",
      hi: "प्रत्येक ₹100 खर्च पर 10 रिवॉर्ड पॉइंट अर्जित करें"
    },
    originalTnC: "Accelerated reward points (10X) are applicable on all spends on partner apps including Myntra, Nykaa, and Zara Online. Monthly cap of 5,000 points...",
    simplifiedExplanation: {
      en: {
        whatYouGet: "Earn reward points 10 times faster than usual when shopping for clothes, makeup, or lifestyle items online.",
        howToUse: [
          "Shop on Myntra or Nykaa app/website",
          "Pay using this Visa card",
          "Points are added to your monthly statement automatically"
        ],
        limitations: [
          "Monthly cap: 5,000 accelerated points",
          "Only for online spends on specified partner platforms",
          "Base points credited immediately, bonus points in 30 days"
        ],
        proTips: [
          "Redeem these points for Amazon gift vouchers",
          "Accumulate points to get a free shopping voucher worth ₹2,000"
        ]
      },
      ta: {
        whatYouGet: "உடை, ஒப்பனைப் பொருட்களை ஆன்லைனில் வாங்கும்போது சாதாரண புள்ளிகளை விட 10 மடங்கு வேகமாகப் பெறுங்கள்.",
        howToUse: [
          "Myntra அல்லது Nykaa செயலி/இணையதளத்தில் ஷாப்பிங் செய்யுங்கள்",
          "இந்த விசா கார்டைப் பயன்படுத்தி பணம் செலுத்துங்கள்",
          "புள்ளிகள் தானாகவே உங்கள் மாதாந்திர அறிக்கையில் சேர்க்கப்படும்"
        ],
        limitations: [
          "மாதாந்திர உச்சவரம்பு: 5,000 புள்ளிகள்",
          "குறிப்பிட்ட கூட்டாளர் தளங்களில் ஆன்லைன் செலவுகளுக்கு மட்டும்"
        ],
        proTips: [
          "இந்த புள்ளிகளை Amazon கிஃப்ட் வவுச்சர்களாக மாற்றிக் கொள்ளலாம்"
        ]
      },
      hi: {
        whatYouGet: "ऑनलाइन कपड़े, मेकअप या लाइफस्टाइल आइटम की खरीदारी करते समय सामान्य से 10 गुना तेजी से रिवॉर्ड पॉइंट अर्जित करें।",
        howToUse: [
          "Myntra या Nykaa ऐप/वेबसाइट पर खरीदारी करें",
          "इस वीज़ा कार्ड का उपयोग करके भुगतान करें",
          "पॉइंट आपके मासिक स्टेटमेंट में स्वचालित रूप से जुड़ जाते हैं"
        ],
        limitations: [
          "मासिक सीमा: 5,000 त्वरित पॉइंट",
          "केवल निर्दिष्ट पार्टनर प्लेटफॉर्म पर ऑनलाइन खर्च के लिए मान्य"
        ],
        proTips: [
          "इन पॉइंट्स को Amazon गिफ्ट वाउचर के लिए रिडीम करें"
        ]
      }
    },
    monetaryValue: 800,
    usageFrequency: "monthly",
    activationMethod: "automatic",
    relevanceTriggers: {
      locations: ["any", "mall"],
      dayOfWeek: "any"
    }
  },
  {
    id: "benefit_12",
    cardTypes: ["visa_infinite"],
    category: "shopping",
    priority: "high",
    title: {
      en: "Exclusive ₹5,000 off on Apple Store",
      ta: "Apple Store-ல் பிரத்யேக ₹5,000 தள்ளுபடி",
      hi: "Apple Store पर विशेष ₹5,000 की छूट"
    },
    shortDescription: {
      en: "Direct savings on iPhone, Mac, or iPad",
      ta: "iPhone, Mac அல்லது iPad வாங்குதல்களில் நேரடி சேமிப்பு",
      hi: "iPhone, Mac या iPad पर सीधी बचत"
    },
    originalTnC: "Offer valid for Visa Infinite cardholders on purchase of select Apple products at Apple Online Store or Imagine/iFuture stores. Instant cashback of up to INR 5,000...",
    simplifiedExplanation: {
      en: {
        whatYouGet: "Get up to ₹5,000 back instantly when you buy a new iPhone, MacBook, or iPad online.",
        howToUse: [
          "Go to the official Apple Online Store (India)",
          "Select your product and proceed to payment",
          "Enter your Visa Infinite card details",
          "Check for the 'Instant Cashback' indicator before OTP"
        ],
        limitations: [
          "Only for Visa Infinite cardholders",
          "One device per card per 6 months",
          "Valid on purchases over ₹50,000"
        ],
        proTips: [
          "Can be combined with No-Cost EMI for extra affordability",
          "Check educational pricing if you are a student for even more savings"
        ]
      },
      ta: {
        whatYouGet: "புதிய iPhone, MacBook அல்லது iPad ஆன்லைனில் வாங்கும்போது ₹5,000 வரை உடனடி தள்ளுபடி.",
        howToUse: [
          "அதிகாரப்பூர்வ Apple ஆன்லைன் ஸ்டோருக்குச் செல்லவும்",
          "பொருளைத் தேர்ந்தெடுத்து பணம் செலுத்தச் செல்லவும்",
          "உங்கள் விசா இன்ஃபினைட் கார்டு விவரங்களை உள்ளிடவும்"
        ],
        limitations: [
          "விசா இன்ஃபினைட் கார்டு வைத்திருப்பவர்களுக்கு மட்டும்",
          "6 மாதங்களுக்கு ஒரு கார்டிற்கு ஒரு சாதனம் மட்டும்",
          "₹50,000-க்கு மேலான கொள்முதல்களுக்கு மட்டும்"
        ],
        proTips: [
          "கூடுதல் வசதிக்காக வட்டி இல்லா EMI-உடன் இணைக்கலாம்"
        ]
      },
      hi: {
        whatYouGet: "नया iPhone, MacBook या iPad ऑनलाइन खरीदने पर ₹5,000 तक की तत्काल बचत प्राप्त करें।",
        howToUse: [
          "आधिकारिक Apple ऑनलाइन स्टोर पर जाएं",
          "अपना उत्पाद चुनें और भुगतान के लिए आगे बढ़ें",
          "अपना वीज़ा इनफिनिटी कार्ड विवरण दर्ज करें"
        ],
        limitations: [
          "केवल वीज़ा इनफिनिटी कार्डधारकों के लिए",
          "प्रति 6 महीने में प्रति कार्ड एक डिवाइस",
          "₹50,000 से अधिक की खरीदारी पर मान्य"
        ],
        proTips: [
          "अतिरिक्त बचत के लिए नो-कॉस्ट ईएमआई के साथ जोड़ा जा सकता है"
        ]
      }
    },
    monetaryValue: 5000,
    usageFrequency: "twice a year",
    activationMethod: "automatic",
    relevanceTriggers: {
      locations: ["any", "mall"],
      dayOfWeek: "any"
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
    id: "benefit_7",
    cardTypes: ["visa_signature", "visa_infinite", "visa_classic"],
    category: "emi",
    priority: "high",
    title: {
      en: "No-Cost EMI on Electronics",
      ta: "மின்னணு பொருட்களுக்கு வட்டி இல்லா EMI",
      hi: "इलेक्ट्रॉनिक्स पर नो-कॉस्ट ईएमआई (No-Cost EMI)"
    },
    shortDescription: {
      en: "Zero interest installments for up to 12 months",
      ta: "12 மாதங்கள் வரை பூஜ்ஜிய வட்டி தவணைகள்",
      hi: "12 महीने तक के लिए शून्य ब्याज किस्तें"
    },
    originalTnC: "No-cost EMI benefit is available at select partner merchants. Minimum transaction value of INR 5,000 required. Processing fee of INR 199 may apply...",
    simplifiedExplanation: {
      en: {
        whatYouGet: "Pay for expensive gadgets in equal monthly parts with absolutely 0% interest for up to 1 year.",
        howToUse: [
          "Select 'EMI' at checkout on Amazon, Flipkart, or major retail stores",
          "Choose 'No-Cost EMI' option with this card",
          "Select a tenure of 3, 6, 9, or 12 months",
          "Confirm purchase and track payments in your bank app"
        ],
        limitations: [
          "Minimum purchase: ₹5,000",
          "Only at participating merchant partners",
          "One-time processing fee of ₹199 per transaction",
          "Credit limit blocked for full amount initially"
        ],
        proTips: [
          "Best for high-value purchases like iPhones or Laptops",
          "Avoid late payments to keep the 0% interest active",
          "Check for additional bank-specific cashback on EMI"
        ]
      },
      ta: {
        whatYouGet: "விலையுயர்ந்த கேஜெட்டுகளுக்கு 1 வருடம் வரை முற்றிலும் 0% வட்டியில் சமமான மாதாந்திர தவணைகளில் பணம் செலுத்துங்கள்.",
        howToUse: [
          "அமேசான், பிளிப்கார்ட் போன்ற கடைகளில் செக் அவுட்டின் போது 'EMI' என்பதைத் தேர்ந்தெடுக்கவும்",
          "இந்த கார்டுடன் 'வட்டி இல்லா EMI' விருப்பத்தைத் தேர்ந்தெடுக்கவும்",
          "3, 6, 9 அல்லது 12 மாத காலத்தைத் தேர்ந்தெடுக்கவும்",
          "பரிவர்த்தனையை உறுதிசெய்து வங்கி பயன்பாட்டில் தவணைகளைக் கண்காணிக்கவும்"
        ],
        limitations: [
          "குறைந்தபட்ச கொள்முதல்: ₹5,000",
          "பங்கேற்கும் வணிக கூட்டாளர்களிடம் மட்டும்",
          "ஒரு பரிவர்த்தனைக்கு ₹199 செயலாக்கக் கட்டணம்",
          "ஆரம்பத்தில் முழுத் தொகைக்கும் கிரெடிட் வரம்பு முடக்கப்படும்"
        ],
        proTips: [
          "iPhone அல்லது மடிக்கணினிகள் போன்ற உயர் மதிப்பு கொள்முதல்களுக்கு சிறந்தது",
          "0% வட்டியைத் தக்கவைக்க சரியான நேரத்தில் பணம் செலுத்துங்கள்",
          "EMI-ல் கூடுதல் வங்கி கேஷ்பேக் சலுகைகளைச் சரிபார்க்கவும்"
        ]
      },
      hi: {
        whatYouGet: "1 साल तक के लिए बिल्कुल 0% ब्याज पर समान मासिक किस्तों में महंगे गैजेट्स के लिए भुगतान करें।",
        howToUse: [
          "Amazon, Flipkart या प्रमुख स्टोर पर चेकआउट के समय 'EMI' चुनें",
          "इस कार्ड के साथ 'नो-कॉस्ट ईएमआई' विकल्प चुनें",
          "3, 6, 9 या 12 महीने की अवधि चुनें",
          "खरीद की पुष्टि करें और अपने बैंक ऐप में भुगतान ट्रैक करें"
        ],
        limitations: [
          "न्यूनतम खरीद: ₹5,000",
          "केवल भाग लेने वाले मर्चेंट पार्टनर्स पर",
          "प्रति लेनदेन ₹199 का एक बार का प्रोसेसिंग शुल्क",
          "शुरुआत में पूरी राशि के लिए क्रेडिट सीमा ब्लॉक कर दी जाती है"
        ],
        proTips: [
          "iPhone या लैपटॉप जैसी उच्च-मूल्य वाली खरीदारी के लिए सर्वश्रेष्ठ",
          "0% ब्याज सक्रिय रखने के लिए समय पर भुगतान करें",
          "ईएमआई पर अतिरिक्त बैंक-विशिष्ट कैशबैक देखें"
        ]
      }
    },
    monetaryValue: 2500,
    usageFrequency: "unlimited",
    activationMethod: "automatic",
    relevanceTriggers: {
      locations: ["mall"],
      dayOfWeek: "any"
    }
  },
  {
    id: "benefit_8",
    cardTypes: ["visa_signature", "visa_infinite", "visa_classic"],
    category: "emi",
    priority: "medium",
    title: {
      en: "Instant Loan on Card",
      ta: "கார்டில் உடனடி கடன்",
      hi: "कार्ड पर तत्काल ऋण (Instant Loan)"
    },
    shortDescription: {
      en: "Pre-approved personal loan without documentation",
      ta: "ஆவணங்கள் இல்லாமல் முன்பே அங்கீகரிக்கப்பட்ட தனிநபர் கடன்",
      hi: "बिना किसी दस्तावेज़ के प्री-अप्रूव्ड पर्सनल लोन"
    },
    originalTnC: "Loan amount up to card limit. Interest rate starts at 12.99% p.a. Flexible tenure from 12 to 48 months. Standard processing fees apply...",
    simplifiedExplanation: {
      en: {
        whatYouGet: "Get cash directly in your bank account based on your card's credit limit. No extra documents needed.",
        howToUse: [
          "Login to your bank's mobile app",
          "Look for 'Instant Loan' or 'Loan on Card' offer",
          "Select the amount and repayment period (1-4 years)",
          "Money is credited to your linked account instantly"
        ],
        limitations: [
          "Interest rates apply (usually 12-16%)",
          "Repayment is added to your monthly credit card bill",
          "Processing fee of 1-2% of loan amount",
          "Depends on your individual credit score"
        ],
        proTips: [
          "Use for emergency expenses or debt consolidation",
          "Cheaper than standard unsecured personal loans",
          "No penalty for early repayment in some banks"
        ]
      },
      ta: {
        whatYouGet: "உங்கள் கார்டின் கிரெடிட் வரம்பின் அடிப்படையில் உங்கள் வங்கி கணக்கில் நேரடியாக பணத்தைப் பெறுங்கள். கூடுதல் ஆவணங்கள் தேவையில்லை.",
        howToUse: [
          "உங்கள் வங்கியின் மொபைல் பயன்பாட்டில் உள்நுழையவும்",
          "'Instant Loan' அல்லது 'Loan on Card' சலுகையைத் தேடுங்கள்",
          "தொகை மற்றும் திருப்பிச் செலுத்தும் காலத்தைத் தேர்ந்தெடுக்கவும் (1-4 ஆண்டுகள்)",
          "பணம் உடனடியாக உங்கள் கணக்கில் வரவு வைக்கப்படும்"
        ],
        limitations: [
          "வட்டி விகிதங்கள் பொருந்தும் (பொதுவாக 12-16%)",
          "திருப்பிச் செலுத்தும் தொகை உங்கள் மாதாந்திர பில்லில் சேர்க்கப்படும்",
          "கடன் தொகையில் 1-2% செயலாக்கக் கட்டணம்",
          "உங்கள் கிரெடிட் ஸ்கோரைப் பொறுத்தது"
        ],
        proTips: [
          "அவசர செலவுகள் அல்லது கடன் ஒருங்கிணைப்புக்கு பயன்படுத்தவும்",
          "சாதாரண தனிநபர் கடன்களை விட மலிவானது",
          "சில வங்கிகளில் முன்கூட்டியே கடனை அடைக்க அபராதம் இல்லை"
        ]
      },
      hi: {
        whatYouGet: "अपने कार्ड की क्रेडिट सीमा के आधार पर सीधे अपने बैंक खाते में नकद प्राप्त करें। किसी अतिरिक्त दस्तावेज़ की आवश्यकता नहीं है।",
        howToUse: [
          "अपने बैंक के मोबाइल ऐप में लॉगिन करें",
          "'Instant Loan' या 'Loan on Card' ऑफ़र देखें",
          "राशि और पुनर्भुगतान अवधि (1-4 वर्ष) चुनें",
          "पैसा तुरंत आपके लिंक किए गए खाते में जमा हो जाता है"
        ],
        limitations: [
          "ब्याज दरें लागू होती हैं (आमतौर पर 12-16%)",
          "पुनर्भुगतान आपके मासिक क्रेडिट कार्ड बिल में जोड़ा जाता है",
          "ऋण राशि का 1-2% प्रोसेसिंग शुल्क",
          "आपके व्यक्तिगत क्रेडिट स्कोर पर निर्भर करता है"
        ],
        proTips: [
          "आपातकालीन खर्चों या ऋण समेकन के लिए उपयोग करें",
          "मानक व्यक्तिगत ऋणों की तुलना में सस्ता",
          "कुछ बैंकों में समय से पहले पुनर्भुगतान के लिए कोई दंड नहीं"
        ]
      }
    },
    monetaryValue: 5000,
    usageFrequency: "one-time",
    activationMethod: "manual_enrollment",
    relevanceTriggers: {
      locations: ["any"],
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
          "निश्चित करें कि घटना के मामले में, बैंक को 90 दिनों के भीतर सूचित किया जाना चाहिए",
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
