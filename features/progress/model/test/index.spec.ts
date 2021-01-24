import { getProgressPercent } from "../index";

test("it should return correct percent", () => {
  expect(getProgressPercent({ now: 0, full: 100 })).toBe(0);
  expect(getProgressPercent({ now: 1, full: 100 })).toBe(1);
  expect(getProgressPercent({ now: 33, full: 100 })).toBe(33);
  expect(getProgressPercent({ now: 50, full: 100 })).toBe(50);
  expect(getProgressPercent({ now: 99, full: 100 })).toBe(99);
  expect(getProgressPercent({ now: 100, full: 100 })).toBe(100);
});

test("it should return half of full percent", () => {});
