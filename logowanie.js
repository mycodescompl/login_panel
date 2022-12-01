function pokaz() {
	
	if(document.getElementById('login').value==''){ //if znaczy to tyle ze w nawiasie jak sa spelnione pewne warunki to kolejno ma wykonac ponizsze instrukcje
		kom('Podaj login!',1);		//do każdego warunku zostały dodane osobne funkcje
	}
		else if(document.getElementById('haslo').value==''){ //else znaczy to tyle co "w przeciwnym wypadku"
			kom2('Podaj hasło',1);
	}
		else if(document.getElementById('login').value=="admin" && document.getElementById('haslo').value=="haslo"){
			kom3('Zalogowałeś się! Gratulacje!',0)
	}		
		else{
			kom4('Błędny login lub hasło!',1);
	}
}




				//Poniżej zostały zapisane funkcje, do których odwołujemy się powyżej
////////////////////////////////////////////////////////////////////////////////////////////////////
function kom(tresc,klasa){
	document.getElementById('komunikat').innerHTML=tresc; //tresc komunikatu
	if(klasa==0) document.getElementById('komunikat').className="kOk"; //id=komunikat przypisuje klase kOk a w przeciwnym wypadku kBlad
	else if(klasa==1) document.getElementById('komunikat').className="kBlad";

	document.getElementById('komunikat').style.display="block"; //wylacza styl display:none;
	document.getElementById('login').focus(); //skupia sie na danym polu
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function kom2(tresc,klasa){
	document.getElementById('komunikat').innerHTML=tresc;
	if(klasa==0) document.getElementById('komunikat').className="kOk";
	else if(klasa==1) document.getElementById('komunikat').className="kBlad";

	document.getElementById('komunikat').style.display="block";
	document.getElementById('haslo').focus();
} 
////////////////////////////////////////////////////////////////////////////////////////////////////
function kom3(tresc,klasa){
	document.getElementById('komunikat').innerHTML=tresc;
	if(klasa==0) document.getElementById('komunikat').className="kOk";
	else if(klasa==1) document.getElementById('komunikat').className="kBlad";

	document.getElementById('komunikat').style.display="block";
} 
////////////////////////////////////////////////////////////////////////////////////////////////////
function kom4(tresc,klasa){
	document.getElementById('komunikat').innerHTML=tresc;
	if(klasa==0) document.getElementById('komunikat').className="kOk";
	else if(klasa==1) document.getElementById('komunikat').className="kBlad";

	document.getElementById('komunikat').style.display="block";
	document.getElementById('login').value=''; //czysci zawartosc pola "login"
	document.getElementById('haslo').value='';
	document.getElementById('login').focus(); //skupia sie na danym polu, w tym przypadku "login"

}
////////////////////////////////////////////////////////////////////////////////////////////////////