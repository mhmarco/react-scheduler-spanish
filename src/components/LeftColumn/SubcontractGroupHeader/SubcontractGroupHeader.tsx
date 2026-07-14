import { FC } from "react";
import { Icon } from "@/components";
import { useLanguage } from "@/context/LocaleProvider";
import { StyledGroupHeader, StyledLabel, StyledToggle } from "./styles";
import { SubcontractGroupHeaderProps } from "./types";

const SubcontractGroupHeader: FC<SubcontractGroupHeaderProps> = ({
  count,
  isCollapsed,
  onToggle
}) => {
  const lang = useLanguage();
  const label = lang.subcontract ?? "Subcontract";

  return (
    <StyledGroupHeader onClick={onToggle} title={label}>
      <StyledLabel>{label} ({count})</StyledLabel>
      <StyledToggle $collapsed={isCollapsed}>
        <Icon iconName="arrowDown" width="14" height="14" />
      </StyledToggle>
    </StyledGroupHeader>
  );
};

export default SubcontractGroupHeader;
