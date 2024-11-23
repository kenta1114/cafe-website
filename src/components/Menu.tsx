const menuItems = [
  {
    category: 'Coffee',
    items: [
      { name: 'Espresso', price: '¥380', description: 'Rich and bold single shot' },
      { name: 'Cappuccino', price: '¥480', description: 'Espresso with steamed milk and foam' },
      { name: 'Latte', price: '¥500', description: 'Smooth espresso with lots of steamed milk' }
    ]
  },
  {
    category: 'Food',
    items: [
      { name: 'Avocado Toast', price: '¥980', description: 'Sourdough bread with fresh avocado' },
      { name: 'Pancakes', price: '¥1200', description: 'Fluffy pancakes with maple syrup' },
      { name: 'Caesar Salad', price: '¥1100', description: 'Fresh romaine with house-made dressing' }
    ]
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Menu</h2>
          <p className="mt-4 text-xl text-gray-600">
            Carefully crafted dishes and beverages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {menuItems.map((section) => (
            <div key={section.category}>
              <h3 className="text-2xl font-bold text-amber-600 mb-8">
                {section.category}
              </h3>
              <div className="space-y-8">
                {section.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h4>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                    <span className="text-lg font-medium text-amber-600">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}