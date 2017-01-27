// Shopping list item
var shoppingList = {
  items: []
};

// Add items to list
var addToList = function(list, item) {
  console.log("starting addToList");
  list.items.push(item);
};

// Remove items from list
var remFromList = function(list, item) {
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
  var itemsHTML = list.items.map(function(item) {
    return '<li><span class="shopping-item">' + item + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>'
      });
      console.log("itemsHTML: " + itemsHTML);
      element.append(itemsHTML);
};

// Do all the things
var doTheThing = function() {
  $(":submit").click(function(event) {
    event.preventDefault();
  addToList(shoppingList, $(".js-input").val());
  console.log(shoppingList);
  renderList(shoppingList, $("#js-ul-parent"));
  });
};

$(doTheThing());
