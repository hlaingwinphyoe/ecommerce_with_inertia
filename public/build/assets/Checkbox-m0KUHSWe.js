import{l as n,m as u,v as i,o as l,b as k}from"./app-X52fPrqC.js";const p=["value"],m={__name:"Checkbox",props:{checked:{type:[Array,Boolean],required:!0},value:{default:null}},emits:["update:checked"],setup(e,{emit:a}){const c=a,d=e,o=n({get(){return d.checked},set(r){c("update:checked",r)}});return(r,t)=>u((l(),k("input",{type:"checkbox",value:e.value,"onUpdate:modelValue":t[0]||(t[0]=s=>o.value=s),class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"},null,8,p)),[[i,o.value]])}};export{m as _};
