
import './workComponent.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const workComponent = (element)=>{
    const divWork = document.createElement("div");
    divWork.innerHTML = `
        <div class="skill-h2">
            <h2>works</h2>
        </div>
        <div class="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../../public/assets/imagenes/img1.png" />
            <span><a href="https://onlinetienda.netlify.app/">Watch</a></span>
            </div>
            <div class="swiper-slide"><img src="../../public/assets/imagenes/img2.png" />
            <span><a href="https://ecomersbootstrap.netlify.app/">Watch</a></span>
            </div>
            <div class="swiper-slide"><img src="../../public/assets/imagenes/img3.png" />
            <span><a href="https://webapple.netlify.app/">Watch</a></span>
            </div>
            <div class="swiper-slide"><img src="../../public/assets/imagenes/img4.png" />
            <span><a href="https://burguerrest.netlify.app/">Watch</a></span>
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
        </div>
    `
    
    divWork.classList.add('divWork');
    divWork.classList.add('span12');
    divWork.id ='work';

    element.append(divWork)

    var swiper = new Swiper('.swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
        rotate: 50,
        stretch: 10,
        depth: 200,
        modifier: 1,
        slideShadows: true,
        },
        loop:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    
    
}

