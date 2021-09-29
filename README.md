# Pet Database - A CRUD/RESTful API - DFINITY assessment.

Basic CRUD/RESTful API.

Utilizing Nodejs, Mongo/Mongoose, and Express

## Installation

Verify that MongoDB is installed and running on your system

```bash
  npm i
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`MONGO_DEV`

## Usage/Examples

Start the server then use your favorite API software to test the various routes

Then run src/index.js

```javascript
npm start
```

## API Reference

#### Get all pets

```http
  GET /pets
```

Returns all pets currently in the database

#### Add new pet

```http
  POST /pets
```

| Parameter      | Type      | Description                                                                                                       |
| :------------- | :-------- | :---------------------------------------------------------------------------------------------------------------- |
| `animal`       | `string`  | **Required**. What kind of animal is your pet? Currently support options - 'cat', 'dog', 'bird', 'ferret', 'fish' |
| `name`         | `string`  | **Required**. What's your pet's name?                                                                             |
| `age`          | `number`  | **Optional**. How old is your fury or scaley friend?                                                              |
| `owner`        | `string`  | **Optional**. Are you the pet's parent or someone else?                                                           |
| `microchipped` | `boolean` | **Required**. Sometimes they escape so will we be able to identify them when they are found?                      |

Returns a 200 status on successful POST.

#### Update an existing pet

```http
  PUT /pets
```

| Parameter      | Type      | Description                                                                                                       |
| :------------- | :-------- | :---------------------------------------------------------------------------------------------------------------- |
| `animal`       | `string`  | **Required**. What kind of animal is your pet? Currently support options - 'cat', 'dog', 'bird', 'ferret', 'fish' |
| `name`         | `string`  | **Required**. What's your pet's name?                                                                             |
| `age`          | `number`  | **Optional**. How old is your fury or scaley friend?                                                              |
| `owner`        | `string`  | **Optional**. Are you the pet's parent or someone else?                                                           |
| `microchipped` | `boolean` | **Required**. Sometimes they escape so will we be able to identify them when they are found?                      |

Returns a 200 status on successful PUT.

#### Remove your pet from our database

```http
  DELETE /pets
```

| Parameter | Type     | Description                                                                                                       |
| :-------- | :------- | :---------------------------------------------------------------------------------------------------------------- |
| `animal`  | `string` | **Required**. What kind of animal is your pet? Currently support options - 'cat', 'dog', 'bird', 'ferret', 'fish' |
| `name`    | `string` | **Required**. What's your pet's name?                                                                             |

Returns a 200 status on successful DELETE.

## Authors

- [@cjohansen11](https://www.github.com/cjohansen11)
