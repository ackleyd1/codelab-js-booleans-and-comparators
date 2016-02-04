var game = prompt("What is your favorite Super Smash Brothers Game")
if (game === "Melee") {
    var character = prompt("What is you favorite character in Super Smash Brothers Melee");
    if (character === "fox") {
        alert('Good boy')
    }
    else {
        alert('You should probably switch to fox, ' + character + " isn't tournament viable")
    }
}
else {
    alert('You should play Super Smash Brothers Melee')
}
