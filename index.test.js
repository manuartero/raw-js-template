import { foo } from "./index";

test("foo()", () => {
  expect(foo()).toBe(42);
});
