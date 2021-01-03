let names = [];

function arrayOfNames (element) {
	let elements = document.getElementsByClassName('name');
  for (let i = 0; i < elements.length; i++) {
  	names.push(elements[i].innerHTML);
  }
  return names;
}

alert(arrayOfNames(names));
// 1. Create an empty array, `names`
// 2. Find all the paragraph elements using `getElementsByClassName`
// 3. For each element found
	// Add the element's text to the array of names
// 4. Alert the final result