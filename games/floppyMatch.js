/*
@title: floppyMatch
@author: GBan22
*/

const p1 = "a";
const p2 = "b";
const p3 = "c";
const s1 = "d";
const s2 = "e";
const dot = "l";
const s3 = "f";
const pointer = "p";
const lito = ["a", "b", "c"]
const litotwo = ["d", "e", "f"]
const checkForFull = ["a","b","c","d","e","f"]
let onesTheyChose = []
let ptsNeeded = 10
let chosen = []
let timerStart = 0
let counter = 0
let chosenimes = 0
let messUps = 0
let totalMess = 0
let wrongs =0
let ind = 1
const melody = tune`
104.16666666666667: b5^104.16666666666667,
104.16666666666667: b4/104.16666666666667 + b5-104.16666666666667,
104.16666666666667,
104.16666666666667: b4/104.16666666666667,
104.16666666666667: b5-104.16666666666667,
104.16666666666667: b4/104.16666666666667 + b5^104.16666666666667,
104.16666666666667: b5-104.16666666666667,
104.16666666666667: b4/104.16666666666667,
104.16666666666667: g4/104.16666666666667,
104.16666666666667: a4/104.16666666666667 + b5-104.16666666666667,
104.16666666666667: c5/104.16666666666667 + b5^104.16666666666667,
104.16666666666667: d5/104.16666666666667 + b5-104.16666666666667,
104.16666666666667: e5/104.16666666666667,
104.16666666666667: d5/104.16666666666667,
104.16666666666667: b4/104.16666666666667 + b5-104.16666666666667,
104.16666666666667: a4/104.16666666666667 + b5^104.16666666666667,
104.16666666666667: g4/104.16666666666667 + b5-104.16666666666667,
104.16666666666667: f4/104.16666666666667,
104.16666666666667: f4/104.16666666666667,
104.16666666666667: f4/104.16666666666667 + b5-104.16666666666667,
104.16666666666667: f4/104.16666666666667 + b5^104.16666666666667,
104.16666666666667: e4/104.16666666666667 + b5-104.16666666666667,
104.16666666666667: d4/104.16666666666667,
104.16666666666667: c4/104.16666666666667,
104.16666666666667: c4/104.16666666666667 + b5-104.16666666666667,
104.16666666666667: d4/104.16666666666667 + b5^104.16666666666667,
104.16666666666667: d4/104.16666666666667 + b5-104.16666666666667,
104.16666666666667: f4/104.16666666666667,
104.16666666666667: g4/104.16666666666667,
104.16666666666667: b4/104.16666666666667 + b5-104.16666666666667,
104.16666666666667: c5/104.16666666666667 + b5^104.16666666666667,
104.16666666666667: d5/104.16666666666667 + b5-104.16666666666667`
const right = tune`
330,
30: f4-30,
30: f4~30 + g4-30,
30: g4-30 + f4~30,
30: a4-30 + g4~30,
30: b4-30 + a4~30,
30: c5-30 + b4~30,
30: c5-30 + b4~30,
30: d5~30 + b5/30 + a5/30,
30: d5~30 + b5/30 + a5/30,
30: d5~30 + b5/30 + a5/30,
30: d5~30 + b5/30 + a5/30,
300`
const wrong = tune`
30,
30: c4~30 + f5~30,
30: c4~30,
30: c4~30 + d5~30,
30: c4~30,
30: c4~30 + b4~30,
30: c4~30,
30: c4~30,
30: c4~30 + a4~30,
30,
30: f4~30,
60,
30: e4~30,
30,
30: c4~30,
480`
const choose = tune`
390,
30: c5-30,
30: c5-30,
30: c5-30,
30: c5-30,
30: c5-30,
420`
const lose = tune`
60,
30: d5/30 + c5/30,
30: c5/30 + a4/30 + b4/30 + g4/30 + f4/30,
30: f4/30 + e4/30,
30: e4/30 + d4/30,
30: d4/30,
30: d4/30 + e4/30 + f4/30,
30: d4/30 + f4/30 + f5/30,
30: d4/30 + e4/30 + d5/30 + c5/30,
30: d4/30 + c4/30 + e4/30 + c5/30 + b4/30,
30: c4/30 + e4/30 + b4/30 + a4/30,
30: c4/30 + e4/30,
30: c4/30 + d4/30 + c5/30,
30: c4/30 + d4/30,
30: c4/30 + d4/30 + b4/30 + a5/30 + g5/30,
30: c4/30 + d4/30 + b4/30,
30: c4/30 + e4/30 + c5/30,
30: c4/30 + d4/30 + c5/30 + a5/30,
30: e4/30 + d5/30 + e5/30 + a5/30,
30: a5/30,
30: d4/30 + a5/30,
30: a5/30,
30: f4/30,
30,
30: d4/30,
30,
30: f4/30,
30: f4/30,
30,
30: d5/30,
30
`
const okay = tune`
292.20779220779224,
48.701298701298704: a5~48.701298701298704 + g5~48.701298701298704,
48.701298701298704: a5~48.701298701298704 + g5~48.701298701298704,
48.701298701298704: g5~48.701298701298704 + a5~48.701298701298704,
48.701298701298704: g5~48.701298701298704 + a5~48.701298701298704,
48.701298701298704: g5~48.701298701298704 + a5~48.701298701298704,
48.701298701298704: g5~48.701298701298704 + a5~48.701298701298704,
48.701298701298704: g5~48.701298701298704 + a5~48.701298701298704,
48.701298701298704: g5~48.701298701298704 + a5~48.701298701298704,
48.701298701298704: g5~48.701298701298704 + a5~48.701298701298704,
48.701298701298704: g5~48.701298701298704 + a5~48.701298701298704,
48.701298701298704: g5~48.701298701298704 + a5~48.701298701298704,
48.701298701298704: a5~48.701298701298704 + g5~48.701298701298704,
48.701298701298704: a5~48.701298701298704 + g5~48.701298701298704,
48.701298701298704: a5~48.701298701298704 + g5~48.701298701298704,
48.701298701298704: a5~48.701298701298704 + g5~48.701298701298704,
48.701298701298704: a5~48.701298701298704 + g5~48.701298701298704,
48.701298701298704: a5~48.701298701298704 + g5~48.701298701298704,
48.701298701298704: a5~48.701298701298704 + g5~48.701298701298704,
48.701298701298704: g5~48.701298701298704 + a5~48.701298701298704,
48.701298701298704: g5~48.701298701298704 + a5~48.701298701298704,
292.20779220779224`;
setLegend(
  [p1, bitmap`
................
................
................
................
................
................
................
0000000000000000
0LLLLLLLLLLLLLL0
0LLLL2LLLL2LLLL0
0LLLL22LL22LLLL0
0LLLL22LL22LLLL0
0LLLL222222LLLL0
0LLLL222222LLLL0
0LLLL222222LLLL0
0000000000000000`],
  [p2, bitmap`
................
................
................
................
................
................
................
0LLLLLLLLLLLLLL0
0LLLLLLLLLLLLLL0
0000000000000000
0000000000000000
0L222222222222L0
0L222222222222L0
0L222222222222L0
0L222222222222L0
0000000000000000`],
  [p3, bitmap`
................
................
................
................
................
................
................
0000000000000000
0LLLL222222LLLL0
0LLLL222222LLLL0
0LLLL222222LLLL0
0LLLL222222LLLL0
0LLLL222222LLLL0
0LLLL222222LLLL0
0LLLL222222LLLL0
0000000000000000`],
  [s1, bitmap`
0000000000000000
0LL0LLLL22L20LL0
0LL0LLLL22L20LL0
0LL0LLLL22L20LL0
00L0LLLL22L20L00
0LL0000000000LL0
0LLLLLLLLLLLLLL0
................
................
................
................
................
................
................
................
................`],
  [s2, bitmap`
0000000000000000
0LL0LLLL11L10LL0
0LL0LLLL11L10LL0
0LL0LLLL11L10LL0
00L0LLLL11L10L00
0LL0000000000LL0
0LLLLLLLLLLLLLL0
................
................
................
................
................
................
................
................
................`],
  [s3, bitmap`
0000000000000000
0LL0LLLL77L70LL0
0LL0LLLL77L70LL0
0LL0LLLL77L70LL0
00L0LLLL77L70L00
0LL0000000000LL0
0LLLLLLLLLLLLLL0
................
................
................
................
................
................
................
................
................`],
  [pointer, bitmap`
.......3........
......333.......
......333.......
......333.......
......333.......
.....33333......
.....33333......
.....33333......
....3333333.....
....3333333.....
....3333333.....
...333333333....
...333333333....
..33333333333...
.3333333333333..
.3333333333333..`],
  [dot, bitmap`
...9999999999...
..999009999999..
.99990099999999.
9999900999999999
9999900999999999
9999900999999999
9999900999999999
9999900999999999
9999900999999999
9999900999999999
9999900000009999
9999900000009999
9999900999009999
.99990099900999.
..999009990099..
...9999999999...`]
  
);

