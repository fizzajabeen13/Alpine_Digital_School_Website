import Input from "@/components/ui/Input";

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export default function FormInput({ label, error, ...props }: FormInputProps) {
  return <Input label={label} error={error} {...props} />;
}