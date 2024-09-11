import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addIndustryech, addProductTech } from "../../Apis/apiTechnology";
import toast from "react-hot-toast";

export function useCreateTech() {
    const queryClient = useQueryClient();
    const { isLoading: isCreating, mutate: techProduct } = useMutation({
      mutationFn: addProductTech,
      onSuccess: () => {
        toast.success("New Technology successfully added");
        queryClient.invalidateQueries({
          queryKey: ["tech"],
        });
       
      },
      onError: (err) => toast.error(err.message),
    });
    const { mutate: techIndustry } = useMutation({
      mutationFn: addIndustryech,
      onSuccess: () => {
        toast.success("New Technology successfully added");
        queryClient.invalidateQueries({
          queryKey: ["techIndustry"],
        });
       
      },
      onError: (err) => toast.error(err.message),
    });
    return {isCreating,techIndustry,techProduct}
}

