import { memo, useCallback, useMemo, useState } from 'react'
import './App.css'
import ButtonWithModal from './ButtonWithModal'
import RefectorComponent from './RefectorComponent'
import SlowComponent from './SlowComponent'
import Modal from './Modal'
import AnotherSlowComponent from './AnotheSlowComponent'
const MemoisationSlowcomponent = memo(function modifiSlowcomponent({time}, custom){
  return <SlowComponent time={time} custom={custom}/>
});



const MemoAnotherComponent = memo(AnotherSlowComponent);
function Child() {
  return <div>i am a child</div>
}

function App() {
  
//   const {isOpen, open , close} = useModalDialog();// bad implemetation using with custom hook

//   return (
//     <>
//       <div>
//         something change
//       </div>

//       {/* <button onClick={open}>Open modal</button>
//       {isOpen && <Modal close = {close} />}   this is bad implementation */}

//       <ButtonWithModal />
//       <div>
//         something change
//       </div>
//       <SlowComponent/>
//     </>
//   )



// //using children prop
//   return (
//     <>
//       <RefectorComponent myChile={<div>Hellow</div>}>
//         <>
//           <div>
//             something is change
//           </div>
//           <ButtonWithModal/>
//           <div>
//             something is change
//           </div>
//           <SlowComponent/>
//         </>
//       </RefectorComponent>
//     </>
//   );



// //Memoisation
// const [isOpen , setIsOpen] = useState(false);
// const someFunction = useCallback(() => {}, []);
// const timeArray = useMemo(() => {
//   return [1000];
// } , [])

// return (
//   <>
//   <button onClick={() => setIsOpen(true)}>Open Modal</button>

//   {isOpen && <Modal close={() => setIsOpen(false)} />}
//       <div>
//         something is change
//       </div>
//       <div>
//         something is change
//       </div>
//       <MemoisationSlowcomponent time={timeArray} custom={someFunction}/>
//   </>
// );


const memoChild = useMemo(() => {
  return <Child/>
}, [])
const [isOpen , setIsOpen] = useState(false);
return (
  <>
  <button onClick={() => setIsOpen(true)}>Open Modal</button>

  {isOpen && <Modal close={() => setIsOpen(false)} />}
      <div>
        something is change
      </div>
      <div>
        something is change
      </div>
  <MemoAnotherComponent>
    {memoChild}
  </MemoAnotherComponent>
  </>
);

}

export default App
