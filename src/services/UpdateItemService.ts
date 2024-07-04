import axiosInstance, {USER_TOKEN_NAME, saveToken} from './config'
import { updateProductType } from '@/types/User'

export const updateItem = async ({
    id,
    name,
    price,
    status,
    quantity,
  }: updateProductType) => {
    try {
      const res = await axiosInstance.put(`shop/product/update/${id}`, {
        name,
        price,
        status,
        quantity,
      })
      const _token = res.data.token
      axiosInstance.defaults.headers.common["Authorization"] = _token;
      saveToken(USER_TOKEN_NAME, _token)
      return res?.data
    } catch (error) {
      console.log("error in updating item", error)
      throw error
    }
  }


  export const createItem = async ({
    name,
    price,
    status,
    quantity,
  }: updateProductType) => {
    try {
      const res = await axiosInstance.post('shop/product/create', {
        name,
        price,
        status,
        quantity,
      })
      const _token = res.data.token
      axiosInstance.defaults.headers.common["Authorization"] = _token;
      saveToken(USER_TOKEN_NAME, _token)
      return res?.data
    } catch (error) {
      console.log("error in creating item", error)
      throw error
    }
  }