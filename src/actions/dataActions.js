import $ from "jquery";
import store from "../model";

export function fetchData() {
  return function (dispatch) {
    dispatch({type: "FETCH_DATA", payload: true})

    var dataStore = store.getState();

    return fetch("http://localhost/api/greenhouseClient", {
        method: 'GET',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then((response) => response.json())
    .then((responseData) => {
      dispatch(fetchDataSuccess(responseData))
    })
    .catch((error) => {
      dispatch(fetchDataFailure(error))
    });
  }
}

export function fetchDataSuccess(data) {


  return function(dispatch){
      console.log(data,"DATA");
    
    if( data.length > 0 ){

        dispatch({type: "FETCH_DATA_SUCCESS", data: data, payload: false})
    }else{

        dispatch({type: "FETCH_DATA_SUCCESS", data: data, payload: false})
    }
   
  }
}

export function fetchDataFailure(error) {
  return {
    type: "FETCH_DATA_FAILURE",
      payload: false
  };
}
