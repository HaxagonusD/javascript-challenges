interface Eventer {
  events: { [propName: string]: Array<() => void> };
  on: (event: string, ...callbacks: Array<() => void>) => void;
  trigger: (event: string) => void;
  [propName: string]: any;
}

const addEventing = function (obj: object): Eventer {
  const on = (event: string, ...callbacks: Array<() => void>) => {
    this.events[event] = callbacks;
  };
  const trigger = (event: string) => {
    this.events[event].forEach(function (func: () => void): void {
      func();
    });
  };
  return { ...obj, events: {}, on: on, trigger: trigger };
  //   class Eventer implements Eventer {
  //     events: object = {};
  //     on = (event: string, ...callbacks: Array<() => void>): void => {
  //       this.events[event] = callbacks;
  //     };
  //     trigger = (event: string): void => {
  //       this.events[event].forEach(function (func: () => void): void {
  //         func();
  //       });
  //     };
  //     constructor(something: object){
  //         this.something = something;
  //     }
  //   }
};

module.exports = addEventing;
