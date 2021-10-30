const arrow = "/assets/arrow.png";
const f = "/assets/F.png";

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

//const panorama = new PANOLENS.ImagePanorama(`${url}${images[0]}`);
const viewer = new PANOLENS.Viewer();

const panoramas = [];



// Create panoramas from all images
images.forEach((image, key) => {
  panoramas[key] = new PANOLENS.ImagePanorama(`${url}${image}`);
  viewer.add(panoramas[key]);

  // Directly pair panorama to previous
  if (key !== 0) {
    // THREE.Vector3( X, Y, Z )
    panoramas[key - 1].link(panoramas[key], new THREE.Vector3(10, -30, 80), 8, arrow);//PANOLENS.DataImage.Arrow);
    panoramas[key].link(panoramas[key - 1], new THREE.Vector3(-10, -30, 80), 8, f);//PANOLENS.DataImage.Arrow);
    console.log(key, key - 1, 'linked');
  }
  if (key !== images.length) {
  }

});
console.log(PANOLENS.DataImage.Arrow);

// panoramas.forEach

// panorama1.link( panorama2, new THREE.Vector3( -3145.23, -3704.40, 1149.48 ) );
// panorama2.link( panorama1, new THREE.Vector3( -3429.01, 1205.85, -3421.88 ) );


console.log(panoramas);
