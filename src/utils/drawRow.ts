import { Theme } from "@/styles";
import { DrawRowConfig } from "@/types/global";

export const drawRow = (config: DrawRowConfig, theme: Theme) => {
  const {
    ctx,
    x,
    y,
    width,
    height,
    textYPos,
    label,
    font,
    isBottomRow,
    fillStyle,
    topText,
    bottomText,
    strokeStyle,
    labelBetweenCells
  } = config;

  ctx.beginPath();
  // Subtle green-tinted hairline (not the heavy neutral border) so the grid reads clean, not boxed (matches the
  // reimagined artifact). Only horizontal dividers are drawn — no per-cell vertical strokes.
  const lineColor = strokeStyle ?? (theme.mode === "dark" ? theme.colors.border : "#E4EAE7");
  ctx.strokeStyle = lineColor;
  ctx.setLineDash([]);

  if (label && font && textYPos) {
    ctx.fillStyle = theme.colors.gridBackground;
    ctx.fillRect(x, y, width, height);

    if (labelBetweenCells) {
      ctx.moveTo(x, y);
      ctx.lineTo(x + width, y);
      ctx.stroke();

      ctx.moveTo(x, y + height);
      ctx.lineTo(x + width, y + height);
      ctx.stroke();

      ctx.moveTo(x + width / 2, y + height);
      ctx.lineTo(x + width / 2, y + height - 5);
      ctx.stroke();
    } else {
      // Bottom divider only — no box around the month label (removes the boxed look + the vertical column lines).
      ctx.moveTo(x, y + height - 0.5);
      ctx.lineTo(x + width, y + height - 0.5);
      ctx.stroke();
    }

    ctx.font = font;

    const textXPos = x + width / 2 - ctx.measureText(label).width / 2;
    ctx.textBaseline = "middle";
    ctx.fillStyle = theme.mode === "dark" ? theme.colors.textPrimary : "#183D3D";
    ctx.fillText(label, textXPos, textYPos);
  }
  if (isBottomRow && fillStyle && topText && bottomText) {
    ctx.fillStyle = fillStyle;
    ctx.fillRect(x, y, width, height);
    // Header day cell: a single bottom hairline under the whole day row — no vertical column strokes, no box.
    ctx.beginPath();
    ctx.moveTo(x, y + height - 0.5);
    ctx.lineTo(x + width, y + height - 0.5);
    ctx.stroke();

    ctx.font = topText.font;

    const dayNameXPos = x + width / 2 - ctx.measureText(topText.label).width / 2;

    ctx.fillStyle = topText.color;
    ctx.fillText(topText.label, dayNameXPos, topText.y);
    ctx.font = bottomText.font;

    const dayNumXPos = x + width / 2 - ctx.measureText(bottomText.label).width / 2;

    ctx.fillStyle = bottomText.color;
    ctx.fillText(bottomText.label, dayNumXPos, bottomText.y);
  }
};
