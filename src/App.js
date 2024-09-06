import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'

import ModelPortfolioUsa from './pages/pageTable/ModelPortfolioUsa'
import OnlineTableChn from './pages/pageTable/OnlineTableChn'
import PortfolioList from './pages/PortfolioList'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tables/online-table-chn" element=<OnlineTableChn /> />
        <Route
          path="/tables/model-portfolio-usa"
          element=<ModelPortfolioUsa />
        />
        <Route path="/" element=<PortfolioList /> />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
