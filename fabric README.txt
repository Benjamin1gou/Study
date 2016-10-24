参考URL http://yamineko.lv9.org/Fabric.js%20Javascript%20Canvas%20Library/fabric-intro-part-2/fabric-intro-part-2.html

var rect = new fabric.Rect(); // 何のオプションも渡されていなことに注意
rect.getWidth(); // 0
rect.getHeight(); // 0

rect.getLeft(); // 0
rect.getTop(); // 0

rect.getFill(); // rgb(0,0,0)
rect.getStroke(); // null

rect.getOpacity(); // 1

下記を宣言することにより、インタラクティブ性のあるcanvasを宣言できる
インタラクティブ・・・オブジェクトを洗濯のできる
var canvas = new fabric.Canvas('id');

インタラクティブ性が必要でない場合は下記のように書く
var canvas = new fabric.StaticCanvas('id');

canvas.add.Rect({
    width: 10, height: 20,
    left: 100, top: 100,
    fill: 'yellow',
    angle: 30
  }));

これにより処理の軽いバージョンとして作れる

//テキスト表示について
//下記の書き方をすることによりテキストをキャンバスに表示することができる
var text = new fabric.Text("あいうえお",{
  fontFamily: 'Comic Sans'  //フォントファミリー
  fontSize: 40 //フォントサイズ
  fontWeight: 'bold' or 'normal'  //フォントウェイト　数値の指定も可（100,200,400,600,800)
  textDecoration: 'underline' or 'line-through' or 'overline' //文字装飾
  textShadow: 'rgba(0,0,0,0.3) 5px 5px 5px' //影付きテキスト　color, horizontak offset, vertical offset, blur size
  fontStyle: 'italic' //フォントスタイル
  strokeStyle: '#ffffff'; ストロークスタイル
  textAlign: 'right' //文字列揃え
  lineHeight: 3 //行間
  textBackgroundColor: 'rgb(0,200,0)' //文字列背景色
});
