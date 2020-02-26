// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 8.
//[3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
//3,18 
//index = 10
//item = array[10]

function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  console.log('index', index)
  const item = array[index];
  console.log('item', item)

  console.log(start, end);
  if (item == value) {
    console.log('final value', item)
    return index;
  }
  else if (item < value) {
    console.log(' is less', item, value)
    return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
};

binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 8);
binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 16);

// 3. Find a book
// Imagine you are looking for a book in a library with a Dewey Decimal index.How would you go about it ? Can you express this process as a search algorithm ? Implement your algorithm to find a book whose Dewey and book title is provided.

//Break dewey into array
//find first index in array
//If it's more than 5, search between 5-9
//else search between 0-4\
//Not sure how to match numbers of dewey to title

function deweySearching(dewey, title, start, end) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? dewey.length : end;

  if(start > end) {
    return -1;
  }
  const index = Math.floor((start + end) / 2);
  const item = dewey[index];

  for (let i = 0; i < dewey.length; i++) {
    if(dewey[i] == title) {

    }
  }
}

function findBook(array, dewey, title) {
  //object.keys at beginning index
  const keys = Object.keys(array[0]);
  array.forEach(book => {
    if(book[key[0]] === dewey && book[keys[1]] === title) {
      return book;
    }
  });
}
findBook(books, '003.449', 'c')

//implement different tree traversals
function treeTraversals() {
  let BST = new BinarySearchTree();
  BST.insert(25, '25');
  BST.insert(15, '15');
  BST.insert(50, '50');
  BST.insert(10, '10');
  BST.insert(24, '24');
  BST.insert(35, '35');
  BST.insert(70, '70');
  BST.insert(4, '4');
  BST.insert(12, '12');
  BST.insert(18, '18');
  BST.insert(31, '31');
  BST.insert(44, '44');
  BST.insert(66, '66');
  BST.insert(90, '90');
  BST.insert(22, '22');
}
    //inOrder() preOrder() postOrder()
const preOrder = (bst) => {
  console.log({ preOrder: bst.key });
  if(bst.left) {
    preOrder(pst.left);
  }
  if(bst.right) {
    preOrder(bst.right);
  }
};

//FIND THE NEXT COMANNDING OFFICER
// a program that will take this tree of commanding officers and outlines the ranking officers 
//in their ranking order so that if officers start dropping like flies, we know who 
//is the next person to take over command.

function nextCommandingOfficer() {
  let BST = new BinarySearchTree();
  BST.insert(5, 'Captain Picard');
  BST.insert(3, 'Commander Riker');
  BST.insert(6, 'Commander Data');
  BST.insert(8, 'Lt. Cmdr. Crusher');
  BST.insert(7, 'Lieutenant Selar');
  BST.insert(3, 'Lt. Cmdr. Worf');
  BST.insert(4, 'Lt. Cmdr. LaForge');
  BST.insert(1, 'Lt. security-officer');

  commanders(BST)
}

nextCommandingOfficer();
