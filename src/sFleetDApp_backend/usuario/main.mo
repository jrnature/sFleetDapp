import Map "mo:base/HashMap";
import TrieMap "mo:base/TrieMap";
import Text "mo:base/Text";
import Nat32 "mo:base/Nat32";
import Nat8 "mo:base/Nat8";
import Nat "mo:base/Nat";
import Debug "mo:base/Debug";
import Nat16 "mo:base/Nat16";
import Hash "mo:base/Hash";

actor {

  type metaUsuario = {
    user   : Text;
    password : Text;
    nombre : Text;
    aMaterno : Text;
    aPaterno : Text;
    role : Text;
    };

  type metaRole = {
    role   : Text;
    };

  type metaUsuarioInput = {
    user   : Text;
    password : Text;
    nombre : Text;
    aMaterno : Text;
    aPaterno : Text;
    role : Text;
  };
  

  let usuarios = Map.HashMap<Text, metaUsuario>(0, Text.equal, Text.hash);

  public func newUsuario(idUsuario : Text, datos : metaUsuarioInput) : async () { 

    if (datos.user == "") {
      Debug.trap("Ingrese un nombre de usuario");
    };
    if (datos.password == "") {
      Debug.trap("Ingrese un password");
    };
    if (datos.nombre == "") {
      Debug.trap("Ingrese un nombre");
    };
    if (datos.aMaterno == "") {
      Debug.trap("Ingrese un apellido materno");
    };
    if (datos.aPaterno == "") {
      Debug.trap("Ingrese un apellido paterno");
    };
    if (datos.role == "") {
      Debug.trap("Rol no reconocido");
    };
    
    usuarios.put(idUsuario, 
      {
        user= datos.user;
        password = datos.password;
        nombre = datos.nombre;
        aMaterno = datos.aMaterno;
        aPaterno = datos.aPaterno;
        role = datos.role;
      } 
    );

    Debug.print("Empleado agregado");
  };

  public query func getUsuario(idUsuario : Text) : async metaUsuario  {
    let usuarioGet = usuarios.get(idUsuario);
    var aux = switch (usuarioGet) {
      case (null) {
        {
          user ="";
          password ="";
          nombre = "";
          aMaterno = "";
          aPaterno = "";
          role = "";
        };
      };
      case (?usuarioGet) usuarioGet;
    };
    return {
      user = aux.user;
      password = aux.password;
      nombre = aux.nombre;
      aMaterno = aux.aMaterno;
      aPaterno = aux.aPaterno;
      role = aux.role;
    };
  };

  public func updateUsuario(idUsuario : Text, datos : metaUsuarioInput) : async () {
    if (datos.user == "") {
      Debug.trap("Ingrese un nombre de usuario");
    };
    if (datos.password == "") {
      Debug.trap("Ingrese un password");
    };
    if (datos.nombre == "") {
      Debug.trap("Ingrese un nombre");
    };
    if (datos.aMaterno == "") {
      Debug.trap("Ingrese un apellido materno");
    };
    if (datos.aPaterno == "") {
      Debug.trap("Ingrese un apellido paterno");
    };
    if (datos.role == "" ) {
      Debug.trap("Ingrese una role correcto");
    };

    if (usuarios.replace(idUsuario, datos) == null) {
      Debug.trap("Usuario no encontrado");
    };
  };

  public func deleteUsuario(idUsuario : Text) : async () {
    if (usuarios.remove(idUsuario) == null) {
      Debug.trap("Usuario no encontrado");
    };
  };

  public shared (msg) func whoami() : async Principal {
    msg.caller;
  };

};