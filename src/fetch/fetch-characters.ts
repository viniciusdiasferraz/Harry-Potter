import { DataState } from "@/types/types";
import axios from "axios";
import { useState } from "react";

const useCharacter = () => {
  const [data, setData] = useState<DataState[]>();
  const [removeLoading, setRemoveLoading] = useState<boolean>(false);

  const getCharacters = () => {
    axios
      .get("https://hp-api.onrender.com/api/characters")
      .then((response) => {
        setData(response.data);
        setRemoveLoading(true);
      })
      .catch((error: string) => {
        console.log(error, "error");
      })
      .finally(() => {
        setRemoveLoading(true);
      });
  };

  const getCharacterHouses = (house: string | string[] | undefined) => {
    axios
      .get(`https://hp-api.onrender.com/api/characters/house/${house}`)
      .then((response) => {
        setData(response.data);
        setRemoveLoading(true);
      })
      .catch((error: string) => {
        console.log(error, "error");
      })
      .finally(() => {
        setRemoveLoading(true);
      });
  };
  return {
    data,
    getCharacters,
    getCharacterHouses,
    removeLoading,
  };
};

export default useCharacter;
