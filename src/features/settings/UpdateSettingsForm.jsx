import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useEditSetting } from "./useEditSetting";
import { useSetting } from "./useSetting";

function UpdateSettingsForm() {
  const {
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      BreakfastPrice,
    } = {},
    isLoading,
  } = useSetting();
  const { editSetting, isEditing } = useEditSetting();
  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;
    editSetting({ [field]: value });
  }
  if (isLoading) return <Spinner />;
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
          disabled={isEditing}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
          disabled={isEditing}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
          disabled={isEditing}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={BreakfastPrice}
          onBlur={(e) => handleUpdate(e, "BreakfastPrice")}
          disabled={isEditing}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
