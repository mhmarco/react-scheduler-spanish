import styled, { createGlobalStyle, type DefaultTheme } from "styled-components";

export const prefixId = "reactSchedulerOutsideWrapper";

export const GlobalStyle = createGlobalStyle`

  #${prefixId} {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${prefixId} *,
 #${prefixId} *:before,
 #${prefixId} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`;

export type ColorType =
  | "background"
  | "gridBackground"
  | "primary"
  | "secondary"
  | "tertiary"
  | "textPrimary"
  | "textSecondary"
  | "accent"
  | "disabled"
  | "border"
  | "placeholder"
  | "warning"
  | "button"
  | "tooltip"
  | "defaultTile"
  | "hover"
  | "currentDay"
  | "subcontractBg"
  | "subcontractBorder"
  | "subcontractText";

export type Theme = {
  colors: Record<ColorType, string>;
  navHeight: string;
  mode: "light" | "dark";
};

export const theme: DefaultTheme = {
  mode: "light",
  navHeight: "44px",
  colors: {
    background: "#FFFFFF",
    gridBackground: "#FFFFFF",

    primary: "#F8F8FD",
    secondary: "#E6F3FF",
    tertiary: "#C9E5FF",

    textPrimary: "#1C222F",
    textSecondary: "#FFFFFF",
    placeholder: "#777777",

    button: "#FFFFFF",
    border: "#D2D2D2",
    tooltip: "#3B3C5F",
    hover: "#E6F3FF",
    disabled: "#777777",
    warning: "#EF4444",

    defaultTile: "#728DE2",

    accent: "#0A11EB",
    currentDay: "#B3D9FF",
    subcontractBg: "#FFF7ED",
    subcontractBorder: "#F59E0B",
    subcontractText: "#92400E"
  }
};

export const darkTheme: Theme = {
  mode: "dark",
  navHeight: "44px",
  colors: {
    background: "#161B22",
    gridBackground: "#1E252E",

    primary: "#303b49",
    secondary: "#444e5b",
    tertiary: "#6E757F",

    textPrimary: "#DADCE0",
    textSecondary: "#EAEBED",
    placeholder: "#bbbbbb",

    button: "#60676f",
    border: "#2C333A",
    hover: "#303439",
    tooltip: "#3B3C5F",
    disabled: "#38414a",
    warning: "#FF4C4C",

    defaultTile: "#728DE2",

    accent: "#1798c2",
    currentDay: "#2A4A6B",
    subcontractBg: "#422006",
    subcontractBorder: "#D97706",
    subcontractText: "#FCD34D"
  }
};

export const marginPaddingReset = `
margin: 0;
padding: 0;
`;

export const truncate = `
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;

export const StyledSchedulerFrame = styled.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;
