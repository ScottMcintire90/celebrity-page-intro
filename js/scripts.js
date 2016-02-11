$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    var quote = gender;
    if (gender === 'female') {
      quote = 'Brad Pitt';
    }
    else {
      quote = 'Jen Lopez';
    }

    $("#date").empty().append(quote);
    $("#quote").show();

    event.preventDefault();
  });
});
