### 1. Print Numbers from 1 to N

```js
const num = 10;

for (let i = 1; i <= num; i++) {
  console.log(i);
}
```

---

### 2. Print Numbers from N to 1 without changing the loop condition of above question

```js
const num = 10;

for (let i = 1; i <= num; i++) {
  console.log(num - i + 1);
}
```

---

### 3. Print All Even Numbers from 1 to N

```js
const num = 10;

for (let i = 1; i <= num; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

**Other Solution**

```js
function printEvenNumbers(n) {
  for (let i = 2; i <= n; i += 2) {
    console.log(i);
  }
}
```

---

### 4. Sum of First N Natural Numbers

**Brute Force Solution and - time complexity is O(n)**

```js
const num = 1000000000n;
let sum = 0n;

for (let i = 1n; i <= num; i++) {
  sum += i;
}

console.log(sum);
```

**Optimized Solution**

```js
const num = 1000000000;
let sum = (num * (num + 1)) / 2;

console.log(sum);
```

---

### 5. Product (Factorial) of N

```js
const num = 10n;
let product = 1n;

for (let i = 1n; i <= num; i++) {
  product *= i;
}

console.log(product);
```

**Other Solution**

```js
function factorial(n) {
  if (n < 0) return undefined; // Factorial is not defined for negative numbers
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(10));
```

---

### 6. Sum of All Even Numbers up to N

```js
const num = 10n;
let sum = 0n;

for (let i = 1n; i <= num; i++) {
  if (i % 2n === 0n) sum += i;
}

console.log(sum);
```

**Other Solution**

```js
function sumOfEvenNumbers(n) {
  let sum = 0;
  for (let i = 2; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}

console.log(sumOfEvenNumbers(10));
```

**Other Solution**

```js
function sumOfEvenNumbers(n) {
  let m = n % 2 === 0 ? n : n - 1;
  return ((m / 2) * (m + 2)) / 2;
}

console.log(sumOfEvenNumbers(10));
```

---

### 7. Print Squares of Numbers from 1 to N

```js
for (let i = 1; i <= num; i++) {
  // console.log(i ** 2n);
  // console.log(i * i);
  console.log(Math.pow(i, 2));
}
```

---

### 8.  Print cubes of numbers from 1 to N

```js
function printCubes(n) {
  if (n < 1 || !Number.isInteger(n)) {
    throw new Error("Input must be a positive integer");
  }
  for (let i = 1; i <= n; i++) {
    console.log(i * i * i);
  }
}

console.log(printCubes(10));
```

---

### 9. Print all even numbers between 1 to n which are perfect squares

```js
function printEvenPerfectSquares(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 && Number.isInteger(Math.sqrt(i))) {
      console.log(i);
    }
  }
}

console.log(printEvenPerfectSquares(10))
```