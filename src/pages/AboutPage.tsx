import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Users, 
  Award, 
  Zap, 
  Heart, 
  Shield, 
  TrendingUp,
  Mail,
  Briefcase
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Active Stores', value: '10,000+' },
    { icon: Award, label: 'Customer Rating', value: '4.9/5' },
    { icon: TrendingUp, label: 'Growth Rate', value: '300%' },
    { icon: Shield, label: 'Uptime', value: '99.9%' }
  ];

  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible in e-commerce technology.'
    },
    {
      icon: Heart,
      title: 'Support',
      description: 'Your success is our priority. We\'re here to help you every step of the way.'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'We build secure, reliable solutions that you can depend on for your business.'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'We\'re committed to helping your business scale and reach new heights.'
    }
  ];

  const team = [
    {
      name: 'Ahmed Hassan',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      bio: 'Serial entrepreneur with 15+ years in e-commerce and technology.'
    },
    {
      name: 'Sarah Khan',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      bio: 'Full-stack engineer passionate about building scalable platforms.'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      bio: 'UI/UX expert focused on creating beautiful, user-friendly experiences.'
    },
    {
      name: 'David Chen',
      role: 'Head of Marketing',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      bio: 'Growth hacker helping businesses reach their target audiences.'
    }
  ];

  const jobOpenings = [
    {
      title: 'Full-Stack Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Karachi / Remote'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      type: 'Full-time',
      location: 'Karachi / Remote'
    },
    {
      title: 'SEO Specialist',
      department: 'Marketing',
      type: 'Full-time',
      location:  'Remote'
    },
    {
      title: 'Content Writer',
      department: 'Marketing',
      type: 'Part-time',
      location: 'Remote'
    },
    {
      title: 'Sales Representative',
      department: 'Sales',
      type: 'Full-time',
      location: 'Karachi'
    },
    {
      title: 'HR Manager',
      department: 'Human Resources',
      type: 'Full-time',
      location: 'Karachi'
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
            About MetaStore.ai
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're on a mission to democratize e-commerce by making it easy for anyone 
            to build and grow a successful online store.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-500 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <GlassCard className="p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold gradient-text mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  We believe that everyone should have the opportunity to build a successful online business, 
                  regardless of their technical background or budget constraints.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  That's why we've built MetaStore.ai - a platform that removes all the technical barriers 
                  and makes e-commerce accessible to entrepreneurs worldwide.
                </p>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600" 
                  alt="Our mission"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center gradient-text mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard hover className="p-8 text-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-500 mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center gradient-text mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard hover className="p-8 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary-500 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{member.bio}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <GlassCard className="p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold gradient-text mb-6">Our Headquarters</h2>
                <div className="flex items-start space-x-4 mb-6">
                  <MapPin className="w-6 h-6 text-primary-500 mt-1" />
                  <div>
                    <p className="text-lg font-medium mb-2">Karachi, Pakistan</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Located in the heart of Pakistan's commercial capital, we're at the center 
                      of the country's thriving tech ecosystem.
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  While our headquarters are in Karachi, we're a global team with members 
                  working remotely from around the world, bringing diverse perspectives 
                  to everything we build.
                </p>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600" 
                  alt="Karachi office"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Careers */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center gradient-text mb-12">Join Our Team</h2>
          <GlassCard className="p-8">
            <div className="text-center mb-8">
              <p className="text-xl text-gray-600 dark:text-gray-300">
                We're always looking for talented individuals who share our passion for innovation and helping businesses succeed.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white/10 dark:bg-white/5 rounded-lg p-6 hover:bg-white/20 dark:hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{job.title}</h3>
                      <p className="text-primary-500 text-sm">{job.department}</p>
                    </div>
                    <Briefcase className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{job.type}</span>
                    <span>{job.location}</span>
                  </div>
                  <button className="w-full mt-4 glass-button py-2 text-sm">
                    Apply Now
                  </button>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <GlassCard className="p-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Have questions about MetaStore.ai or want to learn more about our mission? 
              We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glow-button text-lg px-8 py-4 flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Contact Us</span>
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

export default AboutPage;