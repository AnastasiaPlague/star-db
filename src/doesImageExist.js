doesImageExist = async id => {
	const data = await fetch(`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`);
	if (!data.ok) {
		throw new Error(`Could not fetch ${url}, received ${res.status}`);
	}
	const imgURL = data.url
	console.log(imgURL);
	return imgURL;
};

async function getData() {
const received =	await doesImageExist(5)
}

function noPlanetImage() {
	const imgURL =
		"https://www.pnglot.com/pngfile/detail/12-120147_venus-planet-pics-about-space-transparent-image-clipart.png";
	return imgURL;
}
doesImageExist(10).then(res => console.log(res)).then()
