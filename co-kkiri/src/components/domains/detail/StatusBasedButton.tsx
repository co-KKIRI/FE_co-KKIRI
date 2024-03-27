import { useState, useEffect } from "react";
import styled from "styled-components";
import useOpenToggle from "@/hooks/useOpenToggle";
import Button from "@/components/commons/Button";
import ConfirmModal from "@/components/modals/ConfirmModal";
import InviteResponseModal from "@/components/modals/InviteResponseModal";
import { statusButtonConfig, StatusButtonConfig } from "@/constants/statusButtonConfig";
import { ConfirmType } from "@/components/modals/ConfirmModal";
import { PostApplyStatus } from "@/lib/api/post/type";

interface MappedButtonProps {
  postApplyStatus: PostApplyStatus;
  className?: string;
}

export default function StatusBasedButton({ postApplyStatus, className }: MappedButtonProps) {
  const { isOpen: isConfirmOpen, openToggle: confirmToggle } = useOpenToggle();
  const { isOpen: isInviteResponseOpen, openToggle: inviteResponseToggle } = useOpenToggle();
  const [confirmType, setConfirmType] = useState<ConfirmType>("apply");

  const handleModal = () => {
    switch (postApplyStatus) {
      case "APPLIED":
      case "NOT_APPLIED":
        confirmToggle();
        break;
      case "INVITED":
        inviteResponseToggle();
        break;
    }
  };

  useEffect(() => {
    const currentStatusConfig = statusButtonConfig[postApplyStatus as keyof StatusButtonConfig];
    if (currentStatusConfig && currentStatusConfig.type) {
      setConfirmType(currentStatusConfig.type);
    }
  }, [postApplyStatus]);

  if (postApplyStatus === "OWNER") return null;

  return (
    <div className={className}>
      <StyledButton
        onClick={handleModal}
        variant={statusButtonConfig[postApplyStatus].variant}
        disabled={statusButtonConfig[postApplyStatus].disabled}>
        {statusButtonConfig[postApplyStatus].text}
      </StyledButton>
      {isConfirmOpen && <ConfirmModal type={confirmType} onClose={confirmToggle} />}
      {isInviteResponseOpen && <InviteResponseModal onClose={inviteResponseToggle} />}
    </div>
  );
}

const StyledButton = styled(Button)``;
