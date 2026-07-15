import { FC } from "react";
import { useCalendar } from "@/context/CalendarProvider";
import { outsideWrapperId } from "@/constants";
import {
  Wrapper,
  Grp,
  NavigationWrapper,
  NavBtn,
  Today,
  Range,
  ZoomSeg,
  DateLabel,
  Cmd,
  PillBtn,
  Badge
} from "./styles";
import { TopbarProps } from "./types";

const Svg: FC<{ children: React.ReactNode; sw?: number }> = ({ children, sw = 2 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const toggleFullscreen = () => {
  const el = document.getElementById(outsideWrapperId);
  if (!document.fullscreenElement) el?.requestFullscreen?.();
  else document.exitFullscreen?.();
};

// Three-zone toolbar with the ‹ Hoy › nav centred: left = month + Día│Semana│Mes zoom + Ir a fecha; centre =
// prev/Hoy/next; right = Buscar, Filtros, Pantalla completa. Zoom maps to the fork levels (Día = hourly, Semana =
// week columns, Mes = day columns).
const Topbar: FC<TopbarProps> = () => {
  const { config, date, zoom, handleGoNext, handleGoPrev, handleGoToday, setZoom, goToDate, toggleDisplayActiveUnits } =
    useCalendar();
  const { filterButtonState = -1 } = config;

  const focusSearch = () => {
    document.querySelector<HTMLInputElement>(`#${outsideWrapperId} input[placeholder]`)?.focus();
  };

  return (
    <Wrapper width={0}>
      <Grp $at="start">
        <Range>{date.format("MMMM YYYY")}</Range>
        <ZoomSeg>
          <button className={zoom === 2 ? "on" : ""} onClick={() => setZoom(2)}>
            Día
          </button>
          <button className={zoom === 0 ? "on" : ""} onClick={() => setZoom(0)}>
            Semana
          </button>
          <button className={zoom === 1 ? "on" : ""} onClick={() => setZoom(1)}>
            Mes
          </button>
        </ZoomSeg>
        <DateLabel>
          <Svg>
            <path d="M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5" />
            <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" />
            <circle cx="16.7" cy="16.7" r="2.7" />
          </Svg>
          Ir a fecha
          <input type="date" onChange={(e) => e.target.value && goToDate(e.target.value)} />
        </DateLabel>
      </Grp>
      <Grp $at="center">
        <NavigationWrapper>
          <NavBtn onClick={handleGoPrev} aria-label="Anterior">
            <Svg>
              <path d="m15 18-6-6 6-6" />
            </Svg>
          </NavBtn>
          <Today onClick={handleGoToday}>Hoy</Today>
          <NavBtn onClick={handleGoNext} aria-label="Siguiente">
            <Svg>
              <path d="m9 18 6-6-6-6" />
            </Svg>
          </NavBtn>
        </NavigationWrapper>
      </Grp>
      <Grp $at="end">
        <Cmd onClick={focusSearch}>
          <Svg>
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.2-3.2" />
          </Svg>
          Buscar
          <span className="k">⌘K</span>
        </Cmd>
        {filterButtonState >= 0 && (
          <PillBtn $primary={!!filterButtonState} onClick={toggleDisplayActiveUnits}>
            <Svg>
              <path d="M4 6.5h16l-6 7v4.5l-4 2v-6.5z" />
            </Svg>
            Filtros
            {!!filterButtonState && <Badge>{filterButtonState}</Badge>}
          </PillBtn>
        )}
        <PillBtn onClick={toggleFullscreen}>
          <Svg>
            <path d="M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16" />
          </Svg>
          Pantalla completa
        </PillBtn>
      </Grp>
    </Wrapper>
  );
};

export default Topbar;
