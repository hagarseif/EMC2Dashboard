import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addService } from "./apiServices";
import toast from "react-hot-toast";

export function useCreateService() {
 /////////////////pots Service////////////////////
 const queryClient = useQueryClient();
 const { isLoading: isCreating, mutate: createService } = useMutation({
   mutationFn: addService,
   onSuccess: () => {
     toast.success("New Service successfully added");
     queryClient.invalidateQueries({
       queryKey: ["service"],
     });
   },
   onError: (err) => toast.error(err.message),
 });
 return { isCreating, createService };
}
