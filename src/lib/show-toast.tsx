import { Toast } from "@components/common/toast/toast";
import { toast } from "sonner";
import type { ToastData } from "@/types/index";

export function showToast({ title, description, variant }: ToastData) {
  toast.custom(() => <Toast title={title} description={description} variant={variant} />);
}
