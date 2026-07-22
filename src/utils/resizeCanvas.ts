export const resizeCanvas = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  const w = Math.max(0, width);
  const h = Math.max(0, height);
  ctx.canvas.width = w * window.devicePixelRatio;
  ctx.canvas.height = h * window.devicePixelRatio;
  ctx.canvas.style.width = w + "px";
  ctx.canvas.style.height = h + "px";
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
};
