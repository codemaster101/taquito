(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{174:function(e,t,n){"use strict";var a=n(1),r=n(9),o=n(0),c=n.n(o),l=n(152),i=n.n(l),u=n(158),s=n(151),m=n(157),f=n(120),d=n.n(f);function p(e){var t=e.to,n=e.href,o=e.label,l=Object(r.a)(e,["to","href","label"]),i=Object(m.a)(t);return c.a.createElement(u.a,Object(a.a)({className:"footer__link-item"},n?{target:"_blank",rel:"noopener noreferrer",href:n}:{to:i},l),o)}var b=function(e){var t=e.url,n=e.alt;return c.a.createElement("img",{className:"footer__logo",alt:n,src:t})};t.a=function(){var e=Object(s.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,n=(void 0===t?{}:t).footer,a=n||{},r=a.copyright,o=a.links,l=void 0===o?[]:o,u=a.logo,f=void 0===u?{}:u,v=Object(m.a)(f.src);return n?c.a.createElement("footer",{className:i()("footer",{"footer--dark":"dark"===n.style})},c.a.createElement("div",{className:"container"},l&&l.length>0&&c.a.createElement("div",{className:"row footer__links"},l.map((function(e,t){return c.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?c.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(p,e))}))):null)}))),(f||r)&&c.a.createElement("div",{className:"text--center"},f&&f.src&&c.a.createElement("div",{className:"margin-bottom--sm"},f.href?c.a.createElement("a",{href:f.href,target:"_blank",rel:"noopener noreferrer",className:d.a.footerLogoLink},c.a.createElement(b,{alt:f.alt,url:v})):c.a.createElement(b,{alt:f.alt,url:v})),r))):null}},234:function(e,t){},292:function(e,t){},294:function(e,t){},359:function(e,t){},361:function(e,t){},390:function(e,t){},391:function(e,t){},466:function(e,t,n){"use strict";n(282),n(283);var a=n(1),r=(n(188),n(217),n(286),n(9)),o=n(151),c=n(465),l=n(6),i=n(152),u=n.n(i),s=n(275),m=n.n(s),f=n(0),d=n.n(f),p=n(450),b=n(126),v=n.n(b),g=function(e){function t(){var t;return(t=e.call(this)||this).onChange=function(e){t.code=e},t}Object(l.a)(t,e);var n=t.prototype;return n.UNSAFE_componentWillMount=function(){this.code=this.props.code},n.componentDidUpdate=function(){},n.run=function(){var e=this.props,t=e.scope,n=e.transformCode,a=e.noInline,r='\nlet _printlnBuffer = "";\n\nfunction println(value) {\n  _printlnBuffer += value + "\\n";\n\n  render(_printlnBuffer);\n}\n '+this.code;this.transpile({code:r,scope:t,transformCode:n,noInline:a})},t}(p.d);var h=function(e){var t=e.children,n=e.theme,o=e.transformCode,c=Object(r.a)(e,["children","theme","transformCode"]),l=Object(f.useState)(!1),i=l[0],s=l[1],b=Object(f.useRef)(null),h=Object(f.useRef)(null);return Object(f.useEffect)((function(){var e;return h.current&&(e=new m.a(h.current,{text:function(){return b.current.code}})),function(){e&&e.destroy()}}),[h.current,b.current]),d.a.createElement(g,Object(a.a)({ref:b,code:t,transformCode:o||function(e){return e+";"},theme:n},c),d.a.createElement("div",{className:v.a.playgroundEditorWrapper},d.a.createElement("div",{className:u()(v.a.playgroundHeader,v.a.playgroundEditorHeader)},"Live Editor"),d.a.createElement(p.a,null),d.a.createElement("button",{ref:h,type:"button","aria-label":"Copy code to clipboard",className:u()(v.a.button,v.a.copyButton),onClick:function(){window.getSelection().empty(),s(!0),setTimeout((function(){return s(!1)}),2e3)}},i?"Copied":"Copy")),d.a.createElement("div",{className:u()(v.a.playgroundHeader,v.a.playgroundPreviewHeader)},"Result",d.a.createElement("button",{type:"button","aria-label":"Execute example",className:u()(v.a.button,v.a.runButton),onClick:function(){b.current&&b.current.run()}},"Run code")),d.a.createElement("div",{className:v.a.playgroundPreview},d.a.createElement(p.c,null),d.a.createElement(p.b,null)))},E=n(458),y=n.n(E),N=n(276),k=n(459),j=n.n(k),O=n(127),_=n.n(O),C=/{([\d,-]+)}/;t.a=function(e){var t=e.children,n=e.className,l=e.live,i=e.metastring,s=Object(r.a)(e,["children","className","live","metastring"]),p=Object(o.a)().siteConfig.themeConfig.prism,b=void 0===p?{}:p,v=Object(f.useState)(!1),g=v[0],E=v[1],k=Object(f.useRef)(null),O=Object(f.useRef)(null),w=[];if(i&&C.test(i)){var B=i.match(C)[1];w=y.a.parse(B).filter((function(e){return e>0}))}if(Object(f.useEffect)((function(){var e;return O.current&&(e=new m.a(O.current,{target:function(){return k.current}})),function(){e&&e.destroy()}}),[O.current,k.current]),l){var L=new c.a;return d.a.createElement(h,Object(a.a)({scope:Object.assign({},d.a,{Tezos:L}),code:t.trim(),theme:b.theme||j.a,transformCode:function(e){return e.replace(/import .*/g,"")}},s))}var R=n&&n.replace(/language-/,"");!R&&b.defaultLanguage&&(R=b.defaultLanguage);var S=function(){window.getSelection().empty(),E(!0),setTimeout((function(){return E(!1)}),2e3)};return d.a.createElement(N.a,Object(a.a)({},N.b,{theme:b.theme||j.a,code:t.trim(),language:R}),(function(e){var t=e.className,n=e.style,r=e.tokens,o=e.getLineProps,c=e.getTokenProps;return d.a.createElement("div",{className:_.a.codeBlockWrapper},d.a.createElement("pre",{ref:k,className:u()(t,_.a.codeBlock),style:n},r.map((function(e,t){var n=o({line:e,key:t});return w.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),d.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return d.a.createElement("span",Object(a.a)({key:t},c({token:e,key:t})))})))}))),d.a.createElement("button",{ref:O,type:"button","aria-label":"Copy code to clipboard",className:_.a.copyButton,onClick:S},g?"Copied":"Copy"))}))}}}]);