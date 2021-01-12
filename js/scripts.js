$(document).ready(function() {
  $(".walrusClickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $(".penguinClickable").click(function() {
    $("#penguin-showing").toggle();
    $("#penguin-hidden").toggle();
  });
});