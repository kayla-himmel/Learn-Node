import '../sass/style.scss';
import createMap from './modules/map';

import { $, $$ } from './modules/bling';
import autocomplete from './modules/autocomplete';

autocomplete( $('#address'), $('#lat'), $('#lng') );
createMap( $('#mapid') );