import{T as d,o as l,c as u,w as i,a as t,u as s,Z as c,b as f,t as p,d as _,e as a,f as w,n as g,g as y}from"./app-X52fPrqC.js";import{_ as x}from"./GuestLayout-BTexC82j.js";import{_ as b,a as k,b as V}from"./TextInput-igyJonbg.js";import{P as h}from"./PrimaryButton-DJmJMIyr.js";import"./ApplicationLogo-uak-eLbA.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const v=a("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),B={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},N={class:"flex items-center justify-end mt-4"},j={__name:"ForgotPassword",props:{status:{type:String}},setup(o){const e=d({email:""}),m=()=>{e.post(route("password.email"))};return(P,r)=>(l(),u(x,null,{default:i(()=>[t(s(c),{title:"Forgot Password"}),v,o.status?(l(),f("div",B,p(o.status),1)):_("",!0),a("form",{onSubmit:y(m,["prevent"])},[a("div",null,[t(b,{for:"email",value:"Email"}),t(k,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":r[0]||(r[0]=n=>s(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(V,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),a("div",N,[t(h,{class:g({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:i(()=>[w(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{j as default};
