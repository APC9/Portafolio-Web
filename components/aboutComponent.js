/**
 * 
 * @param {HTMLDivElement} element 
 */
export const aboutComponent = (element)=>{

    const divLottieAbout = document.createElement("div");
    divLottieAbout.innerHTML = `
    <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_efbizstn.json"  
    background="transparent"  speed="0.5"  style="width: 100%; height: 100%;"  
    loop  autoplay></lottie-player>
    `
    divLottieAbout.classList.add('span5');
    divLottieAbout.classList.add('color2');


    const divAbout = document.createElement("div");
    divAbout.innerHTML = `
        <h2>about me</h2>
        <p>Jr. developer resident in Estepona, Spain.</p>

        <p>Proactive, self-taught, responsible,
        great availability to work in a team,
        able to solve problems.</p>
        
        <p>I am available for a full-time position or freelance work.</p>
        </p>
    `
    divAbout.classList.add('span6');
    divAbout.classList.add('about');
    divAbout.id ='about';

    element.append(divAbout)
    element.append(divLottieAbout)

}