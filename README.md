# Simple API For A Library
API that creates, retrieves, edits and deletes books from a library built with `Express` on `NodeJS`.

## Installation

Clone this repo:

```
$ git@github.com:GertrudeOchieng/Library-API.git
```

Navigate to the `Library-API` directory:

```
$ cd Library-API
```

Install the required dependencies:

```
$ npm install
```

Set the required environment keys

```
$ export API_ENV="development"
$ export DEV_DB='mongodb://localhost/library'
```

## Usage

Run ```npm start```.

To test the API, use an API Client such as [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) for Google Chrome to test the endpoints.

### API Endpoints 


| Actions        | Description           
| ------------- |:-------------:
| GET /books      | List all books |
| POST /books      | Add a book |
| GET /books/`<id>`     | Get a single book |
| PUT /books/`<id>`     | Edit a single book |
| DELETE /books/`<id>`     | Remove a single book | 
