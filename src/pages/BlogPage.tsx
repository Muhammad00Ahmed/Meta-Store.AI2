import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Search, 
  Filter,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Lightbulb
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'How-To Guides', 'Tutorials', 'Case Studies', 'AI Ecom Tips', 'Marketing'];

  const featuredPost = {
    id: 1,
    title: 'How AI is Revolutionizing E-commerce in 2024',
    excerpt: 'Discover the latest AI trends that are transforming online retail and how you can leverage them for your store.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
    author: 'Sarah Chen',
    authorImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'AI Ecom Tips'
  };

  const blogPosts = [
    {
      id: 2,
      title: '10 Essential SEO Tips for E-commerce Stores',
      excerpt: 'Boost your store\'s visibility with these proven SEO strategies that actually work.',
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=400&h=250',
      author: 'Mike Johnson',
      authorImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'How-To Guides'
    },
    {
      id: 3,
      title: 'Building Trust: Customer Reviews That Convert',
      excerpt: 'Learn how to leverage customer reviews to build trust and increase conversions.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=250',
      author: 'Emma Davis',
      authorImage: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      date: '2024-01-10',
      readTime: '5 min read',
      category: 'Marketing'
    },
    {
      id: 4,
      title: 'From Zero to Hero: A Small Business Success Story',
      excerpt: 'How Sarah built a 6-figure online store using MetaStore.ai in just 6 months.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250',
      author: 'David Wilson',
      authorImage: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      date: '2024-01-08',
      readTime: '12 min read',
      category: 'Case Studies'
    },
    {
      id: 5,
      title: 'Mobile Commerce: Optimizing for Mobile Shoppers',
      excerpt: 'Essential mobile optimization strategies to capture the growing mobile commerce market.',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250',
      author: 'Lisa Anderson',
      authorImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'Tutorials'
    },
    {
      id: 6,
      title: 'Inventory Management Best Practices',
      excerpt: 'Master inventory management with these proven strategies to avoid stockouts and overstock.',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400&h=250',
      author: 'Alex Thompson',
      authorImage: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'How-To Guides'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'How-To Guides': return BookOpen;
      case 'Tutorials': return Lightbulb;
      case 'Case Studies': return TrendingUp;
      default: return BookOpen;
    }
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
            Blog & Resources
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Expert insights, tutorials, and success stories to help you build and grow your online store.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <GlassCard className="p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 dark:bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 backdrop-blur-sm"
                />
              </div>

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

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <GlassCard hover className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              <div className="aspect-video lg:aspect-auto overflow-hidden rounded-lg">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-300 px-3 py-1 rounded-full text-sm">
                    {featuredPost.category}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-primary-500 transition-colors cursor-pointer">
                  {featuredPost.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <img 
                      src={featuredPost.authorImage} 
                      alt={featuredPost.author}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <button className="glow-button self-start px-6 py-3 group">
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard hover className="overflow-hidden h-full">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="text-xs text-gray-500 flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 hover:text-primary-500 transition-colors cursor-pointer line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <img 
                        src={post.authorImage} 
                        alt={post.author}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-sm text-gray-500">{post.author}</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <GlassCard className="p-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest e-commerce tips, tutorials, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/20 dark:bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 backdrop-blur-sm"
              />
              <button className="glow-button px-8 py-3">
                Subscribe
              </button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;