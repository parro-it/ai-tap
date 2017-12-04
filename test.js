import test from "tape-async";
import tap from ".";
import map from "ai-map";
import compose from "compose-function";

const awaitIterable = async iterable => {
  const generator = iterable[Symbol.asyncIterator] || iterable[Symbol.iterator];
  const iterator = generator.call(iterable);
  let item = {};
  while (!item.done) {
    item = await iterator.next();
  }
};

test("exports a function", async t => {
  const data = [];

  const double = map.with(n => n * 2);
  const add2 = map.with(n => n + 2);
  const calculate = compose(
    awaitIterable,
    tap(item => data.push(item)),
    add2,
    tap(item => data.push(item)),
    double
  );

  await calculate([1, 2, 3]);
  t.is(data.join("\n"), "2\n4\n6\n4\n6\n8");
});
