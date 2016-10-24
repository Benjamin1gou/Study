(function($){
  var colorTag = "li";
  var clearTag = "#clear";
  var saveTag = "#save";
  var hoverTextTag = "#hover-text";
  var textHoverTag = "#text-hover";
  var canvasTag = "#can";
  var moveLeftTag = "#left";
  var moveTopTag = "#top";
  var moveBottomTag = "#bottom";
  var moveRightTag = "#right";

  var canvas = $(canvasTag).get(0);
  var ctx = canvas.getContext("2d");
  var imageType = "image/png";
  var offset = 5;
  var startX;
  var startY;
  var endX;
  var endY;
  var flag = false;
  var hoverText;
  var textMarginLeft = 100;
  var textMarginRight = 100;
  var fontSize = 10;


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

    $(saveTag).click(function() {

    });

    $(textHoverTag).on('click', function(){
      $.canvas.hover($(hoverTextTag).val());
    });

    $(moveLeftTag).on('click', function(){
      $.canvas.move(-10, 0);
    });

    $(moveTopTag).on('click', function(){
      $.canvas.move(0, -10);
    });

    $(moveBottomTag).on('click', function(){
      $.canvas.move(0, 10);
    });

    $(moveRightTag).on('click', function(){
      $.canvas.move(10, 0);
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
    clear: function(){
      //e.preventDefault();
      ctx.clearRect(0, 0, $(canvasTag).width(), $(canvasTag).height());
    },
    hover: function(text){
      hoverText = text;
      $.canvas.repaint();
    },
    repaint: function(){
      ctx.font = ""+fontSize+"px  '"+hoverText+"'";
      ctx.fillText(hoverText, textMarginLeft, textMarginRight);
    },
    size: function(size){
      $.canvas.clear();
      fontSize = size;
      $.canvas.hover();
    },
    move: function(left, right){
      textMarginLeft += left;
      textMarginRight += right;
      $.canvas.clear();
      $.canvas.repaint();
    },


  };

})(jQuery);
