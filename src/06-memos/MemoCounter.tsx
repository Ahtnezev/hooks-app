import { useCounter } from "@/hooks/useCounter"
import { useMemo } from "react";

const heavyStuff = (interationNumber: number) => {
   console.time('Have_stuff_started');
   for (let index = 0; index < interationNumber; index++) {
      console.log('ahi vamos...');
   }
   console.timeEnd('Have_stuff_started');

   return `${interationNumber} iteraciones realizadas`;
}

export const MemoCounter = () => {
   const { counter, increment } = useCounter(40_000); // 40000 instead of
   const { counter:counter2, increment:increment2 } = useCounter(10);
   
   //~  useCallback memoriza funciones
   // useMemo memoriza valores (valor de retorno)
   const myHeavyValue = useMemo(() => heavyStuff(counter), [counter]);

   return (
      <>
         <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Memo - useMemo - {myHeavyValue}</h1>

            <hr />

            <h4>Counter: {counter}</h4>
            <h4>Counter2: {counter2}</h4>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer" onClick={increment}>+1</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer" onClick={increment2}>+1 - Counter2</button>
         </div>
      </>
   )
}
