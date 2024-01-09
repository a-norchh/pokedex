import { MODAL_ACTIVE, MODAL_INACTIVE } from "../constants/actions";

const PokedexReducer = (state, action) => {
  switch (action.type) {
    case MODAL_ACTIVE:
      return { ...state, modalActive: true };
    case MODAL_INACTIVE:
      return { ...state, modalActive: false };
    default:
      return state;
  }
};

export default PokedexReducer;
