(this["webpackJsonpcode-in-one"]=this["webpackJsonpcode-in-one"]||[]).push([[0],{265:function(e,t,n){},271:function(e,t,n){},338:function(e,t,n){},440:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(23),r=n.n(i),o=(n(265),n(56)),s=n(35),l=n(36),j=n(47),b=n(46),u=n(59),d=n(92),h=n(15),m=n(525),x=n(563),O=n(224),p=n(552),g=n(528),f=n(127),v=n.n(f),C=n(212),y=n.n(C),w=n(214),k=n.n(w),S=n(2),N=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={anchorEl:null},e.handleClose=e.handleClose.bind(Object(u.a)(e)),e.handleClick=e.handleClick.bind(Object(u.a)(e)),e}return Object(l.a)(n,[{key:"handleClick",value:function(e){var t=e.currentTarget;this.setState((function(e){return{anchorEl:t}}))}},{key:"handleClose",value:function(){this.setState((function(e){return{anchorEl:null}}))}},{key:"render",value:function(){var e=this.props.classes;return Object(S.jsxs)(c.a.Fragment,{children:[Object(S.jsx)(m.a,{color:"primary",className:"".concat(e.customColor," ").concat(e.customHeight),children:Object(S.jsxs)(g.a,{sx:{justifyContent:"space-between"},children:[Object(S.jsx)("div",{className:e.title,children:Object(S.jsx)("img",{src:"/code-in-one/home.png",width:"150",height:"32",alt:"Home"})}),Object(S.jsx)(x.a,{onClick:this.handleClick,sx:{color:"white"},children:Object(S.jsx)(y.a,{fontSize:"large"})})]})}),Object(S.jsx)(O.a,{anchorEl:this.state.anchorEl,open:!!this.state.anchorEl,onClose:this.handleClose,onClick:this.handleClose,PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:Object(S.jsx)(p.a,{children:Object(S.jsxs)(d.b,{to:"/code-in-one/login",children:[Object(S.jsx)(k.a,{})," Login"]})})}),Object(S.jsx)(g.a,{})]})}}]),n}(a.Component),D=Object(h.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},customColor:{backgroundColor:v.a[500]},customHeight:{minHeight:64},offset:e.mixins.toolbar}}))(N),F=n(565),W=n(566),E=n(448),I=(n(271),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(S.jsx)(d.b,{to:"/code-in-one/challenge/".concat(this.props.id),children:Object(S.jsx)(F.a,{className:"challengeCard",children:Object(S.jsx)(W.a,{children:Object(S.jsx)(E.a,{gutterBottom:!0,variant:"h5",component:"div",children:this.props.challengeName})})})})}}]),n}(a.Component)),q=I,H=n(215),P=Object(H.create)({baseURL:"https://dhong9.pythonanywhere.com/"}),z=function(e,t){return P.get(e).then(t)},B=(n(338),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={challenges:[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;z("api/challenges/",(function(t){return e.setState((function(e){return{challenges:t.data.data}}))}))}},{key:"render",value:function(){return Object(S.jsxs)(c.a.Fragment,{children:[Object(S.jsx)(D,{}),Object(S.jsx)("div",{className:"inside",children:this.state.challenges.map((function(e,t){return Object(S.jsx)(q,Object(o.a)({},e),t)}))})]})}}]),n}(a.Component)),G=n(6),L=n(16),R=n(18),T=n(561),A=n(535),M=n(554),U=n(560),Y=n(551),J=n(536),V=n(537),K=n(562),Q=n(543),X=n(216),Z=n.n(X),$=n(218),_=n.n($),ee=n(217),te=n.n(ee),ne=n(219),ae=n.n(ne),ce=n(220),ie=n.n(ce),re=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.challengeName;return Object(S.jsxs)(c.a.Fragment,{children:[Object(S.jsx)(m.a,{color:"primary",className:"".concat(t.customColor," ").concat(t.customHeight),position:"fixed",children:Object(S.jsxs)(g.a,{children:[Object(S.jsx)(E.a,{className:t.title,children:"Back"}),Object(S.jsx)(E.a,{className:t.title,children:n}),Object(S.jsx)(E.a,{children:"Author"})]})}),Object(S.jsx)(g.a,{})]})}}]),n}(a.Component),oe=Object(h.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},customColor:{backgroundColor:v.a[500]},customHeight:{minHeight:40,zIndex:1201},offset:e.mixins.toolbar}}))(re);function se(){var e=Object(R.g)(),t=Object(a.useState)({}),n=Object(L.a)(t,2),c=n[0],i=n[1];Object(a.useEffect)((function(){return t=e.id,z("api/challenges/"+t,(function(e){return i(e.data.data)}));var t}),[e.id]);var r=[[Object(S.jsx)(Z.a,{}),"Description"],[Object(S.jsx)(te.a,{}),"Comments"],[Object(S.jsx)(_.a,{}),"Drafts"],[Object(S.jsx)(ae.a,{}),"Solutions"],[Object(S.jsx)(ie.a,{}),"Readme"]];return c.id?Object(S.jsxs)(T.a,{sx:{display:"flex"},children:[Object(S.jsx)(A.a,{}),Object(S.jsx)(oe,Object(o.a)({},c)),Object(S.jsxs)(M.a,{variant:"permanent",sx:Object(G.a)({width:48,flexShrink:0},"& .MuiDrawer-paper",{width:48,boxSizing:"border-box"}),children:[Object(S.jsx)(K.a,{}),Object(S.jsx)(T.a,{sx:{overflow:"auto"},children:Object(S.jsx)(U.a,{children:r.map((function(e,t){return Object(S.jsx)(Q.a,{title:e[1],placement:"right",arrow:!0,children:Object(S.jsx)(J.a,{disableGutters:!0,children:Object(S.jsx)(Y.a,{button:!0,disableGutters:!0,sx:{justifyContent:"space-around"},children:Object(S.jsx)(V.a,{sx:{minWidth:0},children:e[0]})},t)})},t)}))})})]}),Object(S.jsxs)(T.a,{component:"main",sx:{flexGrow:1,p:3},children:[Object(S.jsx)(K.a,{}),Object(S.jsx)("div",{children:c.challengeDesc})]})]}):Object(S.jsx)("div",{children:Object(S.jsx)("h2",{children:"Loading..."})})}var le=n(70),je=n(28),be=n(555),ue=Object(je.b)({form:be.a}),de=Object(je.c)(ue),he=n(548),me=n(546),xe=n(557),Oe=n(558),pe=n(545),ge=n(569),fe=n(550),ve=n(568),Ce=n(564),ye=n(556),we=n(133),ke=n.n(we),Se=n(567),Ne=n(223),De=n(559);function Fe(e){return Object(S.jsxs)(Se.a,Object(o.a)(Object(o.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(S.jsx)(ve.a,{color:"inherit",href:"https://dhong9.github.io/",children:"Daniel Hong"})," ",(new Date).getFullYear(),"."]}))}var We=Object(Ne.a)(),Ee=function(e){var t=e.handleSubmit;return Object(S.jsx)(De.a,{theme:We,children:Object(S.jsxs)(ye.a,{container:!0,component:"main",sx:{height:"100vh"},children:[Object(S.jsx)(A.a,{}),Object(S.jsx)(ye.a,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(".concat("/code-in-one","/codeGolfTee.png)"),backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}}),Object(S.jsx)(ye.a,{item:!0,xs:12,sm:8,md:5,component:Ce.a,elevation:6,square:!0,children:Object(S.jsxs)(T.a,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(S.jsx)(xe.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(S.jsx)(ke.a,{})}),Object(S.jsx)(Se.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(S.jsxs)(T.a,{component:"form",noValidate:!0,onSubmit:t,sx:{mt:1},children:[Object(S.jsx)(he.a,{name:"email",component:function(e){return Object(S.jsx)(pe.a,{value:e.value,onChange:e.onChange,margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",autoComplete:"email",autoFocus:!0})}}),Object(S.jsx)(he.a,{name:"password",component:function(e){return Object(S.jsx)(pe.a,{value:e.value,onChange:e.onChange,margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"})}}),Object(S.jsx)(ge.a,{control:Object(S.jsx)(fe.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(S.jsx)(Oe.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),Object(S.jsxs)(ye.a,{container:!0,children:[Object(S.jsx)(ye.a,{item:!0,xs:!0,children:Object(S.jsx)(ve.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(S.jsx)(ye.a,{item:!0,children:Object(S.jsx)(ve.a,{href:"/code-in-one/signup",variant:"body2",children:"Don't have an account? Sign Up"})})]}),Object(S.jsx)(Fe,{sx:{mt:5}})]})]})})]})})},Ie=Ee=Object(me.a)({form:"signIn"})(Ee),qe=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleSubmit=e.handleSubmit.bind(Object(u.a)(e)),e}return Object(l.a)(n,[{key:"handleSubmit",value:function(e){console.log(e)}},{key:"render",value:function(){return Object(S.jsx)(le.a,{store:de,children:Object(S.jsx)(Ie,{onSubmit:this.handleSubmit})})}}]),n}(c.a.Component),He=n(570),Pe=n(553),ze=n(540),Be=n(544),Ge=n(542),Le=n(541),Re=n(547),Te=n(538),Ae=n(539);function Me(e){return Object(S.jsxs)(Se.a,Object(o.a)(Object(o.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(S.jsx)(ve.a,{color:"inherit",href:"https://dhong9.github.io/",children:"Daniel Hong"})," ",(new Date).getFullYear(),"."]}))}var Ue=Object(Te.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),Ye=function(e){var t=Ue(),n=e.handleSubmit;return Object(S.jsxs)(Ae.a,{component:"main",maxWidth:"xs",children:[Object(S.jsx)(ze.a,{}),Object(S.jsxs)("div",{className:t.paper,children:[Object(S.jsx)(He.a,{className:t.avatar,children:Object(S.jsx)(ke.a,{})}),Object(S.jsx)(E.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(S.jsxs)("form",{className:t.form,noValidate:!0,onSubmit:n,children:[Object(S.jsxs)(Le.a,{container:!0,spacing:2,children:[Object(S.jsx)(Le.a,{item:!0,xs:12,sm:6,children:Object(S.jsx)(he.a,{name:"firstName",component:function(e){return Object(S.jsx)(Be.a,{value:e.value,onChange:e.onChange,autoComplete:"fname",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}})}),Object(S.jsx)(Le.a,{item:!0,xs:12,sm:6,children:Object(S.jsx)(he.a,{name:"lastName",component:function(e){return Object(S.jsx)(Be.a,{value:e.value,onChange:e.onChange,variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",autoComplete:"lname"})}})}),Object(S.jsx)(Le.a,{item:!0,xs:12,children:Object(S.jsx)(he.a,{name:"username",component:function(e){return Object(S.jsx)(Be.a,{value:e.value,onChange:e.onChange,variant:"outlined",required:!0,fullWidth:!0,label:"Username",name:"username",autoComplete:"username"})}})}),Object(S.jsx)(Le.a,{item:!0,xs:12,children:Object(S.jsx)(he.a,{name:"email",component:function(e){return Object(S.jsx)(Be.a,{value:e.value,onChange:e.onChange,variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",autoComplete:"email"})}})}),Object(S.jsx)(Le.a,{item:!0,xs:12,children:Object(S.jsx)(he.a,{name:"password",component:function(e){return Object(S.jsx)(Be.a,{value:e.value,onChange:e.onChange,variant:"outlined",required:!0,fullWidth:!0,label:"Password",type:"password",id:"password",autoComplete:"current-password"})}})}),Object(S.jsx)(Le.a,{item:!0,xs:12,children:Object(S.jsx)(he.a,{name:"password2",component:function(e){return Object(S.jsx)(Be.a,{value:e.value,onChange:e.onChange,variant:"outlined",required:!0,fullWidth:!0,label:"Confirm Password",type:"password",id:"password2"})}})})]}),Object(S.jsx)(Pe.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Sign Up"}),Object(S.jsx)(Le.a,{container:!0,justifyContent:"flex-end",children:Object(S.jsx)(Le.a,{item:!0,children:Object(S.jsx)(Ge.a,{href:"/code-in-one/login",variant:"body2",children:"Already have an account? Sign in"})})})]})]}),Object(S.jsx)(Re.a,{mt:5,children:Object(S.jsx)(Me,{})})]})},Je=Ye=Object(me.a)({form:"signIn"})(Ye),Ve=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleSubmit=e.handleSubmit.bind(Object(u.a)(e)),e}return Object(l.a)(n,[{key:"handleSubmit",value:function(e){console.log(e)}},{key:"render",value:function(){return Object(S.jsx)(le.a,{store:de,children:Object(S.jsx)(Je,{onSubmit:this.handleSubmit})})}}]),n}(c.a.Component);var Ke=function(){return Object(S.jsx)(d.a,{children:Object(S.jsxs)(R.c,{children:[Object(S.jsx)(R.a,{path:"/code-in-one/",element:Object(S.jsx)(B,{})}),Object(S.jsx)(R.a,{path:"/code-in-one/challenge/:id",element:Object(S.jsx)(se,{})}),Object(S.jsx)(R.a,{path:"/code-in-one/login",element:Object(S.jsx)(qe,{})}),Object(S.jsx)(R.a,{path:"/code-in-one/signup",element:Object(S.jsx)(Ve,{})})]})})},Qe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,574)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(Ke,{})}),document.getElementById("root")),Qe()}},[[440,1,2]]]);
//# sourceMappingURL=main.42b407f4.chunk.js.map