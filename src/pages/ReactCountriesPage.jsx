import { useState } from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import Textinput from '../components/Textinput';

import { allCountries } from '../data/countries';

export default function ReactCountriesPage() {
  const [countryFilter, setCountryFilter] = useState('Brazil');

  function handleCountryFilterChange(newCountryFilter) {
    setCountryFilter(newCountryFilter);
  }

  const countryFilterLowercase = countryFilter.toLocaleLowerCase();

  const filteredCountries =
    countryFilterLowercase.length >= 3
      ? allCountries.filter(({ nameLowerCase }) => {
          return nameLowerCase.includes(countryFilterLowercase);
        })
      : allCountries;

  console.log(filteredCountries);

  return (
    <div>
      <Header>Projeto React Countries</Header>
      <Main>
        <Textinput
          inputDescription="Informe o nome do País:"
          valueInput={countryFilter}
          onInputChanger={handleCountryFilterChange}
          id="id_input_text"
          autoFocus
        ></Textinput>
      </Main>
    </div>
  );
}
