let radgender=document.querySelectorAll("input[name='gender']")
let fiz_par=document.querySelectorAll("input[name='fiz_par']")
let fiz_activity=document.querySelectorAll("input[name='fiz_activity']")
let submit=document.querySelector(".submit")
let reset=document.querySelector(".reset")
let gender="male"
let coefficient=1.2
let result=0
radgender.forEach(element=>element.addEventListener('change',function(){
   gender=this.value
   console.log(gender)
}))
fiz_activity.forEach(element => element.addEventListener('change',function(){
	switch(this.value){
		case "min":coefficient=1.2;break;
		case "low":coefficient=1.375;break;
        case "mid":coefficient=1.55;break;
        case "high":coefficient=1.725;break;
        case "hard":coefficient=1.9;break;
	}
	console.log(coefficient)
}))

fiz_par.forEach(element=>element.addEventListener('input',function(){
	let check=0
	fiz_par.forEach(element=>{
		if (element.value.length>0){
			check++
		}
	})
console.log(check)
if (check==3){
	submit.disabled=false
}
else {
	submit.disabled=true
}

if (check>0){
	reset.disabled=false
}
else{
	reset.disabled=true
}
}))

reset.addEventListener('click',function(){
	fiz_par.forEach(element=>element.value='')
	submit.disabled=true
	reset.disabled=true
	document.getElementById("male").checked=true
   document.getElementById("min").checked=true
})

submit.addEventListener('click',function(){
	let age=document.getElementById("age").value
	let height=document.getElementById("height").value
	let weight=document.getElementById("weight").value
if (gender=="male") {
	result=(weight*10+height*6.25-age*5+5)*coefficient
}
else {
	result=(weight*10+height*6.25-age*5-161)*coefficient
}
document.querySelector(".result").style.visibility="visible"
document.querySelector(".result").style.opacity=1
document.querySelector(".first").innerHTML=Math.round(result) 
document.querySelector(".second").innerHTML=Math.round(result*0.85) 
document.querySelector(".third").innerHTML=Math.round(result*1.15) 
}) 



