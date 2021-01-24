interface IParams {
  full: number;
  now: number;
  fractionDigits: number;
}

export function getProgressPercent({ full, now, fractionDigits = 5 }): number {
  const percent = (now / full) * 100;

  return Number(percent.toFixed(fractionDigits));
}
