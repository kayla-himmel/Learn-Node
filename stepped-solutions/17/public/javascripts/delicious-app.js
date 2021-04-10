import '../sass/style.css';

import { $, $$ } from './modules/bling';
import autocomplete from './modules/autocomplete';

autocomplete( $('#address'), $('#lat'), $('#lng') );
