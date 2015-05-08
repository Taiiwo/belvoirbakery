function loadForm(){
  $.post("data.php",
    { com: "breads" },
    function(data, status){
      for(var i in data){
        var input = $('<paper-input/>')
          .attr('label', data[i]['breadName'])
          .attr('floatingLabel', '')
          .attr('value', 5)
          .addClass('red')
          .addClass('custom');
        /*
        var input = $('<div/>').append(
          $('<span/>')
            .text(data[i]['breadName'])
        ).append(
          $('<paper-slider/>')
            .attr('value', 5)
            .attr('editable',"")
            .attr('pin',"")
        ).addClass("spinner")
        */
        $(prefix + '#numOfBread').append(
          input
        );
      }
      $('body /deep/ paper-input-decorator').attr('focused', '');
      setTimeout( function() {
        $('body /deep/ paper-input-decorator').removeAttr('focused', '');
      });
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
