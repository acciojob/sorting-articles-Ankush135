//your JS code here. If required.
function cleanTitle(title) {
	let text = title.toLowerCase();

	if(text.startsWith("the ")) return text.slice(4); 
	if(text.startsWith("an ")) return text.slice(3); 
	if(text.startsWith("a ")) return text.slice(2); 

	return text;
}

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];


bands.sort((a,b) => {
	if(cleanTitle(a) > cleanTitle(b)) return 1;
	if(cleanTitle(a) < cleanTitle(b)) return -1;
	return 0;
});

const list = document.getElementById("band");

bands.forEach(band => {
	const li = document.createElement("li");
	li.textContent = band;
	list.appendChild(li)
});