//JQuery front-End functionality
$(document).ready(function() {
  $(".clickable1").click(function() {
    $(".click-show1").toggle();
    $(".click-hidden1").toggle();
  });
  $(".clickable2").click(function() {
    $(".click-show2").toggle();
    $(".click-hidden2").toggle();
  });
  $(".clickable3").click(function() {
    $(".click-show3").toggle();
    $(".click-hidden3").toggle();
  });
  $( "[title]" ).tooltip({  
  });
  $("form").submit(function(event) {
    var customer = $("input#name").val();
    alert(customer + " " + 'We have received your message!! Thank you for reaching out to us.')
    var frm = document.getElementsByName('mc-embedded-subscribe-form')[0];
    frm.submit();
    document.getElementById('name').value=''; 
    document.getElementById('email').value=''; 
    document.getElementById('mce-MMERGE6').value='';
      });

     
});



/*

event.preventDefault();
$('form')[0].reset();  */