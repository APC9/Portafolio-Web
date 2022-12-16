



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const inicioComponent = (element)=>{

    const divLottie = document.createElement("div");
    divLottie.innerHTML = `
        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_snrclgor.json"  
        background="transparent"  speed="0.5"  style="width: 100%; height: 100%;"   
        loop autoplay></lottie-player>
    `
    divLottie.classList.add('span5');
    divLottie.classList.add('color1');


    const divInico = document.createElement("div");
    divInico.innerHTML = `
        <h2>Hello, My Name Is Alberto Peña</h2>
        <p>Web developer / Front End</p>
    `
    divInico.classList.add('span6');
    divInico.classList.add('inicio');
    divInico.id ='inicio';

    element.append(divLottie)
    element.append(divInico)

    let viewport =visualViewport.width;
    if(viewport <  800){
        element.append(divInico)
        element.append(divLottie)
    }
    

    const menu = document.querySelector('.icon');
    const menuClosed = document.querySelector('.fa-xmark');
    const header = document.querySelector('header');

    menu.addEventListener('click',(event)=>{
        header.style.display= 'flex';
    })

    menuClosed.addEventListener('click',(event)=>{
        header.style.display= 'none';
    })

    

}