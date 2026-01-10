import { useGetUserProfile } from "@/features/settings/hooks/use-get-user-profile";

export const SettingsPage = () => {
  const { data: userProfile } = useGetUserProfile();
  return <div>{JSON.stringify(userProfile)}</div>;
};