let score = 0
addText(score.toString() + " " + wrongs.toString() + " " + counter.toString(), {x:12, y:13, color: [0,0,255]})
setSolids([]);

let level = 0;
const levels = [
  map`
......
......
abcdef
.p....
......
......`,
  map`
........l
.........
.........
.........
.........
.........`
];

setMap(levels[level]);
const ypos = getFirst(pointer).y


timerStart = setInterval(() => {
    addText(score.toString() + " " + wrongs.toString() + " " + counter.toString(), {x:12, y:13, color: [0,0,255]})
    counter += 1;
}, 1000);


onInput("d", () => {
  try {
    getFirst(pointer).x += 1
    ind += 1
    if (ind > 5) {
      ind = 5
    }
    console.log(ind)
  } catch (error) {
    console.log("ignored")

  }
  
});

onInput("j", () => {
  //messUps += 1 cant do this here because idf want to restart the game will keep the reset cioutner and iwkll have no way of restting it unless through resetting everything if j lkey resets evberything cmpletely have tio reset evberything or nothing since i dotn want ot resrt othermessup variable when this hits bnt nmight have yto
  setMap(levels[level])
  messUps = 0
  chosenimes = 0;
  chosen = []
  totalMess = 0;
  clearText()
  clearInterval(timerStart)
  timerStart = setInterval(() => {
    counter += 1;
}, 1000);
  counter = 0
  score = 0
  wrongs = 0
  doStuff()
});

