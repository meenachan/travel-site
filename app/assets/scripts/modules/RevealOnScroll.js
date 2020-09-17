import throttle from 'lodash/throttle';
import Debounce from 'lodash/debounce';

class RevealOnScroll{
constructor( els , thresholdPercent){
    this.thresholdPercent = thresholdPercent;
    this.itemsToRevel = els;
    this.hideInitially();
    this.scrollThrottle = throttle(this.calcCaller,200).bind(this);
    this.browserHeight = window.innerHeight;
    this.events();
}
events(){
window.addEventListener("scroll",this.scrollThrottle);
window.addEventListener("resize", Debounce(()=>{
    this.browserHeight = window.innerHeight;
}, 333))
}

calcCaller(){
    console.log("scroll function ran")
    this.itemsToRevel.forEach(el => { 
       if(el.isRevealed==false){
        this.calculateIfScrollTo(el);
       }

    })
}
calculateIfScrollTo(el){
    if(window.scrollY + this.browserHeight > el.offsetTop){
        let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight)*100;
    if(scrollPercent < this.thresholdPercent){
        el.classList.add("reveal-item--is-visible");
        el.isRevealed= true;
        if(el.isLastItem){
            window.removeEventListener("scroll",this.scrollThrottle)
        }
    }
    console.log("element was calculated");
    }
    
}
hideInitially(){
    this.itemsToRevel.forEach(el => {
        el.classList.add("reveal-item");
        el.isRevealed =false;
    });
    this.itemsToRevel[this.itemsToRevel.length-1].isLastItem = true ;
}

}
export default RevealOnScroll;