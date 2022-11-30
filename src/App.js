import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import UserDetails from './components/Userdetails/Userdetails'
import Sidenav from './components/Sidenav/Sidenav';
import MyOrders from './components/MyOrders/MyOrders';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/profile" element={<>
          <Sidenav />
          <UserDetails />
        </>
        } ></Route>
        <Route path='/myorders' element={
          <>
            <Sidenav />
           <MyOrders/>
          </>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;