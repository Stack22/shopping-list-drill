// Shopping list item
var state = {
  items: [],
  // prehtml: '<li><span class="shopping-item js-item">',
  // posthtml: '</span><div class="shopping-item-controls"><button  class="shopping-item-toggle"><label class="button-label js-check">check</label></button><button class="shopping-item-delete"><label class="button-label" id="delete-item" >delete</label></button></div></li>'
};

var listItemTemplate = (
  '<li><span class="shopping-item js-item">'+
  '</span><div class="shopping-item-controls"><button  class="shopping-item-toggle"><label class="button-label" id="#js-check-item">check</label></button><button class="shopping-item-delete"><label class="button-label" id="js-delete-item" >delete</label></button></div></li>'
)
// Add items to list
var addToList = function(state, item) {
  if (state.items.hasOwnProperty(item)) { // not working
    // need to make sure un-checked (since already on list)
    alert("That item already exists on list!");
    $(".js-input").val("");
  } else {
    state.items.push({
      itemName: item,
      itemChecked: false
    });
  };
};

// Remove items from list
function deleteItem(state, itemIndex) {
  state.items.splice(itemIndex, 1);
}
// var remFromList = function(state, item) {
//   var arrayLoc = state.items.indexOf(item);
//   if (state.items[arrayLoc] === item) {
//     state.items.splice(arrayLoc, 1);
//   }
// };



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

// Event listeners
function addAnItem(state, listElement, formElement, itemID, itemDataAttr) {
  formElement.submit(function(event) {
    event.preventDefault();
    // var newItem = $(".js-input").val();
    var newItem = formElement.find(itemID).val();
    addToList(state, newItem);
    renderList(state, listElement, itemDataAttr);
    this.reset();
  });
}

function delAnItem(state, formElement, delButtonID, itemDataAttr, listElement) {
  listElement.on('click', delButtonID, function(event) {
    var itemIndex = parseInt($(this).closest('li').attr(itemDataAttr));
    deleteItem(state, itemIndex);
    renderList(state, listElement, itemDataAttr);
  });
}

// function delAnItem(state, )
// Do all the things
$(function() {
  var formElement = $("#js-shopping-list-form");
  var listElement = $("#js-ul-parent");
  var itemID = "#js-new-item";
  var delButtonID = "#js-delete-item";
  var checkButtonID = "#js-check-item";
  var itemDataAttr = "data-list-item-id";

  addAnItem(state, listElement, formElement, itemID, itemDataAttr);
  delAnItem(state, formElement, delButtonID, itemDataAttr, listElement);

})
