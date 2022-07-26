

// Filter function

Array.prototype.myFilter = function (cb) {
	let result = [];
	for (let i = 0; i < this.length; i++) {
		if (cb(this[i], i, this)) {
			result.push(this[i]);
		}
	}
	return result;
};

// Map funtion

Array.prototype.myMap = function (cb) {
	let result = [];
	for (let i = 0; i < this.length; i++) {
		result.push(cb(this[i], i, this));
	}
	return result;
};

// Reduce Function

Array.prototype.myReduce = function (cb, initValue) {
  const hasInit = initValue !== undefined;
  let prev = hasInit ? initValue : this[0];
  for (let i = hasInit ? 0 : 1; i < this.length; i++) {
    if (prev === undefined) {
      prev = this[0];
      continue;
    }
    prev = cb(prev, this[i], i, this);
  }
  return prev;
};

let arr = [1,2,3,4,5,6,7]

console.log(arr.myReduce((prev, curr) => prev + curr, 0))
