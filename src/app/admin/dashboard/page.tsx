'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Lead {
  id: number
  name: string
  email: string
  phone: string
  company?: string
  service: string
  project_type?: string
  timeline?: string
  budget?: string
  message: string
  status: string
  notes?: string
  created_at: string
  updated_at: string
}

interface LeadStats {
  total: number
  new: number
  contacted: number
  qualified: number
  closed: number
}

export default function AdminDashboard() {
  const router = useRouter()
  const [leads, setLeads] = useState<Lead[]>([])
  const [stats, setStats] = useState<LeadStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    checkAuth()
    fetchLeads()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/session')
      if (!response.ok) {
        router.push('/admin/login')
      }
    } catch (error) {
      router.push('/admin/login')
    }
  }

  const fetchLeads = async () => {
    try {
      const response = await fetch('/api/leads', {
        headers: {
          Authorization: 'Bearer session',
        },
      })

      if (!response.ok) {
        throw new Error('Failed to fetch leads')
      }

      const data = await response.json()
      setLeads(data.leads || [])
      calculateStats(data.leads || [])
      setLoading(false)
    } catch (error) {
      console.error('Error fetching leads:', error)
      setLoading(false)
    }
  }

  const calculateStats = (leadsData: Lead[]) => {
    const stats: LeadStats = {
      total: leadsData.length,
      new: leadsData.filter((l) => l.status === 'new').length,
      contacted: leadsData.filter((l) => l.status === 'contacted').length,
      qualified: leadsData.filter((l) => l.status === 'qualified').length,
      closed: leadsData.filter((l) => l.status === 'closed').length,
    }
    setStats(stats)
  }

  const handleStatusChange = async (leadId: number, newStatus: string) => {
    try {
      const response = await fetch(`/api/leads/${leadId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      })

      if (response.ok) {
        // Refresh leads
        fetchLeads()
        if (selectedLead?.id === leadId) {
          setSelectedLead({ ...selectedLead, status: newStatus })
        }
      }
    } catch (error) {
      console.error('Error updating lead status:', error)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/admin/login')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const filteredLeads = filter === 'all' ? leads : leads.filter((l) => l.status === filter)

  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      new: 'bg-blue-100 text-blue-800',
      contacted: 'bg-yellow-100 text-yellow-800',
      qualified: 'bg-purple-100 text-purple-800',
      proposal: 'bg-orange-100 text-orange-800',
      closed: 'bg-green-100 text-green-800',
      lost: 'bg-red-100 text-red-800',
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CRM Dashboard</h1>
              <p className="text-sm text-gray-600">Cable-Com Services Lead Management</p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/" className="btn btn-ghost btn-sm">
                View Website
              </Link>
              <button onClick={handleLogout} className="btn btn-secondary btn-sm">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm text-gray-600 mb-1">Total Leads</div>
            <div className="text-3xl font-bold text-gray-900">{stats?.total || 0}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setFilter('new')}>
            <div className="text-sm text-gray-600 mb-1">New</div>
            <div className="text-3xl font-bold text-blue-600">{stats?.new || 0}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setFilter('contacted')}>
            <div className="text-sm text-gray-600 mb-1">Contacted</div>
            <div className="text-3xl font-bold text-yellow-600">{stats?.contacted || 0}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setFilter('qualified')}>
            <div className="text-sm text-gray-600 mb-1">Qualified</div>
            <div className="text-3xl font-bold text-purple-600">{stats?.qualified || 0}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setFilter('closed')}>
            <div className="text-sm text-gray-600 mb-1">Closed</div>
            <div className="text-3xl font-bold text-green-600">{stats?.closed || 0}</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="mb-6 flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-semibold ${
              filter === 'all' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            All Leads
          </button>
          <button
            onClick={() => setFilter('new')}
            className={`px-4 py-2 rounded-lg font-semibold ${
              filter === 'new' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            New
          </button>
          <button
            onClick={() => setFilter('contacted')}
            className={`px-4 py-2 rounded-lg font-semibold ${
              filter === 'contacted' ? 'bg-yellow-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Contacted
          </button>
          <button
            onClick={() => setFilter('qualified')}
            className={`px-4 py-2 rounded-lg font-semibold ${
              filter === 'qualified' ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Qualified
          </button>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Lead Info
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Budget
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                      No leads found
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{lead.name}</div>
                        {lead.company && <div className="text-sm text-gray-500">{lead.company}</div>}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm">
                          <a href={`mailto:${lead.email}`} className="text-primary-600 hover:underline">
                            {lead.email}
                          </a>
                        </div>
                        <div className="text-sm text-gray-500">
                          <a href={`tel:${lead.phone}`} className="hover:underline">
                            {lead.phone}
                          </a>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{lead.service}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{lead.budget || 'N/A'}</td>
                      <td className="px-6 py-4">
                        <select
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(lead.status)}`}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="qualified">Qualified</option>
                          <option value="proposal">Proposal</option>
                          <option value="closed">Closed</option>
                          <option value="lost">Lost</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">{formatDate(lead.created_at)}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => setSelectedLead(lead)}
                          className="text-primary-600 hover:text-primary-800 font-medium text-sm"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Lead Details Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">Lead Details</h3>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Name:</span> {selectedLead.name}</div>
                  <div><span className="font-medium">Email:</span> <a href={`mailto:${selectedLead.email}`} className="text-primary-600 hover:underline">{selectedLead.email}</a></div>
                  <div><span className="font-medium">Phone:</span> <a href={`tel:${selectedLead.phone}`} className="text-primary-600 hover:underline">{selectedLead.phone}</a></div>
                  {selectedLead.company && <div><span className="font-medium">Company:</span> {selectedLead.company}</div>}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Project Information</h4>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Service:</span> {selectedLead.service}</div>
                  {selectedLead.project_type && <div><span className="font-medium">Type:</span> {selectedLead.project_type}</div>}
                  {selectedLead.timeline && <div><span className="font-medium">Timeline:</span> {selectedLead.timeline}</div>}
                  {selectedLead.budget && <div><span className="font-medium">Budget:</span> {selectedLead.budget}</div>}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Message</h4>
                <p className="text-sm text-gray-700 bg-gray-50 p-4 rounded-lg">{selectedLead.message}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Status</h4>
                <select
                  value={selectedLead.status}
                  onChange={(e) => handleStatusChange(selectedLead.id, e.target.value)}
                  className="input-field"
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="qualified">Qualified</option>
                  <option value="proposal">Proposal</option>
                  <option value="closed">Closed</option>
                  <option value="lost">Lost</option>
                </select>
              </div>

              <div className="text-xs text-gray-500 pt-4 border-t border-gray-200">
                <div>Created: {formatDate(selectedLead.created_at)}</div>
                <div>Last Updated: {formatDate(selectedLead.updated_at)}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
