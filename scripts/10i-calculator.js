let calculation = localStorage.getItem('name') ||'';
		
		displayCalculation(); //kad se ucita display
		
		
		function upDataCalculation (parametar){
		calculation = calculation + parametar;
		console.log(calculation);
		
		displayCalculation(); //ubacujemo u fju
		
		localStorage.setItem('name',calculation); //localStorage se ubacuje u fju
		
		};
		
		function displayCalculation(){
		const displayElement = document.querySelector('.js-display-calculation');
		displayElement.innerHTML = calculation;
	}
	
	
		function sqrt (){
		calculation = Math.sqrt(calculation);
		console.log(calculation);
		
		displayCalculation();
		localStorage.setItem('name',calculation);
		};
		
		function exponentiation (){
		calculation = calculation ** 2;
		console.log(calculation);
		
		displayCalculation(); //ubacujemo u fju
		
		localStorage.setItem('name',calculation); //localStorage se ubacuje u fju
		
		};
	