import { Routes, Route } from 'react-router-dom';
import Register from './auth/forms/Register';
import Login from './auth/forms/Login';
import AuthLayout from './auth/AuthLayout';
import RootLayout from './root/RootLayout';
import {
  Explore,
  Home,
  Users,
  Saved,
  CreatePost,
  EditPost,
  SinglePost
} from './root';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/users' element={<Users />} />
          <Route path='/saved' element={<Saved />} />
          <Route path='/posts/new' element={<CreatePost />} />
          <Route path='/posts/edit/:postID' element={<EditPost />} />
          <Route path='/posts/:postID' element={<SinglePost />} />
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
    </>
  )
}

export default AppRoutes