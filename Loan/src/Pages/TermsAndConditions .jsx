import { motion } from 'framer-motion';
import { FaFileContract, FaGavel, FaUserTie, FaMoneyBillWave, FaExclamationTriangle, FaQuestionCircle } from 'react-icons/fa';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto mt-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <FaFileContract className="text-blue-600 text-4xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">Terms & Conditions</h1>
          <p className="text-lg text-gray-600">
            Effective from: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white shadow-md rounded-lg p-6 sm:p-8"
        >
          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                These Terms & Conditions ("Terms") govern your use of Saksham Finance's ("we," "our," or "us") website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-600">
                These Terms constitute a legal agreement between you and Saksham Finance Ltd., registered in India. Please read them carefully before using our services.
              </p>
            </section>

            {/* Services */}
            <section>
              <div className="flex items-center mb-4">
                <FaMoneyBillWave className="text-green-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">2. Our Services</h2>
              </div>
              <p className="text-gray-600 mb-3">Saksham Finance provides:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Personal loans, home loans, business loans, and other financial products</li>
                <li>Online loan application and processing services</li>
                <li>Financial calculators and tools</li>
                <li>Customer support and advisory services</li>
              </ul>
              <p className="text-gray-600 mt-4">
                All loan approvals are subject to credit checks, verification, and our internal policies.
              </p>
            </section>

            {/* Eligibility */}
            <section>
              <div className="flex items-center mb-4">
                <FaUserTie className="text-purple-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">3. Eligibility</h2>
              </div>
              <p className="text-gray-600 mb-3">To use our services, you must:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Be at least 21 years of age</li>
                <li>Be a resident of India</li>
                <li>Have a valid bank account</li>
                <li>Meet our creditworthiness criteria</li>
                <li>Provide accurate and complete information</li>
              </ul>
            </section>

            {/* Application Process */}
            <section>
              <div className="flex items-center mb-4">
                <FaFileContract className="text-blue-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">4. Loan Application Process</h2>
              </div>
              <p className="text-gray-600 mb-3">The loan application process involves:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Submission of complete application with required documents</li>
                <li>Credit assessment and verification</li>
                <li>Approval/Rejection decision</li>
                <li>Disbursement upon approval and completion of formalities</li>
              </ul>
              <p className="text-gray-600 mt-4">
                We reserve the right to reject any application without providing reasons.
              </p>
            </section>

            {/* Interest & Fees */}
            <section>
              <div className="flex items-center mb-4">
                <FaMoneyBillWave className="text-yellow-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">5. Interest Rates & Fees</h2>
              </div>
              <p className="text-gray-600 mb-3">Our financial products may involve:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Interest rates as disclosed at the time of application</li>
                <li>Processing fees and other applicable charges</li>
                <li>Prepayment charges (if applicable)</li>
                <li>Late payment penalties</li>
              </ul>
              <p className="text-gray-600 mt-4">
                All rates and charges will be clearly communicated in your loan agreement.
              </p>
            </section>

            {/* Repayment */}
            <section>
              <div className="flex items-center mb-4">
                <FaGavel className="text-red-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">6. Repayment Terms</h2>
              </div>
              <p className="text-gray-600 mb-3">Borrowers must:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Make payments as per the agreed schedule</li>
                <li>Maintain sufficient funds in the linked account for auto-debit</li>
                <li>Inform us immediately of any payment difficulties</li>
                <li>Be liable for all charges due to payment failures</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Default in repayment may lead to legal action and impact your credit score.
              </p>
            </section>

            {/* User Obligations */}
            <section>
              <div className="flex items-center mb-4">
                <FaExclamationTriangle className="text-orange-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">7. User Obligations</h2>
              </div>
              <p className="text-gray-600 mb-3">You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Provide accurate and current information</li>
                <li>Not use our services for illegal purposes</li>
                <li>Not attempt to circumvent our security systems</li>
                <li>Not engage in fraudulent activities</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600">
                Saksham Finance shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall be limited to the fees you paid to us for the services in question.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these Terms at any time. Continued use of our services after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <div className="flex items-center mb-4">
                <FaGavel className="text-indigo-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">10. Governing Law</h2>
              </div>
              <p className="text-gray-600">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Mumbai.
              </p>
            </section>

            {/* Contact Info */}
            <section>
              <div className="flex items-center mb-4">
                <FaQuestionCircle className="text-blue-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">Contact Us</h2>
              </div>
              <p className="text-gray-600">
                For questions about these Terms, please contact:
              </p>
              <p className="text-gray-600 mt-2">
                                <strong>Email:</strong> sakshamfinance@gmail.com<br />
                                <strong>Phone:</strong> +91-7276240084<br />
                                <strong>Address:</strong>Sr No. 19/1, Hingne Home Colony, Karve Nagar, Pune-411052
                            </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsAndConditions;