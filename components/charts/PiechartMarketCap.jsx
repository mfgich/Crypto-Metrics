import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

const Piechart = ({ chartTitle, cryptos }) => {
  /** Run Array Data from cryptos-prop through forEach and push data*/
  const currencySymbols = [];
  const marketCap = [];
  // colors are from: https://coolors.co/palettes/trending
  const colorArray = [
    '#f4a261',
    '#264653',
    '#2a9d8f',
    '#e9c46a',
    '#e76f51',

    '#d4e09b',
    '#f6f4d2',
    '#cbdfbd',
    '#f19c79',
    '#a44a3f',

    '#79addc',
    '#ffc09f',
    '#ffee93',
    '#fcf5c7',
    '#adf7b6',
  ];
  try {
  cryptos.forEach((coin, index) => {
    //console.log(`marketcap_dominance:${index}`, coin.market_cap);
    currencySymbols.push(coin.symbol);
    marketCap.push(coin.market_cap);
    if(index == 14) throw new Error
  });
} catch (E) {
    
  console.log('To much IPs in block.');
  
}

  const marketCapDonut = {
    labels: currencySymbols,
    datasets: [
      {
        data: marketCap,
        backgroundColor: colorArray,
        hoverBackgroundColor: colorArray,
      },
    ],
  };

  return (
    <div className="flex-item">
      <div className="card">
        <h2 className="text-centered">{chartTitle}</h2>
        <Doughnut data={marketCapDonut} width={50} height={50} />
      </div>
    </div>
  );
};

export default Piechart;
