import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle, 
  Mail, 
  Phone,
  HelpCircle,
  Book,
  Video,
  Users
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: Book,
      faqs: [
        {
          question: 'How do I create my first store?',
          answer: 'Creating your first store is easy! Sign up for a free account, choose a theme, add your products, and you\'re ready to go. Our setup wizard will guide you through each step.'
        },
        {
          question: 'Can I use my own domain name?',
          answer: 'Yes! You can use your existing domain or register a new one through MetaStore. We provide free SSL certificates and handle all the technical setup for you.'
        },
        {
          question: 'How long does it take to go live?',
          answer: 'Your store can be live in minutes! Once you complete the basic setup and add your first products, your store is immediately available online.'
        }
      ]
    },
    {
      title: 'Free Plan & Pricing',
      icon: HelpCircle,
      faqs: [
        {
          question: 'What\'s included in the free plan?',
          answer: 'The free plan includes a 4-month trial with 10 extra days, custom domain, SSL certificate, up to 100 products, basic templates, and email support.'
        },
        {
          question: 'When do I need to upgrade?',
          answer: 'You can use the free plan for 4 months + 10 days. After that, you\'ll need to choose a paid plan to continue using all features.'
        },
        {
          question: 'Are there any transaction fees?',
          answer: 'The Startup and Basic plans have no transaction fees. The Business plan includes a 0.5% transaction fee on sales.'
        }
      ]
    },
    {
      title: 'Payments & Security',
      icon: MessageCircle,
      faqs: [
        {
          question: 'What payment methods can I accept?',
          answer: 'You can accept credit cards, PayPal, Stripe, and various local payment methods. We support all major payment processors.'
        },
        {
          question: 'Is my store secure?',
          answer: 'Absolutely! All stores include SSL encryption, PCI compliance, fraud protection, and regular security updates. Your customers\' data is always protected.'
        },
        {
          question: 'How do I get paid?',
          answer: 'Payments are processed directly through your chosen payment provider (Stripe, PayPal, etc.) and deposited into your bank account according to their schedule.'
        }
      ]
    },
    {
      title: 'Store Management',
      icon: Users,
      faqs: [
        {
          question: 'Can I add unlimited products?',
          answer: 'The Basic and Business plans include unlimited products. The free Startup plan allows up to 100 products.'
        },
        {
          question: 'How do I manage inventory?',
          answer: 'Our inventory management system tracks stock levels, sends low-stock alerts, and helps you manage suppliers and purchase orders.'
        },
        {
          question: 'Can I have multiple staff members?',
          answer: 'Yes! The Business plan includes staff accounts with role-based permissions, so you can give team members access to specific areas of your store.'
        }
      ]
    }
  ];

  const allFaqs = faqCategories.flatMap((category, categoryIndex) => 
    category.faqs.map((faq, faqIndex) => ({
      ...faq,
      id: categoryIndex * 100 + faqIndex,
      category: category.title
    }))
  );

  const filteredFaqs = allFaqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      availability: 'Available 24/7',
      action: 'Start Chat',
      color: 'from-green-400 to-green-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Response within 2 hours',
      action: 'Send Email',
      color: 'from-blue-400 to-blue-500'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      availability: 'Mon-Fri, 9AM-6PM PKT',
      action: 'Call Now',
      color: 'from-purple-400 to-purple-500'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Screen sharing for complex issues',
      availability: 'By appointment',
      action: 'Schedule Call',
      color: 'from-orange-400 to-orange-500'
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
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            How can we help?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Find quick answers to common questions or get in touch with our support team.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <GlassCard className="p-2">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 bg-transparent focus:outline-none text-lg placeholder-gray-400"
                />
              </div>
            </GlassCard>
          </div>
        </motion.div>

        {/* Support Channels */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">
            Get Support
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard hover className="p-6 text-center h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${channel.color} mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{channel.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                    {channel.description}
                  </p>
                  <p className="text-xs text-gray-500 mb-4">{channel.availability}</p>
                  <button className="glow-button w-full py-2">
                    {channel.action}
                  </button>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">
            Frequently Asked Questions
          </h2>

          {searchTerm ? (
            // Filtered FAQs when searching
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <GlassCard key={faq.id} className="p-6">
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{faq.question}</h3>
                      <span className="text-xs text-primary-500 bg-primary-100 dark:bg-primary-800 px-2 py-1 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                    {openFaq === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                  
                  <AnimatePresence>
                    {openFaq === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-white/20 mt-4">
                          <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              ))}
            </div>
          ) : (
            // Category-based FAQ display
            <div className="space-y-8">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  <GlassCard className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {category.faqs.map((faq, faqIndex) => {
                        const faqId = categoryIndex * 100 + faqIndex;
                        return (
                          <div key={faqId} className="border-b border-white/10 last:border-b-0 pb-4 last:pb-0">
                            <div 
                              className="flex items-center justify-between cursor-pointer py-2"
                              onClick={() => setOpenFaq(openFaq === faqId ? null : faqId)}
                            >
                              <h4 className="text-lg font-medium flex-1">{faq.question}</h4>
                              {openFaq === faqId ? (
                                <ChevronUp className="w-5 h-5 text-gray-500" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-500" />
                              )}
                            </div>
                            
                            <AnimatePresence>
                              {openFaq === faqId && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pt-3">
                                    <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <GlassCard className="p-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">
              Still need help?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glow-button text-lg px-8 py-4">
                Contact Support
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

export default SupportPage;