import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  ShoppingCart, 
  DollarSign,
  TrendingUp,
  TrendingDown,
  Package,
  Eye,
  Plus,
  Settings,
  Bell,
  Download
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from 'recharts';
import { useAuth } from '../contexts/AuthContext';
import GlassCard from '../components/GlassCard';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const [timeRange, setTimeRange] = useState('7d');

  // Mock data for charts
  const salesData = [
    { name: 'Mon', sales: 2400, visitors: 400 },
    { name: 'Tue', sales: 1398, visitors: 300 },
    { name: 'Wed', sales: 9800, visitors: 200 },
    { name: 'Thu', sales: 3908, visitors: 278 },
    { name: 'Fri', sales: 4800, visitors: 189 },
    { name: 'Sat', sales: 3800, visitors: 239 },
    { name: 'Sun', sales: 4300, visitors: 349 }
  ];

  const trafficData = [
    { name: 'Direct', value: 35, color: '#3B82F6' },
    { name: 'Social', value: 25, color: '#10B981' },
    { name: 'Search', value: 20, color: '#F59E0B' },
    { name: 'Email', value: 15, color: '#EF4444' },
    { name: 'Other', value: 5, color: '#8B5CF6' }
  ];

  const recentOrders = [
    { id: '#1234', customer: 'John Doe', amount: 125.99, status: 'completed', date: '2024-01-15' },
    { id: '#1235', customer: 'Jane Smith', amount: 89.50, status: 'processing', date: '2024-01-15' },
    { id: '#1236', customer: 'Mike Johnson', amount: 234.75, status: 'shipped', date: '2024-01-14' },
    { id: '#1237', customer: 'Sarah Wilson', amount: 67.25, status: 'pending', date: '2024-01-14' }
  ];

  const topProducts = [
    { name: 'Wireless Headphones', sales: 145, revenue: 14500 },
    { name: 'Smart Watch', sales: 98, revenue: 19600 },
    { name: 'Phone Case', sales: 234, revenue: 4680 },
    { name: 'Laptop Stand', sales: 67, revenue: 6700 }
  ];

  const stats = [
    {
      title: 'Total Sales',
      value: 'PKR 45,231',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-green-400 to-green-500'
    },
    {
      title: 'Total Visitors',
      value: '2,847',
      change: '+8.2%',
      trend: 'up',
      icon: Users,
      color: 'from-blue-400 to-blue-500'
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: '-2.1%',
      trend: 'down',
      icon: TrendingUp,
      color: 'from-purple-400 to-purple-500'
    },
    {
      title: 'Store Uptime',
      value: '99.9%',
      change: '+0.1%',
      trend: 'up',
      icon: BarChart3,
      color: 'from-orange-400 to-orange-500'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100 dark:bg-green-800';
      case 'processing': return 'text-blue-600 bg-blue-100 dark:bg-blue-800';
      case 'shipped': return 'text-purple-600 bg-purple-100 dark:bg-purple-800';
      case 'pending': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-800';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-800';
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please log in to access the dashboard</h1>
          <button className="glow-button">Go to Login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold gradient-text mb-2">
              Welcome back, {user.name}!
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Here's what's happening with your store today.
            </p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="glass-button px-4 py-2 bg-white/20 dark:bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
            <button className="glass-button p-2">
              <Bell className="w-5 h-5" />
            </button>
            <button className="glow-button px-4 py-2">
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center space-x-1 text-sm ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span>{stat.change}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.title}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Sales Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Sales Overview</h3>
                <button className="glass-button p-2">
                  <Download className="w-4 h-4" />
                </button>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                    <YAxis stroke="rgba(255,255,255,0.5)" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(255,255,255,0.1)', 
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px',
                        backdropFilter: 'blur(10px)'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="sales" 
                      stroke="#3B82F6" 
                      strokeWidth={3}
                      dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </GlassCard>
          </motion.div>

          {/* Traffic Sources */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold mb-6">Traffic Sources</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={trafficData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {trafficData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {trafficData.map((item) => (
                  <div key={item.name} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {item.name}: {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Tables Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Recent Orders</h3>
                <button className="text-primary-500 hover:text-primary-600 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div>
                      <p className="font-medium">{order.id}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{order.customer}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">PKR {order.amount}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Top Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Top Products</h3>
                <button className="text-primary-500 hover:text-primary-600 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={product.name} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-500 rounded-lg flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{product.sales} sales</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">PKR {product.revenue.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8"
        >
          <GlassCard className="p-6">
            <h3 className="text-xl font-semibold mb-6">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Plus, label: 'Add Product', color: 'from-green-400 to-green-500' },
                { icon: Eye, label: 'View Orders', color: 'from-blue-400 to-blue-500' },
                { icon: Package, label: 'Manage Inventory', color: 'from-purple-400 to-purple-500' },
                { icon: Settings, label: 'Store Settings', color: 'from-orange-400 to-orange-500' }
              ].map((action) => (
                <button
                  key={action.label}
                  className="glass-button p-6 text-center hover:scale-105 transition-transform"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} mx-auto mb-3 flex items-center justify-center shadow-lg`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium">{action.label}</span>
                </button>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;