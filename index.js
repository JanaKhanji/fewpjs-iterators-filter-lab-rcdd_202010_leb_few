// Code your solution here
function findMatching (arr, name) {
  return arr.filter(function (item) {
    return item.toLowerCase() === item.toLowerCase();
  });
}

function fuzzyMatch (list, provided) {
  return list.filter(function (name) {
    return name.slice(0, provided.length) === provided;
  });
}

function matchName (){
  
  
}