import { useState } from "react";

function AddCity({ onAddCity }) {
  const [formState, setFormState] = useState({
    city: "",
    population: "",
    country: ""
  });

  function handlechange(e) {
    const { name, value, type } = e.target;

    const val = type === "number" ? Number(value) : value;

    setFormState({ ...formState, [name]: val });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formState);
    onAddCity(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="city"
          type="text"
          placeholder="city"
          value={formState.city}
          onChange={handlechange}
        />
      </div>

      <div>
        <input
          name="population"
          type="number"
          placeholder="population"
          value={formState.population}
          onChange={handlechange}
        />
      </div>

      <div>
        <input
          name="country"
          type="text"
          placeholder="country"
          value={formState.country}
          onChange={handlechange}
        />
      </div>
      <div>
        <input type="submit" value="Submit Form" />
      </div>
    </form>
  );
}

export default AddCity;
