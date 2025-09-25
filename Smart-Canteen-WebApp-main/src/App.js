import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import FoodCircle from './Components/FoodCircle';
import FoodSlider from './Components/FoodSlider';
import AllDishBox from './Components/AllDishBox';
import Footer from './Components/Footer';
import Orders from './Components/Orders';
import Cart from './Components/Cart';
import AdminPage from './Components/AdminComponent/AdminPage';
import StockEntry from './Components/AdminComponent/StockEntry';
import StockIssue from './Components/AdminComponent/StockIssue';
import EmployeeMessage from './Components/EmployeeComponent/EmployeeMessage';
import AddFood from './Components/EmployeeComponent/AddFood';

function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />
        {/* router used inside the routes */}
        <Routes>

          {/* route used for different routing */}
          <Route path="/" element={
            <>
              <FoodCircle />
              <FoodSlider />
              <AllDishBox />
            </>
          }
          />

          {/* route used for different routing */}
          <Route path="/orders" element={<Orders />} />


          {/* route used for different routing */}
          <Route path="/cart" element={<Cart />} />

          {/* route used for different routing */}
          <Route path="/admin" element={<AdminPage />} />

          {/* route used for different routing */}
          <Route path="/stockentry" element={<StockEntry />} />

          {/* route used for different routing */}
          <Route path="/stockissue" element={<StockIssue />} />

          {/* employee */}
          <Route path="/employee" element={<EmployeeMessage />} />
          {/* employee */}
          <Route path="/addfood" element={<AddFood />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
