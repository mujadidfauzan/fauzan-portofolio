export default function getImageUrl(fileName) {
  const imgUrl = new URL(`/src/assets/${fileName}`, import.meta.url).href;
  return imgUrl;
}
