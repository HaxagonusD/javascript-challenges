// const mostRecurrent = (set) => {
// let countMe = {}
// set.forEach((item)=>{
//   countMe.hasOwnProperty(item) ? countMe[item]++ : countMe[item] = 1;
// })

// console.log(Object.entries(countMe));
const mostRecurrent = (set) => {
  return set
    .sort(
      (a, b) =>
        set.filter((v) => v === a).length - set.filter((v) => v === b).length
    )
    .pop();
};

// }
// mostRecurrent([1, 2, 3, 4, 3])
module.exports = mostRecurrent;
