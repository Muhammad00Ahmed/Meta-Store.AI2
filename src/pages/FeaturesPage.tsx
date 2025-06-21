import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Package, 
  BarChart3, 
  CreditCard, 
  Truck, 
  Search, 
  Users, 
  Shield,
  Zap,
  Smartphone,
  Palette,
  Settings
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

const FeaturesPage: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Domain & Hosting',
      description: 'Free custom domain and reliable hosting with 99.9% uptime guarantee',
      details: ['Custom domain registration', 'SSL certificate included', 'Global CDN', '24/7 monitoring']
    },
    {
      icon: Package,
      title: 'Catalog Management',
      description: 'Easily manage your products with bulk import/export capabilities',
      details: ['Unlimited products', 'Bulk operations', 'Product variants', 'Category management']
    },
    {
      icon: BarChart3,
      title: 'Inventory Tools',
      description: 'Track stock levels and get automated low-stock alerts',
      details: ['Real-time tracking', 'Low stock alerts', 'Supplier management', 'Purchase orders']
    },
    {
      icon: CreditCard,
      title: 'Payment Gateways',
      description: 'Accept payments through multiple secure payment methods',
      details: ['Stripe integration', 'PayPal support', 'Local payment methods', 'Mobile payments']
    },
    {
      icon: Truck,
      title: 'Shipping Integration',
      description: 'Connect with major shipping providers for seamless delivery',
      details: ['Multiple carriers', 'Rate calculation', 'Label printing', 'Tracking updates']
    },
    {
      icon: Search,
      title: 'SEO Tools',
      description: 'Built-in SEO optimization to help customers find your store',
      details: ['Meta tag optimization', 'Sitemap generation', 'Schema markup', 'Performance monitoring']
    },
    {
      icon: Users,
      title: 'Staff Permissions',
      description: 'Manage team access with role-based permissions',
      details: ['Role management', 'Access control', 'Activity logging', 'Team collaboration']
    },
    {
      icon: BarChart3,
      title: 'Real-time Reports',
      description: 'Comprehensive analytics and insights for your business',
      details: ['Sales analytics', 'Customer insights', 'Performance metrics', 'Custom reports']
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive',
      description: 'Your store looks perfect on all devices automatically',
      details: ['Mobile-first design', 'Touch-friendly interface', 'App-like experience', 'Fast loading']
    },
    {
      icon: Palette,
      title: 'Theme Customization',
      description: 'Customize your store design without any coding knowledge',
      details: ['Visual editor', 'Color schemes', 'Font selection', 'Layout options']
    },
    {
      icon: Shield,
      title: 'Security & Backup',
      description: 'Enterprise-grade security with automatic backups',
      details: ['SSL encryption', 'Daily backups', 'Fraud protection', 'PCI compliance']
    },
    {
      icon: Settings,
      title: 'API & Integrations',
      description: 'Connect with your favorite tools and services',
      details: ['REST API', 'Webhook support', 'Third-party apps', 'Custom integrations']
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to build, manage, and grow your online store. 
            From basic setup to advanced analytics, we've got you covered.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard hover className="p-8 h-full group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-500 mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary-500 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {feature.description}
                </p>

                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mr-3" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-primary-500 font-medium hover:text-primary-600 transition-colors">
                    Learn more →
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <GlassCard className="p-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">
              Ready to explore all features?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your free trial and experience the full power of MetaStore.ai
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glow-button text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="glass-button text-lg px-8 py-4">
                Schedule Demo
              </button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesPage;