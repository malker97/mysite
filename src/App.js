import './App.css';
import { Navbar, Footer, About, GameAccounts, NotFound} from './components';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<About />}
          />
          <Route
            exact
            path="/accounts"
            element={<GameAccounts />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
