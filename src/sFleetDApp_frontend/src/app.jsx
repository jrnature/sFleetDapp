import * as React from "react";
import { Button } from "@chakra-ui/react";
import UsuarioAdmin from "./usuarioAdmin.jsx";
import CarroAdmin from "./carroAdmin.jsx";
import MantenimientoAdmin from "./mantenimientoAdmin.jsx";

const App = () => {
    const [usuarioSearch, setUsuarioSearch] = React.useState(0);
    return (
        <>
            {
                usuarioSearch === 1 ? (
                    <h1>
                        <UsuarioAdmin />
                    </h1>
                ) : (
                    <Button colorScheme='blue' onClick={() => setUsuarioSearch(1)}>Admin</Button>
                )

            }

        </>
    )
};

export default App; 