import{d as k,o as a,c as x,w as t,a as n,t as v,r as s,_ as y,b as L,e as r,f as e,F as i,g as f,u as h,p as S,h as A,i as I}from"./index.35108173.js";const B=[{title:"\u9762\u8BD5\u95EE\u9898:HTTP\u4E0EHTTPS\u7684\u533A\u522B",link:"https://juejin.cn/post/7144400185731317768"}],T=["title"],$=k({__name:"ArticleLink",props:{article:null},setup(o){const l=o,_=()=>{window.open(l.article.link)};return(d,p)=>{const u=s("el-card");return a(),x(u,{class:"card","body-style":{padding:"0.5em"},onClick:_},{default:t(()=>[n("span",{class:"title",title:l.article.title},v(l.article.title),9,T)]),_:1},8,["body-style"])}}});const j=y($,[["__scopeId","data-v-a5fffbda"]]),b=o=>(S("data-v-aadfb0d3"),o=o(),A(),o),F=b(()=>n("h3",null,"Latest Article",-1)),N=b(()=>n("h4",{class:"footer"},"@2022 Hikit",-1)),P=k({__name:"Home",setup(o){const l={height:"200px",textAlign:"center"},_=[{name:"Rust",link:"/rs",logo:"/rust-logo.svg"},{name:"Golang",link:"/go",logo:"/go-logo.svg"}],{push:d}=I(),p=L(()=>B);return(u,R)=>{const w=s("el-image"),C=s("el-space"),H=s("el-card"),m=s("el-col"),g=s("el-row");return a(),r(i,null,[e(g,{gutter:20},{default:t(()=>[(a(),r(i,null,f(_,c=>e(m,{class:"col",xs:24,sm:8,md:8,lg:4,xl:4},{default:t(()=>[e(H,{class:"card",style:l,onClick:V=>h(d)({path:c.link})},{default:t(()=>[e(C,{direction:"vertical"},{default:t(()=>[e(w,{class:"logo-img",src:c.logo},null,8,["src"]),n("h3",null,v(c.name),1)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024)),64))]),_:1}),F,e(g,{gutter:20},{default:t(()=>[(a(!0),r(i,null,f(h(p),c=>(a(),x(m,{class:"col-art",xs:24,sm:12,md:8,lg:8,xl:8},{default:t(()=>[e(j,{article:c},null,8,["article"])]),_:2},1024))),256))]),_:1}),N],64)}}});const E=y(P,[["__scopeId","data-v-aadfb0d3"]]);export{E as default};
