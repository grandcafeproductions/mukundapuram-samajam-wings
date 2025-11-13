import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ml';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Mukundapuram Society',
    'hero.subtitle': 'Your Trusted Financial Partner',
    'hero.description': 'Empowering communities with reliable financial services including gold loans, kuri schemes, and personal loans. Your prosperity is our mission.',
    'hero.cta': 'Explore Services',
    'hero.contact': 'Contact Us',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive financial solutions tailored to your needs',
    'services.gold.title': 'Gold Loan',
    'services.gold.description': 'Quick and hassle-free gold loans with competitive interest rates. Get instant cash against your gold ornaments with flexible repayment options.',
    'services.kuri.title': 'Kuri',
    'services.kuri.description': 'Traditional savings scheme with guaranteed returns. Join our kuri plans and build your wealth systematically with monthly contributions.',
    'services.loans.title': 'Other Loans',
    'services.loans.description': 'Personal loans, business loans, and more financial solutions. We offer customized loan products to meet your diverse financial requirements.',
    'services.learn': 'Learn More',
    
    // About
    'about.title': 'About Us',
    'about.subtitle': 'Serving the community with trust and integrity',
    'about.description': 'Mukundapuram Society has been a cornerstone of financial services in our community for years. We are committed to providing accessible, transparent, and reliable financial solutions to help our members achieve their dreams and secure their future.',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'To empower every member with financial security and prosperity through innovative and trustworthy services.',
    'about.values.title': 'Our Values',
    'about.values.description': 'Trust, transparency, and community welfare are at the heart of everything we do.',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'We\'re here to help with all your financial needs',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Business Hours',
    'contact.hours.value': 'Mon - Sat: 9:00 AM - 5:00 PM',
    
    // Footer
    'footer.rights': '© 2024 Mukundapuram Society. All rights reserved.',
    'footer.tagline': 'Your trusted partner in financial growth',
  },
  ml: {
    // Navigation
    'nav.home': 'ഹോം',
    'nav.services': 'സേവനങ്ങൾ',
    'nav.about': 'ഞങ്ങളെക്കുറിച്ച്',
    'nav.contact': 'ബന്ധപ്പെടുക',
    
    // Hero Section
    'hero.title': 'മുകുന്ദപുരം സൊസൈറ്റി',
    'hero.subtitle': 'നിങ്ങളുടെ വിശ്വസ്ത സാമ്പത്തിക പങ്കാളി',
    'hero.description': 'സ്വർണ്ണ വായ്പകൾ, കുറി സ്കീമുകൾ, വ്യക്തിഗത വായ്പകൾ എന്നിവയുൾപ്പെടെ വിശ്വസനീയമായ സാമ്പത്തിക സേവനങ്ങളിലൂടെ സമൂഹങ്ങളെ ശാക്തീകരിക്കുന്നു. നിങ്ങളുടെ അഭിവൃദ്ധി ഞങ്ങളുടെ ലക്ഷ്യമാണ്.',
    'hero.cta': 'സേവനങ്ങൾ കാണുക',
    'hero.contact': 'ബന്ധപ്പെടുക',
    
    // Services
    'services.title': 'ഞങ്ങളുടെ സേവനങ്ങൾ',
    'services.subtitle': 'നിങ്ങളുടെ ആവശ്യങ്ങൾക്ക് അനുയോജ്യമായ സമഗ്ര സാമ്പത്തിക പരിഹാരങ്ങൾ',
    'services.gold.title': 'സ്വർണ്ണ വായ്പ',
    'services.gold.description': 'മത്സരപരമായ പലിശ നിരക്കിൽ വേഗത്തിലുള്ളതും എളുപ്പമുള്ളതുമായ സ്വർണ്ണ വായ്പകൾ. നിങ്ങളുടെ സ്വർണ്ണാഭരണങ്ങൾക്കെതിരെ ഉടനടി പണം ലഭിക്കുകയും വഴക്കമുള്ള തിരിച്ചടവ് ഓപ്ഷനുകൾ ലഭിക്കുകയും ചെയ്യുക.',
    'services.kuri.title': 'കുറി',
    'services.kuri.description': 'ഉറപ്പായ വരുമാനമുള്ള പരമ്പരാഗത സേവിംഗ് സ്കീം. ഞങ്ങളുടെ കുറി പ്ലാനുകളിൽ ചേരുകയും പ്രതിമാസ സംഭാവനകളോടെ വ്യവസ്ഥാപിതമായി നിങ്ങളുടെ സമ്പത്ത് വർദ്ധിപ്പിക്കുകയും ചെയ്യുക.',
    'services.loans.title': 'മറ്റ് വായ്പകൾ',
    'services.loans.description': 'വ്യക്തിഗത വായ്പകൾ, ബിസിനസ് വായ്പകൾ, കൂടുതൽ സാമ്പത്തിക പരിഹാരങ്ങൾ. നിങ്ങളുടെ വൈവിധ്യമാർന്ന സാമ്പത്തിക ആവശ്യങ്ങൾ നിറവേറ്റുന്നതിനായി ഞങ്ങൾ കസ്റ്റമൈസ്ഡ് വായ്പ ഉൽപ്പന്നങ്ങൾ വാഗ്ദാനം ചെയ്യുന്നു.',
    'services.learn': 'കൂടുതലറിയുക',
    
    // About
    'about.title': 'ഞങ്ങളെക്കുറിച്ച്',
    'about.subtitle': 'വിശ്വാസത്തോടും സമഗ്രതയോടും കൂടി സമൂഹത്തെ സേവിക്കുന്നു',
    'about.description': 'വർഷങ്ങളായി ഞങ്ങളുടെ സമൂഹത്തിലെ സാമ്പത്തിക സേവനങ്ങളുടെ അടിസ്ഥാനശിലയാണ് മുകുന്ദപുരം സൊസൈറ്റി. ഞങ്ങളുടെ അംഗങ്ങളെ അവരുടെ സ്വപ്നങ്ങൾ നേടാനും അവരുടെ ഭാവി സുരക്ഷിതമാക്കാനും സഹായിക്കുന്നതിന് ആക്സസ്സബിൾ, സുതാര്യമായ, വിശ്വസനീയമായ സാമ്പത്തിക പരിഹാരങ്ങൾ നൽകാൻ ഞങ്ങൾ പ്രതിജ്ഞാബദ്ധരാണ്.',
    'about.mission.title': 'ഞങ്ങളുടെ ദൗത്യം',
    'about.mission.description': 'നൂതനവും വിശ്വാസയോഗ്യവുമായ സേവനങ്ങളിലൂടെ ഓരോ അംഗത്തെയും സാമ്പത്തിക സുരക്ഷയും അഭിവൃദ്ധിയും നൽകി ശാക്തീകരിക്കുക.',
    'about.values.title': 'ഞങ്ങളുടെ മൂല്യങ്ങൾ',
    'about.values.description': 'വിശ്വാസം, സുതാര്യത, സമൂഹക്ഷേമം എന്നിവയാണ് ഞങ്ങൾ ചെയ്യുന്ന എല്ലാ കാര്യങ്ങളുടെയും ഹൃദയത്തിൽ.',
    
    // Contact
    'contact.title': 'ബന്ധപ്പെടുക',
    'contact.subtitle': 'നിങ്ങളുടെ എല്ലാ സാമ്പത്തിക ആവശ്യങ്ങളിലും സഹായിക്കാൻ ഞങ്ങൾ ഇവിടെയുണ്ട്',
    'contact.address': 'വിലാസം',
    'contact.phone': 'ഫോൺ',
    'contact.email': 'ഇമെയിൽ',
    'contact.hours': 'പ്രവൃത്തി സമയം',
    'contact.hours.value': 'തിങ്കൾ - ശനി: രാവിലെ 9:00 - വൈകുന്നേരം 5:00',
    
    // Footer
    'footer.rights': '© 2024 മുകുന്ദപുരം സൊസൈറ്റി. എല്ലാ അവകാശങ്ങളും സംരക്ഷിച്ചിരിക്കുന്നു.',
    'footer.tagline': 'സാമ്പത്തിക വളർച്ചയിൽ നിങ്ങളുടെ വിശ്വസ്ത പങ്കാളി',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ml' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
