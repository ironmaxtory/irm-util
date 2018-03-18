'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Url类型实用工具
 */

var Url = {
  parseWinLocation: function parseWinLocation() {
    return {
      href: window.location.href,
      protocol: window.location.protocol,
      host: window.location.host,
      port: window.location.port,
      pathname: window.location.pathname,
      search: window.location.search,
      hash: window.location.hash
    };
  },
  getRidofSearchOfWinLocation: function getRidofSearchOfWinLocation() {
    var locationObj = Url.parseWinLocation();
    var start = window.location.href.indexOf(locationObj.search);
    var len = locationObj.search.length;
    return window.location.href.substring(0, start) + window.location.href.substring(0 + start + len);
  },
  parseUrl: function parseUrl(url) {
    var a = document.createElement('a');
    a.href = url;

    var ret = {
      source: url,
      protocol: a.protocol.replace(':', ''),
      host: a.hostname,
      port: a.port,
      query: a.search,
      params: function () {
        var ret = {},
            seg = a.search.replace(/^\?/, '').split('&'),
            len = seg.length,
            i = 0,
            s = void 0;
        for (; i < len; i++) {
          if (!seg[i]) {
            continue;
          }
          s = seg[i].split('=');
          ret[s[0]] = s[1];
        }
        return ret;
      }(),
      file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
      hash: a.hash.replace('#', ''),
      path: a.pathname.replace(/^([^\/])/, '/$1'),
      pathname: a.pathname,
      relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
      segments: a.pathname.replace(/^\//, '').split('/')
    };

    a = null;
    return ret;
  }
};

exports.default = Url;