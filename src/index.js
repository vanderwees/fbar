const arrow = "/assets/arrow.png";
const f = "/assets/F.png";

const url = "http://img.itadvice.de/fbar/";

const images = [
  "IMG_20211017_170537_00_merged.jpg", // outside
  "IMG_20211017_170455_00_merged.jpg", // front sofa
  "IMG_20211017_165941_00_merged.jpg", // bar
  "IMG_20211017_170425_00_merged.jpg", // bar behind till
  "IMG_20211017_170339_00_merged.jpg", // back 1 front
  "IMG_20211017_170211_00_merged.jpg", // back 2 middle
  "IMG_20211017_170304_00_merged.jpg", // back 3 back
  "IMG_20211017_170617_00_merged.jpg", // hall 1
  "IMG_20211017_170711_00_merged.jpg", // hall 2
  "IMG_20211017_170806_00_merged.jpg", // hall 3
  "IMG_20211017_170913_00_merged.jpg", // hall 4
];

const viewer = new PANOLENS.Viewer();

let currentPanorama = 0;
window.next = function () {
  if (currentPanorama !== 0) {
    viewer.setPanorama(panoramas[currentPanorama - 1]);
  }
}
window.prev = function () {
  if (currentPanorama < panoramas.length) {
    viewer.setPanorama(panoramas[currentPanorama + 1]);
  }
}

let panoramas = [];

// Create panoramas from all images
images.forEach((image, key) => {
  panoramas[key] = new PANOLENS.ImagePanorama(`${url}${image}`);
  viewer.add(panoramas[key]);

  // Directly pair panorama to previous
  if (key > 0) {
    // THREE.Vector3( X, Y, Z )
    panoramas[key - 1].link(panoramas[key], new THREE.Vector3(-10, -30, -80), 8, arrow);
    panoramas[key].link(panoramas[key - 1], new THREE.Vector3(-10, -30, 80), 8, f);
  }

});
