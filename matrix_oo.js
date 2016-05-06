"use stick"

var o_btns = [];
var i_btns = [];
var e_btn = document.getElementById("enter");
var c_btn = document.getElementById("cancel");

var io_status = [];

o_btns.length = 8;
i_btns.length =16;
io_status.length = o_btns.length;

function i_click(){
	var i_num = this.textContent;
	for (var i = 0; i < i_btns.length; i++) {
		i_btns[i].setAttribute("class","unchecked");
	}
	for (var i = 0; i < o_btns.length; i++) {
		o_btns[i].setAttribute("class","unchecked");
	}
	this.setAttribute("class", "checked");
	for (var i = 0; i < io_status.length; i++) {
		if(i_num == io_status[i]){
			o_btns[i].setAttribute("class", "checked");
		}
	}
}

function o_click(){
	this.setAttribute("class", "checked");
}

function io_switch(){
	var i_switch = 0;
	var o_switch = [];
	for (var i = 0; i < i_btns.length; i++) {
		if (i_btns[i].getAttribute("class") == "checked") {
			i_switch = i_btns[i].textContent;
		}
	}
	for (var i = 0; i < o_btns.length; i++) {
		if (o_btns[i].getAttribute("class") == "checked") {
			o_switch[i] = o_btns[i].textContent;
			var p = document.createElement("p");
			document.getElementById("io_console").appendChild(p);
			p.textContent = "input: "+i_switch+" switch to output: "+ o_switch[i];
			io_status[o_switch[i]-1] = i_switch;
		}
	}
}

function io_clear(){
	var i_switch = 0;
	for (var i = 0; i < i_btns.length; i++) {
		if (i_btns[i].getAttribute("class") == "checked") {
			i_switch = i_btns[i].textContent;
		}
	}
	for (var i = 0; i < io_status.length; i++) {
		if(io_status[i] == i_switch) {
			io_status[i] = 0;
			o_btns[i].setAttribute("class","unchecked");
		}
	}
	var p = document.createElement("p");
	document.getElementById("io_console").appendChild(p);
	p.textContent = "input: "+i_switch+" clear";
}

//Add event listener to buttons
//input buttons
for (var i = 0; i < i_btns.length; i++) {
	i_btns[i] = document.getElementById("i"+i);
	i_btns[i].addEventListener("click",i_click,false);
}
//output buttons
for (var i = 0; i < o_btns.length; i++) {
	o_btns[i] = document.getElementById("o"+i);
	o_btns[i].addEventListener("click",o_click,false);
}
//enter button
e_btn.addEventListener("click",io_switch,false);
//cancel button
c_btn.addEventListener("click",io_clear,false);

