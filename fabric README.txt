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
