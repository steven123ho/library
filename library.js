const bottomContainer = document.querySelector('div.bottom-container');
const headerContainer = document.querySelector('.header-container')
const addButton = document.querySelector('button');

const form = document.querySelector('form');
const title = document.querySelector('#title');
const submit = document.querySelector('form>button');

let myLibrary = [];



function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;

	this.info = function () {
		return title + ' by ' + author + ', ' + pages + ', ' + read;
	};
}

function addToLibrary () {
	

}

const createBook = function () {
	card = document.createElement('div');
	bookImg = document.createElement('img');
	bookTitle = document.createElement('h2');
	bookAuthor = document.createElement('h4');
	bookPages = document.createElement('p');
	readStatus = document.createElement('input');

	card.appendChild(bookImg);
	card.appendChild(bookTitle);
	card.appendChild(bookAuthor);
	card.appendChild(bookPages);
	card.appendChild(readStatus);
	bottomContainer.appendChild(card);
};

addButton.addEventListener('click', () => {
	form.classList.toggle('hide');

	if (form.getAttribute('class')) {
		headerContainer.setAttribute('id', 'grayed')
	}
});


submit.addEventListener('click', () => {
	console.log(document.getElementById("title").value)
	console.log('hello')
	console.log(title)
})

