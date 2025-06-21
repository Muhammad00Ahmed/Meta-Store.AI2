import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Crown, Rocket, Star } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly' | 'annual' | 'biyearly'>('annual');

  const plans = [
    {
      name: 'Startup',
      icon: Zap,
      description: 'Perfect for getting started',
      price: {
        monthly: 0,
        quarterly: 0,
        annual: 0,
        biyearly: 0
      },
      originalPrice: {
        monthly: 2000,
        quarterly: 6000,
        annual: 24000,
        biyearly: 48000
      },
      trial: '4 months + 10 days FREE',
      features: [
        'Free custom domain',
        'SSL certificate',
        'Basic templates',
        'Email support',
        'Up to 100 products',
        'Basic analytics',
        'Mobile responsive'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Basic',
      icon: Crown,
      description: 'For growing businesses',
      price: {
        monthly: 3500,
        quarterly: 9450, // 10% off
        annual: 37800, // 10% off
        biyearly: 70000 // 17% off
      },
      originalPrice: {
        monthly: 3500,
        quarterly: 10500,
        annual: 42000,
        biyearly: 84000
      },
      features: [
        'Everything in Startup',
        'Unlimited products',
        'Advanced SEO tools',
        'Google Analytics',
        'Basic POS system',
        'Priority support',
        'Custom themes',
        'Social media integration'
      ],
      popular: true,
      cta: 'Choose Basic'
    },
    {
      name: 'Business',
      icon: Rocket,
      description: 'For established stores',
      price: {
        monthly: 4500,
        quarterly: 12150, // 10% off
        annual: 48600, // 10% off
        biyearly: 91800 // 17% off
      },
      originalPrice: {
        monthly: 4500,
        quarterly: 13500,
        annual: 54000,
        biyearly: 108000
      },
      transactionFee: '+ 0.5% transaction fee',
      features: [
        'Everything in Basic',
        'Advanced inventory management',
        'Tax calculation',
        'Multi-language support',
        'Advanced reports',
        'API access',
        'Abandoned cart recovery',
        'Staff accounts',
        'Custom integrations'
      ],
      popular: false,
      cta: 'Choose Business'
    }
  ];

  const getDailyPrice = (price: number, cycle: string) => {
    const days = cycle === 'monthly' ? 30 : cycle === 'quarterly' ? 90 : cycle === 'annual' ? 365 : 730;
    return Math.round(price / days);
  };

  const getSavings = (current: number, original: number) => {
    if (current >= original) return 0;
    return Math.round(((original - current) / original) * 100);
  };

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
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business. No hidden fees, no surprises.
            Cancel or upgrade anytime.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <GlassCard className="p-2">
            <div className="flex gap-2">
              {[
                { key: 'monthly', label: 'Monthly' },
                { key: 'quarterly', label: 'Quarterly', badge: '10% OFF' },
                { key: 'annual', label: 'Annual', badge: '10% OFF' },
                { key: 'biyearly', label: 'Biyearly', badge: '17% OFF' }
              ].map((option) => (
                <button
                  key={option.key}
                  onClick={() => setBillingCycle(option.key as any)}
                  className={`relative px-6 py-3 rounded-lg transition-all duration-300 ${
                    billingCycle === option.key
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'hover:bg-white/20 dark:hover:bg-white/10'
                  }`}
                >
                  <span className="font-medium">{option.label}</span>
                  {option.badge && (
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      {option.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-400 to-primary-500 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <GlassCard className={`p-8 h-full ${plan.popular ? 'ring-2 ring-primary-400' : ''}`}>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-500 mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-4">
                    {plan.trial ? (
                      <div className="text-primary-500 font-semibold text-lg mb-2">
                        {plan.trial}
                      </div>
                    ) : null}
                    
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-4xl font-bold">
                        PKR {plan.price[billingCycle].toLocaleString()}
                      </span>
                      <span className="text-gray-500">
                        /{billingCycle === 'monthly' ? 'mo' : billingCycle === 'quarterly' ? 'qtr' : billingCycle === 'annual' ? 'yr' : '2yr'}
                      </span>
                    </div>
                    
                    {plan.price[billingCycle] > 0 && (
                      <div className="text-sm text-gray-500 mt-2">
                        ~PKR {getDailyPrice(plan.price[billingCycle], billingCycle)}/day
                      </div>
                    )}
                    
                    {getSavings(plan.price[billingCycle], plan.originalPrice[billingCycle]) > 0 && (
                      <div className="flex items-center justify-center space-x-2 mt-2">
                        <span className="text-sm text-gray-500 line-through">
                          PKR {plan.originalPrice[billingCycle].toLocaleString()}
                        </span>
                        <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                          Save {getSavings(plan.price[billingCycle], plan.originalPrice[billingCycle])}%
                        </span>
                      </div>
                    )}
                    
                    {plan.transactionFee && (
                      <div className="text-sm text-gray-500 mt-2">
                        {plan.transactionFee}
                      </div>
                    )}
                  </div>
                  
                  <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'glow-button' 
                      : 'glass-button hover:bg-primary-500 hover:text-white'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
                
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <GlassCard className="p-12">
            <h2 className="text-3xl font-bold text-center gradient-text mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: 'Can I change plans anytime?',
                  answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.'
                },
                {
                  question: 'Is there a setup fee?',
                  answer: 'No setup fees, ever. What you see is what you pay - no hidden costs or surprises.'
                },
                {
                  question: 'Do you offer refunds?',
                  answer: '30-day money-back guarantee. If you\'re not satisfied, we\'ll refund your money.'
                },
                {
                  question: 'What payment methods do you accept?',
                  answer: 'We accept all major credit cards, PayPal, and local payment methods in Pakistan.'
                }
              ].map((faq, index) => (
                <div key={index} className="mb-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <GlassCard className="p-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">
              Still have questions?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team is here to help you choose the right plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glow-button text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="glass-button text-lg px-8 py-4">
                Contact Sales
              </button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;