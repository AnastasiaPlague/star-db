export default class SwapiService {
	_apiBase = "https://swapi.co/api";

	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`);
		}
		const body = await res.json();
		return body;
	}

	getAllPeople = async () => {
		const res = await this.getResource(`/people/`);
		return res.results.map(this._transformPerson).slice(0, 5); //returns data in array
	};

	getAllPlanets = async () => {
		const res = await this.getResource(`/planets/`);
		return res.results.map(this._transformPlanet).slice(0, 5);
	};

	getAllStarships = async () => {
		const res = await this.getResource(`/starships/`);
		return res.results.map(this._transformStarship).slice(0, 5);
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
	doesImageExist = async id => {
		const data = await fetch(`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`);
		if (!data.ok) {
			return "https://www.pnglot.com/pngfile/detail/12-120147_venus-planet-pics-about-space-transparent-image-clipart.png";
		}
		const imgURL = data.url;
		return imgURL;
	};

	_extractId = item => {
		const idRegex = /\/([0-9])*\/$/;
		return item.url.match(idRegex)[1]; // [] mark a group in a regex which we put in () before
	};
	_transformPlanet = planet => {
		return {
			id: this._extractId(planet),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter
		};
	};
	_transformStarship = starship => {
		return {
			id: this._extractId(starship),
			name: starship.name,
			model: starship.model,
			starshipClass: starship.starship_class,
			starshipLength: starship.length
		};
	};

	_transformPerson = person => {
		return {
			id: this._extractId(person),
			name: person.name,
			gender: person.gender,
			birthYear: person.birth_year,
			skinColor: person.skin_color,
			eyeColor: person.eye_color
		};
	};
}
