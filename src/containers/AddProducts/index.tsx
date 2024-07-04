import * as React from 'react'
import DefaultLayout from '../DefaultLayout'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const AddProduct = () => {
  const [quantity, setQuantity] = React.useState(1);

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 0))

  return (
    <DefaultLayout>
      <div className='p-10 flex items-center justify-center'>
       <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Add Product</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Product Name</Label>
                <Input id="name" placeholder="name of your product" />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Price</Label>
                <Input id="name" placeholder="product price" />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Status</Label>
                <Input id="name" placeholder="product status" />
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
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="outline" className='w-full transition duration-700 ease-in-out hover:scale-110'>Add Product</Button>
        </CardFooter>
      </Card>
      </div>
    </DefaultLayout>
  )
}

export default AddProduct