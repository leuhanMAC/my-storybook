import"./iframe.19a7eb15.js";import{j as a,b as p,F as b}from"./jsx-runtime.80372e63.js";import{R as m}from"./index.9ad159b5.js";var k={fontSize:"14px",letterSpacing:"0.2px",margin:"10px 0"},w={margin:"auto",padding:30,borderRadius:10,background:"rgba(0,0,0,0.03)"},D={textAlign:"center"},v=function(){return a("div",{style:k,className:"sb-nodocs sb-wrapper",children:p("div",{style:w,children:[a("h1",{style:D,children:"No Docs"}),p("p",{children:["Sorry, but there are no docs for the selected story. To add them, set the story's\xA0",a("code",{children:"docs"})," parameter. If you think this is an error:"]}),p("ul",{children:[a("li",{children:"Please check the story definition."}),a("li",{children:"Please check the Storybook config."}),a("li",{children:"Try reloading the page."})]}),a("p",{children:"If the problem persists, check the browser console, or the terminal you've run Storybook from."})]})})};v.displayName="NoDocs";function g(n,i,t,s,d,c,r){try{var l=n[c](r),o=l.value}catch(u){t(u);return}l.done?i(o):Promise.resolve(o).then(s,d)}function P(n){return function(){var i=this,t=arguments;return new Promise(function(s,d){var c=n.apply(i,t);function r(o){g(c,s,d,r,l,"next",o)}function l(o){g(c,s,d,r,l,"throw",o)}r(void 0)})}}function I(n,i,t,s){return N(n,i,t).then(s)}function N(n,i,t){return f.apply(this,arguments)}function f(){return f=P(regeneratorRuntime.mark(function n(i,t,s){var d,c,r,l,o,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=i.parameters.docs,!((r!=null&&r.getPage||r!=null&&r.page)&&!(r!=null&&r.getContainer||r!=null&&r.container))){e.next=3;break}throw new Error("No `docs.container` set, did you run `addon-docs/preset`?");case 3:if(e.t1=r.container,e.t1){e.next=8;break}return e.next=7,(d=r.getContainer)===null||d===void 0?void 0:d.call(r);case 7:e.t1=e.sent;case 8:if(e.t0=e.t1,e.t0){e.next=11;break}e.t0=function(h){var y=h.children;return a(b,{children:y})};case 11:if(l=e.t0,e.t3=r.page,e.t3){e.next=17;break}return e.next=16,(c=r.getPage)===null||c===void 0?void 0:c.call(r);case 16:e.t3=e.sent;case 17:if(e.t2=e.t3,e.t2){e.next=20;break}e.t2=v;case 20:return o=e.t2,u=a(l,{context:t,children:a(o,{})},i.componentId),e.next=24,new Promise(function(h){m.render(u,s,h)});case 24:case"end":return e.stop()}},n)})),f.apply(this,arguments)}function T(n){m.unmountComponentAtNode(n)}export{I as renderDocs,T as unmountDocs};
//# sourceMappingURL=renderDocs.a9cd5086.js.map
