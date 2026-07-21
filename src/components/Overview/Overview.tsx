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

// Rolling navigator: the ribbon spans exactly the selectable range — 3 whole months back to 9 whole months forward
// from today — so it IS the navigable window (§22.8). Weekly density bars coloured by worst readiness, a HOY marker,
// the current viewport window, a hover date readout, and click-to-jump. Bar HEIGHTS come from whole-year counts
// (config.yearCounts) when the host supplies them, else the loaded data; readiness COLOUR is always overlaid from the
// loaded window (the only place readiness lives), so distant weeks show volume neutrally and loaded weeks are tinted.
const Overview: FC = () => {
  const { date, zoom, data, goToDate, config } = useCalendar();
  const lang = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState<{ left: number; d: dayjs.Dayjs } | null>(null);

  // Localized month abbreviations (respects the dayjs locale set by LocaleProvider from config.lang).
  const months = useMemo(
    () => Array.from({ length: 12 }, (_, i) => dayjs().month(i).format("MMM").toUpperCase()),
    [lang]
  );

  const today = useMemo(() => dayjs().startOf("day"), []);
  const { domainStart, domainEnd, domainDays } = useMemo(() => {
    const start = today.subtract(3, "month").startOf("month");
    const end = today.add(9, "month").endOf("month");
    return { domainStart: start, domainEnd: end, domainDays: end.diff(start, "day") + 1 };
  }, [today]);
  const pct = (d: dayjs.Dayjs) => (d.diff(domainStart, "day") / domainDays) * 100;
  const clampPct = (p: number) => Math.min(100, Math.max(0, p));

  // One label + tick per whole month spanned by the domain (crosses a year boundary, so January and the first mark
  // carry a 2-digit year to disambiguate the repeated month names).
  const monthMarks = useMemo(() => {
    const marks: dayjs.Dayjs[] = [];
    let m = domainStart.startOf("month");
    while (m.isBefore(domainEnd)) {
      marks.push(m);
      m = m.add(1, "month");
    }
    return marks;
  }, [domainStart, domainEnd]);

  const yearCounts = config?.yearCounts;
  const bars = useMemo(() => {
    const n = Math.ceil(domainDays / 7);
    const counts = new Array<number>(n).fill(0);
    const sev = new Array<number>(n).fill(0);
    const weekOf = (d: dayjs.Dayjs) => {
      const off = d.diff(domainStart, "day");
      return off < 0 || off >= domainDays ? -1 : Math.floor(off / 7);
    };

    // Count (height) + worst readiness (colour) in one pass. When the host supplies whole-range yearCounts, BOTH come
    // from it so the ENTIRE ribbon is coloured by activity — not just the loaded window. Only the demo/no-host fallback
    // reads readiness off the loaded segments.
    if (yearCounts && yearCounts.length) {
      for (const pt of yearCounts) {
        const i = weekOf(dayjs(pt.date));
        if (i < 0) continue;
        counts[i] += pt.count;
        const s = pt.sev ?? 0;
        if (s > sev[i]) sev[i] = s;
      }
    } else {
      for (const row of data ?? []) {
        for (const seg of row.data ?? []) {
          const i = weekOf(dayjs(seg.startDate));
          if (i < 0) continue;
          counts[i] += 1;
          const s = seg.readiness === "sin_chofer" ? 2 : seg.readiness === "sin_avisar" ? 1 : 0;
          if (s > sev[i]) sev[i] = s;
        }
      }
    }

    // Height is anchored to the busiest week (max → 100%, honoring "relative to the max events"), but the exponent is
    // DERIVED from this operation's own spikiness — max ÷ median of the non-empty weeks. A flat year stays ~linear; a
    // season-peaked year bends concave so the quiet weeks still read instead of collapsing to slivers. No hardcoded
    // volume number: the ceiling and the exponent are both data-derived; the 0.45 floor / log2 base are dimensionless.
    const max = Math.max(0, ...counts);
    if (max <= 0) return counts.map((_, i) => ({ h: 0, sev: sev[i] }));
    const nz = counts.filter((c) => c > 0).sort((a, b) => a - b);
    const mid = nz.length >> 1;
    const median = nz.length % 2 ? nz[mid] : (nz[mid - 1] + nz[mid]) / 2;
    const ratio = median > 0 ? max / median : 1;
    const gamma = Math.min(1, Math.max(0.45, 1 / (1 + Math.log2(Math.max(1, ratio)))));
    return counts.map((c, i) => ({ h: c > 0 ? Math.min(100, 100 * Math.pow(c / max, gamma)) : 0, sev: sev[i] }));
  }, [data, yearCounts, domainStart, domainDays]);

  const hoyPct = pct(today);

  // The window spans exactly the LOADED/rendered range (getDatesRange = the extent emitted to onRangeChange, i.e. the
  // dates actually fetched/drawn), centred on `center`. Same helper drives the green current-window and the hover
  // ghost, so the ghost is always identical in span to the window a click would load (goToDate recenters on hover).
  const winFor = (center: dayjs.Dayjs) => {
    const { startDate, endDate } = getDatesRange(center, zoom);
    const left = clampPct(pct(startDate));
    return { left, width: clampPct(pct(endDate)) - left, startDate, endDate };
  };
  const win = winFor(date);
  const ghost = cursor ? winFor(cursor.d) : null;
  const fmt = (d: dayjs.Dayjs) => `${d.date()} ${months[d.month()]}`;

  const dateAtClientX = (clientX: number) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return null;
    const f = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    return { f, d: domainStart.add(Math.round(f * (domainDays - 1)), "day") };
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
          {monthMarks.map((m, i) => (
            <span key={i} style={{ left: `${pct(m)}%` }}>
              {i === 0 || m.month() === 0 ? `${months[m.month()]} ${m.format("YY")}` : months[m.month()]}
            </span>
          ))}
        </StyledMonths>
        {monthMarks.map((m, i) =>
          i === 0 ? null : <StyledMTick key={i} style={{ left: `${pct(m)}%` }} />
        )}
        <StyledBars>
          {bars.map((b, i) => (
            <StyledBar key={i} $sev={b.sev} style={{ height: `${b.h}%` }} />
          ))}
        </StyledBars>
        <StyledWin style={{ left: `${win.left}%`, width: `${win.width}%` }} />
        <StyledHoy style={{ left: `${clampPct(hoyPct)}%` }}>
          <span>HOY</span>
        </StyledHoy>
        {cursor && ghost && (
          <>
            <StyledGhost style={{ left: `${ghost.left}%`, width: `${ghost.width}%` }} />
            <StyledCursor style={{ left: `${cursor.left}%` }} />
            <StyledTip style={{ left: `${cursor.left}%` }}>{`Ir a ${fmt(cursor.d)}`}</StyledTip>
          </>
        )}
      </StyledTrack>
    </StyledOverview>
  );
};

export default Overview;
