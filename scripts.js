/*Funkcja konstruktora do tworzenia obiektu eventu*/ 

function TODOListGenerator(event, targetDate, timeRemaining){
    this.event = event;
    this.targetDate = targetDate;
    this.timeRemaining = function (todaysDate){
        return this.targetDate-todaysDate;
    };
}

	// Pobieranie daty do nagłówka

function czas(){
	var dzisiaj = new Date();
	var dzien = dzisiaj.getDate();
		if (dzien<10)
			dzien='0'+dzien;
	var miesiac = dzisiaj.getMonth()+1;
		if (miesiac<10)
			miesiac='0'+miesiac;
	var rok = dzisiaj.getFullYear();
	var godzina = dzisiaj.getHours();
	var minuta = dzisiaj.getMinutes();
			if (minuta<10)
			minuta='0'+minuta;
	var sekunda = dzisiaj.getSeconds();
		if (sekunda<10)
			sekunda='0'+sekunda;

		//Wypisywanie daty
	document.getElementById('sekcja_daty').innerText =dzien + '/' + miesiac + '/' + rok + ' | ' + godzina + ':' + minuta + ':' + sekunda;

	setTimeout("czas()",1000);
}