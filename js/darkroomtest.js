// var dkrm = new Darkroom('#test');

$(function(){
  $('#test').click(function(){
    var dkrm = new Darkroom('#test',{
      plugins:{
        save:{
          callback:function(){
            var newImage = dkrm.canvas.toDataURL();
            
          }
        }
      }
    });
  });
});
