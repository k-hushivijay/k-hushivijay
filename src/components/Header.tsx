
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="py-4 px-4 md:px-6 border-b sticky top-0 bg-background/95 backdrop-blur-sm z-50">
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">Soft<span className="text-coral-600">Sell</span></span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#why-choose-us" className="text-foreground hover:text-primary transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button>Get Started</Button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-background border-b z-50 animate-slide-in-right">
          <nav className="container max-w-7xl mx-auto py-4 px-4">
            <ul className="flex flex-col space-y-4">
              <li><a href="#how-it-works" className="block py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>How It Works</a></li>
              <li><a href="#why-choose-us" className="block py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Why Choose Us</a></li>
              <li><a href="#testimonials" className="block py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonials</a></li>
              <li><a href="#contact" className="block py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            </ul>
            <div className="mt-4">
              <Button className="w-full">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
