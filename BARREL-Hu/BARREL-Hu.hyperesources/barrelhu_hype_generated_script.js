//	HYPE.documents["BARREL-Hu"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="BARREL-Hu.hyperesources",c="BARREL-Hu",e="barrelhu_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/barrelhu_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_596","HYPE_dtl_596",!0==(null!=a&&10>a||false==!0)?"HYPE-596.full.min.js":"HYPE-596.thin.min.js"),true==!0&&(a=a||l("HYPE_w_596","HYPE_wdtl_596","HYPE-596.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"untitledFunction",source:"function(hypeDocument, element, event) {\t \n\t \n\tmenu = hypeDocument.getElementById('menu');\n\twindow.onscroll = function(){\n        var scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n        \n        var menuDelta = 100;\n\n        if (scroll > menuDelta){\n            menu.classList.add('sticky')\n        }\n        if (scroll <= menuDelta){\n            menu.classList.remove('sticky')\n        }\n    };    \n    \n    \t\n}",identifier:"14"},{name:"untitledFunction2",source:"function(hypeDocument, element, event) {\t\n\tPDPmenu = hypeDocument.getElementById('PDPmenu');\n\t    PDPsidebar = hypeDocument.getElementById('PDPsidebar');\n\n\twindow.onscroll = function(){\n        var scroll2 = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n        \n        var menuDelta2 = 1000;\n\n        if (scroll2 > menuDelta2){\n            PDPmenu.classList.add('sticky2')\n        }\n        if (scroll2 <= menuDelta2){\n            PDPmenu.classList.remove('sticky2')\n        }\n        \n        \n        \n        \n        var scroll3 = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n        \n        var menuDelta3 = 200;\n        var menuRelease = 550;\n\n        if (scroll3 > menuDelta3){\n            PDPsidebar.classList.add('sticky3')\n        }\n        if (scroll3 <= menuDelta3){\n            PDPsidebar.classList.remove('sticky3')\n            PDPsidebar.classList.remove('stickyRelease')\n        }\n        \n        if (scroll3 <= menuRelease){\n            PDPsidebar.classList.remove('stickyRelease')\n        }\n        \n        if (scroll3 > menuRelease){\n            PDPsidebar.classList.remove('sticky3')\n            PDPsidebar.classList.add('stickyRelease')\n        }\n    };  \n\n\t\n}",identifier:"154"},{name:"untitledFunction3",source:"function(hypeDocument, element, event) {\t\n\t\n\t\n}",identifier:"155"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_596(c,e,{"-2":{n:"blank.gif"},"47":{p:1,n:"flagship-module_2x.png",g:"109",o:true,t:"@2x"},"48":{p:1,n:"flagship-text.png",g:"156",o:true,t:"@1x"},"49":{p:1,n:"flagship-text_2x.png",g:"156",o:true,t:"@2x"},"0":{p:1,n:"Group%2042.png",g:"7",o:true,t:"@1x"},"1":{p:1,n:"Group%2042_2x.png",g:"7",o:true,t:"@2x"},"2":{p:1,n:"OnScrollNav.jpg",g:"12",o:true,t:"@1x"},"3":{p:1,n:"OnScrollNav_2x.jpg",g:"12",o:true,t:"@2x"},"4":{p:1,n:"product-hover.png",g:"15",o:true,t:"@1x"},"5":{p:1,n:"product-hover_2x.png",g:"15",o:true,t:"@2x"},"6":{p:1,n:"chocolate-bar-1.png",g:"20",o:true,t:"@1x"},"7":{p:1,n:"chocolate-bar-1_2x.png",g:"20",o:true,t:"@2x"},"10":{p:1,n:"chocolate-bar-3.png",g:"24",o:true,t:"@1x"},"8":{p:1,n:"chocolate-bar-2.png",g:"22",o:true,t:"@1x"},"9":{p:1,n:"chocolate-bar-2_2x.png",g:"22",o:true,t:"@2x"},"11":{p:1,n:"chocolate-bar-3_2x.png",g:"24",o:true,t:"@2x"},"12":{p:1,n:"arrow.png",g:"29",o:true,t:"@1x"},"13":{p:1,n:"arrow_2x.png",g:"29",o:true,t:"@2x"},"20":{p:1,n:"_homepage.jpg",g:"28",o:true,t:"@1x"},"21":{p:1,n:"_homepage_2x.jpg",g:"28",o:true,t:"@2x"},"14":{p:1,n:"big-chocolate.png",g:"48",o:true,t:"@1x"},"22":{p:1,n:"email-1.png",g:"76",o:true,t:"@1x"},"15":{p:1,n:"big-chocolate_2x.png",g:"48",o:true,t:"@2x"},"30":{p:1,n:"shop-chocolates-arrow.png",g:"97",o:true,t:"@1x"},"23":{p:1,n:"email-1_2x.png",g:"76",o:true,t:"@2x"},"16":{p:1,n:"_navigation.png",g:"51",o:true,t:"@1x"},"31":{p:1,n:"shop-chocolates-arrow_2x.png",g:"97",o:true,t:"@2x"},"24":{p:1,n:"email-3.png",g:"80",o:true,t:"@1x"},"17":{p:1,n:"_navigation_2x.png",g:"51",o:true,t:"@2x"},"32":{p:1,n:"shop-chocolates-text.png",g:"99",o:true,t:"@1x"},"25":{p:1,n:"email-3_2x.png",g:"80",o:true,t:"@2x"},"18":{p:1,n:"chestnuts.png",g:"69",o:true,t:"@1x"},"40":{p:1,n:"chocolate-bare.png",g:"140",t:"@1x"},"33":{p:1,n:"shop-chocolates-text_2x.png",g:"99",o:true,t:"@2x"},"26":{p:1,n:"email-confirmation.png",g:"74",o:true,t:"@1x"},"19":{p:1,n:"chestnuts_2x.png",g:"69",o:true,t:"@2x"},"41":{p:1,n:"chocolate-back.png",g:"133",t:"@1x"},"34":{p:1,n:"get-started-text.png",g:"107",o:true,t:"@1x"},"27":{p:1,n:"email-confirmation_2x.png",g:"74",o:true,t:"@2x"},"42":{p:1,n:"_pdp.jpg",g:"123",o:true,t:"@1x"},"35":{p:1,n:"get-started-text_2x.png",g:"107",o:true,t:"@2x"},"28":{p:1,n:"email-2.png",g:"78",o:true,t:"@1x"},"43":{p:1,n:"_pdp_2x.jpg",g:"123",o:true,t:"@2x"},"50":{p:1,n:"homepage2.jpg",g:"160",o:true,t:"@1x"},"36":{p:1,n:"chocolate-email-1.png",g:"131",o:true,t:"@1x"},"29":{p:1,n:"email-2_2x.png",g:"78",o:true,t:"@2x"},"44":{p:1,n:"pdp-sticky-nav.png",g:"152",o:true,t:"@1x"},"51":{p:1,n:"homepage2_2x.jpg",g:"160",o:true,t:"@2x"},"37":{p:1,n:"chocolate-email-1_2x.png",g:"131",o:true,t:"@2x"},"45":{p:1,n:"pdp-sticky-nav_2x.png",g:"152",o:true,t:"@2x"},"52":{p:1,n:"pdp2.jpg",g:"162",o:true,t:"@1x"},"38":{p:1,n:"pdp-card.png",g:"135",o:true,t:"@1x"},"-1":{n:"PIE.htc"},"46":{p:1,n:"flagship-module.png",g:"109",o:true,t:"@1x"},"39":{p:1,n:"pdp-card_2x.png",g:"135",o:true,t:"@2x"},"53":{p:1,n:"pdp2_2x.jpg",g:"162",o:true,t:"@2x"}},h,[],d,[{n:"Concept A Homepage",o:"1",X:[0]},{n:"Concept A PDP",o:"120",X:[1]}],[{A:{a:[{p:4,h:"14"}]},o:"3",p:"600px",cA:false,Y:1440,Z:5683,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"39":{i:"39",n:"Arrow 1",z:0.07,b:[],a:[{f:"c",y:0,z:0.07,i:"a",e:181,s:171,o:"171"},{y:0.07,i:"a",s:181,z:0,o:"171",f:"c"}],f:30},"47":{i:"47",n:"Arrow 3",z:0.07,b:[],a:[{f:"c",y:0,z:0.07,i:"a",e:201,s:191,o:"178"},{y:0.07,i:"a",s:201,z:0,o:"178",f:"c"}],f:30},"26":{i:"26",n:"Build a Bundle",z:1.16,b:[],a:[{f:"p",y:0.18,z:0.08,i:"b",e:72,s:1259,o:"181"},{y:0.26,i:"b",s:72,z:0,o:"181",f:"c"},{f:"p",y:0.28,z:0.08,i:"b",e:0,s:1259,o:"182"},{y:1.06,i:"b",s:0,z:0,o:"182",f:"c"},{f:"p",y:1.08,z:0.08,i:"b",e:154,s:777,o:"183"},{y:1.16,i:"b",s:154,z:0,o:"183",f:"c"}],f:30},"19":{i:"19",n:"Product Hover",z:0.1,b:[],a:[{f:"c",y:0,z:0.1,i:"e",e:1,s:0,o:"175"},{y:0.1,i:"e",s:1,z:0,o:"175",f:"c"}],f:30},"108":{i:"108",n:"CTA Hover 2",z:0.05,b:[],a:[{f:"c",y:0,z:0.05,i:"a",e:140,s:153,o:"212"},{f:"c",y:0,z:0.03,i:"e",e:1,s:0,o:"211"},{f:"c",y:0,z:0.05,i:"a",e:250,s:240,o:"211"},{y:0.03,i:"e",s:1,z:0,o:"211",f:"c"},{y:0.05,i:"a",s:140,z:0,o:"212",f:"c"},{y:0.05,i:"a",s:250,z:0,o:"211",f:"c"}],f:30},"9":{i:"9",n:"Navigation Dropdown",z:0.1,b:[],a:[{f:"c",y:0,z:0.1,i:"e",e:1,s:0,o:"207"},{y:0.1,i:"e",s:1,z:0,o:"207",f:"c"}],f:30},"43":{i:"43",n:"Arrow 2",z:0.07,b:[],a:[{f:"c",y:0,z:0.07,i:"a",e:201,s:191,o:"167"},{y:0.07,i:"a",s:201,z:0,o:"167",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30},"59":{i:"59",n:"CTA Hover 1",z:0.05,b:[],a:[{f:"c",y:0,z:0.05,i:"a",e:120,s:136,o:"191"},{f:"c",y:0,z:0.02,i:"e",e:1,s:0,o:"190"},{f:"c",y:0,z:0.05,i:"a",e:280,s:268,o:"190"},{y:0.02,i:"e",s:1,z:0,o:"190",f:"c"},{y:0.05,i:"a",s:120,z:0,o:"191",f:"c"},{y:0.05,i:"a",s:280,z:0,o:"190",f:"c"}],f:30},"113":{i:"113",n:"Flagship Module",z:0.1,b:[],a:[{f:"c",y:0,z:0.1,i:"e",e:1,s:0,o:"186"},{f:"c",y:0,z:0.05,i:"e",e:1,s:0,o:"188"},{y:0.05,i:"e",s:1,z:0,o:"188",f:"158"},{y:0.1,i:"e",s:1,z:0,o:"186",f:"c"}],f:30},"83":{i:"83",n:"Email Confirmation",z:1.02,b:[],a:[{f:"c",y:0,z:0.04,i:"e",e:1,s:0,o:"197"},{f:"c",y:0.04,z:0.08,i:"e",e:1,s:0,o:"199"},{y:0.04,i:"e",s:1,z:0,o:"197",f:"c"},{y:0.12,i:"e",s:1,z:0,o:"199",f:"c"},{f:"c",y:0.14,z:0.08,i:"e",e:1,s:0,o:"195"},{y:0.22,i:"e",s:1,z:0,o:"195",f:"c"},{f:"c",y:0.24,z:0.08,i:"e",e:1,s:0,o:"196"},{y:1.02,i:"e",s:1,z:0,o:"196",f:"c"}],f:30}},bZ:180,O:["204","200","201","202","203","164","205","169","165","207","173","206","208","192","193","189","191","190","175","174","176","180","213","210","209","212","211","182","181","183","172","170","168","166","179","177","171","167","178","197","194","195","196","199","198","186","185","188","184","187"],n:"Untitled Layout","_":0,v:{"212":{h:"107",p:"no-repeat",x:"visible",a:153,q:"100% 100%",b:26,j:"absolute",bF:"209",z:6,k:"div",dB:"img",d:10,c:95,r:"inline"},"172":{c:398,d:248,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,N:1,bF:"170",A:"#D8DDE4",x:"visible",j:"absolute",O:1,k:"div",B:"#D8DDE4",C:"#D8DDE4",z:2,P:1,D:"#D8DDE4",aC:{a:[{b:"39",p:3,z:true,symbolOid:"2"}]},a:0,aD:{a:[{b:"39",p:3,z:false,symbolOid:"2"}]},b:0},"207":{h:"7",p:"no-repeat",x:"visible",a:-240,q:"100% 100%",b:-62,j:"absolute",dB:"img",z:2,k:"div",bF:"206",d:479,c:1350,r:"inline",e:0},"191":{h:"99",p:"no-repeat",x:"visible",a:136,q:"100% 100%",b:25,j:"absolute",bF:"189",z:6,k:"div",dB:"img",d:10,c:142,r:"inline"},"199":{h:"76",p:"no-repeat",x:"visible",a:15,q:"100% 100%",b:186,j:"absolute",dB:"img",z:3,k:"div",bF:"194",d:156,c:126,r:"inline",e:0},"167":{h:"29",p:"no-repeat",x:"visible",a:191,q:"100% 100%",b:206,j:"absolute",bF:"166",z:1,k:"div",dB:"img",d:28,c:58,r:"inline"},"213":{c:412,d:59,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,N:1,bF:"209",A:"#D8DDE4",x:"visible",j:"absolute",O:1,k:"div",B:"#D8DDE4",C:"#D8DDE4",z:7,P:1,D:"#D8DDE4",aC:{a:[{b:"108",p:3,z:true,symbolOid:"2"}]},a:0,aD:{a:[{b:"108",p:3,z:false,symbolOid:"2"}]},b:0},"186":{h:"109",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"185",d:270,c:364,r:"inline",e:0},"200":{x:"visible",k:"div",c:1440,d:40,z:37,e:1,a:1,j:"absolute",b:0},"173":{h:"51",p:"no-repeat",x:"visible",a:45,q:"100% 100%",b:39,j:"absolute",dB:"img",z:34,k:"div",c:1350,d:144,r:"inline",e:1},"208":{c:132,d:54,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,N:1,bF:"206",A:"#D8DDE4",x:"visible",j:"absolute",O:1,k:"div",B:"#D8DDE4",C:"#D8DDE4",z:3,P:1,D:"#D8DDE4",aC:{a:[{b:"9",p:3,z:true,symbolOid:"2"}]},a:10,aD:{a:[{b:"9",p:3,z:false,symbolOid:"2"}]},b:12},"192":{c:412,d:59,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,N:1,bF:"189",A:"#D8DDE4",x:"visible",j:"absolute",O:1,k:"div",B:"#D8DDE4",C:"#D8DDE4",z:7,P:1,D:"#D8DDE4",aC:{a:[{b:"59",p:3,z:true,symbolOid:"2"}]},a:-6,aD:{a:[{b:"59",p:3,z:false,symbolOid:"2"}]},b:0},"168":{c:398,d:248,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,N:1,bF:"166",A:"#D8DDE4",x:"visible",j:"absolute",O:1,k:"div",B:"#D8DDE4",C:"#D8DDE4",z:2,P:1,D:"#D8DDE4",aC:{a:[{b:"43",p:3,z:true,symbolOid:"2"}]},a:0,aD:{a:[{b:"43",p:3,z:false,symbolOid:"2"}]},b:0},"187":{c:157,d:16,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,N:1,bF:"185",A:"#D8DDE4",x:"visible",O:1,j:"absolute",k:"div",B:"#D8DDE4",dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",aC:{a:[{b:"113",p:3,z:true,symbolOid:"2"}]},P:1,a:104,aD:{a:[{b:"113",p:3,z:false,symbolOid:"2"}]},b:202},"201":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"200",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"174":{k:"div",x:"visible",c:415,d:794,z:3,a:121,j:"absolute",b:1079},"209":{k:"div",x:"visible",c:414,d:60,z:29,a:155,j:"absolute",b:3143},"193":{c:412,d:59,I:"None",J:"None",K:"None",g:"#000000",L:"None",M:0,N:0,bF:"189",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:4,P:0,D:"#D8DDE4",a:0,b:0},"169":{h:"160",p:"no-repeat",x:"visible",a:1,q:"100% 100%",b:40,j:"absolute",dB:"img",z:2,k:"div",c:1440,d:5559,r:"inline"},"180":{x:"hidden",k:"div",cW:{a:[{b:"26",p:3,z:false,symbolOid:"2"}]},c:786,d:620,z:4,a:655,j:"absolute",b:2727},"188":{h:"156",p:"no-repeat",x:"visible",a:90,q:"100% 100%",b:53,j:"absolute",dB:"img",z:2,k:"div",bF:"185",d:164,c:184,r:"inline",e:0},"202":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"200",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:611,y:"preserve",J:"None"},"175":{h:"15",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"174",d:794,c:415,r:"inline",e:0},"194":{k:"div",x:"visible",c:414,d:722,z:20,a:973,j:"absolute",b:4841},"181":{h:"20",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:692,j:"absolute",dB:"img",z:1,k:"div",bF:"180",d:548,c:426,r:"inline",e:1},"189":{k:"div",x:"visible",c:414,d:60,z:28,a:829,j:"absolute",b:597},"203":{b:7,z:9,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"200",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"120"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"PDP<br>",x:"visible",I:"None",a:726,y:"preserve",J:"None"},"176":{c:229,d:417,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,N:1,bF:"174",A:"#D8DDE4",x:"visible",j:"absolute",O:1,k:"div",B:"#D8DDE4",C:"#D8DDE4",z:2,P:1,D:"#D8DDE4",aC:{a:[{b:"19",p:3,z:true,symbolOid:"2"}]},a:93,aD:{a:[{b:"19",p:3,z:false,symbolOid:"2"}]},b:45},"195":{h:"78",p:"no-repeat",x:"visible",a:138,q:"100% 100%",b:162,j:"absolute",dB:"img",z:4,k:"div",bF:"194",d:147,c:115,r:"inline",e:0},"182":{h:"22",p:"no-repeat",x:"visible",a:222,q:"100% 100%",b:620,j:"absolute",dB:"img",z:2,k:"div",bF:"180",d:618,c:435,r:"inline",e:1},"204":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"200",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"177":{k:"div",x:"visible",c:400,d:250,z:7,a:987,j:"absolute",b:4409},"196":{h:"80",p:"no-repeat",x:"visible",a:246,q:"100% 100%",b:173,j:"absolute",dB:"img",z:5,k:"div",bF:"194",d:159,c:140,r:"inline",e:0},"164":{w:"",h:"12",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:39,dB:"img",j:"absolute",aA:{a:[{p:4,h:"14"}]},z:36,k:"div",d:144,i:"menu",c:1440,aP:"pointer",r:"inline",cW:{a:[{p:0}]}},"210":{c:412,d:59,I:"None",J:"None",K:"None",g:"#000000",L:"None",M:0,N:0,bF:"209",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:4,P:0,D:"#D8DDE4",a:0,b:0},"183":{h:"24",p:"no-repeat",x:"visible",a:390,q:"100% 100%",b:777,j:"absolute",dB:"img",z:3,k:"div",bF:"180",d:466,c:396,r:"inline",e:1},"170":{k:"div",x:"visible",c:400,d:250,z:5,a:53,j:"absolute",b:4409},"178":{h:"29",p:"no-repeat",x:"visible",a:191,q:"100% 100%",b:206,j:"absolute",bF:"177",z:1,k:"div",dB:"img",d:28,c:58,r:"inline"},"205":{h:"48",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:39,j:"absolute",dB:"img",z:10,k:"div",c:764,d:923,r:"inline",e:1},"197":{h:"74",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:1,j:"absolute",dB:"img",z:1,k:"div",bF:"194",d:722,c:414,r:"inline",e:0},"165":{h:"28",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:39,j:"absolute",dB:"img",z:1,k:"div",c:1440,d:5559,r:"none"},"211":{h:"97",p:"no-repeat",x:"visible",a:240,q:"100% 100%",b:24,j:"absolute",dB:"img",z:5,k:"div",bF:"209",d:11,c:26,r:"inline",e:0},"184":{h:"69",p:"no-repeat",x:"visible",a:1220,q:"100% 100%",b:5359,j:"absolute",dB:"img",aA:{a:[{b:"66",p:3,z:true,symbolOid:"2"}]},z:33,k:"div",d:240,c:221,r:"inline",e:1,aP:"pointer"},"171":{h:"29",p:"no-repeat",x:"visible",a:171,q:"100% 100%",b:206,j:"absolute",bF:"170",z:1,k:"div",dB:"img",d:28,c:58,r:"inline"},"179":{c:398,d:248,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,N:1,bF:"177",A:"#D8DDE4",x:"visible",j:"absolute",O:1,k:"div",B:"#D8DDE4",C:"#D8DDE4",z:2,P:1,D:"#D8DDE4",aC:{a:[{b:"47",p:3,z:true,symbolOid:"2"}]},a:0,aD:{a:[{b:"47",p:3,z:false,symbolOid:"2"}]},b:0},"190":{h:"97",p:"no-repeat",x:"visible",a:268,q:"100% 100%",b:24,j:"absolute",dB:"img",z:5,k:"div",bF:"189",d:11,c:26,r:"inline",e:0},"198":{c:328,d:60,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,N:1,bF:"194",A:"#D8DDE4",x:"visible",aA:{a:[{b:"83",p:3,z:false,symbolOid:"2"}]},O:1,j:"absolute",k:"div",dB:"button",z:6,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:1,a:42,b:264},"166":{k:"div",x:"visible",c:400,d:250,z:6,a:520,j:"absolute",b:4409},"206":{x:"visible",k:"div",c:154,d:82,z:35,e:1,a:285,j:"absolute",r:"inline",b:101},"185":{k:"div",x:"visible",c:364,d:270,z:30,a:998,j:"absolute",b:5268}}},{A:{a:[{p:4,h:"154"},{p:4,h:"155"}]},o:"122",p:"600px",cA:false,Y:1440,Z:5683,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"143":{i:"143",n:"Chocolate Bare",z:0.05,b:[],a:[{f:"c",y:0,z:0.05,i:"e",e:1,s:0,o:"219"},{f:"c",y:0,z:0.05,i:"e",e:0,s:0,o:"222"},{y:0.05,i:"e",s:1,z:0,o:"219",f:"c"},{y:0.05,i:"e",s:0,z:0,o:"222",f:"c"}],f:30},"147":{i:"147",n:"Arrow 1",z:0.07,b:[],a:[{f:"c",y:0,z:0.07,i:"a",e:181,s:171,o:"233"},{y:0.07,i:"a",s:181,z:0,o:"233",f:"c"}],f:30},"139":{i:"139",n:"Chocolate Back",z:0.05,b:[],a:[{f:"c",y:0,z:0.05,i:"e",e:0,s:1,o:"218"},{f:"c",y:0,z:0.05,i:"e",e:1,s:0,o:"222"},{f:"c",y:0,z:0.05,i:"e",e:0,s:0,o:"219"},{y:0.05,i:"e",s:0,z:0,o:"218",f:"c"},{y:0.05,i:"e",s:1,z:0,o:"222",f:"c"},{y:0.05,i:"e",s:0,z:0,o:"219",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30},"151":{i:"151",n:"Arrow 2",z:0.07,b:[],a:[{f:"c",y:0,z:0.07,i:"a",e:181,s:171,o:"230"},{y:0.07,i:"a",s:181,z:0,o:"230",f:"c"}],f:30}},bZ:180,O:["225","223","227","224","226","216","228","215","214","219","222","217","218","221","220","234","232","231","229","233","230"],n:"Untitled Layout","_":1,v:{"221":{c:53,d:56,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,N:1,bF:"217",A:"#D8DDE4",x:"visible",aA:{a:[{b:"139",p:3,z:false,symbolOid:"121"}]},O:1,j:"absolute",k:"div",dB:"button",z:5,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:1,a:-136,b:621},"234":{c:398,d:248,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,N:1,bF:"232",A:"#D8DDE4",x:"visible",j:"absolute",O:1,k:"div",B:"#D8DDE4",C:"#D8DDE4",z:2,P:1,D:"#D8DDE4",aC:{a:[{b:"147",p:3,z:true,symbolOid:"121"}]},a:0,aD:{a:[{b:"147",p:3,z:false,symbolOid:"121"}]},b:0},"226":{b:7,z:9,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"223",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"PDP<br>",x:"visible",I:"None",a:726,y:"preserve",J:"None"},"218":{h:"131",p:"no-repeat",x:"visible",a:115,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"217",d:647,c:348,r:"inline",e:1,f:-8},"230":{h:"29",p:"no-repeat",x:"visible",a:171,q:"100% 100%",b:206,j:"absolute",bF:"229",z:1,k:"div",dB:"img",d:28,c:58,r:"inline"},"222":{h:"133",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:6,j:"absolute",dB:"img",z:2,k:"div",bF:"217",d:618,c:618,r:"inline",e:0,f:-8},"214":{h:"135",p:"no-repeat",x:"visible",a:979,q:"100% 100%",b:40,j:"absolute",i:"PDPsidebar",z:9,k:"div",dB:"img",d:863,c:411,r:"inline",e:1},"227":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"223",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"219":{h:"140",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:5,j:"absolute",dB:"img",z:3,k:"div",bF:"217",d:618,c:618,r:"inline",e:0,f:-8},"231":{c:398,d:248,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,N:1,bF:"229",A:"#D8DDE4",x:"visible",j:"absolute",O:1,k:"div",B:"#D8DDE4",C:"#D8DDE4",z:2,P:1,D:"#D8DDE4",aC:{a:[{b:"151",p:3,z:true,symbolOid:"121"}]},a:0,aD:{a:[{b:"151",p:3,z:false,symbolOid:"121"}]},b:0},"223":{x:"visible",k:"div",c:1440,d:40,z:10,e:1,a:1,j:"absolute",b:0},"215":{h:"123",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:1,k:"div",c:1440,d:5683,r:"none"},"228":{h:"162",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:2,k:"div",c:1440,d:5683,r:"inline"},"232":{k:"div",x:"visible",c:400,d:250,z:3,a:53,j:"absolute",b:3611},"224":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"223",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:611,y:"preserve",J:"None"},"216":{h:"152",p:"no-repeat",x:"visible",i:"PDPmenu",q:"100% 100%",b:40,a:0,j:"absolute",z:11,k:"div",dB:"img",d:112,c:1440,r:"inline"},"229":{k:"div",x:"visible",c:400,d:250,z:4,a:990,j:"absolute",b:3611},"220":{c:53,d:56,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,N:1,bF:"217",A:"#D8DDE4",x:"visible",aA:{a:[{b:"143",p:3,z:false,symbolOid:"121"}]},O:1,j:"absolute",k:"div",dB:"button",z:4,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:1,a:-65,b:621},"233":{h:"29",p:"no-repeat",x:"visible",a:171,q:"100% 100%",b:206,j:"absolute",bF:"232",z:1,k:"div",dB:"img",d:28,c:58,r:"inline"},"225":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"223",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"217":{k:"div",x:"visible",c:618,d:647,z:5,a:254,j:"absolute",b:278}}}],{},g,{p:[[0,0,0.25,0.46,0.45,0.94,1,1]],"158":[[0,0,0.42,0,-0.01449,1.0042,1,1]]},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
