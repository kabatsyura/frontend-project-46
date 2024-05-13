const showDifference = (dataOfFile1, dataOfFile2, properties) => {
  let result = ['{'];
  for (let property of properties) {
    if (!Object.hasOwn(dataOfFile2, property)) {
      result.push(` - ${property}: ${dataOfFile1[property]}`);
    } else if (!Object.hasOwn(dataOfFile1, property)) {
      result.push(` + ${property}: ${dataOfFile2[property]}`);
    } else {
      if (dataOfFile1[property] === dataOfFile2[property]) {
        result.push(`   ${property}: ${dataOfFile1[property]}`);
      } else {
        result.push(` - ${property}: ${dataOfFile1[property]}`);
        result.push(` + ${property}: ${dataOfFile2[property]}`);
      }
    }
  }
  
  result.push('}');
  
  return result.join('\n');
};

export default showDifference;
