

$(document).ready(function(){
    if (window.Worker){
      var worker = new Worker("js/worker.js");
      worker.onmessage = function(event){
        alert(event.data);
      };
      $("#start").on("click", function(event){
        worker.postMessage($("#name").val());
      });
  } else {
      window.alert("本ブラウザではWeb Workersが使えません");
  }
});
