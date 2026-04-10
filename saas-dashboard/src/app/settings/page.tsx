"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Platform Settings</h1>
        <p className="text-gray-500">Manage your agency profile, billing, and API integrations.</p>
      </div>

      <div className="bg-white border border-border-light rounded-2xl p-8 shadow-sm space-y-8">
        <div>
          <h2 className="text-lg font-bold mb-4">Agency Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Agency Name</label>
              <Input defaultValue="WanderLuxe Travels" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Contact Email</label>
              <Input defaultValue="hello@wanderluxe.com" type="email" />
            </div>
            <div className="space-y-2 col-span-full">
              <label className="text-sm font-semibold text-gray-700">Brand Guidelines (AI Context)</label>
              <Input defaultValue="Premium, concise, emotive language. Focus on exclusivity." />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button>Save Profile</Button>
          </div>
        </div>
        
        <div className="border-t border-border-light pt-8">
          <h2 className="text-lg font-bold mb-4">Social Integrations</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-border-light rounded-xl bg-sidebar-bg">
              <div>
                <p className="font-semibold text-gray-900">Instagram API</p>
                <p className="text-xs text-gray-500">Connected as @wanderluxe</p>
              </div>
              <Button variant="outline" size="sm">Disconnect</Button>
            </div>
            <div className="flex items-center justify-between p-4 border border-border-light rounded-xl">
              <div>
                <p className="font-semibold text-gray-900">Facebook Pages API</p>
                <p className="text-xs text-gray-500">Not connected</p>
              </div>
              <Button size="sm">Connect</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
