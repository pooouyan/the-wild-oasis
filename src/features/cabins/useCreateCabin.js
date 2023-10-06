import { toast } from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createMutate, isLoading: isAdding } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("new Cabin was created");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { createMutate, isAdding };
}
