import * as React from 'react'
import DefaultLayout from '../DefaultLayout'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  // import {
  //   Select,
  //   SelectContent,
  //   SelectItem,
  //   SelectTrigger,
  //   SelectValue,
  // } from "@/components/ui/select"
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
import { createProductRequest } from '@/services/UpdateItemService'
import { useSWRConfig } from "swr"
import useSWRMutation from "swr/mutation"


const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),

  price: z.string().min(1, {
    message: "Price is required",
  }),


  // status: z.string().min(1, {
  //  message: "Status is required",
  // }),

  quantity: z.number().min(0, { 
    message: "Quantity must be at least 0" 
  }).max(1000, { 
    message: "Quantity must be less than or equal to 1000" 
  }),

})




const AddProduct = () => {
  const [quantity, setQuantity] = React.useState(0);
  const [Loading, setLoading] = useState(false);

  const shopID = localStorage.getItem('shopID');

  const { trigger } = useSWRMutation("/shop/product/create", createProductRequest)
  const { mutate } = useSWRConfig()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: "",
      // status: "",
      quantity: 0,
    }
})

const handleIncrement = () => setQuantity(prev => (prev < 1000 ? prev + 1 : 1000));
const handleDecrement = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0))

const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const value = parseInt(event.target.value, 10);
  if (!isNaN(value) && value >= 0 && value <= 1000) {
    setQuantity(value);
  }
}

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    const payLoad = {
      shopID,
      name: values.name,
      price: values.price,
      quantity: quantity,
    }
    try {
       await trigger({ ...payLoad });
       const res = await mutate("shop/product/create");
      if (res?.status === 200) {
        toast.success(res?.response?.data.detail || "Product added successfully!");
      } else {
        toast.error(res?.response?.data.detail);
        throw new Error(res?.response?.data.detail);
      }
    } catch (error) {
      setLoading(false);
      console.log("error in createProductRequest", error);
      const errorMessage = error.response?.data?.detail  || "Failed to add product. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <DefaultLayout>
      <div className='p-10 flex items-center justify-center'>
       <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Add Product</CardTitle>
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
                      <Input placeholder="product name" className='text-black'  {...field} />
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
                      <Input type='number' className='text-black' placeholder="product price"  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              
              {/* <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Staus</Label>
                <Select>
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div> */}

              </div>

                {/* Quantity counter with increment and decrement */}
                <div className="flex flex-col space-y-1.5">
                <Label htmlFor="quantity">Quantity</Label>
                <div className="flex items-center space-x-2">
                  <Button type="button" className='text-[20px] text-white font-bold' onClick={handleDecrement}>-</Button>
                  <Input id="quantity" value={quantity} onChange={handleQuantityChange} type="number" className="text-center text-black" />
                  <Button type="button" className='text-[16px] text-white font-bold' onClick={handleIncrement}>+</Button>
                </div>
              </div>
              {/* Quantity counter with increment and decrement */}
            </div>
             <div className='flex items-center justify-center py-6 gap-3'>
              <Button 
                 type="submit" 
                 variant="outline" 
                 className='w-11/12 transition duration-700 ease-in-out hover:scale-110'
              >
                {Loading ? (
                   <ClipLoader size={30} color="#f87171" />
                ) : (
                  <p>Add Product</p>
                )}
              </Button>
             </div>
          </form>
        </Form>
        </CardContent>
      </Card>
      </div>
      <Toaster />
    </DefaultLayout>
  )
}

export default AddProduct;