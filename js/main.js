document.getElementById("menuIcon").addEventListener("click", function(event) {
    let menuContent = document.getElementById("menuContent");
    menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block'
    event.stopPropagation;
})