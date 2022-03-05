import './App.css';
import { Navbar, Footer, About} from './components';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>
      <About />
      <Footer/>
    </div>
    // <Router>
    //     <Navbar/>
    //     <Routes>
    //     <Route
    //         exact
    //         index
    //         // path="/"
    //         element={<About />}
    //       />
    //     </Routes>
    //     <Footer/>
    // </Router>
  );
}

export default App;
