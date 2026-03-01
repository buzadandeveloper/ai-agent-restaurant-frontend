import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import type { UserData } from "@services/user/user-types";
import { Mail, User } from "lucide-react";
import { ProfileInformationCardSkeleton } from "./profile-information-card-skeleton";

interface ProfileInformationCardProps {
  user?: UserData;
  isLoading?: boolean;
}

export const ProfileInformationCard = ({ user, isLoading }: ProfileInformationCardProps) => {
  if (isLoading) return <ProfileInformationCardSkeleton />;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Profile Information
        </CardTitle>
        <CardDescription>Your personal information and account details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              value={user?.firstName || ""}
              readOnly
              className="bg-muted cursor-default"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              value={user?.lastName || ""}
              readOnly
              className="bg-muted cursor-default"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={user?.email || ""}
            readOnly
            className="bg-muted cursor-default"
          />
        </div>
      </CardContent>
    </Card>
  );
};
