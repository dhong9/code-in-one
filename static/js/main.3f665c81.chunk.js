(this["webpackJsonpcode-in-one"]=this["webpackJsonpcode-in-one"]||[]).push([[0],{142:function(e,t,n){},149:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(47),i=n.n(r),o=(n(142),n(49)),s=n(32),l=n(33),j=n(45),h=n(44),b=n(68),d=n(59),u=n(43),x=n(244),m=n(245),O=n(107),p=n(231),g=n(215),f=n(75),v=n.n(f),y=n(97),C=n.n(y),w=n(99),k=n.n(w),S=n(2),D=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={anchorEl:null},e.handleClose=e.handleClose.bind(Object(b.a)(e)),e.handleClick=e.handleClick.bind(Object(b.a)(e)),e}return Object(l.a)(n,[{key:"handleClick",value:function(e){var t=e.currentTarget;this.setState((function(e){return{anchorEl:t}}))}},{key:"handleClose",value:function(){this.setState((function(e){return{anchorEl:null}}))}},{key:"render",value:function(){var e=this.props.classes;return Object(S.jsxs)(c.a.Fragment,{children:[Object(S.jsx)(x.a,{color:"primary",className:"".concat(e.customColor," ").concat(e.customHeight),children:Object(S.jsxs)(g.a,{sx:{justifyContent:"space-between"},children:[Object(S.jsx)("div",{className:e.title,children:Object(S.jsx)("img",{src:"/code-in-one/home.png",width:"150",height:"32",alt:"Home"})}),Object(S.jsx)(m.a,{onClick:this.handleClick,sx:{color:"white"},children:Object(S.jsx)(C.a,{fontSize:"large"})})]})}),Object(S.jsx)(O.a,{anchorEl:this.state.anchorEl,open:!!this.state.anchorEl,onClose:this.handleClose,onClick:this.handleClose,PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:Object(S.jsx)(p.a,{children:Object(S.jsxs)(d.b,{to:"/code-in-one/login",children:[Object(S.jsx)(k.a,{})," Login"]})})}),Object(S.jsx)(g.a,{})]})}}]),n}(a.Component),F=Object(u.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},customColor:{backgroundColor:v.a[500]},customHeight:{minHeight:64},offset:e.mixins.toolbar}}))(D),E=n(246),N=n(247),H=n(221),z=(n(149),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(S.jsx)(d.b,{to:"/code-in-one/challenge/".concat(this.props.id),children:Object(S.jsx)(E.a,{className:"challengeCard",children:Object(S.jsx)(N.a,{children:Object(S.jsx)(H.a,{gutterBottom:!0,variant:"h5",component:"div",children:this.props.challengeName})})})})}}]),n}(a.Component)),I=z,B=(n(150),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={challenges:[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://dhong9.pythonanywhere.com/api/challenges/").then((function(e){return e.json()})).then((function(t){return e.setState((function(e){return{challenges:t.data}}))}))}},{key:"render",value:function(){return Object(S.jsxs)(c.a.Fragment,{children:[Object(S.jsx)(F,{}),Object(S.jsx)("div",{className:"inside",children:this.state.challenges.map((function(e,t){return Object(S.jsx)(I,Object(o.a)({},e),t)}))})]})}}]),n}(a.Component)),P=n(4),G=n(13),R=n(14),L=n(239),M=n(223),T=n(232),W=n(238),q=n(230),A=n(224),J=n(225),Y=n(240),U=n(226),V=n(100),K=n.n(V),Q=n(102),X=n.n(Q),Z=n(101),$=n.n(Z),_=n(103),ee=n.n(_),te=n(104),ne=n.n(te),ae=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.challengeName;return Object(S.jsxs)(c.a.Fragment,{children:[Object(S.jsx)(x.a,{color:"primary",className:"".concat(t.customColor," ").concat(t.customHeight),position:"fixed",children:Object(S.jsxs)(g.a,{children:[Object(S.jsx)(H.a,{className:t.title,children:"Back"}),Object(S.jsx)(H.a,{className:t.title,children:n}),Object(S.jsx)(H.a,{children:"Author"})]})}),Object(S.jsx)(g.a,{})]})}}]),n}(a.Component),ce=Object(u.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},customColor:{backgroundColor:v.a[500]},customHeight:{minHeight:40,zIndex:1201},offset:e.mixins.toolbar}}))(ae);function re(){var e=Object(R.g)(),t=Object(a.useState)({}),n=Object(G.a)(t,2),c=n[0],r=n[1];Object(a.useEffect)((function(){return fetch("https://dhong9.pythonanywhere.com/api/challenges/"+e.id).then((function(e){return e.json()})).then((function(e){return r(e.data)}))}),[e.id]);var i=[[Object(S.jsx)(K.a,{}),"Description"],[Object(S.jsx)($.a,{}),"Comments"],[Object(S.jsx)(X.a,{}),"Drafts"],[Object(S.jsx)(ee.a,{}),"Solutions"],[Object(S.jsx)(ne.a,{}),"Readme"]];return c.id?Object(S.jsxs)(L.a,{sx:{display:"flex"},children:[Object(S.jsx)(M.a,{}),Object(S.jsx)(ce,Object(o.a)({},c)),Object(S.jsxs)(T.a,{variant:"permanent",sx:Object(P.a)({width:48,flexShrink:0},"& .MuiDrawer-paper",{width:48,boxSizing:"border-box"}),children:[Object(S.jsx)(Y.a,{}),Object(S.jsx)(L.a,{sx:{overflow:"auto"},children:Object(S.jsx)(W.a,{children:i.map((function(e,t){return Object(S.jsx)(U.a,{title:e[1],placement:"right",arrow:!0,children:Object(S.jsx)(A.a,{disableGutters:!0,children:Object(S.jsx)(q.a,{button:!0,disableGutters:!0,sx:{justifyContent:"space-around"},children:Object(S.jsx)(J.a,{sx:{minWidth:0},children:e[0]})},t)})})}))})})]}),Object(S.jsxs)(L.a,{component:"main",sx:{flexGrow:1,p:3},children:[Object(S.jsx)(Y.a,{}),Object(S.jsx)("div",{children:c.challengeDesc})]})]}):Object(S.jsx)("div",{children:Object(S.jsx)("h2",{children:"Loading..."})})}var ie=n(234),oe=n(235),se=n(227),le=n(243),je=n(229),he=n(242),be=n(237),de=n(233),ue=n(105),xe=n.n(ue),me=n(241),Oe=n(106),pe=n(236);function ge(e){return Object(S.jsxs)(me.a,Object(o.a)(Object(o.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(S.jsx)(he.a,{color:"inherit",href:"https://dhong9.github.io/",children:"Daniel Hong"})," ",(new Date).getFullYear(),"."]}))}var fe=Object(Oe.a)();function ve(){return Object(S.jsx)(pe.a,{theme:fe,children:Object(S.jsxs)(de.a,{container:!0,component:"main",sx:{height:"100vh"},children:[Object(S.jsx)(M.a,{}),Object(S.jsx)(de.a,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}}),Object(S.jsx)(de.a,{item:!0,xs:12,sm:8,md:5,component:be.a,elevation:6,square:!0,children:Object(S.jsxs)(L.a,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(S.jsx)(ie.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(S.jsx)(xe.a,{})}),Object(S.jsx)(me.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(S.jsxs)(L.a,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault();var t=new FormData(e.currentTarget);console.log({email:t.get("email"),password:t.get("password")})},sx:{mt:1},children:[Object(S.jsx)(se.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(S.jsx)(se.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(S.jsx)(le.a,{control:Object(S.jsx)(je.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(S.jsx)(oe.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),Object(S.jsxs)(de.a,{container:!0,children:[Object(S.jsx)(de.a,{item:!0,xs:!0,children:Object(S.jsx)(he.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(S.jsx)(de.a,{item:!0,children:Object(S.jsx)(he.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]}),Object(S.jsx)(ge,{sx:{mt:5}})]})]})})]})})}var ye=function(){return Object(S.jsx)(d.a,{children:Object(S.jsxs)(R.c,{children:[Object(S.jsx)(R.a,{path:"/code-in-one/",element:Object(S.jsx)(B,{})}),Object(S.jsx)(R.a,{path:"/code-in-one/challenge/:id",element:Object(S.jsx)(re,{})}),Object(S.jsx)(R.a,{path:"/code-in-one/login",element:Object(S.jsx)(ve,{})})]})})},Ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,248)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(ye,{})}),document.getElementById("root")),Ce()}},[[151,1,2]]]);
//# sourceMappingURL=main.3f665c81.chunk.js.map