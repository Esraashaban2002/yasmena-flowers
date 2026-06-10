const translations = {
  en: {
    // Navbar
    nav_logo: "Yasmena Flowers",
    nav_home: "Home",
    nav_products: "Products",
    nav_about: "About Us",
    nav_contact: "Contact",
    nav_cart: "Cart",

    // Home
    home_hero_title: "Welcome To Yasmena Flowers Boutique",
    home_hero_subtitle: "Where flowers speak the language of beauty",
    home_hero_btn: "Shop Now",
    home_section_title: "Our Flowers 🌸",
    home_show_more: "Show More",

    // Products
    products_title: "Our Flowers 🌸",
    products_search: "Search by name",
    products_all: "All",

    // Product Card
    card_view: "View Details",
    card_egp: "EGP",

    // Product Detail
    detail_category: "Category",
    detail_price: "Price",
    detail_add_cart: "Add To Cart",
    

    // Cart
    cart_empty_title: "Your cart is empty 🛒",
    cart_empty_sub: "Looks like you haven't added any flowers yet 🌸",
    cart_back_products: "Back to Products",
    cart_summary: "Cart Summary",
    cart_total_items: "Total Items",
    cart_total_price: "Total Price",
    cart_checkout: "Checkout",

    detail_quantity: "Quantity",
detail_remove: "Remove",

    // Checkout
    checkout_title: "Checkout 🛍️",
    checkout_name: "Full Name",
    checkout_email: "Email",
    checkout_address: "Shipping Address",
    checkout_place_order: "Place Order",
    checkout_fill_all: "Please fill all fields",
    checkout_invalid_email: "Invalid email",
    checkout_success_title: "Order Placed Successfully! ✅",
    checkout_success_sub: "Thank you for your purchase 🌸",
    checkout_back_home: "Back Home",

    // About
    about_hero_title: "Our Story 🌸",
    about_hero_sub: "Where every flower tells a story of love and beauty",
    about_story_heading: "How It All Started",
    about_story_p1: "Yasmena Flowers was born from a deep passion for the beauty of nature and the power of flowers to express what words cannot. Our journey began with a simple dream: to bring joy, love, and warmth to every doorstep through carefully crafted floral arrangements.",
    about_story_p2: "Each bouquet we create is more than just flowers — it's an emotion, a memory, a moment frozen in time. We believe that every occasion deserves something truly special, and we pour our hearts into every arrangement.",
    about_vision_title: "Our Vision",
    about_vision_text: "To be the most trusted and beloved floral brand, where every flower is a symbol of excellence and heartfelt emotion.",
    about_mission_title: "Our Mission",
    about_mission_text: "Crafting unforgettable moments through fresh, premium-quality flowers that speak the language of beauty and love.",
    about_values_title: "Our Values",
    about_values_text: "Quality, passion, and genuine care in every arrangement. We treat each order as if it were a gift to someone we love.",
    about_why_title: "Why Yasmena? 💫",
    about_why_1_title: "Fresh Daily",
    about_why_1_desc: "All our flowers are sourced fresh every single day to ensure maximum beauty and longevity.",
    about_why_2_title: "Handcrafted Designs",
    about_why_2_desc: "Each bouquet is uniquely handcrafted with artistic attention to detail and personal touch.",
    about_why_3_title: "Fast Delivery",
    about_why_3_desc: "We deliver your love on time, every time. Same-day delivery available for most orders.",
    about_why_4_title: "Made with Love",
    about_why_4_desc: "Every arrangement carries our signature touch — made with passion, wrapped with care.",

    // Contact
    contact_hero_title: "Get In Touch 🌸",
    contact_hero_sub: "We'd love to hear from you",
    contact_info_heading: "Contact Information",
    contact_phone: "Phone",
    contact_email_label: "Email",
    contact_location: "Location",
    contact_follow: "Follow Us",
    contact_form_heading: "Send Us a Message",
    contact_form_name: "Your Name",
    contact_form_email: "Email Address",
    contact_form_phone: "Phone Number",
    contact_form_message: "Message",
    contact_form_placeholder_name: "Yasmena",
    contact_form_placeholder_email: "hello@example.com",
    contact_form_placeholder_phone: "+20 100 000 0000",
    contact_form_placeholder_msg: "Tell us how we can help...",
    contact_form_submit: "Send Message 💌",
    contact_success: "🌸 Thank you! We'll get back to you soon.",

    // Footer
    footer_tagline: "Where flowers speak the language of beauty.",
    footer_quick_links: "Quick Links",
    footer_contact: "Contact",
    footer_follow: "Follow Us",
    footer_rights: "All rights reserved.",
  },

 // ===================================================
// الجزء المعدّل فقط — ar object داخل translations.js
// ===================================================

  ar: {
    // Navbar
    nav_logo: "ياسمينا فلاورز",
    nav_home: "الرئيسية",
    nav_products: "المنتجات",
    nav_about: "من نحن",           // ✏️ كانت "عن البراند" — أوضح وأكثر شيوعاً
    nav_contact: "تواصل معنا",
    nav_cart: "السلة",

    // Home
    home_hero_title: "أهلاً بك في ياسمينا فلاورز",
    home_hero_subtitle: "حيث تتكلّم الزهور بلغة الجمال",  // ✏️ "تتحدث" → "تتكلّم" أكثر شاعرية
    home_hero_btn: "تسوّقي الآن",                          // ✏️ أضفنا التأنيث لأن الجمهور نسائي غالباً
    home_section_title: "زهورنا 🌸",
    home_show_more: "عرض المزيد",

    // Products
    products_title: "زهورنا 🌸",
    products_search: "ابحثي بالاسم",    // ✏️ تأنيث
    products_all: "الكل",

    // Product Card
    card_view: "عرض التفاصيل",
    card_egp: "ج.م",

    // Product Detail
    detail_category: "الفئة",
    detail_price: "السعر",
    detail_add_cart: "أضيفي للسلة",    // ✏️ تأنيث

    // Cart
    cart_empty_title: "سلّتك فارغة 🛒",
    cart_empty_sub: "لم تضيفي أي زهور بعد 🌸",    // ✏️ تأنيث
    cart_back_products: "العودة للمنتجات",
    cart_summary: "ملخّص السلة",
    cart_total_items: "عدد المنتجات",              // ✏️ "إجمالي" → "عدد" أوضح
    cart_total_price: "الإجمالي",
    cart_checkout: "إتمام الطلب",
    detail_quantity: "الكمية",
detail_remove: "حذف",

    // Checkout
    checkout_title: "إتمام الطلب 🛍️",
    checkout_name: "الاسم الكامل",
    checkout_email: "البريد الإلكتروني",
    checkout_address: "عنوان التوصيل",             // ✏️ "الشحن" → "التوصيل" أقرب للمصري
    checkout_place_order: "تأكيد الطلب",
    checkout_fill_all: "من فضلك أكملي جميع الحقول",   // ✏️ تصحيح همزة + تأنيث
    checkout_invalid_email: "البريد الإلكتروني غير صحيح",
    checkout_success_title: "تم الطلب بنجاح! ✅",
    checkout_success_sub: "شكراً لك، سعداء بخدمتك 🌸",  // ✏️ أكثر دفئاً
    checkout_back_home: "العودة للرئيسية",

    // About
    about_hero_title: "قصتنا 🌸",
    about_hero_sub: "كل زهرة تحمل قصة حب وجمال",         // ✏️ أكثر تدفقاً
    about_story_heading: "كيف بدأت الحكاية",              // ✏️ "الحكاية" أجمل من "القصة" هنا
    about_story_p1: "وُلدت ياسمينا فلاورز من شغف حقيقي بجمال الطبيعة وسحر الزهور التي تعبّر عمّا تعجز عنه الكلمات. بدأت رحلتنا بحلم بسيط: أن نُدخل الفرح والدفء والحب إلى كل بيت من خلال تنسيقات زهرية تُصنع بعناية وحب.",
    about_story_p2: "كل باقة نصنعها هي أكثر من مجرد زهور — هي مشاعر، وذكريات، ولحظات لا تُنسى. نؤمن بأن كل مناسبة تستحق شيئاً يلمس القلب، ونضع روحنا في كل تفصيلة.",  // ✏️ صياغة أكثر إحساساً
    about_vision_title: "رؤيتنا",
    about_vision_text: "أن نكون العلامة الزهرية الأكثر ثقة ومحبة، حيث تكون كل زهرة تعبيراً عن التميّز والمشاعر الصادقة.",
    about_mission_title: "رسالتنا",
    about_mission_text: "صُنع لحظات لا تُنسى بزهور طازجة وفاخرة تتكلّم بلغة الجمال والحب.",   // ✏️ أخصر وأقوى
    about_values_title: "قيمنا",
    about_values_text: "الجودة والشغف والاهتمام الحقيقي في كل تنسيق — كل طلب نتعامل معه كأنه هدية لأعز الناس.",
    about_why_title: "ليه ياسمينا؟ 💫",               // ✏️ "لماذا" → "ليه" أكثر قرباً وعامية محببة
    about_why_1_title: "طازجة كل يوم",
    about_why_1_desc: "نختار زهورنا طازجة يومياً لتصلك بأقصى درجات الجمال والنضارة.",
    about_why_2_title: "تصاميم يدوية",
    about_why_2_desc: "كل باقة تُنسَّق يدوياً باهتمام فني دقيق ولمسة شخصية مميزة.",
    about_why_3_title: "توصيل سريع",
    about_why_3_desc: "نوصّل حبّك في الوقت المحدد دائماً، مع إمكانية التوصيل في نفس اليوم لمعظم الطلبات.",
    about_why_4_title: "مصنوع بحب",
    about_why_4_desc: "كل تنسيق يحمل بصمتنا الخاصة — يُصنع بشغف ويُلفّ باهتمام.",

    // Contact
    contact_hero_title: "تواصلي معنا 🌸",              // ✏️ تأنيث
    contact_hero_sub: "يسعدنا التواصل معك دائماً",      // ✏️ أفضل من "يسعدنا سماعك"
    contact_info_heading: "بيانات التواصل",
    contact_phone: "الهاتف",
    contact_email_label: "البريد الإلكتروني",
    contact_location: "موقعنا",
    contact_follow: "تابعينا",                          // ✏️ تأنيث
    contact_form_heading: "ابعتيلنا رسالة",             // ✏️ عامية محببة + تأنيث
    contact_form_name: "اسمك",
    contact_form_email: "البريد الإلكتروني",
    contact_form_phone: "رقم الهاتف",
    contact_form_message: "رسالتك",
    contact_form_placeholder_name: "ياسمينا",
    contact_form_placeholder_email: "hello@example.com",
    contact_form_placeholder_phone: "+20 100 000 0000",
    contact_form_placeholder_msg: "قوليلنا إزاي نقدر نساعدك...",   // ✏️ عامية مصرية محببة
    contact_form_submit: "إرسال الرسالة 💌",
    contact_success: "🌸 شكراً لك! هنرد عليك في أقرب وقت.",       // ✏️ عامية مصرية

    // Footer
    footer_tagline: "حيث تتكلّم الزهور بلغة الجمال.",
    footer_quick_links: "روابط سريعة",
    footer_contact: "تواصل",
    footer_follow: "تابعينا",
    footer_rights: "جميع الحقوق محفوظة.",
  },
};

export default translations;
