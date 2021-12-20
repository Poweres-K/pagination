const paginate = (dataArray, numberofItems) => {
  const result = [];
  for (var i = 0; i < dataArray.length; i += numberofItems) {
    result.push(dataArray.slice(i, i + numberofItems));
  }
  return result;
};

export default paginate;
