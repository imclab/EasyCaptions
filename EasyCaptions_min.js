/*-------------------------------------------------------------------- 
 * EasyCaptions: A system for easily adding captions to online videos
 * Version 0.1
 * Copyright (c) June 2010 Philip Hutchison http://pipwerks.com
 * Article: http://pipwerks.com/
 * MIT license (http://creativecommons.org/licenses/MIT/)
--------------------------------------------------------------------*/

var EasyCaptions=function(g){var E="undefined",r="string",i="function",m="&nbsp;",l="maybe",e="probably",q="type",a="span",o="data-begin",f="data-end",j=true,v=false,t=function(F){return document.getElementById(F);},w=(typeof g.enableTranscript!==E)?g.enableTranscript:j,C=(typeof g.enableCaptions!==E)?g.enableCaptions:j,n=(typeof g.transcriptElementID===r)?t(g.transcriptElementID):g.transcriptElementID||v,p=(typeof g.videoElementID===r)?t(g.videoElementID):g.videoElementID||v,y=g.transcriptEnabledClass||"EasyCaptions-enabled",D=g.captionID||"EasyCaptions-caption",B=[],z,k,c=function(){var G=v,I=p||v,K=(I&&I.getAttribute(q)!==E)?I.getAttribute(q):v,H=(typeof I.canPlayType!==E);if(!I){return v;}if(K){H=I.canPlayType(K);G=K&&(H===l||H===e);}else{if(H){var J=I.getElementsByTagName("source");for(var F=0;F<J.length;F++){H=I.canPlayType(J[F].getAttribute(q));if(H===l||H===e){G=j;break;}}}}return G;},u=function(F){if(typeof B[F]!==E){z.innerHTML=B[F];}},b=function(){u(parseInt(this.currentTime,10));},s=function(G,H){var F=t(H);if(!F&&typeof G!==E){F=document.createElement("div");F.id=H;F.innerHTML=m;G.parentNode.appendChild(F);}return F;},x=function(L){if(!L){return v;}var H=L.getElementsByTagName(a),F=[];for(var G=0,J=H.length;G<J;G++){var I=H[G].getAttribute(o);var K=H[G].getAttribute(f);F[I]=H[G].innerHTML;F[K]=m;}return F;},A=function(F,G){if(!k&&typeof F!==i){return v;}if(n.className.indexOf(y)===-1){n.className=n.className+" "+y;}n.onclick=function(K){var I=K||window.event,J=I.target||I.srcElement,H;if(J.nodeName.toLowerCase()===a){H=J.getAttribute(o);if(typeof H===E){return v;}if(k&&p){p.currentTime=H;}if(!k&&G&&F){F(G,H);}}};},d=function(F,G){if(!k&&typeof F!==i){return v;}if(B.length===0){B=x(n);}if(!z){var H=(!k&&G)?G:p;z=s(H,D);}if(k){p.addEventListener("timeupdate",b,v);}if(!k&&G&&F){F(G,u);}},h=function(I){var H=(typeof I.captionHandler===i)?I.captionHandler:v,G=(typeof I.transcriptHandler===i)?I.transcriptHandler:v,F=(typeof I.elementID===E)?v:(typeof I.elementID===r)?t(I.elementID):I.elementID;if(!F||(!H&&!G)){return v;}if(H){d(H,F);}if(G){A(G,F);}};k=c();if(w){A();}if(C){d();}this.video=p;this.transcript_element=n;this.caption_element=z;this.updateCaption=u;this.html5_supported=k;this.addFallback=h;return this;};