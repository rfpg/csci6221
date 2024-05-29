This project will demonstrate key concepts of Clojure, including immutable data structures, functional programming principles, concurrency, and Java interoperability.
Project Goals

•	Learn and apply Clojure basics: names, bindings, scopes, data types, and expressions.
•	Practice functional programming principles, including immutability and pure functions.
•	Implement concurrency features to handle multiple tasks efficiently.
•	Utilize Java interoperability to enhance the application if needed.

Features
1.	Add Task: Allow users to add tasks to the to-do list.
2.	View Tasks: Display all tasks in the to-do list.
3.	Mark Task as Complete: Allow users to mark tasks as completed.
4.	Remove Task: Enable users to remove tasks from the list.
5.	Save and Load Tasks: Save the tasks to a file and load them upon starting the application.


•	Clojure: Use Clojure as the primary programming language.
•	Immutable Data Structures: Utilize lists, vectors, maps, and sets.
•	Functional Programming: Focus on pure functions and immutability.
•	Concurrency: Implement basic concurrency with atoms or agents for managing state.
•	Java Interoperability (Optional): Enhance the application using Java libraries if needed.

Project Structure
1.	Namespace and Dependencies: Define the project namespace and any required dependencies in the project.clj file.
2.	Core Functions:
o	add-task: Function to add a new task.
o	view-tasks: Function to display all tasks.
o	mark-complete: Function to mark a task as completed.
o	remove-task: Function to remove a task.
o	save-tasks: Function to save tasks to a file.
o	load-tasks: Function to load tasks from a file.
3.	Main Function:
o	Command-line interface to interact with the user.
o	Provide options to add, view, mark complete, and remove tasks.
