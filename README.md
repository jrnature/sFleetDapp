# sFleetDapp
Repositorio de DApp para el control de flotillas. Implementa los canister para el registro de usuarios, vehículos adheridos a una flotilla, y el canister para el registro y seguimiento de las acciones de mantenimiento que se realizan a un vehículo, tanto preventivo como correctivo, así como la integración de imágenes que validen la necesidad de ajuste de las piezas, e identifiquen las piezas nuevas.

El documento descriptivo del proyecto se encuentra disponible en la dirección: https://docs.google.com/document/d/1qnAAbg9EefI0POp1KDEOwQYFH1RgccG_/edit?usp=drive_link&ouid=103183585215782202143&rtpof=true&sd=true.

Adicionalmente, una mayor descripción, así como los detalles del concepto y del modelo de negocio de sFleetDApp podran ser accedidos en la siguiente presentación

https://docs.google.com/presentation/d/1yOVFSeU8DQ_4NAYIZG-IiOd32OJrWUCR/edit?usp=drive_link&ouid=103183585215782202143&rtpof=true&sd=true


Para su ejecución se debe deben ejecutar los siguientes comandos en el directorio local donde se pruebe.

Dentro de la carpeta del proyecto ejecutar en el bash lo siguiente:

```
npm install --save react react-dom
npm intall --save-dev typescript ts-loader
npm install --save-dev style-loader css-loader

npm i @chackra-ui/react @emotion/react @emotion/styled framer-motion
```
Con estos comandos se incorporan los elementos en el directorio local. Posteriormente

```
dfx start --clean --background
dfx deploy
npm start run
```
