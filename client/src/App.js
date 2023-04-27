import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import './index.css';
import VerifyOtp from "./Registration/VerifyOtp";
import RegistrationDetails from './Registration/RegistrationDetails';

function App() {
  return (
    <div className="App bg-black">
      Hello world!
      <Router>
        <Routes>
        <Route path='/registration' element={<VerifyOtp/>}>
          <Route path='enterdetails' element={<RegistrationDetails/>}/>
        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
