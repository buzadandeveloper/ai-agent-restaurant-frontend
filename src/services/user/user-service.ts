import { request } from "@lib/api/request";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import type { UserData } from "./user-types";

class UserService {
  getUserProfile = (): Promise<UserData> => request.get("/api/user/profile");
}

export const userService = new UserService();

export const userQueryKeys = createQueryKeys("user", {
  profile: () => ({
    queryKey: ["profile"],
    queryFn: () => userService.getUserProfile()
  })
});
