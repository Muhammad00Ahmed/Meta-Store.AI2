import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Search, Star, ExternalLink } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const ThemesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Minimal', 'Food', 'Fashion', 'Technology', 'Beauty', 'Sports'];

  const themes = [
    {
      id: 1,
      name: 'Meat Bay',
      category: 'Food',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      description: 'Perfect for restaurants and food delivery services',
      rating: 4.9,
      downloads: 2453,
      features: ['Online Ordering', 'Menu Management', 'Delivery Tracking']
    },
    {
      id: 2,
      name: 'Kamadi',
      category: 'Fashion',
      image: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      description: 'Elegant fashion and apparel store theme',
      rating: 4.8,
      downloads: 1876,
      features: ['Size Guide', 'Wishlist', 'Quick View']
    },
    {
      id: 3,
      name: 'Codes Dukaan',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      description: 'Modern tech store with clean design',
      rating: 4.7,
      downloads: 3201,
      features: ['Product Comparison', 'Reviews', 'Technical Specs']
    },
    {
      id: 4,
      name: 'Minimal Store',
      category: 'Minimal',
      image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      description: 'Clean and simple design for any business',
      rating: 4.9,
      downloads: 4567,
      features: ['Clean Layout', 'Fast Loading', 'Mobile First']
    },
    {
      id: 5,
      name: 'Beauty Bliss',
      category: 'Beauty',
      image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      description: 'Beautiful theme for cosmetics and beauty products',
      rating: 4.8,
      downloads: 1934,
      features: ['Color Swatches', 'Beauty Guide', 'Tutorials']
    },
    {
      id: 6,
      name: 'Sports Zone',
      category: 'Sports',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      description: 'Dynamic theme for sports and fitness stores',
      rating: 4.6,
      downloads: 2187,
      features: ['Size Charts', 'Team Gear', 'Fitness Tracker']
    }
  ];

  const filteredThemes = themes.filter(theme => {
    const matchesCategory = selectedCategory === 'All' || theme.category === selectedCategory;
    const matchesSearch = theme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         theme.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            Store Themes
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose from our collection of professionally designed themes. 
            Each theme is fully customizable and mobile-responsive.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <GlassCard className="p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search themes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 dark:bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 backdrop-blur-sm"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2 overflow-x-auto">
                <Filter className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <div className="flex gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                        selectedCategory === category
                          ? 'bg-primary-500 text-white shadow-lg'
                          : 'bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Themes Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchTerm}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredThemes.map((theme, index) => (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard hover className="overflow-hidden group">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={theme.image} 
                      alt={theme.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-3">
                        <button className="glass-button p-3">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                        <button className="glow-button px-6 py-3">
                          Preview
                        </button>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {theme.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold group-hover:text-primary-500 transition-colors">
                        {theme.name}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{theme.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {theme.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {theme.features.map((feature) => (
                        <span 
                          key={feature}
                          className="bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-300 px-2 py-1 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {theme.downloads.toLocaleString()} downloads
                      </span>
                      <button className="glow-button px-6 py-2">
                        Use Theme
                      </button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredThemes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold mb-2">No themes found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <GlassCard className="p-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">
              Need a custom theme?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find the perfect theme? Our design team can create a custom theme just for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glow-button text-lg px-8 py-4">
                Request Custom Theme
              </button>
              <button className="glass-button text-lg px-8 py-4">
                Contact Designer
              </button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default ThemesPage;