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

const messageForm = document.querySelector('form[name="leave_message"]')
console.log(messageForm);

messageForm.addEventListener('submit', event => {
    event.preventDefault();
    const user_name = event.target.userName.value;
    const user_Email = event.target.userEmail.value;
    const user_Message = event.target.usersMessage.value;

    console.log(user_name);
    console.log(user_Email);
    console.log(user_Message);
    
    const messageSection = document.getElementById('message');
    const messageLis = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    const a = document.createElement('a')
    const msge = document.createElement('span')
    
    a.href = "mailto:" + user_Email;
    a.innerHTML = user_name;
    msge.innerText = " wrote: " + user_Message;
    newMessage.appendChild(a);
    newMessage.appendChild(msge);

    const removeButton = document.createElement('button');
    removeButton.innerHTML = "Remove";
    removeButton.type = "button";

    removeButton.addEventListener('click', event => {
        const entry = event.target.parentNode;
        entry.remove();
    })
    newMessage.appendChild(removeButton);
    messageLis.appendChild(newMessage);
    console.log(messageLis);

    messageForm.reset();
});



fetch('https://api.github.com/users/JovaCov/repos')
    .then(function (response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
        const projectSection = document.getElementById('project');
        const projectList = projectSection.querySelector('ul');
    
        for (var i =0; i < response.length; i++){
            var project = document.createElement('ul');
            project.innerHTML = response[i].name;
            projectList.appendChild(project);
        }
    })
    .catch(e => {
        console.log(e);
    })