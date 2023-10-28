import { useContext } from "react";
import { AuthContext } from "../Provider/authProvider";
import { useQuery } from "@tanstack/react-query";


const useCart = () => {
    const {user}=useContext(AuthContext)
    const token= localStorage.getItem('access-token')
    const {data,refetch} = useQuery({
        queryKey: ['carts',user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
              headers:{
                authorization:`bearer ${token}`
              }
            })
            if (!response.ok) {
              throw new Error('Network response was not ok')
            }
            return response.json()
          },
        })
        return [data,refetch]
    
};

export default useCart;