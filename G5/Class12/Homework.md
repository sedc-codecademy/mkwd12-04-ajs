# Homework
## Task 1
Create 3 object templates. Library, Book and Author. The structure should be:
Library
* Name - string
* Books - array of Book
* Address - string
* NumberOfMembers - number of books * 15, not settable
* Print books - method that prints all books in console

Book
* Title - string
* Genre - string
* Libraries - array of libraries where the book can be found
* Authors - array of Author
* AddLibrary - accepts a library and adds it to the array
* RemoveLibrary - accepts a library and removes it from the array

Author
* FirstName - string
* LastName - string
* YearOfBirth - number
* Books - emptyArray as default, not settable
* CurrentBook - null as default, not settable
* StartBook - accepts Book object and adds it to the CurrentBook property

## Task 2
Make the functions AddLibrary, RemoveLibrary and StartBook dynamic.
* AddLibrary - When the book calls AddLibrary, the book should be added to the Books property of the library
* RemoveLibrary - When the book calls RemoveLibrary, the book should be removed from the Books property of the library
* StartBook - When the author calls StartBook the book should also be added to the Author property Books ( The book that he is starting ). If there was another book in the CurrentBook property, that book should be transferred to Books and then add the new Book as CurrentBook

## Task 3
Add a method AddBook to Library. This method should accept a book and use the Object.create method, to create an object
with the same properties as the parameter and then add it to the Books array.
