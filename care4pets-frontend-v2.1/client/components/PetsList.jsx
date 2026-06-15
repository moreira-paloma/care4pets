import { useEffect, useState } from "react";
import { getPets } from "../services/petService";

export function PetsList() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getPets().then(response => {
      setPets(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Pets</h1>
      {pets.map(pet => (
        <div key={pet.id}>
          <h3>{pet.name}</h3>
          <p>Espécie: {pet.species}</p>
          <p>Tutor: {pet.tutorName}</p>
        </div>
      ))}
    </div>
  );
}
