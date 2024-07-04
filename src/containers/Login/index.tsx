import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod"
import { loginUser } from "@/services/Loginservice";
import toast, { Toaster } from 'react-hot-toast';
import { ClipLoader } from "react-spinners";
import { useState } from "react";

const formSchema = z.object({
    employee_id: z.string().min(1, {
      message: "Employee ID is required",
    }),

    owner_id: z.string().min(1, {
      message: "Owner ID is required",
    }),


    email: z.string().email({
     message: "Email is required",
    }),

    password: z.string().min(1, {
        message: "Password is required",
      }),
})


const Login = () => {
  const [Loading, setLoading] = useState(false)
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      try {
        setLoading(true)
        const { employee_id, owner_id, email, password  } = values
        const res = await loginUser({
          employee_id, 
          owner_id, 
          email, 
          password
        })

        console.log('res =>', res);
        if (res.status === '200') {
            toast.success("Login Successful");
            window.location.href = "/dashboard"
            setLoading(false)
        } else {
            setLoading(false)
            toast.error(res?.response?.data?.message || "Error Loging in");
        }
      } catch (error) {
        setLoading(false)
        console.log(error);
        toast.error(error?.response?.data?.message || "Error Loging in");
      }
    }

  return (
    <div className="flex items-center px-10 justify-center h-screen">
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Manage your shop with ease.</CardDescription>
      </CardHeader>
      <CardContent>
     <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
            <FormField
                control={form.control}
                name="owner_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Owner ID</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Owner ID"  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="employee_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Employee ID</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter employee ID"  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter email"  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />


            <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter password"  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex justify-center py-5">
            {Loading ? (
                <ClipLoader size={30} color="#f87171" />
            ) : (
              <Button type="submit" className="w-full text-white transition duration-700 ease-in-out hover:scale-110">
                 Login
              </Button>
            )}
          </div>

        </form>
        </Form>
      </CardContent>
    </Card>

    <Toaster />
    </div>
  )
}

export default Login