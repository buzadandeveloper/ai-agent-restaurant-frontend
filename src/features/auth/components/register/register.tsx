import { TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const Register = () => {
  return (
    <TabsContent value="register">
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Create a new account to get started</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="register-name">Name</Label>
            <Input id="register-name" type="text" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="register-email">Email</Label>
            <Input id="register-email" type="email" placeholder="m@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="register-password">Password</Label>
            <Input id="register-password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Create Account</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};
