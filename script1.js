window.onload = init;
let perc1 = 0;
let perc2 = 0;

function init(){
    let but1 = document.getElementById("1");
	let but2 = document.getElementById("2");
	let but3 = document.getElementById("3");
	let but4 = document.getElementById("4");
	let but5 = document.getElementById("5");
	let but6 = document.getElementById("6");


    but1.addEventListener("click", ButtonClick1);
    but2.addEventListener("click", ButtonClick2);
    but3.addEventListener("click", ButtonClick3);
    but4.addEventListener("click", ButtonClick4);
    but5.addEventListener("click", ButtonClick5);
    but6.addEventListener("click", ButtonClick6);

    
    //console.log(111);
}

function ButtonClick1() {
    if (100-perc1<1){
    	$('#pb1').css({ width : (100) +"%" });
		$('#111').html('100%');
    }
    else{
    	perc1 += 1;
		$('#pb1').css({ width : (perc1) +"%" });
		$('#111').html(perc1+'%'); 
		}  
}

function ButtonClick2() {
    if (100-perc1<3){
    	$('#pb1').css({ width : (100) +"%" });
		$('#111').html('100%');
    }
    else{
    	perc1 += 3;
		$('#pb1').css({ width : (perc1) +"%" });
		$('#111').html(perc1+'%'); 
		}  
}

function ButtonClick3() {
    if (100-perc1<7){
    	$('#pb1').css({ width : (100) +"%" });
		$('#111').html('100%');
    }
    else{
    	perc1 += 7;
		$('#pb1').css({ width : (perc1) +"%" });
		$('#111').html(perc1+'%'); 
		}  
}

function ButtonClick4() {
    if (100-perc2<1){
    	$('#pb2').css({ width : (100) +"%" });
		$('#222').html('100%');
    }
    else{
    	perc2 += 1;
		$('#pb2').css({ width : (perc2) +"%" });
		$('#222').html(perc2+'%'); 
		}  
}

function ButtonClick5() {
    if (100-perc2<3){
    	$('#pb2').css({ width : (100) +"%" });
		$('#222').html('100%');
    }
    else{
    	perc2 += 3;
		$('#pb2').css({ width : (perc2) +"%" });
		$('#222').html(perc2+'%'); 
		}  
}

function ButtonClick6() {
    if (100-perc2<7){
    	$('#pb2').css({ width : (100) +"%" });
		$('#222').html('100%');
    }
    else{
    	perc2 += 7;
		$('#pb2').css({ width : (perc2) +"%" });
		$('#222').html(perc2+'%'); 
		}  
}


//console.log(222);

