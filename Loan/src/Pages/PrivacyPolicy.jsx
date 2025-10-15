import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserLock, FaDatabase, FaCookie, FaEnvelope } from 'react-icons/fa';

const PrivacyPolicy = () => {
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
                        <FaShieldAlt className="text-blue-600 text-4xl" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-3">Privacy Policy</h1>
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
                        {/* Introduction */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Introduction</h2>
                            <p className="text-gray-600 mb-4">
                                Saksham Finance ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                            </p>
                            <p className="text-gray-600">
                                Please read this privacy policy carefully. By accessing or using our service, you agree to the collection and use of information in accordance with this policy.
                            </p>
                        </section>

                        {/* Information Collection */}
                        <section>
                            <div className="flex items-center mb-4">
                                <FaDatabase className="text-blue-500 mr-3" />
                                <h2 className="text-xl font-semibold text-gray-800">Information We Collect</h2>
                            </div>
                            <p className="text-gray-600 mb-3">We collect several types of information from and about users, including:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li><strong>Personal Identification Information:</strong> Name, email address, phone number, date of birth, PAN, Aadhaar, etc.</li>
                                <li><strong>Financial Information:</strong> Income details, bank statements, credit history, etc.</li>
                                <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage details.</li>
                                <li><strong>Application Information:</strong> Details provided in loan applications and supporting documents.</li>
                            </ul>
                        </section>

                        {/* How We Use Information */}
                        <section>
                            <div className="flex items-center mb-4">
                                <FaUserLock className="text-green-500 mr-3" />
                                <h2 className="text-xl font-semibold text-gray-800">How We Use Your Information</h2>
                            </div>
                            <p className="text-gray-600 mb-3">We use the information we collect for various purposes, including:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li>To provide and maintain our services</li>
                                <li>To process your loan applications and disburse funds</li>
                                <li>To improve customer service and respond to inquiries</li>
                                <li>To conduct credit checks and risk assessments</li>
                                <li>To comply with legal and regulatory requirements</li>
                                <li>To send important notices and updates</li>
                            </ul>
                        </section>

                        {/* Data Sharing */}
                        <section>
                            <div className="flex items-center mb-4">
                                <FaCookie className="text-purple-500 mr-3" />
                                <h2 className="text-xl font-semibold text-gray-800">Data Sharing and Disclosure</h2>
                            </div>
                            <p className="text-gray-600 mb-3">We may share your information with:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li>Credit bureaus and reference agencies for credit checks</li>
                                <li>Banks and financial institutions for loan processing</li>
                                <li>Legal and regulatory authorities when required by law</li>
                                <li>Service providers who assist in our operations (with strict confidentiality agreements)</li>
                                <li>Affiliates and partners for business purposes</li>
                            </ul>
                            <p className="text-gray-600 mt-4">
                                We do not sell your personal information to third parties for marketing purposes.
                            </p>
                        </section>

                        {/* Data Security */}
                        <section>
                            <div className="flex items-center mb-4">
                                <FaShieldAlt className="text-red-500 mr-3" />
                                <h2 className="text-xl font-semibold text-gray-800">Data Security</h2>
                            </div>
                            <p className="text-gray-600">
                                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These include encryption, access controls, secure servers, and regular security audits.
                            </p>
                        </section>

                        {/* Your Rights */}
                        <section>
                            <div className="flex items-center mb-4">
                                <FaUserLock className="text-yellow-500 mr-3" />
                                <h2 className="text-xl font-semibold text-gray-800">Your Data Protection Rights</h2>
                            </div>
                            <p className="text-gray-600 mb-3">You have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li>Access and receive a copy of your personal data</li>
                                <li>Request correction of inaccurate or incomplete data</li>
                                <li>Request deletion of your personal data under certain conditions</li>
                                <li>Object to processing of your personal data</li>
                                <li>Request restriction of processing your personal data</li>
                                <li>Withdraw consent at any time where we rely on consent to process your data</li>
                            </ul>
                        </section>

                        {/* Cookies */}
                        <section>
                            <div className="flex items-center mb-4">
                                <FaCookie className="text-indigo-500 mr-3" />
                                <h2 className="text-xl font-semibold text-gray-800">Cookies and Tracking Technologies</h2>
                            </div>
                            <p className="text-gray-600">
                                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                            </p>
                        </section>

                        {/* Changes to Policy */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Changes to This Privacy Policy</h2>
                            <p className="text-gray-600">
                                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                            </p>
                        </section>

                        {/* Contact Info */}
                        <section>
                            <div className="flex items-center mb-4">
                                <FaEnvelope className="text-blue-500 mr-3" />
                                <h2 className="text-xl font-semibold text-gray-800">Contact Us</h2>
                            </div>
                            <p className="text-gray-600">
                                If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;