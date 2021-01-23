export function getProgress(
  startMs: number,
  endMs: number,
  nowMs: number
): number {
  const percent = ((nowMs / (endMs - startMs)) * 100) / 1000;
  const NUMBER_ROUND = 100_000_000;

  return Math.floor(percent * NUMBER_ROUND) / NUMBER_ROUND;
}
