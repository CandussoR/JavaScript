const thisIsAReallyLongFunctionName = () => {
  sentence = 'And the input gets longer';
  for (let i = 0; i < 100; i++) {
    sentence += ' and longer';
  }
  return sentence;
}

/*
 Reassign to a variable with a short name, but without parenthesis
 so that it holds a reference to the function itself, and not to
 what it returns when called.
 */
const short = thisIsAReallyLongFunctionName;

// gets called as every function.
console.log(short());

// to remember what is the function real name
console.log(short.name);
