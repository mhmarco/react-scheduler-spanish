import { FC } from "react";
import { useLanguage } from "@/context/LocaleProvider";
import { ReactComponent as EmptyBoxSvg } from "./empty-box.svg";
import { StyledText, StyledWrapper } from "./styles";
import { EmptyBoxProps } from "./types";
const EmptyBox: FC<EmptyBoxProps> = ({ onTileClick }) => {
  const { feelingEmpty } = useLanguage();
  return (
    <StyledWrapper onClick={onTileClick}>
      <EmptyBoxSvg />
      <StyledText>{feelingEmpty}</StyledText>
    </StyledWrapper>
  );
};

export default EmptyBox;
