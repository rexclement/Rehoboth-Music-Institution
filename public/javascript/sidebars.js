document.querySelector(".menu-icon").addEventListener( "click",function(){
    const sidebar = document.querySelector('.sidebar-container');
    sidebar.style.display = 'inline-flex';
})

document.querySelector(".exit-icon").addEventListener( "click",function(){
    const sidebar = document.querySelector('.sidebar-container');
    sidebar.style.display = 'none';
})