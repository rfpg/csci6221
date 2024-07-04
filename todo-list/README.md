# Task Management Application Using Clojure

## Overview
This project is a task management application built using Clojure and ClojureScript. The application features a dynamic web interface for task management, utilizing modern web development practices and functional programming principles.

## Project Structure
The project is organized into a structured directory that separates concerns and functionalities into clear, manageable components:

### Frontend
- **index.html**: The main HTML file that defines the structure of the web application's interface.
- **style.css**: Defines the visual styling for the web application.

### Backend
- **handler.clj**: Defines routes and sets up the server, linking the backend operations to the frontend requests.
- **db.clj**: Manages database configurations and operations using the clojure.java.jdbc library.
- **tasks.clj**: Handles business logic related to task operations such as CRUD functionalities.

### Entry Point
- **main.clj**: Bootstraps the application, initializing and starting the backend server.

## How to Run the Project

### Prerequisites
- **Clojure**: Ensure you have Clojure installed. (https://clojure.org/guides/getting_started)
- **Leiningen**: A build automation tool for Clojure. (https://leiningen.org/)
- **SQLite3**: Install SQLite3 for database management. (https://www.sqlite.org/download.html)
- **DB Browser for SQLite**: Optional, for viewing and managing the database. (https://sqlitebrowser.org/)

### Setup

1. **Create the Database Table:**
   - This project uses SQLite3. First, install SQLite3 and create a table called "tasks" with the following structure:
     CREATE TABLE tasks (
         id TEXT PRIMARY KEY,
         name TEXT,
         date TEXT,
         assignee TEXT,
         status TEXT);
         
   - Note the path to the `tasks.db` file you created. You will need to update the `db.clj` file with this path.

2. **Configure Database Path:**
   - Open `db.clj` and update the `:subname` key with the path to your `tasks.db` file:
     :subname "/your/path/for/created/table/tasks.db"

3. **Optional: Use DB Browser for SQLite**
   - You can use DB Browser for SQLite to view and manage the database directly. Import the `tasks.db` file into this browser for easy database management.

### Running the Application

1. **Start the Backend Server:**
   - Open a terminal and navigate to the project directory. Run the following command to start the server on port 3000:
     lein run server
     

2. **Start the Frontend (Figwheel):**
   - Open another terminal and navigate to the project directory. Run the following command to start Figwheel on port 3449 and view the UI:
     lein figwheel


3. **Access the Application:**
   - Open your web browser and go to `http://localhost:3449` to see the UI and interact with the application.