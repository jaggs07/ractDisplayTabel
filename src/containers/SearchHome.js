import { connect } from "react-redux";
import { 
	fetchData
} from "../actions/dataActions";

import SearchHome from "../scenes/SearchHome/index";


const mapStateToProps = (state) => {
	return {

		data: state.dataReducer.greenhouseClient,
	};
};

const mapDispatchToProps = (dispatch, props) => {


    dispatch(fetchData())
	return {
        fetchData: () => {
			dispatch(fetchData());
		}
	};
};

const SearchHomeContainer = connect(mapStateToProps, mapDispatchToProps)(SearchHome)

export default SearchHomeContainer



