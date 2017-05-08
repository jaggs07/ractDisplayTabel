import { INITIAL_STATE } from '../model';

const dataReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){

      case "FETCH_DATA":
      state = {
          ...state,
          greenhouseClient:{
              ...state.greenhouseClient,
              loading: action.payload
          }
      };

      break;    

      case "FETCH_DATA_SUCCESS":
      state = {
          ...state,
          greenhouseClient:{
              ...state.greenhouseClient,
              data:action.data,
              loading: action.payload
          }

      };
      break; 

      case "FETCH_DATA_FAILURE":
      state = {
          ...state,
          greenhouseClient:{
              ...state.greenhouseClient,
              loading: action.payload
          }


      };
      break;
  }
  return state;
};

export default dataReducer;