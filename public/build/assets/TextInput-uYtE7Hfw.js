import{o,b as a,t as l,r as d,U as i,l as c,h as p,p as m,v as f}from"./app-HhbaykTI.js";const g={class:"block font-medium text-sm text-gray-700 dark:text-gray-300"},_={key:0},k={key:1},b={__name:"InputLabel",props:{value:{type:String}},setup(e){return(s,r)=>(o(),a("label",g,[e.value?(o(),a("span",_,l(e.value),1)):(o(),a("span",k,[d(s.$slots,"default")]))]))}},x={__name:"TextInput",props:{modelValue:{type:String,required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(e,{expose:s}){const r=i(e,"modelValue"),t=c(null);return p(()=>{t.value.hasAttribute("autofocus")&&t.value.focus()}),s({focus:()=>t.value.focus()}),(y,u)=>m((o(),a("input",{class:"border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm","onUpdate:modelValue":u[0]||(u[0]=n=>r.value=n),ref_key:"input",ref:t},null,512)),[[f,r.value]])}};export{b as _,x as a};
