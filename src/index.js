import '../src/sass/styles.scss';
import '@fortawesome/fontawesome-free/js/all';
import $ from 'jquery';

$('#j-nav').on('click','a', function(event){ 
  event.preventDefault();
  let dest = $(this).attr("href");
  if (dest === '#') {
    window.scrollTo(0,0);
  } else {
    let elementOffset =  $(dest).offset();   
    let navHeight = elementOffset.top - 65;
    window.scrollTo(0, navHeight);
  }   
});
