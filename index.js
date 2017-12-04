import map from "ai-map";
export default func =>
  map.with(item => {
    try {
      func(item);
    } catch (err) {}
    return item;
  });
