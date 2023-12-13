import { Outlet, Navigate } from 'react-router-dom'

const AuthLayout = () => {
  const isAuthenticated = false
  return (
    <>
      {
        isAuthenticated ?
          (<Navigate to="/home" />) :
          (
            <section className='flex justify-between'>
              <section className='border-solid border-2 w-1/2 flex flex-col justify-center items-center py-10'>
                <Outlet />
              </section>
              <img
                src='/assets/images/side-img.svg'
                alt='Side bar image here'
                className='hidden lg:block w-1/2 h-screen object-cover'
              />
            </section>
          )
      }
    </>
  )
}

export default AuthLayout
