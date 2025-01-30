export function getImageUrl(fileName) {
  const imgUrl = new URL(`/src/assets/${fileName}`, import.meta.url).href;
  return imgUrl;
}

export function getImagesByPrefix(prefixes) {
  // Import semua gambar di folder "assets"
  const allImages = import.meta.glob('/src/assets/*.{png,jpg,jpeg}', { eager: true });

  // Filter gambar berdasarkan prefix yang diberikan
  const filteredImages = Object.entries(allImages)
    .filter(([path]) => prefixes.some((prefix) => path.includes(`/${prefix}`))) // Cek apakah nama file mengandung prefix
    .map(([_, module]) => module.default); // Ambil URL gambar

  return filteredImages;
}

export function getImagesArray(...filenames) {
  const imageMap = import.meta.glob('/src/assets/*.{png,jpg,jpeg,svg}', { eager: true });

  return filenames.map((filename) => {
    const path = `/src/assets/${filename}`;
    const image = imageMap[path];
    return image ? image.default : null;
  });
}
