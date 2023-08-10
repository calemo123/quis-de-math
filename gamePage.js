player1Name = localStorage.getItem("key1");
player2Name = localStorage.getItem("key2");

player1Score = 0;
player2Score = 0;

document.getElementById("player1_name").innerHTML = player1Name + " : ";
document.getElementById("player2_name").innerHTML = player2Name + " : ";

document.getElementById("player1_score").innerHTML = player1Score  ;
document.getElementById("player2_score").innerHTML = player2Score  ;

document.getElementById("player_question").innerHTML = "turno da pegunta - " +
player1Name ;

document.getElementById("player_answer").innerHTML = "turno da resposta - " +
player2Name ;

function enviar()
{
number1  = document.getElementById("input1").value;
number2  = document.getElementById("input2").value;



charAt1 = word.charAt(1);
    console.log(charAt1);

    lenghtDivide2 = Math.floor(word.lenght/2);
    charAt2 = word.charAt(lenghtDivide2)
    console.log(charAt2);

    lenghtMinus1 = word.lenght - 1;
 charAt3 = word.charAt(lenghtMinus1);
 console.log(charAt3);

 removeCharAT1 = word.replace(charAt1,"_");
 removeCharAT2 = removeCharAT1.replace(charAt2,"_");
 removeCharAT3 = removeCharAT2.replace(charAt3,"_");
 console.log(removeCharAT3);

question_word = "<h4 id='wordDisplay'> P. "+removeCharAT3+"</h4>";
inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
checkButton = "<br><br><button class='btn btn-info' onclick='chek()'>Checar</button>";
row = question_word + inputBox + checkButton ;
document.getElementById("output").innerHTML = row; document.getElementById("word").value = "";
}
questionTurn = "player1";
answerTurn = "player2";

function chek()
{
    getAnswer = document.getElementById("inputCheckBox").value;
    answer = getAnswer.toLowerCase();
    console.log("resposta em caixa - " + answer);
    if(answer == word)
    {
       if(answerTurn == "player1")
       {
        player1Score = player1Score +1;
        document.getElementById("player1_score").innerHTML = player1Score;
       }
       else
       {
        player2Score = player1Score +1;
        document.getElementById("player2_score").innerHTML = player2Score;
       }
    }
       if(questionTurn == "player1")
       {
       questionTurn = "player2";
        document.getElementById("player_question").innerHTML = "turno de pergunta- "+player2Name;
       }
       else
       {
        questionTurn = "player1"
        document.getElementById("player_question").innerHTML = "Turno da Pergunta - " + player1Name
       }
       if(answerTurn == "player1")
       {
       answerTurn = "player2"
       document.getElementById("player_answer").innerHTML = "turno de resposta - " + player2Name ;
       }
       else
       {
       answerTurn = "player1"
       document.getElementById("player_answer").innerHTML = "turno de resposta - " + player1Name ;
       }

       document.getElementById("output").innerHTML = "";
    }