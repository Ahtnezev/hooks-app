import { useCallback, useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubtitle } from "./ui/MySubtitle";

// const wasup = (myValue: string) => {
//     console.log('CALL a mi API ' + myValue);
// }

export const MemoHook = () => {
    const [title, setTitle] = useState('Hola, ');
    const [subTitle, setSubTitle] = useState('Mundo ');

    // this assign new space in memory (if function is inside of component), we need to use usecallback
    const handleMyAPICall = useCallback(() => {
        console.log('-- llamar a mi api - ', subTitle);
    }, [subTitle]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h1 className="text-2xl font-thin text-white">MemoApp</h1>

        <MyTitle title={title} />
        <MySubtitle subtitle={subTitle} callMyAPI={handleMyAPICall} />

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => setTitle('Hello, ' + new Date().getTime() )}>
            Cambiar titulo
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => setSubTitle('World' )}>
            Cambiar subtitulo
        </button>

    </div>
  ) 
}
