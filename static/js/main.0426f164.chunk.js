(this["webpackJsonpdingonft-frontend"]=this["webpackJsonpdingonft-frontend"]||[]).push([[0],{166:function(e,t,n){"use strict";(function(e){var a=n(14),r=n(4),c=n(8),s=n.n(c),i=n(123),l=n(176),o=n(122),u=n(10),j=n(106),d=n(300),b=n(1),x=n.n(b),h=n(30),O=n(167),f=n(121),p=n.n(f),m=n(59),v=n.n(m),g=n(60),N=n.n(g),w=n(168),y=n.n(w),T=n(61),k=n(34),S=n(21),C=n(0),F=function(e){return new Promise((function(t,n){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){return t(a.result.split(",")[1])},a.onerror=function(e){return n(e)}}))};t.a=function(){var t=x.a.useState(null),n=Object(r.a)(t,2),c=n[0],b=n[1],f=x.a.useState(""),m=Object(r.a)(f,2),g=m[0],w=m[1],B=x.a.useState("1000"),I=Object(r.a)(B,2),E=I[0],P=I[1],A=x.a.useState(0),L=Object(r.a)(A,2),D=L[0],G=L[1],R=x.a.useState(""),H=Object(r.a)(R,2),q=H[0],V=H[1],M=x.a.useState(""),z=Object(r.a)(M,2),K=z[0],U=z[1],Y=x.a.useState(null),J=Object(r.a)(Y,2),W=J[0],_=J[1],$=x.a.useState(""),Q=Object(r.a)($,2),X=Q[0],Z=Q[1],ee=x.a.useState(""),te=Object(r.a)(ee,2),ne=te[0],ae=te[1],re=x.a.useState(!1),ce=Object(r.a)(re,2),se=ce[0],ie=ce[1],le=x.a.useState(null),oe=Object(r.a)(le,2),ue=oe[0],je=oe[1],de=x.a.useState(null),be=Object(r.a)(de,2),xe=be[0],he=be[1],Oe=x.a.useState(!1),fe=Object(r.a)(Oe,2),pe=fe[0],me=fe[1];x.a.useEffect((function(){null!==c?c.size>1e7?w("NFT content size limit exceeded (max 10 MB)"):w(""):w("NFT content required")}),[c]),x.a.useEffect((function(){Object(a.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===W){t.next=9;break}return t.t0=e,t.next=4,F(W);case 4:t.t1=t.sent,n=t.t0.from.call(t.t0,t.t1,"base64"),Object(O.a)(n)?W.size>1e7?Z("Cover file size limit exceeded (max 100 KB)"):256!==p()(n).width||256!==p()(n).height?Z("Cover image must have dimension 256x256"):Z(""):Z("Cover image must be a PNG"),t.next=10;break;case 9:Z("Cover image required");case 10:case"end":return t.stop()}}),t)})))()}),[W]);var ve=function(){var e=Object(a.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),t.stopPropagation(),t.nativeEvent.stopImmediatePropagation(),void 0!==window.dingo){e.next=6;break}return me(!0),e.abrupt("return");case 6:return e.t0=k.d,e.t1=N.a,e.t2=v.a,e.t3=y.a,e.next=12,F(c);case 12:return e.t4=e.sent,e.t5=e.t3.parse.call(e.t3,e.t4),e.t6=(0,e.t2)(e.t5),e.t7=e.t1.stringify.call(e.t1,e.t6),e.t8=Object(S.c)(E),e.t9=25+Math.floor(75*D/100),e.t10={contentHash:e.t7,price:e.t8,royalty:e.t9},e.next=21,(0,e.t0)(e.t10);case 21:if(null!==(n=e.sent)&&!("error"in n)){e.next=24;break}return e.abrupt("return");case 24:return e.next=26,window.dingo.requestSignTransaction([],n.vouts);case 26:return a=e.sent.result,ie(!0),e.t11=k.f,e.next=31,F(c);case 31:if(e.t12=e.sent,null!==W){e.next=36;break}e.t13=null,e.next=39;break;case 36:return e.next=38,F(W);case 38:e.t13=e.sent;case 39:return e.t14=e.t13,e.t15=q,e.t16=K,e.t17=ne,e.t18=a,e.t19={content:e.t12,preview:e.t14,name:e.t15,description:e.t16,tags:e.t17,transaction:e.t18},e.next=47,(0,e.t11)(e.t19);case 47:if(r=e.sent,console.log(r),null!==r&&void 0===r.error){e.next=52;break}return je(!1),e.abrupt("return");case 52:ie(!1),je(!0),he(r.address);case 55:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsxs)("div",{children:[Object(C.jsx)(i.a,{className:"App-header",children:Object(C.jsxs)(l.a,{children:[Object(C.jsx)("h1",{className:"mt-4",children:"Create NFT"}),Object(C.jsx)(h.a,{})]})}),Object(C.jsx)(i.a,{style:{maxWidth:"900px"},children:Object(C.jsx)(l.a,{children:Object(C.jsxs)(o.a,{children:[(null===ue||!1===ue)&&Object(C.jsxs)(u.a,{onSubmit:ve,children:[Object(C.jsxs)(u.a.Group,{className:"mb-3 mt-4",children:[Object(C.jsx)(u.a.Label,{children:Object(C.jsx)("b",{children:"Cover image (*required)"})}),Object(C.jsx)(u.a.Control,{type:"file",onChange:function(e){return _(e.target.files[0])},isInvalid:null!==X&&""!==X,isValid:""===X}),X&&Object(C.jsx)("div",{children:Object(C.jsx)(u.a.Text,{className:"input-error",children:X})}),Object(C.jsx)(u.a.Text,{className:"text-muted",children:"A 256x256 PNG cover image for your NFT (max 100 KB). You can't change this after creating the NFT."})]}),Object(C.jsxs)(u.a.Group,{className:"mb-3",children:[Object(C.jsx)(u.a.Label,{children:Object(C.jsx)("b",{children:"Content (*required)"})}),Object(C.jsx)(u.a.Control,{type:"file",onChange:function(e){return b(e.target.files[0])},isInvalid:null!==g&&""!==g,isValid:""===g}),g&&Object(C.jsx)("div",{children:Object(C.jsx)(u.a.Text,{className:"input-error",children:g})}),Object(C.jsx)(u.a.Text,{className:"text-muted",children:"This file can only be viewed by the latest owner. The NFT will be locked uniquely to it - you can only use it once (max 10 MB)."})]}),Object(C.jsxs)(u.a.Group,{className:"mb-3",children:[Object(C.jsx)(u.a.Label,{children:"Name (optional)"}),Object(C.jsx)(u.a.Control,{type:"text",value:q,placeholder:"Max 40 characters",onChange:function(e){return V(e.target.value)},isValid:""!==q&&q.length<=40,isInvalid:""!==q&&q.length>40}),q.length>40&&Object(C.jsx)("div",{children:Object(C.jsx)(u.a.Text,{className:"input-error",children:"Name too long"})}),Object(C.jsx)(u.a.Text,{className:"text-muted",children:"You can't change this after creating the NFT."})]}),Object(C.jsxs)(u.a.Group,{className:"mb-3",children:[Object(C.jsx)(u.a.Label,{children:"Description (optional)"}),Object(C.jsx)(u.a.Control,{type:"text",value:K,placeholder:"Max 500 characters",onChange:function(e){return U(e.target.value)},isValid:""!==K&&K.length<=500,isInvalid:""!==K&&K.length>500}),K.length>500&&Object(C.jsx)("div",{children:Object(C.jsx)(u.a.Text,{className:"input-error",children:"Description long"})}),Object(C.jsx)(u.a.Text,{className:"text-muted",children:"You can't change this after creating the NFT."})]}),Object(C.jsxs)(u.a.Group,{className:"mb-3",children:[Object(C.jsx)(u.a.Label,{children:"Tags (optional)"}),Object(C.jsx)(u.a.Control,{type:"text",value:ne,placeholder:"Max 100 characters; space separated",onChange:function(e){return ae(e.target.value)},isValid:""!==ne&&ne.length<=100,isInvalid:""!==ne&&ne.length>100}),ne.length>100&&Object(C.jsx)("div",{children:Object(C.jsx)(u.a.Text,{className:"input-error",children:"Tags long"})}),Object(C.jsx)(u.a.Text,{className:"text-muted",children:"You can't change this after creating the NFT."})]}),Object(C.jsxs)(u.a.Group,{className:"mb-3 mt-2",children:[Object(C.jsx)(u.a.Label,{children:Object(C.jsx)("b",{children:"Listing price (*required)"})}),Object(C.jsx)(u.a.Control,{type:"text",value:E,onChange:function(e){e.target.value.match(/^[0-9]+$/)&&parseInt(e.target.value)>=1?P(e.target.value):P("1000")}}),Object(C.jsx)(u.a.Text,{className:"text-muted",children:"Initial selling price for your NFT in DINGO (min. 1 DINGO)."})]}),Object(C.jsxs)(u.a.Group,{className:"mb-3",children:[Object(C.jsxs)(u.a.Label,{children:[Object(C.jsx)("b",{children:"Creator royalty (*required): "}),(2.5+Math.floor(75*D/100)/10).toFixed(1)+"%"]}),Object(C.jsx)(u.a.Range,{value:D,onChange:function(e){return G(e.target.value)}}),Object(C.jsx)(u.a.Text,{className:"text-muted",children:"Royalty paid to you for every transaction of this NFT."})]}),Object(C.jsxs)("div",{style:{textAlign:"center"},children:[null===ue&&!1===se&&Object(C.jsx)(j.a,{className:"popup-button mt-4 px-4",variant:"primary",type:"submit",disabled:null===c||""!==g||null!==W&&""!==X,children:"Create NFT"}),null===ue&&!0===se&&Object(C.jsxs)("div",{children:[Object(C.jsx)(d.a,{animation:"border"}),Object(C.jsxs)("p",{children:["Transaction pending...",Object(C.jsx)("br",{}),"(DO NOT CLOSE THIS PAGE)"]})]}),!1===ue&&Object(C.jsx)("div",{children:Object(C.jsxs)("p",{children:["Transaction failed!",Object(C.jsx)("br",{}),"Please reload this page and try again"]})})]})]}),!0===ue&&Object(C.jsxs)("div",{style:{textAlign:"center"},children:[" ",Object(C.jsx)("h3",{children:"NFT Created!"}),Object(C.jsxs)("p",{children:["NFT Address: ",Object(C.jsx)("b",{children:xe})]}),Object(C.jsx)("div",{style:{textAlign:"center"},children:Object(C.jsx)("a",{href:"/nft?address="+xe,children:Object(C.jsx)(j.a,{className:"popup-button px-4",variant:"primary",children:"View NFT \u25ba"})})})]})]})})}),Object(C.jsx)(T.a,{show:pe,onHide:function(){return me(!1)}})]})}}).call(this,n(12).Buffer)},182:function(e,t,n){},199:function(e,t){},205:function(e,t){},209:function(e,t){},21:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u}));var a=n(14),r=n(8),c=n.n(r),s=n(169),i=n.n(s),l=function(e){if(null===e||void 0===e||"string"!==typeof e||""===e)throw new Error("Expected string input");return(BigInt(i.a.toWei(e,"gwei"))/10n).toString()},o=function(e){var t=BigInt(e)<0n;t&&(e=-e);var n=(BigInt(e)/100000000n).toString();return(t?"-":"")+"".concat(n.replace(/\B(?=(\d{3})+(?!\d))/g,","))},u=function(){var e=Object(a.a)(c.a.mark((function e(t,n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new AbortController,setTimeout((function(){return a.abort()}),3e4),e.next=4,fetch(t,{withCredentials:!0,method:"POST",signal:a.signal,headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return e.abrupt("return",e.sent.json());case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},212:function(e,t){},223:function(e,t){},253:function(e,t){},255:function(e,t){},266:function(e,t){},268:function(e,t){},281:function(e,t){},283:function(e,t){},299:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(33),s=n.n(c),i=n(14),l=n(4),o=n(8),u=n.n(o),j=(n(182),n(166)),d=function(e){var t=new AbortController;return setTimeout((function(){return t.abort()}),5e3),fetch(e,{withCredentials:!0,method:"GET",signal:t.signal})},b=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("".concat("https://ewr1.vultrobjects.com/dingo-nftc-0-meta","/").concat(t));case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.json());case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return","".concat("https://ewr1.vultrobjects.com/dingo-nftc-0-preview","/").concat(t,".png"));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("".concat("https://ewr1.vultrobjects.com/dingo-nftc-0-state","/").concat(t));case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.json());case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("".concat("https://ewr1.vultrobjects.com/dingo-nftc-0-profile","/").concat(t));case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.json());case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("".concat("https://ewr1.vultrobjects.com/dingo-nftc-0-profilelists","/").concat(t));case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.json());case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("".concat("https://ewr1.vultrobjects.com/dingo-nftc-0-explore","/").concat(t));case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.json());case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=n(305),v=n(21),g=n(0);var N=function(e){var t=r.a.useRef(),n=r.a.useState(!1),a=Object(l.a)(n,2),c=a[0],s=a[1],o=r.a.useState(null),j=Object(l.a)(o,2),d=j[0],O=j[1],f=r.a.useState(null),p=Object(l.a)(f,2),N=p[0],w=p[1],y=r.a.useState(null),T=Object(l.a)(y,2),k=T[0],S=T[1];return r.a.useEffect((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&s(!0)}))}));return e.observe(t.current),function(){try{e.unobserve(t.current)}catch(n){}}}),[]),r.a.useEffect((function(){Object(i.a)(u.a.mark((function t(){var n,a,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c){t.next=13;break}return t.next=3,b(e.address);case 3:return n=t.sent,t.next=6,x(e.address);case 6:return a=t.sent,t.next=9,h(e.address);case 9:r=t.sent,O(a),w(null===n?null:n.name),S(null===r?null:r.price);case 13:case"end":return t.stop()}}),t)})))()}),[e.address,c]),Object(g.jsxs)(m.a,{className:"nft-card floating-borders floating-borders-press",ref:t,children:[Object(g.jsxs)("div",{className:"header-box",children:[Object(g.jsx)("div",{className:"spinner",children:Object(g.jsx)("div",{className:"spinner-border text-primary",role:"status",children:Object(g.jsx)("span",{className:"sr-only",children:"Loading..."})})}),Object(g.jsx)(m.a.Img,{variant:"top",src:d,loading:"lazy"})]}),Object(g.jsx)("hr",{}),Object(g.jsxs)(m.a.Body,{children:[Object(g.jsx)(m.a.Title,{children:null===N?"-":""===N?"Unnamed NFT":N}),Object(g.jsx)(m.a.Subtitle,{children:e.address}),Object(g.jsxs)(m.a.Text,{children:[Object(g.jsx)("span",{className:"card-price",children:null===k?"-":Object(v.b)(k)}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"card-price-subtitle",children:"DINGO"})]})]})]})},w=n(123),y=n(176),T=n(10),k=n(106),S=n(30),C=n(59),F=n.n(C),B=n(60),I=n.n(B),E=n(34),P=n(61);var A=function(){var e=r.a.useState(null),t=Object(l.a)(e,2),n=t[0],a=t[1],c=r.a.useState(null),s=Object(l.a)(c,2),o=s[0],j=s[1],d=r.a.useState(null),x=Object(l.a)(d,2),f=x[0],p=x[1],m=r.a.useState(null),C=Object(l.a)(m,2),B=C[0],A=C[1],L=r.a.useState(null),D=Object(l.a)(L,2),G=D[0],R=D[1],H=r.a.useState(void 0),q=Object(l.a)(H,2),V=q[0],M=q[1],z=r.a.useState(""),K=Object(l.a)(z,2),U=K[0],Y=K[1],J=r.a.useState(""),W=Object(l.a)(J,2),_=W[0],$=W[1],Q=r.a.useState(null),X=Object(l.a)(Q,2),Z=X[0],ee=X[1],te=r.a.useState(!1),ne=Object(l.a)(te,2),ae=ne[0],re=ne[1];r.a.useEffect((function(){a(new URLSearchParams(window.location.search).get("address"))}),[]),r.a.useEffect((function(){""===U?$("Resell price required"):null!==f&&BigInt(Object(v.c)(U))>BigInt(10)*BigInt(f.price)?$("Resell price must be at most 10x the current price"):$("")}),[U,f]),r.a.useEffect((function(){null!==n&&Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=j,e.next=3,b(n);case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.next=7,h(n);case 7:return t=e.sent,p(t),e.t2=M,e.next=12,Object(E.a)({address:n});case 12:if(e.t3=e.sent,(0,e.t2)(e.t3),null===t){e.next=25;break}return e.t4=A,e.next=18,O(t.owner);case 18:return e.t5=e.sent,(0,e.t4)(e.t5),e.t6=R,e.next=23,O(t.creator);case 23:e.t7=e.sent,(0,e.t6)(e.t7);case 25:case"end":return e.stop()}}),e)})))()}),[n]);var ce=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,r,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),t.stopPropagation(),a=Date.now(),r="".concat(n,"|").concat(a),e.next=6,window.dingo.requestSign(I.a.stringify(F()(r)));case 6:if(void 0===(c=e.sent).error){e.next=9;break}return e.abrupt("return");case 9:return e.next=11,Object(E.c)({address:n,timestamp:a,signature:c.result});case 11:if(null!==(s=e.sent)&&void 0===s.error){e.next=14;break}return e.abrupt("return");case 14:void 0!==s.content&&window.open(s.content);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,r,c,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),t.stopPropagation(),void 0!==window.dingo){e.next=5;break}return re(!0),e.abrupt("return");case 5:return e.next=7,Object(E.b)({address:n,price:Object(v.c)(U)});case 7:return a=e.sent,r=a.vins,c=a.vouts,e.next=12,window.dingo.requestSignTransaction(r,c);case 12:return s=e.sent.result,e.next=15,Object(E.e)({transaction:s});case 15:i=e.sent,ee(i);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{children:[Object(g.jsxs)(w.a,{className:"justify-content-md-center",children:[Object(g.jsxs)(y.a,{children:[Object(g.jsx)("div",{className:"cards-container",children:Object(g.jsx)(N,{address:n})}),null!==o&&null!==o.description&&""!==o.description&&Object(g.jsx)("p",{className:"text-center mt-4",children:Object(g.jsx)("i",{children:o.description})})]}),Object(g.jsx)(S.a,{}),Object(g.jsxs)(y.a,{className:"text-center",children:[Object(g.jsx)("h3",{children:"Owner"}),Object(g.jsx)("p",{children:Object(g.jsx)("a",{className:"simple-link",href:null===f?"":"/profile?address=".concat(f.owner),children:null===B||null===B.name||""===B.name?null===f?"-":f.owner:B.name})}),Object(g.jsx)("h3",{className:"mt-2",children:"Creator"}),Object(g.jsx)("a",{className:"simple-link",href:null===f?"":"/profile?address=".concat(f.creator),children:null===G||null===G.name||""===G.name?null===f?"-":f.creator:G.name}),void 0!==f&&null!==f&&Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{className:"mt-4",children:"Hidden Content"}),Object(g.jsx)("div",{className:"clickable mb-2",onClick:ce,style:{display:"inline"},children:"(Verify and view)"})]}),void 0!==f&&null!==f&&Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{className:"mt-4",children:"Trade Volume"}),Object(g.jsx)("a",{className:"simple-link",href:null===f?"":"/profile?address=".concat(f.creator),children:Object(g.jsx)("p",{children:null===f?"-":Object(v.b)(f.stats.volume)})})]})]}),Object(g.jsx)(S.a,{}),void 0!==V&&null!==V&&Object(g.jsxs)(y.a,{className:"justify-content-md-center mt-2 text-center",children:[Object(g.jsx)("h2",{children:"Buy NFT"}),Object(g.jsxs)("div",{style:{textAlign:"center"},className:"mt-4",children:[" ",Object(g.jsx)("h5",{children:"NFT busy"}),Object(g.jsxs)("p",{children:[Object(g.jsx)("a",{className:"simple-link",href:"https://openchains.info/coin/dingocoin/tx/"+V.txid,rel:"noreferrer",target:"_blank",children:"A transaction"})," ","is currenly being confirmed for this NFT. ",Object(g.jsx)("br",{}),"Please try again in a few minutes."]})]})]}),void 0!==V&&null===V&&Object(g.jsxs)(y.a,{className:"justify-content-md-center mt-2 text-center",children:[Object(g.jsx)("h2",{children:"Buy NFT"}),null==Z&&Object(g.jsxs)(w.a,{className:"justify-content-md-center",children:[Object(g.jsx)(y.a,{className:"mx-auto",style:{maxWidth:"35rem"},children:Object(g.jsxs)(T.a.Group,{className:"mb-3 mt-3",children:[Object(g.jsx)(T.a.Label,{children:Object(g.jsx)("b",{children:"Resell at (*required)"})}),Object(g.jsx)(T.a.Control,{type:"text",value:U,onChange:function(e){e.target.value.match(/^[0-9]*$/)&&Y(e.target.value)},style:{textAlign:"center"},isInvalid:""!==_}),_&&Object(g.jsx)("div",{children:Object(g.jsx)(T.a.Text,{className:"input-error",children:_})}),Object(g.jsx)(T.a.Text,{className:"text-muted",children:"New price you want to sell this NFT for (min. 1 Dingocoin)."})]})}),Object(g.jsx)(y.a,{children:Object(g.jsx)(k.a,{className:"popup-button mb-4 mx-auto px-4",style:{width:"auto"},onClick:se,disabled:""!==_,children:"Buy and resell NFT"})})]}),null!==Z&&void 0===Z.error&&Object(g.jsx)(w.a,{children:Object(g.jsxs)("div",{style:{textAlign:"center"},className:"mt-4",children:[" ",Object(g.jsx)("h4",{children:"Transaction submitted!"}),Object(g.jsxs)("p",{children:["Transaction ID:"," ",Object(g.jsx)("a",{className:"simple-link",href:"https://openchains.info/coin/dingocoin/tx/"+Z.txid,rel:"noreferrer",target:"_blank",children:Z.txid}),Object(g.jsx)("br",{}),"It may take a few minutes for your transaction to be confirmed."]})]})}),null!==Z&&void 0!==Z.error&&Object(g.jsx)(w.a,{children:Object(g.jsxs)("div",{style:{textAlign:"center"},className:"mt-4",children:[" ",Object(g.jsx)("h4",{children:"Transaction failed!"}),Object(g.jsxs)("p",{children:["- Make sure that your wallet has no pending transaction.",Object(g.jsx)("br",{}),"- You can't buy this NFT as its owner/creator."]})]})})]})]}),Object(g.jsx)(P.a,{show:ae,onHide:function(){return re(!1)}})]})},L=n(303),D=n(306),G=n(107);var R=function(){var e=r.a.useState(null),t=Object(l.a)(e,2),n=t[0],a=t[1],c=r.a.useState(null),s=Object(l.a)(c,2),o=s[0],j=s[1],d=r.a.useState(""),b=Object(l.a)(d,2),x=b[0],h=b[1],p=r.a.createRef(),m=r.a.useState(null),v=Object(l.a)(m,2),C=v[0],B=v[1],A=r.a.useState(null),R=Object(l.a)(A,2),H=R[0],q=R[1],V=r.a.useState(!1),M=Object(l.a)(V,2),z=M[0],K=M[1];r.a.useEffect((function(){a(new URLSearchParams(window.location.search).get("address"))}),[]),r.a.useEffect((function(){null!==n&&(document.title="Profile | ".concat(n),Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(n);case 2:return t=e.sent,e.next=5,f(n);case 5:a=e.sent,console.log(t),console.log(a),B(t),q(a),null!==t&&(null===t.name?h(""):h(t.name));case 11:case"end":return e.stop()}}),e)})))())}),[n]);var U=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),t.stopPropagation(),t.nativeEvent.stopImmediatePropagation(),void 0!==window.dingo){e.next=6;break}return K(!0),e.abrupt("return");case 6:return a={timestamp:Date.now(),owner:n,name:null===x||""===x?null:x},r=JSON.stringify(a),console.log(r),e.next=11,window.dingo.requestSign(I.a.stringify(F()(r)));case 11:if(void 0===(c=e.sent).error){e.next=14;break}return e.abrupt("return");case 14:return a.signature=c.result,e.next=17,Object(E.g)(a);case 17:if(!("error"in e.sent)){e.next=20;break}return e.abrupt("return");case 20:window.location.reload(!1);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{children:[Object(g.jsx)(w.a,{className:"App-header",children:Object(g.jsxs)(y.a,{children:[Object(g.jsx)("h1",{className:"mt-4",children:null===C?"-":""===C.name||null===C.name?"Unnamed Profile":C.name}),Object(g.jsx)("h6",{children:n}),Object(g.jsx)("p",{children:Object(g.jsx)("span",{children:Object(g.jsx)("div",{className:"clickable",style:{display:"inline"},onClick:function(){return j(!0)},children:"(Edit)"})})}),Object(g.jsx)(S.a,{})]})}),Object(g.jsxs)(L.a,{defaultActiveKey:null===H||0===H.createdNfts.length?"owned":"created",className:"justify-content-center",variant:"pills",children:[Object(g.jsx)(D.a,{eventKey:"created",title:"NFT Creations",children:null!==H&&Object(g.jsx)("ul",{className:"cards-container",children:H.createdNfts.map((function(e){return Object(g.jsx)("a",{href:"/nft?address=".concat(e),children:Object(g.jsx)(N,{address:e},e)})}))})}),Object(g.jsx)(D.a,{eventKey:"owned",title:"Owned NFTs",children:null!==H&&Object(g.jsx)("ul",{className:"cards-container",children:H.ownedNfts.map((function(e){return Object(g.jsx)("a",{href:"/nft?address=".concat(e),children:Object(g.jsx)(N,{address:e},e)})}))})})]}),Object(g.jsxs)(G.a,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:o,onHide:function(){return j(!1)},onEntered:function(){return p.current.focus()},children:[Object(g.jsx)(G.a.Header,{closeButton:!0,children:Object(g.jsx)(G.a.Title,{id:"contained-modal-title-vcenter",children:"Edit profile"})}),Object(g.jsx)(G.a.Body,{children:Object(g.jsxs)(T.a,{onSubmit:U,children:[Object(g.jsxs)(T.a.Group,{className:"mb-3",children:[Object(g.jsx)(T.a.Label,{children:"Profile name (leave blank if no change)"}),Object(g.jsx)(T.a.Control,{type:"text",value:x,placeholder:"Max 40 characters",onChange:function(e){return h(e.target.value)},isValid:""!==x&&x.length<=40,isInvalid:""!==x&&x.length>40,ref:p}),x.length>40&&Object(g.jsx)("div",{children:Object(g.jsx)(T.a.Text,{className:"input-error",children:"Name too long"})})]}),Object(g.jsx)("div",{style:{textAlign:"center"},children:Object(g.jsx)(k.a,{className:"popup-button mb-3 mt-3 px-4",variant:"primary",type:"submit",children:"Verify and update profile"})})]})})]}),Object(g.jsx)(P.a,{show:z,onHide:function(){return K(!1)}})]})};var H=function(){var e=r.a.useState(null),t=Object(l.a)(e,2),n=t[0],a=t[1],c=r.a.useState(null),s=Object(l.a)(c,2),o=s[0],j=s[1];return r.a.useEffect((function(){document.title="Explore NFTs",Object(i.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("new");case 2:return t=e.sent,e.next=5,p("volume");case 5:n=e.sent,a(t),j(n);case 8:case"end":return e.stop()}}),e)})))()}),[]),Object(g.jsxs)("div",{children:[Object(g.jsx)(w.a,{className:"App-header",children:Object(g.jsxs)(y.a,{children:[Object(g.jsx)("h1",{className:"mt-4",children:"Explore NFTs"}),Object(g.jsx)(S.a,{})]})}),Object(g.jsxs)(L.a,{defaultActiveKey:"volume",className:"justify-content-center",variant:"pills",children:[Object(g.jsx)(D.a,{eventKey:"volume",title:"Hot NFTS",children:null!==o&&Object(g.jsx)("ul",{className:"cards-container",children:o.map((function(e){return Object(g.jsx)("a",{href:"/nft?address=".concat(e),children:Object(g.jsx)(N,{address:e},e)})}))})}),Object(g.jsx)(D.a,{eventKey:"new",title:"New listings",children:null!==n&&Object(g.jsx)("ul",{className:"cards-container",children:n.map((function(e){return Object(g.jsx)("a",{href:"/nft?address=".concat(e),children:Object(g.jsx)(N,{address:e},e)})}))})})]})]})},q=n(304),V=n(175),M=n(170),z=n(41),K=n(42),U=n.p+"static/media/dingocoin.15331900.png",Y=n(172),J=n(9),W=n(122);var _=function(){return Object(g.jsx)("div",{children:Object(g.jsx)("header",{className:"section-a",id:"home",children:Object(g.jsx)("div",{className:"particles-container",children:Object(g.jsxs)(w.a,{className:"masthead text-center",children:[Object(g.jsx)(y.a,{children:Object(g.jsx)(W.a,{children:Object(g.jsx)("div",{className:"isometric-holder",children:Object(g.jsx)("div",{className:"isometric"})})})}),Object(g.jsxs)(y.a,{children:[Object(g.jsx)("p",{className:"masthead-title mt-4 mb-2",children:"Dingocoin NFT Platform"}),Object(g.jsx)("p",{className:"mb-4",children:"The next generation of NFTs"})]}),Object(g.jsxs)(y.a,{fluid:!0,className:"pt-3 pb-2",children:[Object(g.jsx)(W.a,{children:Object(g.jsxs)("div",{className:"project-card mx-auto",children:[Object(g.jsx)("div",{className:"logo-holder",children:Object(g.jsx)(z.a,{className:"faicon",icon:K.e})}),Object(g.jsx)("h5",{children:"Ultra-low Costs"}),Object(g.jsxs)("p",{children:["Create and trade NFTs with ","<$0.001"," gas fees"]})]})}),Object(g.jsx)(W.a,{children:Object(g.jsxs)("div",{className:"project-card mx-auto",children:[Object(g.jsx)("div",{className:"logo-holder",children:Object(g.jsx)(z.a,{className:"faicon",icon:K.c})}),Object(g.jsx)("h5",{children:"On-chain Trading"}),Object(g.jsx)("p",{children:"You receive earnings and royalties immediately"})]})}),Object(g.jsx)(W.a,{children:Object(g.jsxs)("div",{className:"project-card mx-auto",children:[Object(g.jsx)("div",{className:"logo-holder",children:Object(g.jsx)(z.a,{className:"faicon",icon:K.d})}),Object(g.jsx)("h5",{children:"Cryptographically Unique"}),Object(g.jsx)("p",{children:"The same content can never be reused in another NFT"})]})})]}),Object(g.jsx)(S.a,{}),Object(g.jsx)(y.a,{children:Object(g.jsx)("h1",{className:"mt-4 mb-2",children:"Get started now!"})}),Object(g.jsxs)(y.a,{className:"quick-actions flex-wrap justify-content-md-center mt-4",children:[Object(g.jsx)("a",{href:"/explore",children:Object(g.jsx)(k.a,{className:"popup-button px-4 py-2 mb-4",variant:"primary",children:"Explore NFTs"})}),Object(g.jsx)("a",{href:"/create",children:Object(g.jsx)(k.a,{className:"popup-button px-4 py-2 mb-4",variant:"primary",children:"Create an NFT"})})]})]})})})})};var $=function(){var e=r.a.useState(null),t=Object(l.a)(e,2),n=t[0],a=t[1];r.a.useEffect((function(){a(window.location.pathname)}),[]),r.a.useEffect((function(){}),[n]);var c=r.a.useState(""),s=Object(l.a)(c,2),o=s[0],d=s[1],x=r.a.useState(null),h=Object(l.a)(x,2),f=h[0],p=h[1],m=function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),t.stopPropagation(),t.nativeEvent.stopImmediatePropagation(),d(o.trim()),""===o.trim()){e.next=16;break}return e.next=7,b(o.trim());case 7:if(null===e.sent){e.next=12;break}window.location.assign("/nft?address=".concat(o.trim())),e.next=16;break;case 12:return e.next=14,O(o.trim());case 14:null!==e.sent?window.location.assign("/profile?address=".concat(o.trim())):p(!0);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(Y.a,{children:[Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(q.a,{className:"navbar",bg:"dark",expand:"lg",sticky:"top",children:Object(g.jsxs)(w.a,{children:[Object(g.jsxs)(q.a.Brand,{href:"/",className:"navbar-brand align-items-center",children:[Object(g.jsx)("img",{alt:"",src:U}),Object(g.jsx)("span",{children:"DINGOCOIN"}),Object(g.jsx)("span",{className:"navbar-brand-subtitle",children:" NFT Platform"})]}),Object(g.jsx)(q.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsxs)(q.a.Collapse,{children:[Object(g.jsxs)(V.a,{className:"ms-auto",style:{paddingRight:"1.5rem"},children:[Object(g.jsx)(V.a.Link,{href:"/",children:"Home"}),Object(g.jsx)(V.a.Link,{href:"/explore",children:"Explore NFTs"}),Object(g.jsx)(V.a.Link,{href:"/create",children:"Create"})]}),Object(g.jsxs)(T.a,{className:"d-flex",onSubmit:m,children:[Object(g.jsx)(M.a,{type:"search",placeholder:"Jump to NFT/profile address...","aria-label":"Search",style:{borderTopRightRadius:"0",borderBottomRightRadius:"0",minWidth:"20rem"},value:o,onChange:function(e){return d(e.target.value)}}),Object(g.jsx)(k.a,{variant:"secondary mx-0",style:{borderTopLeftRadius:"0",borderBottomLeftRadius:"0"},type:"submit",children:Object(g.jsx)(z.a,{icon:K.b})})]})]})]})}),Object(g.jsx)("section",{className:"section-content",children:Object(g.jsxs)(J.c,{children:[Object(g.jsx)(J.a,{path:"/create",element:Object(g.jsx)(j.a,{})}),Object(g.jsx)(J.a,{path:"/profile",element:Object(g.jsx)(R,{})}),Object(g.jsx)(J.a,{path:"/nft",element:Object(g.jsx)(A,{})}),Object(g.jsx)(J.a,{path:"/explore",element:Object(g.jsx)(H,{})}),Object(g.jsx)(J.a,{path:"/",element:Object(g.jsx)(_,{})})]})}),Object(g.jsx)("section",{children:Object(g.jsx)("div",{className:"justify-content-center section-footer align-items-center",children:Object(g.jsx)("h6",{children:"Copyright \xa9 The Dingocoin Project 2021-2022"})})})]}),Object(g.jsxs)(G.a,{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:f,onHide:function(){return p(!1)},children:[Object(g.jsx)(G.a.Header,{closeButton:!0,children:Object(g.jsx)(G.a.Title,{id:"contained-modal-title-vcenter",children:"NFT/profile not found"})}),Object(g.jsx)(G.a.Body,{children:Object(g.jsxs)(w.a,{className:"text-center my-2",children:[Object(g.jsx)("p",{children:"No results found."}),Object(g.jsx)(k.a,{className:"mx-2",onClick:function(){return p(!1)},children:"Close"})]})})]})]})},Q=n(174),X=n.n(Q);s.a.render(Object(g.jsx)(X.a,{children:Object(g.jsx)($,{})}),document.getElementById("root"))},30:function(e,t,n){"use strict";var a=n(41),r=n(42),c=n(0);t.a=function(){return Object(c.jsxs)("div",{className:"divider-custom",children:[Object(c.jsx)("div",{className:"divider-custom-line mt-2 mb-2"}),Object(c.jsx)("div",{className:"divider-custom-icon mt-2 mb-2",children:Object(c.jsx)(a.a,{icon:r.a})}),Object(c.jsx)("div",{className:"divider-custom-line mt-2 mb-2"})]})}},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"e",(function(){return j})),n.d(t,"d",(function(){return d})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return x}));var a=n(14),r=n(8),c=n.n(r),s=n(21),i="https://nftp0.dingocoin.io",l=function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.a)("".concat(i,"/nft/getBusy"),{address:t.address});case 2:if(null!==(n=e.sent)){e.next=7;break}return e.abrupt("return",null);case 7:return e.abrupt("return",n.busy);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(e){return Object(s.a)("".concat(i,"/nft/getContent"),{address:e.address,timestamp:e.timestamp,signature:e.signature})},u=function(e){return Object(s.a)("".concat(i,"/nft/getBuyTransaction"),{address:e.address,price:e.price})},j=function(e){return Object(s.a)("".concat(i,"/nft/sendBuyTransaction"),{transaction:e.transaction})},d=function(e){return Object(s.a)("".concat(i,"/nft/getListTransaction"),{contentHash:e.contentHash,price:e.price,royalty:e.royalty})},b=function(e){return Object(s.a)("".concat(i,"/nft/sendListTransaction"),{content:e.content,preview:e.preview,name:e.name,description:e.description,tags:e.tags,transaction:e.transaction})},x=function(e){return Object(s.a)("".concat(i,"/profile/update"),{timestamp:e.timestamp,owner:e.owner,name:e.name,signature:e.signature})}},61:function(e,t,n){"use strict";var a=n(107),r=n(123),c=n(106),s=(n(1),n(0));t.a=function(e){return Object(s.jsxs)(a.a,{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:e.show,onHide:e.onHide,children:[Object(s.jsx)(a.a.Header,{closeButton:!0,children:Object(s.jsx)(a.a.Title,{id:"contained-modal-title-vcenter",children:"Browser Wallet required"})}),Object(s.jsx)(a.a.Body,{children:Object(s.jsxs)(r.a,{className:"text-center my-2",children:[Object(s.jsxs)("p",{children:["You need a Dingocoin browser wallet for this.",Object(s.jsx)("br",{}),"Set it up in less than a minute."]}),Object(s.jsx)("a",{href:"https://dingocoin.org/wallets",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(c.a,{className:"mx-2",children:"Get Chrome wallet"})}),Object(s.jsx)("a",{href:"https://dingocoin.org/wallets",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(c.a,{className:"mx-2",children:"Get Firefox wallet"})})]})})]})}}},[[299,1,2]]]);
//# sourceMappingURL=main.0426f164.chunk.js.map