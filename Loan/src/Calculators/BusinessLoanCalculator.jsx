import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

export default function BusinessLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(1000000); // ₹10 Lakhs
  const [interestRate, setInterestRate] = useState(14); // 14%
  const [loanTerm, setLoanTerm] = useState(5); // 5 years
  const [processingFee, setProcessingFee] = useState(2); // 2%
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

  // Calculate EMI (Business Loan Formula)
  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const processingFeeAmount = (loanAmount * processingFee) / 100;

    // EMI Formula: [P x R x (1+R)^N] / [(1+R)^N-1]
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const total = emi * numberOfPayments;
    const interest = total - principal;

    setMonthlyPayment(emi);
    setTotalInterest(interest);
    setTotalPayment(total);
    setTotalProcessingFee(processingFeeAmount);
  };

  // Recalculate when inputs change
  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTerm, processingFee]);

  // Data for Pie Chart (Loan vs Interest vs Fees)
  const pieData = [
    { name: 'Principal', value: loanAmount },
    { name: 'Total Interest', value: totalInterest },
    { name: 'Processing Fee', value: totalProcessingFee },
  ];

  // Pie Chart Colors - Business theme (blue-green)
  const COLORS = ['#3b82f6', '#10b981', '#f59e0b'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* LEFT SIDE: Pie Chart + Summary */}
          <div className="md:w-1/2 p-6 bg-blue-50">
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
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Summary Cards */}
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-200">
                <div className="flex justify-between">
                  <p className="text-gray-600">Loan Amount</p>
                  <p className="text-lg font-bold text-blue-600">{formatINR(loanAmount)}</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-200">
                <div className="flex justify-between">
                  <p className="text-gray-600">Monthly EMI</p>
                  <p className="text-lg font-bold text-green-600">{formatINR(monthlyPayment)}</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-200">
                <div className="flex justify-between">
                  <p className="text-gray-600">Total Interest</p>
                  <p className="text-lg font-bold text-teal-600">{formatINR(totalInterest)}</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-200">
                <div className="flex justify-between">
                  <p className="text-gray-600">Processing Fee ({processingFee}%)</p>
                  <p className="text-lg font-bold text-amber-500">{formatINR(totalProcessingFee)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Sliders */}
          <div className="md:w-1/2 p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Business Loan Calculator</h1>
            <p className="text-gray-600 mb-6">Plan your business financing with accurate EMI calculations</p>

            {/* Loan Amount Slider (₹) */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">
                  Loan Amount (₹)
                </label>
                <span className="text-lg font-semibold text-blue-600">
                  {formatINR(loanAmount)}
                </span>
              </div>
              <input
                type="range"
                id="loanAmount"
                min="500000" // ₹5 Lakhs
                max="50000000" // ₹5 Crore
                step="100000" // ₹1 Lakh increments
                value={loanAmount}
                onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹5L</span>
                <span>₹5Cr</span>
              </div>
            </div>

            {/* Interest Rate Slider (%) */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700">
                  Interest Rate (%)
                </label>
                <span className="text-lg font-semibold text-green-600">
                  {interestRate}%
                </span>
              </div>
              <input
                type="range"
                id="interestRate"
                min="10"
                max="24"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>10%</span>
                <span>24%</span>
              </div>
            </div>

            {/* Loan Term Slider (Years) */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700">
                  Loan Term (Years)
                </label>
                <span className="text-lg font-semibold text-teal-600">
                  {loanTerm} years
                </span>
              </div>
              <input
                type="range"
                id="loanTerm"
                min="1"
                max="10"
                step="1"
                value={loanTerm}
                onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 year</span>
                <span>10 years</span>
              </div>
            </div>

            {/* Processing Fee Slider (%) */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="processingFee" className="block text-sm font-medium text-gray-700">
                  Processing Fee (%)
                </label>
                <span className="text-lg font-semibold text-amber-500">
                  {processingFee}%
                </span>
              </div>
              <input
                type="range"
                id="processingFee"
                min="0"
                max="5"
                step="0.1"
                value={processingFee}
                onChange={(e) => setProcessingFee(parseFloat(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0%</span>
                <span>5%</span>
              </div>
            </div>

            {/* EMI Display */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-700">Monthly EMI:</p>
                  <p className="text-sm text-gray-500">For {loanTerm} years at {interestRate}%</p>
                </div>
                <p className="text-3xl font-bold text-blue-700">{formatINR(monthlyPayment)}</p>
              </div>
              <div className="mt-2 pt-2 border-t border-blue-100">
                <p className="text-sm text-gray-600">
                  Total Payment: <span className="font-medium">{formatINR(totalPayment)}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}