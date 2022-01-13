let arr = [11, 42, 303, 154, 551, 16]
let fib1 = 1
let fib2 = 1
let i = 0
let s
function sort(arr) {
 return arr.sort(() => )
}

function test(a) {
 if (a.toString) {
  return a
 }
}

function fib(n) {
 if (n<2) { return 1}
 while (i < n-2) {
  s = fib1 + fib2
  fib1 = fib2
  fib2 = s
  i++
 }
 return s
}

function recfib(n) {
 if (n in [1,2]) { return 1}
 return recfib(n-1) + recfib(n-2)
}
