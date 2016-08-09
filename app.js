







$(document).ready(function () {
  var url1 = "types.json";

  $.getJSON(url1, function (beer) {
    console.log(beer);

    $('#lagers').click(function () {
      var showData = $('#content')

      var output = '<ul>';
      var types = beer.types.map(function (type){
      $.each(beer, function (key, value) {
        if (type.category === 0) {
          output +=`<li class="lager" id="${type.id}>"`;
          output += `</li><a class="btn btn-danger" data-target="#${type.id}" data-toggle="collapse">${type.name}</a>` + `<div id="${type.id}" class="collapse"<h4>${type.description}</h4>  <button type="button" class="btn btn-primary">Show Beers</button></div>`
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
          output +=`<li class="ales" id="${type.id}>"`;
          output += `</li><a class="btn btn-danger" data-target="#${type.id}" data-toggle="collapse">${type.name}</a>` + `<div id="${type.id}" class="collapse"<h4>${type.description}</h4>  <button type="button" class="btn btn-primary">Show Beers</button></div>`
        }
       });
      });
      output += '</ul>';
      var list = $('#content').html(output)
      showData.append(list);
    });

  });
});


// #content > ul > a:nth-child(2)


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




