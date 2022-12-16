import { aboutComponent } from "./aboutComponent";
import { contactComponent } from "./contactComponent/contactComponent";
import { footerComponent } from "./footerComponent/footerComponent";
import { inicioComponent } from "./inicioComponent"
import { skillComponent } from "./skillComponent";
import { workComponent } from "./workComponent/workComponent";



/**
 * 
 * @param {HTMLDivElement} element 
 */

export const app = (element)=>{

    inicioComponent(element);
    aboutComponent(element);
    skillComponent(element);
    workComponent(element); 
    contactComponent(element);
    footerComponent(element)
}