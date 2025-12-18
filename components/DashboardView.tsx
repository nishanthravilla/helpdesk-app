
import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  BarChart2, 
  Activity,
  ArrowUpRight
} from 'lucide-react';

const DashboardView: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#F9FAFB] overflow-y-auto">
      {/* Page Header */}
      <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between sticky top-0 z-10 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Operational Dashboard</h1>
          <p className="text-xs text-gray-500 mt-0.5 font-medium uppercase tracking-tight">Real-time IT Helpdesk Overview</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 bg-green-50 text-green-700 px-3 py-1.5 rounded-full border border-green-100 text-xs font-bold">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span>SLA ACTIVE</span>
          </div>
          <div className="flex items-center space-x-1.5 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full border border-blue-100 text-xs font-bold">
            <Activity size={14} />
            <span>REAL-TIME TRACKING</span>
          </div>
        </div>
      </header>

      {/* Dashboard Grid */}
      <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
        
        {/* KPI Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard 
            title="SLA Compliance" 
            value="92.4%" 
            subtext="↑ 2.1% from last month" 
            icon={<CheckCircle2 className="text-green-500" size={20} />} 
          />
          <KPICard 
            title="Avg First Response" 
            value="1h 18m" 
            subtext="Target < 2h" 
            icon={<Clock className="text-blue-500" size={20} />} 
          />
          <KPICard 
            title="Resolved vs Open (Today)" 
            value="68%" 
            subtext="142 total tickets today" 
            icon={<BarChart2 className="text-purple-500" size={20} />} 
          />
          <KPICard 
            title="SLA Breach Alerts" 
            value="3" 
            subtext="Require immediate attention" 
            icon={<AlertCircle className="text-red-500" size={20} />} 
            isCritical
          />
        </div>

        {/* Charts and Lists Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Workload severity Donut Chart (Simulated with SVG) */}
          <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-gray-800">Tickets by Priority</h3>
              <ArrowUpRight size={16} className="text-gray-400" />
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 mb-8">
                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                  <path className="text-gray-100" strokeDasharray="100, 100" strokeWidth="3" fill="none" stroke="currentColor" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-red-500" strokeDasharray="8, 100" strokeWidth="4" strokeLinecap="round" fill="none" stroke="currentColor" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-orange-500" strokeDasharray="22, 100" strokeDashoffset="-8" strokeWidth="4" strokeLinecap="round" fill="none" stroke="currentColor" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-yellow-400" strokeDasharray="40, 100" strokeDashoffset="-30" strokeWidth="4" strokeLinecap="round" fill="none" stroke="currentColor" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-green-500" strokeDasharray="30, 100" strokeDashoffset="-70" strokeWidth="4" strokeLinecap="round" fill="none" stroke="currentColor" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold">142</span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">Total</span>
                </div>
              </div>
              <div className="w-full space-y-2">
                <LegendItem color="bg-red-500" label="P1 – Critical" percent="8%" />
                <LegendItem color="bg-orange-500" label="P2 – High" percent="22%" />
                <LegendItem color="bg-yellow-400" label="P3 – Medium" percent="40%" />
                <LegendItem color="bg-green-500" label="P4 – Low" percent="30%" />
              </div>
            </div>
          </div>

          {/* Agent Performance Bar Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-bold text-gray-800">Agent Performance</h3>
                <p className="text-xs text-gray-400">Tickets resolved in last 24 hours</p>
              </div>
              <button className="text-xs font-bold text-blue-600 hover:underline">View All</button>
            </div>
            <div className="space-y-6">
              <PerformanceBar name="Alex R." count={45} max={50} color="bg-blue-600" />
              <PerformanceBar name="Sam L." count={32} max={50} color="bg-blue-500" />
              <PerformanceBar name="Jordan P." count={28} max={50} color="bg-blue-400" />
              <PerformanceBar name="Casey M." count={24} max={50} color="bg-blue-300" />
              <PerformanceBar name="Riley W." count={18} max={50} color="bg-blue-200" />
            </div>
          </div>

          {/* Live SLA Countdowns */}
          <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-gray-800">Live SLA Countdowns</h3>
              <Clock size={16} className="text-gray-400" />
            </div>
            <div className="space-y-4">
              <SLAItem id="INC-2045" label="Response Due" time="0m 55s" color="text-red-600 bg-red-50" />
              <SLAItem id="INC-2046" label="Response Due" time="48m 55s" color="text-orange-600 bg-orange-50" />
              <SLAItem id="INC-2047" label="Response Due" time="78m 55s" color="text-green-600 bg-green-50" />
              <SLAItem id="INC-2048" label="Response Due" time="0m 0s" color="text-white bg-red-600" isBreached />
              <SLAItem id="INC-2049" label="Resolution Due" time="12h 10m" color="text-blue-600 bg-blue-50" />
            </div>
          </div>

          {/* Trending Issues (Insight Panel) */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-bold text-gray-800">Trending Issues</h3>
                <p className="text-xs text-gray-400">Last 7 days volume</p>
              </div>
              <div className="flex items-center space-x-2 text-[10px] font-bold text-gray-400">
                <span className="flex items-center space-x-1"><TrendingUp size={12} className="text-red-500"/> <span>Rising</span></span>
                <span className="flex items-center space-x-1"><TrendingDown size={12} className="text-green-500"/> <span>Falling</span></span>
              </div>
            </div>
            <div className="divide-y divide-gray-100">
              <TrendingIssue label="Network outage" count={24} trend="up" />
              <TrendingIssue label="Login issues" count={18} trend="up" />
              <TrendingIssue label="Slow systems" count={12} trend="down" />
              <TrendingIssue label="Email problems" count={9} trend="none" />
              <TrendingIssue label="Printer errors" count={4} trend="down" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const KPICard: React.FC<{ title: string, value: string, subtext: string, icon: React.ReactNode, isCritical?: boolean }> = ({ title, value, subtext, icon, isCritical }) => (
  <div className={`bg-white p-5 rounded-2xl shadow-sm border transition-all hover:shadow-md ${isCritical ? 'border-red-100' : 'border-gray-200'}`}>
    <div className="flex items-center justify-between mb-3">
      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{title}</span>
      <div className={`p-2 rounded-xl ${isCritical ? 'bg-red-50' : 'bg-gray-50'}`}>
        {icon}
      </div>
    </div>
    <div className="flex flex-col">
      <span className={`text-2xl font-bold ${isCritical ? 'text-red-600' : 'text-gray-800'}`}>{value}</span>
      <span className={`text-[11px] font-medium mt-1 ${subtext.includes('↑') ? 'text-green-600' : isCritical ? 'text-red-400' : 'text-gray-500'}`}>
        {subtext}
      </span>
    </div>
  </div>
);

const LegendItem: React.FC<{ color: string, label: string, percent: string }> = ({ color, label, percent }) => (
  <div className="flex items-center justify-between text-xs">
    <div className="flex items-center space-x-2">
      <div className={`w-2.5 h-2.5 rounded-full ${color}`}></div>
      <span className="text-gray-600 font-medium">{label}</span>
    </div>
    <span className="font-bold text-gray-800">{percent}</span>
  </div>
);

const PerformanceBar: React.FC<{ name: string, count: number, max: number, color: string }> = ({ name, count, max, color }) => (
  <div className="space-y-1.5 w-full">
    <div className="flex justify-between items-center text-xs">
      <span className="font-semibold text-gray-700">{name}</span>
      <span className="font-bold text-gray-900">{count} tickets</span>
    </div>
    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
      <div 
        className={`${color} h-full transition-all duration-1000 ease-out`} 
        style={{ width: `${(count / max) * 100}%` }}
      ></div>
    </div>
  </div>
);

const SLAItem: React.FC<{ id: string, label: string, time: string, color: string, isBreached?: boolean }> = ({ id, label, time, color, isBreached }) => (
  <div className="flex items-center justify-between p-3 rounded-xl border border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer">
    <div className="flex flex-col">
      <span className="text-[10px] font-bold text-gray-400">#{id}</span>
      <span className="text-xs font-semibold text-gray-700">{label}</span>
    </div>
    <div className={`px-3 py-1 rounded-lg text-xs font-mono font-bold ${color}`}>
      {isBreached ? 'BREACHED' : time}
    </div>
  </div>
);

const TrendingIssue: React.FC<{ label: string, count: number, trend: 'up' | 'down' | 'none' }> = ({ label, count, trend }) => (
  <div className="flex items-center justify-between py-4 group">
    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">{label}</span>
    <div className="flex items-center space-x-3">
      <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded">{count}</span>
      {trend === 'up' && <TrendingUp size={14} className="text-red-500" />}
      {trend === 'down' && <TrendingDown size={14} className="text-green-500" />}
      {trend === 'none' && <div className="w-3.5"></div>}
    </div>
  </div>
);

export default DashboardView;
