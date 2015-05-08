function loadForm(){
  $.post("data.php",
    { com: "breads" },
    function(data, status){
      for(var i in data){
        $(prefix + '#numOfBread').append(/*
          $('<div/>').append(
            $('<span/>')
              .text(data[i]['breadName'])
          ).append(
            $('<paper-slider/>')
              .attr('value', 5)
              .attr('editable',"")
              .attr('pin',"")
          ).addClass("spinner")*/
          $('<paper-input/>')
            .attr('value', 5)
            .attr('label', data[i]['breadName'])
            .attr('floatingLabel', '')
        );
      }
    },
    'json'
  );
}
$(window).on('polymer-ready', function(){
  var data = {};
  $(prefix + '#submit').click(function(){
    $.post("order.php",
      {data: data},
      function (data, status){

      }
    );
  });
});
