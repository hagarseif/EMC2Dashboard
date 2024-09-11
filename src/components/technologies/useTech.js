import { useQuery } from "@tanstack/react-query";
import { GetIndustryTech, GetProductTech } from "../../Apis/apiTechnology";

export function useTech() {
 ///////////////for getting data
 const { isLoading, data: techProduct=[] } = useQuery({
    queryKey: ["tech"],
    queryFn: GetProductTech,
  });
  const { data: techIndustry=[] } = useQuery({
    queryKey: ["techIndustry"],
    queryFn: GetIndustryTech,
  });
  return {isLoading,techIndustry,techProduct}
}
