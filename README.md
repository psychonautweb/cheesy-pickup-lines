Funny mini-project where I made a simple, really simple :), API in NodeJS(Express) that serves as a backend and generates a random, cheesy Pick Up Line on a specific endpoint. On frontend I used React where I hook up on that endpoint and simply display it on a click of a button.

https://cheesy-pickup-lines.onrender.com (Front-End)

* API Doesn't work anymore due to Heroku termination of free Dynos. I'll update this later when I switch to alternative platform.


https://rest-api-pickup-lines.herokuapp.com/ (API URL)

Available Endpoints: 

  method: GET
  url: https://rest-api-pickup-lines.herokuapp.com/message        - summary
  
  method: GET,
  url: https://rest-api-pickup-lines.herokuapp.com/message/{ID}   - specify a number(type) {ID} to get a message. E.G. 56
  
  method: 'GET',
  url: https://rest-api-pickup-lines.herokuapp.com/message/random    - generate a random message 

*First time loading takes a couple of seconds to start the backend and fetch data from API - this is because of how Heroku Free plan works.
