let buttonForMenu = document.getElementById('buttonForMenu')

console.log(buttonForMenu)


buttonForMenu.addEventListener('click', ()=>{
  let hiddenMenu = document.getElementById('hiddenMenu');
  hiddenMenu.classList.remove('invisibleMenu');
  hiddenMenu.classList.add('visibleMenu');
})