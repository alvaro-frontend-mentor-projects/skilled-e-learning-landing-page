import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element= {<MainPage/>}> </Route>
        
      </Routes>
    </div>
  );
}

export default App;
