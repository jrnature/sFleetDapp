import * as React from "react"
import { createRoot } from "react-dom/client"
import {
    usuario as canister,
    createActor,
} from "../../declarations/usuario";

let actor = canister;

import { Input, Button } from "@chakra-ui/react";
//import styles from "../assets/app.module.css";
 
const usuarioAdmin = () => {
    const [usuarioSearch, setUsuarioSearch] = React.useState(null);

    const getUsuario = () => {
        const inputIDs = ["idUsuario"];
        const inputs = inputIDs.map((id) => document.getElementById(id));
        const [idUsuario] = inputs.map((input) => input.value);
        console.log(idUsuario)
        if (idUsuario === "") {
            alert("Inserte un Id");
        }
        canister.getUsuario(idUsuario)
            .then((result) => {
                console.log(result);
                setUsuarioSearch(result);
            })
            .catch((err) => {
                console.log(err);
                alert("Usuario No Encontrado");
            });
    };

    const newUsuario = () => {
        const inputIDs = [
            "crearUsuario_idUsuario",
            "crearUsuario_user",
            "crearUsuario_password",
            "crearUsuario_nombre",
            "crearUsuario_aMaterno",
            "crearUsuario_aPaterno",
            "crearUsuario_role"
        ];
        const inputs = inputIDs.map((id) => document.getElementById(id));
        const [
            idUsuario,
            user,
            password,
            nombre,
            aMaterno,
            aPaterno,
            role
        ] = inputs.map((input) => input.value);
        console.log(
            idUsuario,
            user,
            password,
            nombre,
            aMaterno,
            aPaterno,
            role
        );
        if (inputs.some((input) => input.value === "")) {
            alert("Debe de registrar todos los campos");
            return;
        }
        canister.newUsuario(idUsuario, {
            user: user,
            password: password,
            nombre: nombre,
            aMaterno: aMaterno,
            aPaterno: aPaterno,
            role: role,
        })
            .then((result) => {
                alert("Usuario Creado");
            })
            .catch((err) => {
                console.log(err);
                alert("Error en la creación del Usuario")
            });
    };



    const deleteUsuario = () => {
        const inputIDs = ["idUsuario_borrar"];
        const inputs = inputIDs.map((id) => document.getElementById(id));
        const [idUsuario] = inputs.map((input) => input.value);
        console.log(idUsuario);
        if (idUsuario === "") {
            alert("Debe de introducir un ID de Usuario");
        }

        const confirmar = confirm("Está seguro de borrar  usuario?");
        if (!confirmar) {
            return;
        }
        canister.deleteUsuario(idUsuario)
            .then(() => {
                alert("Usuario borrado");
            })
            .catch((err) => {
                console.log(err);
                alert("Error en el proceso de borrado del Usuario")
            });

    };

    const userSearch=()=> {
        const inputIDs = [
            "user_search",
            "user_password"
        ];
        const inputs = inputIDs.map((id) => document.getElementById(id));
        const [
            user,
            password
        ] = inputs.map((input) => input.value);
        console.log(
            user,
            password
        );
        if (inputs.some((input) => input.value === "")) {
            alert("Debe de registrar todos los campos");
            return;
        }
        canister.userSearch(user,password)
            .then(() => {
                alert("Usuario encontrado");
            })
            .catch((err) => {
                console.log(err);
                alert("Error en el proceso de busqueda del Usuario")
            });
    };

    return (
        <div>
            <div>
                <h1>Buscar un Usuario</h1>
                <div>
                    {usuarioSearch && usuarioSearch.nombre ? (
                        <div>
                            <p>
                                Nombre:{" "} {`${usuarioSearch.nombre} ${usuarioSearch.aPaterno} ${usuarioSearch.aMaterno} -> ${usuarioSearch.role}`}
                            </p>
                            <Button size="sm" onClick={() => setUsuarioSearch(null)}>Limpiar</Button>
                        </div>
                    ) : (
                        <div>
                            <Input size = "sm" id="idUsuario" type="text" placeholder="Introduce un id de usuario" />
                            <Button size = "sm" onClick={getUsuario}>Buscar Usuario</Button>
                        </div>
                    )}
                </div>
            </div>
            <div>
                <h1> Crear un Usuario</h1>
                <div>
                    <Input size = "sm" id="crearUsuario_idUsuario" type="text" placeholder="Introduce un id de usuario" />
                    <Input size = "sm" id="crearUsuario_user" type="text" placeholder="Introduce un nombre de usuario" />
                    <Input size = "sm" id="crearUsuario_password" type="text" placeholder="Introduce un password de usuario" />
                    <Input size = "sm" id="crearUsuario_nombre" type="text" placeholder="Introduce el nombre del usuario" />
                    <Input size = "sm" id="crearUsuario_aPaterno" type="text" placeholder="Introduce el Apellido Parterno del usuario" />
                    <Input size = "sm" id="crearUsuario_aMaterno" type="text" placeholder="Introduce el Apellido Parterno del de usuario" />
                    <Input size = "sm" id="crearUsuario_role" type="text" placeholder="Introduce el rol del de usuario" />
                    <Button size = "sm" onClick={newUsuario}>Crear Usuario</Button>
                </div>
            </div>
            <div>
                <h1>Borrar un Usuario</h1>
                <div>
                    {usuarioSearch && usuarioSearch.nombre ? (
                        <div>
                            <p>
                               El usuario fue borrado
                            </p>
                            <Button size="sm" onClick={() => setUsuarioSearch(null)}>Limpiar</Button>
                        </div>
                    ) : (
                        <div>
                            <Input size = "sm" id="idUsuario_borrar" type="text" placeholder="Introduce un id de usuario" />
                            <Button size = "sm" onClick={deleteUsuario}>Borrar Usuario</Button>
                        </div>
                    )}
                </div>
            </div>
            <div>
                <h1> Buscar Usuar</h1>
                <div>
                    <Input size = "sm" id="user_search" type="text" placeholder="Introduce un nombre de usuario" />
                    <Input size = "sm" id="password_search" type="text" placeholder="Introduce un password de usuario" />
                    <Button size = "sm" onClick={userSearch}>Buscar Usuario</Button>
                </div>
            </div>
        </div>
    );
};

export default usuarioAdmin; 