import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

function CreateCabinForm({ cabinToEdit = {} }) {
  const { createMutate, isAdding } = useCreateCabin();
  const { editMutate, isEditing } = useEditCabin();
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editMutate(
        { newCabin: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset();
          },
        }
      );
    else
      createMutate(
        { ...data, image },
        {
          onSuccess: (data) => {
            reset();
            console.log(data);
          },
        }
      );
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
          disabled={isAdding || isEditing}
          {...register("name", { required: "PLEASE inter your name" })}
        />
      </FormRow>

      <FormRow error={errors?.maxCapacity?.message} label="maxCapacity">
        <Input
          type="number"
          id="maxCapacity"
          disabled={isAdding || isEditing}
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
          disabled={isAdding || isEditing}
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
          disabled={isAdding || isEditing}
          defaultValue={0}
          {...register("discount", {
            required: "PLEASE inter your discounts",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "discount shuoldn't more than reguler price",
          })}
        />
      </FormRow>

      <FormRow error={errors?.description?.message} label="description">
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isAdding || isEditing}
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
            required: isEditSession ? false : "PLEASE inter your image",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isAdding || isEditing}>
          {isEditSession ? "Edit cabin" : "Add cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
