## 1. Calculate Electricity Bill

```js
function calculateElectricityBill(units) {
  const slabs = [
    { limit: 100, rate: 5 },
    { limit: 100, rate: 7 },
    { limit: 100, rate: 10 },
    { limit: Infinity, rate: 12 }
  ];

  let total = 0;
  let remaining = units;

  for (let slab of slabs) {
    const used = Math.min(remaining, slab.limit);
    total += used * slab.rate;
    remaining -= used;
    if (remaining <= 0) break;
  }

  return total;
}

console.log(calculateElectricityBill(50));   // 250
```

**Other Solution**

```js
function calculateElectricityBill(units) {
  let total = 0;

  if (units <= 100) {
    total = units * 5;
  } else if (units <= 200) {
    total = (100 * 5) + (units - 100) * 7;
  } else if (units <= 300) {
    total = (100 * 5) + (100 * 7) + (units - 200) * 10;
  } else {
    total = (100 * 5) + (100 * 7) + (100 * 10) + (units - 300) * 12;
  }

  return total;
}

console.log(calculateElectricityBill(50));
```

## 2. Check if a Character is Uppercase, Lowercase, Digit, or Special Character

```js
function checkChar(char) {
  if (/^[0-9]$/.test(char)) {
    console.log("Number");
  } else if (/^[A-Z]$/.test(char)) {
    console.log("Uppercase");
  } else if (/^[a-z]$/.test(char)) {
    console.log("Lowercase");
  } else if (/^[^a-zA-Z0-9]$/.test(char)) {
    console.log("Special Character");
  }
}
```

## 3. Calculate Income Tax Based on Slabs

```js
function sumOfIncome(incomes) {
  const slabs = [
    { min: 0, max: 250000, rate: 0 },
    { min: 250000, max: 500000, rate: 5 },
    { min: 500000, max: 1000000, rate: 20 },
    { min: 1000000, max: Infinity, rate: 30 },
  ];
  let tax = 0;
  for (const slab of slabs) {
    if (incomes > slab.min) {
      const taxableIncome = Math.min(incomes, slab.max) - slab.min;
      tax += (taxableIncome * slab.rate) / 100;
    } else {
      break;
    }
  }
  return tax;
}
```

