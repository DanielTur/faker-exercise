function displayName() {
	var nameFake = faker.fake('{{name.firstName}} {{name.lastName}}');
	document.getElementById('user-name').innerHTML = nameFake;
}
function displayHashtag() {
	var nameHashtag = faker.fake('@{{name.firstName}}{{name.lastName}}');
	document.getElementById('user-hash-tag').innerHTML = nameHashtag;
}
function displayText() {
	var textFake = faker.fake('{{lorem.paragraph}}');
	document.getElementById('user-text').innerHTML = textFake;
}
function displayCity() {
	var cityFake = faker.fake('{{address.city}}, {{address.stateAbbr}}');
	document.getElementById('user-location').innerHTML = cityFake;
}
function displayWebsite() {
	var websiteFake = faker.fake('{{internet.domainName}}');
	document.getElementById('user-website').innerHTML = websiteFake;
}
function displayDate() {
	var dateFake = faker.fake('Joined {{date.past}}');
	document.getElementById('user-joined').innerHTML = dateFake;
}
function displayImage() {
	var imageFake = faker.fake('{{image.avatar}}');
	document.getElementById('user-image').src = imageFake;
}
function displayNameTweet() {
	var nameFakeTweet = faker.fake('Tweet to {{name.firstName}} {{name.lastName}}');
	document.getElementById('user-tweet').innerHTML = nameFakeTweet;
}

displayImage();
displayName();
displayHashtag();
displayText();
displayCity();
displayWebsite();
displayDate();
displayNameTweet();

$(document).ready(function() {
  $('.user-joined').lettering('words');
});
