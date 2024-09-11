import {  useMutation, useQueryClient } from '@tanstack/react-query';
import { updateAllTech } from '../../Apis/apiTechnology';
import toast from 'react-hot-toast';

export default function useUpdateTech() {
    const queryClient = useQueryClient();

    const { isLoading: isUpdating, mutate: updateTech } = useMutation({
        mutationFn: ({ newTech, id }) => updateAllTech(newTech, id),
        onSuccess: () => {
          toast.success("Technology successfully updated");
          queryClient.invalidateQueries({
            queryKey: ["tech"] ,
          });
          queryClient.invalidateQueries({
            queryKey: ["techIndustry"] ,
          });
        },
        onError: (err) => toast.error(err.message),
      });
      return {isUpdating,updateTech}
}
