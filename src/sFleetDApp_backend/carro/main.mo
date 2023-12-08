import Map "mo:base/HashMap";
import TrieMap "mo:base/TrieMap";
import Text "mo:base/Text";
import Nat32 "mo:base/Nat32";
import Nat8 "mo:base/Nat8";
import Nat "mo:base/Nat";
import Debug "mo:base/Debug";
import Nat16 "mo:base/Nat16";
import Hash "mo:base/Hash";
import Int16 "mo:base/Int16"

actor {

  type metaCarro = {
    marca   : Text;
    modelo : Text;
    ano    : Text;
    vin : Text;
    motor : Text;
    flota : Text;
    };

  type metaCarroInput = {
    marca   : Text;
    modelo : Text;
    ano    : Text;
    vin : Text;
    motor : Text;
    flota : Text;
  };
  

  let carros = Map.HashMap<Text, metaCarro>(0, Text.equal, Text.hash);

  public func newCarro(idCarro : Text, datos : metaCarroInput) : async () { 

    if (datos.marca == "") {
      Debug.trap("Ingresa la marca del vehículo");
    };
    if (datos.modelo == "") {
      Debug.trap("Ingresa el modelo del vehículo");
    };
    if (datos.ano == "") {
      Debug.trap("Ingresa el año del vehículo");
    };
    if (datos.vin == "") {
      Debug.trap("Ingresa el VIN del vehículo");
    };
    if (datos.motor == "") {
      Debug.trap("Ingresa número de serie del motor");
    };
    if (datos.flota == "") {
      Debug.trap("Ingresa la flota a la cual pertenece el vehículo");
    };
    
    carros.put(idCarro, 
      {
        marca= datos.marca;
        modelo = datos.modelo;
        ano = datos.ano;
        vin = datos.vin;
        motor = datos.motor;
        flota = datos.flota;
      } 
    );

    Debug.print("Vehículo agregado");
  };

  public query func getCarro(idCarro : Text) : async metaCarro  {
    let carroGet = carros.get(idCarro);
    var aux = switch (carroGet) {
      case (null) {
        {
          marca ="";
          modelo ="";
          ano = "";
          vin = "";
          motor = "";
          flota = "";
        };
      };
      case (?carroGet) carroGet;
    };
    return {
      marca = aux.marca;
      modelo = aux.modelo;
      ano = aux.ano;
      vin = aux.vin;
      motor = aux.motor;
      flota = aux.flota;
    };
  };

  public func updateCarro(idCarro : Text, datos : metaCarroInput) : async () {
      if (datos.marca == "") {
      Debug.trap("Ingresa la marca del vehículo");
    };
    if (datos.modelo == "") {
      Debug.trap("Ingresa el modelo del vehículo");
    };
    if (datos.ano == "") {
      Debug.trap("Ingresa el año del vehículo");
    };
    if (datos.vin == "") {
      Debug.trap("Ingresa el VIN del vehículo");
    };
    if (datos.motor == "") {
      Debug.trap("Ingresa número de serie del motor");
    };
    if (datos.flota == "") {
      Debug.trap("Ingresa la flota a la cual pertenece el vehículo");
    };

    if (carros.replace(idCarro, datos) == null) {
      Debug.trap("Vahículo no encontrado");
    };
  };

  public func deleteCarro(idCarro : Text) : async () {
    if (carros.remove(idCarro) == null) {
      Debug.trap("Vehículo no encontrado");
    };
  };

  public shared (msg) func whoami() : async Principal {
    msg.caller;
  };

};