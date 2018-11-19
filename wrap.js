const wrap = (line, maxLen) => {
  if (line.length <= maxLen) {
    return line;  
  }

  const lineArr = line.split(' ');
  let eachLine = '';
  let finalArr = [];

  for (let i = 0; i < lineArr.length; i++) {
    if (lineArr[i].length <= (maxLen - eachLine.length)) {
      eachLine += `${lineArr[i]} `;
    }
    else {
      finalArr.push(eachLine);
      eachLine = `${lineArr[i]} `;
    }
  }
  finalArr.push(eachLine);
  return finalArr.join('\n').trimEnd();
};

module.exports = wrap;
