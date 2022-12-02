import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import EmployeeInformation from './components/EmployeeInformation';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <NavBar />
      </Provider>
      <Routes>
        <Route path="/" element={<EmployeeInformation /> } />
        <Route path="all" element={<AllUsers /> } />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
