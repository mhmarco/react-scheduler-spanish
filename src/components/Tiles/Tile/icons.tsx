import { FC } from "react";

// Inline SVG icons matching the locked planner mockup (artifact 91ed97bb). Stroke-based, viewBox 0 0 24 24.
export type TileIconName = "transfer" | "sun" | "tour" | "person" | "check" | "warn" | "clock";

const PATHS: Record<TileIconName, JSX.Element> = {
  transfer: (
    <>
      <path d="M4 8h13l-3-3" />
      <path d="M20 16H7l3 3" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
    </>
  ),
  tour: (
    <>
      <path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="7.5" r="3.4" />
      <path d="M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  warn: (
    <>
      <path d="M12 3 2 20h20z" />
      <path d="M12 9v5M12 17h.01" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  )
};

export const TileIcon: FC<{ name: TileIconName; className?: string; strokeWidth?: number }> = ({
  name,
  className,
  strokeWidth = 2
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round">
    {PATHS[name]}
  </svg>
);
