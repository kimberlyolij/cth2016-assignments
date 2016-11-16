/*
	file: 	bookstore.js
	desc:	script matching incoming arguments about books
	author:	kimberlyolij
	date:	07/11/16
*/

// import 'commander' (https://www.npmjs.com/package/commander)
var program = require('commander');

// database of books
var book1_title = "Magician",
var book1_author = "Raymond E. Feist",
var book1_price = 16.95,
var book1_kind = "Hardcover"

var book2_title = "A Brief History of Time",
var book2_author = "Stephen Hawking",
var book2_price = 13.99,
var book2_kind = "Paperback"

var book3_title = "Jip and Janneke",
var book3_author = "Annie M.G. Schmidt",
var book3_price = 9.95,
var book3_kind = "Hardcover"

var book4_title = "To Kill a Mockingbird",
var book4_author = "Harper Lee",
var book4_price = 9.50,
var book4_kind = "Paperback"

var book5_title = "Nutshell",
var book5_author = "Ian McEwan",
var book5_price = 19.95,
var book5_kind = "Paperback"

//initialise program
program
	.version('0.1')
	.option('-n, --title [name]', 'Title')
	.option('-a, --author [name]', 'Author')
	.option('-p, --price [price]', 'Price')
	.option('-k, --kind [kind]', 'Kind')
	.parse(process.argv);

//match value of input "title"
if(program.title) 
	{
		for(var i = 0; i < book.length; i++)
		{
			if(program.title === book[i].title)
			{
				print_book(book[i]);
			}
		}
	}

//match value of input "author"
else if (program.author)
	{
		for (var i = 0; i < book.length; i++)
		{
			if(program.author === book[i].author)
			{
				print_book(book[i]);
			}
		}
	}

//match value of input "price"
else if (program.price)
	{
		for (var i = 0; i < book.length; i++)
		{
			if(program.price === book[i].price)
			{
				print_book(book[i]);
			}
		}
	}

//match value of input "kind"
else if (program.kind)
	{
		for (var i = 0; i < book.length; i++)
		{
			if(program.kind === book[i].kind)
			{
				print_book(book[i]);
			}
		}
	}

//default message when incorrect input
	default:
		// default message if no match
		console.log('...');
		break;
}