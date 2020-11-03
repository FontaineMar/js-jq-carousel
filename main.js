  $('.prev, .next').click(function(){

      var immaginiEl = $('img.active')
      immaginiEl.removeClass('active')
      if(immaginiEl.hasClass('last')){
        $('.first').addClass('active')
      } else {immaginiEl.next().addClass('active')
      }
  })


  $('.prev, .next').click(function(){
      var first = $('i.first')
      var circleEl = $('i.active')
      circleEl.removeClass('active')
      if(circleEl.hasClass('last')){
        first.addClass('active')
      } else {circleEl.next().addClass('active')
      }
  })
