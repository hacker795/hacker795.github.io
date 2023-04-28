const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'right',
    distance: '200px',
    duration: 1000,
    reset: false
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 200}); 
sr.reveal('.about__text',{delay: 200}); 

/*SCROLL QUALIFICATION*/
sr.reveal('.qualification__tabs',{}); 
sr.reveal('.qualification__title',{delay: 200});
sr.reveal('.qualification__subtitle',{delay: 200}); 
sr.reveal('.qualification__content',{delay: 200}); 
sr.reveal('.qualification_section',{delay: 200});
sr.reveal('.section__title',{delay: 200}); 
sr.reveal('.section__subtitle',{delay: 200}); 



/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 200});

/*SCROLL Coding Profile*/
sr.reveal('.coding__subtitle',{}); 
sr.reveal('.coding__text',{}); 
sr.reveal('.coding__data',{interval: 200}); 
sr.reveal('.coding__img',{delay: 200});

/*SCROLL EXPERIENCE*/
sr.reveal('.experience__tabs',{}); 
sr.reveal('.experience__title',{delay: 200});
sr.reveal('.experience__subtitle',{delay: 200}); 
sr.reveal('.experience__content',{delay: 200}); 
sr.reveal('.experience_section',{delay: 200});
sr.reveal('.section__title',{delay: 200}); 
sr.reveal('.section__subtitle',{delay: 200}); 

/*SCROLL Project Profile*/
sr.reveal('.project__subtitle',{}); 
sr.reveal('.project__text',{}); 
sr.reveal('.project__data',{interval: 200}); 
sr.reveal('.project__img',{delay: 200});

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 
