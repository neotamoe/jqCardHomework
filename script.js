var deck = [];

console.log('script sourced');//checking if js file is sourced

$(document).ready(function(){
  console.log('jquery sourced');  //checking if jquery is sourced
  $('#addCardButton').on ('click', function(){
    console.log('clicked button');  //checking button click
    //create new card using cardyCard constructor (below)
    var newCard = new cardyCard( ($('#cardValue').val()), ($('#cardSuit').val()) );
    console.log(newCard);
    deck.push(newCard);
    console.log('In our deck:', deck );
    //loop through deck and display each card in DOM
    $('#cardDisplay').empty();
    for (var i = 0; i < deck.length; i++) {
      $('#cardDisplay').append('<p>' + deck[i].number + ' of ' + deck[i].suit);
    }  //end for loop
  });  //end function
    //card constructor
    function cardyCard (myNumber, mySuit) {
      this.number=myNumber;
      this.suit=mySuit;
    }  //end cardyCard (card constructor)

});  //end document ready
