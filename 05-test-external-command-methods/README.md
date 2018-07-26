# Test External Command Methods

Para cada uno de estos ejercicios implementa la función usando TDD.

### 1. Agregar una película.

- Una película se crea con un nombre
- Regresa un error si la película no tiene nombre
- Agrega un ID unico a la película

```js
store = new Store

# Adentro se manda llamar el store para que almacene la información
cinema.addMovie({name: "Dumbo"})

```

### 2. Eliminar una película

```js
store = new Store

# Adentro se manda llamar el store para que remueva la película
cinema.removeMovie(movieId)
```

### 3. Guardar el score de una película

- El score de una película solo puede estar entre 1 y 5, si esta fuera
  de rango no se guarda nada.
- Se debe poder obtener el score guardado como atributo de la película.

```js
store = new Store

# Adentro se manda llamar el store para que guarde la información
cinema.addScore(movieId, 4.5)

#....

movie.score # => 4.5
```

### Extra: Cambiar el nombre de una película

- Regresa un error si se intenta guardar con un nombre vacío
