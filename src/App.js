import './App.css';
import { Navbar, Footer, About} from './components';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
        <Route
            exact
            path="/"
            element={<About />}
          />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
