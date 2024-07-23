import { Route, Routes } from 'react-router'
import IssueList from './issues/IssueList'
import Sidebar from './sidebar/Sidebar'

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Sidebar />
      <div className="flex flex-col justify-start items-center w-md md:w-lg lg:w-2xl p-2 mt-4">
        <Routes>
          <Route path="/list" element={<IssueList />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
