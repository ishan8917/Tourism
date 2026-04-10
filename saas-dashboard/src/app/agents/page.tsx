"use client"

import { Settings, Mail, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const MOCK_AGENTS = [
  { id: 1, name: "Reehan (You)", email: "reehan@wanderluxe.com", role: "Owner", active: true, performance: "$420k" },
  { id: 2, name: "Sarah Jenkins", email: "sarah@wanderluxe.com", role: "Senior Travel Designer", active: true, performance: "$150k" },
  { id: 3, name: "Michael Chen", email: "michael@wanderluxe.com", role: "Assistant", active: true, performance: "N/A" },
  { id: 4, name: "Pending Invite", email: "newagent@wanderluxe.com", role: "Agent", active: false, performance: "-" },
]

export default function AgentsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Team & Agents</h1>
          <p className="text-gray-500">Manage your staff, permissions, and view agent performance.</p>
        </div>
        <Button className="h-10 gap-2">
          <Mail className="w-4 h-4" /> Invite Agent
        </Button>
      </div>

      <div className="bg-white border border-border-light rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border-light bg-sidebar-bg/50">
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Agent Name</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Role & Permissions</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Sales (YTD)</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Manage</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-light">
            {MOCK_AGENTS.map((agent) => (
              <tr key={agent.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                      {agent.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-900">{agent.name}</span>
                      <span className="text-sm text-gray-500">{agent.email}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    {agent.role === "Owner" && <ShieldCheck className="w-4 h-4 text-primary" />}
                    {agent.role}
                  </div>
                </td>
                <td className="px-6 py-4">
                  {agent.active 
                    ? <Badge variant="success" className="bg-green-100 text-green-800 border-none hover:bg-green-100">Active</Badge>
                    : <Badge variant="warning" className="bg-orange-100 text-orange-800 border-none hover:bg-orange-100">Invited</Badge>
                  }
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">
                  {agent.performance}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-gray-400 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-100">
                    <Settings className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
