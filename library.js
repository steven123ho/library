
const bottomContainer = document.querySelector('div.bottom-container');
const headerContainer = document.querySelector('.header-container')
const addButton = document.querySelector('button');

const form = document.querySelector('form');
const title = document.querySelector('#title');
const author = document.querySelector('#author')
const pages = document.querySelector('#pages');
const read = document.querySelector('#read-status');
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

function showBook () {
	
	addToLibrary()

	card = document.createElement('div');
	infoContainer= document.createElement('div')
	bookImg = document.createElement('img');
	bookTitle = document.createElement('h2');
	bookAuthor = document.createElement('h4');
	bookPages = document.createElement('p');
	readLabel = document.createElement('label')
	readStatus = document.createElement('input');

	card.classList.add ('card')
	infoContainer.classList.add('infoContainer')
	bookImg.setAttribute('src', './imgs/book.svg')
	
	card.appendChild(bookImg)
	infoContainer.appendChild(bookTitle);
	infoContainer.appendChild(bookAuthor);
	infoContainer.appendChild(bookPages);
	readLabel.appendChild(readStatus);
	card.appendChild(infoContainer)
	bottomContainer.appendChild(card);

	readStatus.setAttribute('type', 'checkbox')
	readStatus.setAttribute('id', 'readStatus')
	infoContainer.appendChild(readLabel)
	readLabel.textContent = 'Read'
	readLabel.appendChild(readStatus)

	bookTitle.textContent = `${myLibrary[myLibrary.length-1].title}`
	bookAuthor.textContent = `By: ${myLibrary[myLibrary.length-1].author}`;
	bookPages.textContent = `Pages: ${myLibrary[myLibrary.length-1].pages}`;
	
};


function addToLibrary () {
	titleInput = document.getElementById('title').value;
	authorInput = document.getElementById('author').value;
	pagesInput = document.getElementById('pages').value;
	myLibrary.push(new Book(titleInput, authorInput, pagesInput, 'Read'))
}

addButton.addEventListener('click', () => {
	form.classList.toggle('hide');
})

submit.addEventListener('click', () => {
	showBook()
	form.classList.remove('hide');

})
