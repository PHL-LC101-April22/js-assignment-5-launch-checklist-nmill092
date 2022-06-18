// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
  if (testInput == "") {
    return "Empty";
  } else if (!isNaN(testInput)) {
    return "Is a Number";
  } else {
    return "Not a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

  for (let i = 2; i < 6; i++) {
    if (validateInput(arguments[i]) == "Empty") {
      alert("Please make sure all fields are filled.");
      return;
    }
  }

  if (validateInput(pilot) != "Not a Number" || validateInput(copilot) != "Not a Number" || validateInput(fuelLevel) != "Is a Number" || validateInput(cargoLevel) != "Is a Number") {
    alert("Make sure to enter valid information for each field!");
    return;
  }

   
  let fuelReady = fuelLevel >= 10000; 
  let cargoReady = cargoLevel <= 10000;
  let readyForLaunch = fuelReady && cargoReady; 
 


  if(!readyForLaunch) { 
    list.querySelector("#launchStatus").innerText = "Shuttle not ready for launch"; 
    list.querySelector("#launchStatus").style.color = "red"; 
    list.querySelector("#faultyItems").style.visibility = "visible"; 
    list.querySelector("#pilotStatus").style.color = `Pilot ${pilot} is ready for launch`;
    list.querySelector("#copilotStatus").innerText = `Co-pilot ${copilot} is ready for launch`;
    list.querySelector("#fuelStatus").innerHTML = `Fuel level ${fuelReady ? "high enough" : "too low"} for launch`;
    list.querySelector("#cargoStatus").innerHTML = `Cargo mass ${cargoReady ? "low enough" : "too high"} for launch`;
  } else { 
    list.querySelector("#launchStatus").innerText = "Shuttle is ready for launch"; 
    list.querySelector("#launchStatus").style.color = "green"; 
  }
 


}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
  .then(response => response.json())
  return planetsReturned;
}

function pickPlanet(planets) {
    let randomPlanet = Math.floor(Math.random() * planets.length)
    return planets[randomPlanet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
module.exports.formSubmission = formSubmission;
