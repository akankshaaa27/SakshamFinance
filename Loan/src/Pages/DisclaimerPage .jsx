import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaInfoCircle, FaShieldAlt, FaRegHandshake } from 'react-icons/fa';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mt-10 mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <FaExclamationTriangle className="text-yellow-500 text-4xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">Legal Disclaimer</h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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
            {/* General Disclaimer */}
            <section>
              <div className="flex items-center mb-4">
                <FaExclamationTriangle className="text-red-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">General Disclaimer</h2>
              </div>
              <p className="text-gray-600 mb-4">
                The information provided on Saksham Finance's website and mobile application (collectively, "Platform") is for general informational purposes only. All information on the Platform is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Platform.
              </p>
              <p className="text-gray-600">
                Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the Platform or reliance on any information provided on the Platform. Your use of the Platform and your reliance on any information on the Platform is solely at your own risk.
              </p>
            </section>

            {/* Financial Disclaimer */}
            <section>
              <div className="flex items-center mb-4">
                <FaInfoCircle className="text-blue-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">Financial Products Disclaimer</h2>
              </div>
              <p className="text-gray-600 mb-3">
                Saksham Finance provides information about various financial products including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>Personal loans</li>
                <li>Home loans</li>
                <li>Business loans</li>
                <li>Education loans</li>
                <li>Loan against property</li>
              </ul>
              <p className="text-gray-600">
                All loan approvals are subject to credit appraisal, verification checks, and fulfillment of all eligibility criteria. The information provided on our Platform regarding interest rates, fees, charges, loan amounts, and other terms are indicative only and subject to change without notice. Final terms will be communicated in your loan agreement.
              </p>
            </section>

            {/* No Advice */}
            <section>
              <div className="flex items-center mb-4">
                <FaShieldAlt className="text-green-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">No Financial Advice</h2>
              </div>
              <p className="text-gray-600">
                The content available on our Platform does not constitute and should not be considered as financial advice, investment advice, trading advice, or any other sort of advice. You should not treat any of the Platform's content as such. We recommend that you seek independent advice from a financial advisor before making any financial decisions.
              </p>
            </section>

            {/* External Links */}
            <section>
              <div className="flex items-center mb-4">
                <FaExclamationTriangle className="text-purple-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">External Links Disclaimer</h2>
              </div>
              <p className="text-gray-600">
                The Platform may contain links to external websites that are not provided or maintained by or in any way affiliated with Saksham Finance. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites. We strongly advise you to review the privacy policy and terms of service of every site you visit.
              </p>
            </section>

            {/* Calculators */}
            <section>
              <div className="flex items-center mb-4">
                <FaInfoCircle className="text-yellow-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">Financial Calculators Disclaimer</h2>
              </div>
              <p className="text-gray-600 mb-4">
                The financial calculators provided on our Platform are for illustrative purposes only. The results provided by these calculators are estimates and approximations only. These do not constitute offers or guarantees of loan approval, interest rates, or any other loan terms.
              </p>
              <p className="text-gray-600">
                Actual loan terms, including but not limited to interest rates, fees, and monthly payments may vary based on the lender's assessment of your creditworthiness and other factors.
              </p>
            </section>

            {/* Fair Practice */}
            <section>
              <div className="flex items-center mb-4">
                <FaRegHandshake className="text-teal-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">Fair Practice Code</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Saksham Finance follows the Fair Practice Code as prescribed by the Reserve Bank of India. We are committed to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Transparent dealings with our customers</li>
                <li>Non-coercive recovery practices</li>
                <li>Responsible lending</li>
                <li>Protection of customer data and privacy</li>
                <li>Grievance redressal mechanism</li>
              </ul>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Changes to This Disclaimer</h2>
              <p className="text-gray-600">
                We may update our Disclaimer from time to time. We will notify you of any changes by posting the new Disclaimer on this page and updating the "Last updated" date at the top of this Disclaimer.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Disclaimer, please contact us:
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

export default Disclaimer;