(this.webpackJsonptheshoppies=this.webpackJsonptheshoppies||[]).push([[0],{107:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n(0),c=n.n(a),r=n(11),o=n.n(r),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,186)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))},l=n(33),A=n(15),j=n(83),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NOMINATE":return 5===e.length?(console.log("MAX NOMINEES REACHED"),e):e.find((function(e){return e.imdbID===t.payload.imdbID}))?(console.log("ALREADY NOMINATED"),e):[].concat(Object(j.a)(e),[t.payload]);case"WITHDRAW":var n=e.filter((function(e){return e.imdbID!==t.payload.imdbID}));return n;default:return e}},p=n(47),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOpen:!1,movieData:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_DRAWER":return Object(p.a)(Object(p.a)({},e),{},{isOpen:!e.isOpen});case"SET_DRAWER_DETAILS":return Object(p.a)(Object(p.a)({},e),{},{movieData:t.payload});default:return e}},O=Object(l.b)({nominations:d,drawer:b}),u=n(14),h=(n(107),n(185)),m=n(35),x=n.n(m),g=n(54),U=function(e){return{type:"NOMINATE",payload:e}},f=function(e){return{type:"WITHDRAW",payload:e}},S=function(e){return{type:"SET_DRAWER_DETAILS",payload:e}},V=n(161),q=n(163),E=n(166),N=n(165),R=n(164),K=n(167),y=n(48),F=n(160),T=n(157),B=Object(T.a)((function(e){return{media:{width:"100%",height:"445px"}}}));function D(e){var t=B(),n=e.data,a=e.showNominateBtn,c=Object(A.b)(),r=Object(A.c)((function(e){return e.nominations})),o=!1;return r.find((function(e){return e.imdbID===n.imdbID}))&&(o=!0),5===r.length&&(o=!0),"N/A"===n.Poster&&(n.Poster="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAEsAMwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDkAM04JilVaeq4oAQJmnKtOCZp6rmgBgSnBaeEpwXNADAlKExUgSlC0AMC0uypNlLsoAi8ul2VJsFLtoAi2UbKl2e36UbcdqAItlJ5dS7RRsoAh2GkK+1TFKQrigCEpTSmKmK5pClAEBTNNK4qcrmmlMUAQFM0xlqcrmmstAEBTFNqZkxTNuaAJVWnquKcq5p6rigBoSnquaVUp6rmgBoXFPCZpwXFOCUAMCYpwXNPC04JQBGEpdoFSCOnBKAIgvtS7DUojzS+V9aAIdho2Gp/Jo8rHrQBBtIpCvtU5ipNlAEBSkKVMY/akKUAQFaaUqcrimlM0AQFaaUqcrimFKAIGXNNZcVOy5pjLigCBkpm3NTslNK5oAkVakVcUKtPVcUACpTlXNOVKeq5oAaq4p4SnKlSJHQAwJTli/yalWKpFioAhEWacIqnWLNKsVAEIi+tL5XtU4ipRFQBX8r2o8r2qz5X0o8r6UAVjFTTFVryqaYqAKpiprRVaMVNaKgCo0eKYyVbaKo2ixQBVK4ppTNWGjxUbJQBAy0xlxU7LTGXFAEDLimFMmp2XFMKZoAlVcU9VxQq4qRExQAKlSLHmlSOpkj4oAakdSpHTkjqVI6AI1iqRYqkSOpFioAiWKniKplip6xUAQCKl8r6VYEVKI6AK/l0hjzVryvrSGKgCsYqaYqtGOkMVAFQxZpjRf5NW2izTGioAptFTGjq20VRvHQBTeOonjq48dRPHQBUZKjZcVakjqF0xQBAy4phTJqZlxTCnNAEqLUsaUka5qeNKABEqaOOiOOpo46ABI6lSOlSOpkjoAakdSLHT0jqVI6AI1i/yaeIs1KsdPWKgCERYp3lfWpxFSiKgCv5NHlY9as+V7UeV7UAVTFTTFVsxYppioAptHTGjq40VRtHQBTeOonjq68dRPHQBSeOonjq48dQyR0AU3jqGRKuSR1DJHQBTdajIwasyJURGDQBPGlTxpTY0qeNKAHRpU0aUkaVPGlACxx1MkdEaVMiUAIkdSpHTo46mSOgBixU9YqlSOpFioAhEVOEVTiLNOEVAFfyvpR5X0qz5dIY6AKpiprRVbMVMaKgCo0VRvHVxoqieOgCm8dRPHVx46hkjoApvHUMkdXJEqCRKAKcicVBIlXZEqvIlAFSRKgZcGrciVCyc0ATRLViNKjiWrES0ASRpU8aUyNasRpQA6NKnjjpsaVYjSgBY46mSOiNKmRKAESOpVipyR1KkdAEaxU4RVMsdPEdAEHlfWkMVWNlGygCqYqY0VXDHmo2joApvHUTx1deOoXjoApvHUMkdXJE4qCRKAKciVBIlXJEqCRKAKciVXkSrkiVXlWgCnItQsvNWpVqBl5oAmiWrMS1DEKsxDNAEsS/41YjWoohmrEQoAliWrEaVFEtWYloAfGlTxpTYlqeNKAHRx1KqYoRcU6gAooooAKKKKACkIzS0UARvHUEkdW+tRSJQBTkSq8iVdkSq8q0AU5FqvKtXJVqtKtAFSVaryr/AI1blGKryigCpKtQMMGrMoqArk0ASxCrMQqvF/SrMdAE8QxVmIf4VBF/WrEQoAniFWYhmoIhVmIUATRLmrES1DEKsxigB1FFFABRRRQAUUUUAFFFFABSOMilooArSrVeVcVblFVpRmgCrKMVWlFWpRVeYUAVJRVeUVal4/Oq0vWgCrKKgf71WJORVd+tAEsdWYv61VjPFWYjzQBZh61Zi7VWiOPzqzF2oAsxf0qzHVaL+lWIzQBai/rU6dKrxGrCdKAHUUUUAFFFFABRRRQAUUUUAFFFFAEUvH51Wl61ZlP86rSGgCtL0qtNVmU/yqtNQBXl71Wl/rVmY1Wl/rQBWl61DU0hqBmwaAHRGrEZqrEasxGgC1EasxGqkRqzEaALURqzEaqRNViJqALcRqzGc1TiarEbUAT0UgORS0AFFFFABRRRQAUUUUAFITgUtMkagCOU1WlNTSNVeVqAIZTVaU1NK1V5TQBBKarymppTVeU0AQSniq79amlNQMcmgBYjmrETVUiarETUAW4mqzE1U42qxG1AFyJqsRNVON6njegC5G9WI3qlG9TxvQBdjepM5qpHJUySUAS0UgfNLQAUUUUAFFITimtJxQArNioZHoeSoXegBJHqCR6dI9QSPQAyVqrytUkj1XkagCOVqrStUsrVXlagCKVqgZsGpJWqAtzQAkTVYiaqkbVPG1AFyN6sRvVKN6sRvQBcjep43qnG9TRyUAXY3qZJKpxyVKklAF1JKlSSqSSVKstAFtZaeJaqLLinCWgC15v1o8361W83/OaDLQBOZaY0lQmWmtLQA95Kid6a8lRPJQAsklQyPQ8lQSSUAEj1XkenSSVBI9ADZGqvI1PkeoJHoAjkaoWbmnSNULNzQA2N6njeqcb1PG9AFyN6njeqcb1NHJQBdjepkkqnG9SpJQBdSSpUkqmklSpJQBcSSpFlqmstPWWgC4JcUolqqJacJaALPm0eb9KrebR51AFgy0xpahMtNMtAErS1E8lMaWo2koAe8lQySU15KieSgBZHzUMj0PJUMklACSPUEj0sj1DI9ADZHqFn5pZHqFnwaAGo1TRyVVVsVIj4oAuRvU0clU0kqaOSgC4klTJJVJJKlSSgC6klSJJVNJKkWWgC4stPWWqiy/5NPEtAFoS07zaqiWlEtAFrzfejzareb9aPN+tAE5lpplqEy00y0ATNLUbSZqJpaY0tAEjSVE8lMaSo3koAc8lQySUjyVE8lAA71DI9DyYqGR6ACR6iL4NDtTC2KAGq2KerYqBWxT1bFAFhXqVJKrK2Ker0AXEkqRJKppJUqSUAW1kqRZaqLJT1loAuLLThLVRZaeJaALQlpRJmqwlpfN+lAFnzf85oMtVvN/zmjzaALBlpplqAy0hloAmaWmNJURlpjSf5NAEjSVG0lMaWo2koAe8lRPJTXkqJnzQA55KiZ6RnpjNigAZsUzOaGbFMJyaAGK9PVsVAr1IrYoAnVsU9WzUCtTlbNAE4epFfFVw+KcrUAWVlp6y1VD09XoAtCWniWqgkpwloAtCWl82qwlpfNoAsedR51V/N96PNoAsGWkMtV/N+tIZaAJjLTWlqEy00yUAStLUbSZqNnpC+aAHM9MZs00vims1ACs9MZsUjPTGbFACs2KYWJpGamFsmgBqvT1bFV1enq2KAJ1anh81ArU8PmgCcPinBs1AGxTg+aAJw+KUNmoQ9OD0ATBqXzKhDUu40ATb6XzPeod9HmUATeZ70eZ71Fvo30ASGSjfUXmUbzQBIXppamFqaWxQBIXppamF6aWoAeXpjNTS9NZqAHF80xnxTS2aaXxQArNTS5prNTS5oAjV6erYqKlDYoAnVs04PUNORs0ATq1KHqHOKerZNAEoanB6hpQxFAE2+lDVGpyKKAJdxpd5qHNLuoAl30b6i3UbqAJN5oLVHmkoAkLU0vTaazYNADyxNNL00nNITgUAOL5phbFNLZpCcCgBWbNML0hOaa5xQArNimbzSUUAf/9k="),Object(i.jsx)(F.a,{in:!0,timeout:"auto",children:Object(i.jsxs)(V.a,{className:t.card,children:[Object(i.jsxs)(q.a,{onClick:function(){c(S(n)),c({type:"TOGGLE_DRAWER"})},children:[Object(i.jsx)(R.a,{component:"img",className:t.media,image:n.Poster,title:n.Title}),Object(i.jsx)(N.a,{children:Object(i.jsxs)(y.a,{noWrap:!0,variant:"subtitle1",children:[n.Title," (",n.Year,")"]})})]}),Object(i.jsx)(E.a,{children:a?Object(i.jsx)(K.a,{color:"primary",onClick:function(){return c(U(n))},disabled:o,children:"Nominate"}):null})]})})}var w=n(168),I=n(86),C=n(169),k=n(170),Q=n(77),W=n.n(Q),M=n(78),v=n.n(M),J=Object(T.a)((function(e){return{root:{flexGrow:1},paper:{height:400,width:275}}}));function G(e){var t=e.api.uri,n=e.api.img_uri,c=e.search,r=Object(a.useState)([]),o=Object(u.a)(r,2),s=o[0],l=o[1],A=Object(a.useState)(null),j=Object(u.a)(A,2),d=j[0],p=j[1],b=Object(a.useState)(1),O=Object(u.a)(b,2),h=O[0],m=O[1],U=Object(a.useState)(!0),f=Object(u.a)(U,2),S=f[0],V=f[1],q=Object(a.useState)(!0),E=Object(u.a)(q,2),N=E[0],R=E[1],K=Object(a.useState)(!0),F=Object(u.a)(K,2),T=F[0],B=F[1],Q=J();return Object(a.useEffect)((function(){function e(){return(e=Object(g.a)(x.a.mark((function e(){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d!==c&&m(1),"s=",n=t+"s="+c+"&"+("page="+h),""!==c?(B(!1),fetch(n).then((function(e){return e.json()})).then((function(e){l(e),p(c),V(!(h>1)),e.totalResults-10*h>0?R(!1):R(!0),B(!0)}))):l([]);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,c,h]),null!==s&&void 0!==s.Search?Object(i.jsxs)(w.a,{container:!0,direction:"row",alignItems:"center",justify:"center",spacing:2,children:[Object(i.jsx)(w.a,{item:!0,children:Object(i.jsx)(w.a,{container:!0,direction:"row",justify:"flex-start",spacing:2,children:s.Search.map((function(e,t){return Object(i.jsx)(w.a,{item:!0,xs:2,children:Object(i.jsx)(D,{api_img_uri:n,data:e,showNominateBtn:!0})},e.imdbID)}))})}),Object(i.jsx)(w.a,{item:!0,children:Object(i.jsx)(I.a,{children:Object(i.jsxs)(w.a,{container:!0,direction:"row",alignItems:"center",justify:"center",children:[Object(i.jsx)(w.a,{item:!0,children:Object(i.jsx)(C.a,{disabled:S,onClick:function(){return m(h-1)},children:Object(i.jsx)(W.a,{})})}),Object(i.jsx)(w.a,{item:!0,children:Object(i.jsxs)(y.a,{children:["Page ",h]})}),Object(i.jsx)(w.a,{item:!0,children:Object(i.jsx)(C.a,{disabled:N,onClick:function(){return m(h+1)},children:Object(i.jsx)(v.a,{})})})]})})})]}):null!==s&&"False"===s.Response?Object(i.jsxs)(y.a,{variant:"h6",children:["No movie results found for ",c,"."]}):!1===T&&""!==c?Object(i.jsx)(w.a,{className:Q.root,container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2,children:[0,1,2,3,4,5].map((function(e){return Object(i.jsx)(w.a,{item:!0,children:Object(i.jsx)(I.a,{elevation:3,className:Q.paper,children:Object(i.jsxs)(w.a,{container:!0,justify:"center",alignItems:"center",direction:"column",children:[Object(i.jsx)(w.a,{item:!0,children:Object(i.jsx)(k.a,{variant:"rect",animation:"wave",width:275,height:300})}),Object(i.jsx)(w.a,{item:!0,style:{width:"80%"},children:Object(i.jsx)(k.a,{variant:"text",animation:"wave"})}),Object(i.jsx)(w.a,{item:!0,style:{width:"50%"},children:Object(i.jsx)(k.a,{variant:"text",animation:"wave"})})]})})},e)}))}):null}var L=n(184),H=Object(T.a)((function(e){return{paper:{padding:"16px"}}}));function Y(){var e=H(),t=Object(A.b)(),n=Object(A.c)((function(e){return e.nominations})),c=5-n.length,r=Object(a.useState)(!1),o=Object(u.a)(r,2),s=o[0],l=o[1];return c>0&&s&&(console.log("yep"),l(!1)),s?Object(i.jsx)(I.a,{className:e.paper,children:Object(i.jsxs)(w.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:2,children:[Object(i.jsx)(w.a,{item:!0,children:Object(i.jsx)("h3",{children:"The Shoppies Nominees"})}),Object(i.jsx)(w.a,{item:!0,children:Object(i.jsx)(w.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2,children:n.map((function(e){return Object(i.jsx)(w.a,{item:!0,xs:!0,children:Object(i.jsx)(D,{data:e,showNominateBtn:!1})},e.imdbID)}))})}),0===c?Object(i.jsx)(w.a,{item:!0,children:Object(i.jsx)(K.a,{variant:"contained",color:"primary",onClick:function(){return l(!1)},children:"Hide my nominees"})}):null]})}):Object(i.jsx)(I.a,{className:e.paper,children:Object(i.jsxs)(w.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:2,children:[Object(i.jsx)(w.a,{item:!0,children:5===c?Object(i.jsx)("h3",{children:"The Shoppies have begun! Search and nominate 5 of your favourite movies."}):0===c?Object(i.jsx)("h3",{children:"Your 5 nominees"}):Object(i.jsxs)("h3",{children:["My nominees (",c," nominations left)"]})}),Object(i.jsx)(w.a,{item:!0,children:Object(i.jsx)(w.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2,children:n.map((function(e){var n=e.Title+" ("+e.Year+")";return Object(i.jsx)(w.a,{item:!0,xs:!0,children:Object(i.jsx)(L.a,{onClick:function(){t(S(e)),t({type:"TOGGLE_DRAWER"})},onDelete:function(){return t(f(e))},label:n})},e.imdbID)}))})}),0===c?Object(i.jsx)(w.a,{item:!0,children:Object(i.jsx)(K.a,{variant:"contained",color:"primary",onClick:function(){return l(!0)},children:"Show my nominees"})}):null]})})}var P=n(183),Z=n(171),X=n(172),z=n(175),_=n(174),$=n(173),ee=Object(T.a)((function(e){return{paper:{width:"30px"},drawer:{maxWidth:"500px"},plot:{maxWidth:"450px"}}}));function te(e){var t=ee(),n=Object(A.b)(),c=e.api_uri,r=Object(A.c)((function(e){return e.drawer.isOpen})),o=Object(A.c)((function(e){return e.drawer.movieData})),s=Object(A.c)((function(e){return e.nominations})),l=5===s.length,j=s.some((function(e){return e.imdbID===o.imdbID})),d=Object(a.useState)({}),p=Object(u.a)(d,2),b=p[0],O=p[1];return Object(a.useEffect)((function(){function e(){return(e=Object(g.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==b&&("i=",t=c+"i="+o.imdbID,fetch(t).then((function(e){return e.json()})).then((function(e){O(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[o]),Object(i.jsx)(P.a,{className:t.drawer,anchor:"right",open:r,onClose:function(){return n({type:"TOGGLE_DRAWER"})},children:Object(i.jsxs)(Z.a,{children:[Object(i.jsx)(X.a,{children:Object(i.jsxs)(y.a,{variant:"h4",children:[o.Title," (",o.Year,")"]})}),Object(i.jsx)(X.a,{children:Object(i.jsx)(w.a,{container:!0,justify:"center",children:Object(i.jsx)("img",{src:o.Poster})})}),Object(i.jsx)(X.a,{className:t.plot,children:"N/A"!==b.Plot?Object(i.jsx)(y.a,{variant:"body2",align:"center",paragraph:!0,children:b.Plot}):null}),Object(i.jsx)($.a,{}),Object(i.jsx)(_.a,{children:"Actions"}),j?Object(i.jsx)(X.a,{button:!0,onClick:function(){return n(f(o))},children:Object(i.jsx)(z.a,{children:"Withdraw Nomination"})}):Object(i.jsx)(X.a,{button:!0,onClick:function(){return n(U(o))},disabled:l,children:Object(i.jsx)(z.a,{children:"Nominate"})}),Object(i.jsx)(X.a,{button:!0,onClick:function(){return window.open("https://www.imdb.com/title/"+o.imdbID)},children:Object(i.jsx)(z.a,{children:"View on IMDB"})}),Object(i.jsx)($.a,{}),Object(i.jsx)(_.a,{children:"Movie Details"}),Object(i.jsx)(X.a,{children:"N/A"!==b.Genre?Object(i.jsxs)(z.a,{children:["Genre: ",b.Genre]}):null}),Object(i.jsx)(X.a,{children:"N/A"!==b.Director?Object(i.jsxs)(z.a,{children:["Director: ",b.Director]}):null}),Object(i.jsx)(X.a,{children:"N/A"!==b.Runtime?Object(i.jsxs)(z.a,{children:["Runtime: ",b.Runtime]}):null}),Object(i.jsx)(X.a,{children:"N/A"!==b.imdbRating?Object(i.jsxs)(z.a,{children:["IMDb Rating: ",b.imdbRating," (",b.imdbVotes," Votes)"]}):null})]})})}function ne(e){var t=e.api.uri,n=e.api.img_uri,a=e.search,c=Object(h.a)(a,500),r=Object(u.a)(c,1)[0];return Object(i.jsxs)(w.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:2,children:[Object(i.jsx)(w.a,{item:!0,children:Object(i.jsx)(Y,{})}),Object(i.jsx)(w.a,{item:!0,children:Object(i.jsx)(G,{api:{uri:t,img_uri:n},search:r})}),Object(i.jsx)(te,{api_uri:t})]})}var ie=n(82),ae=n(176),ce=n(177),re=n(178),oe=n(179),se=n(181),le=n(180),Ae=n(80),je=n.n(Ae),de=n(79),pe=n.n(de),be=n(81),Oe=n.n(be),ue=n.p+"static/media/Thasadith-Bold.f9eb2a20.ttf",he="f1e54df5",me="http://www.omdbapi.com/?apikey=".concat(he,"&type=movie&"),xe="http://img.omdbapi.com/?apikey=".concat(he,"&"),ge={fontFamily:"Thasadith",fontStyle:"normal",fontDisplay:"swap",fontWeight:400,src:"\n        local('Thasadith-Bold'),\n        url(".concat(ue,") format('truetype')\n        "),unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF"},Ue=Object(ie.a)({typography:{fontFamily:"Thasadith, Arial"},palette:{primary:{light:"#f17d83",main:"#ee5d65",dark:"#a64146",contrastText:"#fff"},secondary:{light:"#f38cb3",main:"#f170a0",dark:"#a84e70",contrastText:"#fff"},background:{default:"#fddcd5"}},overrides:{MuiCssBaseline:{"@global":{"@font-face":[ge],"background-color":"#fddcd5"}}}});var fe=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(i.jsxs)(ae.a,{theme:Ue,children:[Object(i.jsx)(ce.a,{}),Object(i.jsx)(re.a,{position:"sticky",style:{padding:0},children:Object(i.jsxs)(oe.a,{style:{padding:0},children:[Object(i.jsx)(pe.a,{style:{margin:"0 8px"}}),Object(i.jsx)("h3",{style:{marginRight:"0 32px"},children:"The Shoppies"}),Object(i.jsx)(se.a,{fullWidth:!0,label:"Search Movies",placeholder:"Enter a movie title...",variant:"filled",color:"secondary",onChange:function(e){return c(e.target.value)},InputProps:{startAdornment:Object(i.jsx)(le.a,{position:"start",children:Object(i.jsx)(je.a,{style:{color:"#fff"}})})}}),Object(i.jsx)(C.a,{color:"inherit",style:{padding:"16px"},onClick:function(){return window.open("https://github.com/yewinston")},children:Object(i.jsx)(Oe.a,{})})]})}),Object(i.jsx)("div",{className:"App",style:{padding:16},children:Object(i.jsx)(ne,{search:n,api:{uri:me,img_uri:xe}})})]})},Se=(n(111),localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):{}),Ve=Object(l.c)(O,Se,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Ve.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(Ve.getState()))})),o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(A.a,{store:Ve,children:Object(i.jsx)(fe,{})})}),document.getElementById("root")),s()}},[[112,1,2]]]);
//# sourceMappingURL=main.ec311e57.chunk.js.map