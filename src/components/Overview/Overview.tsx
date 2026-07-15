import { FC, useMemo, useRef, useState } from "react";
import dayjs from "dayjs";
import { useCalendar } from "@/context/CalendarProvider";
import { useLanguage } from "@/context/LocaleProvider";
import { getVisibleCols } from "@/utils/getCols";
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
  StyledCursor,
  StyledTip
} from "./styles";

// Full-year navigator (§22.8): weekly density bars coloured by worst readiness, a HOY marker, the current viewport
// window, a hover date readout, and click-to-jump. Density reflects the currently-loaded data only.
const Overview: FC = () => {
  const { date, zoom, data, goToDate } = useCalendar();
  const lang = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState<{ left: number; label: string } | null>(null);

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

  const halfDays = zoom === 1 ? getVisibleCols(1) / 2 : zoom === 0 ? (getVisibleCols(0) * 7) / 2 : 0.5;
  const winLeft = Math.max(0, pct(date.subtract(halfDays, "day")));
  const winWidth = Math.min(100, pct(date.add(halfDays, "day"))) - winLeft;

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
          if (hit) setCursor({ left: hit.f * 100, label: `${hit.d.date()} ${months[hit.d.month()]}` });
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
        <StyledWin style={{ left: `${winLeft}%`, width: `${winWidth}%` }} />
        {hoyPct !== null && (
          <StyledHoy style={{ left: `${hoyPct}%` }}>
            <span>HOY</span>
          </StyledHoy>
        )}
        {cursor && (
          <>
            <StyledCursor style={{ left: `${cursor.left}%` }} />
            <StyledTip style={{ left: `${cursor.left}%` }}>{cursor.label}</StyledTip>
          </>
        )}
      </StyledTrack>
    </StyledOverview>
  );
};

export default Overview;
