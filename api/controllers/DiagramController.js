
module.exports = {

  list: function(req, res){
    Diagram.find().populateAll().exec(function(err, diagram) {
         return res.view('dashboard',{diagram : diagram });
    });
  },

  get_user: function(req, res) {
    console.log(req.user.id);
    res.send(req.user.id);
  },

  saveDiagram: function(req,res){
    Diagram.create({name: req.param("name"), diagram: req.param("diagram"), owner : req.user.id}).exec(function createCB(err, created){
  console.log('Created');
  res.send("exito");
});
},

  loadDiagram: function(req,res){
    Diagram.findOne({name : req.cookies.diagram}).exec(function findOneCB(err, found){
      console.log(req.cookies.diagram)
      res.send(found.diagram)
  console.log('We found '+found.name);
});
},
load: function(req,res){
    if(req.param("id")!='undefined'){
    res.clearCookie('name', { path: '/dashboard' });
    res.cookie('diagram',req.param("id"));
    console.log(req.param("id"));
    console.log(req.cookies.diagram);
    res.send('ok');
  }
},
}
