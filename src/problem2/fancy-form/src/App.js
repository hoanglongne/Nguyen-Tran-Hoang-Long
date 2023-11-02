import CurrencyContainer from './components/CurrencyContainer';
import Title from './components/Title';
import CurrencyBox from './components/CurrencyBox';
import SwapButton from './components/SwapButton';
import Modal from './components/Modal';
import LoadingScene from './components/LoadingScene';
import { useState } from 'react';


function App() {
  const [price, setPrice] = useState(0.208)
  const [outputPrice, setOutputPrice] = useState(0.990);
  const [outputAmount, setOutputAmount] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(true);
    }, 4000); // Delay for 3 seconds
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-10 justify-start items-center font-sans text-[#f2eed5] w-screen h-screen pt-[10vh] bg-[#191811]">
      <Title>Start swapping coins at the best rates </Title> 
      <div className='w-[80vw] h-[40vh] md:w-[30vw] p-3 border-[2px] border-[#f2eed5] bg-[#191811] rounded-xl'>
        <form onSubmit="" className='font-light flex flex-col h-full gap-3'>
          <CurrencyContainer>
            <CurrencyBox id="input" outputBox={false} outputAmount={outputAmount} setOutputAmount={setOutputAmount} price={price} setPrice={setPrice} outputPrice={outputPrice} setOutputPrice={setOutputPrice} />  
            <CurrencyBox id="output" outputBox={true} outputAmount={outputAmount} setOutputAmount={setOutputAmount} price={price} setPrice={setPrice} outputPrice={outputPrice} setOutputPrice={setOutputPrice} />  
          </CurrencyContainer>
          <SwapButton openModal={openModal}>CONFIRM SWAP</SwapButton>
          {isLoading && <LoadingScene />}
          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </form>
      </div>
    </div>
  );
}

export default App;
