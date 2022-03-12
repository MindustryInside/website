import { useEffect, useState } from 'react';
import Loader from '../components/UI/Loader/Loader';
import './ChartPage.scss';
import { APIservice } from '../API/APIservice';
import Select from '../components/UI/Select/Select';
import { option } from '../ts/interfaces';
import Chart from '../components/Chart';

const ChartPage = () => {
  const [data, setData] = useState([{}]);
  const [options, setOptions] = useState<option[]>([{id: 'default', value: 'Загрузка...'}]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentOption, setCurrentOption] = useState(0);

  const reColor = /\[[^\]]*]/;

  const runCall = async () => {
    setIsLoading(true);
    const data = await APIservice.getData(
      'https://cors-everywhere.herokuapp.com/http://api.mindustry-inside.ru:48010'
    );
    const options: option[] = [];
    for (let i = 0; i <= data.length - 1; i++) {
      options.push({ value: data[i].name.split(reColor).join(''), id: `${i}` });
    }

    const header = [];
    for (let i = 0; i <= 4; i++) {
      header.push(data[0].data[i].time);
    }

    const chartData = [];
    for (let i = 0; i < header.length; i++) {
      const time = new Date(header[i] * 1000);
      const newLine = {
        name: `${time.getHours()}/${time.getMinutes()}/${time.getSeconds()}`,
        online: data[currentOption].data[i].online,
      };
      chartData.push(newLine);
    }

    setOptions(options);
    setData(chartData);
    setIsLoading(false);
  };

  useEffect(() => {
    runCall();
    const timer = setInterval(() => {
      runCall();
    }, 20000);

    return () => clearInterval(timer);
  }, [currentOption]);

  return (
    <div className='chart-wrapper'>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='chart'>
          <Chart data={data} />
          <span>*Формат даты: чч/мм/сс</span>
        </div>
      )}
      <Select
        options={options}
        getIndex={index => setCurrentOption(index)}
        getValue={() => {}}
      />
    </div>
  );
};

export default ChartPage;
