async function getOwce() {
	const data = await fetch('/owce');
	const owce = await data.json();
	const owceHtml = owce.map(owca => `
		<div class="owca">
			<h4>age: ${owca.Age}</h4>
			<h4>loaction: ${owca.loaction}</h4>
			<h4>ID: ${owca.ID}</h4>
			<h4>broken: ${owca.broken}</h4>
		</div>
	`)
	const el = document.querySelector("#owce");
}