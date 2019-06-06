window.addEventListener('load', () => {

  let dice = document.querySelector("#dice");
  let audio = document.querySelector('#audio');
  let note1 = document.querySelector('#note1');
  let note2 = document.querySelector('#note2');
  let msg = document.querySelector('#message');
  let player1 = document.querySelector(".result1");
  let player2 = document.querySelector(".result2");
  let imageArray = ['img/1.png', 'img/2.png', ' img/3.png', 'img/4.png', 'img/5.png', 'img/6.png'];
  let turn = 1;
  let resultArray = [0];
  let resultArray1 = [0];
  let resultArray2 = [0];
  let ImageInfo;
  let chance = 0;
  let gameLife = 0;
  let sum;


  // On click event main() function triggered. 
  dice.addEventListener('click', main);

  function main() {

    // Sound , and roll function for dice. 
    sound();

    dice.src = ImageInfo;

    // Game life and 
    chance++;
    gameLife++;


    if (gameLife <= 18) {

      resultArray.push(number);

      //If turn 1 that is first player, show his result, push values to playa1 function. 

      if (turn == 1) {

        let li = document.createElement('LI');

        li.appendChild(document.createTextNode(number));
        note1.appendChild(li);

        if (chance >= 3) {
          playa1(resultArray);
          chance = 0;
          resultArray = [0];
        }
        //If turn 2 that is second player, show his result, push values to playa2 function. 
      } else if (turn == 2) {


        let li = document.createElement('LI');
        li.appendChild(document.createTextNode(number));
        note2.appendChild(li);

        if (chance >= 3) {
          playa2(resultArray);
          chance = 0;
          resultArray = [0];
        }
      }

    } else {

      // Checking final results

      let sum1 = resultArray1.reduce(getSum);
      let sum2 = resultArray2.reduce(getSum);

      if (sum1 > sum2) {
        msg.className = ' col-2 md-4 alert alert-info';
        msg.innerHTML = 'First player is victorious! ';

      } else {
        msg.className = 'col-2 md-4 alert alert-info';
        msg.innerHTML = 'Second player is victorious! ';
      }
    }
  }
  //playa1 Function result 

  function playa1(resultArray) {

    sum = resultArray.reduce(getSum);
    resultArray1.push(sum);
    delete resultArray1[0];
    player1.textContent = resultArray1.join(" ");
    return turn = 2;

  }
  // playa 2 Function result 

  function playa2(resultArray) {

    sum = resultArray.reduce(getSum);
    resultArray2.push(sum);
    delete resultArray2[0];
   
    player2.textContent = resultArray2.join(" ");
    return turn = 1;

  }

  //Function for sound and trigger roll()- return number

  function sound() {

    audio.play();
    roll();

  }
  //Utilty function for total sum 
  function getSum(total, num) {
    return total + num;
  }


  function roll() {
    // Function trigger Math function and swithc images in array and return value number
    numberMath();
    switch (number) {
      case 1:
        ImageInfo = imageArray[0];
        break;
      case 2:
        ImageInfo = imageArray[1];
        break;
      case 3:
        ImageInfo = imageArray[2];
        break;
      case 4:
        ImageInfo = imageArray[3];
        break;
      case 5:
        ImageInfo = imageArray[4];
        break;
      case 6:
        ImageInfo = imageArray[5];
        break;
    }
    return ImageInfo;

  }
  //Math random for 6 cases for dice 

  function numberMath() {
    number = Math.floor(Math.random() * 6) + 1;
    return number;
  }



});