import { Coffee, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-8">
            <Coffee className="h-8 w-8 text-amber-500" />
            <span className="ml-2 text-xl font-bold">JMT CAFE</span>
          </div>

          <div className="flex space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
          </div>

          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} JMT CAFE. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}