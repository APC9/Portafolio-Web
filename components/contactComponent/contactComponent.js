
import './contactComponent.css'


/**
 * 
 * @param {HTMLDivElement} element 
 */

export const contactComponent = (element) => {

    const divLottie = document.createElement("div");
    divLottie.innerHTML = `
    <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_isbiybfh.json" 
    background="transparent"  speed="0.5"  style="width: 100%; height: 100%;"  
    loop  autoplay></lottie-player>
    `
    divLottie.classList.add('span5');
    divLottie.classList.add('color1');
    

    const divcontact = document.createElement("div");
    const divForm = document.createElement("div");

    divForm.innerHTML= `
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
    `

    divForm.classList.add('form');
    divcontact.innerHTML = `<h2>Contact</h2>`
    divcontact.id ='contact';

    divcontact.classList.add('span6');
    divcontact.classList.add('contact');
    divcontact.classList.add('about');
    divcontact.append(divForm)


    element.append(divLottie)
    element.append(divcontact)

    const formulario = document.querySelector('form');

    


    const emailSend = () => {

        divForm.innerHTML = `
                <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_NU3Nmy.json"  
                background="transparent"  speed="1" 
                style="width: 100%; height: 100%;"    autoplay></lottie-player>
                `
        setTimeout(()=>{
            divForm.innerHTML = ` 
            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_bwah4hcs.json"  
            background="transparent"  speed="1"  style="width: 80%; height: 80%;"   
            autoplay></lottie-player>
            `
        }, 2000)
    }


    const handleSubmit = async(event)=>{
        event.preventDefault();
        const form_Data = new FormData(formulario)
        const response = await fetch(formulario.action, {
            method: formulario.method,
            body: form_Data,
            headers: {
                'Accept': 'application/json'
            }
        })
        if(response.ok){
            formulario.reset()
            emailSend()
        }
    }

    formulario.addEventListener('submit', handleSubmit)

}

