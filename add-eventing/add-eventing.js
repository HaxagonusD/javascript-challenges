var addEventing = function (obj) {
  let someObject = {
    ...obj,
    events: {},
    on: (event, ...callbacks) => {
      //   this.events[event] = callbacks;
      console.log("+++++++++++++", this);
    },
    trigger: (event) => {
      //   this.events[event].forEach((func) => func());
      console.log("---------------", this);
    },
  };
  someObject.on = someObject.on.bind(someObject);
  someObject.trigger = someObject.trigger.bind(someObject);
  someObject.on()
  return someObject;
};
module.exports = addEventing;
