//Posts student info to html and gives specail css to passing students
const createStudentComponent = (student) => {
    if (student.score >= 60) {
        return `
    <div class="student">
        <h2 class="xx-large passing">${student.name}</h2>
        <section class="bordered dashed section--padded">${student.subject}</section>
        <aside class="pushRight">${student.info}</aside>
    </div>
`
        } else {
        return `
            <div class="student">
                <h2>${student.name}</h2>
                <section>${student.subject}</section>
                <aside>${student.info}</aside>
            </div>
        `
        }
};

//Selects the element to post student info
const studentContainer = document.querySelector("#container");

//Lists all students and excepts the entire object student is a taco
for (const student of students) {
    let studentComponent = createStudentComponent (student)
    studentContainer.innerHTML += studentComponent
};


//Additional students to add to list
const lissa = {
    name: "Lissa Goforth",
    subject: "History",
    info: "Asks pointless, unrelated questions",};
    
const courtney = {
    name: "Courtney Seward",
    subject: "History",
    info: "Has completed all homework"};

const greg = {
    name: "Greg Lawrence",
    subject: "History",
    info: "Sub-par performance all around"};


//Generic HTML Function
//This function creates a new element
//add third argument to add class
function addElement (elementType, stringContent, classList) {
    var newElement = document.createElement(elementType);  
    var newContent = document.createTextNode(stringContent); 
    newElement.appendChild(newContent);  
    var currentDiv = document.getElementById("div1"); 
    newElement.className = classList; //use className instead of classList.add for multiple classes
    document.body.insertBefore(newElement, currentDiv) 
};


//this function calls on the create newElement to add elements
const createNewStudentComponent = (student) => {
    console.log(student);
    `
    <div id="student">
    ${addElement("h1", student.name, "xx-large passing")}
    ${addElement("section", student.subject, "bordered dashed section--padded")}
    ${addElement("aside", student.info, "pushRight")}
    </div>
    `
};

//No scores, follows classes expressed in createNewStudentComponent, does not evaluate score
createNewStudentComponent(greg);
createNewStudentComponent(lissa);
createNewStudentComponent(courtney);


// Create an unordered list element
const list = document.createElement('ul');

// Create a list item for our list
const listItem = document.createElement('li')
listItem.className = "president"
listItem.textContent = "George Bush"

// Put the list item on the unordered list
list.appendChild(listItem)

//Prints list item to page
const listItemsDOM = document.querySelector("#list")
listItemsDOM.appendChild(list);


//grabs div with messages id
const messenger = document.querySelector("#messages");

function addMessageElement (elementType, stringMessage, classList) {
    var newMessageElement = document.createElement(elementType);  
    var newMessageContent = document.createTextNode(stringMessage); 
    newMessageElement.appendChild(newMessageContent);  
    var currentDiv = document.querySelector("#messages"); 
    newMessageElement.className = classList; //use className instead of classList.add for multiple classes
     currentDiv.appendChild(newMessageElement) //appends inside of #messages
};

const createNewMessageExchange = (messageSent) => {
    `
    <div id="student">
    ${addMessageElement("section", messageSent, "message")}
    </div>
    `
};
//Messages back and forth
createNewMessageExchange("Are we doing fireworks this year?")
createNewMessageExchange("After last year's 'tree incident', should we?")
createNewMessageExchange("The fire fighters put it out in like a minute. Wasn\'t even a real fire.")
createNewMessageExchange("We can set them off in the street.")
createNewMessageExchange("Our neighbors\' houses are flammable, too")



// A new "virtual" document fragment to contain components
const fragment = document.createDocumentFragment()

// Create an emperor component element
const julius = document.createElement('li')
julius.textContent = "Julius Caesar"
fragment.appendChild(julius)

// Create an emperor component element
const augustus = document.createElement('li')
augustus.textContent = "Augustus Caesar"
fragment.appendChild(augustus)

// Create an emperor component element
const aurelius = document.createElement('li')
aurelius.textContent = "Marcus Aurelius"
fragment.appendChild(aurelius)


document.querySelector("#emperorList").appendChild(fragment)