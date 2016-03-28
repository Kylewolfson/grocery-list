$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var groceryList = ["item1", "item2", "item3", "item4", "item5", "item6"];
    groceryList.forEach(function (item) {
      var organizedList = [];
      organizedList.push("<li>" + ($("#" + item).val()).toUpperCase() + "</li>");
      organizedList.sort();
      console.log(organizedList);
      $("#grocery-list").append(organizedList);
    });
    // make grocery list etc.


    $("#inputs").hide();
    $("#outputs").show();

  });


});
