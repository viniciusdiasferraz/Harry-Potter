import axios from "axios";
import { useState } from "react";

const useCharacter = () => {
  const [data, setData] = useState<any>(null);

  const getCharacters = () => {
    axios
      .get("https://hp-api.onrender.com/api/characters")
      .then((response) => {
        setData(response.data);
      })
      .catch((error: string) => {
        console.log(error, "error");
      });
  };

  const getCharacterHouses = (id: any) => {
    axios
      .get(`https://hp-api.onrender.com/api/characters/house/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error: string) => {
        console.log(error, "error");
      });
  };
  return {
    data,
    getCharacters,
    getCharacterHouses,
  };
};

export default useCharacter;
