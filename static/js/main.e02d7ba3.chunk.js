(this.webpackJsonpimage_gallery=this.webpackJsonpimage_gallery||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(4),a=n.n(s),i=(n(9),n(2)),o=n(0),l=function(e){var t=e.image,n=t.tags.split(",");return Object(o.jsxs)("div",{className:"max-w-sm bg-gray-100 rounded overflow-hidden shadow-lg mb-2 m-2",children:[Object(o.jsx)("img",{src:t.webformatURL,alt:"images",className:"w-full"}),Object(o.jsxs)("div",{className:"px-5 py-2",children:[Object(o.jsxs)("div",{className:"font-bold text-red-500 text-xl mb-2",children:["Photo by ",t.user]}),Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"Views: "}),t.views]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"Downloads: "}),t.downloads]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"Likes: "}),t.likes]})]})]}),Object(o.jsx)("div",{className:"px-6 py-4",children:n.map((function(e){return Object(o.jsxs)("span",{className:"inline-block bg-gray-200 rounded-full\r px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",children:["#",e]},t.id)}))})]})},d=function(e){var t=e.searchText,n=Object(r.useState)(""),c=Object(i.a)(n,2),s=c[0],a=c[1];return Object(o.jsx)("div",{className:"max-w-sm rounded overflow-hidden my-10 mx-auto",children:Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(s)},className:"m-5 max-w-sm",children:Object(o.jsxs)("div",{className:"flex items-center border-b border-b-2\r border-teal-500 py-2",children:[Object(o.jsx)("input",{onChange:function(e){return a(e.target.value)},className:"appearance-none bg-transparent border-none w-full\\\r text-gray-500 mr-1 py-1 px-5 leading-tight focus:outline-none",type:"text",placeholder:"Search Image"}),Object(o.jsx)("button",{className:"bg-transparent hover:bg-blue-500 text-blue-700 \r font-semibold hover:text-white py-1 px-2 border border-blue-500 \r hover:border-transparent rounded",type:"submit",children:"Search"})]})})})};var b=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(!0),a=Object(i.a)(s,2),b=a[0],j=a[1],m=Object(r.useState)(""),x=Object(i.a)(m,2),u=x[0],h=x[1];return Object(r.useEffect)((function(){fetch("https://pixabay.com/api/?key=".concat("20617892-ce7d936368a205931ed126535","&q=").concat(u,"&image_type=photo&pretty=true")).then((function(e){return e.json()})).then((function(e){c(e.hits),j(!1)})).catch((function(e){return console.log(e)}))}),[u]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container mx-auto",children:[Object(o.jsx)(d,{searchText:function(e){return h(e)}}),!b&&0===n.length&&Object(o.jsx)("h1",{className:" text-6xl text-center mx-auto mt-32",children:"No images found"}),b?Object(o.jsx)("h1",{className:" text-6xl text-center mx-auto mt-32",children:"Loading..."}):Object(o.jsx)("div",{className:"grid grid-cols-3 grid-gap-4",children:n.map((function(e){return Object(o.jsx)(l,{image:e},e.id)}))})]})})};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.e02d7ba3.chunk.js.map