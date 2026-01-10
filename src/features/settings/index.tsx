import { index } from "@/features/settings/hooks";

export const SettingsPage = () => {
  const { data: userProfile } = index();
  return <div>{JSON.stringify(userProfile)}</div>;
};
