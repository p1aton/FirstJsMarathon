function $getElById(id) {
  return document.getElementById(id);
}

const $btn = $getElById('btn-kick');

const character = {
  name: 'Picachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: $getElById('health-character'),
  elProgressbar: $getElById('progressbar-character'),
  changeHP: changeHP,
  renderHP: renderHP,
  renderHPLife: renderHPLife,
  renderProgressbarHP: renderProgressbarHP,
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: $getElById('health-enemy'),
  elProgressbar: $getElById('progressbar-enemy'),
  changeHP: changeHP,
  renderHP: renderHP,
  renderHPLife: renderHPLife,
  renderProgressbarHP: renderProgressbarHP,
}

$btn.addEventListener('click', function () {
  console.log('Kick');
  character.changeHP(random(20))
  enemy.changeHP(random(20))
})

function init() {
  console.log('Start Game!');
  character.renderHP();
  enemy.renderHP()
}

function renderHP() {
  // console.log(this)
  this.renderHPLife();
  this.renderProgressbarHP();
}

function renderHPLife(person) {
  this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressbarHP(person) {
  this.elProgressbar.style.width = this.damageHP + '%';
}

function changeHP(count, person) {
  this.damageHP -= count;

  const log = this === enemy ? generateLog(this, character, count, this.elHP.innerText) : generateLog(this, enemy, count, this.elHP.innerText);
  console.log(log);

  const $p = document.createElement('p')

  $p.innerText = log

  const $logs = document.querySelector('.logs_text');

  $logs.appendChild($p);


  if (this.damageHP <= 0) {
    this.damageHP = 0;
    alert('Бедный ' + this.name + ' проиграл бой!')
    $btn.disabled = true;
  }

  this.renderHP()
}

function random(num) {
  return Math.ceil(Math.random() * num)
}

function generateLog(firstPerson, secondPerson, damage, life) {

  const logs = [
    `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. ${damage}, ${life}`,
    `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. ${damage}, ${life}`,
    `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. ${damage}, ${life}`,
    `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. ${damage}, ${life}`,
    `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. ${damage}, ${life}`,
    `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. ${damage}, ${life}`,
    `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. ${damage}, ${life}`,
    `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника. ${damage}, ${life}`,
    `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. ${damage}, ${life}`,
    `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. ${damage}, ${life}`
]; 

return logs[random(logs.length) - 1];

}





init();
