(self.webpackChunk_nextcloud_text=self.webpackChunk_nextcloud_text||[]).push([["highlight/http-js-js","highlight/http"],{78937:e=>{e.exports=function(e){const n="HTTP/([32]|1\\.[01])",t={className:"attribute",begin:e.regex.concat("^",/[A-Za-z][A-Za-z0-9-]*/,"(?=\\:\\s)"),starts:{contains:[{className:"punctuation",begin:/: /,relevance:0,starts:{end:"$",relevance:0}}]}},s=[t,{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}}];return{name:"HTTP",aliases:["https"],illegal:/\S/,contains:[{begin:"^(?="+n+" \\d{3})",end:/$/,contains:[{className:"meta",begin:n},{className:"number",begin:"\\b\\d{3}\\b"}],starts:{end:/\b\B/,illegal:/\S/,contains:s}},{begin:"(?=^[A-Z]+ (.*?) "+n+"$)",end:/$/,contains:[{className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{className:"meta",begin:n},{className:"keyword",begin:"[A-Z]+"}],starts:{end:/\b\B/,illegal:/\S/,contains:s}},e.inherit(t,{relevance:0})]}}},49706:(e,n,t)=>{!function e(){e.warned||(e.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/http" instead of "highlight.js/lib/languages/http.js"'))}(),e.exports=t(78937)}}]);
//# sourceMappingURL=http-js-js.js.map?v=bde714de966410f48f57