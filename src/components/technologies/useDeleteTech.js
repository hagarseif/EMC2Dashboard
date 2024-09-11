import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTech } from "../../Apis/apiTechnology";
import toast from "react-hot-toast";

export function useDeleteTech() {
  ///////////////for deleting
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteTech,
    onSuccess: () => {
      toast.success("Technology deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["tech"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return{isDeleting,mutate}
}
