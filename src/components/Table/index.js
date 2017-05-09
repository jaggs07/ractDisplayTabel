import React, { Component } from "react";

import "./styles.css";
import form from "../Form/index";
import NavBar from "../NavBar/index";
import {browserHistory} from 'react-router';

class Table extends Component{

    render() {

        var greenhouseClientDetailList = [];

        var greenhouseClientsArray = this.props.greenhouseClientData.data;

        console.log(greenhouseClientsArray,"GREENHOUSE");


        if(typeof greenhouseClientsArray !== 'undefined' && greenhouseClientsArray.length >0){

            greenhouseClientDetailList = createGreenhouseClientList(greenhouseClientsArray);
        }

        var dispalayTableResult = null;

        if( typeof greenhouseClientsArray !== 'undefined' && greenhouseClientsArray.length > 0 ){

            dispalayTableResult = displayGreenhouseClientList(greenhouseClientDetailList);

        }
        return(
            dispalayTableResult
        );
    }
}
export default Table;

function createGreenhouseClientList(greenHouseClientsArray){

    var greenhouseClientArray = [];

    Object.keys(greenHouseClientsArray).map(function(key, i) {

        greenhouseClientArray.push(

            <tr>
                <td>{greenHouseClientsArray[i].greenhouse.companyName}</td>
                <td>{greenHouseClientsArray[i].greenhouse.domain}</td>
                <td>{greenHouseClientsArray[i].greenhouse.careersPage}</td>
                <td>{greenHouseClientsArray[i].greenhouse.linkedinPage}</td>
                <td>{greenHouseClientsArray[i].greenhouse.ghBoardToken}</td>
            </tr>

        );
    })
    return greenhouseClientArray;
}

function displayGreenhouseClientList(greenHouseClientDetailList){

    return(
        <div className="container">
            <table id="myTable">

                <tr className="header">
                    <th >Company Name</th>
                    <th >Domain</th>
                    <th >Careers Page</th>
                    <th >Linkedin Page</th>
                    <th >GH Board Token</th>
                </tr>

                {greenHouseClientDetailList}

            </table>
        </div>
    );
}
