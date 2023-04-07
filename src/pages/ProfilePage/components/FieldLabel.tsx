import SubmitButton from "../../../components/SubmitButton";

export default function FieldLabel({
  label,
  children,
  disabled,
  value,
  setValue,
  edit,
  setEdit,
  onSubmit,
}: {
  label: string;
  children: any;
  disabled?: boolean;
  value?: any;
  setValue?: (value: any) => void;
  edit?: boolean;
  setEdit?: (value: boolean) => void;
  onSubmit?: () => void;
}) {
  return (
    <div className="flex flex-col gap-2 m-5 my-5 p-5 border border-blue-100 rounded">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl font-bold">{label}</h1>
        {disabled ? (
          <></>
        ) : (
          <div className="gap-5 flex flex-row">
            <SubmitButton
              onClickHandler={() => {
                if (edit) {
                  setValue!(value);
                }
                setEdit!(!edit);
              }}
            >
              {edit ? "Cancel" : "Edit"}
            </SubmitButton>
            {edit ? (
              <SubmitButton onClickHandler={onSubmit!}>Submit</SubmitButton>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
