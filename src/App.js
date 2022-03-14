import './App.css';
import { Navbar, Footer, About, GameAccounts, NotFound} from './components';
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
        <Route index element={<About />}/>
        <Route path='pages'>
          <Route path="accounts" element={<GameAccounts/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
        {/* <Footer/> */}
    </Router>
  );
}

export default App;
