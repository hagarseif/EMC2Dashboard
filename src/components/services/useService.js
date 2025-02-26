import { useQuery } from "@tanstack/react-query";
import { GetAllServices } from "../../Apis/apiServices";

export function useService() {
  ///////////////////for retrieve
  const { isLoading, data: service } = useQuery({
    queryKey: ["service"],
    queryFn: GetAllServices,
  });
  return { isLoading, service };
}
