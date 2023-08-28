type Fn<T,U> = (...args: T[]) => U

function once<T,U>(fn: Fn<T,U>): Fn<T,U | undefined> {
  let hasBeenCalled: boolean = false;
  let result: U; 
    
  return function (...args: T[]): U | undefined {
    if(!hasBeenCalled) {
      hasBeenCalled = true;
      result = fn(...args)
      return result
    }
      return undefined
  };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */