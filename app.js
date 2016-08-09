var Store = (function (store) {
  var categories;
  var types;
  var products;
  Promise.all([
    $.getJSON('products.json'),
    $.getJSON('categories.json'),
    $.getJSON('types.json')
    ])
  .then(function(beer){

  // $.getJSON(url, function (beer) {
    console.log(beer);
    products = beer[0].products;
    categories = beer[1].categories;
    types = beer[2].types;
    console.log("????",types);
    console.log("!!!",products);

    $('#lagers').click(function () {
      var showData = $('#content')

      var output = '<ul>';
      var types = beer[2].types.map(function (type){
      $.each(beer[2], function (key, value) {
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
      var types = beer[2].types.map(function (type){
      $.each(beer[2], function (key, value) {
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
  return store
})(Store || {})




