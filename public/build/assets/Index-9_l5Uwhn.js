import{h as n,o as s,c as m,w as d,e as t,b as c,m as h,f as p,t as l,F as g,O as u,E as _}from"./app-9bdSW4XQ.js";import{i as f}from"./index-_OmQQOYu.js";import x from"./UserLayout-qvGuYtsf.js";import"./Header-bCCaE-4o.js";import"./ApplicationLogo-Ovk17bOT.js";const w={class:"bg-white"},v={class:"mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"},y=t("h2",{class:"text-2xl font-bold tracking-tight text-gray-900"}," Latest Products List ",-1),z={class:"mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"},k={class:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"},b=["src"],C={key:1,src:"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png",alt:"",class:"h-full w-full object-cover object-center lg:h-full lg:w-full"},M=["onClick"],j=t("span",{class:"bg-violet-700 rounded-full p-2 cursor-pointer"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[t("g",{fill:"none"},[t("path",{stroke:"currentColor","stroke-width":"1.5",d:"M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"}),t("path",{fill:"currentColor",d:"m2.261 3.092l.249-.708zm-.012-.8a.75.75 0 1 0-.498 1.416zm2.337 2.031l.62-.423zm1.302 10.263l-.545.516zm14.77-4.703l.734.151l.001-.004zm-.5 2.425l.735.15zm.576-5.61l-.594.456zm-1.6 8.352l-.474-.581zM5.708 9.76V7.038h-1.5V9.76zM2.51 2.384l-.261-.092l-.498 1.416l.261.091zm8.428 13.866h5.302v-1.5h-5.302zm-5.23-9.212c0-.707.001-1.297-.05-1.776c-.055-.497-.171-.95-.453-1.362l-1.238.846c.09.132.16.314.199.677c.041.38.042.875.042 1.615zM2.012 3.8c.668.235 1.107.39 1.43.55c.303.148.437.268.525.397L5.205 3.9c-.284-.416-.662-.682-1.103-.899c-.42-.206-.958-.394-1.592-.617zm2.196 5.96c0 1.453.014 2.5.15 3.3c.147.854.44 1.466.985 2.042l1.089-1.032c-.32-.338-.493-.668-.595-1.263c-.11-.65-.129-1.558-.129-3.047zm6.73 4.99c-1.417 0-2.4-.002-3.141-.107c-.715-.101-1.092-.285-1.365-.573l-1.089 1.032c.594.627 1.347.9 2.243 1.026c.87.124 1.98.122 3.351.122zm-5.98-7.88h12.13v-1.5H4.959zm14.965 2.861l-.5 2.425l1.47.303l.5-2.425zM17.09 6.87c.856 0 1.61.001 2.205.067c.295.034.517.08.672.134c.161.057.187.1.174.083l1.189-.914c-.235-.306-.565-.479-.866-.584a4.616 4.616 0 0 0-1.003-.21c-.695-.077-1.543-.076-2.371-.076zm4.304 3.16c.17-.848.313-1.56.348-2.13c.037-.586-.03-1.164-.412-1.66l-1.189.914c.062.081.13.226.104.654c-.027.444-.144 1.037-.322 1.928zm-5.153 6.22c.762 0 1.401.001 1.917-.062c.535-.065 1.024-.209 1.45-.556l-.947-1.163c-.125.102-.303.184-.686.23c-.403.05-.934.051-1.734.051zm3.184-4.094c-.162.783-.27 1.303-.4 1.688c-.123.366-.239.523-.364.625l.947 1.163c.427-.348.666-.797.838-1.309c.166-.492.294-1.118.448-1.864z"}),t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-width":"1.5",d:"M13 13v-2m0 0V9m0 2h2m-2 0h-2"})])])],-1),B=[j],V={class:"mt-4 flex justify-between"},L={class:"text-sm text-gray-700"},$={href:"#"},E=t("span",{"aria-hidden":"true"},null,-1),F={class:"mt-1 text-sm text-gray-500"},N={class:"text-sm font-medium text-gray-900"},A={__name:"Index",props:{products:{type:Array,required:!0}},setup(i){const r=o=>{u.post(route("cart.store",o),{onSuccess:a=>{_({title:"Success",message:a.props.flash.success,type:"success"})}})};return n(()=>{f()}),(o,a)=>(s(),m(x,null,{default:d(()=>[t("div",w,[t("div",v,[y,t("div",z,[(s(!0),c(g,null,h(i.products,e=>(s(),c("div",{key:e.id,class:"group relative"},[t("div",k,[e.product_images.length?(s(),c("img",{key:0,src:`/${e.product_images[0].image}`,alt:"",class:"h-full w-full object-cover object-center lg:h-full lg:w-full"},null,8,b)):(s(),c("img",C)),t("a",{href:"#",onClick:S=>r(e),class:"absolute inset-1 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer text-white"},B,8,M)]),t("div",V,[t("div",null,[t("h3",L,[t("a",$,[E,p(" "+l(e.title),1)])]),t("p",F,l(e.category.name),1)]),t("p",N," $"+l(e.price),1)])]))),128))])])])]),_:1}))}};export{A as default};
