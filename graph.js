/*
  * Name : Graph-Maker.js
  * Author : namusyaka
  * E-mail : namusyaka@gmail.com
  * License : MIT License
  * Description : It's easy for you to make a pole graph.
  * Usage : git clone git://github.com/namusyaka/graph-maker
*/

function Graph(datas, title) {
  return (this instanceof Graph) ?
this.initialize(datas, title) : new Graph(datas, title);
}
var _graph_int = 0;

Graph.prototype = {
  d : document,
  $c : function(e) {
    return this.d.createElement(e);
  } ,
  
  initialize : function(datas, title) {
    this.data = datas;
    this.body = this.$c('ul');
    this.title = this.$c('li');
    this.title.style.clear = 'both';
    if(title) {
      this.title.innerHTML = title;
      this.title.style.borderTop = '1px solid black';
    }
    this.addPropertyToElement({
      border : '1px solid black',
      margin : 0,
      padding : 0,
      listStyleType : 'none'
    }, this.body);
    this.body.id = "graph" + _graph_int;
    ++_graph_int;
  },
  
  addChildToParent : function(child, parent) {
    for(var i = 0; i < child.length; ++i)
      parent.appendChild(child[i]);
  },
  
  addPropertyToElement : function(property, element) {
    var c = element.style;
    for(var i in property)
      c[i] = property[i];
  },
  
  setClassName : function(classname, element) { // Arguments are array.
    if(!element.length === classname.length)
      return;
    for(var i = 0; i < classname; ++i)
      element[i].className = classname;
  },
  
  make : function() {
    var graphs = 0;
    if(!(this.data || this.body))
      return;

    for(var i in this.data) {
      var pole = this.$c('li'), title = this.$c('li');
      var graph_list = this.$c('ul');

      this.setClassName([
        pole,
        title,
        graph_list
      ], [
        'pole',
        'title',
        'graph_list'
      ]);

      this.addPropertyToElement ({
        styleFloat : 'left',
        cssFloat : 'left',
        listStyleType : 'none',
        width : '50px'
      }, graph_list);

      this.addPropertyToElement({
        height : this.data[i] + 'px',
        border : '1px solid black',
        borderTop : 'none'
      }, pole);

      graph_list.id = 'graph_list' + graphs;
      title.innerHTML = i, pole.innerHTML = this.data[i];

      this.addChildToParent([pole, title], graph_list);
      this.body.appendChild(this.$c('li')).appendChild(graph_list);
      ++graphs;
    }
    this.body.appendChild(this.title);
    return this.body;
  }
} 