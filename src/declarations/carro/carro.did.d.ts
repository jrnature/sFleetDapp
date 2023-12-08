import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface metaCarro {
  'ano' : string,
  'vin' : string,
  'flota' : string,
  'marca' : string,
  'motor' : string,
  'modelo' : string,
}
export interface metaCarroInput {
  'ano' : string,
  'vin' : string,
  'flota' : string,
  'marca' : string,
  'motor' : string,
  'modelo' : string,
}
export interface _SERVICE {
  'deleteCarro' : ActorMethod<[string], undefined>,
  'getCarro' : ActorMethod<[string], metaCarro>,
  'newCarro' : ActorMethod<[string, metaCarroInput], undefined>,
  'updateCarro' : ActorMethod<[string, metaCarroInput], undefined>,
  'whoami' : ActorMethod<[], Principal>,
}
