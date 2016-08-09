







$(document).ready(function () {
  var url = "types.json";

  $.getJSON(url, function (beer) {
    console.log(beer);

    $('#lagers').click(function () {
      var showData = $('#content')

      var output = '<ul>';
      var types = beer.types.map(function (type){
      $.each(beer, function (key, value) {
        if (type.category === 0) {
          output +=`<li class="lager">`;
          output += `</li><a class="btn btn-danger" data-toggle="collapse">${type.name}</a>` + `<h4 class="collapse in">${type.description}</h4>`
        }
       });
      });
      output += '</ul>';
      var list = $('#content').html(output)
      showData.append(list);
    });

    $('#ales').click(function () {
      var showData = $('#content')

      var output = '<ul>';
      var types = beer.types.map(function (type){
      $.each(beer, function (key, value) {
        if (type.category === 1) {
          output +=`<li class="lager">`;
          output += `</li><a class="btn btn-danger" data-toggle="collapse">${type.name}</a>` + `<h4 class="collapse in">${type.description}</h4>`
        }
       });
      });
      output += '</ul>';
      var list = $('#content').html(output)
      showData.append(list);
    });

  });
});





// var Store = (function (store) {
//   var categories;
//   var types;
//   var products;
//   //This function uses promises to grab all of the data from the json files
//   store.loadItems = function(){
//     Promise.all([
//       $.getJSON('categories.json'),
//       $.getJSON('types.json'),
//       $.getJSON('products.json')
//       ])
//     .then(function(res){
//         categories = res[0].categories;
//         types = res[1].types
//         products = res[2].products
//         store.pickCategory(categories, types, products)
//       })
//     $('#lagers').click(function () {
//     var showData = $('#content')
//   }

//   return store
// })(Store || {})




