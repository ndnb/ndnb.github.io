(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{175:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(183),l=a(181),s=a(176),o=(a(193),function(e){var t=e.children;return n.a.createElement("button",{style:{padding:".5rem 2.5rem",color:s.b.lightWhite,fontWeight:700,background:s.c,borderRadius:s.a,borderWidth:0,cursor:"pointer"}},t)}),d=a(194),c=a.n(d),u=a(195),f=a(178),g=a(196),p=a.n(g),m=function(){return n.a.createElement(f.a,{query:"1337989062",render:function(e){return n.a.createElement(p.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:u})},h=a(199),y=a.n(h),b=function(e){e.siteTitle;return n.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",padding:"4rem 1rem"}},n.a.createElement("div",{style:{backgroundImage:"url("+c.a+")",position:"absolute",top:0,zIndex:-5,height:"100vh",width:"100vw",opacity:.5}}),n.a.createElement("h1",{style:{textAlign:"center"}},"Landing Page Starter"),n.a.createElement("p",{style:{textAlign:"center",maxWidth:440}},"This landing page looks great on all devices and is minimal in design. Add what you want and deploy."),n.a.createElement(o,null,"Get Early Access"),n.a.createElement("div",{style:{margin:60,width:"250px",position:"relative"}},n.a.createElement("div",{style:{clipPath:"inset(2% 5% round 2% 5%)"}},n.a.createElement(m,null)),n.a.createElement("div",{style:{position:"absolute",width:"250px",top:0}},n.a.createElement("img",{src:y.a,alt:"outlines of shapes and confetti in the background "}))))};b.defaultProps={siteTitle:""};var E=b,v=a(200),w=a.n(v),S=function(e){var t=e.title,a=e.description;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,t),n.a.createElement("p",{style:{color:s.b.mediumGray}},a))},L=function(){return n.a.createElement("div",{style:{padding:"4rem 1rem",textAlign:"center"}},n.a.createElement(S,{title:"Minimal Features",description:"Don't spend time ripping out unneeded plugins and bloat."}),n.a.createElement("content",{style:{display:"grid",alignItems:"center",justifyContent:"center",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 340px))"}},n.a.createElement("div",null,n.a.createElement("h3",null,"What you need to Start"),n.a.createElement("p",{style:{color:s.b.gray}},"Includes plugins for analytics, building sitemaps, and optimizing images")),n.a.createElement("div",null,n.a.createElement("img",{src:w.a,alt:"a blank card floating over colorful graphics"}))))},V=function(){return n.a.createElement("div",{style:{padding:"4rem 1rem",textAlign:"center"}},n.a.createElement(S,{title:"Stay Updated",description:"Give a final call to action because that's what the cool kids are doing."}),n.a.createElement(o,null,"Get Early Access"))};t.default=function(){return n.a.createElement(i.a,null,n.a.createElement(l.a,null),n.a.createElement(E,null),n.a.createElement(L,null),n.a.createElement(V,null))}},176:function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"c",function(){return n}),a.d(t,"a",function(){return i});var r={lightWhite:"#FBFDFF",lightGray:"#F3F5F6",mediumGray:"#B0B8BA",gray:"#A0A4A6",babyBlue:"#50CAF9",blue:"#5368f1"},n="linear-gradient(to top right, "+r.babyBlue+", "+r.blue+")",i="10px"},177:function(e,t,a){var r;e.exports=(r=a(180))&&r.default||r},178:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var r=a(0),n=a.n(r),i=(a(58),a(177),a(7).default.enqueue,n.a.createContext({}));function l(e){var t=e.staticQueryData,a=e.data,r=e.query,i=e.render,l=a?a.data:t[r]&&t[r].data;return n.a.createElement(n.a.Fragment,null,l&&i(l),!l&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,a=e.query,r=e.render,s=e.children;return n.a.createElement(i.Consumer,null,function(e){return n.a.createElement(l,{data:t,query:a,render:r||s,staticQueryData:e})})}},179:function(e){e.exports={data:{site:{siteMetadata:{title:"Starter Landing Page"}}}}},180:function(e,t,a){"use strict";a.r(t);a(23);var r=a(0),n=a.n(r),i=a(85);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},181:function(e,t,a){"use strict";var r=a(182),n=a(0),i=a.n(n),l=a(185),s=a.n(l);function o(e){var t=e.description,a=e.lang,n=e.meta,l=e.keywords,o=e.title,d=r.data.site,c=t||d.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+d.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(n)})}o.defaultProps={lang:"en",meta:[],keywords:[]},t.a=o},182:function(e){e.exports={data:{site:{siteMetadata:{title:"Starter Landing Page",description:"A barebone landing page starter with some minimal styles.",author:"@gillkyle"}}}}},183:function(e,t,a){"use strict";var r=a(179),n=a(0),i=a.n(n),l=a(178),s=a(176),o=function(e){var t=e.siteTitle;return i.a.createElement("footer",{style:{padding:"1rem",backgroundColor:s.b.lightGray}},i.a.createElement("div",{style:{display:"grid",alignItems:"center",justifyContent:"space-between",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 240px))",padding:"1rem 2rem",fontSize:".85rem"}},i.a.createElement("div",{style:{color:s.b.blue,fontWeight:700}},i.a.createElement("a",{style:{textDecoration:"none"},href:"https://github.com/gillkyle/gatsby-starter-landing-page"},"Contact Us")),i.a.createElement("div",{style:{color:s.b.gray}},"© ",(new Date).getFullYear()," ",t)))};o.defaultProps={siteTitle:""};var d=o;a(184),t.a=function(e){var t=e.children;return i.a.createElement(l.a,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{padding:"0 1rem"}},i.a.createElement("main",null,t)),i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}))},data:r})}},194:function(e,t,a){e.exports=a.p+"static/header-58036a188ebee7b0e28b31b50b895477.png"},195:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,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",aspectRatio:.5030181086519114,src:"/static/08e39ef39d2d62d9a273d7d8f67cc07c/69781/mockup-content.png",srcSet:"/static/08e39ef39d2d62d9a273d7d8f67cc07c/e22c9/mockup-content.png 75w,\n/static/08e39ef39d2d62d9a273d7d8f67cc07c/d3809/mockup-content.png 150w,\n/static/08e39ef39d2d62d9a273d7d8f67cc07c/69781/mockup-content.png 250w",sizes:"(max-width: 250px) 100vw, 250px"}}}}}},196:function(e,t,a){"use strict";a(27),a(28),a(13),a(82),a(124),a(197);var r=a(15);t.__esModule=!0,t.default=void 0;var n,i=r(a(62)),l=r(a(63)),s=r(a(126)),o=r(a(127)),d=r(a(0)),c=r(a(59)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=u(e),a=f(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,y=h&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function v(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var V=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)}).join("")+"<img "+d+l+s+a+r+t+i+n+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=d.default.createElement(x,(0,o.default)({src:t},n));return a.length>1?d.default.createElement("picture",null,r(a),i):i},x=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:n},g,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});x.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var A=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&y&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)((0,l.default)(a))),a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=V(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,l=e.imgStyle,s=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,v=e.itemProp,L=e.loading,V=e.draggable,A=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,o.default)({opacity:A?1:0,transition:k?"opacity "+y+"ms":"none"},s),T="boolean"==typeof h?"lightgray":h,O={transitionDelay:y+"ms"},z=(0,o.default)({opacity:this.state.imgLoaded?0:1},k&&O,s,f),P={title:t,alt:this.state.isVisible?"":a,style:z,className:g};if(p){var F=p,U=F[0];return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(U.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/U.aspectRatio+"%"}}),T&&d.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&O)}),U.base64&&d.default.createElement(R,{src:U.base64,spreadProps:P,imageVariants:F,generateSources:S}),U.tracedSVG&&d.default.createElement(R,{src:U.tracedSVG,spreadProps:P,imageVariants:F,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,E(F),d.default.createElement(x,{alt:a,title:t,sizes:U.sizes,src:U.src,crossOrigin:this.props.crossOrigin,srcSet:U.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:V})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,o.default)({alt:a,title:t,loading:L},U,{imageVariants:F}))}}))}if(m){var W=m,D=W[0],G=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:D.width,height:D.height},i);return"inherit"===i.display&&delete G.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(D.srcSet)},T&&d.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:T,width:D.width,opacity:this.state.imgLoaded?0:1,height:D.height},k&&O)}),D.base64&&d.default.createElement(R,{src:D.base64,spreadProps:P,imageVariants:W,generateSources:S}),D.tracedSVG&&d.default.createElement(R,{src:D.tracedSVG,spreadProps:P,imageVariants:W,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,E(W),d.default.createElement(x,{alt:a,title:t,width:D.width,height:D.height,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:V})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,o.default)({alt:a,title:t,loading:L},D,{imageVariants:W}))}}))}return null},t}(d.default.Component);A.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),I=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});A.propTypes={resolutions:k,sizes:I,fixed:c.default.oneOfType([k,c.default.arrayOf(k)]),fluid:c.default.oneOfType([I,c.default.arrayOf(I)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=A;t.default=T},197:function(e,t,a){"use strict";a(198)("fixed",function(e){return function(){return e(this,"tt","","")}})},198:function(e,t,a){var r=a(6),n=a(8),i=a(34),l=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(l,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},199:function(e,t,a){e.exports=a.p+"static/mockup-frame-b9050674e8edc6198f7f43b91c8db7a6.png"},200:function(e,t,a){e.exports=a.p+"static/feature-54bf66a93de7cbdcf6ac0291600ee7da.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-d2b717b8a957ac694241.js.map