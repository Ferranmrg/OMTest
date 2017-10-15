# OMTest

To run

```
npm i
npm start
```

To run test

```
npm test
```

TDD mode

```
npm run testAuto
```

## About the structure 

Based on the specs, I've initialized the token with an AuthService , we give this method (app.controller) a hardcoded user and password (This should go on a login component with a form or some oAuth service) to retrieve the token.

Then the first thing we do is request the account data from back. Here, based on what I understood on the spec:

"Is very important that this component could accept any JSON structure or attributes names on an easy way"

I've created a Schema-Model system, so in case we have changes in back, just need to change the route in schema.

The rest of components are based on a standard component relation with : RoutedComponents > FullstateComponents > StatelessComponents

Communication based on One-Way Data Bind/Event model
