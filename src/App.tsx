import './App.css'
import PracticeSummaryCard from './components/PracticeSummaryCard'
import { practiceSummaryDummyData } from './model/practice-summary-type'

function App() {

  return (
    <div className='bg-gray-100 min-h-screen py-8'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {practiceSummaryDummyData.map((item, index) => (
            <div key={index} className='hover:scale-105 transition-all cursor-pointer'>
              <PracticeSummaryCard practiceSummary={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
