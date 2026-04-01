import { useEffect, useState } from "react";

const colors = {
   red: 'bg-red-500 animate-pulse',
   yellow: 'bg-yellow-500 animate-pulse',
   green: 'bg-green-500 animate-pulse',
}

type TrafficLightColor = keyof typeof colors;

export const useTraficLight = () => {
   const [light, setLight] = useState<TrafficLightColor>('red');
   const [countdown, setCountdown] = useState(5)

   //! useffect con tareas especificas
   //>< countdown effect
   useEffect(() => {
      if(countdown === 0) return;
      //~ useEffect using simple chores
      
      const intervalId = setInterval(()=> {
         // console.log('[] setInterval llamado');
         setCountdown(prev => prev -1);
      }, 1000);

      return () => {
         // console.log('Cleanup effect');
         clearInterval(intervalId);
      }

   }, [countdown]);

   //>< change light color effect
   useEffect(() => {
      if(countdown > 0) return;
      setCountdown(5);

      switch(light) {
         case 'red':
            setLight('green');
            break;
         case 'yellow':
            setLight('red');
            break;
         case 'green':
            setLight('yellow');
            break;
      }
   }, [countdown, light]);


   return {
      // props
      light,
      countdown,
      colors,
      // computed: props que puedo calcular en el momento
      percentage: (countdown / 5) * 100,
      greenLight: light === 'green' ? colors.green : 'bg-gray-500',
      yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
      redLight: light === 'red' ? colors.red : 'bg-gray-500',
      // methods
   }

}
