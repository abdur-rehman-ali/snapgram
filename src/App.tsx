import { Routes, Route } from 'react-router-dom';
import Register from './auth/forms/Register';
import Login from './auth/forms/Login';
import AuthLayout from './auth/AuthLayout';
import RootLayout from './root/RootLayout';
import { Home } from './root';

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
    </main>
  )
}

export default App
