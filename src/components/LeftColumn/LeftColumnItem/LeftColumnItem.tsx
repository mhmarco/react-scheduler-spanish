import { FC } from "react";
import {
  StyledImage,
  StyledImageWrapper,
  StyledInnerWrapper,
  StyledText,
  StyledTextWrapper,
  StyledWrapper
} from "./styles";
import { LeftColumnItemProps } from "./types";

const isImageUrl = (s?: string) => !!s && /^(https?:|data:|blob:|\/)/.test(s);

// A front-view bus in a soft circle for owned units, a building for subcontract providers (mockup 91ed97bb .bus).
const BusFrontIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <rect x="4.5" y="2.5" width="15" height="17.5" rx="3.4" />
    <rect x="6.6" y="4.6" width="10.8" height="2.4" rx=".7" fill="#fff" fillOpacity=".5" />
    <rect x="6.6" y="8.6" width="10.8" height="5" rx="1.3" fill="#fff" fillOpacity=".92" />
    <circle cx="7.4" cy="17.4" r="1.05" fill="#fff" fillOpacity=".92" />
    <circle cx="16.6" cy="17.4" r="1.05" fill="#fff" fillOpacity=".92" />
  </svg>
);
const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="3.5" width="14" height="17" rx="1.5" />
    <path d="M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3" />
  </svg>
);

const LeftColumnItem: FC<LeftColumnItemProps> = ({ id, item, rows, onItemClick, isSubcontract }) => {
  return (
    <StyledWrapper
      title={item.title}
      clickable={typeof onItemClick === "function"}
      rows={rows}
      $isSubcontract={isSubcontract}
      onClick={() => onItemClick?.({ id, label: item })}>
      <StyledInnerWrapper>
        <StyledImageWrapper $provider={isSubcontract}>
          {isImageUrl(item.icon) ? (
            <StyledImage src={item.icon} alt="" />
          ) : isSubcontract ? (
            <BuildingIcon />
          ) : (
            <BusFrontIcon />
          )}
        </StyledImageWrapper>
        <StyledTextWrapper>
          <StyledText isMain>{item.title}</StyledText>
          <StyledText>{item.subtitle}</StyledText>
        </StyledTextWrapper>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

export default LeftColumnItem;
