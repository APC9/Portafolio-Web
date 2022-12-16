import { app } from './components/app';
import Typed from 'typed.js';
import './style.css'



document.querySelector('#app').innerHTML = `

  <div class="banner">
    <h2> <span class="type"></span></h2>
  </div>
  <div class='lottie'>
    <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_kyu7xb1v.json" 
    mode="bounce" background="transparent"  speed="2.5"  style="width: 100%; height:100%; "
    loop  autoplay class='luz'></lottie-player>
  </div>
`


setTimeout(()=>{
  
  document.querySelector('#app').innerHTML = `
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
  `

let element = document.querySelector('#contenedor');

app(element);


}, 7000)  // Calocar el tiempo

let typed = new Typed('.type', {
  strings:["Bienvenido a mi Sitio Web", "Welcome to my Website"],
  typeSpeed: 45,
  backSpeed: 20, 
  loop: true
});
