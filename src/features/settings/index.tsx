import { PageWrapper } from "@components/common/page-wrapper/page-wrapper";
import { TitlePage } from "@components/common/title-page/title-page";
import { useUserProfile } from "@/features/settings/hooks";
import { ConfigurationCard } from "./components/configuration-card/configuration-card";
import { ProfileInformationCard } from "./components/profile-information-card/profile-information-card";

export const SettingsPage = () => {
  const userProfile = useUserProfile();

  return (
    <PageWrapper>
      <TitlePage title="Manage your account settings and preferences" />
      <ProfileInformationCard user={userProfile.data} isLoading={userProfile.isLoading} />
      <ConfigurationCard
        configKey={userProfile?.data?.configKey}
        isLoading={userProfile.isLoading}
      />
    </PageWrapper>
  );
};
