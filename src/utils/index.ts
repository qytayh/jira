import { useEffect, useState } from "react";

export const isFalsy = (value:unknown) => (value === 0 ? false : !value);

export const isVoid = (value:unknown) => value===undefined||value===null||value===''

//在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object:{[key:string]:unknown}) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback:()=>void) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useDebounce = <D>(value:D, delay?:number):D=> {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    //在每次value变化后设置一个定时器
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    // 每次在上一个useEffect处理完以后啊再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};
