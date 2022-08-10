// bấm vào mục thì chuyển qua trang sản phẩm tương ứng
var suggestionItems = document.querySelectorAll('.suggestion__item')
suggestionProducts = document.querySelectorAll('.suggestion--product')



suggestionItems.forEach(function(item, index) {
        const suggestionProduct = suggestionProducts[index]
    
        item.onclick = function(e) { 
            
        document.querySelector('.suggestion__item.suggestion--active').classList.remove('suggestion--active')
        document.querySelector('.suggestion--product.active--deal').classList.remove('active--deal')


        this.classList.add('suggestion--active')
        suggestionProduct.classList.add('active--deal')
        
    }
})




// slider của brand
$(document).ready(function() {
  var slider = $('.slideshow-container').lightSlider({
      item:1,
      slideMargin:0,
      loop:true,
      auto: true,
      speed: 800,
      easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
      pause: 6000,
      pager: false,
  });

  $('.prev').click(function() {
      slider.goToPrevSlide();
      console.log(123)
  });

  $('.next').click(function() {
      slider.goToNextSlide();
  });
});
// countdown fashsale

function countdown() {
  const countHour = new Date ("September 5, 2022 13:00:00").getTime()
  const now = new Date().getTime()
  const gap = countHour - now

  //how does the time work
  const second = 1000
  const minute  = second * 60
  const hour = minute * 60

  // calculate

  const textHour = Math.floor(gap / hour )
  const textMinute = Math.floor((gap % hour) / minute)
  const textSecond = Math.floor((gap % minute) / second)

  // document.querySelector('.hour').innerText = textHour
  document.querySelector('.minute').innerText = textMinute < 10 ? '0' + textMinute : textMinute
  document.querySelector('.second').innerText = textSecond  < 10 ? '0' + textSecond : textSecond
  console.log(typeof textMinute)
}

setInterval(countdown, 1000)


// product slider
$(document).ready(function() {
  var slider = $(".rowSlider").lightSlider({
      item:5,
      loop:true,
      // auto: true,
      slideMove:2,
      easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
      speed:600,
      pager: false,
      slideMargin: 1,
      enableTouch: true,
      enableDrag: true,
      freeMove: true,
      responsive : [
        {
            breakpoint:1023,
            settings: {
                item:4,
                slideMove:2,
              }
        },
        {
            breakpoint:739,
            settings: {
                item:2,
                slideMove:1
              }
        }
    ]
      
  });

  $('.slidePrev').click(function() {
      slider.goToPrevSlide();
      console.log(123)
  });

  $('.slideNext').click(function() {
      slider.goToNextSlide();
  });
});

// footer clik show thông tin
var collapseFooter = document.querySelectorAll('.footer__item-content')
var collapseClick = document.querySelectorAll('.footer__item-heading')

for (let i=0; i<collapseClick.length -1; i++ ) {
  var indexClick = i
  collapseClick[i].addEventListener('click', () => {
    for ( let i=0; i<collapseClick.length -1; i++ ) {
      var indexCollapse = i
      if ( indexCollapse == indexClick && collapseFooter[i].classList.contains('hide')) {
        collapseFooter[i].classList.remove('hide')
      } else {
        collapseFooter[i].classList.add('hide')

      }
    }
  })
  
}





