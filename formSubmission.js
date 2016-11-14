

var firstName = "";
//is it necessary to make these void initially?????
var userColor = { text: "", color: "" };
var animalText = "";

//all click events are in this document.ready function:
$("document").ready(function () {



    //on click, get color text and color for css

    $("#r").on("click", function () {

        userColor.text = this.name;
        userColor.color = "lightcoral";
    })

    $("#b").on("click", function () {
        userColor.text = this.name;

        userColor.color = "lightblue";
    })

    $("#g").on("click", function () {
        userColor.text = this.name;
        userColor.color = "lightgreen";
    })

    //method that gets name of animal selected

    $("#horse").click(function () {
        animalText = this.name;
    });

    $("#bull").click(function () {
        animalText = this.name;
    });

    $("#chicken").click(function () {
        animalText = this.name;
    });

    $("#goat").click(function () {
        animalText = this.name;
    });

    $("#submit").on("click", function (evt) {

        document.getElementById("p1").style.borderStyle = "solid";

        //set background color of #p1
        $("#p1").css("background-color", userColor.color);

        //gets name from input tag
        //can you put this at the top?????????
        firstName = $("#nameTextBox").val();

        if (firstName == "" || userColor.text == "" || animalText == "") {
            document.getElementById("p1").style.background = "#BA55D3";
            document.getElementById("p1").innerHTML = "Please provide answers for all three questions";
        }
        else {

            //text of p1
            $("#p1").text(firstName + ", you're favorite color is " + userColor.text +
            " and your favorite animal is " + animalText + "!");

            //use the following function if you use the submit button:
           
        }
        evt.preventDefault();
    })
})
