import{x as l,o as a,c as b,w as _,Q as c,e,b as d,m as f,t as g,g as h,n as k,p as v,v as w,F as C,O as y}from"./app-HhbaykTI.js";import j from"./UserLayout-TutKxEjw.js";import"./index-AnUOglGx.js";import"./Header-6Vqe4IFZ.js";import"./ApplicationLogo-7pwUxoMd.js";const q={class:"mx-auto max-w-8xl px-4 py-5 lg:max-w-7xl flex gap-8"},$={class:"w-2/3 relative overflow-x-auto sm:rounded-lg"},B={class:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"},M=e("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"px-16 py-3"},[e("span",{class:"sr-only"},"Image")]),e("th",{scope:"col",class:"px-6 py-3"},"Product"),e("th",{scope:"col",class:"px-6 py-3"},"Qty"),e("th",{scope:"col",class:"px-6 py-3"},"Price"),e("th",{scope:"col",class:"px-6 py-3"},"Action")])],-1),I={class:"p-4"},A=["src"],O={key:1,src:"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png",alt:"",class:"h-16 w-16 object-cover"},P={class:"px-6 py-4 font-semibold text-gray-900 dark:text-white"},S={class:"px-6 py-4"},V={class:"flex items-center"},z=["onClick","disabled"],D=e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 18 2"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 1h16"})],-1),E=[D],F=["onUpdate:modelValue"],L=["onClick"],Q=e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 18 18"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 1v16M1 9h16"})],-1),R=[Q],T={class:"px-6 py-4 font-semibold text-gray-900 dark:text-white"},U={class:"px-6 py-4"},H=["onClick"],N={class:"w-1/3"},G=e("h2",{class:"text-gray-900 text-lg mb-1 font-medium title-font"}," Summary ",-1),J={class:"leading-relaxed mb-5 text-gray-600"},K=e("h2",{class:"text-gray-900 text-lg mb-1 font-medium title-font"}," Address 1 ",-1),W=e("p",{class:"leading-relaxed mb-5 text-gray-600"}," Post-ironic portland shabby chic echo park, banjo fashion axe ",-1),X=e("p",{class:"leading-relaxed mb-5 text-gray-600"}," Or add another address ",-1),Y=e("div",{class:"relative mb-4"},[e("label",{for:"name",class:"leading-7 text-sm text-gray-600"},"Address"),e("input",{type:"text",id:"name",name:"name",class:"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})],-1),Z=e("div",{class:"relative mb-4"},[e("label",{for:"email",class:"leading-7 text-sm text-gray-600"},"Email"),e("input",{type:"email",id:"email",name:"email",class:"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})],-1),ee=e("div",{class:"relative mb-4"},[e("label",{for:"message",class:"leading-7 text-sm text-gray-600"},"Message"),e("textarea",{id:"message",name:"message",class:"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"})],-1),te=e("button",{class:"text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full"}," Checkout ",-1),se=e("p",{class:"text-xs text-gray-500 mt-3"},"Happy Shopping",-1),le={__name:"CartList",setup(oe){const p=l(()=>c().props.cart.data.products),s=l(()=>c().props.cart.data.items),x=l(()=>c().props.cart.data.total),o=r=>s.value.findIndex(i=>i.product_id===r),u=(r,i)=>{y.patch(route("cart.update",r),{quantity:i})},m=r=>{y.delete(route("cart.delete",r))};return(r,i)=>(a(),b(j,null,{default:_(()=>[e("div",q,[e("div",$,[e("table",B,[M,e("tbody",null,[(a(!0),d(C,null,f(p.value,t=>(a(),d("tr",{key:t.id,class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},[e("td",I,[t.product_images.length?(a(),d("img",{key:0,src:`/${t.product_images[0].image}`,alt:"",class:"h-16 w-16 object-cover"},null,8,A)):(a(),d("img",O))]),e("td",P,g(t.title),1),e("td",S,[e("div",V,[e("button",{onClick:h(n=>u(t,s.value[o(t.id)].quantity-1),["prevent"]),disabled:s.value[o(t.id)].quantity<=1,class:k([s.value[o(t.id)].quantity>1?"cursor-pointer text-gray-600":"text-gray-400 cursor-not-allowed","inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"]),type:"button"},E,10,z),e("div",null,[v(e("input",{type:"number",id:"first_product",class:"bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500","onUpdate:modelValue":n=>s.value[o(t.id)].quantity=n,required:""},null,8,F),[[w,s.value[o(t.id)].quantity]])]),e("button",{onClick:h(n=>u(t,s.value[o(t.id)].quantity+1),["prevent"]),class:"inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",type:"button"},R,8,L)])]),e("td",T," $ "+g(t.price),1),e("td",U,[e("a",{onClick:n=>m(t),href:"#",class:"font-medium text-red-600 dark:text-red-500 hover:underline"},"Remove",8,H)])]))),128))])])]),e("div",N,[G,e("p",J," Total - $ "+g(x.value),1),K,W,X,Y,Z,ee,te,se])])]),_:1}))}};export{le as default};