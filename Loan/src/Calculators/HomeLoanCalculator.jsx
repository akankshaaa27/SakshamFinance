import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

export default function HomeLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(5000000); // ₹50 Lakhs
  const [interestRate, setInterestRate] = useState(8.5); // 8.5%
  const [loanTerm, setLoanTerm] = useState(20); // 20 years
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  // Format Indian Rupees (₹)
  const formatINR = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Calculate EMI (Indian Home Loan Formula)
  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    // EMI Formula: [P x R x (1+R)^N] / [(1+R)^N-1]
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const total = emi * numberOfPayments;
    const interest = total - principal;

    setMonthlyPayment(emi);
    setTotalInterest(interest);
    setTotalPayment(total);
  };

  // Recalculate when inputs change
  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTerm]);

  // Data for Pie Chart (Loan vs Interest)
  const pieData = [
    { name: 'Principal (Loan)', value: loanAmount },
    { name: 'Total Interest', value: totalInterest },
  ];

  // Pie Chart Colors
  const COLORS = ['#4f46e5', '#a78bfa'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* LEFT SIDE: Pie Chart + Summary */}
          <div className="md:w-1/2 p-6 bg-gray-50">
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
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <p className="text-gray-600">Loan Amount</p>
                <p className="text-2xl font-bold text-indigo-600">{formatINR(loanAmount)}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <p className="text-gray-600">Total Interest</p>
                <p className="text-2xl font-bold text-purple-500">{formatINR(totalInterest)}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <p className="text-gray-600">Total Payment</p>
                <p className="text-2xl font-bold text-indigo-700">{formatINR(totalPayment)}</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Sliders */}
          <div className="md:w-1/2 p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Home Loan Calculator</h1>
            <p className="text-gray-600 mb-6">Adjust sliders to calculate EMI</p>

            {/* Loan Amount Slider (₹) */}
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
                max="50000000" // ₹5 Crore
                step="50000" // ₹50K increments
                value={loanAmount}
                onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹1L</span>
                <span>₹5Cr</span>
              </div>
            </div>

            {/* Interest Rate Slider (%) */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700">
                  Interest Rate (%)
                </label>
                <span className="text-lg font-semibold text-indigo-600">
                  {interestRate}%
                </span>
              </div>
              <input
                type="range"
                id="interestRate"
                min="6.5"
                max="15"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>6.5%</span>
                <span>15%</span>
              </div>
            </div>

            {/* Loan Term Slider (Years) */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700">
                  Loan Term (Years)
                </label>
                <span className="text-lg font-semibold text-indigo-600">
                  {loanTerm} years
                </span>
              </div>
              <input
                type="range"
                id="loanTerm"
                min="5"
                max="30"
                step="1"
                value={loanTerm}
                onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>5 years</span>
                <span>30 years</span>
              </div>
            </div>

            {/* EMI Display */}
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
              <p className="text-gray-700">Your Estimated Monthly EMI:</p>
              <p className="text-3xl font-bold text-indigo-700">{formatINR(monthlyPayment)}</p>
              <p className="text-sm text-gray-500 mt-1">Principal + Interest</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}