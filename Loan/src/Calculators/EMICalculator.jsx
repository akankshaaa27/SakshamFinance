import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(1000000); // ₹10 Lakhs
  const [interestRate, setInterestRate] = useState(8.5); // 8.5%
  const [loanTerm, setLoanTerm] = useState(5); // 5 years
  const [processingFee, setProcessingFee] = useState(1); // 1%
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
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
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const processingFeeAmount = (loanAmount * processingFee) / 100;

    // EMI Formula: [P x R x (1+R)^N] / [(1+R)^N-1]
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const total = emi * numberOfPayments;
    const interest = total - loanAmount;

    setMonthlyPayment(emi);
    setTotalInterest(interest);
    setTotalPayment(total);
    setTotalProcessingFee(processingFeeAmount);
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTerm, processingFee]);

  // Data for Pie Chart
  const pieData = [
    { name: 'Principal', value: loanAmount },
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
            <h2 className="text-xl font-bold text-gray-800 mb-4">EMI Breakdown</h2>
            
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
                    <p className="text-gray-600">Loan Amount</p>
                    <p className="text-xs text-gray-500">Principal borrowed</p>
                  </div>
                  <p className="text-xl font-bold text-indigo-600">{formatINR(loanAmount)}</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-600">Monthly EMI</p>
                    <p className="text-xs text-gray-500">Fixed monthly payment</p>
                  </div>
                  <p className="text-xl font-bold text-purple-600">{formatINR(monthlyPayment)}</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-600">Total Interest</p>
                    <p className="text-xs text-gray-500">Over loan tenure</p>
                  </div>
                  <p className="text-xl font-bold text-indigo-700">{formatINR(totalInterest)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Input Controls */}
          <div className="md:w-1/2 p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">EMI Calculator</h1>
            <p className="text-gray-600 mb-6">Calculate your Equated Monthly Installment</p>

            {/* Loan Amount Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">
                  Loan Amount (₹)
                </label>
                <span className="text-lg font-semibold text-indigo-600">
                  {formatINR(loanAmount)}
                </span>
              </div>
              <input
                type="range"
                id="loanAmount"
                min="100000" // ₹1 Lakh
                max="5000000" // ₹50 Lakhs
                step="50000" // ₹50K increments
                value={loanAmount}
                onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹1L</span>
                <span>₹50L</span>
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
                min="6"
                max="20"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>6%</span>
                <span>20%</span>
              </div>
            </div>

            {/* Loan Term Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700">
                  Loan Term (Years)
                </label>
                <span className="text-lg font-semibold text-indigo-700">
                  {loanTerm} years
                </span>
              </div>
              <input
                type="range"
                id="loanTerm"
                min="1"
                max="30"
                step="1"
                value={loanTerm}
                onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-700"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 year</span>
                <span>30 years</span>
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
                min="0"
                max="3"
                step="0.1"
                value={processingFee}
                onChange={(e) => setProcessingFee(parseFloat(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-700"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0%</span>
                <span>3%</span>
              </div>
            </div>

            {/* Summary Card */}
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Monthly EMI</p>
                  <p className="text-lg font-bold text-purple-600">{formatINR(monthlyPayment)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Interest</p>
                  <p className="text-lg font-bold text-indigo-700">{formatINR(totalInterest)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Payment</p>
                  <p className="text-lg font-bold text-indigo-600">{formatINR(totalPayment)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Processing Fee</p>
                  <p className="text-lg font-bold text-indigo-800">{formatINR(totalProcessingFee)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}