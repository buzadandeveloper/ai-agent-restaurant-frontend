import { toast } from "sonner";
import { Toast } from "@/components/common/toast/toast";
import type { ToastData } from "@/types/toast.types";

export function showToast({ title, description, variant }: ToastData) {
  toast.custom(() => <Toast title={title} description={description} variant={variant} />);
}
