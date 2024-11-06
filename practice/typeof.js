function betterTypeOf(value) {
    if (Array.isArray(value)) {
        console.log("array");
    }
    if (value === null) {
        console.log("null");
    }
    console.log(typeof value);
}



betterTypeOf(1); // 'number'
betterTypeOf("hello"); // 'string'
betterTypeOf(true); // 'boolean'
betterTypeOf(""); // 'string'
betterTypeOf([1, 2, 3]); // 'array'
betterTypeOf(["a", "b", "c"]); // 'array'
