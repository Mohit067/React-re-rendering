import './App.css'
import ButtonWithModal from './ButtonWithModal'
import RefectorComponent from './RefectorComponent'
import SlowComponent from './SlowComponent'


function App() {
  
  // const {isOpen, open , close} = useModalDialog();// bad implemetation using with custom hook

  // return (
  //   <>
  //     <div>
  //       something change
  //     </div>

  //     {/* <button onClick={open}>Open modal</button>
  //     {isOpen && <Modal close = {close} />}   this is bad implementation */}

  //     <ButtonWithModal />
  //     <div>
  //       something change
  //     </div>
  //     <SlowComponent/>
  //   </>
  // )




  return (
    <>
      <RefectorComponent myChile={<div>Hellow</div>}>
        <>
          <div>
            something is change
          </div>
          <ButtonWithModal/>
          <div>
            something is change
          </div>
          <SlowComponent/>
        </>
      </RefectorComponent>
    </>
  );
}

export default App
