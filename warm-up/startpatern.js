// 1. Print a square star pattern with `n` rows and `n` columns.
// Example for n = 4:
// ****
// ****
// ****
// ****
n = 6;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row = row + "*";
  }
  // console.log(row);
}

// 2. Print a right triangle star pattern.
// Example for n = 4:
// *
// **
// ***
// ****

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + "*";
  }
  // console.log(row);
}

// 3. Print a number triangle where each row prints numbers from 1 to row number.
// Example for n = 4:
// 1
// 12
// 123
// 1234
for (let i = 1; i < n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + j;
  }
  // console.log(row);
}

// 4. Print a number triangle where each row repeats the row number.
// Example for n = 4:
// 1
// 22
// 333
// 4444
for (let i = 1; i < n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + i;
  }
  // console.log(row);
}

// 5. Print a decreasing number triangle.
// Example for n = 4:
// 1234
// 123
// 12
// 1

for (let i = n; i > 0; i--) {
  let row = "";
  for (let j = i; j > 0; j--) {
    row = row + j;
  }
  // console.log(row);
}

// 6. Print a right-aligned triangle of stars.
// Example for n = 4:
//    *
//   **
//  ***
// ****

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i - 1; j++) {
    row = row + " ";
  }
  for (let k = 0; k <= i; k++) {
    row = row + "*";
  }
  // console.log(row);
}

// 7. Print a binary pattern starting with 1 on every row.
// Example for n = 4:
// 1
// 10
// 101
// 1010

for (let i = 1; i <= n; i++) {
  let row = "";
  let toggel = 1;
  for (let j = 1; j <= i; j++) {
    row = row + toggel;
    if (toggel == 1) {
      toggel = 0;
    } else {
      toggel = 1;
    }
  }
  // console.log(row);
}

// 8. Print a binary pattern where the toggle continues across rows.
// Example for n = 4:
// 1
// 01
// 010
// 1010

let toggeln = 1;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + toggeln;
    if (toggeln == 1) {
      toggeln = 0;
    } else {
      toggeln = 1;
    }
  }
  console.log(row);
}
