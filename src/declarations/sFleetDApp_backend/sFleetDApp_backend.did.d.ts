import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface metaUsuario {
  'aMaterno' : string,
  'nombre' : string,
  'password' : string,
  'role' : string,
  'user' : string,
  'aPaterno' : string,
}
export interface metaUsuarioInput {
  'aMaterno' : string,
  'nombre' : string,
  'password' : string,
  'role' : string,
  'user' : string,
  'aPaterno' : string,
}
export interface _SERVICE {
  'deleteUsuario' : ActorMethod<[string], undefined>,
  'getUsuario' : ActorMethod<[string], metaUsuario>,
  'newUsuario' : ActorMethod<[string, metaUsuarioInput], undefined>,
  'updateUsuario' : ActorMethod<[string, metaUsuarioInput], undefined>,
  'whoami' : ActorMethod<[], Principal>,
}
