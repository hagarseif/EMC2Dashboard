import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateService } from "../../Apis/apiServices";
import toast from "react-hot-toast";

export function useUpdateService() {
    const queryClient = useQueryClient();

    const { isLoading: isUpdating, mutate: updateServices } = useMutation({
      mutationFn: ({ newService, id }) => updateService(newService, id),
      onSuccess: () => {
        toast.success("Service successfully updated");
        queryClient.invalidateQueries({
          queryKey: ["service"],
        });
      },
      onError: (err) => toast.error(err.message),
    });
    return{isUpdating,updateServices};
}
