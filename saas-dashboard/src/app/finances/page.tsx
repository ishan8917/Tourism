"use client"

import { DollarSign, LineChart, Wallet, CreditCard } from "lucide-react"

export default function FinancesPage() {
  const stats = [
    { name: "Total Revenue (YTD)", value: "$634,500", change: "+24.5%", icon: DollarSign },
    { name: "Net Profit", value: "$98,200", change: "+12.2%", icon: LineChart },
    { name: "Pending Deposits", value: "$45,000", change: "-2.4%", icon: Wallet },
    { name: "Agency Spend", value: "$12,450", change: "+4.1%", icon: CreditCard },
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Financial Overview</h1>
        <p className="text-gray-500">Monitor your agency&apos;s fiscal health and profitability.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white border border-border-light rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-green-50 rounded-xl text-green-600">
                <stat.icon className="w-5 h-5" />
              </div>
              <span className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium mb-1">{stat.name}</h3>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-border-light rounded-2xl p-8 shadow-sm">
          <div className="flex justify-between items-center mb-8 border-b border-border-light pb-4">
            <h2 className="text-lg font-bold">Revenue Timeline</h2>
            <select className="bg-transparent text-sm font-medium text-gray-600 outline-none">
              <option>This Year</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="h-64 flex items-end justify-between gap-2 px-2 pb-6 border-b border-gray-100">
            {/* Fake Bar Chart */}
            {[40, 60, 45, 80, 55, 90, 70, 100, 85, 110, 95, 120].map((height, i) => (
              <div key={i} className="w-full bg-primary/10 rounded-t-sm hover:bg-primary/30 transition-colors relative group" style={{ height: `${height}%` }}>
                 <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                   ${height}k
                 </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-4 px-2">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>
        </div>
        
        <div className="bg-white border border-border-light rounded-2xl p-8 shadow-sm">
          <h2 className="text-lg font-bold mb-6">Recent Transactions</h2>
          <div className="space-y-6">
            {[
              { title: "Amalfi Trip Deposit", name: "Eleanor Richards", val: "+$5,000" },
              { title: "Kyoto Final Payment", name: "Marcus Thorne", val: "+$12,000" },
              { title: "Marketing Spend", name: "Facebook Ads", val: "-$1,250", expense: true },
            ].map((tx, i) => (
              <div key={i} className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-sm text-gray-900">{tx.title}</p>
                  <p className="text-xs text-gray-500">{tx.name}</p>
                </div>
                <span className={`font-bold text-sm ${tx.expense ? 'text-gray-900' : 'text-green-600'}`}>{tx.val}</span>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 text-sm font-semibold text-primary bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
            View All Ledger
          </button>
        </div>
      </div>
    </div>
  )
}
