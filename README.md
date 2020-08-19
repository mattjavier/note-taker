# Express Note Taker

A note taker application using an Express backend. 

Using Express, a server is built for the application to run. A JSON file, `db.json` is used to store all notes, which contains objects with properties: id, title, and text.

Routes for each server request are created in order to handle the appropriate actions of viewing a note, creating a new note, and deleting a note. The HTML page will dynamically update upon each action. 

## Usage

The application is deployed using Heroku. Click [here]() to visit the application.

## Testing

When testing on local host, first download the GitHub repository.

Then run the following in your terminal to get all npm packages:
```bash
npm i
```

The main server code is located in `server.js`, and the remaining server code consisting of the routes are all located in the `routes/` directory. All HTML and CSS are located in `public/`.

To test, type the following into your browser url or use a third-party application like [Postman](https://www.postman.com/downloads/).
> localhost:port/api/notes

The port number can be changed in the `server.js` file. The above command will show all the notes when a GET request is made. It will also update the notes `db.json` file if a POST request is made with a new request body. 

The following command can be made with a DELETE request to remove a note from the notes `db.json` file:
> localhost:port/api/notes/:id

The id parameter will be a unique id given to each note. Testing in the browser or with Postman will display the changes to the `db.json` array when GET, POST, and DELETE requests are made. 

## Images

* The initial Note Taker application.
  
<img src="" width="600">

* Entering a new note, made with a POST request.

<img src="" width="600">

* Deleting a note, made with a DELETE request.

<img src="" width="600">


You can view the application repository [here](https://github.com/mattjavier/note-taker)