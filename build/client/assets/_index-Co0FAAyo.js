import{r as h,j as e}from"./jsx-runtime-BWtM72Fx.js";/* empty css             */import{t as L,d as de,f as D,a as j,c as ce,u as w,b as C,e as ue,m as me,g as pe,h as he,$ as xe,i as ve,j as be,o as fe,k as f,l as je,r as ye,n as W,G as ke,p as ge}from"./index-pNgwDFOL.js";import{l as Ne}from"./components-CL98zLh-.js";var we=L({base:"shrink-0 bg-divider border-none",variants:{orientation:{horizontal:"w-full h-divider",vertical:"h-full w-divider"}},defaultVariants:{orientation:"horizontal"}}),G=L({slots:{base:["flex","flex-col","relative","overflow-hidden","h-auto","outline-none","text-foreground","box-border","bg-content1",...de],header:["flex","p-3","z-10","w-full","justify-start","items-center","shrink-0","overflow-inherit","color-inherit","subpixel-antialiased"],body:["relative","flex","flex-1","w-full","p-3","flex-auto","flex-col","place-content-inherit","align-items-inherit","h-auto","break-words","text-left","overflow-y-auto","subpixel-antialiased"],footer:["p-3","h-auto","flex","w-full","items-center","overflow-hidden","color-inherit","subpixel-antialiased"]},variants:{shadow:{none:{base:"shadow-none"},sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},radius:{none:{base:"rounded-none",header:"rounded-none",footer:"rounded-none"},sm:{base:"rounded-small",header:"rounded-t-small",footer:"rounded-b-small"},md:{base:"rounded-medium",header:"rounded-t-medium",footer:"rounded-b-medium"},lg:{base:"rounded-large",header:"rounded-t-large",footer:"rounded-b-large"}},fullWidth:{true:{base:"w-full"}},isHoverable:{true:{base:"data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2"}},isPressable:{true:{base:"cursor-pointer"}},isBlurred:{true:{base:["bg-background/80","dark:bg-background/20","backdrop-blur-md","backdrop-saturate-150"]}},isFooterBlurred:{true:{footer:["bg-background/10","backdrop-blur","backdrop-saturate-150"]}},isDisabled:{true:{base:"opacity-disabled cursor-not-allowed"}},disableAnimation:{true:"",false:{base:"transition-transform-background motion-reduce:transition-none"}}},compoundVariants:[{isPressable:!0,class:"data-[pressed=true]:scale-[0.97] tap-highlight-transparent"}],defaultVariants:{radius:"lg",shadow:"md",fullWidth:!1,isHoverable:!1,isPressable:!1,isDisabled:!1,isFooterBlurred:!1}});function Ce(s){let a=D(s,{enabled:typeof s.elementType=="string"}),t;return s.orientation==="vertical"&&(t="vertical"),s.elementType!=="hr"?{separatorProps:{...a,role:"separator","aria-orientation":t}}:{separatorProps:a}}function Pe(s){const{as:a,className:t,orientation:i,...r}=s;let l=a||"hr";l==="hr"&&i==="vertical"&&(l="div");const{separatorProps:d}=Ce({elementType:typeof l=="string"?l:"hr",orientation:i}),o=h.useMemo(()=>we({orientation:i,className:t}),[i,t]),c=h.useCallback((n={})=>({className:o,role:"separator","data-orientation":i,...d,...r,...n}),[o,i,d,r]);return{Component:l,getDividerProps:c}}var E=j((s,a)=>{const{Component:t,getDividerProps:i}=Pe({...s});return e.jsx(t,{ref:a,...i()})});E.displayName="NextUI.Divider";var m=E,[Oe,S]=ce({name:"CardContext",strict:!0,errorMessage:"useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />"}),K=j((s,a)=>{var t;const{as:i,className:r,children:l,...d}=s,o=i||"div",c=w(a),{slots:n,classNames:u}=S(),p=C(u==null?void 0:u.body,r);return e.jsx(o,{ref:c,className:(t=n.body)==null?void 0:t.call(n,{class:p}),...d,children:l})});K.displayName="NextUI.CardBody";var z=K,q=j((s,a)=>{var t;const{as:i,className:r,children:l,...d}=s,o=i||"div",c=w(a),{slots:n,classNames:u}=S(),p=C(u==null?void 0:u.footer,r);return e.jsx(o,{ref:c,className:(t=n.footer)==null?void 0:t.call(n,{class:p}),...d,children:l})});q.displayName="NextUI.CardFooter";var J=q,Q=j((s,a)=>{var t;const{as:i,className:r,children:l,...d}=s,o=i||"div",c=w(a),{slots:n,classNames:u}=S(),p=C(u==null?void 0:u.header,r);return e.jsx(o,{ref:c,className:(t=n.header)==null?void 0:t.call(n,{class:p}),...d,children:l})});Q.displayName="NextUI.CardHeader";var X=Q;function Re(s){var a,t,i,r;const l=ue(),[d,o]=me(s,G.variantKeys),{ref:c,as:n,children:u,onClick:p,onPress:ee,autoFocus:se,className:te,classNames:v,allowTextSelectionOnPress:ae=!0,...y}=d,b=w(c),_=n||(s.isPressable?"button":"div"),F=typeof _=="string",x=(t=(a=s.disableAnimation)!=null?a:l==null?void 0:l.disableAnimation)!=null?t:!1,T=(r=(i=s.disableRipple)!=null?i:l==null?void 0:l.disableRipple)!=null?r:!1,$=C(v==null?void 0:v.base,te),{onClick:ie,onClear:H,ripples:A}=pe(),B=M=>{!x&&!T&&b.current&&ie(M)},{buttonProps:I,isPressed:P}=he({onPress:ee,elementType:n,isDisabled:!s.isPressable,onClick:xe(p,B),allowTextSelectionOnPress:ae,...y},b),{hoverProps:U,isHovered:O}=ve({isDisabled:!s.isHoverable,...y}),{isFocusVisible:R,isFocused:le,focusProps:V}=be({autoFocus:se}),k=h.useMemo(()=>G({...o,disableAnimation:x}),[fe(o),x]),ne=h.useMemo(()=>({slots:k,classNames:v,disableAnimation:x,isDisabled:s.isDisabled,isFooterBlurred:s.isFooterBlurred,fullWidth:s.fullWidth}),[k,v,s.isDisabled,s.isFooterBlurred,x,s.fullWidth]),re=h.useCallback((M={})=>({ref:b,className:k.base({class:$}),tabIndex:s.isPressable?0:-1,"data-hover":f(O),"data-pressed":f(P),"data-focus":f(le),"data-focus-visible":f(R),"data-disabled":f(s.isDisabled),...je(s.isPressable?{...I,...V,role:"button"}:{},s.isHoverable?U:{},D(y,{enabled:F}),D(M))}),[b,k,$,F,s.isPressable,s.isHoverable,s.isDisabled,O,P,R,I,V,U,y]),oe=h.useCallback(()=>({ripples:A,onClear:H}),[A,H]);return{context:ne,domRef:b,Component:_,classNames:v,children:u,isHovered:O,isPressed:P,disableAnimation:x,isPressable:s.isPressable,isHoverable:s.isHoverable,disableRipple:T,handleClick:B,isFocusVisible:R,getCardProps:re,getRippleProps:oe}}var Y=j((s,a)=>{const{children:t,context:i,Component:r,isPressable:l,disableAnimation:d,disableRipple:o,getCardProps:c,getRippleProps:n}=Re({...s,ref:a});return e.jsxs(r,{...c(),children:[e.jsx(Oe,{value:i,children:t}),l&&!d&&!o&&e.jsx(ye,{...n()})]})});Y.displayName="NextUI.Card";var Z=Y;function g({name:s,desc:a,langs:t,git:i,links:r}){return e.jsx(e.Fragment,{children:e.jsxs(Z,{className:"bg-gray-800 text-slate-100 font-montserrat",children:[e.jsxs(X,{className:"font-semibold text-lg",children:[e.jsx("p",{className:"pr-4",children:s}),e.jsx(m,{className:"bg-gray-500",orientation:"vertical"}),e.jsxs("div",{className:"pl-4 space-x-2 text-3xl",children:[e.jsx("i",{class:t[0]}),e.jsx("i",{class:t[1]}),e.jsx("i",{class:t[2]})]})]}),e.jsx(m,{className:"bg-gray-500"}),e.jsx(z,{children:e.jsx("p",{children:a})}),e.jsx(m,{className:"bg-gray-500"}),e.jsx(J,{children:e.jsx(W,{showAnchorIcon:!0,href:i,children:"Lähdekoodi Githubissa"})})]})})}function N(s){return ke({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"},child:[]}]})(s)}function Me(){let s=["Minun työkalupakkini","Liikuta hiirtä eri kykyjeni päälle lukeaksesi lisää.","",""];const[a,t]=h.useState(s);return e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:"flex justify-center flex-wrap gap-4 p-4 pt-8 text-white font-montserrat font-medium w-full",children:[e.jsx("li",{onMouseOver:()=>t(["React","Olen rakentanut verkkosivuja eri React-pohjaisilla ohjelmistokehyksillä. Osaan tuottaa komponenttipohjaisia verkkosivukokonaisuuksia.","https://react.dev/","devicon-react-original"]),className:"bg-slate-800 p-2 rounded-md hover:bg-slate-500",children:"React"}),e.jsx("li",{onMouseOver:()=>t(["TypeScript","Käytän yleisesti TypeScriptiä aina kun mahdollista JavaScriptin sijaan. Luonnollisesti molempien käyttäminen sujuu.","https://www.typescriptlang.org/","devicon-typescript-plain"]),className:"bg-slate-800 p-2 rounded-md hover:bg-slate-500",children:"TypeScript"}),e.jsx("li",{onMouseOver:()=>t(["Next.js","Olen käyttänyt Next.js-ohjelmistokehystä rakentaessani selainpuolella renderöitäviä verkkosovelluksia.","https://nextjs.org/","devicon-nextjs-plain"]),className:"bg-slate-800 p-2 rounded-md hover:bg-slate-500",children:"Next.js"}),e.jsx("li",{onMouseOver:()=>t(["Remix","Olen käyttänyt Remix-ohjelmistokehystä rakentaessani verkkosovelluksia.","https://remix.run/",""]),className:"bg-slate-800 p-2 rounded-md hover:bg-slate-500",children:"Remix"}),e.jsx("li",{onMouseOver:()=>t(["C#","Olen käyttänyt C#-koodikieltä rakentamaan työpöytäsovelluksia Microsoftin .NET-ohjelmistokehyksen avulla. Olen käyttänyt koodikieltä myös Unity-pelimoottorin sisällä skriptauskielenä.","https://dotnet.microsoft.com/en-us/languages/csharp","devicon-csharp-plain"]),className:"bg-slate-800 p-2 rounded-md hover:bg-slate-500",children:"C#"}),e.jsx("li",{onMouseOver:()=>t(["C++","Olen hyödyntänyt C++-koodikieltä algoritmisessa ohjelmoinnissa ja ongelmanratkaisussa. Olen tutustunut myös Qt-pohjaisten työpöytäsovellusten rakentamiseen koodikielen avulla.","https://fi.wikipedia.org/wiki/C%2B%2B","devicon-cplusplus-plain"]),className:"bg-slate-800 p-2 rounded-md hover:bg-slate-500",children:"C++"}),e.jsx("li",{onMouseOver:()=>t(["Python","Olen käyttänyt Pythonin SciPy- ja NumPy-kirjastoja tieteellisessä ohjelmoinnissa, datan käsittelyssä ja lineaarialgebralaskennassa. Olen käyttänyt Pythonia myös algoritmiseen ohjelmointiin.","https://www.python.org/","devicon-python-plain"]),className:"bg-slate-800 p-2 rounded-md hover:bg-slate-500",children:"Python"}),e.jsx("li",{onMouseOver:()=>t(["Tailwind","Käytän hyvin usein Tailwindiä perinteisen CSS-tyyliohjelmoinnin sijaan verkkosivuja rakentaessani.","https://tailwindcss.com/","devicon-tailwindcss-plain"]),className:"bg-slate-800 p-2 rounded-md hover:bg-slate-500",children:"Tailwind"}),e.jsx("li",{onMouseOver:()=>t(["GitHub","Käytän GitHubia versiohallintaan.","https://github.com","devicon-github-plain"]),className:"bg-slate-800 p-2 rounded-md hover:bg-slate-500",children:"GitHub"})]}),e.jsx("div",{className:"flex justify-center pb-8",children:e.jsx("div",{className:"w-2/3",children:e.jsxs(Z,{className:"bg-gray-800 text-white font-montserrat",children:[e.jsxs(X,{className:"flex justify-between font-semibold",children:[e.jsx(W,{href:a[2],children:a[0]}),e.jsx("i",{className:"text-4xl",class:a[3]})]}),e.jsx(m,{className:"bg-gray-400"}),e.jsx(z,{children:a[1]}),e.jsx(J,{children:e.jsxs("div",{className:"flex text-green-400",children:[e.jsx(N,{}),e.jsx(N,{}),e.jsx(N,{}),e.jsx(N,{})]})})]})})})]})}function De(){const s=Ne();return e.jsxs(s.Form,{method:"post",action:"/contact",className:"w-1/2 px-6 py-4 font-montserrat text-gray-400",children:[e.jsxs("div",{className:"flex justify-between pb-2",children:[e.jsx("p",{className:"",children:"Ota yhteyttä:"}),e.jsx(ge,{type:"submit",className:"h-7 outline bg-gray-800 outline-green-600 outline-1 text-gray-400",children:"Lähetä"})]}),e.jsx(m,{className:"bg-gray-500"}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{children:[e.jsx("p",{className:"py-2",children:"Viesti *"}),e.jsx("textarea",{required:!0,type:"text",name:"content",className:"w-96 h-32 outline bg-gray-800 outline-1 outline-gray-600 text-gray-300 rounded-lg p-3 font-normal"})]}),e.jsxs("div",{className:"space-y-4 pl-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"pb-2",children:"Sähköposti *"}),e.jsx("input",{required:!0,type:"email",name:"email",className:"p-1 max-h-8 bg-gray-800 outline-gray-600 text-white outline-1 outline rounded-lg font-normal"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"pb-2",children:"Puhelinnumero"}),e.jsx("input",{name:"sms",className:"p-1 max-h-8 bg-gray-800 outline-gray-600 outline-1 text-white outline rounded-lg font-normal"})]})]})]})]})}function $e(){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-gray-700 text-white font-montserrat py-36 pl-36",children:[e.jsx("div",{className:"w-max",children:e.jsx("p",{className:"animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-5xl text-white font-bold",children:"Eemeli Myllymäki"})}),e.jsx("p",{className:"pt-5 w-1/2",children:" Terve! Olen Eemeli Myllymäki, nuori ja intohimoinen ohjelmistokehittäjän alku Tampereen seudulta. Vaikka minulla ei ole virallista koulutusta, olen itsenäisesti hankkinut vahvat taidot ja kokemusta monista ohjelmointikielistä eri harrastusprojektien kautta. Olen aina innokas oppimaan uutta ja ottamaan vastaan haasteita; erityisesti niitä, jotka vaativat luovaa ajattelua ja veitsenterävää ongelmanratkaisukykyä. Täällä voit tutustua projekteihini ja nähdä, mihin kaikkeen olen pystynyt pelkän pitkäjänteisyyden ja ahkeran harjoittelun avulla."})]}),e.jsx(m,{className:"bg-gray-500"}),e.jsxs("div",{className:"py-8 text-white font-montserrat",id:"portfolio",children:[e.jsx("p",{className:"font-semibold text-6xl underline pb-8 pl-6",children:"Projektini"}),e.jsxs("div",{className:"gap-2 grid grid-cols-2 grid-rows-2 px-24",children:[e.jsx(g,{name:"Portfoliosivu",desc:"Remixillä ja NextUI-käyttöliittymäkirjastolla kasattu portfolioverkkosivu.",langs:["devicon-typescript-plain","devicon-react-original colored"],git:"https://github.com",links:""}),e.jsx(g,{name:"Portfoliosivu",desc:"Remixillä ja NextUI:n frontend-työkaluilla kasattu portfolioverkkosivu.",langs:["devicon-typescript-plain","devicon-react-original colored"],git:"https://github.com",links:""}),e.jsx(g,{name:"Portfoliosivu",desc:"Remixillä ja NextUI:n frontend-työkaluilla kasattu portfolioverkkosivu.",langs:["devicon-typescript-plain","devicon-react-original colored"],git:"https://github.com",links:""}),e.jsx(g,{name:"Portfoliosivu",desc:"Remixillä ja NextUI:n frontend-työkaluilla kasattu portfolioverkkosivu.",langs:["devicon-typescript-plain","devicon-react-original colored"],git:"https://github.com",links:""})]})]}),e.jsx(m,{className:"bg-gray-500"}),e.jsx("div",{className:"flex w-full justify-center font-montserrat",children:e.jsx("p",{className:"pt-8 font-semibold underline text-white text-5xl",children:"Osaamiseni"})}),e.jsx(Me,{}),e.jsx(m,{className:"bg-gray-500"}),e.jsx("div",{className:"font-montserrat text-gray-300 bg-gray-800",children:e.jsx(De,{})})]})}const He=()=>[{rel:"stylesheet",type:"text/css",href:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"}];export{$e as default,He as links};