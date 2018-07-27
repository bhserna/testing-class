# Test pure functions

Para cada uno de estos ejercicios implementa la función usando TDD.

### 1. Mostrar las 5 películas más populares

Dada la siguiente estructura de datos:

```js
movies = [
  { name: "Coco", totalViews: 145 },
  { name: "Avengers", totalViews: 25 },
  { name: "Pinocho", totalViews: 123 }
]

const top = getTopFive(movies);
```

### 2. Mostrar las 5 películas más populares (suponiendo que vienen de otro objeto)

Dada la siguiente estructura de datos:

```js
store = new Store([
  { name: "Coco", totalViews: 145 },
  { name: "Avengers", totalViews: 25 },
  { name: "Pinocho", totalViews: 123 }
])

const top = getTopFiveFromStore(store);
```

### 3. Mostrar las 5 películas más populares en un país

Dada la siguiente estructura de datos:

```js
movies = [
  { name: "Coco", views: [{country: "México"}, {country: "México"}, {country: "Canada"}]},
  { name: "Avengers", views: [{country: "Belice"}]},
  { name: "Pinocho", views: [{country: "Chile"}]}
]

const top = getTopFiveForCountry("Chile", movies);
```

### Extra: Mostrar las 5 películas más populares en un país con el número de views

Dada la siguiente estructura de datos:

```js
movies = [
  { name: "Coco", views: [{country: "México"}, {country: "Canada"}]},
  { name: "Avengers", views: [{country: "Belice"}]},
  { name: "Pinocho", views: [{country: "Chile"}]}
]

const top = printTopFiveForCountryWithViews("Chile", movies);

# Ej
# Pinocho (1)
```
