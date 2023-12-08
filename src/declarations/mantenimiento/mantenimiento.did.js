export const idlFactory = ({ IDL }) => {
  const metaMantenimiento = IDL.Record({
    'tipo' : IDL.Text,
    'descripcion' : IDL.Text,
    'piezas_instaladas' : IDL.Vec(IDL.Nat8),
    'marcas' : IDL.Text,
    'piezas_remplazadas' : IDL.Vec(IDL.Nat8),
    'idCarro' : IDL.Text,
    'fecha' : IDL.Text,
  });
  const metaMantenimientoInput = IDL.Record({
    'tipo' : IDL.Text,
    'descripcion' : IDL.Text,
    'piezas_instaladas' : IDL.Vec(IDL.Nat8),
    'marcas' : IDL.Text,
    'piezas_remplazadas' : IDL.Vec(IDL.Nat8),
    'idCarro' : IDL.Text,
    'fecha' : IDL.Text,
  });
  return IDL.Service({
    'deleteMantenimiento' : IDL.Func([IDL.Text], [], []),
    'getMantenimiento' : IDL.Func([IDL.Text], [metaMantenimiento], ['query']),
    'newMantenimiento' : IDL.Func([IDL.Text, metaMantenimientoInput], [], []),
    'updateMantenimiento' : IDL.Func(
        [IDL.Text, metaMantenimientoInput],
        [],
        [],
      ),
    'whoami' : IDL.Func([], [IDL.Principal], []),
  });
};
export const init = ({ IDL }) => { return []; };
