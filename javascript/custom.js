$(document).ready(function() {

  $(".bl_part").hover(
    function() {

      $(this).find('.hover_hide').show();
      $(this).find('.image_trig').hide();

    },
    function() {
      $(this).find('.hover_hide').hide();
      $(this).find('.image_trig').show();
      // $(this).find('.down_blck').removeClass('dec_margin');
    }
  );



  $('.count').each(function() {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
  // $('datepicker').datepicker();
  $(function() {
    $('.datepicker').datepicker({
      format: 'dd/mm/yyyy',
      autoclose: true,
      startDate: new Date()
    });
  });


  // $('m_active').click(
  //   function() {
  //     $(this).addClass('active');
  //   },
  //   function() {
  //     $(this).removeClass('active');
  //   }
  // );
  //
  // $('.Investor').click(function() {
  //   $('.iv_steps').css('display', 'block');
  // });
  //
  // $('.Borrower').click(function() {
  //   $('.br_steps').css('display', 'block');
  // });

  $('.whole_cover').hover(function() {
    $(this).find('.hide_wrap').toggle();
  });


  $(".whole_cover").hover(
    function() {
      $(this).find('.down_blck').addClass('dec_margin');
    },
    function() {
      $(this).find('.down_blck').removeClass('dec_margin');
    }
  );

  var slider = new Swiper('#hero', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    loop: true,
    parallax: false,
    centeredSlides: true,
    touchRatio: 0,
    speed: 1000,
    simulateTouch: false,


    onSlideChangeStart: function(s) {
      var currentSlide = $(s.slides[s.activeIndex]);
      //console.log(currentSlide);
      $('.swiper-button-next').css('pointer-events', 'none');
      $('.swiper-button-prev').css('pointer-events', 'none');
    },
    onSlideChangeEnd: function(s) {
      var currentSlide = $(s.slides[s.activeIndex]);
      // alert(count);
      // setColorOfAnchor(action);
      // console.log(s.activeIndex);
      $('.swiper-button-next').css('pointer-events', 'unset');
      $('.swiper-button-prev').css('pointer-events', 'unset');
    }
  });

  //
  //   $(function() {
  //     $('a[href*=#]').on('click', function(e) {
  //       e.preventDefault();
  //       $('html, body').animate({
  //         scrollTop: $($(this).attr('href')).offset().top
  //
  //       }, 500, 'linear');
  //     });
  //   });
});





$('.wh_all_wrap').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: true,
  slidesToScroll: 1,
  autoplay: true,

});


$('.audio_wrap').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

// var owl = $('.nre_cus_r');
// owl.owlCarousel({
//     items:3,
//     loop:true,
//     margin:10,
//     navigation:true,
//     autoPlay:true,
//     autoplayTimeout:500,
//     autoplayHoverPause:true,
//      navigationText: [
//   "<i class='icon-chevron-left icon-white'><</i>",
//   "<i class='icon-chevron-right icon-white'>></i>"],
//
// });


$('.nre_cus_r21').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

$('.nre_cus_r').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

$('.nre_cus_r1').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});
//
// $(document).ready(function() {
//
//   //active state
//   $(function() {
//     $('.menu li a').click(function(e) {
//       e.preventDefault();
//       var $this = $(this);
//       $this.closest('ul').find('li.active,a.active').removeClass('active');
//       $this.addClass('active');
//       $this.parent().addClass('active');
//
//     });
//   });
// });

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tab_active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " tab_active";
}



$(document).ready(function() {

  var scrollLink = $('.scrolly');

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
  });

// variables
var $header_top = $('.header-top');
var $nav = $('nav');





// fullpage customization
$('#fullpage').fullpage({
  sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F', '#B8B89F'],
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  navigation: true,
  allowPageScroll: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['At_paisa', 'About_PaisaDukan', 'Board_of_Directors', 'Advisory_Board', 'Our_Team', 'From_CEO_Desk'],
  menu: '#menu',
  scrollOverflow: true,
});
