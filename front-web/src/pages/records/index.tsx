import React, { useEffect } from 'react';
import axios from 'axios';

import './styles.css';
const BASE_URL = 'http://localhost:8080';

const Records = () => {

    useEffect(() => {
        axios.get(`${BASE_URL}/records?linesPerPage=12`)
            .then(response => console.log(response));
    }, []);

    return (
        <div className="page-container">
            <table className="records-table" cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th>INSTANTE</th>
                        <th>NOME</th>
                        <th>IDADE</th>
                        <th>PLATAFORMA</th>
                        <th>GÊNERO</th>
                        <th>TÍTULO DO GAME</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>20/08/2020 13:40</td>
                        <td>Tarciso Torres</td>
                        <td>35</td>
                        <td>XBOX</td>
                        <td>Ação - Aventura</td>
                        <td>The last of US</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Records;