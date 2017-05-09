import React, { Component } from "react";
import { withRouter } from "react-router";
import NavBar from "../../components/NavBar/index";
import Form from "../../components/Form/index";
import Table from "../../components/Table/index";
import "./styles.css";

class SearchHome extends Component {

    render() {
            return (
           		<div>

    	            <NavBar />
                    <Form />
    	            <div className="container" >
                        <Table
                            greenhouseClientData={this.props.data}
                        />
                    </div>

            	</div>
          	);
        }
}

export default withRouter(SearchHome);




