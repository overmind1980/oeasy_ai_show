let intelligence = 0;
let stamina = 0;
let charm = 0;

function study() {
  intelligence += 5;
  updateCharacterInfo();
}

function exercise() {
  stamina += 5;
  updateCharacterInfo();
}

function socialize() {
  charm += 5;
  updateCharacterInfo();
}

function updateCharacterInfo() {
  document.getElementById('intelligence').textContent = intelligence;
  document.getElementById('stamina').textContent = stamina;
  document.getElementById('charm').textContent = charm;
}
