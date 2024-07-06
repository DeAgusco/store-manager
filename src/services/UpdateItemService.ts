import axiosInstance from './config'
import { updateProductType } from '@/types/User'


//shop/product/update
 const updateProductRequest = async (url: string, { arg }: { arg: updateProductType }) => {
  try {
   const res = await axiosInstance.put(url + "/" + arg.id + '/', {
      ...arg,
    })
  return res;
  } catch (error) {
    console.log("error in updateTaskRequest", error)
    throw error
  }
}

//shop/product/create
const createProductRequest = async (url: string, { arg }: { arg: updateProductType }) => {
  try {
   const res = await axiosInstance.post(url, {
      ...arg,
    })
    return res;
  } catch (error) {
    console.log("error in createProductRequest", error)
    throw error
  }
}

//shop/product/delete
 const deleteProductRequest = async (
  url: string,
  { arg }: { arg: { id: string } }
) => {
  try {
    await axiosInstance.delete(url + "/" + arg.id + "/")
  } catch (error) {
    console.log("error in deleteTaskRequest", error)
    throw error
  }
}

const fetcher = (url:string) => axiosInstance.get(url).then((res) => res?.data)

export {updateProductRequest, deleteProductRequest, createProductRequest, fetcher};