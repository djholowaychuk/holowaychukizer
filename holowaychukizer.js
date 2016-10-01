var holowaychukize = function(params) {
  if (!params.firstName || !params.lastName) {
    throw "Unholowaychukable";
  }
  var initalOne = params.firstName.charAt(0).toUpperCase();
  var initalTwo = params.lastName.charAt(0).toUpperCase();
  return initalOne + initalTwo + ' Holowaychuck';
}
