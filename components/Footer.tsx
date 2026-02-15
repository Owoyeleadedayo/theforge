import { Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 py-8 border-t border-border">
      <div className="max-w-5xl mx-auto text-center space-y-3">
        <p className="text-lg font-semibold text-foreground font-sans">Stay Connected</p>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://instagram.com/boyeoloyede"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/boyeoloyede/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://youtube.com/@boyeoloyede"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5" />
          </a>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <p>Your information is safe. You can unsubscribe anytime.</p>
          <p>©{year} Boye Oloyede / ONEFORGE / HUPO School of Strategy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
