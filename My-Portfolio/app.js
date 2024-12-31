
// Navbar

let menuList = document.getElementById("nav-menu")
menuList.style.maxHeight = "0px"
function toggleMenu(){
    if(menuList.style.maxHeight == "0px"){

        menuList.style.maxHeight = "fit-content"
    }
    else{
        menuList.style.maxHeight = "0px"

    }
}