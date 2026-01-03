import type { PracticeSummary } from "../model/practice-summary-type";
import TrendSparkline from "./TrendSparkline";

export default function PracticeSummaryCard({ practiceSummary }: { practiceSummary: PracticeSummary}){
    const { name, city, country, newPatientsThisMonth, appointmentRequests, conversionRate, marketingSpend, monthlyTrend } = practiceSummary
    return(
        <div className="text-[#565D6D] p-4 sm:p-5 bg-white shadow rounded-md w-full sm:w-72 md:w-80 space-y-4">
            <div>
                <h1 className="text-lg text-black font-bold">{name}</h1>
                <p className="text-sm">{`${city}, ${country}`}</p>
            </div>
            <div className="text-sm grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <p>New Patients This Month:</p>
                    <p className="text-black font-bold">{newPatientsThisMonth}</p>
                </div>
                <div>
                    <p>Appointment Requests:</p>
                    <p className="text-black font-bold">{appointmentRequests}</p>
                </div>
                <div>
                    <p>Conversion Rate:</p>
                    <p className="text-black font-bold">{conversionRate}%</p>
                </div>
                <div>
                    <p>Marketing Spend:</p>
                    <p className="text-black font-bold">${marketingSpend}</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
                    <div className="space-y-1">
                        <p>Monthly Trend</p>
                        <TrendSparkline values={monthlyTrend} />
                    </div>
                    <div className="text-sm font-semibold mt-2 sm:mt-0">
                        {(() => {
                            const delta = monthlyTrend[monthlyTrend.length - 1] - monthlyTrend[0]
                            if (delta > 0) return <span className="text-green-500">▲ High</span>
                            if (delta < 0) return <span className="text-red-500">▼ At Risk</span>
                            return <span className="text-gray-500">— Stable</span>
                        })()}
                    </div>
                </div>
                <div className="mt-3 text-xs flex flex-col text-left sm:text-center sm:col-span-2">
                    <p className="font-bold">Recommendations</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Optimise mobile landing page layout</li>
                        <li>Consider increasing ad budget on top performers</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}