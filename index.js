
// import * as THREE from './node_modules/three/build/three.min.js';
// import * as PANOLENS from "./node_modules/panolens/build/panolens.min.js";

// import THREE from './node_modules/three/build/three.module.js';
// import * as three from './node_modules/three/build/three.module.js';
// import * as Panolens from './node_modules/panolens/build/panolens.module.js';
// import * as three from './lib/three.min.js';
// import Panolens from './lib/panolens.min.js';



// let TWEEN    = Panolens.TWEEN;
// let PANOLENS = Panolens.PANOLENS;

import PANOLENS  from "./node_modules/panolens-three/dist/index.js";
const THREE =  PANOLENS.THREE;

console.log(THREE, PANOLENS);

const panorama = new PANOLENS.ImagePanorama( 'asset/equirectangular.jpg' );
const viewer = new PANOLENS.Viewer();
viewer.add( panorama );
