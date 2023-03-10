const today = new Date();
const thisYear = today.getFullYear();
const myFooter = document.querySelector('footer');
const copyright = document.createElement('p');

copyright.innerHTML = "Jovany Cortes Marure " + thisYear;
myFooter.appendChild(copyright);

const skills = ["Javascript", "HTML", "CSS", "Forklift Certified", "micosoft Word", "micosoft Powerpoint", "micosoft Excel"];
const skillSection = document.getElementById('skill');
console.log(skillSection);
const skillsList = skillSection.querySelector('ul');


for(var i = 0; i < skills.length; i++){
    var skill = document.createElement('li');    
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}