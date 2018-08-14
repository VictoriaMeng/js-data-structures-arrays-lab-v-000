// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(driver) {
  drivers.push(driver);
}
function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}
function destructivelyRemoveLastDriver() {
  drivers.pop();
}
function destructivelyRemoveFirstDriver() {
  drivers.shift();
}
function appendDriver(name) {
  return [...drivers, name];
}
