import { Label } from "@components/ui/label";
import { Check, Copy, Key } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ConfigurationCardSkeleton } from "./configuration-card-skeleton";

interface ConfigurationCardProps {
  configKey?: string;
  isLoading?: boolean;
}

export const ConfigurationCard = ({ configKey, isLoading }: ConfigurationCardProps) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = () => {
    if (!configKey) return;

    navigator.clipboard.writeText(configKey);
    setCopiedKey(configKey);
    setTimeout(() => {
      setCopiedKey(null);
    }, 1000);
  };

  if (isLoading) return <ConfigurationCardSkeleton />;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Key className="h-5 w-5" />
          Configuration
        </CardTitle>
        <CardDescription>Use this key to for widget integration</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Label className="text-sm font-medium">Config Key</Label>
          <div className="flex gap-2">
            <Input value={configKey} readOnly className="bg-muted cursor-default" />
            <Button variant="outline" size="icon" onClick={copyToClipboard} disabled={!configKey}>
              {copiedKey === configKey ? (
                <Check className="h-4 w-4 text-green-600" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
