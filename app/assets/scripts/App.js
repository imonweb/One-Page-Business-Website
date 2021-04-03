import 'bootstrap';

import Slider from './modules/Slider';
import "slick-carousel";
 

let slider = new Slider();

import '../styles/styles.scss'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab) 

dom.i2svg()
 

if(module.hot){
  module.hot.accept()
}

 