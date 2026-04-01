import { useEffect, useEffectEvent, useState } from "react";

interface Pokemon {
   id: number;
   name: string;
   imageUrl: string;
}

interface Props {
   id: number;
}

export const usePokemon = ({ id }: Props) => {
   const [pokemon, setPokemon] = useState<Pokemon | null>(null);
   const [isLoading, setIsLoading] = useState(false);


   const getPokemonId = async(id: number) => {
      setIsLoading(true);

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();

      setPokemon({
         id: id, 
         name: data.name,
         imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
      });

      setIsLoading(false);
   }

   useEffect(() => {
     getPokemonId(id);
   }, [id])
   
    

   return {
      isLoading,
      pokemon,

      formattedId: id.toString().padStart(3, '0'),
   }
}
