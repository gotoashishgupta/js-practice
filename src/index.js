import "./styles.css";
console.clear();
const print = (m) => {
  const preEl = document.createElement("pre");
  const msgEl = document.createTextNode(`${m}`);
  preEl.appendChild(msgEl);
  document.getElementById("app").appendChild(preEl);
  console.log(m);
  return m;
};

print(`Hi Welcome!`);
const in_x1 = ["a", "z", "z", "a", "a", "a", "z", "z", "a", "z", "z"];
const in_x2 = 2;
const out_x1 = 6;
// ["z", "z", "z", "z", "a", "a", "z", "z", "a", "z", "z"]; // len: 4, idx: 0 and 3
// ["a", "z", "z", "a", "a", "z", "z", "z", "z", "z", "z"]; // len: 6, idx: 5 and 8

const in_y1 = ["a", "z", "a", "a", "z", "z", "a", "z", "z", "a", "a", "z", "z"];
const in_y2 = 3;
const out_y1 = 9;
/**
 * Find max length of subarray with all consecutive 'z's after replacing 'a's
 * with 'z's k times
 * @param {array} x input array
 * @param {number} k number of replacements
 */
const maxContinuousZsAfterReplacement = (x, k) => {
  let result;
  // write your code here
  return result;
};

print(
  `Test 1 Result: ${maxContinuousZsAfterReplacement(in_x1, in_x2) === out_x1}`
);
print(
  `Test 2 Result: ${maxContinuousZsAfterReplacement(in_y1, in_y2) === out_y1}`
);
