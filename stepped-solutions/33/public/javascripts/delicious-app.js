import '../sass/style.css';

import { $, $$ } from './modules/bling';
import autocomplete from './modules/autocomplete';
import typeAhead from './modules/typeAhead';

autocomplete( $('#address'), $('#lat'), $('#lng') );

typeAhead( $('.search') );
