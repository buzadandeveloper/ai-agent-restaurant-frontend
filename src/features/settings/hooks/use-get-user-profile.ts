import { useQuery } from "@tanstack/react-query";
import { userQueryKeys } from "@/services/user/user.service";

export const useGetUserProfile = () => {
  return useQuery(userQueryKeys.profile());
};
