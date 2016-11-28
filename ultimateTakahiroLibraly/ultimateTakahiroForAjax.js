// ------------------------------------------------------------------
// plaginName: ultimateTakahiroForAjax
// createDate: 2016/11/28
// creater: UTK
// comments: これはjQueryを使用し、javaとの非同期処理を脳死で行うための
//           jQueryLibraryです。
// ------------------------------------------------------------------
(function($){
  // -------------------------
  // @param type: GET or POST
  // @param url: apiURL
  // @param dateType: basic is json
  // @param requestId: 取得用ID名
  // @param option: オプション
  // -------------------------
  var type;
  var url;
  var dateType;
  var requestId = [];
  var option;

  //----------------------------------------------------------
  // constans
  // createDate: 2016/11/28
  // creater: UTK
  //----------------------------------------------------------
  $.UTKA.constant = {
    setAll: function(_type, _url, _dateType){
      type = _type;
      url = _url;
      dateType = _dateType;
    },
    setType: function(_type){
      type = _type;
    },
    setUrl: function(_url){
      url = _url;
    },
    setDayeType: function(_dateType){
      dateType = _dateType;
    },
    setRequestId: function(_id){
      requestId.push(_id);
    }

  };

//---------------------------------
// 間にajax処理記述予定
//---------------------------------


//----------------------------------------------------------
// jsonPerser
// createDate: 2016/11/28
// creater: UTK
//----------------------------------------------------------
  $.UTKA.json = {
    analysis: function(result){
      var list = [Array()];
      var map = {};
      var content = JSON.parse(result);
      consol.log("content:"+content);
      $.each(requestId,function(index, val) {

      });
    }
  };

})(jQuery);
