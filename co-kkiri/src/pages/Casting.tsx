import RecruitDropdownButton from "@/components/commons/SelectDropButtons/RecruitDropdownButton";
import UserInfoDropdownButton from "@/components/commons/SelectDropButtons/UserInfoDropdownButton";

export default function Casting() {
  return (
    <div>
      <UserInfoDropdownButton userInfoType="position" />
      <RecruitDropdownButton recruitInfoType="meeting" />
    </div>
  );
}
