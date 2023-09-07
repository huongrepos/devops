/*! For license information please see files-sidebar.js.LICENSE.txt */
(()=>{var e,s={40437:(e,s,i)=>{"use strict";var n=i(20144),a=i(31352),o=i(65358),r=i(19755),l=i.n(r),d=i(4820),c=i(78595),u=i(80351),h=i.n(u),p=i(41922),f=i(10250),g=i.n(f),m=i(45400),y=i.n(m),b=i(93455),v=i.n(b),A=i(62574);const w={name:"SidebarTab",components:{NcAppSidebarTab:i.n(A)(),NcEmptyContent:v()},props:{fileInfo:{type:Object,default:()=>{},required:!0},id:{type:String,required:!0},name:{type:String,required:!0},icon:{type:String,required:!1},onMount:{type:Function,required:!0},onUpdate:{type:Function,required:!0},onDestroy:{type:Function,required:!0},onScrollBottomReached:{type:Function,default:()=>{}}},data:()=>({loading:!0}),computed:{activeTab(){return this.$parent.activeTab}},watch:{async fileInfo(t,e){t.id!==e.id&&(this.loading=!0,await this.onUpdate(this.fileInfo),this.loading=!1)}},async mounted(){this.loading=!0,await this.onMount(this.$refs.mount,this.fileInfo,this.$refs.tab),this.loading=!1},async beforeDestroy(){await this.onDestroy()}};var j=i(51900);const C=(0,j.Z)(w,(function(){var t=this,e=t._self._c;return e("NcAppSidebarTab",{ref:"tab",attrs:{id:t.id,name:t.name,icon:t.icon},on:{bottomReached:t.onScrollBottomReached},scopedSlots:t._u([{key:"icon",fn:function(){return[t._t("icon")]},proxy:!0}],null,!0)},[t._v(" "),t.loading?e("NcEmptyContent",{attrs:{icon:"icon-loading"}}):t._e(),t._v(" "),e("div",{ref:"mount"})],1)}),[],!1,null,null,null).exports,_={name:"LegacyView",props:{component:{type:Object,required:!0},fileInfo:{type:Object,default:()=>{},required:!0}},watch:{fileInfo(t){this.setFileInfo(t)}},mounted(){this.component.$el.replaceAll(this.$el),this.setFileInfo(this.fileInfo)},methods:{setFileInfo(t){this.component.setFileInfo(new OCA.Files.FileInfoModel(t))}}},I=(0,j.Z)(_,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null).exports;var T,S=i(64192),x=i.n(S),O=i(11677),F=i.n(O),k=i(64024),E=i(79753),z=i(14596),L=i(45994);const D=(0,E.generateRemoteUrl)("dav"),P=(0,z.eI)(D,{headers:{requesttoken:null!==(T=(0,L.IH)())&&void 0!==T?T:""}});var N=i(23204),M=i.n(N);const R=t=>t.map((t=>{let{props:e}=t;return Object.fromEntries(Object.entries(e).map((t=>{let[e,s]=t;return[M()(e),s]})))})),U=t=>{const e=t.indexOf("?");e>0&&(t=t.substring(0,e));const s=t.split("/");let i;do{i=s[s.length-1],s.pop()}while(!i&&s.length>0);return Number(i)},q=t=>{const e={...t};return e.name&&!e.displayName||(e.name=e.displayName,delete e.displayName),e},B=(0,i(17499).IY)().setApp("systemtags").detectUser().build(),Z='<?xml version="1.0"?>\n<d:propfind  xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns">\n\t<d:prop>\n\t\t<oc:id />\n\t\t<oc:display-name />\n\t\t<oc:user-visible />\n\t\t<oc:user-assignable />\n\t\t<oc:can-assign />\n\t</d:prop>\n</d:propfind>',$=async(t,e)=>{const s="/systemtags-relations/files/"+t+"/"+e.id,i=q(e);try{await P.customRequest(s,{method:"PUT",data:i})}catch(t){throw B.error((0,a.Iu)("systemtags","Failed to select tag"),{error:t}),new Error((0,a.Iu)("systemtags","Failed to select tag"))}},H={userVisible:!0,userAssignable:!0,canAssign:!0},V=n.default.extend({name:"SystemTags",components:{NcLoadingIcon:x(),NcSelectTags:F()},props:{fileId:{type:Number,required:!0}},data:()=>({sortedTags:[],selectedTags:[],loadingTags:!1,loading:!1}),async created(){try{const t=await(async()=>{try{const{data:t}=await P.getDirectoryContents("/systemtags",{data:Z,details:!0,glob:"/systemtags/*"});return R(t)}catch(t){throw B.error((0,a.Iu)("systemtags","Failed to load tags"),{error:t}),new Error((0,a.Iu)("systemtags","Failed to load tags"))}})(),e=await(async()=>{const t=(0,E.generateUrl)("/apps/systemtags/lastused");try{const{data:e}=await d.default.get(t);return e.map(Number)}catch(t){throw B.error((0,a.Iu)("systemtags","Failed to load last used tags"),{error:t}),new Error((0,a.Iu)("systemtags","Failed to load last used tags"))}})(),s=[],i=[];for(const n of t)e.includes(n.id)?s.push(n):i.push(n);const n=(t,s)=>e.indexOf(t.id)-e.indexOf(s.id);s.sort(n),this.sortedTags=[...s,...i]}catch(t){(0,k.x2)((0,a.Iu)("systemtags","Failed to load tags"))}},watch:{fileId:{immediate:!0,async handler(){this.loadingTags=!0;try{this.selectedTags=await(async t=>{const e="/systemtags-relations/files/"+this.fileId;try{const{data:t}=await P.getDirectoryContents(e,{data:Z,details:!0,glob:"/systemtags-relations/files/*/*"});return R(t)}catch(t){throw B.error((0,a.Iu)("systemtags","Failed to load selected tags"),{error:t}),new Error((0,a.Iu)("systemtags","Failed to load selected tags"))}})(),this.$emit("has-tags",this.selectedTags.length>0)}catch(t){(0,k.x2)((0,a.Iu)("systemtags","Failed to load selected tags"))}this.loadingTags=!1}}},methods:{t:a.Iu,createOption(t){for(const e of this.sortedTags){const{id:s,displayName:i,...n}=e;if(i===t&&Object.entries(n).every((t=>{let[e,s]=t;return H[e]===s})))return e}return{...H,displayName:t}},handleInput(t){this.selectedTags=t.filter((t=>Boolean(t.id)))},async handleSelect(t){const e=t[t.length-1];if(e.id){this.loading=!0;try{await $(this.fileId,e);const t=(t,s)=>t.id===e.id?-1:s.id===e.id?1:0;this.sortedTags.sort(t)}catch(t){(0,k.x2)((0,a.Iu)("systemtags","Failed to select tag"))}this.loading=!1}},async handleCreate(t){this.loading=!0;try{const e=await(async(t,e)=>{const s=q(e);try{const{headers:e}=await P.customRequest("/systemtags",{method:"POST",data:s}),i=e.get("content-location");if(i){const e={...s,id:U(i)};return await $(t,e),e.id}throw B.error((0,a.Iu)("systemtags",'Missing "Content-Location" header')),new Error((0,a.Iu)("systemtags",'Missing "Content-Location" header'))}catch(t){throw B.error((0,a.Iu)("systemtags","Failed to create tag"),{error:t}),new Error((0,a.Iu)("systemtags","Failed to create tag"))}})(this.fileId,t),s={...t,id:e};this.sortedTags.unshift(s),this.selectedTags.push(s)}catch(t){(0,k.x2)((0,a.Iu)("systemtags","Failed to create tag"))}this.loading=!1},async handleDeselect(t){this.loading=!0;try{await(async(t,e)=>{const s="/systemtags-relations/files/"+t+"/"+e.id;try{await P.deleteFile(s)}catch(t){throw B.error((0,a.Iu)("systemtags","Failed to delete tag"),{error:t}),new Error((0,a.Iu)("systemtags","Failed to delete tag"))}})(this.fileId,t)}catch(t){(0,k.x2)((0,a.Iu)("systemtags","Failed to delete tag"))}this.loading=!1}}});var K=i(93379),W=i.n(K),Y=i(7795),G=i.n(Y),J=i(90569),Q=i.n(J),X=i(3565),tt=i.n(X),et=i(19216),st=i.n(et),it=i(44589),nt=i.n(it),at=i(85570),ot={};ot.styleTagTransform=nt(),ot.setAttributes=tt(),ot.insert=Q().bind(null,"head"),ot.domAPI=G(),ot.insertStyleElement=st(),W()(at.Z,ot),at.Z&&at.Z.locals&&at.Z.locals;const rt=(0,j.Z)(V,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",{staticClass:"system-tags"},[t.loadingTags?e("NcLoadingIcon",{attrs:{name:t.t("systemtags","Loading collaborative tags …"),size:32}}):[e("label",{attrs:{for:"system-tags-input"}},[t._v(t._s(t.t("systemtags","Search or create collaborative tags")))]),t._v(" "),e("NcSelectTags",{staticClass:"system-tags__select",attrs:{"input-id":"system-tags-input",placeholder:t.t("systemtags","Collaborative tags …"),options:t.sortedTags,value:t.selectedTags,"create-option":t.createOption,taggable:!0,passthru:!0,"fetch-tags":!1,loading:t.loading},on:{input:t.handleInput,"option:selected":t.handleSelect,"option:created":t.handleCreate,"option:deselected":t.handleDeselect},scopedSlots:t._u([{key:"no-options",fn:function(){return[t._v("\n\t\t\t\t"+t._s(t.t("systemtags","No tags to select, type to create a new tag"))+"\n\t\t\t")]},proxy:!0}])})]],2)}),[],!1,null,"7746ac6e",null).exports;var lt=i(25108);const dt={name:"Sidebar",components:{LegacyView:I,NcActionButton:y(),NcAppSidebar:g(),NcEmptyContent:v(),SidebarTab:C,SystemTags:rt},data:()=>({Sidebar:OCA.Files.Sidebar.state,showTags:!1,error:null,loading:!0,fileInfo:null,starLoading:!1,isFullScreen:!1,hasLowHeight:!1}),computed:{file(){return this.Sidebar.file},tabs(){return this.Sidebar.tabs},views(){return this.Sidebar.views},davPath(){const t=OC.getCurrentUser().uid;return OC.linkToRemote("dav/files/".concat(t).concat((0,o.Ec)(this.file)))},activeTab(){return this.Sidebar.activeTab},subtitle(){return"".concat(this.size,", ").concat(this.time)},time(){return OC.Util.relativeModifiedDate(this.fileInfo.mtime)},fullTime(){return h()(this.fileInfo.mtime).format("LLL")},size(){return OC.Util.humanFileSize(this.fileInfo.size)},background(){return this.getPreviewIfAny(this.fileInfo)},appSidebar(){return this.fileInfo?{"data-mimetype":this.fileInfo.mimetype,"star-loading":this.starLoading,active:this.activeTab,background:this.background,class:{"app-sidebar--has-preview":this.fileInfo.hasPreview&&!this.isFullScreen,"app-sidebar--full":this.isFullScreen},compact:this.hasLowHeight||!this.fileInfo.hasPreview||this.isFullScreen,loading:this.loading,starred:this.fileInfo.isFavourited,subtitle:this.subtitle,subtitleTooltip:this.fullTime,title:this.fileInfo.name,titleTooltip:this.fileInfo.name}:this.error?{key:"error",subtitle:"",title:""}:{loading:this.loading,subtitle:"",title:""}},defaultAction(){return this.fileInfo&&OCA.Files&&OCA.Files.App&&OCA.Files.App.fileList&&OCA.Files.App.fileList.fileActions&&OCA.Files.App.fileList.fileActions.getDefaultFileAction&&OCA.Files.App.fileList.fileActions.getDefaultFileAction(this.fileInfo.mimetype,this.fileInfo.type,OC.PERMISSION_READ)},defaultActionListener(){return this.defaultAction?"figure-click":null},isSystemTagsEnabled:()=>OCA&&"SystemTags"in OCA},created(){window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize()},beforeDestroy(){window.removeEventListener("resize",this.handleWindowResize)},methods:{canDisplay(t){return t.enabled(this.fileInfo)},resetData(){this.error=null,this.fileInfo=null,this.$nextTick((()=>{this.$refs.tabs&&this.$refs.tabs.updateTabs()}))},getPreviewIfAny(t){return t.hasPreview&&!this.isFullScreen?OC.generateUrl("/core/preview?fileId=".concat(t.id,"&x=").concat(screen.width,"&y=").concat(screen.height,"&a=true")):this.getIconUrl(t)},getIconUrl(t){const e=t.mimetype||"application/octet-stream";return"httpd/unix-directory"===e?"shared"===t.mountType||"shared-root"===t.mountType?OC.MimeType.getIconUrl("dir-shared"):"external-root"===t.mountType?OC.MimeType.getIconUrl("dir-external"):void 0!==t.mountType&&""!==t.mountType?OC.MimeType.getIconUrl("dir-"+t.mountType):t.shareTypes&&(t.shareTypes.indexOf(p.D.SHARE_TYPE_LINK)>-1||t.shareTypes.indexOf(p.D.SHARE_TYPE_EMAIL)>-1)?OC.MimeType.getIconUrl("dir-public"):t.shareTypes&&t.shareTypes.length>0?OC.MimeType.getIconUrl("dir-shared"):OC.MimeType.getIconUrl("dir"):OC.MimeType.getIconUrl(e)},setActiveTab(t){OCA.Files.Sidebar.setActiveTab(t),this.tabs.forEach((e=>e.setIsActive(t===e.id)))},async toggleStarred(e){try{this.starLoading=!0,await(0,d.default)({method:"PROPPATCH",url:this.davPath,data:'<?xml version="1.0"?>\n\t\t\t\t\t\t<d:propertyupdate xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns">\n\t\t\t\t\t\t'.concat(e?"<d:set>":"<d:remove>","\n\t\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t\t<oc:favorite>1</oc:favorite>\n\t\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t\t").concat(e?"</d:set>":"</d:remove>","\n\t\t\t\t\t\t</d:propertyupdate>")}),OCA.Files&&OCA.Files.App&&OCA.Files.App.fileList&&OCA.Files.App.fileList.fileActions&&OCA.Files.App.fileList.fileActions.triggerAction("Favorite",OCA.Files.App.fileList.getModelForFile(this.fileInfo.name),OCA.Files.App.fileList)}catch(e){OC.Notification.showTemporary(t("files","Unable to change the favourite state of the file")),lt.error("Unable to change favourite state",e)}this.starLoading=!1},onDefaultAction(){this.defaultAction&&this.defaultAction.action(this.fileInfo.name,{fileInfo:this.fileInfo,dir:this.fileInfo.dir,fileList:OCA.Files.App.fileList,$file:l()("body")})},toggleTags(){this.showTags=!this.showTags},async open(e){if(this.Sidebar.file=e,e&&""!==e.trim()){this.error=null,this.loading=!0;try{this.fileInfo=await async function(t){const e=await(0,d.default)({method:"PROPFIND",url:t,data:'<?xml version="1.0"?>\n\t\t\t<d:propfind  xmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t<d:prop>\n\t\t\t\t<d:getlastmodified />\n\t\t\t\t<d:getetag />\n\t\t\t\t<d:getcontenttype />\n\t\t\t\t<d:resourcetype />\n\t\t\t\t<oc:fileid />\n\t\t\t\t<oc:permissions />\n\t\t\t\t<oc:size />\n\t\t\t\t<d:getcontentlength />\n\t\t\t\t<nc:has-preview />\n\t\t\t\t<nc:mount-type />\n\t\t\t\t<nc:is-encrypted />\n\t\t\t\t<ocs:share-permissions />\n\t\t\t\t<nc:share-attributes />\n\t\t\t\t<oc:tags />\n\t\t\t\t<oc:favorite />\n\t\t\t\t<oc:comments-unread />\n\t\t\t\t<oc:owner-id />\n\t\t\t\t<oc:owner-display-name />\n\t\t\t\t<oc:share-types />\n\t\t\t</d:prop>\n\t\t\t</d:propfind>'}),s=OCA.Files.App.fileList.filesClient._client.parseMultiStatus(e.data),i=OCA.Files.App.fileList.filesClient._parseFileInfo(s[0]);return i.get=t=>i[t],i.isDirectory=()=>"httpd/unix-directory"===i.mimetype,i}(this.davPath),this.fileInfo.dir=this.file.split("/").slice(0,-1).join("/"),this.views.forEach((t=>{t.setFileInfo(this.fileInfo)})),this.$nextTick((()=>{this.$refs.tabs&&this.$refs.tabs.updateTabs(),this.setActiveTab(this.Sidebar.activeTab||this.tabs[0].id)}))}catch(e){throw this.error=t("files","Error while loading the file data"),lt.error("Error while loading the file data",e),new Error(e)}finally{this.loading=!1}}},close(){this.Sidebar.file="",this.showTags=!1,this.resetData()},setFullScreenMode(t){var e,s,i,n;this.isFullScreen=t,t?(null===(e=document.querySelector("#content"))||void 0===e?void 0:e.classList.add("with-sidebar--full"))||null===(s=document.querySelector("#content-vue"))||void 0===s||s.classList.add("with-sidebar--full"):(null===(i=document.querySelector("#content"))||void 0===i?void 0:i.classList.remove("with-sidebar--full"))||null===(n=document.querySelector("#content-vue"))||void 0===n||n.classList.remove("with-sidebar--full")},handleOpening(){(0,c.j8)("files:sidebar:opening")},handleOpened(){(0,c.j8)("files:sidebar:opened")},handleClosing(){(0,c.j8)("files:sidebar:closing")},handleClosed(){(0,c.j8)("files:sidebar:closed")},handleWindowResize(){this.hasLowHeight=document.documentElement.clientHeight<1024}}};var ct=i(49204),ut={};ut.styleTagTransform=nt(),ut.setAttributes=tt(),ut.insert=Q().bind(null,"head"),ut.domAPI=G(),ut.insertStyleElement=st(),W()(ct.Z,ut),ct.Z&&ct.Z.locals&&ct.Z.locals;const ht=(0,j.Z)(dt,(function(){var t=this,e=t._self._c;return t.file?e("NcAppSidebar",t._b({ref:"sidebar",attrs:{"force-menu":!0,tabindex:"0"},on:t._d({close:t.close,"update:active":t.setActiveTab,"update:starred":t.toggleStarred,opening:t.handleOpening,opened:t.handleOpened,closing:t.handleClosing,closed:t.handleClosed},[t.defaultActionListener,function(e){return e.stopPropagation(),e.preventDefault(),t.onDefaultAction.apply(null,arguments)}]),scopedSlots:t._u([t.fileInfo?{key:"description",fn:function(){return[e("div",{staticClass:"sidebar__description"},[t.isSystemTagsEnabled?e("SystemTags",{directives:[{name:"show",rawName:"v-show",value:t.showTags,expression:"showTags"}],attrs:{"file-id":t.fileInfo.id},on:{"has-tags":e=>t.showTags=e}}):t._e(),t._v(" "),t._l(t.views,(function(s){return e("LegacyView",{key:s.cid,attrs:{component:s,"file-info":t.fileInfo}})}))],2)]},proxy:!0}:null,t.fileInfo?{key:"secondary-actions",fn:function(){return[t.isSystemTagsEnabled?e("NcActionButton",{attrs:{"close-after-click":!0,icon:"icon-tag"},on:{click:t.toggleTags}},[t._v("\n\t\t\t"+t._s(t.t("files","Tags"))+"\n\t\t")]):t._e()]},proxy:!0}:null],null,!0)},"NcAppSidebar",t.appSidebar,!1),[t._v(" "),t._v(" "),t.error?e("NcEmptyContent",{attrs:{icon:"icon-error"}},[t._v("\n\t\t"+t._s(t.error)+"\n\t")]):t.fileInfo?t._l(t.tabs,(function(s){return[s.enabled(t.fileInfo)?e("SidebarTab",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],key:s.id,attrs:{id:s.id,name:s.name,icon:s.icon,"on-mount":s.mount,"on-update":s.update,"on-destroy":s.destroy,"on-scroll-bottom-reached":s.scrollBottomReached,"file-info":t.fileInfo},scopedSlots:t._u([void 0!==s.iconSvg?{key:"icon",fn:function(){return[e("span",{staticClass:"svg-icon",domProps:{innerHTML:t._s(s.iconSvg)}})]},proxy:!0}:null],null,!0)}):t._e()]})):t._e()],2):t._e()}),[],!1,null,"5f7a543a",null).exports;var pt=i(25108);var ft=i(57005);function gt(t,e,s){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var i=s.call(t,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var mt=i(25108);n.default.prototype.t=a.Iu,window.OCA.Files||(window.OCA.Files={}),Object.assign(window.OCA.Files,{Sidebar:new class{constructor(){var t,e,s;t=this,s=void 0,(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var i=s.call(t,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e="_state"))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,this._state={},this._state.tabs=[],this._state.views=[],this._state.file="",this._state.activeTab="",pt.debug("OCA.Files.Sidebar initialized")}get state(){return this._state}registerTab(t){return this._state.tabs.findIndex((e=>e.id===t.id))>-1?(pt.error("An tab with the same id ".concat(t.id," already exists"),t),!1):(this._state.tabs.push(t),!0)}registerSecondaryView(t){return this._state.views.findIndex((e=>e.id===t.id))>-1?(pt.error("A similar view already exists",t),!1):(this._state.views.push(t),!0)}get file(){return this._state.file}setActiveTab(t){this._state.activeTab=t}}}),Object.assign(window.OCA.Files.Sidebar,{Tab:class{constructor(){let{id:t,name:e,icon:s,iconSvg:i,mount:n,setIsActive:a,update:o,destroy:r,enabled:l,scrollBottomReached:d}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(gt(this,"_id",void 0),gt(this,"_name",void 0),gt(this,"_icon",void 0),gt(this,"_iconSvgSanitized",void 0),gt(this,"_mount",void 0),gt(this,"_setIsActive",void 0),gt(this,"_update",void 0),gt(this,"_destroy",void 0),gt(this,"_enabled",void 0),gt(this,"_scrollBottomReached",void 0),void 0===l&&(l=()=>!0),void 0===d&&(d=()=>{}),"string"!=typeof t||""===t.trim())throw new Error("The id argument is not a valid string");if("string"!=typeof e||""===e.trim())throw new Error("The name argument is not a valid string");if(("string"!=typeof s||""===s.trim())&&"string"!=typeof i)throw new Error("Missing valid string for icon or iconSvg argument");if("function"!=typeof n)throw new Error("The mount argument should be a function");if(void 0!==a&&"function"!=typeof a)throw new Error("The setIsActive argument should be a function");if("function"!=typeof o)throw new Error("The update argument should be a function");if("function"!=typeof r)throw new Error("The destroy argument should be a function");if("function"!=typeof l)throw new Error("The enabled argument should be a function");if("function"!=typeof d)throw new Error("The scrollBottomReached argument should be a function");this._id=t,this._name=e,this._icon=s,this._mount=n,this._setIsActive=a,this._update=o,this._destroy=r,this._enabled=l,this._scrollBottomReached=d,"string"==typeof i&&(0,ft.t)(i).then((t=>{this._iconSvgSanitized=t}))}get id(){return this._id}get name(){return this._name}get icon(){return this._icon}get iconSvg(){return this._iconSvgSanitized}get mount(){return this._mount}get setIsActive(){return this._setIsActive||(()=>{})}get update(){return this._update}get destroy(){return this._destroy}get enabled(){return this._enabled}get scrollBottomReached(){return this._scrollBottomReached}}}),mt.debug("OCA.Files.Sidebar initialized"),window.addEventListener("DOMContentLoaded",(function(){const t=document.querySelector("body > .content")||document.querySelector("body > #content");if(t&&!document.getElementById("app-sidebar")){const e=document.createElement("div");e.id="app-sidebar",t.appendChild(e)}const e=new(n.default.extend(ht))({name:"SidebarRoot"});e.$mount("#app-sidebar"),window.OCA.Files.Sidebar.open=e.open,window.OCA.Files.Sidebar.close=e.close,window.OCA.Files.Sidebar.setFullScreenMode=e.setFullScreenMode}))},49204:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var i=s(87537),n=s.n(i),a=s(23645),o=s.n(a)()(n());o.push([t.id,'.app-sidebar--has-preview[data-v-5f7a543a] .app-sidebar-header__figure{background-size:cover}.app-sidebar--has-preview[data-v-5f7a543a][data-mimetype="text/plain"] .app-sidebar-header__figure,.app-sidebar--has-preview[data-v-5f7a543a][data-mimetype="text/markdown"] .app-sidebar-header__figure{background-size:contain}.app-sidebar--full[data-v-5f7a543a]{position:fixed !important;z-index:2025 !important;top:0 !important;height:100% !important}.app-sidebar[data-v-5f7a543a] .app-sidebar-header__description{margin:0 16px 4px 16px !important}.app-sidebar .svg-icon[data-v-5f7a543a] svg{width:20px;height:20px;fill:currentColor}.sidebar__description[data-v-5f7a543a]{display:flex;flex-direction:column;width:100%;gap:8px 0}',"",{version:3,sources:["webpack://./apps/files/src/views/Sidebar.vue"],names:[],mappings:"AAGE,uEACC,qBAAA,CAKA,yMACC,uBAAA,CAKH,oCACC,yBAAA,CACA,uBAAA,CACA,gBAAA,CACA,sBAAA,CAIA,+DACC,iCAAA,CAKD,4CACC,UAAA,CACA,WAAA,CACA,iBAAA,CAKH,uCACC,YAAA,CACA,qBAAA,CACA,UAAA,CACA,SAAA",sourcesContent:['\n.app-sidebar {\n\t&--has-preview:deep {\n\t\t.app-sidebar-header__figure {\n\t\t\tbackground-size: cover;\n\t\t}\n\n\t\t&[data-mimetype="text/plain"],\n\t\t&[data-mimetype="text/markdown"] {\n\t\t\t.app-sidebar-header__figure {\n\t\t\t\tbackground-size: contain;\n\t\t\t}\n\t\t}\n\t}\n\n\t&--full {\n\t\tposition: fixed !important;\n\t\tz-index: 2025 !important;\n\t\ttop: 0 !important;\n\t\theight: 100% !important;\n\t}\n\n\t:deep {\n\t\t.app-sidebar-header__description {\n\t\t\tmargin: 0 16px 4px 16px !important;\n\t\t}\n\t}\n\n\t.svg-icon {\n\t\t::v-deep svg {\n\t\t\twidth: 20px;\n\t\t\theight: 20px;\n\t\t\tfill: currentColor;\n\t\t}\n\t}\n}\n\n.sidebar__description {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\tgap: 8px 0;\n}\n'],sourceRoot:""}]);const r=o},85570:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var i=s(87537),n=s.n(i),a=s(23645),o=s.n(a)()(n());o.push([t.id,".system-tags[data-v-7746ac6e]{display:flex;flex-direction:column}.system-tags label[for=system-tags-input][data-v-7746ac6e]{margin-bottom:2px}.system-tags__select[data-v-7746ac6e]{width:100%}.system-tags__select[data-v-7746ac6e] .vs__deselect{padding:0}","",{version:3,sources:["webpack://./apps/systemtags/src/components/SystemTags.vue"],names:[],mappings:"AACA,8BACC,YAAA,CACA,qBAAA,CAEA,2DACC,iBAAA,CAGD,sCACC,UAAA,CAEC,oDACC,SAAA",sourcesContent:['\n.system-tags {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\tlabel[for="system-tags-input"] {\n\t\tmargin-bottom: 2px;\n\t}\n\n\t&__select {\n\t\twidth: 100%;\n\t\t:deep {\n\t\t\t.vs__deselect {\n\t\t\t\tpadding: 0;\n\t\t\t}\n\t\t}\n\t}\n}\n'],sourceRoot:""}]);const r=o},46700:(t,e,s)=>{var i={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function n(t){var e=a(t);return s(e)}function a(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=a,t.exports=n,n.id=46700}},i={};function n(t){var e=i[t];if(void 0!==e)return e.exports;var a=i[t]={id:t,loaded:!1,exports:{}};return s[t].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=s,e=[],n.O=(t,s,i,a)=>{if(!s){var o=1/0;for(c=0;c<e.length;c++){s=e[c][0],i=e[c][1],a=e[c][2];for(var r=!0,l=0;l<s.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((t=>n.O[t](s[l])))?s.splice(l--,1):(r=!1,a<o&&(o=a));if(r){e.splice(c--,1);var d=i();void 0!==d&&(t=d)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[s,i,a]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),n.j=4092,(()=>{n.b=document.baseURI||self.location.href;var t={4092:0};n.O.j=e=>0===t[e];var e=(e,s)=>{var i,a,o=s[0],r=s[1],l=s[2],d=0;if(o.some((e=>0!==t[e]))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(l)var c=l(n)}for(e&&e(s);d<o.length;d++)a=o[d],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(c)},s=self.webpackChunknextcloud=self.webpackChunknextcloud||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))})(),n.nc=void 0;var a=n.O(void 0,[7874],(()=>n(40437)));a=n.O(a)})();
//# sourceMappingURL=files-sidebar.js.map?v=e606d6e8e8dec46c5a6f