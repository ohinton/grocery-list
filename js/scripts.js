// $(document).ready(function() {
//   $("form#grocery").submit(function(event) {
//
//     var item1 = $("input#item1").val();
//     var item2 = $("input#item2").val();
//     var item3 = $("input#item3").val();
//     var item4 = $("input#item4").val();
//     var item5 = $("input#item5").val();
//
//     var itemsExist = true;
//     var indexNum = 0;
//     var unorderedList = document.getElementById('itemList');
//     var list = [item1, item2, item3, item4, item5];
//     list.sort();
//     var myElement;
//
//     function alphabetize(){
//
//        for (i = 0; i < list.length; i++ ) {
//            // Create the <LI> element
//            myElement = document.createElement("LI");
//            // Add the letter between the <LI> tags
//            myElement.innerHTML = list[indexNum++];
//            // Append the <LI> to the bottom of the <UL> element
//            unorderedList.appendChild(myElement);
//        }
//     }
//
//     if (itemsExist){
//        alphabetize();
//     } else {
//        alert("error!");
//     }
//    event.preventDefault();
//   });
// });

$(document).ready(function() {
  $("form#grocery").submit(function(event) {

    var items = ["item1", "item2", "item3", "item4", "item5"];
    var userInput = [];

    items.forEach(function(item){
      userInput.push($("input#" + item).val());
    });

    userInput.sort();

    for(i = 0; i < userInput.length; i++){
        userInput[i] = userInput[i].toUpperCase();
    }

    var itemsExist = true;
    var indexNum = 0;
    var unorderedList = document.getElementById('itemList');

    var myElement;

    function alphabetize(){
       for (i = 0; i < userInput.length; i++ ) {
           // Create the <LI> element
           myElement = document.createElement("LI");
           // Add the letter between the <LI> tags
           myElement.innerHTML = userInput[indexNum++];
           // Append the <LI> to the bottom of the <UL> element
           unorderedList.appendChild(myElement);
       }
    }

    if (itemsExist){
       alphabetize();
    } else {
       alert("error!");
    }

    $("#result").show();
    $("#main").hide();
   event.preventDefault();
  });
});
