(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{3454:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(7663)},5248:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkout",function(){return n(6146)}])},6146:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),o=n(7294),a=n(1664),l=n.n(a),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i={},c="https://checkout.flutterwave.com/v3.js",u=function(e){var t,n,r,a,l,u,d,m=e.text,p=e.className,f=e.children,h=e.callback,x=e.onClose,b=e.disabled,y=(t=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}(e,["text","className","children","callback","onClose","disabled"]),u=(r=(n=(0,o.useState)({loaded:!1,error:!1}))[0],a=n[1],(0,o.useEffect)(function(){if(i.hasOwnProperty(c))a({loaded:!0,error:!1});else{i.src=c;var e=document.createElement("script");e.src=c,e.async=!0;var t=function(){a({loaded:!0,error:!1})},n=function(){delete i.src,a({loaded:!0,error:!0})};return e.addEventListener("load",t),e.addEventListener("complete",t),e.addEventListener("error",n),document.body.appendChild(e),function(){e.removeEventListener("load",t),e.removeEventListener("error",n)}}},[]),l=[r.loaded,r.error])[0],d=l[1],(0,o.useEffect)(function(){if(d)throw Error("Unable to load flutterwave payment modal")},[d]),function(e){var n,r,o=this,a=e.callback,l=e.onClose;if(d)throw Error("Unable to load flutterwave payment modal");if(u){var i=s(s({},t),{amount:null!==(n=t.amount)&&void 0!==n?n:0,callback:function(e){var n,r,l;return n=void 0,r=void 0,l=function(){var n;return function(e,t){var n,r,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,r=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(o=(o=l.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){l=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){l.label=a[1];break}if(6===a[0]&&l.label<o[1]){l.label=o[1],o=a;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(a);break}o[2]&&l.ops.pop(),l.trys.pop();continue}a=t.call(e,l)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}(this,function(r){switch(r.label){case 0:if("successful"!==e.status)return[3,2];return a(e),[4,fetch("https://cors-anywhere.herokuapp.com/https://kgelfdz7mf.execute-api.us-east-1.amazonaws.com/staging/sendevent",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({publicKey:t.public_key,language:"Flutterwave-React-v3",version:"1.0.7",title:(null==t?void 0:t.payment_options.split(",").length)>1?"Initiate-Charge-Multiple":"Initiate-Charge-"+(null==t?void 0:t.payment_options),message:"15s"})})];case 1:return r.sent(),[3,4];case 2:return a(e),[4,fetch("https://cors-anywhere.herokuapp.com/https://kgelfdz7mf.execute-api.us-east-1.amazonaws.com/staging/sendevent",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({publicKey:null!==(n=t.public_key)&&void 0!==n?n:"",language:"Flutterwave-React-v3",version:"1.0.7",title:(null==t?void 0:t.payment_options.split(",").length)>1?"Initiate-Charge-Multiple-error":"Initiate-Charge-"+(null==t?void 0:t.payment_options)+"-error",message:"15s"})})];case 3:r.sent(),r.label=4;case 4:return[2]}})},new(r||(r=Promise))(function(e,t){function a(e){try{i(l.next(e))}catch(e){t(e)}}function s(e){try{i(l.throw(e))}catch(e){t(e)}}function i(t){var n;t.done?e(t.value):((n=t.value)instanceof r?n:new r(function(e){e(n)})).then(a,s)}i((l=l.apply(o,n||[])).next())})},onclose:l,payment_options:null!==(r=null==t?void 0:t.payment_options)&&void 0!==r?r:"card, ussd, mobilemoney"});return window.FlutterwaveCheckout&&window.FlutterwaveCheckout(i)}});return(0,o.createElement)("button",{disabled:b,className:p,onClick:function(){return y({callback:h,onClose:x})}},m||f)},d=n(3454);function m(){let[e,t]=(0,o.useState)({firstName:"",lastName:"",phone:"",email:""});(0,o.useEffect)(()=>console.log(e),[e]);let n=function(n){let{name:r,value:o}=n.target;t({...e,[r]:o})},a={public_key:d.env.REACT_APP_FLTW_TEST_PUBLIC_KEY,tx_ref:Date.now(),amount:2e4,currency:"NGN",payment_options:"card,mobilemoney,ussd",customer:{email:e.email,phone:e.phone,name:e.firstName+" "+e.lastName},customizations:{title:"My store",description:"Payment for items in cart",logo:"https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg"}},s={...a,text:"Proceed to payment",callback:async e=>{console.log(e),document.getElementsByName("checkout").forEach(function(e){e.setAttribute("style","position:fixed;top:0;left:0;z-index:-1;border:none;opacity:0;pointer-events:none;width:100%;height:100%;"),e.setAttribute("id","flwpugpaidid"),e.setAttribute("src","https://checkout.flutterwave.com/?"),document.body.style.overflow=""})},onClose:()=>{}};return(0,r.jsx)("section",{className:"checkout my-16 mx-8",children:(0,r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("form submitted")},className:"flex flex-col xl:flex-row items-start justify-between max-w-[1200px] mx-auto",children:[(0,r.jsxs)("div",{className:"formFill mx-auto xl:mx-0 mb-16 xl:mb-0",children:[(0,r.jsxs)("div",{className:"flex flex-col xl:flex-row items-center gap-5 xl:gap-10 mb-8 xl:mb-0",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"firstName",className:"mb-2 block",children:"First name"}),(0,r.jsx)("input",{type:"text",name:"firstName",value:e.firstName,onChange:n,required:!0,className:"outline-none w-[300px] p-3 border border-gray-300",placeholder:"First Name"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"lastName",className:"mb-2 block",children:"Last name"}),(0,r.jsx)("input",{type:"text",name:"lastName",value:e.lastName,onChange:n,required:!0,className:"outline-none w-[300px] p-3 border border-gray-300",placeholder:"Last Name"})]})]}),(0,r.jsxs)("div",{className:"flex flex-col xl:flex-row items-center gap-5 xl:gap-10",children:[(0,r.jsxs)("div",{className:"xl:my-8",children:[(0,r.jsx)("label",{htmlFor:"phone",className:"mb-2 block",children:"Phone"}),(0,r.jsx)("input",{type:"text",name:"phone",value:e.phone,onChange:n,required:!0,className:"outline-none w-[300px] p-3 border border-gray-300",placeholder:"Phone"})]}),(0,r.jsxs)("div",{className:"xl:my-8",children:[(0,r.jsx)("label",{htmlFor:"email",className:"mb-2 block",children:"Email Address"}),(0,r.jsx)("input",{type:"email",name:"email",value:e.email,onChange:n,required:!0,className:"outline-none w-[300px] p-3 border border-gray-300",placeholder:"Email"})]})]})]}),(0,r.jsxs)("div",{className:"checkoutSummary bg-[#F5F5F5] w-[300px] md:w-[480px] mx-auto xl:mx-0 xl:w-[30%] px-6 py-3",children:[(0,r.jsx)("h1",{className:"text-xl text-black font-bold",children:"Your Order"}),(0,r.jsx)("p",{className:"my-3 text-[500]",children:"PDFname x 1"}),(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{className:"line-through text-[500]",children:"$45"})," ",(0,r.jsx)("span",{children:"$15"})]}),(0,r.jsx)("div",{className:"border border-gray-500 w-full my-4"}),(0,r.jsx)("p",{className:"text-[500]",children:"Subtotal"}),(0,r.jsx)("p",{className:"text-[500]",children:"$15"}),(0,r.jsx)("div",{className:"border border-gray-500 w-full my-4"}),(0,r.jsx)("p",{className:"text-[500]",children:"Tax"}),(0,r.jsx)("p",{className:"text-[500]",children:"$0.00"}),(0,r.jsx)("div",{className:"border border-gray-500 w-full my-4"}),(0,r.jsx)("p",{className:"text-[500]",children:"Total"}),(0,r.jsx)("p",{className:"text-[500]",children:"$15.00"}),(0,r.jsx)("div",{className:"border border-gray-500 w-full my-4"}),(0,r.jsx)(l(),{href:"/checkout",children:(0,r.jsx)(u,{...s,className:"text-[#f3f3f3] bg-[#0b0b17] w-full py-4 rounded-md my-8"})})]})]})})}},7663:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function a(){throw Error("setTimeout has not been defined")}function l(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"==typeof clearTimeout?clearTimeout:l}catch(e){n=l}}();var i=[],c=!1,u=-1;function d(){c&&r&&(c=!1,r.length?i=r.concat(i):u=-1,i.length&&m())}function m(){if(!c){var e=s(d);c=!0;for(var t=i.length;t;){for(r=i,i=[];++u<t;)r&&r[u].run();u=-1,t=i.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===l||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function f(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];i.push(new p(e,t)),1!==i.length||c||s(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=f,o.addListener=f,o.once=f,o.off=f,o.removeListener=f,o.removeAllListeners=f,o.emit=f,o.prependListener=f,o.prependOnceListener=f,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}},l=!0;try{t[e](a,a.exports,r),l=!1}finally{l&&delete n[e]}return a.exports}r.ab="//";var o=r(229);e.exports=o}()}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=5248)}),_N_E=e.O()}]);