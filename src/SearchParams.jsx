import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "fish", "rabbit"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState();
  const handleInputChange = (e) => {
    e.preventDefault();
    setLocation(e.target.value);
  };

  const handleSelectChange = (e) => {
    e.preventDefault();
    setAnimal(e.target.value);
  };
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={handleInputChange}
            value={location}
            placeholder="Location"
            id="location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            value={animal}
            name="animal-input"
            id="animal"
            onChange={handleSelectChange}
          >
            <option value={undefined} />
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
