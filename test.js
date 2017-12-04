import test from "tape-async";
import aiTap from ".";

test("exports a function", async t => {
  t.is(typeof aiTap, "function");
});
