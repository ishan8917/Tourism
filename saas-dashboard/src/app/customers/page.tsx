/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { useEffect, useState } from "react"
import { Search, Plus, MoreHorizontal, Phone, User, Mail, Smartphone } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedModal } from "@/components/ui/AnimatedModal"
import { MagicButton } from "@/components/ui/MagicButton"





const MOCK_CUSTOMERS = [
  { id: 1, name: "Eleanor Richards", email: "eleanor.r@example.com", phone: "+1 (555) 019-2834", ltv: "$45,200", status: "VIP" },
  { id: 2, name: "Marcus Thorne", email: "m.thorne@example.com", phone: "+1 (555) 123-8947", ltv: "$12,400", status: "Active" },
  { id: 3, name: "Sylvia Plath", email: "sylvia@example.com", phone: "+1 (555) 983-2212", ltv: "$0", status: "Lead" },
  { id: 4, name: "Jonathan Davis", email: "jdavis@example.com", phone: "+1 (555) 664-9081", ltv: "$8,950", status: "Active" },
]

export default function CustomersPage() {
  const [customers, setCustomers] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [search, setSearch] = useState("")
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  })

  const fetchCustomers = async() =>{
    const res = await fetch ("/Tourism/dashboard/api/customers")
    const data = await res.json()
    setCustomers(data)
  }

  const handleSubmit = async () => {
    const isEditing = !!editingId;
    const method = isEditing ? "PUT" : "POST";
    const payload = isEditing ? { ...form, id: editingId } : form;

    const res = await fetch("/Tourism/dashboard/api/customers", {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })

    if(res.ok){
      setShowForm(false)
      setEditingId(null)
      setForm({name:"", email: "", phone: ""})
      fetchCustomers();
    }
  }

  useEffect(() =>{
    fetchCustomers();
  }, [])

  const filtered = customers.filter((c: any) => 
    c.name?.toLowerCase().includes(search.toLowerCase()) || 
    c.email?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Client Directory</h1>
          <p className="text-gray-500">Manage your exclusive list of travelers.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search clients..." 
              className="pl-9 h-10 bg-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button className="h-10 gap-2" onClick={() => {
            setEditingId(null)
            setForm({name:"", email: "", phone: ""})
            setShowForm(true)
          }}>
            <Plus className="w-4 h-4" /> New Client
          </Button>
        </div>
      </div>
      <AnimatedModal 
        isOpen={showForm} 
        onClose={() => {
          setShowForm(false);
          setEditingId(null);
          setForm({name:"", email: "", phone: ""});
        }} 
        title={editingId ? "Edit Client Details" : "Add New Client"}
      >
        <div className="space-y-5">
          <div className="space-y-1 relative">
            <label className="text-sm font-medium text-gray-700 ml-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input 
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                placeholder="e.g. John Doe" 
                value={form.name} 
                onChange={(e) => setForm({...form, name: e.target.value})}
              />
            </div>
          </div>
          
          <div className="space-y-1 relative">
            <label className="text-sm font-medium text-gray-700 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input 
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                placeholder="john@example.com" 
                type="email"
                value={form.email} 
                onChange={(e) => setForm({...form, email: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-1 relative">
            <label className="text-sm font-medium text-gray-700 ml-1">Phone Number</label>
            <div className="relative">
              <Smartphone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input 
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                placeholder="+1 (555) 000-0000" 
                value={form.phone} 
                onChange={(e) => setForm({...form, phone: e.target.value})}
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <MagicButton variant="secondary" className="flex-1" onClick={() => {
              setShowForm(false);
              setEditingId(null);
              setForm({name:"", email: "", phone: ""});
            }}>Cancel</MagicButton>
            <MagicButton variant="primary" className="flex-1" onClick={handleSubmit}>
              {editingId ? "Save Changes" : "Create Client"}
            </MagicButton>
          </div>
        </div>
      </AnimatedModal>

      <div className="bg-white border border-border-light rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border-light bg-sidebar-bg/50">
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Client Details</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Lifetime Value</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-light">
            {filtered.map((c: any) => (
              <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-900">{c.name}</span>
                    <span className="text-sm text-gray-500">{c.email}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <button className="hover:text-primary transition-colors flex gap-2 items-center">
                      <Phone className="w-4 h-4" /> {c.phone}
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4">
                  {c.status === "VIP" && <Badge className="bg-purple-100 text-purple-800 border-none hover:bg-purple-100">VIP Client</Badge>}
                  {c.status === "Active" && <Badge variant="success" className="bg-green-100 text-green-800 border-none hover:bg-green-100">Active</Badge>}
                  {c.status === "New Lead" && <Badge variant="secondary" className="bg-gray-100 text-gray-800 border-none hover:bg-gray-100">New Lead</Badge>}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">
                  {c.ltv}
                </td>
                <td className="px-6 py-4 text-right relative">
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === c.id ? null : c.id)}
                    className="text-gray-400 hover:text-gray-900 transition-colors focus:outline-none p-1 rounded hover:bg-gray-200"
                  >
                    <MoreHorizontal className="w-5 h-5 ml-auto" />
                  </button>
                  
                  {activeDropdown === c.id && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setActiveDropdown(null)} />
                      <div className="absolute right-8 top-10 w-36 bg-white rounded-lg shadow-hover border border-border-light z-20 py-1 flex flex-col text-sm animate-fade-in">
                        <button className="text-left px-4 py-2 hover:bg-gray-50 text-gray-700 w-full" onClick={() => { 
                          setActiveDropdown(null); 
                          setEditingId(c.id);
                          setForm({ name: c.name || "", email: c.email || "", phone: c.phone || "" });
                          setShowForm(true);
                        }}>Edit Client</button>
                        <button className="text-left px-4 py-2 hover:bg-gray-50 text-gray-700 w-full" onClick={() => { setActiveDropdown(null); alert("View History") }}>View History</button>
                        <hr className="my-1 border-gray-100" />
                        <button className="text-left px-4 py-2 hover:bg-red-50 text-red-600 w-full" onClick={() => { setActiveDropdown(null); alert("Delete Client") }}>Archive</button>
                      </div>
                    </>
                  )}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                  No clients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    
  )
}
