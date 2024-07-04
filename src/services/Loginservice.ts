import axiosInstance, {USER_TOKEN_NAME, saveToken} from './config'
import { LoginUserTypes } from '@/types/User'

export const loginUser = async ({
    email,
    password,
    employee_id,
    owner_id,
  }: LoginUserTypes) => {
    try {
      const res = await axiosInstance.post("/employee/login/", {
        email,
        password, 
        employee_id,
        owner_id,
      })
      const _token = res?.data?.token
      axiosInstance.defaults.headers.common["Authorization"] = _token;
      saveToken(USER_TOKEN_NAME, _token)
      return res?.data
    } catch (error) {
      console.log("error in registerUser", error)
      throw error
    }
  }