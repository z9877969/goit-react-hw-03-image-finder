(this["webpackJsonpimage-finder"]=this["webpackJsonpimage-finder"]||[]).push([[0],{19:function(e,t,a){e.exports={searchForm:"searchForm_searchForm__1EkKP"}},2:function(e,t,a){e.exports={photoCard:"photoCard_photoCard__1Vkjf",stats:"photoCard_stats__12A1I",statsItem:"photoCard_statsItem__3ypdq",fullscreenButton:"photoCard_fullscreenButton__2iwBw"}},21:function(e,t,a){e.exports={app:"app_app__14b3E"}},24:function(e,t,a){e.exports=a(47)},3:function(e,t,a){e.exports={gallery:"gallery_gallery__3vNwg",button:"gallery_button__1Vo3i"}},4:function(e,t,a){e.exports={overlay:"Modal_overlay__1TrWg",modal:"Modal_modal__1TTWj"}},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),l=a.n(o),i=a(5),c=a(16),s=a(17),m=a(22),u=a(18),d=a(23),g=a(19),p=a.n(g),h=function(e){var t=e.onSubmit;return r.a.createElement("form",{className:p.a.searchForm,onSubmit:t},r.a.createElement("input",{type:"text",autoComplete:"off",placeholder:"Search images..."}))},f=a(2),y=a.n(f),v=function(e){var t=e.item,a=e.onGetItemId,n=e.query;return r.a.createElement("div",{className:y.a.photoCard},r.a.createElement("img",{src:t.webformatURL,alt:n}),r.a.createElement("div",{className:y.a.stats},r.a.createElement("p",{className:y.a.statsItem},r.a.createElement("i",{className:"material-icons"},"thumb_up"),t.likes),r.a.createElement("p",{className:y.a.statsItem},r.a.createElement("i",{className:"material-icons"},"visibility"),t.views),r.a.createElement("p",{className:y.a.statsItem},r.a.createElement("i",{className:"material-icons"},"comment"),t.comments),r.a.createElement("p",{className:y.a.statsItem},r.a.createElement("i",{className:"material-icons"},"cloud_download"),t.downloads)),r.a.createElement("button",{type:"button",className:y.a.fullscreenButton,onClick:a},r.a.createElement("i",{className:"material-icons"},"zoom_out_map")))};v.defaultProps={query:"queried image"};var E=v,I=a(3),_=a.n(I),b=function(e){var t=e.gallery,a=e.onButtonLoad,n=e.onGetItemId;return r.a.createElement("div",null,r.a.createElement("ul",{className:_.a.gallery},t.length>0&&t.map((function(e){return r.a.createElement("li",{key:e.id,id:e.id},r.a.createElement(E,{item:e,onGetItemId:n}))}))),r.a.createElement("button",{type:"button",className:_.a.button,onClick:a},"Load more"))},N=a(4),w=a.n(N),S=function(e){var t=e.id,a=e.getItemById,n=e.query;return r.a.createElement("div",{"data-id":"modal",className:w.a.overlay},r.a.createElement("div",{className:w.a.modal},r.a.createElement("img",{src:a(t).largeImageURL,alt:n})))};S.defaultProps={query:"queried image"};var k=S,C=a(20),H=a.n(C),O=function(e,t){return H.a.get("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(e,"&page=").concat(t,"&per_page=12&key=").concat("13965574-3ae6669f35304ffc6cddc1b72")).then((function(e){return e.data.hits})).catch((function(e){return e}))},M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={gallery:[],query:"",pageNumber:1,pageHeight:0,id:"",isModalOpen:!1},a.galleryItems=r.a.createRef(),a.componentDidMount=function(){document.addEventListener("keydown",a.handlerCloseModal),document.addEventListener("click",a.handlerCloseModal)},a.componentDidUpdate=function(e,t){var n=a.state,r=n.gallery,o=n.pageNumber;r!==t.gallery&&1===o&&a.setPageHeight(a.getPageHeight())},a.getPageHeight=function(){var e=a.galleryItems.current;return e.childNodes[0].clientHeight+e.childNodes[1].clientHeight-20},a.setPageHeight=function(e){return a.setState({pageHeight:e})},a.scrollToNewItems=function(){var e=a.state.pageHeight;window.scrollTo({top:e,behavior:"smooth"}),a.setState({pageHeight:a.getPageHeight()})},a.getItemById=function(e){return a.state.gallery.find((function(t){return String(t.id)===String(e)}))},a.handlerSubmit=function(e){e.preventDefault();var t=e.target.children[0].value;return O(t,1).then((function(e){a.setState({gallery:e,query:t,pageNumber:1,pageHeight:a.getPageHeight()})}))},a.handlerAddNewItems=function(){var e=a.state,t=e.query,n=e.pageNumber+1;return O(t,n).then((function(e){return a.setState((function(t){return{gallery:[].concat(Object(i.a)(t.gallery),Object(i.a)(e)),pageNumber:n}}))})).then((function(){return a.scrollToNewItems()})).catch((function(e){return e}))},a.handlerGetItemId=function(e){var t=e.target;return a.setState({id:t.closest("li").id,isModalOpen:!0})},a.handlerCloseModal=function(e){var t=a.state,n=t.isModalOpen,r=t.id;return"modal"===e.target.dataset.id||"esc"===e.key||"Escape"===e.key?a.setState({isModalOpen:!1,id:""}):a.setState({isModalOpen:n,id:r})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.gallery,a=e.id,n=e.isModalOpen;return r.a.createElement("div",{ref:this.galleryItems},r.a.createElement(h,{onSubmit:this.handlerSubmit}),r.a.createElement(b,{gallery:t,onButtonLoad:this.handlerAddNewItems,onGetItemId:this.handlerGetItemId}),n&&r.a.createElement(k,{id:a,getItemById:this.getItemById}))}}]),t}(r.a.Component),q=a(21),B=a.n(q),j=function(){return r.a.createElement("div",{className:B.a.app},r.a.createElement(M,null))};a(46);l.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.5b822d24.chunk.js.map