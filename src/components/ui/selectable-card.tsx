import type * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SelectableCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

export function SelectableCard({
  title,
  description,
  icon,
  selected = false,
  onClick,
  className
}: SelectableCardProps) {
  return (
    <Card
      className={cn("cursor-pointer hover:border-primary", selected && "border-primary", className)}
      onClick={onClick}
    >
      {icon && <CardHeader>{icon}</CardHeader>}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <div className="text-body-100 text-muted-foreground">{description}</div>
      </CardContent>
    </Card>
  );
}
