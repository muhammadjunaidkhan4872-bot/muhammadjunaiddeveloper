// ========================================
// INITIALIZE AOS ANIMATION
// ========================================
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-in-out'
});

// ========================================
// THEME TOGGLE (DARK/LIGHT MODE)
// ========================================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
}

// Theme toggle functionality
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        // Save preference
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });
}

// ========================================
// MULTILINGUAL SUPPORT
// ========================================
const translations = {
    en: {
        home: "Home",
        about: "About",
        skills: "Skills",
        services: "Services",
        portfolio: "Portfolio",
        testimonials: "Testimonials",
        contact: "Contact",
        hero_badge: "Freelance Web Developer",
        hero_highlight: "Experiences",
        hero_desc: "I'm Muhammad Junaid, a passionate web developer helping businesses build powerful, fast, and SEO-optimized websites. Available for freelance work worldwide.",
        hire_btn: "Hire Me",
        work_btn: "View Work",
        stat_projects: "Projects Done",
        stat_clients: "Happy Clients",
        stat_support: "Support",
        available: "Available for work",
        about_badge: "Get to Know Me",
        about_title: "About Me",
        about_heading: "I'm Muhammad Junaid, a Freelance Web Developer Based in San Francisco",
        about_desc1: "With over 5 years of experience in the web development industry, I've helped startups, agencies, and enterprises build stunning digital solutions. My expertise spans from frontend development to WordPress customization and SEO optimization.",
        about_desc2: "I'm passionate about creating websites that not only look beautiful but also deliver measurable results. My approach combines technical excellence with creative design thinking to produce exceptional outcomes for my clients on platforms like Fiverr and Upwork.",
        name_label: "Name:",
        email_label: "Email:",
        location_label: "Location:",
        availability_label: "Availability:",
        talk_btn: "Let's Talk",
        skills_badge: "Technical Expertise",
        skills_title: "My Skills",
        services_badge: "What I Offer",
        services_title: "Premium Services",
        service1_title: "Web Development",
        service1_desc: "Custom responsive websites built with modern technologies, ensuring fast loading times and seamless user experience.",
        service2_title: "WordPress Solutions",
        service2_desc: "Custom WordPress themes, plugin development, and complete website management for business websites and blogs.",
        service3_title: "Responsive Design",
        service3_desc: "Mobile-first designs that look perfect on all devices - from smartphones to large desktop screens.",
        service4_title: "SEO Optimization",
        service4_desc: "On-page SEO, speed optimization, and technical SEO to improve your website's search engine rankings.",
        service5_title: "E-commerce Development",
        service5_desc: "Secure and scalable online stores with payment integration, inventory management, and analytics.",
        service6_title: "Maintenance & Support",
        service6_desc: "Regular updates, backups, security monitoring, and technical support for your peace of mind.",
        portfolio_badge: "Recent Projects",
        portfolio_title: "Portfolio",
        port1_title: "Fintech Dashboard",
        port1_cat: "React, Bootstrap, Charts",
        port2_title: "Eco Commerce Store",
        port2_cat: "WooCommerce, SEO",
        port3_title: "Travel Blog Platform",
        port3_cat: "WordPress, Custom Theme",
        port4_title: "Real Estate Platform",
        port4_cat: "React, Maps API",
        port5_title: "Restaurant Website",
        port5_cat: "HTML5, CSS3, JS",
        port6_title: "Creative Agency",
        port6_cat: "Bootstrap 5, AOS",
        view_btn: "View Project",
        testimonials_badge: "Client Feedback",
        testimonials_title: "What Clients Say",
        testimonial1: "Junaid delivered an outstanding website for our startup. His attention to detail and technical expertise are exceptional. Will definitely hire again!",
        testimonial2: "Working with Junaid was a game-changer for our business. He optimized our site speed and SEO, resulting in a 50% traffic increase. Highly recommend!",
        testimonial3: "Junaid is a true professional. He understood our vision perfectly and delivered a stunning WordPress site on time and within budget. 5 stars!",
        client1_title: "Founder, TechStart",
        client2_title: "E-commerce Owner",
        client3_title: "Marketing Director",
        contact_badge: "Get In Touch",
        contact_title: "Let's Work Together",
        visit_label: "Visit Me",
        email_label2: "Email Me",
        call_label: "Call Me",
        name_placeholder: "Your Name",
        email_placeholder: "Your Email",
        subject_placeholder: "Subject",
        message_placeholder: "Your Message",
        send_btn: "Send Message",
        footer_desc: "Freelance Web Developer crafting premium digital experiences for global clients.",
        copyright: "All rights reserved. Built for global success on Fiverr & Upwork."
    },
    ur: {
        home: "ہوم",
        about: "میرے بارے میں",
        skills: "مہارتیں",
        services: "خدمات",
        portfolio: "پورٹ فولیو",
        testimonials: "گواہیاں",
        contact: "رابطہ کریں",
        hero_badge: "فری لانس ویب ڈویلپر",
        hero_highlight: "تجربات",
        hero_desc: "میں محمد جنید ہوں، ایک پرجوش ویب ڈویلپر جو کاروباروں کو طاقتور، تیز، اور SEO موافق ویب سائٹس بنانے میں مدد کرتا ہوں۔ دنیا بھر میں فری لانس کام کے لیے دستیاب ہوں۔",
        hire_btn: "مجھے hire کریں",
        work_btn: "کام دیکھیں",
        stat_projects: "مکمل منصوبے",
        stat_clients: "خوش گاہک",
        stat_support: "معاونت",
        available: "کام کے لیے دستیاب",
        about_badge: "مجھے جانیں",
        about_title: "میرے بارے میں",
        about_heading: "میں محمد جنید ہوں، ایک فری لانس ویب ڈویلپر جو سان فرانسسکو میں مقیم ہوں",
        about_desc1: "ویب ڈویلپمنٹ انڈسٹری میں 5 سال سے زیادہ کے تجربے کے ساتھ، میں نے startups، agencies، اور enterprises کو شاندار ڈیجیٹل حل تیار کرنے میں مدد کی ہے۔",
        about_desc2: "میں ایسی ویب سائٹس بنانے کے لیے پرجوش ہوں جو نہ صرف خوبصورت نظر آئیں بلکہ قابل پیمائش نتائج بھی دیں۔",
        name_label: "نام:",
        email_label: "ای میل:",
        location_label: "مقام:",
        availability_label: "دستیابی:",
        talk_btn: "بات کریں",
        skills_badge: "تکنیکی مہارت",
        skills_title: "میری مہارتیں",
        services_badge: "میری خدمات",
        services_title: "پریمیم خدمات",
        service1_title: "ویب ڈویلپمنٹ",
        service1_desc: "جدید ٹیکنالوجیز کے ساتھ بنائی گئی حسب ضرورت ویب سائٹس، تیز لوڈنگ اوقات اور بہتر تجربہ۔",
        service2_title: "ورڈپریس حل",
        service2_desc: "حسب ضرورت ورڈپریس تھیمز، پلگ ان ڈویلپمنٹ، اور کاروباری ویب سائٹس کا مکمل انتظام۔",
        service3_title: "ریسپانسیو ڈیزائن",
        service3_desc: "موبائل فرسٹ ڈیزائن جو تمام آلات پر بہترین نظر آتے ہیں۔",
        service4_title: "SEO اصلاح",
        service4_desc: "آن پیج SEO، رفتار کی اصلاح، اور تکنیکی SEO۔",
        service5_title: "ای کامرس ڈویلپمنٹ",
        service5_desc: "محفوظ اور توسیع پذیر آن لائن اسٹورز ادائیگی انضمام کے ساتھ۔",
        service6_title: "دیکھ بھال اور معاونت",
        service6_desc: "باقاعدہ اپ ڈیٹس، بیک اپ، سیکیورٹی مانیٹرنگ، اور تکنیکی معاونت۔",
        portfolio_badge: "حالیہ منصوبے",
        portfolio_title: "پورٹ فولیو",
        port1_title: "Fintech Dashboard",
        port1_cat: "React, Bootstrap, Charts",
        port2_title: "Eco Commerce Store",
        port2_cat: "WooCommerce, SEO",
        port3_title: "Travel Blog Platform",
        port3_cat: "WordPress, Custom Theme",
        port4_title: "Real Estate Platform",
        port4_cat: "React, Maps API",
        port5_title: "Restaurant Website",
        port5_cat: "HTML5, CSS3, JS",
        port6_title: "Creative Agency",
        port6_cat: "Bootstrap 5, AOS",
        view_btn: "منصوبہ دیکھیں",
        testimonials_badge: "گاہکوں کے تجربات",
        testimonials_title: "گاہک کیا کہتے ہیں",
        testimonial1: "جنید نے ہمارے startup کے لیے شاندار ویب سائٹ فراہم کی۔ ان کی تفصیلات پر توجہ اور تکنیکی مہارت غیر معمولی ہے۔",
        testimonial2: "جنید کے ساتھ کام کرنا ہمارے کاروبار کے لیے گیم چینجر تھا۔ انہوں نے ہماری سائٹ کی رفتار اور SEO کو بہتر بنایا۔",
        testimonial3: "جنید ایک حقیقی پیشہ ور ہیں۔ انہوں نے ہمارے وژن کو مکمل طور پر سمجھا اور وقت پر شاندار ویب سائٹ فراہم کی۔",
        client1_title: "بانی، ٹیک سٹارٹ",
        client2_title: "ای کامرس مالک",
        client3_title: "مارکیٹنگ ڈائریکٹر",
        contact_badge: "رابطہ کریں",
        contact_title: "آئیے مل کر کام کریں",
        visit_label: "ملاحظہ کریں",
        email_label2: "ای میل کریں",
        call_label: "فون کریں",
        name_placeholder: "آپ کا نام",
        email_placeholder: "آپ کی ای میل",
        subject_placeholder: "موضوع",
        message_placeholder: "آپ کا پیغام",
        send_btn: "پیغام بھیجیں",
        footer_desc: "فری لانس ویب ڈویلپر عالمی گاہکوں کے لیے پریمیم ڈیجیٹل تجربات تیار کرتا ہے۔",
        copyright: "جملہ حقوق محفوظ ہیں۔ Fiverr اور Upwork پر عالمی کامیابی کے لیے بنایا گیا۔"
    },
    hi: {
        home: "होम",
        about: "मेरे बारे में",
        skills: "कौशल",
        services: "सेवाएं",
        portfolio: "पोर्टफोलियो",
        testimonials: "प्रशंसापत्र",
        contact: "संपर्क करें",
        hero_badge: "फ्रीलांस वेब डेवलपर",
        hero_highlight: "अनुभव",
        hero_desc: "मैं मुहम्मद जुनैद, एक भावुक वेब डेवलपर जो व्यवसायों को शक्तिशाली, तेज़ और SEO-अनुकूलित वेबसाइट बनाने में मदद करता हूं। दुनिया भर में फ्रीलांस काम के लिए उपलब्ध।",
        hire_btn: "मुझे काम पर रखें",
        work_btn: "काम देखें",
        stat_projects: "पूर्ण परियोजनाएं",
        stat_clients: "संतुष्ट ग्राहक",
        stat_support: "सहायता",
        available: "काम के लिए उपलब्ध",
        about_badge: "मुझे जानें",
        about_title: "मेरे बारे में",
        about_heading: "मैं मुहम्मद जुनैद सैन फ्रांसिस्को में स्थित एक फ्रीलांस वेब डेवलपर",
        about_desc1: "वेब विकास उद्योग में 5 वर्षों से अधिक के अनुभव के साथ, मैंने स्टार्टअप, एजेंसियों और उद्यमों को शानदार डिजिटल समाधान बनाने में मदद की है।",
        about_desc2: "मैं ऐसी वेबसाइट बनाने के लिए भावुक हूं जो न केवल सुंदर दिखें बल्कि मापने योग्य परिणाम भी दें।",
        name_label: "नाम:",
        email_label: "ईमेल:",
        location_label: "स्थान:",
        availability_label: "उपलब्धता:",
        talk_btn: "बात करें",
        skills_badge: "तकनीकी विशेषज्ञता",
        skills_title: "मेरे कौशल",
        services_badge: "मेरी सेवाएं",
        services_title: "प्रीमियम सेवाएं",
        service1_title: "वेब विकास",
        service1_desc: "आधुनिक तकनीकों के साथ निर्मित कस्टम प्रतिक्रियाशील वेबसाइटें।",
        service2_title: "वर्डप्रेस समाधान",
        service2_desc: "कस्टम वर्डप्रेस थीम, प्लगइन विकास, और व्यावसायिक वेबसाइटों का पूर्ण प्रबंधन।",
        service3_title: "प्रतिक्रियाशील डिजाइन",
        service3_desc: "मोबाइल-प्रथम डिजाइन जो सभी उपकरणों पर सही दिखते हैं।",
        service4_title: "एसईओ अनुकूलन",
        service4_desc: "ऑन-पेज एसईओ, गति अनुकूलन, और तकनीकी एसईओ।",
        service5_title: "ई-कॉमर्स विकास",
        service5_desc: "भुगतान एकीकरण के साथ सुरक्षित और स्केलेबल ऑनलाइन स्टोर।",
        service6_title: "रखरखाव और सहायता",
        service6_desc: "नियमित अपडेट, बैकअप, सुरक्षा निगरानी, और तकनीकी सहायता।",
        portfolio_badge: "हालिया परियोजनाएं",
        portfolio_title: "पोर्टफोलियो",
        port1_title: "Fintech Dashboard",
        port1_cat: "React, Bootstrap, Charts",
        port2_title: "Eco Commerce Store",
        port2_cat: "WooCommerce, SEO",
        port3_title: "Travel Blog Platform",
        port3_cat: "WordPress, Custom Theme",
        port4_title: "Real Estate Platform",
        port4_cat: "React, Maps API",
        port5_title: "Restaurant Website",
        port5_cat: "HTML5, CSS3, JS",
        port6_title: "Creative Agency",
        port6_cat: "Bootstrap 5, AOS",
        view_btn: "परियोजना देखें",
        testimonials_badge: "ग्राहकों की प्रतिक्रिया",
        testimonials_title: "ग्राहक क्या कहते हैं",
        testimonial1: "जुनैद हमारे स्टार्टअप के लिए एक उत्कृष्ट वेबसाइट दी। विवरण और तकनीकी विशेषज्ञता पर उनका ध्यान असाधारण है।",
        testimonial2: "जुनैद के साथ काम करना हमारे व्यवसाय के लिए गेम-चेंजर था। उन्होंने हमारी साइट की गति और एसईओ को अनुकूलित किया।",
        testimonial3: "जुनैद एक सच्चे पेशेवर हैं। उन्होंने हमारे दृष्टिकोण को पूरी तरह से समझा और समय पर शानदार वेबसाइट दी।",
        client1_title: "संस्थापक, टेकस्टार्ट",
        client2_title: "ई-कॉमर्स मालिक",
        client3_title: "मार्केटिंग निदेशक",
        contact_badge: "संपर्क करें",
        contact_title: "आइए साथ काम करें",
        visit_label: "मुझसे मिलें",
        email_label2: "मुझे ईमेल करें",
        call_label: "मुझे कॉल करें",
        name_placeholder: "आपका नाम",
        email_placeholder: "आपका ईमेल",
        subject_placeholder: "विषय",
        message_placeholder: "आपका संदेश",
        send_btn: "संदेश भेजें",
        footer_desc: "फ्रीलांस वेब डेवलपर वैश्विक ग्राहकों के लिए प्रीमियम डिजिटल अनुभव तैयार करता है।",
        copyright: "सर्वाधिकार सुरक्षित। Fiverr और Upwork पर वैश्विक सफलता के लिए निर्मित।"
    },
    ar: {
        home: "الرئيسية",
        about: "عني",
        skills: "المهارات",
        services: "الخدمات",
        portfolio: "الأعمال",
        testimonials: "الشهادات",
        contact: "اتصل",
        hero_badge: "مطور ويب مستقل",
        hero_highlight: "الخبرات",
        hero_desc: "محمد جنيد تشين، مطور ويب شغوف يساعد الشركات في بناء مواقع ويب قوية وسريعة ومحسنة لمحركات البحث. متاح للعمل الحر في جميع أنحاء العالم.",
        hire_btn: "وظفني",
        work_btn: "شاهد الأعمال",
        stat_projects: "المشاريع المنجزة",
        stat_clients: "العملاء السعداء",
        stat_support: "الدعم",
        available: "متاح للعمل",
        about_badge: "تعرف علي",
        about_title: "عني",
        about_heading: "أمحمد جنيد تشين، مطور ويب مستقل مقيم في سان فرانسيسكو",
        about_desc1: "مع أكثر من 5 سنوات من الخبرة في صناعة تطوير الويب، ساعدت الشركات الناشئة والوكالات والمؤسسات في بناء حلول رقمية مذهلة.",
        about_desc2: "أنا شغوف بإنشاء مواقع ويب لا تبدو جميلة فحسب، بل تقدم نتائج قابلة للقياس.",
        name_label: "الاسم:",
        email_label: "البريد الإلكتروني:",
        location_label: "الموقع:",
        availability_label: "التوفر:",
        talk_btn: "دعنا نتحدث",
        skills_badge: "الخبرة التقنية",
        skills_title: "مهاراتي",
        services_badge: "ما أقدمه",
        services_title: "خدمات متميزة",
        service1_title: "تطوير الويب",
        service1_desc: "مواقع ويب مخصصة ومستجيبة تم إنشاؤها بتقنيات حديثة، مما يضمن أوقات تحميل سريعة وتجربة مستخدم سلسة.",
        service2_title: "حلول ووردبريس",
        service2_desc: "قوالب ووردبريس مخصصة، وتطوير الإضافات، وإدارة كاملة لمواقع الويب التجارية والمدونات.",
        service3_title: "تصميم متجاوب",
        service3_desc: "تصاميم الهواتف المحمولة أولاً التي تبدو مثالية على جميع الأجهزة.",
        service4_title: "تحسين محركات البحث",
        service4_desc: "تحسين محركات البحث على الصفحة، وتحسين السرعة، وتحسين محركات البحث التقني.",
        service5_title: "تطوير التجارة الإلكترونية",
        service5_desc: "متاجر عبر الإنترنت آمنة وقابلة للتطوير مع تكامل الدفع.",
        service6_title: "الصيانة والدعم",
        service6_desc: "تحديثات منتظمة ونسخ احتياطية ومراقبة أمنية ودعم فني.",
        portfolio_badge: "المشاريع الحديثة",
        portfolio_title: "أعمالي",
        port1_title: "لوحة تحكم مالية",
        port1_cat: "React, Bootstrap, Charts",
        port2_title: "متجر إيكو التجاري",
        port2_cat: "WooCommerce, SEO",
        port3_title: "منصة مدونة السفر",
        port3_cat: "WordPress, Custom Theme",
        port4_title: "منصة العقارات",
        port4_cat: "React, Maps API",
        port5_title: "موقع مطعم",
        port5_cat: "HTML5, CSS3, JS",
        port6_title: "وكالة إبداعية",
        port6_cat: "Bootstrap 5, AOS",
        view_btn: "عرض المشروع",
        testimonials_badge: "ملاحظات العملاء",
        testimonials_title: "ماذا يقول العملاء",
        testimonial1: "قدم جنيد موقع ويب متميز لشركتنا الناشئة. اهتمامه بالتفاصيل وخبرته التقنية استثنائية.",
        testimonial2: "كان العمل مع جنيد تغييرًا جذريًا لأعمالنا. قام بتحسين سرعة موقعنا وتحسين محركات البحث.",
        testimonial3: "جنيد محترف حقيقي. لقد فهم رؤيتنا تمامًا وقدم موقع ويب رائع في الوقت المحدد.",
        client1_title: "مؤسس، تك ستارت",
        client2_title: "مالك التجارة الإلكترونية",
        client3_title: "مدير التسويق",
        contact_badge: "تواصل معي",
        contact_title: "دعنا نعمل معًا",
        visit_label: "زرني",
        email_label2: "راسلني",
        call_label: "اتصل بي",
        name_placeholder: "اسمك",
        email_placeholder: "بريدك الإلكتروني",
        subject_placeholder: "الموضوع",
        message_placeholder: "رسالتك",
        send_btn: "إرسال الرسالة",
        footer_desc: "مطور ويب مستقل يصنع تجارب رقمية متميزة للعملاء العالميين.",
        copyright: "جميع الحقوق محفوظة. تم بناؤه من أجل النجاح العالمي على Fiverr و Upwork."
    }
};

