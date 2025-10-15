import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

export default function FurnitureLoanCalculator() {
  const [furnitureCost, setFurnitureCost] = useState(50000); // Default ₹50,000
  const [downPayment, setDownPayment] = useState(5000); // Default ₹5,000
  const [interestRate, setInterestRate] = useState(12); // 12%
  const [loanTerm, setLoanTerm] = useState(2); // 2 years
  const [processingFee, setProcessingFee] = useState(1.5); // 1.5%
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
    const principal = furnitureCost - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const processingFeeAmount = (principal * processingFee) / 100;

    if (principal <= 0) {
      setMonthlyPayment(0);
      setTotalInterest(0);
      setTotalPayment(0);
      setTotalProcessingFee(0);
      return;
    }

    // EMI Formula
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
  }, [furnitureCost, downPayment, interestRate, loanTerm, processingFee]);

  // Pie Chart Data
  const pieData = [
    { name: 'Principal', value: furnitureCost - downPayment },
    { name: 'Total Interest', value: totalInterest },
    { name: 'Processing Fee', value: totalProcessingFee },
  ];

  const COLORS = ['#6366f1', '#f97316', '#10b981']; // Modern color palette

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-orange-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* LEFT SIDE: Pie Chart + Summary */}
          <div className="md:w-1/2 p-6 bg-purple-50">
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
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(1)}%`
                    }
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
              <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200">
                <div className="flex justify-between">
                  <p className="text-gray-600">Furniture Cost</p>
                  <p className="text-lg font-bold text-purple-600">
                    {formatINR(furnitureCost)}
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200">
                <div className="flex justify-between">
                  <p className="text-gray-600">Down Payment</p>
                  <p className="text-lg font-bold text-orange-600">
                    {formatINR(downPayment)}
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200">
                <div className="flex justify-between">
                  <p className="text-gray-600">Monthly EMI</p>
                  <p className="text-lg font-bold text-green-600">
                    {formatINR(monthlyPayment)}
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200">
                <div className="flex justify-between">
                  <p className="text-gray-600">Total Interest</p>
                  <p className="text-lg font-bold text-amber-600">
                    {formatINR(totalInterest)}
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200">
                <div className="flex justify-between">
                  <p className="text-gray-600">Processing Fee ({processingFee}%)</p>
                  <p className="text-lg font-bold text-teal-500">
                    {formatINR(totalProcessingFee)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Sliders */}
          <div className="md:w-1/2 p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Furniture Loan Calculator
            </h1>
            <p className="text-gray-600 mb-6">
              Plan your furniture purchase with accurate EMI calculations.
            </p>

            {/* Furniture Cost Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="furnitureCost"
                  className="block text-sm font-medium text-gray-700"
                >
                  Furniture Cost (₹)
                </label>
                <span className="text-lg font-semibold text-purple-600">
                  {formatINR(furnitureCost)}
                </span>
              </div>
              <input
                type="range"
                id="furnitureCost"
                min="10000"
                max="500000"
                step="1000"
                value={furnitureCost}
                onChange={(e) => setFurnitureCost(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹10k</span>
                <span>₹5L</span>
              </div>
            </div>

            {/* Down Payment Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="downPayment"
                  className="block text-sm font-medium text-gray-700"
                >
                  Down Payment (₹)
                </label>
                <span className="text-lg font-semibold text-orange-600">
                  {formatINR(downPayment)}
                </span>
              </div>
              <input
                type="range"
                id="downPayment"
                min="0"
                max={furnitureCost}
                step="1000"
                value={downPayment}
                onChange={(e) => setDownPayment(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹0</span>
                <span>{formatINR(furnitureCost)}</span>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="interestRate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Interest Rate (%)
                </label>
                <span className="text-lg font-semibold text-green-600">
                  {interestRate}%
                </span>
              </div>
              <input
                type="range"
                id="interestRate"
                min="8"
                max="20"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>8%</span>
                <span>20%</span>
              </div>
            </div>

            {/* Loan Term Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="loanTerm"
                  className="block text-sm font-medium text-gray-700"
                >
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
                max="5"
                step="1"
                value={loanTerm}
                onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 year</span>
                <span>5 years</span>
              </div>
            </div>

            {/* Processing Fee Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="processingFee"
                  className="block text-sm font-medium text-gray-700"
                >
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
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-700">Monthly EMI:</p>
                  <p className="text-sm text-gray-500">
                    For {loanTerm} years at {interestRate}%
                  </p>
                </div>
                <p className="text-3xl font-bold text-purple-700">
                  {formatINR(monthlyPayment)}
                </p>
              </div>
              <div className="mt-2 pt-2 border-t border-purple-100">
                <p className="text-sm text-gray-600">
                  Total Payment:{' '}
                  <span className="font-medium">{formatINR(totalPayment)}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
