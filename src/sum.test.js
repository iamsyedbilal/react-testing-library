import Sum from "./Sum";

//* This function have 3 parameters
//1. Description what you have been checking
//2. Callback Function
//3. SetTimeOut which is optional
test("Testing for Sum Function", () => {
  //* expect toBe is the part of jest
  //expect is the function where we check the input
  //toBe is the function where we check the output
  expect(Sum(10, 10)).toBe(20);
});
