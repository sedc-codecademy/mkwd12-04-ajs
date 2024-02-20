# Exercise 1

* Make a request to the following [link](https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json) to get all the student objects
* Filter all the students with age higher than 20
* Find the student with highest average grade, the average of all average grades and the average of the age of the filtered students
Use reduce for the third requirement.

# Exercise 2

* Make a request to the following [link](https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json) to get all the student objects
* After you get the students, map their full names after a timeout of 5 seconds.
* After you get all the students full names, get the documents from the following [url](https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json)
* After you get the documents, wait 5 seconds and print them sorted by size ascending.
Use async await.


# Exercise 3
## Create a class Shape that has:
* name
* color
* position,  array of x and y coordinates
* getArea - method that will only write in the console that there is no special implementation for area
* getPerimeter - method that will only write in the console that there is no special implementation for perimeter
* checkPosition - a method that checks if the input is a Shape.
	* If the input is a Shape and if it's x coordinate is in front of this x coordinate, write in console a message
	* If the input is a Shape and if it's y coordinate is in front of this y coordinate, write in console a message
	* If the input is a Shape and if it's x and y coordinates are in front of this x and y coordinates, write in console a message
	
*add method move that is shared among all instances and can be accessed through the class name. It takes a shape as input, logs Moving.. in the console and updates the position of the input, by increasing the coordinates for 5.
 
*create a setter and getter for the color and name property. The setter/getter will log a corresponding message. The setter should do validation.
 
#### Add class Rectangle, that inherits from Shape. It should have properties sideA and sideB. Override the getArea and getPerimeter methods correspondingly for a rectangle. 

#### Add class Circle, that inherits from Shape. It should have property radius. Override the getArea and getPerimeter methods correspondingly for a circle. 
### Test with few objects.
