var cats = [
  {"code": "Fruit", "name": "水果"},
  {"code": "Vegetable", "name": "蔬菜"},
  {"code": "Animal", "name": "動物"}
];

var catcontent = '';

cats.forEach(function(data){
  catcontent += '<a href="card.html"><div class="sort" onclick="localStorage[\'cat_selection\']=\'' + data['code'] + '\'">' + data['name'] + '</div></a>';
});

$(document).ready(function(){
    $('#categories').html(catcontent);
});
