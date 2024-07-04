import * as React from 'react'
import DefaultLayout from '../DefaultLayout'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod"
import toast, { Toaster } from 'react-hot-toast';
import { ClipLoader } from "react-spinners";
import { useState } from "react";


const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),

  price: z.string().min(1, {
    message: "Price is required",
  }),


  status: z.string().email({
   message: "Status is required",
  }),

})


const EditProduct = () => {
  const [quantity, setQuantity] = React.useState(1);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
})

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 0))

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <DefaultLayout>
      <div className='p-10 flex items-center justify-center'>
       <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Edit Product</CardTitle>
        </CardHeader>
        <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                
               <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Owner ID"  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input placeholder="product price"  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <FormControl>
                      <Input placeholder="product status"  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              </div>

               {/* Quantity counter with increment and decrement */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="quantity">Quantity</Label>
                <div className="flex items-center space-x-2">
                  <Button type="button" className='text-[20px] text-white font-bold' onClick={handleDecrement}>-</Button>
                  <Input id="quantity" value={quantity} readOnly className="text-center" />
                  <Button type="button" className='text-[16px] text-white font-bold' onClick={handleIncrement}>+</Button>
                </div>
              </div>
              {/* Quantity counter with increment and decrement */}
            </div>
             <div className='flex items-center justify-center py-6 gap-3'>
              <Button type="submit" variant="outline" className='w-11/12 transition duration-700 ease-in-out hover:scale-110'>Update</Button>
              <Button variant="outline" className='w-11/12 transition duration-700 ease-in-out hover:scale-110 bg-red-400 text-white'>Delete</Button>
             </div>
          </form>
        </Form>
        </CardContent>
      </Card>
      </div>
    </DefaultLayout>
  )
}

export default EditProduct