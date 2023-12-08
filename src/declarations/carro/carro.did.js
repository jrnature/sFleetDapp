export const idlFactory = ({ IDL }) => {
  const metaCarro = IDL.Record({
    'ano' : IDL.Text,
    'vin' : IDL.Text,
    'flota' : IDL.Text,
    'marca' : IDL.Text,
    'motor' : IDL.Text,
    'modelo' : IDL.Text,
  });
  const metaCarroInput = IDL.Record({
    'ano' : IDL.Text,
    'vin' : IDL.Text,
    'flota' : IDL.Text,
    'marca' : IDL.Text,
    'motor' : IDL.Text,
    'modelo' : IDL.Text,
  });
  return IDL.Service({
    'deleteCarro' : IDL.Func([IDL.Text], [], []),
    'getCarro' : IDL.Func([IDL.Text], [metaCarro], ['query']),
    'newCarro' : IDL.Func([IDL.Text, metaCarroInput], [], []),
    'updateCarro' : IDL.Func([IDL.Text, metaCarroInput], [], []),
    'whoami' : IDL.Func([], [IDL.Principal], []),
  });
};
export const init = ({ IDL }) => { return []; };
