const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

// Vector para almacenar los usuarios
let userList = [];

// Función que obtiene de la API un nombre aleatorio,
// genera una cantidad de dinero aleatoria cuyo máximo es 1.000.000
// y añade al usuario con ambos datos
async function getRandomUser() {
  let res = await fetch('https://randomuser.me/api');
  let data = await res.json();
  let user = data.results[0];

  // TODO: Crea un objeto usuario (newUser) que tenga como atributos: name y money

  addData(newUser);
}

// TODO: Función que añade un nuevo usuario (objeto) al listado de usuarios (array)
function addData(obj) {
  userList.push(obj);
  updateDOM();
}

// TODO: Función que dobla el dinero de todos los usuarios existentes
function doubleMoney() {
  userList = userList.map(user => {
    return {
      name: user.name,
      money: user.money * 2
    };
  });
  
  // TIP: Puedes usar map()
}

// TODO: Función que ordena a los usuarios por la cantidad de dinero que tienen
function sortByRichest() {
  userList.sort((a, b) => b.money - a.money);
  // TIP: Puedes usar sort()
}

// TODO: Función que muestra únicamente a los usuarios millonarios (tienen más de 1.000.000)
function showMillionaires() {
  userList = userList.filter(user => user.money > 1000000);
  // TIP: Puedes usar filter()
}

// TODO: Función que calcula y muestra el dinero total de todos los usuarios
function calculateWealth() {
  const totalWealth = userList.reduce((total, user) => total + user.money, 0);
  console.log(formatMoney(totalWealth));
}

// TODO: Función que actualiza el DOM
function updateDOM() {
  main.innerHTML = '';
userList.forEach(user => {
  const element = document.createElement('div');
  element.innerHTML = `<strong>${user.name}</strong> ${formatMoney(user.money)}`;
  main.appendChild(element);
});
}

// Función que formatea un número a dinero
function formatMoney(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + '€';
}

// Obtenemos un usuario al iniciar la app
getRandomUser();

// TODO: Event listeners
addUserBtn.addEventListener('onclick', function(){
  getRandomUser()
  updateDOM()
});
doubleBtn.addEventListener('onclick', doubleMoney());
showMillionairesBtn.addEventListener('onclick', showMillionaires());
sortBtn.addEventListener('click', sortByRichest());
calculateWealthBtn.addEventListener('click', calculateWealth());