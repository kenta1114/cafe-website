import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Visit Us
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            We'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-amber-600" />
                <span className="ml-3 text-gray-700">
                  123 GAIKANAYAMA Street, Tokyo, Japan
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-amber-600" />
                <span className="ml-3 text-gray-700">+81 123-456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-amber-600" />
                <span className="ml-3 text-gray-700">contact@jmtcafe.com</span>
              </div>
            </div>
          </div>

          <div className="h-96 rounded-lg overflow-hidden">
            <iframe
              title="JMT Cafe Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754723766!2d139.7100!3d35.6528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDM5JzEwLjEiTiAxMznCsDQyJzM2LjAiRQ!5e0!3m2!1sen!2sjp!4v1620000000000!5m2!1sen!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}