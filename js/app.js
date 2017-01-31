// Shopping list item
var state = {
  items: [],
  // prehtml: '<li><span class="shopping-item js-item">',
  // posthtml: '</span><div class="shopping-item-controls"><button  class="shopping-item-toggle"><label class="button-label js-check">check</label></button><button class="shopping-item-delete"><label class="button-label" id="delete-item" >delete</label></button></div></li>'
};

var listItemTemplate = (
  '<li><span class="shopping-item js-item">'+
  '</span><div class="shopping-item-controls"><button  class="shopping-item-toggle"><label class="button-label js-check">check</label></button><button class="shopping-item-delete"><label class="button-label" id="delete-item" >delete</label></button></div></li>'
)
// Add items to list
var addToList = function(state, item) {
  // if (state.items.itemName.includes(item)) {
  //   // need to make sure un-checked (since already on list)
  //   alert("That item already exists on list!");
  //   $(".js-input").val("");
  // } else {
    state.items.push({
      itemName: item,
      itemChecked: false
    });
  // };
};

// Remove items from list
var remFromList = function(state, item) {
  var arrayLoc = state.items.indexOf(item);
  if (state.items[arrayLoc] === item) {
    state.items.splice(arrayLoc, 1);
  }
};

// "Check" items on list (toggleClass ?)

// "Un-check" items on list


// Render functions (DOM manipulation)
function renderItem(item, itemId, itemTemplate, itemDataAttr) {
  var element = $(itemTemplate);
  element.find('.js-item').text(item.itemName);
  if (item.checkedOff) {
    element.find('.js-item').addClass('shopping-item__checked');
  }
  element.find('.js-shopping-item-toggle')
  element.attr(itemDataAttr, itemId);
  return element;
}

function renderList(state, listElement, itemDataAttr) {
  var itemsHTML = state.items.map(
    function(item, index) {
      return renderItem(item, index, listItemTemplate, itemDataAttr);
  });
  listElement.html(itemsHTML);
}
// function renderList(state, element) {
//   $(".js-ul-parent").html("");
//   var itemsHTML = state.items.map(function(item) {
//     return state.prehtml + item + state.posthtml;
//       });
//       element.html(itemsHTML);
// };


// Event listeners
function addAnItem(state, listElement, formElement) {
  formElement.submit(function(event) {
    event.preventDefault();
    var newItem = $(".js-input").val();
    addToList(state, newItem);
    renderList(state, listElement);
    this.reset();
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
