
import * as THREE from './node_modules/three/build/three.min.js';
import * as PANOLENS from "./node_modules/panolens/build/panolens.min.js";

const panorama = new PANOLENS.ImagePanorama( 'IMG_20211017_165941_00_merged.jpg' );
const viewer = new PANOLENS.Viewer();
viewer.add( panorama );
