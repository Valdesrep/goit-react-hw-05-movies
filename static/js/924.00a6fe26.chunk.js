"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[924],{9980:function(e,t,n){n.d(t,{Bt:function(){return _},Hq:function(){return h},Tg:function(){return l},d5:function(){return m},h_:function(){return f}});var r=n(5861),a=n(7757),s=n.n(a),c=n(4569),i=n.n(c),u="https://api.themoviedb.org/3/",o="eef69e4613a866add8ae298195f2ed87";function l(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(u,"trending/movie/day?api_key=").concat(o),e.next=3,i().get(t);case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(u,"search/movie?api_key=").concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(t),e.next=3,i().get(n);case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(u,"/movie/").concat(t,"}?api_key=").concat(o,"&language=en-US"),e.next=3,i().get(n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"),e.next=3,i().get(n);case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"),e.next=3,i().get(n);case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},7924:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(5861),a=n(885),s=n(7757),c=n.n(s),i=n(2791),u=n(501),o=n(6871),l=n(9980),p="MoviesDetails_back__+3wa2",h="MoviesDetails_box__uVIj+",d="MoviesDetails_thumb__YhuJy",f="MoviesDetails_poster__XXyaO",v="MoviesDetails_Link__soqOl",m="MoviesDetails_List__aI-f8",x=n(184),_=(0,i.lazy)((function(){return n.e(76).then(n.bind(n,8076))})),g=(0,i.lazy)((function(){return n.e(168).then(n.bind(n,2168))}));function j(){var e,t,n=(0,o.UO)().movieId,s=(0,i.useState)(null),j=(0,a.Z)(s,2),w=j[0],k=j[1],y=(0,o.TH)();(0,i.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.h_)(n);case 3:t=e.sent,k(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("errror");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);var b=null!==(e=null===y||void 0===y||null===(t=y.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return w&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(u.rU,{to:b,className:p,children:"Go Back"}),(0,x.jsxs)("div",{className:h,children:[(0,x.jsx)("div",{className:d,children:(0,x.jsx)("img",{className:f,src:"https://image.tmdb.org/t/p/w500".concat(w.poster_path),alt:"",width:"150px",onError:function(e){e.target.src="https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-600w-1350441335.jpg"}})}),(0,x.jsxs)("div",{children:[(0,x.jsxs)("h1",{children:[w.title," (",w.release_date.slice(0,4),")"]}),(0,x.jsxs)("p",{children:["User Score: ",10*w.vote_average,"%"]}),(0,x.jsx)("h2",{children:"Overview "}),(0,x.jsx)("p",{children:w.overview}),(0,x.jsx)("h2",{children:"Genres"}),(0,x.jsx)("p",{children:w.genres.map((function(e){return(0,x.jsxs)("span",{children:[e.name," "]},e.id)}))})]})]}),(0,x.jsxs)("ul",{className:m,children:[(0,x.jsx)("li",{children:(0,x.jsx)(u.rU,{to:"cast",className:v,state:{from:b},children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(u.rU,{to:"reviews",className:v,state:{from:b},children:"Reviews"})})]}),(0,x.jsx)(i.Suspense,{fallback:(0,x.jsx)("h1",{children:"Loading..."}),children:(0,x.jsxs)(o.Z5,{children:[(0,x.jsx)(o.AW,{path:"cast",element:(0,x.jsx)(_,{id:n})}),(0,x.jsx)(o.AW,{path:"reviews",element:(0,x.jsx)(g,{id:n})})]})})]})}}}]);
//# sourceMappingURL=924.00a6fe26.chunk.js.map