import React from "react";

import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import ToolkitProvider, {
    ColumnToggle,
    Search
} from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

import * as TableUtil from "./Table-Utils";
import { RouteConstants } from "../../constants/CommonConstants";
import { Link } from "react-router-dom";
const { ToggleList } = ColumnToggle;
const { SearchBar } = Search;

let nameFilter;
let priceFilter;
let stockFilter;
let originFilter;

class ClientsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rowCount: 0
        };
    }

    columns = [
        {
            dataField: "patientId",
            text: "Id# ",
            formatter: (cell, row) => <Link to={{
                pathname: RouteConstants.CLIENT_FORM,
                search: `?patientId=${cell}`,
                state: { data: cell }
            }}> {cell} </Link>,
            sort: true,
            hidden: false
        },
        {
            dataField: "firstName",
            text: "First Name ",
            sort: true,
            hidden: false
        },
        {
            dataField: "lastName",
            text: "lastName ",
            sort: true,
            hidden: false
        },
        {
            dataField: "dob",
            text: "DOB ",
            hidden: false
        },
        {
            dataField: "guardianFirstName",
            text: "Guardian First Name ",
            hidden: false
        }
        , {
            dataField: "guardianLastName",
            text: "Guardian Last Name ",
            hidden: false
        }, {
            dataField: "guardianAddress",
            text: "Guardian Address ",
            hidden: false
        },
        {
            dataField: "guardianEmail",
            text: "Guardian Email ",
            hidden: false
        },
        {
            dataField: "guardianPhone",
            text: "Phone ",
            hidden: false
        }

    ];


    clearAllFilter() {

    }

    //API
    clients = [
        {
            patientId: "199204884",
            firstName: "Nicolas",
            lastName: "Johnson",
            dob: "12/12/1989",
            guardianFirstName: "Matt",
            guardianLastName: "Johnson",
            guardianAddress: "1234 Aipal St, San Francisco, CA, 19405",
            guardianEmail: "johnsonmatt@gmail.com",
            guardianPhone: "26720209848"
        },
        {
            patientId: "1898894884",
            firstName: "Indoxie",
            lastName: "Calos",
            dob: "11/12/1999",
            guardianFirstName: "McAndrew",
            guardianLastName: "Lorrett",
            guardianAddress: "2489 Aipal St, Philadelphia, PA, 19405",
            guardianEmail: "macandreg@gmail.com",
            guardianPhone: "278930303000"
        },
        {
            patientId: "18988884",
            firstName: "Indoxie",
            lastName: "Calos",
            dob: "11/12/1999",
            guardianFirstName: "McAndrew",
            guardianLastName: "Lorrett",
            guardianAddress: "2489 Aipal St, Philadelphia, PA, 19405",
            guardianEmail: "macandreg@gmail.com",
            guardianPhone: "278930303000"
        },
        {
            patientId: "1868894884",
            firstName: "Indoxie",
            lastName: "Calos",
            dob: "11/12/1999",
            guardianFirstName: "McAndrew",
            guardianLastName: "Lorrett",
            guardianAddress: "2489 Aipal St, Philadelphia, PA, 19405",
            guardianEmail: "macandreg@gmail.com",
            guardianPhone: "278930303000"
        },
        {
            patientId: "189884884",
            firstName: "Indoxie",
            lastName: "Calos",
            dob: "11/12/1999",
            guardianFirstName: "McAndrew",
            guardianLastName: "Lorrett",
            guardianAddress: "2489 Aipal St, Philadelphia, PA, 19405",
            guardianEmail: "macandreg@gmail.com",
            guardianPhone: "278930303000"
        },
        {
            patientId: "1778894884",
            firstName: "Indoxie",
            lastName: "Calos",
            dob: "11/12/1999",
            guardianFirstName: "McAndrew",
            guardianLastName: "Lorrett",
            guardianAddress: "2489 Aipal St, Philadelphia, PA, 19405",
            guardianEmail: "macandreg@gmail.com",
            guardianPhone: "278930303000"
        }, {
            patientId: "8918900884",
            firstName: "Indoxie",
            lastName: "Calos",
            dob: "11/12/1999",
            guardianFirstName: "McAndrew",
            guardianLastName: "Lorrett",
            guardianAddress: "2489 Aipal St, Philadelphia, PA, 19405",
            guardianEmail: "macandreg@gmail.com",
            guardianPhone: "278930303000"
        }, {
            patientId: "1897674884",
            firstName: "Indoxie",
            lastName: "Calos",
            dob: "11/12/1999",
            guardianFirstName: "McAndrew",
            guardianLastName: "Lorrett",
            guardianAddress: "2489 Aipal St, Philadelphia, PA, 19405",
            guardianEmail: "macandreg@gmail.com",
            guardianPhone: "278930303000"
        }
    ];

    defaultSorted = [
        {
            dataField: "price",
            order: "desc"
        }
    ];

    handleDataChange = ({ dataSize }) => {
        this.setState({ rowCount: dataSize });
    };

    showSelected = (cell) => {
        console.log(cell);
        //onClick={showSelected(cell)}
    }

    render() {
        return (
            <div>

                <ToolkitProvider
                    bootstrap4
                    keyField="id"
                    data={this.clients}
                    columns={this.columns}
                    columnToggle
                    search
                >
                    {props => (
                        <div>
                            <SearchBar
                                {...props.searchProps}
                                style={{ width: "100%", height: "40px" }}
                            />

                            <TableUtil.ClearButton
                                {...props.searchProps}
                                clearAllFilter={this.clearAllFilter}
                            />
                            {/* <div>{this.state.rowCount}</div> */}
                            {/* <ToggleList {...props.columnToggleProps} /> */}
                            <BootstrapTable
                                {...props.baseProps}
                                filter={filterFactory()}
                                pagination={paginationFactory()}
                                defaultSorted={this.defaultSorted}
                                onDataSizeChange={this.handleDataChange}
                                noDataIndication="There is no solution"
                                striped
                                hover
                                condensed
                            />
                        </div>
                    )}
                </ToolkitProvider>
            </div>
        );
    }
}

export default ClientsTable;
