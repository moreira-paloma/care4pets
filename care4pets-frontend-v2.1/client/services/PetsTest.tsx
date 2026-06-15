import { useEffect, useState } from "react";
import { getPets } from "@/services/petService";

export default function PetsTest() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getPets()
      .then(response => {
        setPets(response.data);
      })
      .catch(err => {
        console.error("Erro ao buscar pets:", err);
      });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Teste de Pets</h1>
      {pets.map(pet => (
        <div key={pet.id} style={{ marginBottom: 10 }}>
          <strong>{pet.name}</strong> — {pet.species} ({pet.tutorName})
        </div>
      ))}
    </div>
  );
}
