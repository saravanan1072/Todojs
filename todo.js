function toggle() {
    let pop = document.getElementsByClassName('popup');
    pop[0].style.opacity = 1;
    let pop1 = document.getElementsByClassName('parent');
    pop1[0].style.backgroundColor = "rgb(46, 42, 42)";
    pop1[0].style.opacity = 0.4;
    const content = document.getElementById("content");
    content.style.opacity = 0.4;

}
function toggle1() {
    let pop = document.getElementsByClassName('popup');
    pop[0].style.opacity = 0;
    let pop1 = document.getElementsByClassName('parent');
    pop1[0].style.backgroundColor = "rgb(46, 42, 42)";
    pop1[0].style.opacity = 1;
    const content = document.getElementById("content");
    content.style.opacity = 1;
}
function toggleItem() {
    let pop = document.getElementsByClassName('popup1');
    pop[0].style.opacity = 1;
    let pop1 = document.getElementsByClassName('parent');
    pop1[0].style.backgroundColor = "rgb(46, 42, 42)";
    pop1[0].style.opacity = 0.4;
    const content = document.getElementById("content");
    content.style.opacity = 0.4;

}
function toggleItem1() {
    let pop = document.getElementsByClassName('popup1');
    pop[0].style.opacity = 0;
    let pop1 = document.getElementsByClassName('parent');
    pop1[0].style.backgroundColor = "rgb(46, 42, 42)";
    pop1[0].style.opacity = 1;
    const content = document.getElementById("content");
    content.style.opacity = 1;
}
const task = [];
function add() {

    const name1 = document.getElementById("input1").value;
    console.log(name1);
    console.log("working");
    let taskObj = {
        names: name1
    }
    task.push(taskObj);
    console.log(task);
    sample();
    // let element1 = document.getElementsByClassName('block');
    // console.log(element1);
    // //  element1[0].innerHTML=`${task[task.length - 1].name }<br>`;

    // for (let i = 0; i <= task.length; i++) {
    //     toggleItem1();
    //     element1[i].innerHTML = `${task[i].names} 
    //     <span class="markDown" >markDone</span>`;


    // }


}
function sample() {
    let element1 = document.getElementsByClassName('block');
    console.log(element1);
    for (let i = 0; i <= task.length; i++) {
        toggleItem1();
        element1[i].innerHTML = `${task[i].names} 
        <span class="markDown" >markDone</span>`;
    }
}

function one() {
    let data1 = document.getElementsByClassName('one');
    data1[0].innerText = task[0].names;
    data1[0].style.textDecoration = "line-through";
    data1[0].style.color = "red";
    console.log(data1)
}

function two() {
    let data2 = document.getElementsByClassName('two');
    console.log(data2)
    data2[0].innerText = task[1].names;
    data2[0].style.textDecoration = "line-through";
    data2[0].style.color = "red";

}

function three() {
    let data3 = document.getElementsByClassName('three');
    console.log(data3)
    data3[0].style.textDecoration = "line-through";
    data3[0].style.color = "red";
    data3[0].innerText = task[2].names;
}

function fouth() {
    let data4 = document.getElementsByClassName('fouth');
    console.log(data4);
    data4[0].style.textDecoration = "line-through";
    data4[0].style.color = "red";
    data4[0].innerText = task[3].names;
}

function five() {
    let data5 = document.getElementsByClassName('five');
    console.log(data5);
    data5[0].style.textDecoration = "line-through";
    data5[0].style.color = "red";
    data5[0].innerText = task[4].names;

}

const taskList = [];

const Add = () => {
    const name = document.getElementById("input").value;
    console.log(name);
    console.log(taskList.length);
    if (taskList.length === 0) {
        const exstingElement = document.getElementById("content");
        exstingElement.innerText = "";
    }

    const tempObj = {
        id: Date.now(),
        taskName: name,
    }
    taskList.push(tempObj);
    console.log(taskList);
    addTaskOnScreen();
    toggle1();
}

const addTaskOnScreen = () => {
    const element = document.createElement("div");
    element.setAttribute("class", "child1");
    const exstingElement = document.getElementById("content");
    exstingElement.appendChild(element);
    element.innerHTML = `  <a href="new.html"> ${taskList[taskList.length - 1].taskName}</a> <br> <hr> <br> 
    <div class="child2">
        <div class="block one" onclick="one()"></div>
        <div class="block two" onclick="two()"></div>
        <div class="block three" onclick="three()"></div>
        <div class="block fouth" onclick="fouth()"></div>
        <div class="block five" onclick="five()"></div>
        </div> 
    <i id="trash" onclick="trash()" class="fa-solid fa-trash"></i> 
     <i  id="click" onclick="toggleItem()" class="fa-solid fa-circle-plus"></i> `;
}
console.log(taskList);
function trash() {
    const element = document.getElementsByClassName("child1");
    console.log(element);
    const exstingElement = document.getElementById("content");
    exstingElement.removeChild(element[0]);
    console.log(exstingElement);
    console.log(taskList);
    sample();
}

