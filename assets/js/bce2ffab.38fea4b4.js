"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["94535"],{22408:function(e,t,n){n.r(t),n.d(t,{default:()=>f,frontMatter:()=>o,metadata:()=>i,assets:()=>c,toc:()=>u,contentTitle:()=>a});var i=JSON.parse('{"id":"tests/visibility/only-unlisteds/unlisted-subcategory/index","title":"Only Unlisteds - Subcategory index unlisted","description":"Doc with unlisted front matter","source":"@site/_dogfooding/_docs tests/tests/visibility/only-unlisteds/unlisted-subcategory/index.mdx","sourceDirName":"tests/visibility/only-unlisteds/unlisted-subcategory","slug":"/tests/visibility/only-unlisteds/unlisted-subcategory/","permalink":"/tests/docs/tests/visibility/only-unlisteds/unlisted-subcategory/","draft":false,"unlisted":true,"tags":[{"inline":false,"label":"Visibility","permalink":"/tests/docs/tags/visibility"},{"inline":false,"label":"Unlisted","permalink":"/tests/docs/tags/unlisted"}],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1737984270000,"frontMatter":{"unlisted":true,"tags":["visibility","unlisted"]},"sidebar":"sidebar"}'),s=n("85893"),r=n("80980"),l=n("78042");let o={unlisted:!0,tags:["visibility","unlisted"]},a="Only Unlisteds - Subcategory index unlisted",c={},u=[];function d(e){let t={h1:"h1",header:"header",p:"p",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"only-unlisteds---subcategory-index-unlisted",children:"Only Unlisteds - Subcategory index unlisted"})}),"\n",(0,s.jsx)(t.p,{children:"Doc with unlisted front matter"}),"\n","\n",(0,s.jsx)(l.Z,{})]})}function f(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}f.displayName="MDXContent(_dogfooding/_docs tests/tests/visibility/only-unlisteds/unlisted-subcategory/index.mdx)"},78042:function(e,t,n){n.d(t,{Z:()=>x});var i=n("85893");n("67294");var s=n("90496"),r=n("85921"),l=n("35363"),o=n("11660"),a=n("82095"),c=n("77827"),u=n("57922");let d={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function f(e){let{href:t,children:n}=e;return(0,i.jsx)(l.Z,{href:t,className:(0,s.Z)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:r,description:l}=e;return(0,i.jsxs)(f,{href:t,children:[(0,i.jsxs)(u.Z,{as:"h2",className:(0,s.Z)("text--truncate",d.cardTitle),title:r,children:[n," ",r]}),l&&(0,i.jsx)("p",{className:(0,s.Z)("text--truncate",d.cardDescription),title:l,children:l})]})}function p(e){let{item:t}=e,n=(0,r.LM)(t),s=function(){let{selectMessage:e}=(0,o.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,i.jsx)(m,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??s(t.items.length)}):null}function h(e){let{item:t}=e,n=(0,a.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",s=(0,r.xz)(t.docId??void 0);return(0,i.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,i.jsx)(h,{item:t});case"category":return(0,i.jsx)(p,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e,n=(0,r.Ok)();return(0,i.jsx)(x,{items:n,className:t})}function x(e){let{items:t,className:n}=e;if(!t)return(0,i.jsx)(y,{...e});let l=(0,r.MN)(t);return(0,i.jsx)("section",{className:(0,s.Z)("row",n),children:l.map((e,t)=>(0,i.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,i.jsx)(g,{item:e})},t))})}},11660:function(e,t,n){n.d(t,{c:function(){return a}});var i=n(67294),s=n(8156);let r=["zero","one","two","few","many","other"];function l(e){return r.filter(t=>e.includes(t))}let o={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function a(){let e=function(){let{i18n:{currentLocale:e}}=(0,s.Z)();return(0,i.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),o}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let i=e.split("|");if(1===i.length)return i[0];i.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);let s=n.select(t);return i[Math.min(n.pluralForms.indexOf(s),i.length-1)]})(n,t,e)}}},80980:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return l}});var i=n(67294);let s={},r=i.createContext(s);function l(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);