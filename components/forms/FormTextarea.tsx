import Textarea from "@/components/ui/Textarea";

type FormTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export default function FormTextarea({
  label,
  error,
  ...props
}: FormTextareaProps) {
  return <Textarea label={label} error={error} {...props} />;
}