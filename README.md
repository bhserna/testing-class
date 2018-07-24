# Testing

## Test first

* Writing a failing automated test before changing any code.
* Comes from Extreme Programing (XP)
* XP values are Comunication, Simplicity, Feeback, Courage and Respect.

### Test first helps to address many problems at once:

**1. Scope creep**

No more just in case code, if you need to put that other code in, write another test after you've made this one work.

**2. Coupling and cohesion** 

If it's hard to write a test, it's a signal that you have a design problem. Loosely coupled, highly cohesive code is easy to test.

**3. Trust**

It's hard to trust the author of code that doesn't work. Writing clean code that works and demonstrating your intentions with automated tests, give your teammates a reason to trust you.

**4. Rhythm**

It's easy to get lost for hours when you are coding. When programming test-first, it's clear what to do next: either write another test or make the broken test work. Soon this develops into a netural and efficient rhythm...

test, code, refactor, test, code, refactor...


## Tips for unit tests

**Public function calls**

1. For Query functions -> Assert result
2. For Command functions -> Assert direct public side effects

**Private function calls**

Ignore them.

**Function calls to other modules/objects**

1. For Query functions -> Ignore them
2. For Command functions -> Expect the function was called right
