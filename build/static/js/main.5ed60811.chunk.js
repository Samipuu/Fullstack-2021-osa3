(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{38:function(e,n,t){"use strict";t.r(n);var r=t(14),o=t.n(r),i=t(3),u=t(2),c=t(4),a=t.n(c),d="/api/persons",l=function(){return a.a.get(d).then((function(e){return e.data}))},s=function(e){return a.a.post(d,e).then((function(e){return e.data}))},b=function(e,n){return a.a.put(d+"/"+e,n).then((function(e){return e.data}))},f=function(e){return a.a.delete(d+"/"+e).then((function(e){return e.data}))},j=t(0),h=function(e){var n=e.filter,t=e.handleFilter;return Object(j.jsxs)("p",{children:["Filter: ",Object(j.jsx)("input",{value:n,onChange:t})]})},m=function(e){return Object(j.jsxs)("form",{onSubmit:e.addPerson,children:[Object(j.jsx)("h2",{children:"Add new person"}),Object(j.jsxs)("div",{children:["Name: ",Object(j.jsx)("input",{value:e.newName,onChange:e.handleNameChange}),Object(j.jsx)("br",{}),"Number: ",Object(j.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",children:"add"})})]})},v=function(e){var n=e.persons,t=e.filter,r=e.removePerson;return Object(j.jsx)("div",{children:n.map((function(e){return"undefined"===typeof e.name?null:e.name.toLowerCase().includes(t.toLowerCase())?x({person:e,removePerson:r}):null}))})},O=function(e){var n=e.notification;return null===n?null:Object(j.jsx)("div",{className:"notification",style:{color:"green",fontSize:20,borderWidth:2,borderColor:"green",borderStyle:"solid",display:"inline",backgroundColor:"rgb(190,190,190)",padding:5},children:n})},p=function(e){var n=e.errorMessage;return null===n?null:Object(j.jsx)("div",{className:"error",style:{color:"red",fontSize:20,borderWidth:2,borderColor:"red",borderStyle:"solid",display:"inline",backgroundColor:"rgb(190,190,190)",padding:5},children:n})},x=function(e){var n=e.person,t=e.removePerson;return Object(j.jsxs)("p",{children:[n.name," ",n.number," ",Object(j.jsx)(g,{removePerson:t,id:n.id})]},n.id)},g=function(e){var n=e.id,t=e.removePerson;return Object(j.jsx)("button",{type:"button",id:n,onClick:t,children:"Delete"})},w=function(){var e=Object(u.useState)([]),n=Object(i.a)(e,2),t=n[0],r=n[1];Object(u.useEffect)((function(){l().then((function(e){r(e)}))}),[]);var o=Object(u.useState)(""),c=Object(i.a)(o,2),a=c[0],d=c[1],x=Object(u.useState)(""),g=Object(i.a)(x,2),w=g[0],y=g[1],C=Object(u.useState)(""),N=Object(i.a)(C,2),S=N[0],P=N[1],k=Object(u.useState)(null),T=Object(i.a)(k,2),D=T[0],F=T[1],z=Object(u.useState)(null),A=Object(i.a)(z,2),E=A[0],I=A[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(h,{filter:S,handleFilter:function(e){P(e.target.value)}}),Object(j.jsx)(p,{errorMessage:E}),Object(j.jsx)(O,{notification:D}),Object(j.jsx)(m,{addPerson:function(e){e.preventDefault();var n={name:a,number:w};if(t.some((function(e){return e.name===a}))){var o=t.find((function(e){return e.name===a}));window.confirm("".concat(a," is aleady added to phonebook. Do you want to replace the number ").concat(o.number," with ").concat(w,"?"))&&b(o.id,n).then((function(e){r(t.map((function(n){return n.id!==o.id?n:e}))),F("Number for "+o.name+" have been changed to "+w+"."),setTimeout((function(){F(null)}),2e3)})).catch((function(e){I(o.name+" is already removed from the server"),r(t.filter((function(e){return e.id!==o.id}))),setTimeout((function(){F(null)}),5e3)}))}else s(n).then((function(e){r(t.concat(e)),F(a+" have been added to the Phonebook"),setTimeout((function(){F(null)}),2e3)}));d(""),y("")},newName:a,handleNameChange:function(e){d(e.target.value)},newNumber:w,handleNumberChange:function(e){y(e.target.value)}}),Object(j.jsx)("h2",{children:"Numbers"}),Object(j.jsx)(v,{persons:t,removePerson:function(e){var n=parseInt(e.target.id),o=t.find((function(e){return e.id===n}));window.confirm("Are you sure you want to remove "+o.name)&&f(n).then((function(e){r(t.map((function(t){return t.id!==n?t:e}))),F(o.name+" have been removed"),setTimeout((function(){F(null)}),2e3)})).catch((function(e){I(o.name+" is already removed from the server"),r(t.filter((function(e){return e.id!==o.id}))),setTimeout((function(){F(null)}),5e3)}))},filter:S})]})};o.a.render(Object(j.jsx)(w,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.5ed60811.chunk.js.map