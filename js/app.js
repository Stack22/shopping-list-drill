// Shopping list item
var shoppingList = {
  items: []
};

// Add items to list
var addToList = function(list, item) {
  console.log("start addToList");
  if (list.items.includes(item)) {
    // toggle checked
    console.log("item already in list");
  } else {
    list.items.push(item);
    // list.prehtml.push('<li><span class="shopping-item js-item">');
    // list.posthtml.push('</span><div class="shopping-item-controls"><button  class="shopping-item-toggle"><span class="button-label js-check">check</span></button><button class="shopping-item-delete js delete"><span class="button-label">delete</span></button></div></li>');
    $(".js-input").val("");
  };

};

// Remove items from list
var remFromList = function(list, item) {
  console.log("start remFromList");
  var arrayLoc = list.indexOf(item);
  if (list.items === item) {
    list.splice(arrayLoc, 1);
  };
};

// "Check" items on list (toggleClass ?)


// "Un-check" items on list


// Render functions
var renderList = function(list, element) {
  console.log("starting renderList")
  $(".js-ul-parent").html("");
  var itemsHTML = list.items.map(function(item) {
    return '<li><span class="shopping-item js-item">' + item + '</span><div class="shopping-item-controls"><button  class="shopping-item-toggle"><span class="button-label js-check">check</span></button><button class="shopping-item-delete js delete"><span class="button-label">delete</span></button></div></li>'
      });
      // console.log("itemsHTML: " + itemsHTML);
      element.html(itemsHTML);
};

// Do all the things
var doTheThing = function() {
  $("#add-item").click(function(event) {
    event.preventDefault();
    addToList(shoppingList, $(".js-input").val());
    renderList(shoppingList, $("#js-ul-parent"));
    console.log(shoppingList);
  });
  $(".js-delete").click(function(event) {
    event.preventDefault();
    // remFromList(shoppingList, $(this).closest("js-item").val());
    console.log("Remove: " + $(event).closest("js-item").val());
    renderList(shoppingList, $("#js-ul-parent"));
    console.log(shoppingList);
  });
};

$(doTheThing());
