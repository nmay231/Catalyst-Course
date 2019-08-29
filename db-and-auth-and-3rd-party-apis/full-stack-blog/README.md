# Protect ~~This House~~ Your API
The purpose of this lab is to protect your Blog API routes by adding back end authentication! You should be able to "login" by sending a `POST` request to a route in Postman. This login should create and send tokens on a successful response. After, you need to be able to protect certain routes on your API by requiring a valid auth token.

## Steps
### MySQL
1. Make sure your users (or authors) table contains an email column, a password column of type `VARCHAR(60)`, and a role column that can be any text data type. It'd be good practice to make the default value of role to `"guest"`
2. If you don't have one, create a accesstokens table with at least the following:

```
accesstokens (
    id,
    userid (FK to users id),
    token TEXT NOT NULL,
    _created
);
```

3. Create a new user with privileges to connect to this schema

### Express Config
1. Create a config directory in your server `src` code
2. Have an `index.ts` that will swap between production/development based on the environment variable `NODE_ENV`
3. Export your MySQL config object from your `development.ts` and a mirror object format from `production.ts` using environment variables
4. Update your `.gitignore` to include just the `development.ts` file

### Express DB Queries
1. Connect to your MySQL DB if you aren't already
2. Should already have CRUD (get all, get one, insert, update, and delete) operations for blogs table, write them if you don't
3. For your users table, make sure you can `findOneByEmail` and `findOneById` at minimum
4. For your accesstokens table, make sure you can `findOneByIdAndToken`, insert, and update a token at a minimum

Note: If you wish to write a more generic / reusable `find`, `findOne`, or any other query, go for it! You don't have to have these very specific queries that the walkthroughs demo. You can write similar functions that can take an entire object and use its keys/values to make a dynamic query every time!

### Installs
Make sure you have the following modules and their types installed:

* `bcrypt @types/bcrypt`
* `jsonwebtoken @types/jsonwebtoken`
* `passport @types/passport`
* `passport-http-bearer @types/passport-http-bearer`
* `passport-local @types/passport-local`

### Utilities
* Create a Password Utility using `bcrypt` to:
    1. Generate a hashed and salted password
    2. Compare a plain text password to a hash
* Create a Token Utility using `crypto` and `jwt` to:
    * CreateToken
        1. Create a new row in your accesstokens table with that users' id
        2. Update your payload with that new row's id
        3. Generate a unique property using `crypto`
        4. Sign the token using `jwt` and a secret auth key
        5. Update the row with the token value
        6. Return the token
    * ValidateToken
        1. Using `jwt` to decode the token and get a payload
        2. Find the payload in your accesstokens table to verify it
        3. Return the payload

### Middleware
Write a middleware for `passport` to use a new `LocalStrategy` to:
1. serialize/deserialize a `user`
2. Use the `LocalStrategy` using an email/password
3. Find that user by their email
4. Compare that user's hashed password with what they provided
5. Return the `user` if it's valid

Write a middleware for `passport` to use a new `BearerStrategy` to:
1. Validate a provided token
2. Using the token's payload, find that user's id in your users table
3. Return the `user` if it's valid

Make sure in your root server `server.ts` to:
1. Initialize `passport`
2. Import both your middlewares

### Auth Routes
1. Create an auth router with `/login` and `/register` routes
2. Have the `/login` route authenticate a `POST` request with an email/password. If valid, respond with an object containing the `token`, `userid`, and `role` of that user
3. Have the `/register` route insert a new user with their hashed/salted password, generate a token, and respond with the same object as the above step (`token`, `userid`, and `role`)

### API Routes
1. Have your `passport` 'bearer' intercept *every* incoming API route request
2. It should add a `user` property to the `req` object if provided a valid Bearer token
3. In any case, it should forward the `req` object to the next step in your route logic
4. Write a new function middleware using `RequestHandler` to check your `req` object for a `user` property or a specific `role` on that property

### Completion
If all is coded, your completed back end authentication lab should be able to use Postman to:

1. Register a new user, and have their hash stored in your users table
2. Use the token from a new user's registration to make a request to a protected route
3. Make sure you receive "unauthorized" on those protected routes when using no/an incorrect token

### Demo

https://www.youtube.com/watch?v=xqLg-nUn9Fg