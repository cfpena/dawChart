$(document).ready(function(){


      $("#save").unbind('click').click(save);
      $("#load").unbind('click').click(load);
      load();
  });

function save(event){

  var name = prompt(" Ingrese el nombre del diagrama");
  $.post(
    '/saveDiagram',
    {name: name, diagram: graph.toJSON()},
    function () {
      alert("Se guardo correctamente");
    }
  ).fail(function(res){
    alert("Error: " + res.getResponseHeader("error"));
  });
}

function load(){
  
  $.post(
    '/loadDiagram',
    function (res) {
      graph.clear();
      graph.fromJSON(res);

    }
  ).fail(function(res){
    alert("Error: " + res.getResponseHeader("error"));
  });



}

var graph = new joint.dia.Graph();

var paper = new joint.dia.Paper({
    el: $('#drawContainer'),
    width: 800,
    height: 600,
    gridSize: 1,
    model: graph
});
