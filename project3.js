const getcolor = () =>{
//hex code
const randomnum =Math.floor( Math.random()* 16777215);
console.log(randomnum);
const random = "#"+randomnum.toString(16);
document.body.style.backgroundColor = random;
document.getElementById("color-code").innerText= random;

navigator.clipboard.writeText(random)
}
//event call
document.getElementById("btn").addEventListener{
    "click",
    getcolor
}

//intial call
getcolor();