$(document).ready(function(){

      $(".dropdown-button").dropdown();
      $('.modal-trigger').leanModal();
  });

function load(id){

  $.post(
    '/load',
    {id: id},
    function () {
      window.location ="/workarea";
    }
  ).fail(function(res){
    alert("Error: " + res.getResponseHeader("error"));
  });



  }
