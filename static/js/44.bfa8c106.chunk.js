(this["webpackJsonp@kgenots/lab"]=this["webpackJsonp@kgenots/lab"]||[]).push([[44],{665:function(e,t,c){"use strict";c.r(t);var j=c(627),l=c(1),n=c(625),s=c(675),r=(c(666),c(17)),i=c(667);t.default=function(){var e=Object(s.c)("hex","#121212"),t=Object(j.a)(e,2),c=t[0],b=t[1],d=Object(l.useState)(i("#121212")),x=Object(j.a)(d,2),h=x[0],o=x[1],O=Object(l.useState)(""),a=Object(j.a)(O,2),u=a[0],m=a[1];Object(l.useEffect)((function(){try{var e=i(c.hex);o(e)}catch(t){alert(t.message)}}),[c]);var g=function(e){var t=e.color;return Object(r.jsxs)(n.S,{className:"mb-2",children:[t&&Array.isArray(t)?t.map((function(e,t){return Object(r.jsx)(n.P,{value:e,disabled:!0},t)})):Object(r.jsx)(n.P,{value:t,disabled:!0}),Object(r.jsx)(n.T,{children:Object(r.jsx)(n.f,{type:"button",color:"dark",onClick:function(e){!function(e){var t=document.createElement("textarea");t.value=e.toString(),document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),alert("{ ".concat(t.value," } is Copied"))}(t)},children:"Copy"})})]})};return Object(r.jsx)(n.tb,{children:Object(r.jsx)(n.u,{lg:12,children:Object(r.jsx)(n.j,{children:Object(r.jsx)(n.k,{children:Object(r.jsxs)(n.tb,{children:[Object(r.jsx)(n.u,{lg:8,children:Object(r.jsxs)(n.j,{style:{marginBottom:0},children:[Object(r.jsx)(n.n,{children:"Color Converter"}),Object(r.jsxs)(n.k,{children:[Object(r.jsxs)(n.tb,{style:{padding:"1rem 0 1rem 0",lineHeight:"35px"},children:[Object(r.jsx)(n.u,{md:"2",children:Object(r.jsxs)(n.ub,{custom:!0,name:"src_color",id:"src_color",disabled:!0,children:[Object(r.jsx)("option",{value:"HEX",children:" HEX "}),Object(r.jsx)("option",{value:"RGB",children:" RGB "}),Object(r.jsx)("option",{value:"HSV",children:" HSV "}),Object(r.jsx)("option",{value:"CMYK",children:" CMYK "})]})}),Object(r.jsx)(n.u,{xs:"12",md:"10",children:Object(r.jsx)(n.S,{children:Object(r.jsx)(n.P,{id:"hex",value:u,onChange:function(e){var t=e.target&&e.target.value;m(t),t&&7===t.length&&b(Object(s.b)("hex",t))},placeholder:"Input Hex string '#xxxxxx'"})})})]}),h&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(n.tb,{style:{lineHeight:"35px"},children:[Object(r.jsx)(n.u,{md:"2",style:{textAlign:"center"},children:Object(r.jsx)(n.Z,{children:Object(r.jsx)("b",{children:" HEX "})})}),Object(r.jsx)(n.u,{md:"10",children:Object(r.jsx)(g,{color:h.hex()})})]}),Object(r.jsxs)(n.tb,{style:{lineHeight:"35px"},children:[Object(r.jsx)(n.u,{md:"2",style:{textAlign:"center"},children:Object(r.jsx)(n.Z,{children:Object(r.jsx)("b",{children:" RGB "})})}),Object(r.jsx)(n.u,{md:"10",children:Object(r.jsx)(g,{color:h.rgb().color})})]}),Object(r.jsxs)(n.tb,{style:{lineHeight:"35px"},children:[Object(r.jsx)(n.u,{md:"2",style:{textAlign:"center"},children:Object(r.jsx)(n.Z,{children:Object(r.jsx)("b",{children:" HSV "})})}),Object(r.jsx)(n.u,{md:"10",children:Object(r.jsx)(g,{color:h.hsv().color})})]}),Object(r.jsxs)(n.tb,{style:{lineHeight:"35px"},children:[Object(r.jsx)(n.u,{md:"2",style:{textAlign:"center"},children:Object(r.jsx)(n.Z,{children:Object(r.jsx)("b",{children:" HSl "})})}),Object(r.jsx)(n.u,{md:"10",children:Object(r.jsx)(g,{color:h.hsl().color})})]}),Object(r.jsxs)(n.tb,{style:{lineHeight:"35px"},children:[Object(r.jsx)(n.u,{md:"2",style:{textAlign:"center"},children:Object(r.jsx)(n.Z,{children:Object(r.jsx)("b",{children:" HWB "})})}),Object(r.jsx)(n.u,{md:"10",children:Object(r.jsx)(g,{color:h.hwb().color})})]}),Object(r.jsxs)(n.tb,{style:{lineHeight:"35px"},children:[Object(r.jsx)(n.u,{md:"2",style:{textAlign:"center"},children:Object(r.jsx)(n.Z,{children:Object(r.jsx)("b",{children:" CMYK "})})}),Object(r.jsx)(n.u,{md:"10",children:Object(r.jsx)(g,{color:h.cmyk().color})})]}),Object(r.jsxs)(n.tb,{style:{lineHeight:"35px"},children:[Object(r.jsx)(n.u,{md:"2",style:{textAlign:"center"},children:Object(r.jsx)(n.Z,{children:Object(r.jsx)("b",{children:" LAB "})})}),Object(r.jsx)(n.u,{md:"10",children:Object(r.jsx)(g,{color:h.lab().color})})]}),Object(r.jsxs)(n.tb,{style:{lineHeight:"35px"},children:[Object(r.jsx)(n.u,{md:"2",style:{textAlign:"center"},children:Object(r.jsx)(n.Z,{children:Object(r.jsx)("b",{children:" ANSI16 "})})}),Object(r.jsx)(n.u,{md:"10",children:Object(r.jsx)(g,{color:h.ansi16().color})})]}),Object(r.jsxs)(n.tb,{style:{lineHeight:"35px"},children:[Object(r.jsx)(n.u,{md:"2",style:{textAlign:"center"},children:Object(r.jsx)(n.Z,{children:Object(r.jsx)("b",{children:" ANSI256 "})})}),Object(r.jsx)(n.u,{md:"10",children:Object(r.jsx)(g,{color:h.ansi256().color})})]})]})]})]},"color_converter")}),Object(r.jsxs)(n.u,{lg:4,style:{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"},children:[Object(r.jsx)(s.a,{width:400,height:256,color:c,onChange:b,hideHSV:!0,hideRGB:!0,hideHEX:!0,dark:!0}),Object(r.jsx)("div",{style:{width:"400px",height:"160px",backgroundColor:c.hex,borderRadius:"10px"}})]})]})})})})})}}}]);
//# sourceMappingURL=44.bfa8c106.chunk.js.map