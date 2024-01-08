import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { loginFormSchema } from "../../lib/validation"
import { Link, useNavigate } from "react-router-dom"
import { useCreateUserSession } from "@/lib/react-query/mutations"
import { toast } from 'react-toastify';
import Loader from "@/components/shared/Loader"
import { useUserContext } from "@/context/AuthProvider"



const Login = () => {
  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const { checkAuthenticatedUser, isLoading: isUserLoading } = useUserContext()

  const navigate = useNavigate()
  const { mutateAsync: createUserSession, isPending: isUserSessionPending} =  useCreateUserSession()

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    const session = await createUserSession({
      email: values.email,
      password: values.password
    })
    if (!session) { return }
    const loggedInUser = await checkAuthenticatedUser()
    if (loggedInUser) { 
      toast.success("Login successful!")
      loginForm.reset()
      navigate("/");
    } else {
      toast.error("Something went wrong. Please try again")
    }
  }

  return (
    <div className="w-3/4 md:w-1/2 lg:w-1/2 flex flex-col justify-center ">
      <div className="flex flex-col items-center py-4">
        <img src="assets/images/logo.svg" alt="Logo here" className="w-1/2 py-2" />
        <p className="text-gray-400">Enter below details to login on snapgram</p>
      </div>
      <Form {...loginForm}>
        <form onSubmit={loginForm.handleSubmit(onSubmit)} className="space-y-4 w-full">
          <FormField
            control={loginForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} className="shad-input" />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
          <FormField
            control={loginForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter your password" {...field} className="shad-input" />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
          <Button type="submit" className="shad-button_primary w-full rounded-xl">
            {
              (isUserSessionPending || isUserLoading) ? (
                <div className="flex gap-2 justify-center items-center">
                  <Loader /> Loading...
                </div>
              ) : <div>Login</div>
            }
          </Button>
        </form>
      </Form>

      <p className="text-small-regular text-light-2 text-center mt-2">
        Don't have an account ?
        <Link to="/register" className="text-primary-600 ml-1">Register</Link>
      </p>
    </div>
  )
}

export default Login
