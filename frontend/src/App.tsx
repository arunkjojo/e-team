import { BrowserRouter as Router, Route, Outlet, Routes } from "react-router-dom";

import Sudoku from './components/Sudoku';
import ViewSudoku from './components/ViewSudoku';
import Navbar from './components/Navbar';
import ErrorPage from "./components/ErrorPage";

const App: React.FC = () => {

  return (
    <Router>
      <div className="container">
        <Navbar />
        <Outlet />
        <div className="m-3">
          <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<Sudoku />} />
            <Route path="/view/:id" element={<ViewSudoku />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;