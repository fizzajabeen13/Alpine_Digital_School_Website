import { Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";

type SubmitButtonProps = {
  children: React.ReactNode;
  loading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  className?: string;
};

export default function SubmitButton({
  children,
  loading = false,
  loadingText = "Submitting...",
  disabled = false,
  className,
}: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      disabled={disabled || loading}
      className={className}
    >
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {loading ? loadingText : children}
    </Button>
  );
}