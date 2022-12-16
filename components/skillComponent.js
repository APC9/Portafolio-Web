/**
 * 
 * @param {HTMLDivElement} element 
 */
export const skillComponent = (element)=>{

    const divLottieSkill = document.createElement("div");
    divLottieSkill.innerHTML = `
    <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_kkflmtur.json"  background="transparent"  
    speed="0.5"  style="width: 100%; height: 100%;"  loop  autoplay></lottie-player>
    `
    divLottieSkill.classList.add('span5');
    divLottieSkill.classList.add('color3');


    const divSkill = document.createElement("div");
    divSkill.innerHTML = `
        <div class="skill-h2">
            <h2>skills</h2>
        </div>
        <div class="skill-span">
            <span><img src="./public/assets/imagenes/pngegg.png"/></span>
            <span><img src="./public/assets/imagenes/pngegg1.png"/></span>
            <span><img src="./public/assets/imagenes/pngegg2.png"/></span>
            <span><img src="./public/assets/imagenes/pngegg3.png"/></span>
            <span><img src="./public/assets/imagenes/pngegg5.png"/></span>
            <span><img src="./public/assets/imagenes/pngegg6.png"/></span>
            <span><img src="./public/assets/imagenes/pngegg7.png"/></span>
        </div>
    `
    divSkill.classList.add('span6');
    divSkill.classList.add('skill');
    divSkill.id ='skills';

    element.append(divLottieSkill)
    element.append(divSkill)
    
    let viewport =visualViewport.width;
    
    if(viewport <  800){
        element.append(divSkill)
        element.append(divLottieSkill)
    }

}

