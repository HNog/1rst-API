document.getElementById('getSpecies').addEventListener
('click', getSpecies);

function getSpecies(){
	fetch('https://swapi.co/api/species')
	.then((res) => res.json())
	.then((data) => {
		let output = '<h2 class="mb-4">Species</h2>';
		data.results.forEach(function(specie){
			output += `
				<div class="card card-body mb-3">
					<h3>${specie.name}</h3>
					<p>${specie.classification}</p>
				</div>
			`;
		});
		document.getElementById('output').innerHTML = output;
	})
	.catch((err) => console.log(err))
}

/**/