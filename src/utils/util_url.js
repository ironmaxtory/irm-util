/**
 * Url类型实用工具
 */

var Url = {
  parseWinLocation () {
    return {
      href: window.location.href,
      protocol: window.location.protocol,
      host: window.location.host,
      port: window.location.port,
      pathname: window.location.pathname,
      search: window.location.search,
      hash: window.location.hash,
    };
  },

  getRidofSearchOfWinLocation () {
    let locationObj = Url.parseWinLocation();
    let start = window.location.href.indexOf(locationObj.search);
    let len = locationObj.search.length;
    return window.location.href.substring(0, start)
      + window.location.href.substring(0+start+len);
  },

  parseUrl (url) {
    let a = document.createElement('a');
    a.href = url;

    let ret = {
      source: url,
      protocol: a.protocol.replace(':', ''),
      host: a.hostname,
      port: a.port,
      query: a.search,
      params: (()=>{
        let ret = {},
            seg = a.search.replace(/^\?/, '').split('&'),
            len = seg.length, i=0, s;
        for (; i<len; i++) {
          if (!seg[i]) { continue; }
          s = seg[i].split('=');
          ret[s[0]] = s[1];
        }
        return ret;
      })(),
      file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
      hash: a.hash.replace('#',''),
      path: a.pathname.replace(/^([^\/])/,'/$1'),
      pathname: a.pathname,
      relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
      segments: a.pathname.replace(/^\//,'').split('/')
    };

    a = null;
    return ret;
  },
};

export default Url;
