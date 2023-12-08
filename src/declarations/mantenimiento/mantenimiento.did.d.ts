import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface metaMantenimiento {
  'tipo' : string,
  'descripcion' : string,
  'piezas_instaladas' : Uint8Array | number[],
  'marcas' : string,
  'piezas_remplazadas' : Uint8Array | number[],
  'idCarro' : string,
  'fecha' : string,
}
export interface metaMantenimientoInput {
  'tipo' : string,
  'descripcion' : string,
  'piezas_instaladas' : Uint8Array | number[],
  'marcas' : string,
  'piezas_remplazadas' : Uint8Array | number[],
  'idCarro' : string,
  'fecha' : string,
}
export interface _SERVICE {
  'deleteMantenimiento' : ActorMethod<[string], undefined>,
  'getMantenimiento' : ActorMethod<[string], metaMantenimiento>,
  'newMantenimiento' : ActorMethod<[string, metaMantenimientoInput], undefined>,
  'updateMantenimiento' : ActorMethod<
    [string, metaMantenimientoInput],
    undefined
  >,
  'whoami' : ActorMethod<[], Principal>,
}
