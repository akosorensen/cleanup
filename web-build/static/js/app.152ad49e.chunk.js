(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{244:function(e,t,n){"use strict";var r=n(12),a=n.n(r),o=n(18),c=n.n(o),i=n(13),s=n.n(i),l=n(14),u=n.n(l),f=n(10),p=n.n(f),m=n(0),d=n.n(m),g=n(6),h=n(25),y=n(3),b=n(24),v=n.n(b),E=n(55),C=n(88),w=n(213),O=n(4),S=n.n(O);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){S()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x={currentUser:null,userMarkers:[],singleMarker:{}};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){S()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D={markers:[],singleMarker:{}},M=Object(C.c)({userState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_STATE_CHANGE":return j(j({},e),{},{currentUser:t.currentUser});case"CLEAR_DATA":return x;default:return e}},markerState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MARKERS":return R(R({},e),{},{markers:t.markers});case"FETCH_SINGLE_MARKER":return R(R({},e),{},{singleMarker:t.marker});case"DELETE_MARKER":return R(R({},e),{},{markers:e.markers.filter((function(e){return e.id!==t.id})),singleMarker:D.singleMarker});default:return e}}}),T=Object(C.d)(M,Object(C.a)(w.a)),L=n(36),U=n(29),z=function(e){var t=e.navigation;return d.a.createElement(y.a,{style:I.container},d.a.createElement(y.a,{style:I.titleContainer},d.a.createElement(U.a,{style:I.image,source:n(311)})),d.a.createElement(y.a,{style:I.buttonsContainer},d.a.createElement(y.a,{style:I.buttonContainer},d.a.createElement(L.a,{title:"Create Acount",onPress:function(){return t.navigate("Register")}})),d.a.createElement(y.a,{style:I.buttonContainer},d.a.createElement(L.a,{title:"Login",onPress:function(){return t.navigate("Login")}}))))},I=g.a.create({container:{flex:1,backgroundColor:"#e9ffb9",alignItems:"center"},titleContainer:{flex:5,alignItems:"center",justifyContent:"flex-end"},image:{height:350,width:350,resizeMode:"cover"},buttonsContainer:{justifyContent:"center",flex:3},buttonContainer:{margin:10}}),A=n(16),_=n.n(A),N=n(33);function W(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p()(e);if(t){var a=p()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u()(this,n)}}var B=function(e){s()(n,e);var t=W(n);function n(){var e;return a()(this,n),(e=t.call(this)).state={email:"",password:"",name:"",zipcode:0},e.onSignUp=e.onSignUp.bind(_()(e)),e}return c()(n,[{key:"onSignUp",value:function(){var e=this.state,t=e.email,n=e.password,r=e.name,a=e.zipcode;v.a.auth().createUserWithEmailAndPassword(t,n).then((function(e){v.a.firestore().collection("users").doc(v.a.auth().currentUser.uid).set({name:r,email:t,zipcode:a}),console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return d.a.createElement(y.a,{style:F.container},d.a.createElement(y.a,{style:F.inputContainer},d.a.createElement(N.a,{style:F.caption,numberOfLines:3,placeholder:"name",onChangeText:function(t){return e.setState({name:t})}})),d.a.createElement(y.a,{style:F.inputContainer},d.a.createElement(N.a,{style:F.caption,numberOfLines:3,placeholder:"email",onChangeText:function(t){return e.setState({email:t})}})),d.a.createElement(y.a,{style:F.inputContainer},d.a.createElement(N.a,{style:F.caption,numberOfLines:3,placeholder:"password",secureTextEntry:!0,onChangeText:function(t){return e.setState({password:t})}})),d.a.createElement(y.a,{style:F.inputContainer},d.a.createElement(N.a,{style:F.caption,numberOfLines:3,placeholder:"zipcode",onChangeText:function(t){return e.setState({zipcode:t})}})),d.a.createElement(y.a,{style:F.buttonContainer},d.a.createElement(L.a,{style:F.button,onPress:this.onSignUp,title:"Sign Up"})))}}]),n}(m.Component),F=g.a.create({container:{flex:1,backgroundColor:"#bbf1fa",alignItems:"center"},inputContainer:{width:"80%"},caption:{fontSize:20,color:"#284184",fontWeight:"500"},image:{height:350,width:350,resizeMode:"cover"},buttonContainer:{justifyContent:"flex-end",width:"40%",marginVertical:30}}),G=n(2),H=n.n(G);function K(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p()(e);if(t){var a=p()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u()(this,n)}}var V=function(e){s()(n,e);var t=K(n);function n(){var e;return a()(this,n),(e=t.call(this)).state={email:"",password:""},e.onLogin=e.onLogin.bind(_()(e)),e}return c()(n,[{key:"onLogin",value:function(){var e,t,n,r;return H.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e=this.state,t=e.email,n=e.password,a.next=4,H.a.awrap(v.a.auth().signInWithEmailAndPassword(t,n));case 4:r=a.sent,console.log(r),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),null,this,[[0,8]],Promise)}},{key:"render",value:function(){var e=this;return d.a.createElement(y.a,{style:J.container},d.a.createElement(y.a,{style:J.inputContainer},d.a.createElement(N.a,{placeholder:"email",style:J.caption,numberOfLines:3,onChangeText:function(t){return e.setState({email:t})}})),d.a.createElement(y.a,{style:J.inputContainer},d.a.createElement(N.a,{placeholder:"password",style:J.caption,numberOfLines:3,secureTextEntry:!0,onChangeText:function(t){return e.setState({password:t})}})),d.a.createElement(y.a,{style:J.buttonContainer},d.a.createElement(L.a,{onPress:this.onLogin,title:"Login"})))}}]),n}(m.Component),J=g.a.create({container:{flex:1,backgroundColor:"#bbf1fa",alignItems:"center"},inputContainer:{width:"80%"},caption:{fontSize:20,color:"#284184",fontWeight:"500"},image:{height:350,width:350,resizeMode:"cover"},buttonContainer:{justifyContent:"flex-end",width:"40%",marginVertical:30}}),q=n(11),Z=n.n(q),Q=n(444),X=n(164),Y=n(59);function $(e){var t=Object(m.useState)(null),n=Z()(t,2),r=n[0],a=n[1],o=Object(m.useState)(null),c=Z()(o,2),i=c[0],s=c[1],l=Object(m.useState)(null),u=Z()(l,2),f=u[0],p=u[1],g=Object(m.useState)(null),b=Z()(g,2),v=b[0],E=b[1],C=Object(m.useState)(Q.a.Constants.Type.back),w=Z()(C,2),O=w[0],S=w[1],k=e.navigation;Object(m.useEffect)((function(){!function(){var e,t;H.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,H.a.awrap(Q.a.requestPermissionsAsync());case 2:return e=n.sent,s("granted"===e.status),n.next=6,H.a.awrap(X.b());case 6:t=n.sent,a("granted"===t.status);case 8:case"end":return n.stop()}}),null,null,null,Promise)}()}),[]);return null===i||null===r?d.a.createElement(y.a,null):!1===i||!1===r?d.a.createElement(h.a,null,"No access to camera"):d.a.createElement(y.a,{style:ee.container},d.a.createElement(y.a,{style:ee.cameraContainer},d.a.createElement(Q.a,{ref:function(e){return p(e)},style:ee.fixedRatio,type:O,ratio:"1:1"})),d.a.createElement(L.a,{title:"Flip Image",onPress:function(){S(O===Q.a.Constants.Type.back?Q.a.Constants.Type.front:Q.a.Constants.Type.back)}}),d.a.createElement(L.a,{title:"Take Picture",onPress:function(){var e;return H.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!f){t.next=5;break}return t.next=3,H.a.awrap(f.takePictureAsync(null));case 3:e=t.sent,E(e.uri);case 5:case"end":return t.stop()}}),null,null,null,Promise)}}),d.a.createElement(L.a,{title:"Pick Image From Gallery",onPress:function(){var e;return H.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.a.awrap(X.a({mediaTypes:Y.a.Images,allowsEditing:!0,aspect:[1,1],quality:1}));case 2:e=t.sent,console.log(e),e.cancelled||E(e.uri);case 5:case"end":return t.stop()}}),null,null,null,Promise)}}),d.a.createElement(L.a,{title:"Save",onPress:function(){return k.navigate("Save",{image:v})}}),v&&d.a.createElement(U.a,{source:{uri:v},style:ee.container}))}var ee=g.a.create({container:{flex:1},cameraContainer:{flex:1,flexDirection:"row"},fixedRatio:{flex:1,aspectRatio:1}});function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){S()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(188);function re(){return function(e){var t;return H.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,H.a.awrap(v.a.firestore().collection("users").doc(v.a.auth().currentUser.uid).get().then((function(e){return e.data().zipcode})));case 2:t=n.sent,v.a.firestore().collection("posts").doc("location").collection(t).get().then((function(t){var n=t.docs.map((function(e){var t=e.data();return ne({id:e.id},t)}));n.length?e({type:"FETCH_MARKERS",markers:n}):console.log("No markers")}));case 4:case"end":return n.stop()}}),null,null,null,Promise)}}function ae(){var e=Object(m.useState)(0),t=Z()(e,2),n=t[0],r=t[1],a=Object(m.useState)(0),o=Z()(a,2),c=o[0],i=o[1];return{latitude:n,longitude:c,getLocation:function(){navigator.geolocation.getCurrentPosition((function(e){r(e.coords.latitude),i(e.coords.longitude)}),(function(e){return console.log(e)}),{enableHighAccuracy:!1,timeout:2e5,maximumAge:1e3})}}}n(188),n(406);var oe=Object(E.b)((function(e){return{currentUser:e.userState.currentUser}}),(function(e){return{fetchMarkers:function(){return e(re())}}}))((function(e){var t=Object(m.useState)(""),n=Z()(t,2),r=n[0],a=n[1],o=ae(),c=o.latitude,i=o.longitude,s=o.getLocation;Object(m.useEffect)((function(){s()}));var l=e.route.params.image,u=e.navigation,f=e.currentUser,p=f.zipcode,g=f.name,h=function(t){v.a.firestore().collection("posts").doc("location").collection(p).add({name:g,downloadURL:t,caption:r,creation:v.a.firestore.FieldValue.serverTimestamp(),location:new v.a.firestore.GeoPoint(c,i)}).then((function(){e.fetchMarkers(),u.popToTop()}))};return d.a.createElement(y.a,{style:ce.container},d.a.createElement(y.a,{style:ce.inputContainer},d.a.createElement(N.a,{style:ce.caption,numberOfLines:3,placeholder:"Write a Description..",onChangeText:function(e){return a(e)}})),d.a.createElement(y.a,{style:ce.imageContainer},d.a.createElement(U.a,{style:ce.image,source:{uri:l}})),d.a.createElement(y.a,{style:ce.buttonContainer},d.a.createElement(L.a,{style:ce.button,title:"Save",onPress:function(){var e,t,n,r,a,o,c;return H.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e="posts/"+v.a.auth().currentUser.uid+"/"+Math.random().toString(36),i.next=3,H.a.awrap(fetch(l));case 3:return t=i.sent,i.next=6,H.a.awrap(t.blob());case 6:n=i.sent,r=v.a.storage().ref().child(e).put(n),a=function(e){console.log("transferred: "+e.bytesTransferred)},o=function(){r.snapshot.ref.getDownloadURL().then((function(e){h(e),console.log("completed: ",e)}))},c=function(e){console.log("error: ",e)},r.on("state_changed",a,c,o);case 12:case"end":return i.stop()}}),null,null,null,Promise)}})))})),ce=g.a.create({container:{flex:1,backgroundColor:"#bbf1fa",alignItems:"center"},inputContainer:{width:"80%"},caption:{fontSize:20,color:"#284184",fontWeight:"500"},imageContainer:{justifyContent:"center",margin:20},image:{height:300,width:300,resizeMode:"cover",justifyContent:"center"},buttonContainer:{justifyContent:"flex-end",width:"40%",marginVertical:30}}),ie=n(146),se=n(26),le=Object(E.b)((function(e){return{markers:e.markerState.markers}}),(function(e){return{fetchMarkers:function(){return e(re())}}}))((function(e){var t=Object(se.useNavigation)();Object(m.useEffect)((function(){e.fetchMarkers()}));var r=e.region,a={latitude:r.latitude,longitude:r.longitude,latitudeDelta:.1,longitudeDelta:.1};return d.a.createElement(ie.c,{style:ue.map,region:a,showsUserLocation:!0},e.markers&&e.markers.length?e.markers.map((function(e){var r=e.caption,a=e.downloadURL,o=e.id,c=e.location,i=c.U,s=c.k;return d.a.createElement(ie.b,{key:o,coordinate:{latitude:i,longitude:s},image:n(419)},d.a.createElement(ie.a,{tooltip:!0,onPress:function(){return t.navigate("Details",{id:o})}},d.a.createElement(y.a,null,d.a.createElement(y.a,{style:ue.bubble},d.a.createElement(y.a,{style:ue.captionContainer},d.a.createElement(h.a,{style:ue.caption},r)),d.a.createElement(h.a,{style:ue.imageContainer},d.a.createElement(U.a,{source:{uri:a},style:ue.image})))),d.a.createElement(y.a,{style:ue.arrowBorder}),d.a.createElement(y.a,{style:ue.arrow})))})):null)})),ue=g.a.create({map:{height:"100%",width:"100%"},bubble:{flexDirection:"column",alignSelf:"flex-start",backgroundColor:"#fff",borderRadius:6,borderColor:"#ccc",borderWidth:.5,padding:15,alignItems:"center"},arrow:{backgroundColor:"transparent",borderColor:"transparent",borderTopColor:"#fff",borderWidth:16,alignSelf:"center",marginTop:-32},arrowBorder:{backgroundColor:"transparent",borderColor:"transparent",borderTopColor:"#007a87",borderWidth:16,alignSelf:"center",marginTop:-.5},caption:{fontSize:16,marginBottom:5},image:{height:100,width:100,resizeMode:"cover",position:"absolute",flex:1},imageContainer:{fontSize:150}}),fe=n(115),pe=function(){var e=ae(),t=e.latitude,n=e.longitude,r=e.getLocation;return Object(m.useEffect)((function(){r()})),d.a.createElement(fe.a,{forceInset:{top:"always"}},d.a.createElement(le,{region:{latitude:t,longitude:n}}))},me=n(443),de=n(84),ge=Object(me.a)(),he=function(){return null},ye=Object(E.b)((function(e){return{currentUser:e.userState.currentUser}}),(function(e){return{fetchUser:function(){return e((function(e){v.a.firestore().collection("users").doc(v.a.auth().currentUser.uid).get().then((function(t){t.exists?e({type:"USER_STATE_CHANGE",currentUser:t.data()}):console.log("User does not exist")}))}))}}}))((function(e){return Object(m.useEffect)((function(){e.fetchUser()})),d.a.createElement(ge.Navigator,{initialRouteName:"MapScreen",labeled:!1},d.a.createElement(ge.Screen,{name:"MapScreen",component:pe,options:{tabBarIcon:function(e){var t=e.color;e.size;return d.a.createElement(de.default,{name:"home",color:t,size:26})}}}),d.a.createElement(ge.Screen,{name:"PostTrash",component:he,listeners:function(e){var t=e.navigation;return{tabPress:function(e){e.preventDefault(),t.navigate("Post")}}},options:{tabBarIcon:function(e){var t=e.color;e.size;return d.a.createElement(de.default,{name:"plus-box",color:t,size:26})}}}),d.a.createElement(ge.Screen,{name:"Logout",component:he,listeners:function(){return{tabPress:function(e){e.preventDefault(),v.a.auth().signOut()}}},options:{tabBarIcon:function(e){var t=e.color;e.size;return d.a.createElement(de.default,{name:"logout-variant",color:t,size:26})}}}))}));function be(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p()(e);if(t){var a=p()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u()(this,n)}}var ve=function(e){s()(n,e);var t=be(n);function n(){return a()(this,n),t.apply(this,arguments)}return c()(n,[{key:"componentDidMount",value:function(){this.props.fetchSingleMarker(this.props.route.params.id)}},{key:"handleDelete",value:function(){this.props.navigation.goBack(),this.props.delete(this.props.route.params.id)}},{key:"fetchDate",value:function(){return this.props.singleMarker.creation?" on "+this.props.singleMarker.creation.toDate():null}},{key:"render",value:function(){var e=this,t=this.props.singleMarker,n=t.caption,r=t.downloadURL,a=t.name;return d.a.createElement(y.a,{style:Ce.container},d.a.createElement(y.a,{style:Ce.nameContainer},d.a.createElement(h.a,{style:Ce.name},"Issued by ",a,this.fetchDate())),d.a.createElement(y.a,{style:Ce.subContainer},d.a.createElement(y.a,{style:Ce.imageContainer},d.a.createElement(U.a,{source:{uri:r},style:Ce.image})),d.a.createElement(y.a,{style:Ce.captionContainer},d.a.createElement(h.a,{style:Ce.caption},n)),d.a.createElement(y.a,{style:Ce.removeContainer},d.a.createElement(L.a,{style:Ce.button,title:"Cleaned!",onPress:function(){return e.handleDelete()}}))))}}]),n}(m.Component),Ee=Object(E.b)((function(e){return{singleMarker:e.markerState.singleMarker}}),(function(e){return{delete:function(t){return e(function(e){return function(t){var n;return H.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,H.a.awrap(v.a.firestore().collection("users").doc(v.a.auth().currentUser.uid).get().then((function(e){return e.data().zipcode})));case 2:n=r.sent,v.a.firestore().collection("posts").doc("location").collection(n).doc(e).delete().then((function(){t({type:"DELETE_MARKER",id:e})}));case 4:case"end":return r.stop()}}),null,null,null,Promise)}}(t))},fetchSingleMarker:function(t){return e(function(e){return function(t){var n;return H.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,H.a.awrap(v.a.firestore().collection("users").doc(v.a.auth().currentUser.uid).get().then((function(e){return e.data().zipcode})));case 2:n=r.sent,v.a.firestore().collection("posts").doc("location").collection(n).doc(e).get().then((function(e){var n=e.data(),r=ne({id:e.id},n);r?t({type:"FETCH_SINGLE_MARKER",marker:r}):console.log("This user does not have a marker with associated id")}));case 4:case"end":return r.stop()}}),null,null,null,Promise)}}(t))}}}))(ve),Ce=g.a.create({container:{flex:1,backgroundColor:"#bbf1fa"},nameContainer:{margin:20,alignItems:"flex-end"},name:{fontSize:15,color:"#284184",fontWeight:"900",fontStyle:"italic"},subContainer:{flex:1,backgroundColor:"#bbf1fa",alignItems:"center"},captionContainer:{padding:10,width:"100%",alignItems:"center",justifyContent:"center"},caption:{fontSize:20,color:"#284184",fontWeight:"500"},imageContainer:{justifyContent:"center",margin:20},image:{height:300,width:300,resizeMode:"cover",justifyContent:"center"},removeContainer:{position:"absolute",bottom:40,width:"40%"}}),we=n(210),Oe=n(442);function Se(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p()(e);if(t){var a=p()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u()(this,n)}}var ke=n(428);0===b.apps.length&&b.initializeApp(ke);var je=Object(Oe.a)(),xe=function(e){s()(n,e);var t=Se(n);function n(){var e;return a()(this,n),(e=t.call(this)).state={loaded:!1},e}return c()(n,[{key:"componentDidMount",value:function(){var e=this;b.auth().onAuthStateChanged((function(t){t?e.setState({loggedIn:!0,loaded:!0}):e.setState({loggedIn:!1,loaded:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.loggedIn;return e.loaded?t?d.a.createElement(E.a,{store:T},d.a.createElement(we.a,null,d.a.createElement(je.Navigator,{initialRouteName:"Main"},d.a.createElement(je.Screen,{name:"Main",component:ye,options:{headerShown:!1}}),d.a.createElement(je.Screen,{name:"Details",component:Ee,options:this.props.navigation}),d.a.createElement(je.Screen,{name:"Post",component:$,navigation:this.props.navigation}),d.a.createElement(je.Screen,{name:"Save",component:oe,navigation:this.props.navigation})))):d.a.createElement(we.a,null,d.a.createElement(je.Navigator,{initialRouteName:"Landing"},d.a.createElement(je.Screen,{name:"Landing",component:z,options:{headerShown:!1}}),d.a.createElement(je.Screen,{name:"Register",component:B}),d.a.createElement(je.Screen,{name:"Login",component:V}))):d.a.createElement(y.a,{style:Pe.container},d.a.createElement(h.a,null,"Loading..."))}}]),n}(m.Component),Pe=(t.a=xe,g.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}))},285:function(e,t,n){e.exports=n(432)},311:function(e,t,n){e.exports=n.p+"static/media/Logo.5e1f9a40.png"},419:function(e,t,n){e.exports=n.p+"static/media/broom.6c937dcf.png"},428:function(e,t){e.exports={apiKey:"AIzaSyBabTmL0Bj-psDZoMand3fhv_pkFANph6E",authDomain:"playmates-f592e.firebaseapp.com",projectId:"playmates-f592e",storageBucket:"playmates-f592e.appspot.com",messagingSenderId:"7132033536",appId:"1:7132033536:web:02efda3dee3e1400049ee5",measurementId:"G-9RS44DJGH0"}}},[[285,1,2]]]);
//# sourceMappingURL=app.152ad49e.chunk.js.map