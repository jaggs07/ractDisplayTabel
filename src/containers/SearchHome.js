import { connect } from "react-redux";
import { 
	fetchData
} from "../actions/dataActions";

import Table from "../components/Table/index";


const mapStateToProps = (state) => {
	return {

		data: state.dataReducer.job,
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

const SearchHomeContainer = connect(mapStateToProps, mapDispatchToProps)(Table)

export default SearchHomeContainer



