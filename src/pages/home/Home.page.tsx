import { PrimaryButton, SecondaryButton } from '@/shared/controls';
import { Spinner } from '@/shared/display';
import { CheckIcon, CloseIcon, LeftArrowIcon } from '@/shared/icons';
import { useState } from 'react';

export const HomePage = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleDecrementCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <main className="w-screen h-screen flex items-center justify-center flex-col gap-2 bg-zinc-200">
      <h1>Counter: {counter}</h1>
      <section className="mt-2 flex flex-row gap-4">
        <SecondaryButton onClick={handleDecrementCounter}>
          Decrement (-1)
        </SecondaryButton>
        <PrimaryButton onClick={handleIncrementCounter}>
          Increment (+1)
        </PrimaryButton>
      </section>
      <section className="mt-6 flex items-center justify-center gap-2">
        <h2>Spinner:</h2>
        <Spinner />
      </section>
      <section className="mt-6 flex items-baseline gap-2">
        <h2>Icons:</h2>
        <CheckIcon className="h-4 fill-blue-500" />
        <CloseIcon className="h-4 fill-blue-500" />
        <LeftArrowIcon className="h-4 fill-blue-500" />
      </section>
    </main>
  );
};

export default HomePage;
