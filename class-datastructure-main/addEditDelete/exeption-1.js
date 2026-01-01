function validateAge(age) {
    if (age < 18) {
      throw new RangeError("under age");
    }
    return true;
  }
  
  try {
    validateAge(17);
  } catch (error) {
    console.error("type:", error.name);
    console.error(" message:", error.message);
  }



  const numbers = [1, 2, 3];

try {
  if (numbers[5] === undefined) {
    throw new Error("range error");
  }
  console.log(numbers[5]);
} catch (error) {
  console.error("error:", error.message);
}

const students = ["omid", "john", "jane", "ali","mohammad"];

try {
 
  console.log(students[5]);
} catch (error) {
  console.error(  error.message);
}

console.log("next");

  