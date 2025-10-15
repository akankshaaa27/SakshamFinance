import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export default function LoanAgainstPropertyCalculator() {
  const [propertyValue, setPropertyValue] = useState(10000000); // ₹1 Crore
  const [loanPercentage, setLoanPercentage] = useState(60); // 60% of property value
  const [interestRate, setInterestRate] = useState(10.5); // 10.5%
  const [loanTerm, setLoanTerm] = useState(15); // 15 years
  const [processingFee, setProcessingFee] = useState(1); // 1%
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [totalProcessingFee, setTotalProcessingFee] = useState(0);

  // Format Indian Rupees (₹)
  const formatINR = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Calculate EMI
  const calculateEMI = () => {
    const calculatedLoanAmount = (propertyValue * loanPercentage) / 100;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const processingFeeAmount = (calculatedLoanAmount * processingFee) / 100;

    // EMI Formula: [P x R x (1+R)^N] / [(1+R)^N-1]
    const emi =
      (calculatedLoanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const total = emi * numberOfPayments;
    const interest = total - calculatedLoanAmount;

    setLoanAmount(calculatedLoanAmount);
    setMonthlyPayment(emi);
    setTotalInterest(interest);
    setTotalPayment(total);
    setTotalProcessingFee(processingFeeAmount);
  };

  useEffect(() => {
    calculateEMI();
  }, [propertyValue, loanPercentage, interestRate, loanTerm, processingFee]);

  // Data for Pie Chart
  const pieData = [
    { name: 'Loan Amount', value: loanAmount },
    { name: 'Total Interest', value: totalInterest },
    { name: 'Processing Fee', value: totalProcessingFee },
  ];

  // Chart colors
  const COLORS = ['#4f46e5', '#a78bfa', '#c084fc'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Left Side - Visualizations */}
          <div className="md:w-1/2 p-6 bg-indigo-50">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Loan Breakdown</h2>
            
            {/* Pie Chart */}
            <div className="h-64 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => formatINR(value)} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Key Metrics */}
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-600">Property Value</p>
                    <p className="text-xs text-gray-500">Current market value</p>
                  </div>
                  <p className="text-xl font-bold text-indigo-600">{formatINR(propertyValue)}</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-600">Loan Amount</p>
                    <p className="text-xs text-gray-500">{loanPercentage}% of property value</p>
                  </div>
                  <p className="text-xl font-bold text-indigo-700">{formatINR(loanAmount)}</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-600">Monthly EMI</p>
                    <p className="text-xs text-gray-500">For {loanTerm} years</p>
                  </div>
                  <p className="text-xl font-bold text-purple-600">{formatINR(monthlyPayment)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Input Controls */}
          <div className="md:w-1/2 p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Loan Against Property Calculator</h1>
            <p className="text-gray-600 mb-6">Calculate your LAP EMI based on property value</p>

            {/* Property Value Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="propertyValue" className="block text-sm font-medium text-gray-700">
                  Property Value (₹)
                </label>
                <span className="text-lg font-semibold text-indigo-600">
                  {formatINR(propertyValue)}
                </span>
              </div>
              <input
                type="range"
                id="propertyValue"
                min="1000000" // ₹10 Lakhs
                max="100000000" // ₹10 Crore
                step="100000" // ₹1 Lakh increments
                value={propertyValue}
                onChange={(e) => setPropertyValue(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹10L</span>
                <span>₹10Cr</span>
              </div>
            </div>

            {/* Loan Percentage Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="loanPercentage" className="block text-sm font-medium text-gray-700">
                  Loan Percentage
                </label>
                <span className="text-lg font-semibold text-indigo-700">
                  {loanPercentage}% ({formatINR((propertyValue * loanPercentage) / 100)})
                </span>
              </div>
              <input
                type="range"
                id="loanPercentage"
                min="40"
                max="80"
                step="1"
                value={loanPercentage}
                onChange={(e) => setLoanPercentage(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-700"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>40%</span>
                <span>80%</span>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700">
                  Interest Rate (%)
                </label>
                <span className="text-lg font-semibold text-purple-600">
                  {interestRate}% p.a.
                </span>
              </div>
              <input
                type="range"
                id="interestRate"
                min="8"
                max="18"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>8%</span>
                <span>18%</span>
              </div>
            </div>

            {/* Loan Term Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700">
                  Loan Term (Years)
                </label>
                <span className="text-lg font-semibold text-indigo-800">
                  {loanTerm} years
                </span>
              </div>
              <input
                type="range"
                id="loanTerm"
                min="5"
                max="20"
                step="1"
                value={loanTerm}
                onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-800"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>5 years</span>
                <span>20 years</span>
              </div>
            </div>

            {/* Processing Fee Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="processingFee" className="block text-sm font-medium text-gray-700">
                  Processing Fee (%)
                </label>
                <span className="text-lg font-semibold text-purple-700">
                  {processingFee}% ({formatINR((loanAmount * processingFee) / 100)})
                </span>
              </div>
              <input
                type="range"
                id="processingFee"
                min="0.5"
                max="3"
                step="0.1"
                value={processingFee}
                onChange={(e) => setProcessingFee(parseFloat(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-700"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0.5%</span>
                <span>3%</span>
              </div>
            </div>

            {/* Summary Card */}
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Total Interest</p>
                  <p className="text-lg font-bold text-purple-600">{formatINR(totalInterest)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Payment</p>
                  <p className="text-lg font-bold text-indigo-700">{formatINR(totalPayment)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Processing Fee</p>
                  <p className="text-lg font-bold text-indigo-600">{formatINR(totalProcessingFee)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Loan-to-Value</p>
                  <p className="text-lg font-bold text-indigo-800">{loanPercentage}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}