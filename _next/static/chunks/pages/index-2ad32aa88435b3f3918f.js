(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4021:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return A},default:function(){return J}});var i=n(5893),r=n(6010),a=n(6486),s=n(9008),o=n(7294),l=n(3854),c=n(3280),d=n(4020),u=n(5621),h=n(5108),m=function(){return(0,h.I0)()},v=h.v9,p=function(e,t){var n,i,r=(null!==(n=e.name+e.type+e.tags+(null===(i=e.owner)||void 0===i?void 0:i.name))&&void 0!==n?n:"").toLowerCase();return!t.split(/\s+/).reduce((function(e,t){return e&&r.includes(t)}),!0)},f=[{color:"text-gray-500",text:"-"},{color:"text-yellow-900",text:"D"},{color:"text-green-700",text:"C"},{color:"text-blue-600",text:"B"},{color:"text-pink-600",text:"A"},{color:"text-yellow-500",text:"S"}],g=function(e){var t,n,a=e.perk,s=e.isAnimated,o=v((function(e){return e.cheatsheet.filter})).toLowerCase(),l=v((function(e){return e.cheatsheet.selectedPerk===a})),h=null!==(t=v((function(e){return e.userRatings[a.id]})))&&void 0!==t?t:0,g=d.ZP.endpoints.getRatings.useQueryState(void 0,{selectFromResult:function(e){var t,n=e.data;return null!==(t=null===n||void 0===n?void 0:n[a.id])&&void 0!==t?t:0}}),x=m();return(0,i.jsx)(c.E.div,{className:(0,r.Z)({hidden:p(a,o)}),layout:s,children:(0,i.jsx)("button",{className:(0,r.Z)("block relative w-full h-40 border rounded transition-transform transform","hover:border-gray-500 hover:bg-gray-800 hover:scale-102",l?"border-gray-600 bg-gray-800":"border-gray-800"),type:"button",onClick:function(){x((0,u.xs)(a))},children:(0,i.jsxs)("div",{className:"h-full",children:[(0,i.jsx)("img",{className:"mx-auto",src:"/images/perk/".concat(a.type,"/").concat(null!==(n=a.owner)&&void 0!==n?n:"general","/iconPerks_").concat(a.id,".png"),alt:a.name,width:"120",height:"120"}),(0,i.jsx)("div",{className:(0,r.Z)("absolute top-1 left-2 text-lg font-bold italic",f[h||Math.round(g)].color),children:f[h||Math.round(g)].text}),(0,i.jsx)("div",{className:"absolute bottom-0.5 w-full px-1 text-center",children:a.name})]})})})},x=function(e){var t=e.perks,n=(0,o.useState)(!0),a=n[0],s=n[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"flex items-center py-0.5 justify-end mb-2",children:["Animations:\xa0",(0,i.jsxs)("button",{className:(0,r.Z)("flex justify-end items-center w-16 border rounded-full border-gray-600 p-0.5",a?"bg-gray-800":"flex-row-reverse"),type:"button",onClick:function(){s((function(e){return!e}))},children:[(0,i.jsx)("div",{className:"flex-grow text-center leading-none",children:a?"On":"Off"}),(0,i.jsx)("div",{className:"w-5 h-5 rounded-full bg-gray-500"})]})]}),(0,i.jsx)("div",{className:"grid grid-cols-perk-grid content-start gap-2",children:t.map((function(e){return(0,i.jsx)(g,{perk:e,isAnimated:a},e.id)}))})]})},b=n(1565),y=n(7480),j=n(8456),w=n.n(j),k=n(6548),N=n.n(k),S=n(2718),T={bleeding:{name:"Hemorrhage",description:"The Survivor bleeds in great quantity, making them easier to track."},bloodLust:{name:"Bloodlust",description:"Activates on a Killer after being in a chase for a certain amount of time. Bloodlust increases the Killer movement Speed."},broken:{name:"Broken",description:"The Survivor is heavily damaged and cannot be healed past the injured health state."},cleansing:{name:"Cursed",description:"The Survivor suffers a secret penalty related to a Hex Totem, cleansing the Hex Totem releases the curse."},deepWound:{name:"Deep Wound",description:"The Survivor is heavily damaged and is gradually getting closer to the dying state. If the Survivor takes any damage while afflicted by Deep Wound, or if the Deep Wound timer ends, The Survivor is immediately put into the dying state. The Deep Wound timer stops temporarily any time the Survivor is mending or running."},endurance:{name:"Endurance",description:"The Survivor is hardened, and can resist a hit that would put them into the dying state. Once the Survivor resists a hit, this status effect is lost and it is replaced by the Deep Wound status effect."},exhausted:{name:"Exhausted",description:"The Survivor cannot use movement speed abilities. The Survivor recovers from the Exhausted status effect after some time."},exposed:{name:"Exposed",description:"The Survivor is in peril, they can be put into the dying state with a single basic attack, even if they are healthy."},hindered:{name:"Hindered",description:"The character base Movement speed is decreased."},incapacitated:{name:"Incapacitated",description:"The Survivor is unable to complete most basic actions. This include healing and mending themselves and other Survivors, repairing and sabotaging generators, cleansing Totems, searching chests, and using, picking up, and dropping items."},madness:{name:"Madness",description:"The Survivor suffers various mental afflictions such as hallucinations."},mangled:{name:"Mangled",description:"The Survivor is heavily injured and requires more time to be fully healed, at which time this status effect is removed."},oblivious:{name:"Oblivious",description:"The Survivor is oblivious to the imminent danger of a nearby Killer. They do not hear The Killer's Terror Radius and they are not considered as being within the Terror Radius for power or perk effects."},speed:{name:"Haste",description:"The character base Movement Speed is increased."},undetectable:{name:"Undetectable",description:"The Killer enters a stealth-like mode which surpresses their Red Stain and Terror Radius, and blocks all Survivor aura-reading abilities."},vision:{name:"Blindness",description:"Character's aura detection is impaired."}},O={aceVisconti:"Ace Visconti",adamFrancis:"Adam Francis",ashWilliams:"Ash Williams",blight:"Blight",cannibal:"Cannibal",cherylMason:"Cheryl Mason",claudetteMorel:"Claudette Morel",clown:"Clown",davidKing:"David King",davidTapp:"David Tapp",deathslinger:"Deathslinger",demogorgon:"Demogorgon",doctor:"Doctor",dwightFairfield:"Dwight Fairfield",elodieRakoto:"\xc9lodie Rakoto",executioner:"Executioner",felixRichter:"Felix Richter",fengMin:"Feng Min",ghostFace:"Ghost Face",hag:"Hag",hillbilly:"Hillbilly",huntress:"Huntress",jakePark:"Jake Park",janeRomero:"Jane Romero",jeffreyJohansen:"Jeffrey Johansen",kateDenson:"Kate Denson",laurieStrode:"Laurie Strode",legion:"Legion",megThomas:"Meg Thomas",nancyWheeler:"Nancy Wheeler",neaKarlsson:"Nea Karlsson",nightmare:"Nightmare",nurse:"Nurse",oni:"Oni",pig:"Pig",plague:"Plague",quentinSmith:"Quentin Smith",shape:"Shape",spirit:"Spirit",steveHarrington:"Steve Harrington",trapper:"Trapper",trickster:"Trickster",twins:"Twins",williamOverbeck:"William Overbeck",wraith:"Wraith",yuiKimura:"Yui Kimura","yun-jinLee":"Yun-Jin Lee",zarinaKassir:"Zarina Kassir"},D=n(2809),P=n(4935),R=n(2854),C=n.n(R);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,D.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(){function e(e){var t=e.data||(e.data={}),n=e.attributes,i=n.class,r=void 0===i?[]:i,a=(0,P.Z)(n,["class"]);t.hName="dbd-".concat(e.name),t.hProperties=M(M({},a),{},{className:r})}return function(t){C()(t,["textDirective","leafDirective","containerDirective"],e)}},F={ul:function(e){var t=e.children;return(0,i.jsx)("ul",{className:"list-disc ml-4",children:t})},"dbd-val":function(e){var t=e.values,n=e.unit,r=t.split(" ");return(0,i.jsxs)("strong",{children:[r[0]&&(0,i.jsx)("span",{className:"text-yellow-400",children:r[0]}),r[1]&&(0,i.jsxs)(i.Fragment,{children:["\xa0/\xa0",(0,i.jsx)("span",{className:"text-yellow-400",children:r[1]})]}),r[2]&&(0,i.jsxs)(i.Fragment,{children:["\xa0/\xa0",(0,i.jsx)("span",{className:"text-yellow-400",children:r[2]})]}),n&&(0,i.jsxs)("span",{className:"text-yellow-400",children:[1===n.length?"":"\xa0",n]})]})},"dbd-status":function(e){var t=e.id,n=T[t],r=n.name,a=void 0===r?"":r,s=n.description,o=void 0===s?"":s;return(0,i.jsx)("span",{className:"border-b border-dotted",title:o,children:a||t})}},K=function(e){var t=e.perkId,n=(0,o.useState)(0),a=n[0],s=n[1],l=v((function(e){return e.userRatings[t]})),c=d.ZP.endpoints.getRatings.useQueryState(void 0,{selectFromResult:function(e){var n=e.data;return null===n||void 0===n?void 0:n[t]}}),u=(0,d.Tw)(),h=(0,b.Z)(u,1)[0],p=m(),f="star-".concat((0,y.x0)()),g=function(){s(0)},x=a||l||c;return(0,i.jsxs)("div",{className:(0,r.Z)("mt-0.5",{"text-yellow-400":a||l}),children:[[0,1,2,3,4].map((function(e){return(0,i.jsxs)("svg",{className:"h-5 inline-block align-top",viewBox:"0 0 576 512",onClick:function(n){n.stopPropagation(),function(e){var n;h({id:t,rating:e});var i=JSON.parse(null===(n=localStorage)||void 0===n?void 0:n.getItem("userRatings"));"object"===typeof i&&null!==i||(i={}),i[t]=e,localStorage.setItem("userRatings",JSON.stringify(i)),p((0,S.IO)({id:t,rating:e}))}(e+1)},onMouseEnter:function(){s(e+1)},onMouseLeave:g,children:[(0,i.jsxs)("mask",{id:"".concat(f,"-").concat(e),children:[(0,i.jsx)("rect",{x:"0",y:"0",width:"576",height:"512",fill:"black"}),(0,i.jsx)("path",{fill:"white",d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"})]}),(0,i.jsx)("rect",{x:"0",y:"0",width:"576",height:"512",fill:"gray",mask:"url(#".concat(f,"-").concat(e,")"),opacity:"0.4"}),(0,i.jsx)("rect",{x:"0",y:"0",width:Math.max(0,Math.min(576,576*(x-e))),height:"512",fill:"currentColor",mask:"url(#".concat(f,"-").concat(e,")")})]},e)})),l>0&&(0,i.jsxs)("span",{className:"ml-2",children:["You rated this ",l," stars!"]})]})},L=function(e){var t=e.perkId,n=d.ZP.endpoints.getRatings.useQueryState(void 0,{selectFromResult:function(e){var n=e.data;return null===n||void 0===n?void 0:n[t]}});return(0,i.jsxs)("div",{className:"text-sm text-gray-300",children:["Average Rating: ",n,"\u2605"]})},Z=function(e){var t,n=e.perk;return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"p-2 border-b border-yellow-400 text-5xl",children:[(0,i.jsx)("span",{className:"text-6xl",children:n.name[0]}),n.name.substring(1)]}),(0,i.jsxs)("div",{className:"p-2 bg-black",children:[(0,i.jsx)("div",{className:(0,r.Z)("capitalize italic font-bold",{"text-red-500":"killer"===n.type,"text-blue-500":"survivor"===n.type}),children:"".concat(null!==(t=O[n.owner])&&void 0!==t?t:"General"," ").concat(n.type," Perk")}),(0,i.jsxs)("div",{className:"pb-1 mb-2 border-b border-gray-700",children:[(0,i.jsx)(K,{perkId:n.id}),(0,i.jsx)(L,{perkId:n.id})]}),(0,i.jsx)("div",{className:"space-y-4",children:(0,i.jsx)(w(),{plugins:[N(),_],components:F,children:n.description})}),n.flavor&&(0,i.jsx)("div",{className:"mt-4 italic font-light text-yellow-100",children:n.flavor})]})]})},I=function(){var e=(0,o.useState)(0),t=e[0],n=e[1];return(0,o.useEffect)((function(){var e,t=function(){var e,t;n(null!==(e=null===(t=window)||void 0===t?void 0:t.pageYOffset)&&void 0!==e?e:0)};return null===(e=window)||void 0===e||e.addEventListener("scroll",t),t(),function(){var e;return null===(e=window)||void 0===e?void 0:e.removeEventListener("scroll",t)}})),t},W=function(){var e=m(),t=v((function(e){return e.cheatsheet.filterInputValue})),n=(0,o.useMemo)((function(){return(0,a.debounce)((function(t){return e((0,u.Tv)(t))}),200)}),[e]);return(0,i.jsxs)("div",{className:"relative text-black",children:[(0,i.jsx)("input",{className:"w-full rounded px-1 py-0.5",value:t,onChange:function(t){e((0,u.QE)(t.target.value)),n(t.target.value)}}),t&&(0,i.jsx)(l.VLi,{className:"w-5 h-5 absolute top-1 right-1.5",onClick:function(){e((0,u.Tv)("")),e((0,u.QE)(""))}})]})},H=function(){var e=I();return(0,i.jsx)("button",{type:"button",className:(0,r.Z)("w-12 h-12 p-2.5 fixed bottom-3 right-3 md:hidden rounded-full bg-blue-400 transition transform","md:hidden",e<100?"translate-y-6 opacity-0":"translate-y-0 opacity-100"),onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},children:(0,i.jsx)(l.sIl,{className:"w-full h-full m-auto"})})},A=!0,J=function(e){var t=e.perks,n=v((function(e){return e.cheatsheet.selectedPerk})),r=m();(0,d.NS)(),(0,o.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userRatings"));"object"===typeof e&&null!==e&&r((0,S.cb)(e))}),[r]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.default,{children:[(0,i.jsx)("title",{children:"Dex by Daylight"}),(0,i.jsx)("meta",{name:"description",content:"A reference website for perks in the game, Dead by Daylight."})]}),(0,i.jsx)("div",{className:"p-2 border-b border-gray-700",children:(0,i.jsx)("h1",{className:"text-4xl font-light",children:"Dex by Daylight"})}),(0,i.jsxs)("div",{className:"flex p-2",children:[(0,i.jsxs)("div",{className:"flex-1",children:[(0,i.jsx)("div",{className:"sticky top-0 z-10 md:hidden py-1 bg-black",children:(0,i.jsx)(W,{})}),(0,i.jsx)(x,{perks:t})]}),(0,i.jsx)("div",{className:"hidden md:block w-96 ml-2",children:(0,i.jsxs)("div",{className:"sticky top-2",children:[(0,i.jsx)(W,{}),n?(0,i.jsx)(Z,{perk:n}):(0,i.jsx)("div",{className:"w-full opacity-30",children:(0,i.jsx)("img",{className:"m-auto",src:"/images/iconHelp_obsession.png",alt:"Click on a perk to see details."})})]})})]}),n&&(0,i.jsxs)("div",{className:"w-screen h-screen fixed top-0 left-0 z-40 md:hidden bg-black bg-opacity-50 flex flex-col justify-center p-2",onClick:function(){r((0,u.xs)(null))},children:[(0,i.jsx)("div",{className:"bg-black",children:(0,i.jsx)(Z,{perk:n})}),(0,i.jsx)("div",{className:"text-center",children:"Click anywhere to close."})]}),(0,i.jsx)(H,{})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4021)}])}},function(e){e.O(0,[556,662,978,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);