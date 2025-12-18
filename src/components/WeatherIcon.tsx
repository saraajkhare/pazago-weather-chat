type Props = { text: string };

const WeatherIcon = ({ text }: Props) => {
  if (/rain/i.test(text)) return <span>🌧️</span>;
  if (/cloud/i.test(text)) return <span>☁️</span>;
  if (/sun|clear/i.test(text)) return <span>☀️</span>;
  if (/snow/i.test(text)) return <span>❄️</span>;
  return <span>🌦️</span>;
};

export default WeatherIcon;
