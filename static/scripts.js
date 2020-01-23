async function getOwce() {
	const data = await fetch('/owce');
	const owce = await data.json();
	const owceHtml = owce.map(owca => `
		<tr>
			<th scope="row">1</th>
			<td>${owca.ID}</td>
			<td>${owca.Age}</td>
			<td>${owca.broken}</td>
			<td>${owca.location}</td>
		</tr>
	`).join(``);
	const el = document.querySelector("#owce");
	el.innerHTML = owceHtml;
}

getOwce();