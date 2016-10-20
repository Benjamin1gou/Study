(function($){
  var canvasTag = "#can";
  var canvas = $(canvasTag).get(0);
  var ctx = canvas.getContext("2d");
  var imageType = "image/png";
  var offset = 5;
  var startX;
  var startY;
  var endX;
  var endY;
  var flag = false;
  var colorTag = "li";
  var clearTag = "#clear";
  var saveText = "#save";
  var hoverTextTag = "#hover-text";
  var textHoverTag = "#text-hover";
  var hoverText;


  $(function() {
    $(canvasTag).mousedown(function(e) {
      $.canvas.drawDown(e, $(this).offset().left, $(this).offset().top);
    });

    $(canvasTag).mousemove(function(e) {
      $.canvas.drawMove(e);
    });

    $(canvasTag).on('mouseup mouseleave', function() {
        flag = false;
    });


    $(colorTag).click(function() {
        ctx.strokeStyle = $(this).css('background-color');
    });

    $(clearTag).click(function(e) {
        $.canvas.clear(e);
    });

    $('#save').click(function() {

    });

    $(textHoverTag).on('click', function(){
      $.canvas.hover($(hoverTextTag).val());
    });

  });

  $.canvas = {
    drawDown: function(e, offsetLeft, offsetRight){
      flag = true;
      startX = e.pageX - offsetLeft - offset;
      startY = e.pageY - offsetRight - offset;
      return false;
    },
    drawMove: function(e){
      if (flag) {
          endX = e.pageX - $(canvasTag).offset().left - offset;
          endY = e.pageY - $(canvasTag).offset().top - offset;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(endX, endY);
          ctx.stroke();
          ctx.closePath();
          startX = endX;
          startY = endY;
      }
    },
    drawUp: function(){
      flag = false;
    },
    clear: function(e){
      e.preventDefault();
      ctx.clearRect(0, 0, $(canvasTag).width(), $(canvasTag).height());
    },
    hover: function(text){
      ctx.fillText(text, 100, 100);
      hoverText = text;
    }
  };

})(jQuery);
