import{d as k,o as n,c as x,w as t,a,t as y,r as s,_ as v,b as C,e as i,f as e,F as r,g as f,u as h,p as H,h as I,i as L}from"./index.1d763dac.js";const S=[{title:"\u77A7\u77A7\u522B\u4EBA\u5BB6\u7684API\u63A5\u53E3\uFF0C\u90A3\u53EB\u4E00\u4E2A\u4F18\u96C5 - \u6398\u91D1",link:"https://juejin.cn/post/7176220436714225721"},{title:"\u524D\u7AEF\u4EBA70%\u4EE5\u4E0A \u4E0D\u4E86\u89E3\u7684promise/async await - \u6398\u91D1",link:"https://juejin.cn/post/7144308012952322084"},{title:"\u9762\u8BD5\u95EE\u9898:HTTP\u4E0EHTTPS\u7684\u533A\u522B",link:"https://juejin.cn/post/7144400185731317768"}],B=["title"],T=k({__name:"ArticleLink",props:{article:null},setup(o){const l=o,_=()=>{window.open(l.article.link)};return(p,d)=>{const u=s("el-card");return n(),x(u,{class:"card","body-style":{padding:"0.5em"},onClick:_},{default:t(()=>[a("span",{class:"title",title:l.article.title},y(l.article.title),9,B)]),_:1},8,["body-style"])}}});const P=v(T,[["__scopeId","data-v-a5fffbda"]]),w=o=>(H("data-v-3fd0aa3c"),o=o(),I(),o),$=w(()=>a("h3",null,"Latest Article",-1)),F=w(()=>a("h4",{class:"footer"},"@2022 Hikit",-1)),N=k({__name:"Home",setup(o){const l={height:"200px",textAlign:"center"},_=[{name:"Rust",link:"/rs",logo:"/rust-logo.svg"},{name:"Golang",link:"/go",logo:"/go-logo.svg"}],{push:p}=L(),d=C(()=>S);return(u,R)=>{const b=s("el-image"),j=s("el-space"),A=s("el-card"),m=s("el-col"),g=s("el-row");return n(),i(r,null,[e(g,{gutter:20},{default:t(()=>[(n(),i(r,null,f(_,c=>e(m,{class:"col",xs:12,sm:8,md:8,lg:4,xl:4},{default:t(()=>[e(A,{class:"card",style:l,onClick:V=>h(p)({path:c.link})},{default:t(()=>[e(j,{direction:"vertical"},{default:t(()=>[e(b,{class:"logo-img",src:c.logo},null,8,["src"]),a("h3",null,y(c.name),1)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024)),64))]),_:1}),$,e(g,{gutter:20},{default:t(()=>[(n(!0),i(r,null,f(h(d),c=>(n(),x(m,{class:"col-art",xs:24,sm:12,md:8,lg:8,xl:8},{default:t(()=>[e(P,{article:c},null,8,["article"])]),_:2},1024))),256))]),_:1}),F],64)}}});const E=v(N,[["__scopeId","data-v-3fd0aa3c"]]);export{E as default};
