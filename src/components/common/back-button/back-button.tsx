import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface BackButtonProps {
  level?: number | string;
}

export const BackButton = ({ level = -1 }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    typeof level === "number" ? navigate(level) : navigate(level);
  };

  return (
    <Button variant="ghost" className="mb-4" onClick={handleBack}>
      <MoveLeft /> Back
    </Button>
  );
};