let currentLang = localStorage.getItem('language') || 'en';

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all elements with data-trans attribute
    document.querySelectorAll('[data-trans]').forEach(element => {
        const key = element.getAttribute('data-trans');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                const placeholderKey = element.getAttribute('data-trans-placeholder');
                if (placeholderKey && translations[lang][placeholderKey]) {
                    element.placeholder = translations[lang][placeholderKey];
                } else if (translations[lang][key]) {
                    element.placeholder = translations[lang][key];
                }
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Update placeholder attributes
    document.querySelectorAll('[data-trans-placeholder]').forEach(element => {
        const key = element.getAttribute('data-trans-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Set RTL for Arabic and Urdu
    if (lang === 'ar' || lang === 'ur') {
        document.body.setAttribute('dir', 'rtl');
    } else {
        document.body.setAttribute('dir', 'ltr');
    }
}

// Language selector event listeners
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        updateLanguage(lang);
    });
});

// Initialize with saved language
updateLanguage(currentLang);

// ========================================
// STICKY NAVBAR WITH SCROLL EFFECT
// ========================================
const navbar = document.getElementById('mainNav');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ========================================
// SMOOTH SCROLLING
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const toggler = document.querySelector('.navbar-toggler');
                toggler.click();
            }
        }
    });
});

// ========================================
// CONTACT FORM HANDLING
// ========================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            showFormMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showFormMessage('Thank you! Your message has been sent successfully.', 'success');
            contactForm.reset();
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormMessage(message, type) {
    if (formMessage) {
        formMessage.innerHTML = `<div class="alert alert-${type === 'success' ? 'success' : 'danger'}">${message}</div>`;
        setTimeout(() => {
            formMessage.innerHTML = '';
        }, 5000);
    }
}

