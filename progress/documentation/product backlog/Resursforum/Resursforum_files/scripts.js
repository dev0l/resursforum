// JavaScript Document
function hideOverload() {
		if(!document.getElementById) return false;
		if(!document.getElementById("overload")) return false;
		//alert("sidan uppdaterades!");
		var elem = document.getElementById("overload");
		elem.style.visibility = "hidden";
}
function hideIt(thelayer) {
		var aLayer = thelayer
		if(!document.getElementById) return false;
		if(!document.getElementById(aLayer)) return false;
		//alert("sidan uppdaterades!");
		var elem = document.getElementById(aLayer);
		elem.style.visibility = "hidden";
}

function OpenReport(){
	aWindow=window.open('','VOTEWIN','resizable=yes,width=370,height=350,toolbar=no,resize=no,location=no,scrollbars=no,menubar=no');
}

<!--
function toLink(url) {
			window.open (url, 'fjarris', 'width=950,height=800, top=100, left=300, resizable=yes, scrollbars=yes, status=yes');
		}
function toAdmin(url) {
			window.open (url, 'fjarris', 'width=880,height=700, top=100, left=300, resizable=yes, scrollbars=yes');
		}		
function toOrder(url) {
			window.open (url, 'fjarris', 'width=880,height=800, top=100, left=300, resizable=yes, scrollbars=yes');
		}

function toPic(url) {
			window.open (url, 'fjarris', 'width=750,height=650, top=200, left=400, resizable=yes, scrollbars=no');
		}				
//-->

	function alarm(dag) {
		alert("Något är fel vad gäller inmatat dagvärde");
		dag.value = ""
		dag.focus();
		return false;
		
		
	}
	
	
	function checkDate(dag){
		if(document.forms[0].frmStartManad.value == 2 && dag.value > 29) {
			//anropa funktionen alarm()
			alarm(dag);	
		}else if (document.forms[0].frmStartManad.value == 4  && dag.value > 30){
			alarm();
		}else if (document.forms[0].frmStartManad.value == 6  && dag.value > 30){
			alarm(dag);	
		}else if (document.forms[0].frmStartManad.value == 9  && dag.value > 30){
			alarm(dag);	
		}else if (document.forms[0].frmStartManad.value == 11  && dag.value > 30){
			alarm(dag);	
		}else if (document.forms[0].frmStartDag.value > 31){
			alarm(dag);	
		}
		
		//Ändra alla 1, 2, 3 etc till 01, 02, 03 etc	
		if (dag.value == 1){
			dag.value = "01";
		}else if (dag.value == 2){	
			dag.value = "02";
		}else if (dag.value == 3){
			dag.value = "03";
		}else if (dag.value == 4){
			dag.value = "04";
		}else if (dag.value == 5){
			dag.value = "05";
		}else if (dag.value == 6){
			dag.value = "06";
		}else if (dag.value == 7){
			dag.value = "07";
		}else if (dag.value == 8){
			dag.value = "08";
		}else if (dag.value == 9){
			dag.value = "09"					;
		}else if (dag.value == 0  || dag.value == 00)	{
			alarm(dag);			
		}else if (dag.value == "") {
			alarm(dag);
		}					
	
	}
	//Anvädns i de fall det finns mer än ett inmatningsfält för datum på sidan
	function checkDate2(dag){
		if(document.forms[0].frmStoppManad.value == 2 && dag.value > 29) {
			//anropa funktionen alarm()
			alarm(dag);	
		}else if (document.forms[0].frmStoppManad.value == 4  && dag.value > 30){
			alarm();
		}else if (document.forms[0].frmStoppManad.value == 6  && dag.value > 30){
			alarm(dag);	
		}else if (document.forms[0].frmStoppManad.value == 9  && dag.value > 30){
			alarm(dag);	
		}else if (document.forms[0].frmStoppManad.value == 11  && dag.value > 30){
			alarm(dag);	
		}else if (document.forms[0].frmStoppDag.value > 31){
			alarm(dag);	
		}
		
		//Ändra alla 1, 2, 3 etc till 01, 02, 03 etc	
		if (dag.value == 1){
			dag.value = "01";
		}else if (dag.value == 2){	
			dag.value = "02";
		}else if (dag.value == 3){
			dag.value = "03";
		}else if (dag.value == 4){
			dag.value = "04";
		}else if (dag.value == 5){
			dag.value = "05";
		}else if (dag.value == 6){
			dag.value = "06";
		}else if (dag.value == 7){
			dag.value = "07";
		}else if (dag.value == 8){
			dag.value = "08";
		}else if (dag.value == 9){
			dag.value = "09"					;
		}else if (dag.value == 0  || dag.value == 00)	{
			alarm(dag);			
		}else if (dag.value == "") {
			alarm(dag);
		}	
	}

	function checkNumber(field){
		//Vi använder oss av funktionen
		//isNaN som returnerar true om
		//det konrollerade värdet inte
		//är ett tal.
		fieldValue = isNaN(field.value);
		if(fieldValue){
			alert("Du måste använda siffror och inte bokstäver");
			field.value = "";
			field.focus();
			
			return false;
			
			}	
	}


	function checkMonth(pryl) {
		//var pryl
		//pryl = document.frmLoggaTid.frmStartManad;
		//Vi vill bara att ett alert meddelande ska
		//visas - alltså kollar vi först om värdet är mellan
		//1 och 12 innan vi åkallar funktionen checkNumber();
		
		if (pryl.value > 12 || pryl.value < 1) {
			alert("Skriv in ett värde mellan 01 och 12");
			pryl.value = "";
			pryl.focus();
			
			return false;
			
		}else {
			checkNumber(pryl)
		}
		//Ändra alla 1, 2, 3 etc till 01, 02, 03 etc	
		if (pryl.value == 1){
			pryl.value = "01";
		}else if (pryl.value == 2){	
			pryl.value = "02";
		}else if (pryl.value == 3){
			pryl.value = "03";
		}else if (pryl.value == 4){
			pryl.value = "04";
		}else if (pryl.value == 5){
			pryl.value = "05";
		}else if (pryl.value == 6){
			pryl.value = "06";
		}else if (pryl.value == 7){
			pryl.value = "07";
		}else if (pryl.value == 8){
			pryl.value = "08";
		}else if (pryl.value == 9){
			pryl.value = "09"					;
		}	
		
		
		
	}