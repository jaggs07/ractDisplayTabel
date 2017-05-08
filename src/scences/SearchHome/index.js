import React, { Component } from "react";
import { withRouter } from "react-router";
import NavBar from "../../components/NavBar/index";
import Form from "../../components/Form/index";
import Table from "../../components/Table/index";
import "./styles.css";

class SearchHome extends Component {


    constructor(props) {
        super(props);

        this.state = {
            loading: true,
        }
    }

    render() {
            return (
           		<div>

    	            <NavBar />
                    <Form />
    	            <div className="container" >
                        <Table />
                    </div>

            	</div>
          	);
        }
}

export default withRouter(SearchHome);




