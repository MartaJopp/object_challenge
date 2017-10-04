var locations = []; // this array will hold your objects

// object constructor
var State = function(stateInput, revenueInput, locationCountInput){
  this.state = stateInput;
  this.revenue = revenueInput;
  this.locationCount = locationCountInput;
  this.averageRevenue = function (){
    return this.revenue/this.locationCount;
  };
};
// object instances
var illinois = new State ('IL', 5000, 12);
var minnesota = new State ('MN', 300, 3);
var nevada = new State ('NV', 25000, 1);
// push object instances to locations array
locations.push(illinois, minnesota, nevada);
// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});
