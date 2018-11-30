import { optional, Type } from "../";

const test = { foo: "bar" };
const foo = optional(test, "foo", Type.STRING);

console.log(foo);
