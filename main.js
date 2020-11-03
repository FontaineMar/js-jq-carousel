  $('.prev, .next').click(function(){
      var circleEl = $('i.active')
      var immaginiEl = $('img.active')
      circleEl.removeClass('active')
      immaginiEl.removeClass('active')
      if(immaginiEl.hasClass('last')){
        $('img.first , i.first').addClass('active')
      } else {immaginiEl.next().addClass('active')
        circleEl.next().addClass('active')
      }
  })
