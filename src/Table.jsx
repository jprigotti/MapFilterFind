import React from "react";

const styleTable = {

};

const Table = ({ lista, editUser }) => {
    return (
        <table style={styleTable}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                </tr>
            </thead>

            <tbody>
                {lista.map((row) => {
                    return (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.nombre}</td>
                            <td>{row.apellido}</td>
                            <td><button onClick={()=>editUser(row)}>Editar</button></td>
                        </tr>
                    )

                })}
            </tbody>

        </table>
    );
};

export default Table;
