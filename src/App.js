import CountdownTimer from './components/CountDownTimer/CountDownTimer';

function App() {
  const targetDate = new Date('2023-09-01T09:00:00+03:00').getTime();
  // const targetDate = new Date('2023-08-31T18:57:00+03:00').getTime();
  return (
    <div>
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
}

export default App;
