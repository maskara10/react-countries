import { useState } from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import Textinput from '../components/Textinput';
import Country from '../components/Country';

import { allCountries } from '../data/countries';
import Countries from '../components/Countries';

export default function ReactCountriesPage() {
  const [countryFilter, setCountryFilter] = useState('');

  function handleCountryFilterChange(newCountryFilter) {
    setCountryFilter(newCountryFilter);
  }

  const countryFilterLowercase = countryFilter.trim().toLocaleLowerCase();

  const filteredCountries =
    countryFilterLowercase.length >= 3
      ? allCountries.filter(({ nameLowerCase }) => {
          return nameLowerCase.includes(countryFilterLowercase);
        })
      : allCountries;

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
        <Countries>
          <h2 className="text-center font-semibold">
            {filteredCountries.length} País(es)
          </h2>
          {filteredCountries.map(country => {
            return <Country key={country.id}>{country}</Country>;
          })}
        </Countries>
      </Main>
    </div>
  );
}
