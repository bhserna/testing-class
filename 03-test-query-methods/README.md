# Test query methods

Para cada uno de estos ejercicios implementa la función usando TDD.

### 1. Mostrar las películas que hay en existencia.

```js
movies = [
  { id: 1234, name: "Coco" },
  { id: 3453, name: "Avengers" },
  { id: 9835, name: "Pinocho" }
]

const cinema = new Cinema(movies);
cinema.getMovies()
```

### 2. Mostrar las películas que hay en existencia (pidiéndolas a otro objeto).

Suponiendo que los datos se obtienen de forma síncrona.

```js
store = new Store([
  { id: 1234, name: "Coco" },
  { id: 3453, name: "Avengers" },
  { id: 9835, name: "Pinocho" }
])

const cinema = new Cinema(store);
cinema.getMovies()
```

### 3. Mostrar las categoría disponibles.

Regresa una lista con las categorías, de las que se tienen películas.

```js
movies = [
  { id: 1234, name: "Coco", categories: ["kids"] },
  { id: 3453, name: "Avengers", categories: ["action", "comedy"] },
  { id: 9835, name: "Pinocho", categories: ["kids"] }
]

# Ej.

const cinema = new Cinema(movies)
cinema.availableCategories()
```

### 4. Mostrar las categoría disponibles (con las películas viniendo de otro objeto).

Regresa una lista con las categorías, de las que se tienen películas.

```js
store = new Store([
  { id: 1234, name: "Coco", categories: ["kids"] },
  { id: 3453, name: "Avengers", categories: ["action", "comedy"] },
  { id: 9835, name: "Pinocho", categories: ["kids"] }
])

# Ej.

const cinema = new Cinema(store)
cinema.availableCategories()
```

### Extra: Mostrar las categoría con el número de películas disponibles.

Dados los siguientes datos...

```js
movies = [
  { id: 1234, name: "Coco", categories: ["kids"] },
  { id: 3453, name: "Avengers", categories: ["action", "comedy"] },
  { id: 9835, name: "Pinocho", categories: ["kids"] }
]
```

Poder mostrar:

```
kids (2)
action (1)
comedy (1)
```
