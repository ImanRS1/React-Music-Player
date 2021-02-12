(this["webpackJsonpreact-music-player"]=this["webpackJsonpreact-music-player"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(12),i=n.n(r),o=n(4),s=n.n(o),l=n(6),u=n(3),p=n(8),d=n(7),b=n(5),h=n(0),j=function(e){var t=e.currentSong,n=e.setIsPlaying,c=e.isPlaying,a=e.audioRef,r=e.setSongInfo,i=e.songInfo,o=e.songs,p=e.setCurrentSong,j=e.setSongs,f=function(e){var t=o.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{active:!0}):Object(u.a)(Object(u.a)({},t),{},{active:!1})}));j(t)},m=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},g=function(){var e=Object(l.a)(s.a.mark((function e(n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=o.findIndex((function(e){return e.id===t.id})),"skip-forward"!==n){e.next=5;break}return e.next=4,p(o[(r+1)%o.length]);case 4:f(o[(r+1)%o.length]);case 5:if("skip-back"!==n){e.next=15;break}if((r-1)%o.length!==-1){e.next=12;break}return e.next=9,p(o[o.length-1]);case 9:return f(o[o.length-1]),c&&a.current.play(),e.abrupt("return");case 12:return e.next=14,p(o[(r-1)%o.length]);case 14:f(o[(r-1)%o.length]);case 15:c&&a.current.play();case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={transform:"translateX(".concat(i.animationPercentage,"%)")};return Object(h.jsxs)("div",{className:"player",children:[Object(h.jsxs)("div",{className:"time-control",children:[Object(h.jsx)("p",{children:m(i.currentTime)}),Object(h.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(t.color[0],", ").concat(t.color[1],")")},className:"track",children:[Object(h.jsx)("input",{onChange:function(e){a.current.currentTime=e.target.value,r(Object(u.a)(Object(u.a)({},i),{},{currentTime:e.target.value}))},value:i.currentTime,min:0,max:i.duration||0,type:"range"}),Object(h.jsx)("div",{style:v,className:"animate-track"})]}),Object(h.jsx)("p",{children:i.duration?m(i.duration):"0:00"})]}),Object(h.jsxs)("div",{className:"play-control",children:[Object(h.jsx)(d.a,{onClick:function(){return g("skip-back")},className:"skip-back",size:"2x",icon:b.a}),Object(h.jsx)(d.a,{onClick:function(){c?(a.current.pause(),n(!c)):(a.current.play(),n(!c))},className:"play",size:"2x",icon:c?b.d:b.e}),Object(h.jsx)(d.a,{onClick:function(){return g("skip-forward")},className:"skip-forward",size:"2x",icon:b.b})]})]})},f=function(e){var t=e.currentSong,n=e.isPlaying;return Object(h.jsxs)("div",{className:"song-container ".concat(n?"cover-animation":""),children:[Object(h.jsx)("img",{alt:t.name,src:t.cover}),Object(h.jsx)("h2",{children:t.name}),Object(h.jsx)("h3",{children:t.artist})]})},m=(n(24),n(27)),g=function(){return[{name:"Keep Going, Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#F5AE97","#631F5C"],id:Object(m.a)(),active:!0},{name:"WildLife, Cabin in the Woods",cover:"https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",artist:"Philanthrope, Chromonicci",audio:"https://mp3.chillhop.com/serve.php/?mp3=10263",color:["#CA4C3E","#40462A"],id:Object(m.a)(),active:!1},{name:"Lunar Cycles, Everything Fades to Blue",cover:"https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",artist:"Sleepy Fish",audio:"https://mp3.chillhop.com/serve.php/?mp3=10031",color:["#D0DFDF","#2A5779"],id:Object(m.a)(),active:!1},{name:"Small Town Palm Trees, Today Feels Like Everyday",cover:"https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",artist:"Mama Aiuto",audio:"https://mp3.chillhop.com/serve.php/?mp3=12124",color:["#B67583","#374D4A"],id:Object(m.a)(),active:!1},{name:"Wake up, Lost Tape",cover:"https://chillhop.com/wp-content/uploads/2020/07/2c3bd458bfb0713c89f991d1ce469523e95e3b53-1024x1024.jpg",artist:"Evil Needle",audio:"https://mp3.chillhop.com/serve.php/?mp3=8285",color:["#854C93","#FDC19E"],id:Object(m.a)(),active:!1},{name:"Toft, FELTY movement",cover:"https://chillhop.com/wp-content/uploads/2020/07/858b533ba20ff95bf5b401089b195d1a8cb43870-1024x1024.jpg",artist:"Felty, Ezzy",audio:"https://mp3.chillhop.com/serve.php/?mp3=9312",color:["#EED04F","#166DB0"],id:Object(m.a)(),active:!1},{name:"Sleeping In, HOME",cover:"https://chillhop.com/wp-content/uploads/2020/07/0ca0fcf1ca26b9b75a0b6f6a16fc624593223d84-1024x1024.jpg",artist:"Aso, Harris Cole",audio:"https://mp3.chillhop.com/serve.php/?mp3=7934",color:["#F7E6DF","#A76580"],id:Object(m.a)(),active:!1},{name:"Longing, Anecdotes",cover:"https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",artist:"Makso",audio:"https://mp3.chillhop.com/serve.php/?mp3=11777",color:["#FBBC65","#38508E"],id:Object(m.a)(),active:!1}]},v=function(e){var t=e.song,n=e.songs,c=e.setCurrentSong,a=e.id,r=e.audioRef,i=e.isPlaying,o=e.setSongs,p=function(){var e=Object(l.a)(s.a.mark((function e(){var t,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.filter((function(e){return e.id===a})),e.next=3,c(t[0]);case 3:l=n.map((function(e){return e.id===a?Object(u.a)(Object(u.a)({},e),{},{active:!0}):Object(u.a)(Object(u.a)({},e),{},{active:!1})})),o(l),i&&r.current.play();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{onClick:p,className:"library-song ".concat(t.active?"selected":""),children:[Object(h.jsx)("img",{alt:t.name,src:t.cover}),Object(h.jsxs)("div",{className:"song-description",children:[Object(h.jsx)("h3",{children:t.name}),Object(h.jsx)("h4",{children:t.artist})]})]})},O=function(e){var t=e.songs,n=e.setCurrentSong,c=(e.song,e.audioRef),a=e.isPlaying,r=e.setSongs,i=e.libraryStatus;return Object(h.jsxs)("div",{className:"library ".concat(i?"active-library":""),children:[Object(h.jsx)("h2",{children:"Library"}),Object(h.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(h.jsx)(v,{songs:t,setCurrentSong:n,song:e,id:e.id,audioRef:c,isPlaying:a,setSongs:r},e.id)}))})]})},x=function(e){var t=e.setLibraryStatus,n=e.libraryStatus;return Object(h.jsxs)("nav",{children:[Object(h.jsx)("h1",{children:"React Player"}),Object(h.jsxs)("button",{onClick:function(){return t(!n)},children:["Library ",Object(h.jsx)(d.a,{icon:b.c})]})]})};var y=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(g()),n=Object(p.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(a[0]),o=Object(p.a)(i,2),d=o[0],b=o[1],m=Object(c.useState)(!1),v=Object(p.a)(m,2),y=v[0],S=v[1],k=Object(c.useState)({currentTime:0,duration:0,animationPercentage:0}),C=Object(p.a)(k,2),w=C[0],F=C[1],P=Object(c.useState)(!1),T=Object(p.a)(P,2),E=T[0],N=T[1],L=function(e){var t=e.target.currentTime,n=e.target.duration,c=Math.round(t),a=Math.round(n),r=Math.round(c/a*100);F(Object(u.a)(Object(u.a)({},w),{},{currentTime:t,duration:n,animationPercentage:r}))},I=function(){var t=Object(l.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.findIndex((function(e){return e.id===d.id})),t.next=3,b(a[(n+1)%a.length]);case 3:y&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"App ".concat(E?"library-active":""),style:{background:"linear-gradient(135deg, ".concat(d.color[0],", ").concat(d.color[1],")"),height:"100vh"},children:[Object(h.jsx)(x,{setLibraryStatus:N,libraryStatus:E}),Object(h.jsx)(f,{currentSong:d,isPlaying:y}),Object(h.jsx)(j,{setSongInfo:F,songInfo:w,audioRef:e,isPlaying:y,setIsPlaying:S,currentSong:d,songs:a,setCurrentSong:b,setSongs:r}),Object(h.jsx)(O,{audioRef:e,song:f,songs:a,setCurrentSong:b,isPlaying:y,setSongs:r,libraryStatus:E}),Object(h.jsx)("audio",{onLoadedMetadata:L,onTimeUpdate:L,ref:e,src:d.audio,onEnded:I})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root")),S()}},[[25,1,2]]]);
//# sourceMappingURL=main.a2d7ccfb.chunk.js.map