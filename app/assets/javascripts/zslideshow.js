// $(function(){
//   $("#slides").slidesjs({
//     width: 240,
//     height: 220
//   });
// });
$(document).on("turbolinks:load", function() {
  // $('.flexslider').flexslider();
  const slideshowImage = $(".intro .slideshow-img");
  const nextImageDelay = 3000;
  let currentImageCouter = 0;

  // slideshowImage[currentImageCouter].style.display = "block";
  slideshowImage[currentImageCouter].style.opacity = 1;
  setInterval(nextImage, nextImageDelay);

   function nextImage(){
   	// slideshowImage[currentImageCouter].style.display = "none";
   	slideshowImage[currentImageCouter].style.opacity = 0;

   	currentImageCouter = (currentImageCouter + 1) % slideshowImage.length;
   	// slideshowImage[currentImageCouter].style.display="block";
   	slideshowImage[currentImageCouter].style.opacity = 1;

   }
   var swiper = new Swiper('.swiper-container', {
     effect: 'coverflow',
     grabCursor: true,
     centeredSlides: true,
     slidesPerView: 'auto',
     coverflowEffect: {
       rotate: 50,
       stretch: 0,
       depth: 100,
       modifier: 1,
       slideShadows : true,
     },
     pagination: {
       el: '.swiper-pagination',
     },
   });
});
