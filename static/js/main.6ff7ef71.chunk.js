(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{23:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a,c,s,i=n(1),r=n(10),o=n.n(r),h=(n(23),n(4)),d=n(8),l=n(11),p=n(12),u=n(13),b=n(18),j=n(17),m=n(29),x=n(2),O=n(3),g=O.a.div(a||(a=Object(x.a)(["\n  width: 300px;\n  border: 1px solid black;\n  padding: 10px;\n  margin: 10px;\n  .form {\n    display: flex;\n    flex-direction: column;\n  }\n"]))),f=n(0),v=function(t){var e=t.handleSubmit,n=t.inputId,a=t.handleChange,c=t.phoneInputId,s=t.phone,i=t.name;return Object(f.jsxs)(g,{children:[Object(f.jsx)("h2",{children:"Phonebook"}),Object(f.jsxs)("form",{className:"form",onSubmit:e,children:[Object(f.jsx)("label",{htmlFor:n,children:"Name"}),Object(f.jsx)("input",{onChange:a,type:"text",name:"name",value:i,id:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(f.jsx)("label",{htmlFor:c,children:"Phone"}),Object(f.jsx)("input",{onChange:a,type:"text",name:"phone",id:c,value:s,required:!0}),Object(f.jsx)("button",{type:"submit",children:"Add contact"})]})]})},I=O.a.ul(c||(c=Object(x.a)(["\n  padding-left: 0px;\n  list-style: inside;\n\n  .item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0px 10px;\n\n    border: 1px solid grey;\n  }\n\n  .item:not(:last-child) {\n    margin-bottom: 10px;\n  }\n  .text {\n    padding: 0px;\n  }\n\n  .submit-button {\n    margin-left: 10px;\n    height: 22px;\n  }\n"]))),y=function(t){var e=t.contacts,n=t.search,a=t.deleteItem;return Object(f.jsx)(I,{children:e.map((function(t){var e=t.id,c=t.name,s=t.phone;return!!c.includes(n)&&Object(f.jsxs)("li",{className:"item",children:[Object(f.jsxs)("p",{className:"text",children:[c,": ",s]}),Object(f.jsx)("button",{className:"submit-button",type:"button",value:e,onClick:a,children:"Delete"})]},e)}))})},S=O.a.div(s||(s=Object(x.a)(["\n  width: 300px;\n  border: 1px solid black;\n  padding: 10px;\n  margin: 10px;\n"]))),C=function(t){var e=t.contacts,n=t.onSearch,a=t.search,c=t.deleteItem;return Object(f.jsxs)(S,{children:[Object(f.jsx)("h2",{children:"Contacts"}),0===e.length?Object(f.jsx)("p",{children:"No contacts"}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{children:"Find contacts by name"}),Object(f.jsx)("input",{className:"search",type:"text",onChange:n})]}),Object(f.jsx)(y,{contacts:e,search:a,deleteItem:c})]})},k={phone:"",name:""},w=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(p.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],inputId:Object(m.a)(),phoneInputId:Object(m.a)(),search:"",name:"",phone:""},t.handleSubmit=function(e){if(e.preventDefault(),t.state.contacts.find((function(e){return e.name===t.state.name})))return alert("User alredy exist!"),!1;t.setState(Object(l.a)({contacts:[].concat(Object(d.a)(t.state.contacts),[{name:t.state.name,id:Object(m.a)(),phone:t.state.phone}])},k))},t.handleChange=function(e){var n;t.setState((n={},Object(h.a)(n,e.target.name,e.target.value),Object(h.a)(n,e.target.name,e.target.value),n))},t.deleteItem=function(e){var n=t.state.contacts.indexOf(t.state.contacts.find((function(t){return t.id===e.target.value})));t.setState((function(t){return t.contacts.splice(n,1),{contacts:Object(d.a)(t.contacts)}}))},t.onSearch=function(e){t.setState({search:e.target.value})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(v,{handleSubmit:this.handleSubmit,inputId:this.state.inputId,handleChange:this.handleChange,phoneInputId:this.state.phoneInputId,phone:this.state.phone,name:this.state.name}),Object(f.jsx)(C,{contacts:this.state.contacts,onSearch:this.onSearch,search:this.state.search,deleteItem:this.deleteItem})]})}}]),n}(i.Component);o.a.render(Object(f.jsx)(w,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.6ff7ef71.chunk.js.map