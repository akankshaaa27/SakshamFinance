import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHandHoldingUsd, 
  FaChartLine, 
  FaUsers, 
  FaShieldAlt, 
  FaLightbulb, 
  FaHandshake, 
  FaAward, 
  FaRocket,
  FaStar,
  FaQuoteLeft
} from 'react-icons/fa';
import { GiCash, GiAchievement } from 'react-icons/gi';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { IoIosRibbon } from 'react-icons/io';
import lokeshImg from "../assets/LokeshSir.jpg";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const stats = [
    { value: "10,000+", label: "Happy Customers", icon: <FaUsers className="text-3xl" /> },
    { value: "₹500Cr+", label: "Loans Disbursed", icon: <GiCash className="text-3xl" /> },
    { value: "15+", label: "Years of Experience", icon: <FaChartLine className="text-3xl" /> },
    { value: "98%", label: "Customer Satisfaction", icon: <RiCustomerService2Fill className="text-3xl" /> }
  ];

  const features = [
    {
      icon: <FaHandHoldingUsd className="text-4xl mb-4" />,
      title: "Quick Loan Approval",
      description: "Get approved for loans in as little as 24 hours with our streamlined process."
    },
    {
      icon: <FaShieldAlt className="text-4xl mb-4" />,
      title: "Secure & Safe",
      description: "Your data is protected with bank-level security measures."
    },
    {
      icon: <FaLightbulb className="text-4xl mb-4" />,
      title: "Transparent Process",
      description: "No hidden charges or surprises - we believe in complete transparency."
    },
    {
      icon: <FaHandshake className="text-4xl mb-4" />,
      title: "Flexible Repayment",
      description: "Customizable repayment options to suit your financial situation."
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      content: "Saksham Finance helped me expand my business when no one else would. Their process was smooth and transparent.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Home Buyer",
      content: "Excellent service! Got my home loan approved within 2 days. The team was very supportive throughout.",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Entrepreneur",
      content: "The flexible repayment options made it easy for me to manage my cash flow while growing my startup.",
      rating: 4
    }
  ];

  const milestones = [
    { year: "2008", event: "Company Founded", description: "Started with a vision to make financing accessible" },
    { year: "2012", event: "1000+ Customers", description: "Reached our first major customer milestone" },
    { year: "2016", event: "₹100Cr+ Disbursed", description: "Crossed ₹100 crores in loan disbursements" },
    { year: "2023", event: "Digital Transformation", description: "Launched our digital loan application platform" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      
      {/* Hero Section */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-400 via-yellow-200 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-blue-300/10 blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30 shadow-2xl">
              <FaAward className="text-4xl text-yellow-300 mx-auto drop-shadow-lg" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-lg"
          >
            About Saksham Finance
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 text-blue-100 leading-relaxed"
          >
            Empowering your financial dreams with trusted loan solutions since 2008. 
            Your journey to financial freedom starts here.
          </motion.p>
        </motion.div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-white relative -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={loaded ? "show" : "hidden"}
            variants={container}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 300 } }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-blue-300 to-blue-500 rounded-2xl p-6 shadow-xl shadow-blue-500/20 group-hover:shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-300">
                  <div className="text-white mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="text-3xl font-bold text-white mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-blue-100 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      
      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Leader</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary leadership driving our success and your financial growth
            </p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ 
                scale: 1.03,
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden group max-w-md w-full border border-gray-100"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
                <motion.img 
                  src={lokeshImg} 
                  alt="Lokesh Ajalkar" 
                  className="object-contain h-80 w-full transform group-hover:scale-105 transition-transform duration-500"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute top-4 right-4 bg-yellow-400 text-blue-900 rounded-full p-2 shadow-lg"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <IoIosRibbon className="text-xl" />
                </motion.div>
              </div>
              
              <div className="p-8 text-center relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <FaUsers className="text-white text-lg" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mt-4">Lokesh Ajalkar</h3>
                <p className="text-blue-600 font-semibold text-lg mb-3">Founder & CEO</p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  25+ years of expertise in financial services, dedicated to empowering customers 
                  with innovative financial solutions.
                </p>
                
                <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
                  {[FaHandshake, FaChartLine, FaLightbulb, FaAward].map((Icon, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ 
                        scale: 1.2,
                        y: -2
                      }}
                      className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center cursor-pointer group/icon"
                    >
                      <Icon className="text-blue-600 text-sm group-hover/icon:text-blue-700 transition-colors" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Saksham Finance?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing the best financial solutions with exceptional service
            </p>
          </motion.div>

          <motion.div initial="hidden" animate={loaded ? "show" : "hidden"} variants={container} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} variants={item} whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }} className="group">
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg border border-blue-100 group-hover:shadow-2xl group-hover:border-blue-200 transition-all duration-300 h-full">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="text-blue-600 mb-6 flex justify-center">
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-400 to-green-200 relative overflow-hidden text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Ready to Achieve Your Financial Dreams?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Join thousands of satisfied customers who have transformed their financial future with Saksham Finance.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button onClick={() => navigate("/form")} whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(255, 255, 255, 0.3)" }} whileTap={{ scale: 0.95 }} className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-2xl flex items-center justify-center space-x-3 group">
              <span>Apply for a Loan Today</span>
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <FaRocket className="text-lg group-hover:text-blue-500" />
              </motion.div>
            </motion.button>
            <motion.button onClick={() => navigate("/contact")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Talk to Our Expert
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
