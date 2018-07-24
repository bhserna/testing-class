# Testing

## Tips for unit tests

### Public function calls

1. For Query functions -> Assert result
2. For Command functions -> Assert direct public side effects

### Private function calls

Ignore them.

### Function calls to other modules/objects

1. For Query functions -> Ignore them
2. For Command functions -> Expect the function was called right
