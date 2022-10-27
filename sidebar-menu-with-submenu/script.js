const showMenu = (toggleId,navbarId,bodyId) => {
    const toggle = document.getElementById(toggleId);
    const navbar = document.getElementById(navbarId);
    const bodyPadding = document.getElementById(bodyId);

    if(toggle && navbar){
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('expander');

            bodyPadding.classList.toggle('body-pd');
        })
    }
}

showMenu('nav-toggle','navbar','body-pd');

const linkColor = document.querySelectorAll('.nav__link');

function colorLink(){
    linkColor.forEach(e => e.classList.remove('active'));
    this.classList.add('active');
    console.log(this);
};

linkColor.forEach(e => e.addEventListener('click', colorLink));

const linkCollapse = document.getElementsByClassName('collapse__link');

for(let i = 0; i < linkCollapse.length; i++){
    linkCollapse[i].addEventListener('click',function(){
        const collapseMenu = this.nextElementSibling;
        collapseMenu.classList.toggle('showCollapse');

        const rotate = collapseMenu.previousElementSibling;
        rotate.classList.toggle('rotate');
    });
}

