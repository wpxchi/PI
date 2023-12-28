import {
  ALL_POKEMONS,
  ALL_TYPES,
  POKEMON_NAME,
  ORDER_ATTACK,
  ORDER_NAME,
  ORDER_ORIGIN,
  ORDER_TYPES,
  FAILURE,
  POKEMON_DETAILS,
  POKEMON_CARROUSEL,
} from "./actions";

const initialState = {
  Pokemons: [],
  Copy: [],
  Pokemoncarrousel: [],
  Types: [],
  PokemonName: [],
  OrderAttack: [],
  OrderName: [],
  OrderOrigin: [],
  OrderTypes: [],
  PokemonDetail: [],
  Failure: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_POKEMONS:
      return {
        ...state,
        Pokemons: action.payload,
        Copy: action.payload,
      };

    case POKEMON_CARROUSEL:
      return { ...state, Pokemoncarrousel: action.payload };

    case ALL_TYPES:
      return {
        ...state,
        Types: action.payload,
      };

    case POKEMON_NAME:
      return {
        ...state,
        PokemonName: action.payload,
      };

    case ORDER_NAME:
      let sortedCopy = [...state.Copy];
      if (action.payload === "All") {
        sortedCopy = [...state.Pokemons];
      } else if (action.payload === "Az") {
        sortedCopy.sort((a, b) =>
          a.name.localeCompare(b.name, "en", { sensitivity: "base" })
        );
      } else if (action.payload === "Za") {
        sortedCopy.sort((a, b) =>
          b.name.localeCompare(a.name, "en", { sensitivity: "base" })
        );
      }
      return {
        ...state,
        Copy: sortedCopy,
      };

    case ORDER_ATTACK:
      let sortedAttackCopy = [...state.Copy];
      if (action.payload === "All") {
        sortedAttackCopy = [...state.Pokemons];
      } else if (action.payload === "Max") {
        sortedAttackCopy.sort((a, b) => b.attack - a.attack);
      } else if (action.payload === "Min") {
        sortedAttackCopy.sort((a, b) => a.attack - b.attack);
      }
      return {
        ...state,
        Copy: sortedAttackCopy,
      };

    case ORDER_ORIGIN:
      let sortedOriginCopy = [...state.Copy];
      if (action.payload === "All") {
        sortedOriginCopy = [...state.Pokemons];
      } else if (action.payload === "Created") {
        sortedOriginCopy = state.Pokemons.filter((e) => e.createdInDb);
      } else if (action.payload === "Api") {
        sortedOriginCopy = state.Pokemons.filter((e) => !e.createdInDb);
      }
      return {
        ...state,
        Copy: sortedOriginCopy,
      };

    case ORDER_TYPES:
      let filterTypeCopy;
      if (action.payload === "All") {
        filterTypeCopy = [...state.Pokemons];
      } else {
        filterTypeCopy = state.Copy.filter((e) =>
          e.types.includes(action.payload)
        );
      }
      return {
        ...state,
        Copy: filterTypeCopy,
      };

    case FAILURE:
      if (action.payload === "Err") {
        return { ...state, Failure: "" };
      } else {
        return { ...state, Failure: action.payload };
      }

    case POKEMON_DETAILS:
      const PokemonDetails = action.payload;
      if (PokemonDetails.length > 0) {
        return { ...state, PokemonDetail: PokemonDetails };
      } else {
        return { ...state, Failure: "No Pokemon With That id" };
      }

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;