import {
  MODAL_ACTIVE,
  MODAL_INACTIVE,
  START_FETCHING_CARDS,
  ADD_POKEMON,
  REMOVE_POKEMON,
} from "../constants/actions";

const PokedexReducer = (state, action) => {
  switch (action.type) {
    case MODAL_ACTIVE:
      return { ...state, modalActive: true };

    case MODAL_INACTIVE:
      return { ...state, modalActive: false };

    case START_FETCHING_CARDS:
      return { ...state, cards: [...action.payload.cards] };

    case ADD_POKEMON:
      const updatedCard = state.cards.filter(
        (card) => card.id !== action.payload.id
      );
      return {
        ...state,
        cards: updatedCard,
        myCards: [...state.myCards, action.payload],
      };

    case REMOVE_POKEMON:
      return {
        ...state,
        cards: [
          ...state.myCards.filter((card) => card.id === action.payload),
          ...state.cards,
        ],
        myCards: state.myCards.filter((card) => card.id !== action.payload),
      };

    default:
      return state;
  }
};

export default PokedexReducer;
