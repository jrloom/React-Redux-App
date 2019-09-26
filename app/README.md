# Axios call

```js
  axios
    .get("https://ghibliapi.herokuapp.com/films")
    .then(resolve => console.log(resolve))
    .catch(error => console.log("ohmuhgawdno --> ", error));
```

https://ghibliapi.herokuapp.com/films

Data:

- id
- title
- description
- director
- producer
- relase_date
- rt_score

Also available
https://ghibliapi.herokuapp.com/people
https://ghibliapi.herokuapp.com/locations
https://ghibliapi.herokuapp.com/species
https://ghibliapi.herokuapp.com/vehicles