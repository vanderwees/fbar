const url = "http://img.itadvice.de/fbar/";

const images = [
  "IMG_20211017_165941_00_merged.jpg",
  "IMG_20211017_170211_00_merged.jpg",
  "IMG_20211017_170304_00_merged.jpg",
  "IMG_20211017_170339_00_merged.jpg",
  "IMG_20211017_170425_00_merged.jpg",
  "IMG_20211017_170455_00_merged.jpg",
  "IMG_20211017_170537_00_merged.jpg",
  "IMG_20211017_170617_00_merged.jpg",
  "IMG_20211017_170711_00_merged.jpg",
  "IMG_20211017_170806_00_merged.jpg",
  "IMG_20211017_170913_00_merged.jpg",
];

const panorama = new PANOLENS.ImagePanorama(`${url}${images[0]}`);
const viewer = new PANOLENS.Viewer();
viewer.add(panorama);
