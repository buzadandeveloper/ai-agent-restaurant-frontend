import { useUserProfile } from "@/features/settings/hooks";

export const SettingsPage = () => {
  const { data: userProfile } = useUserProfile();
  return <div>{JSON.stringify(userProfile)}</div>;
};
