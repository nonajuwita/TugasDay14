function wrapInArray<T>(item: T): T[] {
    return [item];
}

export {};
const numberArray = wrapInArray(42); // [42]
const stringArray = wrapInArray("Hello"); // ["Hello"]
const booleanArray = wrapInArray(true); // [true]


