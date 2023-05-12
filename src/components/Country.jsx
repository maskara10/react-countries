import Item from './Item';

export default function Country({ children: country = null }) {
  if (!country) {
    return <div>Impossivel rederizar o país</div>;
  }

  const { name, capital, region, population, area, flag } = country;
  const densidadeGeo = population / area;
  return (
    <div className="border p-2 flex flex-row items-center space-x-2 m-2 text-sm">
      <img className="w-48" src={flag} alt={name} />
      <ul>
        <li>
          <Item label="Nome: ">{name}</Item>
        </li>
        <li>
          <Item label="Capital: ">{capital}</Item>
        </li>
        <li>
          <Item label="Região: ">{region}</Item>
        </li>
        <li>
          <Item label="População: ">{population}</Item>
        </li>
        <li>
          <Item label="Area: ">{area}</Item>
        </li>
        <li>
          <Item label="Desidade Geografica: ">{densidadeGeo}</Item>
        </li>
      </ul>
    </div>
  );
}
