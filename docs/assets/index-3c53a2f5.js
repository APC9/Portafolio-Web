(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))p(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&p(c)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}})();const T=l=>{const u=document.createElement("div");u.innerHTML=`
    <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_efbizstn.json"  
    background="transparent"  speed="0.5"  style="width: 100%; height: 100%;"  
    loop  autoplay></lottie-player>
    `,u.classList.add("span5"),u.classList.add("color2");const o=document.createElement("div");o.innerHTML=`
        <h2>about me</h2>
        <p>Jr. developer resident in Estepona, Spain.</p>

        <p>Proactive, self-taught, responsible,
        great availability to work in a team,
        able to solve problems.</p>
        
        <p>I am available for a full-time position or freelance work.</p>
        </p>
    `,o.classList.add("span6"),o.classList.add("about"),o.id="about",l.append(o),l.append(u)};const E=l=>{const u=document.createElement("div");u.innerHTML=`
    <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_isbiybfh.json" 
    background="transparent"  speed="0.5"  style="width: 100%; height: 100%;"  
    loop  autoplay></lottie-player>
    `,u.classList.add("span5"),u.classList.add("color1");const o=document.createElement("div"),p=document.createElement("div");p.innerHTML=`
            <form name="contact" id="form" action="https://formspree.io/f/xnqyaqpr" method="POST">
                    
            <label for="name">
            <span>Name</span>
                <input type="text" name="name" id="name" required>
            </label>

            <label for="last-name">
                <span>Last Name</span>
                <input type="text" name="last-name" id="last-name" required>
            </label>
            
            <label for="email">
                <span>Email</span>
                <input type="email" name="email" id="email" required>
            </label>

            <label for="text">
                <span>Descriptión</span>
                <textarea name="text" id="text" required></textarea>
            </label>

            <input type="submit" value="Send" id="submit">
        </form>
    `,p.classList.add("form"),o.innerHTML="<h2>Contact</h2>",o.id="contact",o.classList.add("span6"),o.classList.add("contact"),o.classList.add("about"),o.append(p),l.append(u),l.append(o);const i=document.querySelector("form"),r=()=>{p.innerHTML=`
                <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_NU3Nmy.json"  
                background="transparent"  speed="1" 
                style="width: 100%; height: 100%;"    autoplay></lottie-player>
                `,setTimeout(()=>{p.innerHTML=` 
            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_bwah4hcs.json"  
            background="transparent"  speed="1"  style="width: 80%; height: 80%;"   
            autoplay></lottie-player>
            `},2e3)},c=async y=>{y.preventDefault();const m=new FormData(i);(await fetch(i.action,{method:i.method,body:m,headers:{Accept:"application/json"}})).ok&&(i.reset(),r())};i.addEventListener("submit",c)};const O=l=>{const u=document.createElement("div");u.innerHTML=`
        <footer>
            <span><a href="https://twitter.com/AlbertoPenacas1"><i class="fa-brands fa-twitter"></i></a></span>
            <span><a href="https://github.com/APC9"><i class="fa-brands fa-github"></i></a> </span>
            <span><a href="https://instagram.com/albertopenacastillo?igshid=ZDdkNTZiNTM="> <i class="fa-brands fa-instagram"></i></a></span>
        </footer>
    `,u.classList.add("span12"),l.append(u)},_=l=>{const u=document.createElement("div");u.innerHTML=`
        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_snrclgor.json"  
        background="transparent"  speed="0.5"  style="width: 100%; height: 100%;"   
        loop autoplay></lottie-player>
    `,u.classList.add("span5"),u.classList.add("color1");const o=document.createElement("div");o.innerHTML=`
        <h2>Hello, My Name Is Alberto Peña</h2>
        <p>Web developer / Front End</p>
    `,o.classList.add("span6"),o.classList.add("inicio"),o.id="inicio",l.append(u),l.append(o),visualViewport.width<800&&(l.append(o),l.append(u));const i=document.querySelector(".icon"),r=document.querySelector(".fa-xmark"),c=document.querySelector("header");i.addEventListener("click",y=>{c.style.display="flex"}),r.addEventListener("click",y=>{c.style.display="none"})},M=l=>{const u=document.createElement("div");u.innerHTML=`
    <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_kkflmtur.json"  background="transparent"  
    speed="0.5"  style="width: 100%; height: 100%;"  loop  autoplay></lottie-player>
    `,u.classList.add("span5"),u.classList.add("color3");const o=document.createElement("div");o.innerHTML=`
        <div class="skill-h2">
            <h2>skills</h2>
        </div>
        <div class="skill-span">
            <span><img src="/Portafolio-Web/public/assets/imagenes/pngegg.png"/></span>
            <span><img src="/Portafolio-Web/public/assets/imagenes/pngegg1.png"/></span>
            <span><img src="/Portafolio-Web/public/assets/imagenes/pngegg2.png"/></span>
            <span><img src="/Portafolio-Web/public/assets/imagenes/pngegg3.png"/></span>
            <span><img src="/Portafolio-Web/public/assets/imagenes/pngegg5.png"/></span>
            <span><img src="/Portafolio-Web/public/assets/imagenes/pngegg6.png"/></span>
            <span><img src="/Portafolio-Web/public/assets/imagenes/pngegg7.png"/></span>
        </div>
    `,o.classList.add("span6"),o.classList.add("skill"),o.id="skills",l.append(u),l.append(o),visualViewport.width<800&&(l.append(o),l.append(u))};const H=l=>{const u=document.createElement("div");u.innerHTML=`
        <div class="skill-h2">
            <h2>works</h2>
        </div>
        <div class="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="/Portafolio-Web/public/assets/imagenes/img1.png" />
            <span><a href="https://onlinetienda.netlify.app/">Watch</a></span>
            </div>
            <div class="swiper-slide"><img src="/Portafolio-Web/public/assets/imagenes/img2.png" />
            <span><a href="https://ecomersbootstrap.netlify.app/">Watch</a></span>
            </div>
            <div class="swiper-slide"><img src="/Portafolio-Web/public/assets/imagenes/img3.png" />
            <span><a href="https://webapple.netlify.app/">Watch</a></span>
            </div>
            <div class="swiper-slide"><img src="/Portafolio-Web/public/assets/imagenes/img4.png" />
            <span><a href="https://burguerrest.netlify.app/">Watch</a></span>
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
        </div>
    `,u.classList.add("divWork"),u.classList.add("span12"),u.id="work",l.append(u),new Swiper(".swiper",{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:10,depth:200,modifier:1,slideShadows:!0},loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})},x=l=>{_(l),T(l),M(l),H(l),E(l),O(l)};var N=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function P(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var L={exports:{}};(function(l,u){(function(p,i){l.exports=i()})(N,function(){return function(o){var p={};function i(r){if(p[r])return p[r].exports;var c=p[r]={exports:{},id:r,loaded:!1};return o[r].call(c.exports,c,c.exports,i),c.loaded=!0,c.exports}return i.m=o,i.c=p,i.p="",i(0)}([function(o,p,i){Object.defineProperty(p,"__esModule",{value:!0});var r=function(){function h(a,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(a,s.key,s)}}return function(a,t,n){return t&&h(a.prototype,t),n&&h(a,n),a}}();function c(h,a){if(!(h instanceof a))throw new TypeError("Cannot call a class as a function")}var y=i(1),m=i(3),g=function(){function h(a,t){c(this,h),y.initializer.load(this,t,a),this.begin()}return r(h,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||!this.pause.status||(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||arguments[0]===void 0?!0:arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){!t.currentElContent||t.currentElContent.length===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.currentElContent,t.currentElContent.length)},this.startDelay)}},{key:"typewrite",value:function(t,n){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var e=this.humanizer(this.typeSpeed),d=1;if(this.pause.status===!0){this.setPauseStatus(t,n,!0);return}this.timeout=setTimeout(function(){n=m.htmlParser.typeHtmlChars(t,n,s);var f=0,v=t.substr(n);if(v.charAt(0)==="^"&&/^\^\d+/.test(v)){var k=1;v=/\d+/.exec(v)[0],k+=v.length,f=parseInt(v),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),t=t.substring(0,n)+t.substring(n+k),s.toggleBlinking(!0)}if(v.charAt(0)==="`"){for(;t.substr(n+d).charAt(0)!=="`"&&(d++,!(n+d>t.length)););var b=t.substring(0,n),w=t.substring(b.length+1,n+d),C=t.substring(n+d+1);t=b+w+C,d--}s.timeout=setTimeout(function(){s.toggleBlinking(!1),n>=t.length?s.doneTyping(t,n):s.keepTyping(t,n,d),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))},f)},e)}},{key:"keepTyping",value:function(t,n,s){n===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),n+=s;var e=t.substr(0,n);this.replaceText(e),this.typewrite(t,n)}},{key:"doneTyping",value:function(t,n){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),!(this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount))&&(this.timeout=setTimeout(function(){s.backspace(t,n)},this.backDelay))}},{key:"backspace",value:function(t,n){var s=this;if(this.pause.status===!0){this.setPauseStatus(t,n,!1);return}if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var e=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){n=m.htmlParser.backSpaceHtmlChars(t,n,s);var d=t.substr(0,n);if(s.replaceText(d),s.smartBackspace){var f=s.strings[s.arrayPos+1];f&&d===f.substr(0,n)?s.stopNum=n:s.stopNum=0}n>s.stopNum?(n--,s.backspace(t,n)):n<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],n))},e)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,n,s){this.pause.typewrite=s,this.pause.curString=t,this.pause.curStrPos=n}},{key:"toggleBlinking",value:function(t){!this.cursor||this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink"))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){!this.shuffle||(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;!this.isInput||(this.el.addEventListener("focus",function(n){t.stop()}),this.el.addEventListener("blur",function(n){t.el.value&&t.el.value.length!==0||t.start()}))}},{key:"insertCursor",value:function(){!this.showCursor||this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling))}}]),h}();p.default=g,o.exports=p.default},function(o,p,i){Object.defineProperty(p,"__esModule",{value:!0});var r=Object.assign||function(n){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var d in e)Object.prototype.hasOwnProperty.call(e,d)&&(n[d]=e[d])}return n},c=function(){function n(s,e){for(var d=0;d<e.length;d++){var f=e[d];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}return function(s,e,d){return e&&n(s.prototype,e),d&&n(s,d),s}}();function y(n){return n&&n.__esModule?n:{default:n}}function m(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}var g=i(2),h=y(g),a=function(){function n(){m(this,n)}return c(n,[{key:"load",value:function(e,d,f){if(typeof f=="string"?e.el=document.querySelector(f):e.el=f,e.options=r({},h.default,d),e.isInput=e.el.tagName.toLowerCase()==="input",e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=e.isInput?!1:e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map(function(C){return C.trim()}),typeof e.options.stringsElement=="string"?e.stringsElement=document.querySelector(e.options.stringsElement):e.stringsElement=e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.display="none";var v=Array.prototype.slice.apply(e.stringsElement.children),k=v.length;if(k)for(var b=0;b<k;b+=1){var w=v[b];e.strings.push(w.innerHTML.trim())}}e.strPos=0,e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.sequence=[],e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1;for(var b in e.strings)e.sequence[b]=b;e.currentElContent=this.getCurrentElContent(e),e.autoInsertCss=e.options.autoInsertCss,this.appendAnimationCss(e)}},{key:"getCurrentElContent",value:function(e){var d="";return e.attr?d=e.el.getAttribute(e.attr):e.isInput?d=e.el.value:e.contentType==="html"?d=e.el.innerHTML:d=e.el.textContent,d}},{key:"appendAnimationCss",value:function(e){var d="data-typed-js-css";if(!!e.autoInsertCss&&!(!e.showCursor&&!e.fadeOut)&&!document.querySelector("["+d+"]")){var f=document.createElement("style");f.type="text/css",f.setAttribute(d,!0);var v="";e.showCursor&&(v+=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `),e.fadeOut&&(v+=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `),f.length!==0&&(f.innerHTML=v,document.body.appendChild(f))}}}]),n}();p.default=a;var t=new a;p.initializer=t},function(o,p){Object.defineProperty(p,"__esModule",{value:!0});var i={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(c){},onComplete:function(c){},preStringTyped:function(c,y){},onStringTyped:function(c,y){},onLastStringBackspaced:function(c){},onTypingPaused:function(c,y){},onTypingResumed:function(c,y){},onReset:function(c){},onStop:function(c,y){},onStart:function(c,y){},onDestroy:function(c){}};p.default=i,o.exports=p.default},function(o,p){Object.defineProperty(p,"__esModule",{value:!0});var i=function(){function m(g,h){for(var a=0;a<h.length;a++){var t=h[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(g,t.key,t)}}return function(g,h,a){return h&&m(g.prototype,h),a&&m(g,a),g}}();function r(m,g){if(!(m instanceof g))throw new TypeError("Cannot call a class as a function")}var c=function(){function m(){r(this,m)}return i(m,[{key:"typeHtmlChars",value:function(h,a,t){if(t.contentType!=="html")return a;var n=h.substr(a).charAt(0);if(n==="<"||n==="&"){var s="";for(n==="<"?s=">":s=";";h.substr(a+1).charAt(0)!==s&&(a++,!(a+1>h.length)););a++}return a}},{key:"backSpaceHtmlChars",value:function(h,a,t){if(t.contentType!=="html")return a;var n=h.substr(a).charAt(0);if(n===">"||n===";"){var s="";for(n===">"?s="<":s="&";h.substr(a-1).charAt(0)!==s&&(a--,!(a<0)););a--}return a}}]),m}();p.default=c;var y=new c;p.htmlParser=y}])})})(L);const A=P(L.exports);document.querySelector("#app").innerHTML=`

  <div class="banner">
    <h2> <span class="type"></span></h2>
  </div>
  <div class='lottie'>
    <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_kyu7xb1v.json" 
    mode="bounce" background="transparent"  speed="2.5"  style="width: 100%; height:100%; "
    loop  autoplay class='luz'></lottie-player>
  </div>
`;setTimeout(()=>{document.querySelector("#app").innerHTML=`
    <header>
      <span class='closed'><i class="fa-solid fa-xmark"></i></span>
      <span class="logo-nav"></span>
      <nav>
        <ul>
          <li><a href="#inicio">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#work">Works</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    <div class="menu_resp">
      <span class="logo-nav"></span>
      <span><i class="fa-solid fa-bars icon"></i></span>
    </div>
    <div id="contenedor" class="container"></div>
  `;let l=document.querySelector("#contenedor");x(l)},7e3);new A(".type",{strings:["Bienvenido a mi Sitio Web","Welcome to my Website"],typeSpeed:45,backSpeed:20,loop:!0});
