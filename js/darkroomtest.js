$(function(){
  $('#test').click(function(){
    var dkrm = new Darkroom('#test',{
      plugins:{
        save:{
          callback:function(){
            var newImage = dkrm.canvas.toDataURL("image/png");
            var img = new Image();
            img.src = newImage;
            //$('#a').append('<img src="'+img.src+'" height="256px" width = "256px"/>');
            
          }
        }
      }
    });
  });
});

//印刷メソッド
$('#print').click(function(){
    $('#test').printThis();
});
