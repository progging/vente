!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).vente={})}(this,function(e){e.pending=function(){var e,n;return{promise:new Promise(function(t,o){e=t,n=o}),resolve:e,reject:n}},e.wait=function(e){return new Promise(function(n){return setTimeout(n,e)})}});
//# sourceMappingURL=vente.umd.js.map
