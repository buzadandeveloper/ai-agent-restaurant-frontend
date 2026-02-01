import { Alert, AlertDescription, AlertTitle } from "@components/ui/alert";
import { AlertCircle } from "lucide-react";
import type { ToastData as ToastProps } from "@/types/index";

export const Toast = ({ title, description, variant }: ToastProps) => {
  return (
    <Alert variant={variant} className="w-100">
      <AlertCircle size={"1.25em"} className="mt-1.5" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};
