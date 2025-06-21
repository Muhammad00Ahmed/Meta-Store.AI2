import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Play, 
  Star, 
  Users, 
  Globe, 
  Shield,
  Zap,
  Heart,
  CheckCircle
} from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import GlassCard from '../components/GlassCard';

const HomePage: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Launch your online store in minutes.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: Globe,
      title: 'Domain & Hosting',
      description: 'Free domain and reliable hosting included'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Built-in payment processing with top security'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance for better conversions'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Expert help whenever you need it'
    }
  ];

  const themes = [
    {
      name: 'Meat Bay',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      category: 'Food & Restaurant'
    },
    {
      name: 'Kamadi',
      image: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      category: 'Fashion'
    },
    {
      name: 'Codes Dukaan',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      category: 'Technology'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      quote: 'MetaStore helped me launch my boutique online in just 2 hours. Sales increased by 300% in the first month!'
    },
    {
      name: 'Ahmed Khan',
      role: 'Restaurant Owner',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      quote: 'The food delivery integration was seamless. My customers love the smooth ordering experience.'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Artisan Seller',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      quote: 'Beautiful themes and no technical knowledge required. Perfect for creative entrepreneurs like me.'
    }
  ];

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="heading-xl mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text typing-animation font-display">
              {typedText}
            </span>
          </motion.h1>
          
          <motion.p 
            className="body-lg text-slate-600 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            No developers. No delays. No hidden costs.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/auth" className="glow-button text-xl px-10 py-5 group">
              Start for Free 
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="flex items-center space-x-3 glass-button text-xl px-10 py-5 group">
              <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Watch Demo</span>
            </button>
          </motion.div>

          <motion.div 
            className="flex items-center justify-center space-x-8 text-slate-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center space-x-2">
              <Star className="w-6 h-6 text-yellow-500 fill-current" />
              <span className="font-semibold">4.9/5 rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-blue-500" />
              <span className="font-semibold">10,000+ stores</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-6 h-6 text-red-500 fill-current" />
              <span className="font-semibold">99% satisfaction</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="heading-lg gradient-text mb-8 font-display">
            Everything you need to succeed
          </h2>
          <p className="body-lg text-slate-600 max-w-3xl mx-auto">
            Powerful features designed to help your business grow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard hover className="p-10 text-center h-full">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 mx-auto mb-8 flex items-center justify-center shadow-2xl">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="heading-sm mb-6 font-display">{feature.title}</h3>
                <p className="body-sm text-slate-600">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Themes Showcase */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="heading-lg gradient-text mb-8 font-display">
            Beautiful themes for every business
          </h2>
          <p className="body-lg text-slate-600 max-w-3xl mx-auto">
            Choose from our collection of professionally designed themes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard hover className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={theme.image} 
                    alt={theme.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="heading-sm font-display">{theme.name}</h3>
                    <span className="text-sm bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
                      {theme.category}
                    </span>
                  </div>
                  <button className="w-full glow-button mt-6">
                    Try this theme
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link to="/themes" className="glass-button text-xl px-10 py-4 inline-flex items-center space-x-3">
            <span>View All Themes</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="heading-lg gradient-text mb-8 font-display">
            Loved by entrepreneurs worldwide
          </h2>
          <p className="body-lg text-slate-600 max-w-3xl mx-auto">
            Join thousands of successful store owners who trust MetaStore
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-10">
                <div className="flex items-center space-x-4 mb-8">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-700 italic text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center mt-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-16 text-center">
            <h2 className="heading-lg gradient-text mb-8 font-display">
              Ready to start your journey?
            </h2>
            <p className="body-lg text-slate-600 mb-12 max-w-3xl mx-auto">
              Join thousands of entrepreneurs who have built successful online stores with MetaStore.ai
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link to="/auth" className="glow-button text-2xl px-12 py-6 group">
                Start Free Trial
                <ArrowRight className="ml-3 w-7 h-7 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/pricing" className="glass-button text-2xl px-12 py-6">
                View Pricing
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-12 text-slate-600">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="font-semibold">Free 4-month trial</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="font-semibold">No credit card required</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="font-semibold">Cancel anytime</span>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;