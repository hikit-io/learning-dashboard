import{d as k,o as c,c as y,w as e,a,t as x,r as s,_ as j,b as S,e as _,f as t,F as r,g as f,u as h,p as A,h as C,i as H}from"./index.956bc2df.js";const I=[{title:"\u{1F525}\u6211\u8BF4MySQL\u6BCF\u5F20\u8868\u6700\u597D\u4E0D\u8D85\u8FC72000\u4E07\u6570\u636E\uFF0C\u9762\u8BD5\u5B98\u8BA9\u6211\u56DE\u53BB\u7B49\u901A\u77E5\uFF1F - \u6398\u91D1",link:"https://juejin.cn/post/7165689453124517896"},{title:"PGO \u662F\u5565\uFF0C\u548B\u5C31\u8BA9 Go \u66F4\u5FEB\u66F4\u731B\u4E86\uFF1F - \u6398\u91D1",link:"https://juejin.cn/post/7168692708725227556"},{title:"\u9762\u8BD5\u5B98\uFF1A\u4F60\u5982\u4F55\u5B9E\u73B0\u5927\u6587\u4EF6\u4E0A\u4F20 - \u6398\u91D1",link:"https://juejin.cn/post/7177045936298786872"},{title:"\u77A7\u77A7\u522B\u4EBA\u5BB6\u7684API\u63A5\u53E3\uFF0C\u90A3\u53EB\u4E00\u4E2A\u4F18\u96C5 - \u6398\u91D1",link:"https://juejin.cn/post/7176220436714225721"},{title:"\u524D\u7AEF\u4EBA70%\u4EE5\u4E0A \u4E0D\u4E86\u89E3\u7684promise/async await - \u6398\u91D1",link:"https://juejin.cn/post/7144308012952322084"},{title:"\u9762\u8BD5\u95EE\u9898:HTTP\u4E0EHTTPS\u7684\u533A\u522B",link:"https://juejin.cn/post/7144400185731317768"}],B=["title"],P=k({__name:"ArticleLink",props:{article:null},setup(o){const l=o,i=()=>{window.open(l.article.link)};return(p,d)=>{const u=s("el-card");return c(),y(u,{class:"card","body-style":{padding:"0.5em"},onClick:i},{default:e(()=>[a("span",{class:"title",title:l.article.title},x(l.article.title),9,B)]),_:1},8,["body-style"])}}});const T=j(P,[["__scopeId","data-v-a5fffbda"]]),v=o=>(A("data-v-3fd0aa3c"),o=o(),C(),o),G=v(()=>a("h3",null,"Latest Article",-1)),$=v(()=>a("h4",{class:"footer"},"@2022 Hikit",-1)),F=k({__name:"Home",setup(o){const l={height:"200px",textAlign:"center"},i=[{name:"Rust",link:"/rs",logo:"/rust-logo.svg"},{name:"Golang",link:"/go",logo:"/go-logo.svg"}],{push:p}=H(),d=S(()=>I);return(u,N)=>{const w=s("el-image"),b=s("el-space"),L=s("el-card"),m=s("el-col"),g=s("el-row");return c(),_(r,null,[t(g,{gutter:20},{default:e(()=>[(c(),_(r,null,f(i,n=>t(m,{class:"col",xs:12,sm:8,md:8,lg:4,xl:4},{default:e(()=>[t(L,{class:"card",style:l,onClick:R=>h(p)({path:n.link})},{default:e(()=>[t(b,{direction:"vertical"},{default:e(()=>[t(w,{class:"logo-img",src:n.logo},null,8,["src"]),a("h3",null,x(n.name),1)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024)),64))]),_:1}),G,t(g,{gutter:20},{default:e(()=>[(c(!0),_(r,null,f(h(d),n=>(c(),y(m,{class:"col-art",xs:24,sm:12,md:8,lg:8,xl:8},{default:e(()=>[t(T,{article:n},null,8,["article"])]),_:2},1024))),256))]),_:1}),$],64)}}});const D=j(F,[["__scopeId","data-v-3fd0aa3c"]]);export{D as default};
