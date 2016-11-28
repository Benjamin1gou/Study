(function($){
  //id canを格納　※＃は、いらない
  var canvasTag = "can";
  var rectColorTag = "#rect-color";
  var rectWidthTag = "#rect-width";
  var rectHeightTag = "#rect-height";
  var rectAngleTag = "#rect-angle";
  var createRectButtonTag = "#create-rect";
  var circleColorTag = "#circle-color";
  var circleScaleTag = "#circle-scale";
  var createCircleButtonTag = "#create-circle";
  var triangleColorTag = "#triangle-color";
  var triangleWidthTag = "#triangle-width";
  var triangleHeightTag = "#triangle-height";
  var triangleAngleTag = "#triangle-angle";
  var createTriangleButtonTag = "#create-triangle";
  var inputTextTag = "#input-text";
  var textFontTag = "#text-font";
  var textSizeTag = "#text-size";
  var textWeightTag = "#text-weight";
  var textDecorationTag = "#text-decoration";
  var textShadowTag = "#text-shadow";
  var textStyleTag = "#text-style";
  var textAlignTag = "#text-align";
  var textLineHeightTag = "#text-line-height";
  var textBackgroundColorTag = "#text-background-color";
  var createTextButtonTag = "#create-text";


  var canvas;
  var rect; //四角　var rect = new fabric.Rect(); みたいにも打てる　setで値を渡す
  var circle; //丸
  var triangle; //三角
  var text;



  $(function(){
    var imageTag = document.getElementById('test');
    //canvas宣言
    canvas = new fabric.Canvas(canvasTag);

    // //四角の描画
    // $.paint.rect(100, 100, 'red', 20, 20, 0);
    //
    //
    // //斜め回転を加える
    // $.paint.rect(150, 100, 'red', 20, 20, 45);
    //
    // $.paint.rectSet(150, 100, 'blue', 20, 20, 30);
    // rect.set('fill', 'red');
    // rect.set({ strokeWidth: 5, stroke: 'rgba(100,200,200,0.5)' });
    // rect.set('angle', 15).set('flipY', true);
    // canvas.renderAll();
    //
    // var imgImstancs = new fabric.Image(imageTag,{
    //   left: 100,
    //   top: 100,
    //   angle: 30,
    //   opacity: 0.85
    // });
    // canvas.add(imgImstancs);
    //
    // fabric.Image.fromURL('img/test.png', function(oImg){
    //   canvas.add(oImg);
    // });
    //
    // text = new fabric.Text("あいうえおおおおお",{
    //   fontFamily: 'Comic Sans'
    // });
    // canvas.add(text);
    //
    // $.paint.triangle(200, 200, 'blue', 200, 200, 30);
    // $.paint.circle(40, 'green', 150, 150);

    // $(textButtonTag).on('click', function(){
    //   $.paint.text();
    // });

    $(createRectButtonTag).on('click', function(){
      $.paint.rect(10,　10,　$(rectColorTag).val(), Number($(rectWidthTag).val()), Number($(rectHeightTag).val()), Number($(rectAngleTag).val()));
    });

    $(createCircleButtonTag).on('click', function(){
      $.paint.circle(Number($(circleScaleTag).val()), $(circleColorTag).val(), 10, 10);
    });

    $(createTriangleButtonTag).on('click', function(){
      $.paint.triangle(10, 10, $(triangleColorTag).val(), Number($(triangleWidthTag).val()), Number($(triangleHeightTag).val()), Number($(triangleAngleTag).val()));
    });

    $(createTextButtonTag).on('click', function(){
      $.paint.text($(textFontTag).val(),Number($(textSizeTag).val()),$(textWeightTag).val(), $(textDecorationTag).val(), $(textShadowTag).val(), $(textStyleTag).val(), $(textAlignTag).val(),$(textLineHeightTag).val(), $(textBackgroundColorTag).val());
    });

  });

  $.paint = {
    rect: function(_left, _top, _color, _width, _height, _angle){
      rect = new fabric.Rect({
        left: _left,      //左マージン
        top: _top,      　//上マージン
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
        top: _top,      　//上マージン
        fill: _color,   　//カラー
        width: _width,    //横幅
        height: _height,  //縦幅
        angle: _angle     //角度
      });
      canvas.renderAll();
    },
    circle: function(_radius, _color, _left, _top){
      circle = new fabric.Circle({
        radius: _radius, //大きさ
        fill: _color, //カラー
        left: _left, //左マージン
        top: _top //上マージン
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
    },
    text: function(_family, _size, _weight, _deco, _shadow, _fontStyle, _strokeStyle, _align, _lineHeight, _background){
      var text = new fablic.Text(inputTextTag.val(),{
        fontFamily: _family,
        fontSize: _size,
        fontWeight: _weight,
        textDecoration: _deco,
        textShadow: _shadow,
        fontStyle: _fontStyle,
        strokeStyle: _strokeStyle,
        textAlign: _align,
        lineHeight: _lineHeight,
        textBackgroundColor: _background
      });
      canvas.add(text);
    }



  };


})(jQuery);
