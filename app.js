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


    console.log(beer);
    products = beer[0].products;
    categories = beer[1].categories;
    types = beer[2].types;
    console.log("????",types);
    console.log("!!!",products);
    var showData = $('#content')

      var categories = beer[1].categories.map(function (category){
        $.each(beer[1], function (key, value) {
          $('.beer').click(function () {
              $(this).showData

          var output = '<div class="row">';
          var types = beer[2].types.map(function (type){
          $.each(beer[2], function (key, value) {
            if (type.category === category.id) {
              output +=`<div class="lagers col-md-12"`;
              output += `</div><dt class="btn btn-danger" data-toggle="collapse" data-target="#${type.id}">${type.name}</dt>` + `<dt id="${type.id}" class="collapse in">${type.description}</dt>`
              output += `<h5 class="text-success">${type.name} in Stock:<br><small>Click for Description</small><h5>`
                var products = beer[0].products.map(function (product){
                  $.each(beer[0], function (key, value){
                    if (product.type === type.id) {
                      output += `<dl id = ${product.id}`
                      output += `</dl><dt class="btn btn-primary btn-xs" data-target="#${product.id}" data-toggle="collapse">${product.name}</dt>` + `<dd id="${product.id}" class="collapse">${product.description}</dd>`
                    };
                  });
                });
              output += '</div>';
              var list = $('#content').html(output)
              showData.append(list);
            };
           });
          });
        });
      });
    });



  });
  return store
})(Store || {})

