class MobileMenu{
constructor(){
   this.menuIcon = document.querySelector(".site-header--menu-icon");
   this.menuContent = document.querySelector(".site-header--menu-content");
   this.siteHeader = document.querySelector(".site-header");
    this.events();
}

events(){
    this.menuIcon.addEventListener("click",() => this.toggleTheMenu())
}

toggleTheMenu(){
    this.menuContent.classList.toggle("site-header--menu-content--is-visible");
    this.siteHeader.classList.toggle("site-header--is-expanded");
    this.menuIcon.classList.toggle("site-header--menu-icon--close-x")
}
}


export default MobileMenu;