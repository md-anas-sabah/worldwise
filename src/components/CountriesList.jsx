import CityItem from "./CityItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

function CountriesList({ cities, isLoading }) {
  if (isLoading) <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your Country by clicking on your city on the map" />
    );

  return (
    <ul className={styles.countryList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CountriesList;
