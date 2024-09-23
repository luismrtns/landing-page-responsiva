$(document).ready(function(){
  $('.mobile-btn').on('click', function(){
    $('#mobile-menu').toggleClass('active');
    $('.mobile-btn').find('i').toggleClass('fa-x');
  });
  // ScrollReveal().reveal('#cta', {
  //   origin: 'left',
  //   duration: 2000,
  //   distance: '20%'
  // })

  // ScrollReveal().reveal('#pratos', {
  //   origin: 'right',
  //   duration: 2000,
  //   distance: '20%'
  // })

  // ScrollReveal().reveal('#avalia', {
  //   origin: 'top',
  //   duration: 2000,
  //   distance: '20%'
  // })
  
  // ScrollReveal().reveal(".img-chef", {
  //   origin: "top",
  //   duration: 1000,
  //   distance: "20%",
  // })
    // const sections = $('section');
  // const navItems = $('.nav-item');

  // $(window).on('scroll', function(){
  //   const header = $('header');
  //   const scrollPosition = $(window).scrollTop() - header.outerHeight();
  //   let activeScrollIndex = 0

  //   if(scrollPosition <= 0){
  //     header.css('box-shadow', 'none');
  //   }else{
  //     header.css('box-shadow', "5px 1px 5px rgba(0,0,0,0.5)");
  //   }
  //   sections.each(function(i){
  //     const section = $(this);
  //     const sectionTop = section.offset().top - 96;
  //     const sectionBottom = sectionTop + section.outerHeight();
    
  //     /* se a posição da rolagem tá dentro da área específica */
  //     if(scrollPosition >= sectionTop && scrollPosition < sectionBottom){
  //       activeScrollIndex = i;
  //       return false;
  //     }
  //   })
  //   navItems.removeClass('active')
  //   $(navItems[activeScrollIndex]).addClass('active');
  // });
});