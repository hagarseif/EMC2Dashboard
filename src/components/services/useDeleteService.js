import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteService as deleteServiceApi } from "./apiServices";
import toast from "react-hot-toast";

export function useDeleteService() {
  ///////////////for deleting//////////////////////////
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate:deleteService } = useMutation({
    mutationFn: deleteServiceApi,
    onSuccess: () => {
      toast.success("service deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["service"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteService };
}
