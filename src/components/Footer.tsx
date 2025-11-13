import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
              <span className="text-primary font-bold text-lg">MS</span>
            </div>
            <span className="font-bold text-xl">{t('hero.title')}</span>
          </div>
          <p className="text-primary-foreground/80 text-center">
            {t('footer.tagline')}
          </p>
          <p className="text-sm text-primary-foreground/60">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
