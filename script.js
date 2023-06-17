// intialize the count as 0
let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

// listen for clicks on the increment button
function increment() {
    // increment the count variable when the button is clicked
    count += 1;
// change the count-el in the HTML to reflect the new count
    countEl.textContent = count;
}

function reset() {
    count = 0;
    countEl.innerText = count;
}

function showCount() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countStr = count + " -"
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
     saveEl.textContent += countStr;
     reset();
}