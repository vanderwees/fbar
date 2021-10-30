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
  "IMG_20211017_170913_00_merged.jpg", // hall 3
  "IMG_20211017_170806_00_merged.jpg", // hall 4
];

const viewer = new PANOLENS.Viewer();

let currentPanorama = 0;
window.prev = function () {
  if (currentPanorama !== 0) {
    currentPanorama--;
    viewer.setPanorama(panoramas[currentPanorama]);
  }
  console.log('currentPanorama', currentPanorama);
}
window.next = function () {
  if (currentPanorama < panoramas.length) {
    currentPanorama++;
    viewer.setPanorama(panoramas[currentPanorama]);
  }
  console.log('currentPanorama', currentPanorama);
}

let panoramas = [];

// Create panoramas from all images
images.forEach((image, key) => {
  panoramas[key] = new PANOLENS.ImagePanorama(`${url}${image}`);
  viewer.add(panoramas[key]);

  // Directly pair panorama to previous
  // if (key > 0) {
  //   // THREE.Vector3( X, Y, Z )
  //   panoramas[key - 1].link(panoramas[key], new THREE.Vector3(-10, -30, -80), 8, arrow);
  //   panoramas[key].link(panoramas[key - 1], new THREE.Vector3(-10, -30, 80), 8, f);
  // }
  // if (key >= 2) {
  //   // THREE.Vector3( X, Y, Z )
  //   panoramas[key - 1].link(panoramas[key], new THREE.Vector3(-10, -30, -80), 8, arrow);
  //   panoramas[key].link(panoramas[key - 1], new THREE.Vector3(-10, -30, 80), 8, f);
  //   console.log(key, key - 1, 'linked');
  // }

})

// panoramas[0].link(panoramas[1], new THREE.Vector3(180, -80, 50), 8, arrow);


// // panoramas[1].link(panoramas[0], new THREE.Vector3(0, -2680, 30), 8, f);
// panoramas[1].link(panoramas[0], new THREE.Vector3(-100, -30, 30), 8, f);
// panoramas[1].link(panoramas[2], new THREE.Vector3(-450, 0, 0), 8, arrow);

// panoramas[2].link(panoramas[1], new THREE.Vector3(-10, -30, -80), 8, arrow);


// panoramas[2].link(panoramas[1], new THREE.Vector3(-10, -30, 80), 8, f);
// panoramas[2].link(panoramas[3], new THREE.Vector3(5, 5, 5), 8, arrow);

// panoramas[2].link(panoramas[0], new THREE.Vector3(-10, -30, 80), 8, f); //extra
// panoramas[2].link(panoramas[1], new THREE.Vector3(-10, -30, 80), 8, f);
// panoramas[2].link(panoramas[3], new THREE.Vector3(-10, -30, -80), 8, arrow);


// panoramas[3].link(panoramas[2], new THREE.Vector3(-10, -30, 80), 8, f);


// panoramas[4].link(panoramas[3], new THREE.Vector3(-10, -30, -80), 8, arrow);
// panoramas[3].link(panoramas[4], new THREE.Vector3(-10, -30, 80), 8, f);


// panorama1.link( panorama2, new THREE.Vector3( -3145.23, -3704.40, 1149.48 ) );
// panorama2.link( panorama1, new THREE.Vector3( -3429.01, 1205.85, -3421.88 ) );


// Some effects
// panoramas[0].addEventListener('enter-fade-start', function () {
//   viewer.tweenControlCenter(new THREE.Vector3(10, -2, 0), 0);
// });