// ========================================
// PROGRESS BAR ANIMATION
// ========================================
function animateProgressBars() {
    const bars = document.querySelectorAll('.progress-bar');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const targetWidth = bar.getAttribute('data-width');

                bar.style.width = targetWidth;

                observer.unobserve(bar); // run only once
            }
        });
    }, {
        threshold: 0.5
    });

    bars.forEach(bar => {
        observer.observe(bar);
    });
}
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    const bar = card.querySelector('.progress-bar');
    const targetWidth = bar.getAttribute('data-width');

    // hover in → show
    card.addEventListener('mouseenter', () => {
        bar.style.width = targetWidth;
    });

    // hover out → hide again
    card.addEventListener('mouseleave', () => {
        bar.style.width = '0%';
    });
});

window.addEventListener('load', animateProgressBars);

window.addEventListener('scroll', animateProgressBars);
window.addEventListener('load', animateProgressBars);

// ========================================
// BACK TO TOP BUTTON
// ========================================
const backToTop = document.createElement('button');
backToTop.id = 'backToTop';
backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========================================
// DYNAMIC YEAR
// ========================================
const yearElement = document.querySelector('.footer-bottom p');
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = yearElement.innerHTML.replace('2026', currentYear);
}

// ========================================
// PORTFOLIO HOVER EFFECT
// ========================================
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

console.log('Portfolio website loaded successfully!');
