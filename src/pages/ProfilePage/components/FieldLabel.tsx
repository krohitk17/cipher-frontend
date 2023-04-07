import SubmitButton from "../../../components/SubmitButton";

export default function FieldLabel({
  value,
  setValue,
  edit,
  setEdit,
  onSubmit,
  label,
  children,
}: {
  value: any;
  setValue: (value: any) => void;
  edit: boolean;
  setEdit: (value: boolean) => void;
  onSubmit: () => void;
  label: string;
  children: any;
}) {
  return (
    <div className="flex flex-col gap-2 mx-10 my-5">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl font-bold">{label}</h1>
        <div className="gap-5 flex flex-row">
          <SubmitButton
            onClickHandler={() => {
              if (edit) {
                setValue(value);
              }
              setEdit(!edit);
            }}
          >
            {edit ? "Cancel" : "Edit"}
          </SubmitButton>
          {edit ? (
            <SubmitButton onClickHandler={onSubmit}>Submit</SubmitButton>
          ) : (
            <></>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}
