// Code your solution here
function findMatching (arr, name) {
  return arr.filter(function (item) {
    return item.toLowerCase() === item.toLowerCase();
  });
}

function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}