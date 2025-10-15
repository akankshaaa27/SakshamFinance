import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaGraduationCap, FaCalculator, FaPiggyBank, FaBookOpen } from 'react-icons/fa';
import { MdSchool, MdOutlineVerifiedUser, MdEmojiPeople } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const EducationLoanPage = () => {
  const [courseFee, setCourseFee] = useState(1000000); // ₹10L
  const [loanAmount, setLoanAmount] = useState(800000); // ₹8L
  const [loanTerm, setLoanTerm] = useState(84); // 7 years
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const calculateEMI = () => {
    const rate = 9.0 / 100 / 12; // Monthly interest rate
    const term = loanTerm;
    const principal = loanAmount;
    const emi = principal * rate * Math.pow(1 + rate, term) / (Math.pow(1 + rate, term) - 1);
    return emi.toFixed(2);
  };

  const calculateLTV = () => {
    return ((loanAmount / courseFee) * 100).toFixed(1);
  };

  const loanFeatures = [
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "High Loan Coverage",
      desc: "Get up to 100% coverage of tuition fees and living expenses"
    },
    {
      icon: <FaPiggyBank className="text-3xl" />,
      title: "Low Interest Rates",
      desc: "Interest rates starting from 9.0% p.a. with flexible repayment"
    },
    {
      icon: <MdSchool className="text-3xl" />,
      title: "Study Anywhere",
      desc: "Finance for courses in India and abroad"
    },
    {
      icon: <MdOutlineVerifiedUser className="text-3xl" />,
      title: "No Collateral for Small Loans",
      desc: "Up to ₹7.5 lakhs without collateral for select courses"
    }
  ];

  const loanPurposes = [
    {
      title: "Higher Studies in India",
      desc: "Fund undergraduate or postgraduate courses in top universities",
      icon: <MdSchool className="text-2xl" />
    },
    {
      title: "Overseas Education",
      desc: "Finance tuition, travel, and living expenses abroad",
      icon: <FaGraduationCap className="text-2xl" />
    },
    {
      title: "Professional Courses",
      desc: "MBA, Medical, Engineering, and other professional programs",
      icon: <FaBookOpen className="text-2xl" />
    },
    {
      title: "Skill Development",
      desc: "Support for vocational and certificate courses",
      icon: <MdEmojiPeople className="text-2xl" />
    }
  ];

  const faqs = [
    {
      question: "What is the maximum loan amount for education loan?",
      answer: "Up to ₹50 lakhs for studies abroad and ₹20 lakhs for studies in India. Higher amounts may be available for select courses."
    },
    {
      question: "What documents are required?",
      answer: "KYC documents, admission letter, fee structure, academic records, co-borrower income proof, and collateral documents if applicable."
    },
    {
      question: "When does repayment start?",
      answer: "Repayment typically starts 6-12 months after course completion or job placement, whichever is earlier."
    },
    {
      question: "Are there prepayment charges?",
      answer: "Most banks allow prepayment without penalty for education loans."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Delhi",
      content: "Got my education loan approved in 5 days for my MBA in Canada. Smooth process and great support!",
      rating: 5
    },
    {
      name: "Ravi Kumar",
      location: "Bangalore",
      content: "Financed my engineering degree without burdening my family. Very flexible repayment terms.",
      rating: 4
    },
    {
      name: "Anjali Mehta",
      location: "Mumbai",
      content: "Helped me study abroad without worrying about expenses. Highly recommended!",
      rating: 5
    }
  ];

  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Achieve Your <span className="text-indigo-600">Education Dreams</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Get education loans up to ₹50 lakhs at attractive interest rates starting from 9.0% p.a. with flexible repayment options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => navigate('/form')} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                Apply for Education Loan
              </button>
              <button onClick={() => navigate('/educationcal')} className="border-2 border-indigo-600 text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-indigo-50 transition duration-300 transform hover:scale-105">
               Calculate EMI
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" 
              alt="Graduation"
              className="w-full max-w-lg mx-auto rounded-xl shadow-2xl"
            />
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block"
            >
              <div className="flex items-center">
                <div className="bg-indigo-100 p-3 rounded-full mr-3">
                  <FaGraduationCap className="text-indigo-600 text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Up to ₹50L</p>
                  <p className="text-sm text-gray-600">Education Loan</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Loan Calculator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Education Loan Calculator</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Plan your studies with our EMI calculator</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Calculator */}
            <div className="lg:w-1/2 bg-indigo-50 p-8 rounded-2xl shadow-md">
              {/* Course Fee */}
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">Course Fee (₹)</label>
                <input 
                  type="range" 
                  min="100000" 
                  max="5000000" 
                  step="50000"
                  value={courseFee}
                  onChange={(e) => {
                    setCourseFee(e.target.value);
                    setLoanAmount(Math.min(Math.round(e.target.value * 0.8), 5000000));
                  }}
                  className="w-full"
                />
                <span className="ml-4 text-indigo-700 font-semibold">
                  ₹{(courseFee / 100000).toFixed(1)} L
                </span>
              </div>

              {/* Loan Amount */}
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">Loan Amount (₹)</label>
                <input 
                  type="range" 
                  min="100000" 
                  max={courseFee}
                  step="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="w-full"
                />
                <span className="ml-4 text-indigo-700 font-semibold">
                  ₹{(loanAmount / 100000).toFixed(1)} L
                </span>
                <p className="text-sm text-gray-600 mt-2">Coverage: {calculateLTV()}%</p>
              </div>

              {/* Loan Term */}
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">Loan Term (Years)</label>
                <input 
                  type="range" 
                  min="1" 
                  max="15" 
                  step="1"
                  value={loanTerm / 12}
                  onChange={(e) => setLoanTerm(e.target.value * 12)}
                  className="w-full"
                />
                <span className="ml-4 text-indigo-700 font-semibold">
                  {loanTerm / 12} years
                </span>
              </div>

              {/* EMI Result */}
              <div className="bg-white p-6 rounded-xl shadow-inner">
                <p className="text-gray-600">Monthly EMI</p>
                <h3 className="text-2xl font-bold text-indigo-700">₹{calculateEMI()}</h3>
              </div>
            </div>

            {/* Loan Features */}
            <div className="lg:w-1/2">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Education Loan Benefits</h3>
              <ul className="space-y-4">
                {loanFeatures.map((feature, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-3 rounded-full mr-4">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold">{feature.title}</h4>
                        <p className="text-gray-600">{feature.desc}</p>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Purposes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loanPurposes.map((purpose, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                {purpose.icon}
              </div>
              <h3 className="text-lg font-semibold">{purpose.title}</h3>
              <p className="text-gray-600">{purpose.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button 
                onClick={() => toggleFaq(index)}
                className="flex justify-between w-full p-4 bg-gray-50 rounded-lg"
              >
                <h3>{faq.question}</h3>
                <span>{activeFaq === index ? "-" : "+"}</span>
              </button>
              {activeFaq === index && (
                <div className="p-4 bg-gray-50">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EducationLoanPage;
