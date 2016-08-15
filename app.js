var Store = (function (store) {
  var categories;
  var types;
  var products;

  Promise.all([
    $.getJSON('categories.json'),
    $.getJSON('types.json'),
    $.getJSON('products.json')
    ])
  .then(function(beer){

    console.log("beer", beer);
    categories = beer[0].categories;
    types = beer[1].types;
    products = beer[2].products;



      categories.filter(function (Category){
        $.each(beer[0], function (key, value) {
          $('.drunk').click(function () {

             if (this.id === Category.name) {

              console.log(this.id)
              console.log(Category.name)
              var showData = $('#content')

            var output = '<div class="row">';
            var types = beer[1].types.map(function (type){
            $.each(beer[1], function (key, value) {
              if (type.category === Category.id) {
                output +=`<div class=" col-md-12"`;
                output += `</div><dt class="btn btn-danger" data-toggle="collapse" data-target="#${type.id}">${type.name}</dt>` + `<dt id="${type.id}" class="collapse in">${type.description}</dt>`
                output += `<h5 class="text-success">${type.name} in Stock:<br><small>Click for Description</small><h5>`
                  var products = beer[2].products.map(function (Product){
                    $.each(beer[2], function (key, value){
                      if (type.id === Product.type) {
                        output += `<dl id = ${Product.id}`
                        output += `</dl><dt class="btn btn-primary btn-xs" data-target="#${Product.id}" data-toggle="collapse">${Product.name}</dt>` + `<dd id="${Product.id}" class="collapse">${Product.description}</dd>`
                    };
                  });
                });

              output += '</div>';
              var list = $('#content').html(output)
              showData.append(list);
              };
             });
            });
          };
        });
      });
    });
  });
  return store
})(Store || {})

