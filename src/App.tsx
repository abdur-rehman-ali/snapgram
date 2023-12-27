import { Routes, Route } from 'react-router-dom';
import Register from './auth/forms/Register';
import Login from './auth/forms/Login';
import AuthLayout from './auth/AuthLayout';
import RootLayout from './root/RootLayout';
import { Home } from './root';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <main>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route index element={ <Home/>} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  )
}

export default App
