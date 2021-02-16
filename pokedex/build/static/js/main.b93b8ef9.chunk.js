(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{43:function(n,e,t){},66:function(n,e,t){},67:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t(1),c=t.n(i),o=t(34),r=t.n(o),d=(t(43),t(13)),s=t(4),l=t(10),b=t(2),x=t(11),u=t(3),p=c.a.createContext();function j(){var n=Object(b.a)(["\n    cursor: pointer;\n    width: 150px;\n    font-family: 'Pokemon8bit';\n    border: none;\n    padding: 0.8em;\n    box-shadow: inset 2px 2px black, 2px 2px black;\n    font-size: x-small;\n    :hover {\n            background-color: white;\n        }\n\n    @media only screen \n  and (min-device-width: 320px) \n  and (max-device-width: 480px)\n  and (-webkit-min-device-pixel-ratio: 2) { \n      \n      display: none;\n  }\n\n"]);return j=function(){return n},n}function m(){var n=Object(b.a)(["\n    font-family: 'Ketchum';\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: #9D0101;\n    padding: 0 1em 0;\n    box-shadow: inset 2px 2px black, 2px 2px black;\n    \n    .mobile {\n        display: none;\n    }\n\n    @media only screen \n  and (min-device-width: 320px) \n  and (max-device-width: 480px)\n  and (-webkit-min-device-pixel-ratio: 2) { \n      flex-direction: column;\n      .mobile {\n        display: block;\n      }\n      .addToPokedex {\n          display: block;\n      }\n  }\n\n    h1 {\n        font-size: 3em;\n        color: #fbd743;\n        text-shadow: 3px 3px royalblue;\n        flex-grow: 100;\n    }\n"]);return m=function(){return n},n}var h=u.a.div(m()),f=u.a.button(j());function O(n){var e=Object(s.f)(),t=function(){"goBack"===n.path?e.goBack():e.push(n.path)},c=Object(i.useContext)(p),o=c.list,r=c.setList,d=c.pokedex,l=c.setPokedex;if(!o[0]&&!d[0])return Object(a.jsx)(h,{children:Object(a.jsx)("h1",{children:"Loading..."})});return Object(a.jsxs)(h,{children:[Object(a.jsx)(f,{onClick:t,children:n.routeButton}),Object(a.jsx)("h1",{children:n.name}),"info"===n.type?Object(a.jsx)(f,{className:"addToPokedex",onClick:function(){if(-1===d.findIndex((function(e){return e.data.id===n.id}))){l([].concat(Object(x.a)(d),[n.pokemon]));var e=o.filter((function(e){return e.data.id!==n.id}));r(e)}else{r([].concat(Object(x.a)(o),[n.pokemon]));var t=d.filter((function(e){return e.data.id!==n.id}));l(t)}},children:n.buttonText}):Object(a.jsx)("div",{}),Object(a.jsx)(f,{className:"mobile",onClick:t,children:n.routeButton})]})}function k(){var n=Object(b.a)(["\n        margin: 0 17px 6px;\n        font-family: 'Pokemon8bit';\n        font-size: 0.6em;\n        border: none;\n        box-shadow: inset 2px 2px black, 2px 2px black, 3px 3px white;\n        cursor: pointer;\n\n        :hover {\n            background-color: white;\n        }\n    "]);return k=function(){return n},n}function g(){var n=Object(b.a)(["\n        margin:0 6px;\n        font-family: 'Pokemon8bit';\n        font-size: 0.6em;\n        border: none;\n        box-shadow: inset 2px 2px black, 2px 2px black, 3px 3px white;\n        cursor: pointer;\n\n        :hover {\n            background-color: white;\n        }\n\n        \n    "]);return g=function(){return n},n}function v(){var n=Object(b.a)(["\n        height: 80%;\n        width: 100%;\n        position: relative;\n        img {\n            padding: 1em;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n        }\n\n        div {\n            margin: auto;\n            width: 10em;\n            height: 10em;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            background: linear-gradient( rgba(255,0,0,0.2) 48%,rgba(0,0,0,0.5) 2%,rgba(255,255,255,0.2) 50%);\n            border-radius: 50%;\n            border: 2px solid rgba(0,0,0,0.5);\n            box-shadow: 5px 5px 4px rgba(255,255,255,0.2);\n        }\n        \n        :hover{\n            div{\n            -webkit-animation: rotate-center 0.6s ease-in-out both;\n\t        animation: rotate-center 0.6s ease-in-out both;\n            }\n\n            img {\n                -webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\n                animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\n                top: 10%;\n                left: 25%;\n            }\n        }\n    "]);return v=function(){return n},n}function w(){var n=Object(b.a)(["\n        display: flex;\n        margin: 8px 12px;\n    "]);return w=function(){return n},n}function y(){var n=Object(b.a)(["\n        \n        width: 250px;\n        display: flex;\n        flex-direction: column;\n        margin: 16px 16px;\n        text-shadow: 2px 2px 3px lightsteelblue;\n        box-shadow: inset 2px 2px black, 2px 2px black, 10px 10px  5px black;\n        background: linear-gradient( #e1e3f5 2%, white 98%);\n\n        :hover {\n            background: whitesmoke;\n        }\n    "]);return y=function(){return n},n}var C=u.a.div(y()),P=u.a.div(w()),T=u.a.div(v()),_=u.a.button(g()),N=u.a.button(k());function S(n){var e=Object(i.useContext)(p),t=e.list,c=e.setList,o=e.pokedex,r=e.setPokedex,d=e.compare,l=e.setCompare,b=Object(s.f)();return Object(a.jsxs)(C,{children:[Object(a.jsx)("h3",{children:n.name.toUpperCase()}),Object(a.jsxs)(T,{children:[Object(a.jsx)("div",{}),Object(a.jsx)("img",{src:n.img,alt:n.name})]}),Object(a.jsxs)(P,{children:[Object(a.jsx)(_,{onClick:function(){if(-1===o.findIndex((function(e){return e.data.id===n.id}))){r([].concat(Object(x.a)(o),[n.pokemon]));var e=t.filter((function(e){return e.data.id!==n.id}));c(e)}else{c([].concat(Object(x.a)(t),[n.pokemon]));var a=o.filter((function(e){return e.data.id!==n.id}));r(a)}},children:n.buttonText}),Object(a.jsx)(_,{onClick:function(){b.push("/Pokedex/poke-info/".concat(n.name))},children:"Ver informa\xe7\xf5es"})]}),Object(a.jsx)(N,{onClick:function(){d.length<2&&l([].concat(Object(x.a)(d),[n.pokemon]))},children:"Comparar"})]})}var B=t.p+"static/media/arrowLeft.467bb1fd.svg";function I(){var n=Object(b.a)(["\n        height: 80%;\n        width: 100%;\n        -webkit-animation: scale-up-center-loading 2.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both infinite;\n                animation: scale-up-center-loading 2.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both infinite;\n\n        .ball {\n            position: relative;\n            margin: auto;\n            width: 10em;\n            height: 10em;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            background: linear-gradient(red 50%,white 50%);\n            border-radius: 50%;\n\n            box-shadow: 5px 5px 4px rgba(255,255,255,0.2);\n            \n            -webkit-animation: rotate-center-loading 2.5s ease-in-out both infinite;\n\t        animation: rotate-center-loading 2.5s ease-in-out both infinite;\n            }\n            .whiteCenter {\n                position: absolute;\n                background-color: white;\n                border: 2px solid rgba(0,0,0,0.2);\n                border-radius: 50%;\n                width: 2em;\n                height: 2em;\n            }\n            \n          .blackCenter {\n            position: absolute;\n            background-color: black;\n            border-radius: 50%;\n            width: 3em;\n            height: 3em;\n          }\n\n          .line{\n              background-color:black;\n              width:10em;\n              height:1em;\n          }\n    "]);return I=function(){return n},n}var L=u.a.div(I());function z(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(L,{children:Object(a.jsxs)("div",{className:"ball",children:[Object(a.jsx)("div",{className:"line"}),Object(a.jsx)("div",{className:"blackCenter"}),Object(a.jsx)("div",{className:"whiteCenter"})]})}),Object(a.jsx)("p",{children:"Loading ..."})]})}function D(){var n=Object(b.a)(["\n        margin:0 6px;\n        font-family: 'Pokemon8bit';\n        font-size: 0.6em;\n        border: none;\n        box-shadow: inset 2px 2px black, 2px 2px black;\n        cursor: pointer;\n\n        :hover {\n            background-color: white;\n        }\n\n        \n    "]);return D=function(){return n},n}function V(){var n=Object(b.a)(["\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    box-shadow: inset 2px 2px black, 2px 2px black;\n\n    div {\n    display: flex;\n    background-color: #9D0101;\n    color: whitesmoke;\n    padding: 0 1em 0;\n    align-items: center;\n    justify-content: space-between;\n}\n    \n    .mobile{\n        display: none;\n    }\n    @media only screen \n  and (min-device-width: 320px) \n  and (max-device-width: 480px)\n  and (-webkit-min-device-pixel-ratio: 2) { \n    height: auto;\n\n    .desktop{\n        display:none;\n    }\n    .mobile {\n    display: flex;\n    flex-direction:column;\n\n        div,img,p {\n            margin: 0 8px;\n            padding: 0;\n        }\n        \n        img {\n            height: 5em;\n        }\n\n        .pokemonDiv{\n            display: flex;\n            flex-direction: column;\n        }\n    }\n  }\n\n\n"]);return V=function(){return n},n}var E=u.a.div(V()),A=u.a.button(D());function F(){var n=Object(i.useContext)(p),e=n.compare,t=n.setCompare,c=Object(s.f)(),o=function(){2===e.length&&c.push("/Pokedex/compare")},r=function(){t([])};return e[0]?Object(a.jsxs)(E,{children:[Object(a.jsxs)("div",{className:"desktop",children:[Object(a.jsx)(A,{onClick:o,children:"Comparar"}),Object(a.jsx)("p",{children:e[0].data.name}),Object(a.jsx)("img",{alt:e[0].data.name,src:e[0].data.sprites.front_default}),Object(a.jsx)("p",{children:"VS"}),Object(a.jsx)("img",{alt:e[1]?e[1].data.name:null,src:e[1]?e[1].data.sprites.front_default:null}),Object(a.jsx)("p",{children:e[1]?e[1].data.name:"Selecione outro pokemon"}),Object(a.jsx)(A,{onClick:r,children:" Limpar"})]}),Object(a.jsxs)("div",{className:"mobile",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(A,{onClick:o,children:"Comparar"}),Object(a.jsx)(A,{onClick:r,children:" Limpar"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:e[0].data.name}),Object(a.jsx)("img",{alt:e[0].data.name,src:e[0].data.sprites.front_default})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:e[1]?e[1].data.name:"Selecione outro pokemon"}),Object(a.jsx)("img",{alt:e[1]?e[1].data.name:"null",src:e[1]?e[1].data.sprites.front_default:null})]})]})]}):Object(a.jsx)("div",{})}function R(){var n=Object(b.a)(["\n    margin:1em 2em;\n    width: 2em;\n    height: 2em;\n    cursor: pointer;\n"]);return R=function(){return n},n}function J(){var n=Object(b.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return J=function(){return n},n}function M(){var n=Object(b.a)(["\n    display: flex;\n    justify-content: space-around;\n    flex-flow: wrap;\n"]);return M=function(){return n},n}function U(){var n=Object(b.a)(["\n    margin-bottom: 200px;\n"]);return U=function(){return n},n}var K=u.a.div(U()),q=u.a.div(M()),G=u.a.div(J()),H=u.a.img(R());function Q(){var n=Object(i.useContext)(p),e=n.list,t=n.pokedex,c=n.offset,o=n.setOffset,r=n.pokemonsTotal,d=n.setPokemonsTotal,s=e.sort((function(n,e){return n.data.id-e.data.id})),b=Object(i.useState)(!0),x=Object(l.a)(b,2),u=x[0],j=x[1];Object(i.useEffect)((function(){u?j(!1):h[0]||m()}),[t]);var m=function(){c<=1e3&&o(c+20),r<=c+19&&d(r+20)},h=s.filter((function(n){return n.data.id>c&&n.data.id<=c+20})).map((function(n){return Object(a.jsx)(S,{id:n.data.id,name:n.data.name,img:n.data.sprites.front_default,pokemon:n,buttonText:"Adicionar \xe0 Pok\xe9dex"},n.data.id)}));return Object(a.jsxs)(K,{children:[Object(a.jsx)(O,{routeButton:"Abrir Pok\xe9dex",path:"/Pokedex/pokedex",name:"Lista de Pokemons"}),Object(a.jsxs)(G,{children:[c>0?Object(a.jsx)(H,{src:B,onClick:function(){c>0&&o(c-20)}}):null,Object(a.jsxs)("p",{children:["P\xe1gina ",c/20+1]}),Object(a.jsx)(H,{style:{transform:"rotate(180deg)"},src:B,onClick:m})]}),s[r-t.length]?Object(a.jsx)(q,{children:h[0]?h:Object(a.jsxs)("div",{children:[Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"Voc\xea j\xe1 adicionou todos os Pokemons desta p\xe1gina \xe0 sua Pok\xe9dex"]})}):Object(a.jsx)(z,{}),Object(a.jsx)(F,{})]})}function W(){var n=Object(b.a)(["\n     display: flex;\n    justify-content: space-around;\n    flex-flow: wrap;\n\n"]);return W=function(){return n},n}var X=u.a.div(W());function Y(){var n=Object(i.useContext)(p).pokedex;return void 0===n?Object(a.jsx)(z,{}):Object(a.jsxs)("div",{children:[Object(a.jsx)(O,{path:"/Pokedex",routeButton:"Voltar para lista",name:"Pok\xe9dex"}),Object(a.jsx)(X,{children:n.map((function(n){return Object(a.jsx)(S,{id:n.data.id,name:n.data.name,img:n.data.sprites.front_default,pokemon:n,buttonText:"Remover da Pok\xe9dex"},n.data.id)}))}),Object(a.jsx)(F,{})]})}var Z=t(19),$=t.n(Z);function nn(n,e){var t=Object(i.useState)(e),a=Object(l.a)(t,2),c=a[0],o=a[1];return Object(i.useEffect)((function(){$.a.get(n).then((function(n){o(n)})).catch((function(n){console.log(n)}))}),[n]),c}function en(){var n=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n    background-color: whitesmoke;\n    box-shadow: inset 2px 2px black, 2px 2px black, 10px 10px  5px black;\n"]);return en=function(){return n},n}function tn(){var n=Object(b.a)(["\n    box-shadow: inset 2px 2px black, 2px 2px black, 3px 3px white;\n    width: 6em;\n    text-align:center;\n"]);return tn=function(){return n},n}function an(){var n=Object(b.a)(["\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: whitesmoke;\n    \n\n    .normal {\n      background-color: #b3966c;\n      color: white;\n    }\n\n    .fighting {\n      background-color: \t#ec777d;\n      color: white;\n    }\n    \n    .flying {\n      background-color: #838bc9;\n      color:white;\n    }\n\n    .poison {\n      background-color: #b464a1;\n      color:white;\n    }\n\n    .ground {\n      background-color: #e5b465;\n      color: white;\n    }\n\n    .rock {\n      background-color: \t#aaa063;\n      color:white;\n    }\n\n    .grass {\n      background-color: #7ac85b;\n      color: white;\n    }\n\n    .bug {\n      background-color: #96ad39;\n      color: white;\n    }\n\n    .ghost {\n      background-color: \t#836e99;\n      color:white;\n    }\n\n    .steel {\n      background-color: #8cb4be;\n      color:white;\n    }\n\n    .fire {\n      background-color: #fd7754;\n      color: white;\n    }\n\n    .water {\n      background-color: #4fc8db;\n      color: white;\n    }\n\n    .electric {\n      background-color:\t#fec30f;\n      color:white;\n    }\n\n    .psychic {\n      background-color: #f36d90;\n      color: white;\n    }\n\n    .fairy {\n      background-color: #ff76af;\n      color: white;\n    }\n    .ice {\n      background-color: #6edcd1;\n      color: white;\n    }\n    .dragon {\n      background-color: #5b63ab;\n      color: white;\n    }\n    .dark {\n      background-color: #5a504f;\n      color: white;\n    }\n    box-shadow: inset 2px 2px black, 2px 2px black, 10px 10px  5px black;\n"]);return an=function(){return n},n}function cn(){var n=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 75%;\n    width: 300px;\n    margin: 0 16px;\n"]);return cn=function(){return n},n}function on(){var n=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n    background-color: whitesmoke;\n    height: 75%;\n    width: 300px;\n    margin: 0 16px;\n    text-align: left;\n    box-shadow: inset 2px 2px black, 2px 2px black, 10px 10px  5px black;\n\n    h2 {\n        text-align: center;\n    }\n\n    p {\n        padding: 0 0 0 16px;\n    }\n\n"]);return on=function(){return n},n}function rn(){var n=Object(b.a)(["\n    background-color: whitesmoke;\n    height: 25vh;\n    box-shadow: inset 2px 2px black, 2px 2px black, 10px 10px  5px black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n        img {\n            padding: 1em;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n        }\n\n        div {\n            margin: auto;\n            width: 10em;\n            height: 10em;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            background: linear-gradient( rgba(255,0,0,0.2) 48%,rgba(0,0,0,0.2) 2%,rgba(255,255,255,0.2) 50%);\n            border-radius: 50%;\n            border: 2px solid rgba(0,0,0,0.2);\n            box-shadow: 5px 5px 4px rgba(255,255,255,0.2);\n        }\n        \n        :hover{\n            div{\n            -webkit-animation: rotate-center 0.6s ease-in-out both;\n\t        animation: rotate-center 0.6s ease-in-out both;\n            }\n\n            img {\n                -webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\n                animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\n                top: 14%;\n                left: 29%;\n            }\n        }\n\n"]);return rn=function(){return n},n}function dn(){var n=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n    height: 75%;\n    width: 300px;\n    margin: 0 16px;\n    justify-content: space-between;\n"]);return dn=function(){return n},n}function sn(){var n=Object(b.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 16px;\n    height: 80vh;\n    font-size:0.9em;\n\n    @media only screen \n  and (min-device-width: 320px) \n  and (max-device-width: 480px)\n  and (-webkit-min-device-pixel-ratio: 2) {\n\n    flex-direction:column;\n    justify-content: normal;\n    div {\n      margin: 8px 0\n    }\n}\n"]);return sn=function(){return n},n}function ln(){var n=Object(b.a)(["\n    margin-bottom: 200px;\n"]);return ln=function(){return n},n}var bn=u.a.div(ln()),xn=u.a.div(sn()),un=u.a.div(dn()),pn=u.a.div(rn()),jn=u.a.div(on()),mn=u.a.div(cn()),hn=u.a.div(an()),fn=u.a.div(tn()),On=u.a.div(en());function kn(){var n=Object(s.g)(),e=Object(i.useContext)(p),t=e.list,c=e.pokedex,o=nn("https://pokeapi.co/api/v2/pokemon/".concat(n.pokemonId),{}),r=t.filter((function(e){return e.data.name===n.pokemonId})),d=[];c!==[]&&(console.log(c),d=c.filter((function(e){return e.data.name===n.pokemonId})));var l={};return o.data?(r[0]||d[0]?r[0]?d[0]||(l=r[0]):l=d[0]:(l=o.data?o:"null",console.log(o)),Object(a.jsxs)(bn,{children:[Object(a.jsx)(O,{path:"goBack",routeButton:"Voltar",type:"info",pokemon:l,id:l.data.id,name:n.pokemonId.toUpperCase(),buttonText:r[0]?"Adicionar \xe0 Pokedex":"Remover da Pokedex"}),Object(a.jsxs)(xn,{children:[Object(a.jsxs)(un,{children:[Object(a.jsxs)(pn,{children:[Object(a.jsx)("div",{}),Object(a.jsx)("img",{alt:"".concat(n.pokemonId," front"),src:l.data.sprites.front_default})]}),Object(a.jsxs)(pn,{children:[Object(a.jsx)("div",{}),Object(a.jsx)("img",{alt:"".concat(n.pokemonId," back"),src:l.data.sprites.back_default})]})]}),Object(a.jsxs)(jn,{children:[Object(a.jsx)("h2",{children:"Stats"}),l.data.stats.map((function(n){return Object(a.jsxs)("p",{children:[n.stat.name,": ",n.base_stat]},n.stat.name)}))]}),Object(a.jsxs)(mn,{children:[Object(a.jsxs)(hn,{children:[Object(a.jsx)("h2",{children:"Type"}),l.data.types.map((function(n,e){return Object(a.jsx)(fn,{className:n.type.name,children:Object(a.jsx)("p",{children:n.type.name})},e)}))]}),Object(a.jsxs)(On,{children:[Object(a.jsx)("h2",{children:"Moves"}),l.data.moves.map((function(n,e){return e<3?Object(a.jsx)("p",{children:n.move.name},e):null}))]})]})]}),Object(a.jsx)(F,{})]})):Object(a.jsx)(z,{})}function gn(){var n=Object(b.a)(["\n"]);return gn=function(){return n},n}function vn(){var n=Object(b.a)(["\n    height:25vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n        img {\n            width: 10em;\n            padding: 1em;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n        }\n\n        div {\n\n            width: 10em;\n            height: 10em;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            background: linear-gradient( rgba(255,0,0,0.2) 48%,rgba(0,0,0,0.2) 2%,rgba(255,255,255,0.2) 50%);\n            border-radius: 50%;\n            border: 2px solid rgba(0,0,0,0.2);\n            box-shadow: 5px 5px 4px rgba(255,255,255,0.2);\n        }\n        \n      \n            div{\n            -webkit-animation: rotate-center-loading 5s ease-in-out both infinite;\n\t        animation: rotate-center-loading 6s ease-in-out both infinite;\n            }\n\n"]);return vn=function(){return n},n}function wn(){var n=Object(b.a)([" \n    display: flex;\n    flex-direction: column;\n    width: 70vw;\n    background-color: whitesmoke;\n    box-shadow: inset 2px 2px black, 2px 2px black, 10px 10px  5px black;\n    margin: 18px 0;\n"]);return wn=function(){return n},n}function yn(){var n=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n    background-color: whitesmoke;\n    height: 75%;\n    width: 300px;\n    margin: 0 16px 16px;\n    text-align: left;\n    box-shadow: inset 2px 2px black, 2px 2px black, 10px 10px  5px black;\n\n    h2 {\n        text-align: center;\n    }\n\n    p {\n        padding: 0 0 0 16px;\n    }\n\n"]);return yn=function(){return n},n}function Cn(){var n=Object(b.a)(["\n    display: flex;\n    align-items:center;\n    justify-content: space-evenly;\n\n    .pokemon {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .totalDiv,.imgDiv {\n        text-align: center;\n        margin: 8px;\n        width: 300px;\n        background-color: whitesmoke;\n        box-shadow: inset 2px 2px black, 2px 2px black, 10px 10px  5px black;\n    }\n\n    @media only screen \n  and (min-device-width: 320px) \n  and (max-device-width: 480px)\n  and (-webkit-min-device-pixel-ratio: 2) { \n    display: block;   \n  }\n    \n\n"]);return Cn=function(){return n},n}function Pn(){var n=Object(b.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    margin: 0 0 48px;\n\n    @media only screen \n  and (min-device-width: 320px) \n  and (max-device-width: 480px)\n  and (-webkit-min-device-pixel-ratio: 2) { \n      \n  }\n"]);return Pn=function(){return n},n}var Tn=u.a.div(Pn()),_n=u.a.div(Cn()),Nn=u.a.div(yn()),Sn=u.a.div(wn()),Bn=u.a.div(vn()),In=u.a.div(gn());function Ln(){var n=Object(i.useContext)(p).compare,e=n[0].data.stats.reduce((function(n,e){return n+e.base_stat}),0),t=n[1].data.stats.reduce((function(n,e){return n+e.base_stat}),0),c={};return e>t?c=n[0]:e<t?c=n[1]:e===t&&(c="draw"),void 0===n[0]?Object(a.jsxs)("div",{children:[Object(a.jsx)(O,{path:"goBack",routeButton:"Voltar",name:"Comparar"})," ",Object(a.jsx)(z,{})]}):Object(a.jsxs)("div",{children:[Object(a.jsx)(O,{path:"goBack",routeButton:"Voltar",name:"Comparar"}),Object(a.jsxs)(Tn,{children:[Object(a.jsxs)(_n,{children:[Object(a.jsxs)("div",{className:"pokemon",children:[Object(a.jsxs)("div",{className:"imgDiv",children:[Object(a.jsx)("h2",{children:n[0].data.name}),Object(a.jsx)("img",{alt:n[0].data.name,src:n[0].data.sprites.front_default})]}),Object(a.jsxs)(Nn,{children:[Object(a.jsx)("h2",{children:"Stats"}),n[0].data.stats.map((function(n){return Object(a.jsxs)("p",{children:[n.stat.name,": ",n.base_stat]},n.stat.name)}))]}),Object(a.jsxs)("div",{className:"totalDiv",children:[" TOTAL: ",e]})]}),Object(a.jsx)(In,{children:Object(a.jsx)("p",{children:"VS"})}),Object(a.jsxs)("div",{className:"pokemon",children:[Object(a.jsxs)("div",{className:"imgDiv",children:[Object(a.jsx)("h2",{children:n[1]?n[1].data.name:"Selecione outro pokemon"}),Object(a.jsx)("img",{alt:n[1].data.name,src:n[1]?n[1].data.sprites.front_default:null})]}),Object(a.jsxs)(Nn,{children:[Object(a.jsx)("h2",{children:"Stats"}),n[1].data.stats.map((function(n){return Object(a.jsxs)("p",{children:[n.stat.name,": ",n.base_stat]},n.stat.name)}))]}),Object(a.jsxs)("div",{className:"totalDiv",children:[" TOTAL: ",t]})]})]}),Object(a.jsxs)(Sn,{children:[Object(a.jsx)("h2",{children:"VENCEDOR:"}),Object(a.jsx)("h2",{children:c.data?c.data.name:"empate"}),Object(a.jsxs)(Bn,{children:[Object(a.jsx)("div",{}),Object(a.jsx)("img",{alt:c.data?c.data.name:n[0].data.name,src:c.data?c.data.sprites.front_default:n[0].data.sprites.front_default})]}),c.data?null:Object(a.jsxs)(Bn,{children:[Object(a.jsx)("div",{}),Object(a.jsx)("img",{alt:n[1].data.name,src:n[1].data.sprites.front_default})]})]})]})]})}function zn(){return Object(a.jsx)("div",{children:Object(a.jsx)(d.a,{children:Object(a.jsxs)(s.c,{children:[Object(a.jsx)(s.a,{exact:!0,path:"/Pokedex",children:Object(a.jsx)(Q,{})}),Object(a.jsx)(s.a,{exact:!0,path:"/Pokedex/pokedex",children:Object(a.jsx)(Y,{})}),Object(a.jsx)(s.a,{exact:!0,path:"/Pokedex/poke-info/:pokemonId",children:Object(a.jsx)(kn,{})}),Object(a.jsx)(s.a,{exact:!0,path:"/Pokedex/compare",children:Object(a.jsx)(Ln,{})}),Object(a.jsx)(s.a,{children:Object(a.jsx)("div",{children:"Erro 404 - P\xe1gina n\xe3o encontrada"})})]})})})}t(66);function Dn(n){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],o=t[1],r=Object(i.useState)([]),d=Object(l.a)(r,2),s=d[0],b=d[1],u=Object(i.useState)(0),j=Object(l.a)(u,2),m=j[0],h=j[1],f=Object(i.useState)([]),O=Object(l.a)(f,2),k=O[0],g=O[1],v=Object(i.useState)(19),w=Object(l.a)(v,2),y=w[0],C=w[1],P=nn(" https://pokeapi.co/api/v2/pokemon?limit=20&offset=".concat(m,'"'),{});return Object(i.useEffect)((function(){P.data&&P.data.results.map((function(n,e){var t=c.findIndex((function(e){return e.data.name===n.name})),a=s.findIndex((function(e){return e.data.name===n.name}));-1===t&&-1===a&&$.a.get("https://pokeapi.co/api/v2/pokemon/".concat(n.name)).then((function(n){o((function(e){return[].concat(Object(x.a)(e),[n])}))})).catch((function(n){console.log(n)}))}))}),[P.data]),Object(a.jsx)(p.Provider,{value:{list:c,setList:o,pokedex:s,setPokedex:b,offset:m,setOffset:h,compare:k,setCompare:g,pokemonsTotal:y,setPokemonsTotal:C},children:n.children})}var Vn=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(Dn,{children:Object(a.jsx)(zn,{})})})},En=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,68)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),a(n),i(n),c(n),o(n)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(Vn,{})}),document.getElementById("root")),En()}},[[67,1,2]]]);
//# sourceMappingURL=main.b93b8ef9.chunk.js.map