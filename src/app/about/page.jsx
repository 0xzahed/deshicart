import {
  FiCheckCircle,
  FiTruck,
  FiShield,
  FiHeart,
  FiUsers,
  FiAward,
} from "react-icons/fi";
import Image from "next/image";

export default function AboutPage() {
  const features = [
    {
      icon: FiCheckCircle,
      title: "100% Organic",
      description: "All our products are certified organic and chemical-free",
    },
    {
      icon: FiTruck,
      title: "Fast Delivery",
      description: "Same-day delivery available in select areas",
    },
    {
      icon: FiShield,
      title: "Quality Assured",
      description: "We guarantee the freshness and quality of every product",
    },
    {
      icon: FiHeart,
      title: "Customer First",
      description: "Your satisfaction is our top priority",
    },
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "1000+", label: "Products" },
    { number: "100+", label: "Farmers" },
    { number: "50+", label: "Cities Served" },
  ];

  const team = [
    { name: "Farm Partners", count: "100+", icon: FiUsers },
    { name: "Quality Experts", count: "50+", icon: FiAward },
    { name: "Delivery Partners", count: "200+", icon: FiTruck },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-primary to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About DeshiCart
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Bringing farm-fresh products to your doorstep
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              DeshiCart was founded with a simple mission: to connect local
              farmers directly with consumers, ensuring everyone has access to
              fresh, organic products while supporting local agriculture.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              What started as a small initiative has grown into a trusted
              platform serving thousands of families across the country. We work
              directly with over 100 local farmers and producers to bring you
              the freshest products at fair prices.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every product on DeshiCart is carefully selected and
              quality-checked to ensure you get nothing but the best. We believe
              in transparency, sustainability, and building lasting
              relationships with our customers and farmers.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1488459716781-31db52582fe9"
              alt="Fresh vegetables"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-linear-to-r from-primary to-green-600 rounded-2xl p-8 md:p-12 text-white mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, index) => {
              const Icon = member.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-8 text-center"
                >
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-4xl text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {member.count}
                  </h3>
                  <p className="text-gray-700 font-medium">{member.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Quality First
              </h3>
              <p className="text-gray-700">
                We never compromise on quality. Every product is carefully
                inspected to meet our high standards.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Sustainability
              </h3>
              <p className="text-gray-700">
                We promote sustainable farming practices and eco-friendly
                packaging to protect our environment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Community Support
              </h3>
              <p className="text-gray-700">
                We empower local farmers and support community development
                through fair trade practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
