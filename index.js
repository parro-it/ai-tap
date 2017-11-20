export default async function* $package_var(data) {
  for (const item of data) {
    yield item;
  }
}
