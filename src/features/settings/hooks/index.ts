import { useQuery } from "@tanstack/react-query";
import { userQueryKeys } from "@/services/user/user.service";

export const index = () => {
  return useQuery(userQueryKeys.profile());
};
