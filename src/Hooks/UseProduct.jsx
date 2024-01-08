import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";


const UseProduct = (asc,search) => {

    const axiosPublic = UseAxiosPublic();



    // const {data:product=[],isPending:loading,refetch} = useQuery({
    //     queryKey:['product',asc,search],
    //     queryFn:async()=>{
    //         const res = await axiosPublic.get(`/product?sort=${asc ? 'asc' : 'desc'}&search=${search}`);
    //         return res.data;
    //     }
    // })



    const { data: product = [], isPending: loading, refetch } = useQuery({
        queryKey: ['product', asc, search],
        queryFn: async () => {
          let url = `/product?sort=${asc ? 'asc' : 'desc'}`;
    
          // If search is provided, add it to the URL
          if (search) {
            url += `&search=${search}`;
          }
    
          const res = await axiosPublic.get(url);
          return res.data;
        },
      });






    return [product, loading,refetch]
};

export default UseProduct;