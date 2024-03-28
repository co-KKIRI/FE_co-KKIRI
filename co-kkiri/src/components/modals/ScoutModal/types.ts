import { Option } from "@/components/commons/Form/RHFDropdown";
import { MemberProfile } from "@/lib/api/member/type";

export type CombinedResults = {
  options: Option[];
  userInfo: Pick<MemberProfile, "nickname" | "profileImageUrl" | "position">;
};
