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
import { registerFormSchema } from "../../lib/validation"
import { Link, useNavigate } from "react-router-dom"
import { useCreateUserAccount, useCreateUserSession } from "@/lib/react-query/mutations"
import { toast } from 'react-toastify';
import Loader from "@/components/shared/Loader"


const Register = () => {
  const registerForm = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  })
  const navigate = useNavigate()

  const { mutateAsync: createUserAccount, isPending: isUserAccountPending} = useCreateUserAccount()
  const { mutateAsync: createUserSession, isPending: isUserSessionPending} =  useCreateUserSession()

  async function onSubmit(values: z.infer<typeof registerFormSchema>) {
    const newAccount = await createUserAccount(values)
    if (!newAccount) { return }

    const session = await createUserSession({
      email: values.email,
      password: values.password
    })
    if (!session) { return }
    toast.success("Your account has been created successfully")
    registerForm.reset()
    navigate("/");
  }
  return (
    <div className="w-3/4 md:w-1/2 lg:w-1/2 flex flex-col justify-center ">
      <div className="flex flex-col items-center py-4">
        <img src="assets/images/logo.svg" alt="Logo here" className="w-1/2 py-2" />
        <h2 className="font-bold text-lg my-1">Create a new account</h2>
        <p className="text-gray-400">Enter below details to register on snapgram</p>
      </div>
      <Form {...registerForm}>
        <form onSubmit={registerForm.handleSubmit(onSubmit)} className="space-y-4 w-full">
          <FormField
            control={registerForm.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} className="shad-input" />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
          <FormField
            control={registerForm.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your username" {...field} className="shad-input" />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
          <FormField
            control={registerForm.control}
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
            control={registerForm.control}
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
              (isUserAccountPending || isUserSessionPending) ? (
                <div className="flex gap-2 justify-center items-center">
                  <Loader /> Loading...
                </div>
              ) : <div>Register</div>
            }
          </Button>
        </form>
      </Form>

      <p className="text-small-regular text-light-2 text-center mt-2">
        Already have an account ?
        <Link to="/login" className="text-primary-600 ml-1">Login</Link>
      </p>
    </div>
  )
}

export default Register
