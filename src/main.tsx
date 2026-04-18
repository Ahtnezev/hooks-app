import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner';

// import { HooksApp } from './HooksApp'
// import { MemoHook } from './06-memos/MemoHook'
import './index.css'
import { ProfessionalApp } from './09-useContext/ProfessionalApp';
// import { ClientInformation } from './08-use-suspense/ClientInformation';
// import { getUserAction } from './08-use-suspense/api/get-user.action';
// import { MemoCounter } from './06-memos/MemoCounter'
// import { InstagromApp } from './07-useOptimistic/InstagromApp'
// // import { FocusScreen } from './04-useRef/FocusScreen'
// import { TasksApp } from './05-useReducer/TaskAp'
// import { ScrambleWords } from './05-useReducer/ScrambleWords'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
// import { PokemonPage } from './03-examples/PokemonPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Toaster />
   {/* <HooksApp /> */}
   {/* <TrafficLightWithHook /> */}
   {/* <PokemonPage /> */}
   {/* <FocusScreen /> */}
   {/* <TasksApp /> */}
   {/* <ScrambleWords /> */}
   {/* <MemoHook /> */}
   {/* <MemoCounter /> */}
   {/* <InstagromApp /> */}
   {/* <Suspense fallback={
    <div className='bg-gradient flex flex-col'>
      <h1 className='text-2xl'>Cargando...</h1>
    </div>
   }>
    <ClientInformation getUser={ getUserAction(1000) } />
   </Suspense> */}
   <ProfessionalApp />
  </StrictMode>,
)
