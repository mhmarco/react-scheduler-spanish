import { FC, useMemo, useRef, useState } from "react";
import dayjs from "dayjs";
import { useCalendar } from "@/context/CalendarProvider";
import { useLanguage } from "@/context/LocaleProvider";
import { getDatesRange } from "@/utils/getDatesRange";
import {
  StyledOverview,
  StyledCap,
  StyledTrack,
  StyledMonths,
  StyledMTick,
  StyledBars,
  StyledBar,
  StyledHoy,
  StyledWin,
  StyledGhost,
  StyledCursor,
  StyledTip
} from "./styles";

// Full-year navigator (§22.8): weekly density bars coloured by worst readiness, a HOY marker, the current viewport
// window, a hover date readout, and click-to-jump. Density reflects the currently-loaded data only.
const Overview: FC = () => {
  const { date, zoom, data, goToDate } = useCalendar();
  const lang = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState<{ left: number; d: dayjs.Dayjs } | null>(null);

  // Localized month abbreviations (respects the dayjs locale set by LocaleProvider from config.lang).
  const months = useMemo(
    () => Array.from({ length: 12 }, (_, i) => dayjs().month(i).format("MMM").toUpperCase()),
    [lang]
  );

  const year = date.year();
  const yearStart = useMemo(() => dayjs(new Date(year, 0, 1)), [year]);
  const daysInYear = useMemo(
    () => dayjs(new Date(year + 1, 0, 1)).diff(yearStart, "day"),
    [year, yearStart]
  );
  const pct = (d: dayjs.Dayjs) => (d.diff(yearStart, "day") / daysInYear) * 100;

  const bars = useMemo(() => {
    const n = Math.ceil(daysInYear / 7);
    const counts = new Array<number>(n).fill(0);
    const sev = new Array<number>(n).fill(0);
    for (const row of data ?? []) {
      for (const seg of row.data ?? []) {
        const d = dayjs(seg.startDate);
        if (d.year() !== year) continue;
        const i = Math.floor(d.diff(yearStart, "day") / 7);
        if (i < 0 || i >= n) continue;
        counts[i] += 1;
        const s = seg.readiness === "sin_chofer" ? 2 : seg.readiness === "sin_avisar" ? 1 : 0;
        if (s > sev[i]) sev[i] = s;
      }
    }
    const max = Math.max(1, ...counts);
    return counts.map((c, i) => ({ h: (c / max) * 100, sev: sev[i] }));
  }, [data, year, yearStart, daysInYear]);

  const today = dayjs();
  const hoyPct = today.year() === year ? pct(today) : null;

  // The window spans exactly the LOADED/rendered range (getDatesRange = the extent emitted to onRangeChange, i.e. the
  // dates actually fetched/drawn), centred on `center`. Same helper drives the green current-window and the hover
  // ghost, so the ghost is always identical in span to the window a click would load (goToDate recenters on hover).
  const winFor = (center: dayjs.Dayjs) => {
    const { startDate, endDate } = getDatesRange(center, zoom);
    const left = Math.max(0, pct(startDate));
    return { left, width: Math.min(100, pct(endDate)) - left, startDate, endDate };
  };
  const win = winFor(date);
  const ghost = cursor ? winFor(cursor.d) : null;
  const fmt = (d: dayjs.Dayjs) => `${d.date()} ${months[d.month()]}`;

  const dateAtClientX = (clientX: number) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return null;
    const f = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    return { f, d: yearStart.add(Math.round(f * daysInYear), "day") };
  };

  return (
    <StyledOverview>
      <StyledCap>
        Navegar
        <br />
        por fecha
      </StyledCap>
      <StyledTrack
        ref={trackRef}
        onClick={(e) => {
          const hit = dateAtClientX(e.clientX);
          if (hit) goToDate(hit.d.toDate());
        }}
        onMouseMove={(e) => {
          const hit = dateAtClientX(e.clientX);
          if (hit) setCursor({ left: hit.f * 100, d: hit.d });
        }}
        onMouseLeave={() => setCursor(null)}>
        <StyledMonths>
          {months.map((m, i) => (
            <span key={i} style={{ left: `${pct(dayjs(new Date(year, i, 1)))}%` }}>
              {m}
            </span>
          ))}
        </StyledMonths>
        {months.map((m, i) =>
          i === 0 ? null : (
            <StyledMTick key={i} style={{ left: `${pct(dayjs(new Date(year, i, 1)))}%` }} />
          )
        )}
        <StyledBars>
          {bars.map((b, i) => (
            <StyledBar key={i} $sev={b.sev} style={{ height: `${b.h}%` }} />
          ))}
        </StyledBars>
        <StyledWin style={{ left: `${win.left}%`, width: `${win.width}%` }} />
        {hoyPct !== null && (
          <StyledHoy style={{ left: `${hoyPct}%` }}>
            <span>HOY</span>
          </StyledHoy>
        )}
        {cursor && ghost && (
          <>
            <StyledGhost style={{ left: `${ghost.left}%`, width: `${ghost.width}%` }} />
            <StyledCursor style={{ left: `${cursor.left}%` }} />
            <StyledTip style={{ left: `${cursor.left}%` }}>{`${fmt(ghost.startDate)} – ${fmt(ghost.endDate)}`}</StyledTip>
          </>
        )}
      </StyledTrack>
    </StyledOverview>
  );
};

export default Overview;
