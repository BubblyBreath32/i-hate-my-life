player_1 = localStorage.getItem("player1_name");
player_2 = localStorage.getItem("player2_name");

player_1score = 0;
player_2score = 0;

document.getElementById("player1_name").innerHTML = player_1 + " -";
document.getElementById("player2_name").innerHTML = player_2 + " -";

document.getElementById("player1_score").innerHTML = player_1score;
document.getElementById("player2_score").innerHTML = player_2score;

document.getElementById("player_question").innerHTML = "Question Turn : " + player_1;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player_2;

function send() {
store = document.getElementById("word").value;
store_caps = store.toUpperCase();
ml1 = store_caps.charAt(1);
ml2 = store_caps.charAt(2);
ml3 = store_caps.charAt(4);

replace_ml1 = store_caps.replace(ml1," _ ");
replace_ml2 = replace_ml1.replace(ml2," _ ");
replace_ml3 = replace_ml2.replace(ml3," _ ");
console.log(replace_ml1);
console.log(replace_ml2);
console.log(replace_ml3);

drw = "<h4 id ='drwh4'>" + replace_ml3 + "</h4>";
drwi = "<input id = 'drwiid' type = 'text' placeholder = 'type ur answer here'> <br>";
drwcb = "<button type = 'button' class = 'btn btn-success' onclick = 'swap()'>check </button>";
drwall = drw + drwi + drwcb;
document.getElementById("output").innerHTML = drwall;

document.getElementById("word").value = "";
}

qt = "player_1";
at = "player_2";

function swap() {
document.getElementById("output").innerHTML = "";

if(qt == "player_1") {
    qt ="player_2";
    at = "player_1";
    document.getElementById("player_question").innerHTML = "Question Turn :"+ player_2;
    document.getElementById("player_answer").innerHTML = "Answer Turn :"+ player_1;
}
else {
    qt ="player_1";
    at = "player_2";
    document.getElementById("player_question").innerHTML = "Question Turn :"+ player_1;
    document.getElementById("player_answer").innerHTML = "Answer Turn :"+ player_2;
}

drwiidv = document.getElementById("drwiid").value;
drwiidvupc = drwiidv.toUpperCase();

console.log(drwiidv);
console.log(drwiidvupc);

if(store == drwiidvupc){
if(at == "player_2"){
    player_2score = player_2score + 1;
    document.getElementById("player_2score").innerHTML = player_2score;
}
else {
    player_1score = player_1score + 1;
    document.getElementById("player_1score").innerHTML = player_1score;
}
}
}


