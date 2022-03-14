import './App.css';
import { Navbar, Footer, About, GameAccounts} from './components';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    // <div>
    //   <Navbar/>
    //   <About />
    //   <Footer/>
    // </div>
    <Router>
        <Navbar/>
        <Routes>
        <Route exact path='/' element={<About />}/>
        <Route exact path="/accounts" element={<GameAccounts/>}/>
        </Routes>
        {/* <Footer/> */}
    </Router>
  );
}

export default App;
