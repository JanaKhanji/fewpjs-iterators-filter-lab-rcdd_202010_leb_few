// Code your solution here
function findMatching (arr, name) {
  return arr.filter(function (item) {
    return item.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (list, provided) {
  return list.filter(function (name) {
    return name.slice(0, provided.length) === provided;
  });
}

function matchName (drivers ,name){
  return drivers.filter(function (item) {
    return item.name.toLowerCase() === name.toLowerCase();
  });
  
}