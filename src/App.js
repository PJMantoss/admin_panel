import TopBar from './components/topbar/TopBar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUserPage/NewUser';
import ProductList from './pages/Products/ProductList';
import Product from './pages/product/Product';
import NewProduct './pages/newProduct/NewProduct';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css';

function App() {
  return (
    <Router>
      <TopBar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/user/:userId' element={<User />} />
          <Route path='/newuser' element={<NewUser />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/newproduct' element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;