import AsyncSelect from "react-select/async";
import style from "./select.module.scss";

export const Selection = () => {
  const mapResponseToValuesAndLabels = (data) => ({
    value: data.code,
    label: data.name_ptbr,
  });

  async function callApiCountry(value) {
    const data = await fetch("https://amazon-api.sellead.com/country")
      .then((response) => response.json())
      .then((response) => response.map(mapResponseToValuesAndLabels))
      .then((final) =>
        final.filter((i) => i.label.toLowerCase().includes(value.toLowerCase()))
      );
    return data;
  }

  const CityResponseToValuesAndLabels = (data) => ({
    value: data.id,
    label: data.name,
  });

  async function callApiCity(value) {
    const dataCity = await fetch("https://amazon-api.sellead.com/city")
      .then((response) => response.json())
      .then((response) => response.map(CityResponseToValuesAndLabels))
      .then((final) =>
        final.filter((i) => i.label.toLowerCase().includes(value.toLowerCase()))
      );
    console.log(dataCity);
    return dataCity;
  }

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 200,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  return (
    <>
      <AsyncSelect
        cacheOptions
        loadOptions={callApiCountry}
        className={style.select}
        isMulti
        defaultOptions
        style={customStyles}
      />

      <AsyncSelect
        cacheOptions
        loadOptions={callApiCity}
        className={style.select}
        defaultOptions
        style={customStyles}
      />
    </>
  );
};
