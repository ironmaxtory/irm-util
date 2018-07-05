import Util from './index.js';
import Axios from 'axios';

const log = console.log.bind(console);

log(Util.UtilBlade);
var x = {a:1, b:'', c:1, d:undefined, e:[]};
Util.UtilBlade.delEmptyAttr(x, { corresVal:[undefined] })
log(x);
