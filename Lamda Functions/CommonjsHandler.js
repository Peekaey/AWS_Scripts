// using index.js instead of mjs and commonjs as outlined in package.json
// "type": "commonjs",

exports.handler = async (event, context) => {
  console.log("Start of function");

  await functionname(); // async function functionname()

  console.log("End of Function");
};