onInput("k", () => {
  chosenimes = 0;
  chosen = [];
  playTune(okay);
});

onInput("a", () => {
  try {
    getFirst(pointer).x -= 1
    ind -= 1 
    if (ind < 0) {
      ind = 0
    }
    console.log(ind)

  } catch (error) {
    console.log("ignored a")

  }
  

});

onInput("i", () => {

  if (chosenimes < 2) {
    chosen.push(checkForFull[ind])
    
    chosenimes += 1
    if (chosenimes == 2) {
      console.log(chosen)
      console.log(onesTheyChose)
      if (chosen[0] === onesTheyChose[0] && chosen[1] === onesTheyChose[1]) {
        playTune(right)
        score +=1
        if (score >= ptsNeeded) {
          clearInterval(timerStart)
          setMap(levels[1])
          clearText()
          
          addText("You got to " + ptsNeeded.toString() + "!", {x:1, y:3, color: [0,0,255]})
          addText("Time it took: " + counter.toString(), {x:1, y:6, color: [0,0,255]})
          addText("Messups: " + totalMess.toString(), {x:1, y:9, color: [0,0,255]})
          addText("Resets: " + messUps.toString(), {x:1, y:12, color: [0,0,255]})
      
        } else {
          doStuff()
        }
        
      }
      else {
        console.log("rip")

        wrongs += 1
        totalMess += 1
        if (wrongs == 3) {
          messUps += 1
          wrongs = 0
          score = 0
          playTune(lose)
          clearText()
          addText(score.toString() + " " + wrongs.toString() + " " + counter.toString(), {x:12, y:13, color: [0,0,255]})

          doStuff()
        }
        else {
          playTune(wrong)
          doStuff()
          
          
        }


        
        
      }
    }
    
  }
});

function doStuff() {

clearTile(3,0)
chosenimes = 0
onesTheyChose = []
chosen = []
var rand = Math.random();
var final = rand * lito.length;
var total = Math.floor(final);

addSprite(3, 0, lito[total])
onesTheyChose.push(lito[total])

var ran = Math.random();
var fina = ran * litotwo.length;
var tota = Math.floor(fina);

addSprite(3, 0, litotwo[tota])
onesTheyChose.push(litotwo[tota])

}

doStuff()


afterInput(() => {

  
  addText(score.toString() + " " + wrongs.toString() + " " + counter.toString(), {x:12, y:13, color: [0,0,255]})


  
  
});
