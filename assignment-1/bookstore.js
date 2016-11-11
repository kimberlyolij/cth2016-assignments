/*
	file: 	bookstore.js
	desc:	
	author:	kimberlyolij
	date:	07/11/16
*/

// import 'commander' (https://www.npmjs.com/package/commander)
var program = require('commander');

// database of books
var book1_title = "Magician";
var book1_author = "Raymond E. Feist";
var book1_price = "16.95";
var book1_kind = "Paperback";

var book2_title = "A Brief History of Time";
var book2_author = "Stephen Hawking";
var book2_price = "13.99";
var book2_kind = "Paperback";

var book3_title = "Jip and Janneke";
var book3_author = "Annie M.G. Schmidt";
var book3_price = "9.95";
var book3_kind = "Hardcover";

var book4_title = "To Kill a Mockingbird";
var book4_author = "Harper Lee";
var book4_price = "9.50";
var book4_kind = "Paperback";

var book5_title = "Nutshell";
var book5_author = "Ian McEwan";
var book5_price = "19.95";
var book5_kind = "Hardcover";

//initialise program
program
	.version('0.1')
	.option('-n, --title [string]', 'Title', 'empty')
	.option('-a, --author [string]', 'Author', 'empty')
	.option('-p, --price [string]', 'Price', 'empty')
	.option('-k, --kind [string]', 'Kind', 'empty')
	.parse(process.argv);

//match value of input "title"
switch(program.title)
{
	case book1_title:
		// input match book1
		console.log(book1_title);
		console.log(book1_author);
		console.log(book1_price);
		console.log(book1_kind);
		break;
	case book2_title:
		// input match book2
		console.log(book2_title);
		console.log(book2_author);
		console.log(book2_price);
		console.log(book2_kind);
		break;
	case book3_title:
		// input match book3
		console.log(book3_title);
		console.log(book3_author);
		console.log(book3_price);
		console.log(book3_kind);
		break;
	case book4_title:
		// input match book4
		console.log(book4_title);
		console.log(book4_author);
		console.log(book4_price);
		console.log(book4_kind);
		break;
	case book5_title:
		// input match book5
		console.log(book5_title);
		console.log(book5_author);
		console.log(book5_price);
		console.log(book5_kind);
		break;
	default:
		// default message if no match
		console.log('...');
		break;
}