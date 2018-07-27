# Test query methods

Para cada uno de estos ejercicios implementa la función usando TDD.

### 1. Mostrar las películas que hay en existencia.

Con los siguientes atributos disponibles: `id`, `name`, `averageScore`

```js
movies = [
  { id: 1234, name: "Coco", scores: [4, 5, 3] },
  { id: 3453, name: "Avengers", scores: [3, 2.5, 4, 5] },
  { id: 9835, name: "Pinocho", scores: [2, 1, 4] }
]

const cinema = new Cinema(movies);
cinema.getMovies()
```

### 2. Mostrar las películas que hay en existencia (pidiéndolas a otro objeto).

Con los siguientes atributos disponibles: `id`, `name`, `averageScore`

```js
store = new Store([
  { id: 1234, name: "Coco", scores: [4, 5, 3] },
  { id: 3453, name: "Avengers", scores: [3, 2.5, 4, 5] },
  { id: 9835, name: "Pinocho", scores: [2, 1, 4] }
])

const cinema = new Cinema(store);
cinema.getMovies()
```

### 3. Mostrar las categoría disponibles.

Regresa una lista con las categorías, de las que se tienen películas
ordenadas alfabéticamente.

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
