(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{21:function(e,t,n){e.exports=n(32)},22:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);n(22);var a=n(0),o=n.n(a),r=n(19),l=n.n(r),c=n(12),i=n(7),u=n(8),s=n(10),m=n(9),p=n(11),d=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"home"},o.a.createElement("div",{className:"top-container"},o.a.createElement("h1",null,"Petful"),o.a.createElement("h2",null,"Adopt the pet for you!")),o.a.createElement("div",{className:"process-content"},o.a.createElement("h3",null,"Welcome to Petful"),o.a.createElement("p",null,"The queue based adoption service"),o.a.createElement("h4",null,"Here's how it works:"),o.a.createElement("p",null,"Since we run on a first in first out system, you will be matched with the pet that is assigned to you in the queue."),o.a.createElement("p",null,"Once you recieve your match you click on the adopt button and fill out your name and you will have information sent to you about how to continue the adoption process!")),o.a.createElement("div",{className:"enter"},o.a.createElement(c.b,{to:"/adopt"},"Adopt now!")))}}]),t}(a.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.name;return o.a.createElement("ul",null,o.a.createElement("li",null,e))}}]),t}(a.Component),h={REACT_APP_API_BASE:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_BASE||"http://localhost:8080/api"},f={getDogs:function(){return fetch("".concat(h.REACT_APP_API_BASE,"/dogs")).then((function(e){if(!e.ok)throw new Error("No dogs left");return e.json()}))},getCats:function(){return fetch("".concat(h.REACT_APP_API_BASE,"/cats")).then((function(e){if(!e.ok)throw new Error("No cats left");return e.json()}))},getPeople:function(){return fetch("".concat(h.REACT_APP_API_BASE,"/people")).then((function(e){if(!e.ok)throw new Error("No people");return e.json()}))},addPerson:function(e){return fetch("".concat(h.REACT_APP_API_BASE,"/people"),{method:"POST",headers:{"Content-Type":"applicatsion/json"},body:JSON.stringify({person:e})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},deleteDogs:function(){return fetch("".concat(h.REACT_APP_API_BASE,"/dogs"),{method:"DELETE"}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},deleteCats:function(){return fetch("".concat(h.REACT_APP_API_BASE,"/catss"),{method:"DELETE"}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},deletePerson:function(e){return fetch("".concat(h.REACT_APP_API_BASE,"/people"),{method:"DELETE",headers:{"Content-Type":"applicatsion/json"},body:JSON.stringify({name:e})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}},P=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={type:"dog",dog:{},cat:{},people:[],first:!1,removeTimer:null},n.postUser=function(e){f.addPerson(e).then((function(e){n.setState({people:e})}))},n.handleSubmit=function(e){e.preventDefault();var t=e.target["pet-type"].value,a=e.target.addName.value;n.postUser(a);var o=setInterval((function(){n.handleTimerFuncs()}),5e3);n.setState({typeOfPet:t,removeTimer:o})},n.handleTimerFuncs=function(){var e=["Karen Whosyerboss","Linda Pierogie","Madeline McCain"];if(n.state.people.length>1)f.deletePerson(n.state.people[0]).then((function(e){n.setState({people:e})})),f.deleteDog().then((function(e){n.setState({dog:e})})),f.deleteCat().then((function(e){n.setState({cat:e})}));else{clearInterval(n.state.removeTimer);var t=0,a=setInterval((function(){n.postUser(e[t]),t++}),5e3);n.postUser("Charles Barclay"),n.setState({first:!0}),setTimeout((function(){clearInterval(a)}),2e4)}},n.renderPeople=function(){var e=n.state.people;return e.length>1?e.map((function(e,t){return o.a.createElement(E,{key:t,name:e})})):o.a.createElement(E,{key:"0",name:e[0]})},n.renderDog=function(){var e=n.state.dog;return o.a.createElement("section",null,o.a.createElement("ul",null,o.a.createElement("img",{src:e.imageURL,alt:e.description}),o.a.createElement("li",null,"Name: ",e.name),o.a.createElement("li",null,"Gender: ",e.gender),o.a.createElement("li",null,"Breed: ",e.breed),o.a.createElement("li",null,"Description: ",e.description),o.a.createElement("li",null,"Story of the Journey to the Shelter: ",e.story)))},n.renderCat=function(){var e=n.state.cat;return o.a.createElement("section",null,o.a.createElement("img",{src:e.imageURL,alt:e.description}),o.a.createElement("ul",null,o.a.createElement("li",null,"NAME: ",e.name),o.a.createElement("li",null,"GENDER: ",e.gender),o.a.createElement("li",null,"BREED: ",e.breed),o.a.createElement("li",null,"Physical Description: ",e.description),o.a.createElement("li",null,"Story of the Journey to the Shelter: ",e.story)))},n.handleAdopt=function(){f.deletePerson(n.state.people[0]).then((function(e){n.setState({people:e,first:!1})})),"dog"===n.state.typeOfPet?f.deleteDog().then((function(e){n.setState({dog:e})})):f.deleteCat().then((function(e){n.setState({cat:e})})),alert("Congrats, on your new pet ".concat(n.state.typeOfPet,"!!"))},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.getPeople().then((function(t){e.setState({people:t})})),f.getDogs().then((function(t){e.setState({dog:t})})),f.getCats().then((function(t){e.setState({cat:t})}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("header",null,o.a.createElement("h1",null,"Adoption")),o.a.createElement("main",null,o.a.createElement("section",null,o.a.createElement("h3",null,"PET ON STAGE"),"dog"===this.state.typeOfPet?this.renderDog():this.renderCat(),o.a.createElement("h3",null,"PEOPLE IN QUEUE"),this.renderPeople()),o.a.createElement("section",{id:"form"},o.a.createElement("form",{onSubmit:this.handleSubmit,name:"addNameToList",id:"addNameToList"},o.a.createElement("label",{htmlFor:"pet-type"},"What type of pet would you like to adopt?"),o.a.createElement("select",{name:"pet-type",defaultValue:"dog"},o.a.createElement("option",null,"-select your pet-"),o.a.createElement("option",null,"dog"),o.a.createElement("option",null,"cat")),o.a.createElement("label",{htmlFor:"addName"},"Your Name:"),o.a.createElement("input",{type:"text",name:"addName",id:"addName"}),o.a.createElement("button",{type:"submit"},"ADD ME TO THE QUEUE"),this.state.first?o.a.createElement("button",{onClick:this.handleAdopt,type:"button"},"ADOPT THAT PET!"):""))))}}]),t}(a.Component),y=n(1);var A=function(){return o.a.createElement("div",null,o.a.createElement(y.c,null,o.a.createElement(y.a,{exact:!0,path:"/",component:d}),o.a.createElement(y.a,{exact:!0,path:"/adopt",component:P})))};l.a.render(o.a.createElement(c.a,null,o.a.createElement(A,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.b4721233.chunk.js.map