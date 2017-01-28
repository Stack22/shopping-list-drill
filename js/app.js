// Shopping list item
var shoppingList = {
  items: [],
  prehtml: '<li><span class="shopping-item js-item">',
  posthtml: '</span><div class="shopping-item-controls"><button  class="shopping-item-toggle"><span class="button-label js-check">check</span></button><button class="shopping-item-delete js delete"><span class="button-label">delete</span></button></div></li>'
};

// Add items to list
var addToList = function(list, item) {
  console.log("start addToList");
  if (list.items.includes(item)) {
    // toggle checked
    console.log("item already on list");
    alert("That item already exists on list!");
    $(".js-input").val("");
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
  console.log(list + ' ... ' + item);
  var arrayLoc = list.items.indexOf(item);
  console.log(arrayLoc);
  if (list.items[arrayLoc] === item) {
    list.items.splice(arrayLoc, 1);
  }
  console.log(shoppingList);
};

// "Check" items on list (toggleClass ?)


// "Un-check" items on list


// Render functions
var renderList = function(list, element) {
  console.log("starting renderList")
  $(".js-ul-parent").html("");
  var itemsHTML = list.items.map(function(item) {
    return list.prehtml + item + list.posthtml;
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
};

$(doTheThing());
