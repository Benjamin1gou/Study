(function($){
  //id canを格納　※＃は、いらない
  var canvasTag = "can";

  var canvas;
  var rect; //四角
  var circle; //丸
  var triangle; //三角

  $(function(){
    canvas = new fabric.Canvas(canvasTag);

    //四角の描画
    $.paint.rect(100, 100, 'red', 20, 20, 0);


    //斜め回転を加える
    $.paint.rect(150, 100, 'red', 20, 20, 45);

    $.paint.rectSet(150, 100, 'blue', 20, 20, 30);
    rect.set('fill', 'red');
    rect.set({ strokeWidth: 5, stroke: 'rgba(100,200,200,0.5)' });
    rect.set('angle', 15).set('flipY', true);
    canvas.renderAll();
  });

  $.paint = {
    rect: function(_left, _top, _color, _width, _height, _angle){
      rect = new fabric.Rect({
        left: _left,      //左マージン
        top: _top,      　//右マージン
        fill: _color,   　//カラー
        width: _width,    //横幅
        height: _height,  //縦幅
        angle: _angle     //角度
      });
      canvas.add(rect);
    },
    rectSet: function(_left, _top, _color, _width, _height, _angle){
      rect.set({
        left: _left,      //左マージン
        top: _top,      　//右マージン
        fill: _color,   　//カラー
        width: _width,    //横幅
        height: _height,  //縦幅
        angle: _angle     //角度
      });
      canvas.renderAll();
    },
    circle: function(_radius, _color, _left, _top){
      circle = new fabric.Circle({
        radius: _radius,
        fill: _color,
        left: _left,
        top: _top
      });
      canvas.add(circle);
    },
    triangle : function(_left, _top, _color, _width, _height,_angle){
      triangle = new fabric.Triangle({
        left: _left,      //左マージン
        top: _top,      　//右マージン
        fill: _color,   　//カラー
        width: _width,    //横幅
        height: _height,  //縦幅
        angle: _angle     //角度
      });
      canvas.add(triangle);
    }



  };


})(jQuery);
