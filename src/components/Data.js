import { useGetAllProductsQuery, useGetProduct } from "../utils/appSlice";

export default Data = () => {
  const { data, error, isError, isLoading } = useGetAllProductsQuery();
  const { data: singleProduct } = useGetProduct("iphone");
  console.log("Data Query", data);
  console.log("Data Single", singleProduct);
  {
    isLoading ? <div>Loading...</div> : <></>;
  }
  return <div>Data:</div>;
};
