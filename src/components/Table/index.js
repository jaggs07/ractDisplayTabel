import React, { Component } from "react";
import "./styles.css";
import form from "../Form/index";
import NavBar from "../NavBar/index";
import {browserHistory} from 'react-router';

class Table extends Component{

    // componentDidMount = () => {
    //     this.props.fetchData();
    // }

    handleClick = () => {
        browserHistory.push('/add-client');
    };

    handleKeyUp = () => {
        var input, filter, table, tr, td, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        console.log(tr,"TR LENGTH");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            console.log(td,"td");
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    render() {

        return (

            <div className="container">

                <div className="add-client-button">
                    <button type="button" onClick={ this.handleClick } className="btn btn-primary add-client">Add Greenhouse Client</button>
                </div>

                <input type="text" id="searchInput" onKeyUp={this.handleKeyUp} placeholder="Search by company name..." title="Type in a name" />

                    <table id="myTable">
                        <tr className="header">
                            <th >Company Name</th>
                            <th >Domain</th>
                            <th >Careers Page</th>
                            <th >Linkedin Page</th>
                            <th >GH Board Token</th>
                        </tr>

                        <tr>
                            <td>WeWork</td>
                            <td>wework.com</td>
                            <td>www.wework.com/careers</td>
                            <td>www.wework.com/linkedin</td>
                            <td>wework</td>
                        </tr>

                        <tr>
                            <td>b12</td>
                            <td>b12.com</td>
                            <td>www.b12.com/careers</td>
                            <td>www.b12.com/careers</td>
                            <td>Germany</td>
                        </tr>

                        <tr>
                            <td>tailor</td>
                            <td>tailor.com</td>
                            <td>www.b12.com/careers</td>
                            <td>www.b12.com/careers</td>
                            <td>tailor</td>
                        </tr>

                        <tr>
                            <td>bucket</td>
                            <td>bucket.com</td>
                            <td>www.bucket.com/careers</td>
                            <td>www.bucket.com/careers</td>
                            <td>bucket</td>
                        </tr>

                        <tr>
                            <td>intell</td>
                            <td>intell.com</td>
                            <td>www.intell.com/careers</td>
                            <td>www.intell.com/careers</td>
                            <td>intell</td>
                        </tr>

                        <tr>
                            <td>maze</td>
                            <td>maze.com</td>
                            <td>www.maze.com/careers</td>
                            <td>www.maze.com/careers</td>
                            <td>maze</td>
                        </tr>

                        <tr>
                            <td>go</td>
                            <td>go</td>
                            <td>www.go.com/careers</td>
                            <td>www.go.com/careers</td>
                            <td>go</td>
                        </tr>

                        <tr>
                            <td>nyst</td>
                            <td>nyst</td>
                            <td>www.nyst.com/careers</td>
                            <td>www.nyst.com/careers</td>
                            <td>nyst</td>
                        </tr>

                    </table>
            </div>
        );
    }
}

export default Table;
