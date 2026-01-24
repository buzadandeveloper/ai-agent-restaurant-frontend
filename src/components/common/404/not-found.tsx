import { BackButton } from "@/components/common/back-button/back-button";
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "@/components/ui/empty";

export const NotFound = () => {
  return (
    <Empty className="min-h-screen">
      <EmptyHeader>
        <EmptyTitle>404 - Not Found</EmptyTitle>
        <EmptyDescription>The page you&apos;re looking for doesn&apos;t exist.</EmptyDescription>
        <BackButton level="/dashboard" />
      </EmptyHeader>
    </Empty>
  );
};
