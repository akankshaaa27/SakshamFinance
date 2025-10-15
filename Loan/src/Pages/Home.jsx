import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // ✅ Added import for Link
import backgroundImage from '../assets/Final.png';

// Bank logos
import hdfcLogo from '../assets/hdfc.jpg';
import bomLogo from '../assets/bom.jpg';
import boiLogo from '../assets/boi.jpg';
import sbiLogo from '../assets/sbi.jpg';
import iciciLogo from '../assets/icici.jpg';
import axisLogo from '../assets/axis.jpg';
import pnbLogo from '../assets/pnb.jpg';
import canaraLogo from '../assets/canara.jpg';

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanAmount: '',
    purpose: 'Personal Loan',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      loanAmount: '',
      purpose: 'Personal Loan',
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const iconVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  // Bank data for scrolling
  const banks = [
    { name: 'HDFC Bank', logo: hdfcLogo, id: 1 },
    { name: 'Bank of Maharashtra', logo: bomLogo, id: 2 },
    { name: 'Bank of India', logo: boiLogo, id: 3 },
    { name: 'State Bank of India', logo: sbiLogo, id: 4 },
    { name: 'ICICI Bank', logo: iciciLogo, id: 5 },
    { name: 'Axis Bank', logo: axisLogo, id: 6 },
    { name: 'Punjab National Bank', logo: pnbLogo, id: 7 },
    { name: 'Canara Bank', logo: canaraLogo, id: 8 },
  ];

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <div
        className="w-full h-screen bg-cover bg-center flex justify-end items-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-md mx-8 md:mx-16 lg:mr-32 px-4 py-8 text-left z-10">
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Mann hai toh money hai
          </motion.h2>
          <motion.p
            className="text-lg text-gray-200 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Manage finances with our full suite of personalized financial products.
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center justify-start gap-4 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="text-xl font-semibold text-white">65 Million+ users</div>
            <div className="hidden md:block h-6 border-r border-gray-300"></div>
            <div className="text-xl font-semibold text-white">
              4.8★ <span className="text-gray-200">Google rating</span>
            </div>
            <div className="hidden md:block h-6 border-r border-gray-300"></div>
            <div className="text-xl font-semibold text-white">5 Cr+ downloads</div>
          </motion.div>
        </div>
      </div>

      {/* Banks Scroller Section */}
      <div className="py-12 bg-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-10 text-gray-800">
            Partnered with Leading Banks
          </h3>
          <div className="relative flex overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: [0, -1032] }}
              transition={{
                x: { repeat: Infinity, repeatType: 'loop', duration: 20, ease: 'linear' },
              }}
            >
              {banks.concat(banks).map((bank, index) => (
                <div
                  key={`${bank.id}-${index}`}
                  className="inline-flex items-center justify-center mx-8 w-40 h-20 bg-white rounded-lg shadow-md p-2"
                >
                  <img src={bank.logo} alt={bank.name} className="h-12 object-contain" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-24 px-6 bg-gradient-to-b from-white via-blue-50/30 to-gray-100">
        {/* Decorative animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-20 text-gray-800 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why <span className="text-blue-600">Saksham Finance</span> Stands Out
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Lightning Fast Approval',
                desc: 'Get loan approval within 15 minutes with our AI-powered system.',
                icon: '⚡',
                gradient: 'from-blue-100 via-blue-50 to-white',
                glow: 'shadow-blue-200',
              },
              {
                title: 'Lowest Interest Rates',
                desc: 'Starting from just 9.99% APR - lowest in the industry.',
                icon: '💰',
                gradient: 'from-green-100 via-green-50 to-white',
                glow: 'shadow-green-200',
              },
              {
                title: '100% Digital Process',
                desc: 'Complete your application seamlessly without any paperwork.',
                icon: '📱',
                gradient: 'from-purple-100 via-purple-50 to-white',
                glow: 'shadow-purple-200',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0px 8px 30px rgba(0,0,0,0.15)',
                }}
                className={`relative group bg-gradient-to-br ${item.gradient} rounded-3xl p-8 transition-all duration-300 cursor-pointer`}
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 ${item.glow}`}
                ></div>

                {/* Icon */}
                <motion.div
                  variants={iconVariants}
                  animate="animate"
                  className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center text-4xl shadow-lg mb-6 relative z-10"
                >
                  {item.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-4 relative z-10">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center relative z-10 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            How It{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Works
            </span>
          </motion.h2>

          <div className="flex flex-col md:flex-row justify-between items-center relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-1 bg-gradient-to-r from-blue-300 to-cyan-300 z-0"></div>

            {[
              { step: '1', title: 'Apply Online', desc: 'Fill our simple form in 5 minutes' },
              { step: '2', title: 'Get Approved', desc: 'Receive instant approval decision' },
              { step: '3', title: 'Verify Documents', desc: 'Upload required documents securely' },
              { step: '4', title: 'Receive Funds', desc: 'Get money in your account quickly' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center mb-10 md:mb-0 z-10 bg-white p-6 rounded-2xl shadow-lg w-56"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-300 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 shadow-md">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-8 bg-gradient-to-br from-[#A5DD9B] to-[#C5EBAA] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to fulfill your financial dreams?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 opacity-90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Apply now and get instant approval with minimal documentation!
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/form"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block text-center"
            >
              Apply Now
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
