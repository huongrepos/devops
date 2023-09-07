"use strict";(self.webpackChunk_nextcloud_text=self.webpackChunk_nextcloud_text||[]).push([["editor-guest"],{44666:(e,t,s)=>{s.d(t,{Z:()=>o});var a=s(87537),n=s.n(a),i=s(23645),r=s.n(i)()(n());r.push([e.id,".avatar[data-v-1bf0295d],.avatar-wrapper[data-v-1bf0295d]{border-radius:50%;width:var(--size);height:var(--size);text-align:center;color:#fff;line-height:var(--size);font-size:var(--font-size);font-weight:normal;display:flex;justify-content:center;align-items:center}","",{version:3,sources:["webpack://./src/components/Editor/AvatarWrapper.vue"],names:[],mappings:"AAEA,0DACC,iBAAA,CACA,iBAAA,CACA,kBAAA,CACA,iBAAA,CACA,UAAA,CACA,uBAAA,CACA,0BAAA,CACA,kBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA",sourcesContent:["\n\n.avatar, .avatar-wrapper {\n\tborder-radius: 50%;\n\twidth: var(--size);\n\theight: var(--size);\n\ttext-align: center;\n\tcolor: #ffffff;\n\tline-height: var(--size);\n\tfont-size: var(--font-size);\n\tfont-weight: normal;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n"],sourceRoot:""}]);const o=r},51047:(e,t,s)=>{s.d(t,{Z:()=>o});var a=s(87537),n=s.n(a),i=s(23645),r=s.n(i)()(n());r.push([e.id,"form.guest-name-dialog[data-v-d273994a]{display:flex;align-items:center;padding:6px}form.guest-name-dialog[data-v-d273994a] img{margin:0 !important}form.guest-name-dialog input[type=text][data-v-d273994a]{flex-grow:1}form.guest-name-dialog label[data-v-d273994a]{padding-right:3px;height:32px}","",{version:3,sources:["webpack://./src/components/Editor/GuestNameDialog.vue"],names:[],mappings:"AACA,wCACC,YAAA,CACA,kBAAA,CACA,WAAA,CAEA,4CACC,mBAAA,CAGD,yDACC,WAAA,CAED,8CACC,iBAAA,CACA,WAAA",sourcesContent:["\nform.guest-name-dialog {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 6px;\n\n\t&:deep(img) {\n\t\tmargin: 0 !important;\n\t}\n\n\tinput[type=text] {\n\t\tflex-grow: 1;\n\t}\n\tlabel {\n\t\tpadding-right: 3px;\n\t\theight: 32px;\n\t}\n}\n"],sourceRoot:""}]);const o=r},47849:(e,t,s)=>{s.d(t,{Z:()=>h});const a={name:"AvatarWrapper",components:{NcAvatar:s(15961).Xn},props:{session:{type:Object,required:!0},size:{type:Number,default:()=>32}},computed:{sessionAvatarStyle(){return{...this.sessionBackgroundStyle,"border-color":this.session.color,"border-width":"2px","border-style":"solid","--size":this.size+"px","--font-size":this.size/2+"px"}},sessionBackgroundStyle(){return{"background-color":this.session.userId?this.session.color+" !important":"#b9b9b9"}},guestInitial(){return""===this.session.guestName?"?":this.session.guestName.slice(0,1).toUpperCase()}}};var n=s(93379),i=s.n(n),r=s(7795),o=s.n(r),u=s(90569),l=s.n(u),A=s(3565),d=s.n(A),p=s(19216),c=s.n(p),m=s(44589),g=s.n(m),v=s(44666),f={};f.styleTagTransform=g(),f.setAttributes=d(),f.insert=l().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=c();i()(v.Z,f);v.Z&&v.Z.locals&&v.Z.locals;const h=(0,s(51900).Z)(a,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"avatar-wrapper",style:e.sessionAvatarStyle},[e.session.userId?t("NcAvatar",{attrs:{user:e.session.userId?e.session.userId:e.session.guestName,"is-guest":null===e.session.userId,"disable-menu":!0,"show-user-status":!1,"disable-tooltip":!0,size:e.size}}):t("div",{staticClass:"avatar",style:e.sessionBackgroundStyle},[e._v("\n\t\t"+e._s(e.guestInitial)+"\n\t")])],1)}),[],!1,null,"1bf0295d",null).exports},55312:(e,t,s)=>{s.r(t),s.d(t,{default:()=>y});var a=s(15961),n=s(79753),i=s(47849),r=s(31728);const o={name:"GuestNameDialog",components:{AvatarWrapper:i.Z},directives:{tooltip:a.u},mixins:[r.BG],props:{session:{type:Object,required:!0}},data:()=>({guestName:"",guestNameBuffered:""}),computed:{avatarUrl(){const e=(0,n.generateUrl)("/avatar/guest/{user}/{size}",{user:this.guestNameBuffered,size:32});return window.location.protocol+"//"+window.location.host+e}},beforeMount(){this.guestName=this.$syncService.session.guestName,this.updateBufferedGuestName()},methods:{setGuestName(){const e=this.$syncService.session.guestName;this.$syncService.updateSession(this.guestName).then((()=>{localStorage.setItem("nick",this.guestName),this.updateBufferedGuestName()})).catch((t=>{this.guestName=e}))},updateBufferedGuestName(){this.guestNameBuffered=this.guestName}}};var u=s(93379),l=s.n(u),A=s(7795),d=s.n(A),p=s(90569),c=s.n(p),m=s(3565),g=s.n(m),v=s(19216),f=s.n(v),h=s(44589),C=s.n(h),x=s(51047),b={};b.styleTagTransform=C(),b.setAttributes=g(),b.insert=c().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=f();l()(x.Z,b);x.Z&&x.Z.locals&&x.Z.locals;const y=(0,s(51900).Z)(o,(function(){var e=this,t=e._self._c;return t("form",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.t("text","Enter your name so other people can see who is editing"),expression:"t('text', 'Enter your name so other people can see who is editing')"}],staticClass:"guest-name-dialog",on:{submit:function(t){return t.preventDefault(),e.setGuestName()}}},[t("label",[t("AvatarWrapper",{attrs:{session:e.session,size:32}})],1),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.guestName,expression:"guestName"}],attrs:{type:"text","aria-label":e.t("text","Edit guest name"),placeholder:e.t("text","Guest")},domProps:{value:e.guestName},on:{input:function(t){t.target.composing||(e.guestName=t.target.value)}}}),e._v(" "),t("input",{staticClass:"icon-confirm",attrs:{type:"submit","aria-label":e.t("text","Save guest name"),value:""}})])}),[],!1,null,"d273994a",null).exports}}]);
//# sourceMappingURL=editor-guest.js.map?v=4760cdcfd157fd4b2543