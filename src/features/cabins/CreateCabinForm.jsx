import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";
import FormRow from "../../ui/FormRow";

function CreateCabinForm() {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  console.log(errors);
  const { mutate, isLoading } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("new Cabin was created");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate({ ...data, image: data.image[0] });
    // console.log(data);
  }
  function onError(err) {
    console.log(err);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow error={errors?.name?.message} label="Cabin name">
        <Input
          type="text"
          id="name"
          disabled={isLoading}
          {...register("name", { required: "PLEASE inter your name" })}
        />
      </FormRow>

      <FormRow error={errors?.maxCapacity?.message} label="maxCapacity">
        <Input
          type="number"
          id="maxCapacity"
          disabled={isLoading}
          {...register("maxCapacity", {
            required: "PLEASE inter your capacity",
            min: {
              value: 1,
              message: "your value should geater then 1",
            },
          })}
        />
      </FormRow>

      <FormRow error={errors?.regularPrice?.message} label="regularPrice">
        <Input
          type="number"
          id="regularPrice"
          disabled={isLoading}
          {...register("regularPrice", {
            required: "PLEASE inter your price",
            min: {
              value: 1,
              message: "your value should geater then 1",
            },
          })}
        />
      </FormRow>

      <FormRow error={errors?.discount?.message} label="discount">
        <Input
          type="number"
          id="discount"
          disabled={isLoading}
          defaultValue={0}
          {...register("discount", {
            required: "PLEASE inter your discounts",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "discount shuold more than reguler price",
          })}
        />
      </FormRow>

      <FormRow error={errors?.description?.message} label="description">
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isLoading}
          {...register("description", {
            required: "PLEASE inter your description",
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: "PLEASE inter your image",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isLoading}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
