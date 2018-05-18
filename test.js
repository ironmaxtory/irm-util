import Util from './index.js';
import Axios from 'axios';

console.log(Util.UtilRecurse);

Axios.get('http://api.gdp.com/model/categories?pid=1&aid=0&client_type=pc&version=1.0&token=a32495dae1f555aac0de16ef7da7d7ea')
  .then(function(rsp){
    var data = rsp.data.data;
    var recurser = new Util.UtilRecurse(data, 'children');
    recurser.subscribe(function(child, idx, children, lv, parent){
      console.log(lv);
    });
    recurser.run();
  });
