// Preset values
const main = document.querySelector("main");
const track = document.getElementById("track");
const FROGS = 3;
const racers = [];

// Exercise 1.1 - Set up the track
for (let count = 1; count <= FROGS; count++) {
  const lane = document.createElement("li"); // create a lane (<li>)
  lane.id = `lane-${count}`; // give lane an id
  const number = document.createElement("span"); // create a <span>
  number.innerText = count; // add the lane number to the span
  lane.appendChild(number); // append the span to the lane
  track.appendChild(lane); // append the lane to the track
}

// Exercise 1.2 - Call in the frogs!
// Exercise 1.5 - Track progress!
for (let frogracer = 0; frogracer < FROGS; frogracer++) {
  frogstable[frogracer].lane = `frog-${frogracer + 1}`;
  frogstable[frogracer].progress = 0;
  racers.push(frogstable[frogracer]);
}
console.log(racers);

// Exercise 1.3 - Line em' up!
// Exercise 1.4 - Add Styling!
racers.forEach(function (racer, id) {
  const newFrog = document.createElement("span");
  newFrog.id = racer.lane;
  newFrog.style.background = racer.color;
  newFrog.innerText = `${racer.number}`;
  document.getElementById(`lane-${id + 1}`).appendChild(newFrog);
  const frogName = document.createElement("span");
  frogName.classList.add("frog-name");
  document.getElementById(`lane-${id + 1}`).appendChild(frogName);
  frogName.innerText = `${racer.name}`;
  newFrog.classList.add("frog");
});

// Exercise 1.6 - Make 'em hop!
function racingFrog(racer) {
  const trackWidth = track.offsetWidth;
  console.log("racingFrog() ", racer);
  const frog = document.getElementById(racer.lane);
  console.log(frog);
  let hop = setInterval(function () {
    const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
    racer.progress += hopLength;
    frog.style.left = `${racer.progress}%`;
    console.log(racer);
    if (racer.progress >= 100) {
      clearInterval(hop);
      console.log(`${racer.name} has arrived!`);
    }
  }, Math.random() * 3000);
}

racers.forEach(racingFrog);
