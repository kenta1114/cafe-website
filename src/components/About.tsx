import { Coffee, Clock, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Welcome to JMT CAFE
          </h2>
          <div className="mt-4 text-xl text-gray-600">
            Where every cup tells a story
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Coffee className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium Coffee</h3>
            <p className="text-gray-600">
              Carefully selected beans, expertly roasted to perfection
            </p>
          </div>

          <div className="text-center p-6">
            <Clock className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
            <p className="text-gray-600">
              Mon-Fri: 7:00 - 20:00<br />
              Sat-Sun: 8:00 - 21:00
            </p>
          </div>

          <div className="text-center p-6">
            <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600">
              123 GAIKANAYAMA Street<br />
              Tokyo, Japan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}