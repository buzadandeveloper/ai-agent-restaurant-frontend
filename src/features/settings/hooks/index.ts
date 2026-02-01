import { userQueryKeys } from "@services/user/user-service";
import { useQuery } from "@tanstack/react-query";

export const useUserProfile = () => {
  return useQuery(userQueryKeys.profile());
};
