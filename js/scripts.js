$(document).ready(function() {
  $(".walrusClickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $(".penguinClickable").click(function() {
    $("#penguin-showing").toggle();
    $("#penguin-hidden").toggle();
  });
  $(".polarBearClickable").click(function() {
    $("#polarBear-showing").fadeToggle();
    $("#polarBear-hidden").fadeToggle();
  });
  $(".arcticFoxClickable").click(function() {
    $("#arcticFox-showing").slideToggle();
    $("#arcticFox-hidden").slideToggle();
  });
});