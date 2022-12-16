
import './footerComponent.css'


/**
 * 
 * @param {HTMLDivElement} element 
 */

export const footerComponent = (element) => {

    const divFooter = document.createElement("div");

    divFooter.innerHTML= `
        <footer>
            <span><a href="https://twitter.com/AlbertoPenacas1"><i class="fa-brands fa-twitter"></i></a></span>
            <span><a href="https://github.com/APC9"><i class="fa-brands fa-github"></i></a> </span>
            <span><a href="https://instagram.com/albertopenacastillo?igshid=ZDdkNTZiNTM="> <i class="fa-brands fa-instagram"></i></a></span>
        </footer>
    `

    divFooter.classList.add('span12');

    element.append(divFooter)

}

