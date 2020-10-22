export default class SwapiService {
	_apiBase = "https://swapi.dev/api";
	_imgUrlBase = "https://starwars-visualguide.com/assets/img";

	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			console.error(`Could not fetch ${url}, received ${res.status}`);
		}
		const body = await res.json();
		return body;
	}

	getAllPeople = async () => {
		const res = await this.getResource(`/people/`);
		return res.results.map(this._transformPerson).slice(0, 9); //returns data in array
	};

	getAllPlanets = async () => {
		const res = await this.getResource(`/planets/`);
		return res.results.map(this._transformPlanet).slice(1, 6);
	};

	getAllStarships = async () => {
		const res = await this.getResource(`/starships/`);
		return res.results.map(this._transformStarship).slice(2, 7);
	};

	getPerson = async id => {
		const person = await this.getResource(`/people/${id}/`);
		return this._transformPerson(person);
	};

	getPlanet = async id => {
		const planet = await this.getResource(`/planets/${id}/`);
		return this._transformPlanet(planet);
	};
	getStarship = async id => {
		const starship = await this.getResource(`/starships/${id}/`);
		return this._transformStarship(starship);
	};

	getPersonImg = id => {
		return `${this._imgUrlBase}/characters/${id}.jpg`;
	};

	getRandomPlanetImg = async id => {
		const data = await fetch(`${this._imgUrlBase}/planets/${id}.jpg`);
		if (!data.ok) {
			return `${this._imgUrlBase}/placeholder.jpg`;
		}
		const imgURL = data.url;
		return imgURL;
	};

	getPlanetImg = id => {
		return `${this._imgUrlBase}/planets/${id}.jpg`;
	};

	getStarshipImg = id => {
		return `${this._imgUrlBase}/starships/${id}.jpg`;
	};

	_extractId = item => {
		const idRegex = /\/(\d+)*\/$/;
		return item.url.match(idRegex)[1]; // [] mark a group in a regex which we put in () before
	};
	_transformPlanet = planet => {
		return {
			id: this._extractId(planet),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter,
		};
	};
	_transformStarship = starship => {
		return {
			id: this._extractId(starship),
			name: starship.name,
			model: starship.model,
			starshipClass: starship.starship_class,
			starshipLength: starship.length,
		};
	};

	_transformPerson = person => {
		return {
			id: this._extractId(person),
			name: person.name,
			gender: person.gender,
			birthYear: person.birth_year,
			skinColor: person.skin_color,
			eyeColor: person.eye_color,
		};
	};
}
