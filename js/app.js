// Shopping list item
var state = {
  items: [],
  prehtml: '<li><span class="shopping-item js-item">',
  posthtml: '</span><div class="shopping-item-controls"><button  class="shopping-item-toggle"><label class="button-label js-check">check</label></button><button class="shopping-item-delete"><label class="button-label" id="delete-item" >delete</label></button></div></li>'
};

// Add items to list
var addToList = function(list, item) {
  if (list.items.includes(item)) {
    // need to make sure un-checked (since already on list)
    alert("That item already exists on list!");
    $(".js-input").val("");
  } else {
    list.items.push(item);
    $(".js-input").val("");
  };
};

// Remove items from list
var remFromList = function(list, item) {
  var arrayLoc = list.items.indexOf(item);
  if (list.items[arrayLoc] === item) {
    list.items.splice(arrayLoc, 1);
  }
};

// "Check" items on list (toggleClass ?)

// "Un-check" items on list


// Render functions
var renderList = function(list, element) {
  $(".js-ul-parent").html("");
  var itemsHTML = list.items.map(function(item) {
    return list.prehtml + item + list.posthtml;
      });
      element.html(itemsHTML);
};

// Event listeners
function addAnItem(state, listElement, formElement) {
  formElement.submit(function(event) {
    event.preventDefault();
    var newItem = $(".js-input").val();
    addToList(state, newItem);
    renderList(state, listElement);
  });
}

// Do all the things
$(function() {
  var formElement = $("#js-shopping-list-form");
  var listElement = $("#js-ul-parent");
  addAnItem(state, listElement, formElement);

    $("#js-ul-parent").on('click', ".shopping-item-delete", function(event) {
      event.stopImmediatePropagation();
      console.log($("span:nth-of-type(1)").text());
    });
})
