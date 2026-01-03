export type PracticeSummary = {
    id: string,
    name: string,
    city: string,
    country: string,
    newPatientsThisMonth: number,
    appointmentRequests: number,
    conversionRate: number,
    marketingSpend: number,
    monthlyTrend: number[] // length 6
}

export const practiceSummaryDummyData: PracticeSummary[] = [
    {
        id: '0001',
        name: "Smile Dental Clinic",
        city: "New York",
        country: "USA",
        newPatientsThisMonth: 85,
        appointmentRequests: 120,
        conversionRate: 70.8,
        marketingSpend: 3400,
        monthlyTrend: [2, 4, 6, 7, 9, 9] // length 6
    },
    {
        id: '0002',
        name: "Happy Teeth Practice",
        city: "London",
        country: "UK",
        newPatientsThisMonth: 62,
        appointmentRequests: 95,
        conversionRate: 65.3,
        marketingSpend: 780,
        monthlyTrend: [11, 34, 5, 4, 1] // length 6
    },
    {
        id: '0003',
        name: "Bright Smiles Dentistry",
        city: "Sydney",
        country: "Australia",
        newPatientsThisMonth: 78,
        appointmentRequests: 110,
        conversionRate: 70.3,
        marketingSpend: 900,
        monthlyTrend: [11, 19, 15, 14, 11] // length 6
    }
]