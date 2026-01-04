import { toast } from "sonner";
import { Toast } from "@/components/common/toast/toast";

interface Props {
  title: string;
  description: string;
  variant: "default" | "destructive";
}

export function showToast({ title, description, variant }: Props) {
  toast.custom(() => <Toast title={title} description={description} variant={variant} />);
}
