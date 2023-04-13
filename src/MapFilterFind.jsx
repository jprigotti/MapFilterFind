import React, { useState } from "react";
import json from "./assets/estado.json"
import Table from "./Table";


const usuarios = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
  },
  {
    id: 2,
    nombre: "Maria",
    apellido: "Gomez",
  },
  {
    id: 3,
    nombre: "Pedro",
    apellido: "Gomez",
  },
];

const colores = ["🔴", "🟠", "🟡", "🟢"];

const amarillo = colores.find((color) => {
  return color === "🟡";
}); // DEVUELVE EL PRIMER ELEMENTO QUE CUMPLE LA CONDICION, NO GENERA UN ARRAY

const diferentesDeAmarillo = colores.filter((color) => {
  return color !== "🟡";
}); // DEVUELVE UN ARRAY CON TODOS LOS ELEMENTOS QUE CUMPLEN LA CONDICION

// -----------------------------------------------------

const obtenerAJuan = () => {
  const usuario = usuarios.find((usuario) => {
    return usuario.nombre === "Juan";
  });

  const draft = structuredClone(usuario);
  return draft;

  /* 
    return {
      ...usuario,
    }
  */
};
/* 
const juan = obtenerAJuan();
juan.nombre = "MODIFICADO";

console.table(juan);
console.table(usuarios[0]); */

//------------------------

// let estado = [
//   {
//     id: 1,
//     nombre: "Juan",
//     apellido: "Perez",
//   },
//   {
//     id: 2,
//     nombre: "Maria",
//     apellido: "Gomez",
//   },
//   {
//     id: 3,
//     nombre: "Pedro",
//     apellido: "Gomez",
//   },
// ];

const obetenerUsuarioPorApellido = (apellido) => {
  const usuario = estado.find((usuario) => {
    return usuario.apellido === apellido;
  });

  const draft = structuredClone(usuario);
  return draft;
};





// const crearUsuario = (lista1, valueInputName, valueInputLastName) => {
//   const listLength = lista1.length;
//   console.log("longitud lista", listLength);

//   //creamos un objeto temporal
//   const tempUser = {
//     id: lista1[listLength-1].id + 1,
//     nombre: valueInputName,
//     apellido: valueInputLastName,
//   }

//   //lo agregamos al final del array
//   lista1.push(tempUser);
// };


const eliminarUsuarioPorId = () => { };
const actualizarUsuarioPorId = () => { };



const MapFilterFind = () => {
  //UseState
  const [valueInputName, setName] = useState("");
  const [valueInputLastName, setLastName] = useState("");
  const [valueInputSearchId, setSearchId] = useState("");
  const [lista1, setLista1] = useState(json.lista1);

  //Constantes generales
  const showLista1 = () => {
    // const lista1Obj = JSON.parse(lista1)
    console.log(lista1);
  }


  //Funciones
  const showInput = () => {
    console.log(valueInputLastName);
    console.log(valueInputName);
  }

  const crearUsuario = () => {
    const listLength = lista1.length;
    console.log("longitud lista", listLength);

    //creamos un objeto temporal
    const tempUser = {
      id: lista1[listLength - 1].id + 1,
      nombre: valueInputName,
      apellido: valueInputLastName,
    }

    //lo agregamos al final del array y actualizamos el state 
    const tempLista1 = lista1;
    tempLista1.push(tempUser);
    setLista1(tempLista1);

    setName("");
    setLastName("");
  };

  const obtenerUsuarioPorId = () => {
    const listaFilteredById = lista1.filter((lista) => lista.id == valueInputSearchId);
    setLista1(listaFilteredById);
  };


  const clearFilter = () => {
    setLista1(json.lista1);
    setSearchId("");

  }

  const editUser = (user) => {
    console.log("Edit User: ", user);
    setName(user.nombre);
    setLastName(user.apellido);
    
  }

  //HTML
  return <div>
    <h1>Hola</h1>
    {/* <button onClick={() => { crearUsuario(lista1, valueInputName, valueInputLastName) }}>Agregar Usuario</button> */}

    {/* <button onClick={showLista1}>Mostrar Lista</button> */}


    <div>
      <label>Enter your name:
        <input
          value={valueInputName}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </div>

    <div>
      <label>Enter your lastname:
        <input
        value={valueInputLastName}
          type="text"
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
    </div>

    <button onClick={() => { crearUsuario() }}>Agregar Usuario</button>

    <div>
      <label>Search id:
        <input
          type="text"
          value={valueInputSearchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
      </label>
    </div>

    <button onClick={() => { obtenerUsuarioPorId() }}>Filter </button>
    <button onClick={() => { clearFilter() }}>Clear Filter </button>

    <Table lista={lista1} editUser={editUser} />

    {/* {lista1.map((lista) => {
         return <Card key={lista.id} user={lista}  />;
      })} */}

  </div>;
};

export default MapFilterFind;



