Funny mini-project where I made a simple, really simple :), API in NodeJS(Express) that serves as a backend and generates a random, cheesy Pick Up Line on a specific endpoint. On frontend I used React where I hook up on that endpoint and simply display it on a click of a button.

https://cheesy-pickup-lines.onrender.com (Front-End)

https://rest-api-pickup-lines.herokuapp.com/ (API URL)

Available Endpoints: 

  method: GET
  url: 'https://cheesy-pick-up-lines.p.rapidapi.com/message        - summary
  
  method: GET,
  url: https://cheesy-pick-up-lines.p.rapidapi.com/message/{ID - number}   - specify a number to get a message 
  
  method: 'GET',
  url: https://cheesy-pick-up-lines.p.rapidapi.com/message/random    - generate a random message 

*First time loading takes a couple of seconds to start the backend and fetch data from API - this is because of how Heroku Free plan works.
