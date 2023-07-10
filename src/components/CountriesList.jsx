import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

function CountriesList({ cities, isLoading }) {
  if (isLoading) <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your Country by clicking on your city on the map" />
    );

  const countries = [];

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountriesList;
