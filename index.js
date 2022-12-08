let searchBox=document.getElementsByClassName('searchBox')[0];
let searchText=document.getElementById('searchText');
searchText.addEventListener('select',()=>{
    searchBox.style.outline="2px solid  #4C5FD5";
    searchBox.style.transition="all 0.12s ease-in 0.1s";
})
searchBox.addEventListener("mouseover",()=>{
    searchBox.style.outline="2px solid  #4C5FD5";
    searchBox.style.transition="border 0.1s ease-in 0.1s";
})
searchBox.addEventListener("mouseout",()=>{
    searchBox.style.outline="none";
    searchBox.style.transition="all 0.1s ease-in 0.1s";
})