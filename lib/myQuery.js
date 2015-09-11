// ## The Methods Needed for the `Library.prototype`
// - `#getElement` should take a string as an argument and analyze that string for css
// selectors syntax and select accordingly.
function Library(elString){
  var selectedEl = this.getElement(elString);
  // we use [0] because we want the selected items to be somewhat
  // difficult to access so that users of our library do not use it against our intentions
  // 0 has no special meaning; it is just a property
  // we could have used anything like selectEl or selectedElephant
  this[0] = selectedEl;
}

/* where your prototypical methods go... */
Library.prototype.getElement = function(element){
  var answer = ""
  if(element.includes('.')){
    answer = document.getElementsByClassName(element.slice(1,element.length));
    }
  else if(element.includes("#")){
    answer = document.getElementById(element.slice(1,element.length));
  }
  else{
    answer = document.getElementsByTagName(element);
  }
  return answer;
};

Library.prototype.css = function(propertyType, property){
  var arrayOfElements = Array.prototype.slice.call(this[0]);
  arrayOfElements.forEach(function(node) {
      node.style[propertyType] = property;
    })
};

Library.prototype.remove = function () {
  var arrayOfElements = Array.prototype.slice.call(this[0]);
  arrayOfElements.forEach(function(node){
      node.parentNode.removeChild(node);
      })
  };

Library.prototype.append = function (string) {
  var arrayOfElements = [].slice.call(this[0]);
  arrayOfElements.forEach(function(node){
      node.innerHTML += string;
    })
  };


var myQuery = function(elString) {
  return new Library(elString);
};

// function Library(string){};
//
// Library.prototype.getElement = function(){
//
// };

//   - ex. `"p"` should get all _paragraph_ elements
//   - ex. `".blue"` should get all elements with the _class_ blue
//   - ex. `"#red"` should get the element with the _id_ of red
// - `#css` should add in line styling to every selected element based on arguments.
//   - The first arg is the property type
//   - The second arg is the new property
//   - ex. `myQuerySelectedElements.css('color', 'red');`
// - `#remove` should remove all selected elements.
//   - ex. `myQuerySelectedElements.remove();`
// - `#append` should add a new elements after a each selected element.
//   - Takes one argument, which is the new element (assume it's correctly formatted).
//   ex. `myQuerySelectedElements.append('<span>Hello</span>');`
