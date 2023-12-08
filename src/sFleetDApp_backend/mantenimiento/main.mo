import Map "mo:base/HashMap";
import TrieMap "mo:base/TrieMap";
import Text "mo:base/Text";
import Nat32 "mo:base/Nat32";
import Nat8 "mo:base/Nat8";
import Nat "mo:base/Nat";
import Debug "mo:base/Debug";
import Nat16 "mo:base/Nat16";
import Hash "mo:base/Hash";
import Int16  "mo:base/Int16";
import Blob "mo:base/Blob";

actor {

  type metaMantenimiento = {
    idCarro   : Text;
    fecha : Text;
    descripcion : Text;
    marcas : Text;
    piezas_remplazadas : Blob;
    piezas_instaladas : Blob;
    tipo : Text;
    };

  type metaMantenimientoInput = {
    idCarro   : Text;
    fecha : Text;
    descripcion : Text;
    marcas : Text;
    piezas_remplazadas : Blob;
    piezas_instaladas : Blob;
    tipo : Text;
    };
  

  let mantenimientos = Map.HashMap<Text, metaMantenimiento>(0, Text.equal, Text.hash);

  public func newMantenimiento(idMantenimiento : Text, datos : metaMantenimientoInput) : async () { 

    if (datos.idCarro == "") {
      Debug.trap("Ingrese el id del carro");
    };
    if (datos.fecha == "") {
      Debug.trap("Ingrese la fecha de la reparación");
    };
    if (datos.descripcion == "") {
      Debug.trap("Ingrese la descripción de las piezas reemplazadas/arregladas");
    };
    if (datos.marcas == "") {
      Debug.trap("Ingrese las marcas de las refacciones");
    };
    if (datos.piezas_remplazadas == "") {
      Debug.trap("Selecciona el archivo con las imagenes de las piezas remplazadas");
    };
    if (datos.piezas_instaladas == "") {
      Debug.trap("Selecciona el archivo con las imagenes de las piezas instaladas");
    };
     if (datos.tipo == "") {
      Debug.trap("Introduce el tipo de mantenimiento");
    };
    mantenimientos.put(idMantenimiento, 
      {
        idCarro= datos.idCarro;
        fecha = datos.fecha;
        descripcion = datos.descripcion;
        marcas = datos.marcas;
        piezas_remplazadas = datos.piezas_remplazadas;
        piezas_instaladas = datos.piezas_instaladas;
        tipo = datos.tipo
      } 
    );

    Debug.print("Reparación agregada");
  };

  public query func getMantenimiento(idMantenimiento : Text) : async metaMantenimiento  {
    let mantenimientoGet = mantenimientos.get(idMantenimiento);
    var aux = switch (mantenimientoGet) {
      case (null) {
        {
          idCarro ="";
          fecha ="";
          descripcion = "";
          marcas = "";
          piezas_remplazadas = "" : Blob;
          piezas_instaladas = "" : Blob;
          tipo="";
        };
      };
      case (?mantenimientoGet) mantenimientoGet;
    };
    return {
      idCarro = aux.idCarro;
      fecha = aux.fecha;
      descripcion = aux.descripcion;
      marcas = aux.marcas;
      piezas_remplazadas = aux.piezas_remplazadas;
      piezas_instaladas = aux.piezas_instaladas;
      tipo=aux.tipo
    };
  };

  public func updateMantenimiento(idMantenimiento : Text, datos : metaMantenimientoInput) : async () {
    if (datos.idCarro == "") {
      Debug.trap("Ingrese el id del carro");
    };
    if (datos.fecha == "") {
      Debug.trap("Ingrese la fecha de la reparación");
    };
    if (datos.descripcion == "") {
      Debug.trap("Ingrese la descripción de las piezas reemplazadas/arregladas");
    };
    if (datos.marcas == "") {
      Debug.trap("Ingrese las marcas de las refacciones");
    };
    if (datos.piezas_remplazadas == "") {
      Debug.trap("Selecciona el archivo con las imagenes de las piezas remplazadas");
    };
    if (datos.piezas_instaladas == "") {
      Debug.trap("Selecciona el archivo con las imagenes de las piezas instaladas");
    };
     if (datos.tipo == "") {
      Debug.trap("Introduce el tipo de mantenimiento");
    };

    if (mantenimientos.replace(idMantenimiento, datos) == null) {
      Debug.trap("Mantenimiento no encontrado");
    };
  };

  public func deleteMantenimiento(idMantenimiento : Text) : async () {
    if (mantenimientos.remove(idMantenimiento) == null) {
      Debug.trap("Mantenimiento no encontrado");
    };
  };

  public shared (msg) func whoami() : async Principal {
    msg.caller;
  };

};