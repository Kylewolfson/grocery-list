$(document).ready(function(){
  var organizedList = [];
  $("form").submit(function(event) {
    event.preventDefault();
    var groceryList = ["item1", "item2", "item3", "item4", "item5", "item6"];
    groceryList.forEach(function (item) {
      // The if statement is a test for truthiness. it will not add empty form items to the list.
      if ($("#" + item).val()) {
        organizedList.push("<li>" + ($("#" + item).val()).toUpperCase() + "</li>");
        organizedList.sort();
        console.log(organizedList);
      }
    });
    $("#grocery-list").append(organizedList);
    // make grocery list etc.


    $("#inputs").hide();
    $("#outputs").show();

  });


});
