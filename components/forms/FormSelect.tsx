import Select from "@/components/ui/Select";

type FormSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  options: {
    label: string;
    value: string;
  }[];
};

export default function FormSelect({
  label,
  error,
  options,
  ...props
}: FormSelectProps) {
  return <Select label={label} error={error} options={options} {...props} />;
}