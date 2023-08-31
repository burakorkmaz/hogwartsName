var firstNames = ["Harry", "Hermione", "Ron", "Lord", "Draco", "Albus", "Severus", "Rubeus",
"Luna", "Dobby","Sirius", "Bellatrix", "Neville","Cedric", "Remus", "Ginny", "Cho", "Lily", "James","Fred", "George" ]

var lastNames = ["Potter", "Granger", "Voldemort","Malfoy", "Dumbledore", "Snape", "Weasley", 
"Hagrid", "McGonagall", "Black", "Lestrange", "Lupin", "Myrtle"]

var spells = ["Accio", "Lumos", "Muffliato", "Confundo", "Stupefy",
"Wingardium Leviosa", "Expecto Patronum", "Riddikulus","Obliviate", "Protego", "Expelliarmus", "Imperio"]

var alphabet = "UAILPRQWRFBSDKJBFALDJWPMAFKLSE";

var firstName = firstNames[Math.floor(Math.random()* firstNames.length )];
var spell = spells[Math.floor(Math.random() * spells.length)];
var lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
var hogwartsName =  firstName + " " + spell + " " + lastName;

$("button").on("click", function(){
    $(this).fadeOut();
    $(this).remove();
    $("h1").after("<h2 class = 'wordsToggle'></h2>")
    
    for (let i = 0; i < 30;i++ ){
        setTimeout(function(){
            var randText = "";
            for(var j = 0; j < 12; j++){
                randText += alphabet[Math.floor(Math.random() * alphabet.length)];
            }
            $("h2").text(randText);
        }, 70*i);
    }

    setTimeout(function(){
        $("h2").hide();
        $("h2").fadeIn(1000);
        $("h2").text(hogwartsName);
    }, 70*30);

}); 