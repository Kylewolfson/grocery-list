
$(function() {
  var suits = ["spades", "clubs", "hearts", "diamonds"];
  var numbers = [];
  for (var i = 1; i <= 10; i += 1) {
    numbers.push(i);
  };
  numbers.push("Jack", "Queen", "King");
  suits.forEach(function(suit){
    numbers.forEach(function(number){
    $(".cards").append("<li>" + number + " of " + suit + "</li>");
      });
  });
});

  // suits.forEach(function(suit) {
  //   cards[suit] = [];
  //   console.log(cards)
  //
  //
  //   for (var i = 1; i <= 13; i += 1) {
  //
  //   .push(i);
  //   }
  //   console.log(cards[suit]);
  //   console.log(cards);
  // });

// cards.forEach(function(suit) {
//   console.log(suit);
// });
