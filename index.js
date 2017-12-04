export default async function aiTap(data) {
  for (const item of data) {
    await item;
  }
}
