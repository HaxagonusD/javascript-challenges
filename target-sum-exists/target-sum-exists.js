const targetSumExistsInTwoNumbers = (list, target) => {
  const sum = list.reduce((acc, curr) => acc + curr,0);
  if(sum === target ){
    return true;
  } else if(sum > target){                 
    targetSumExistsInTwoNumbers(list, target - sum)
  }

};

const targetSumExistsInThreeNumbers = (list, target) => {
  return false;
};

module.exports = {
  targetSumExistsInTwoNumbers,
  targetSumExistsInThreeNumbers,
};
