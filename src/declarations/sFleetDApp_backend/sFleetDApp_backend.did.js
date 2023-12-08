export const idlFactory = ({ IDL }) => {
  const metaUsuario = IDL.Record({
    'aMaterno' : IDL.Text,
    'nombre' : IDL.Text,
    'password' : IDL.Text,
    'role' : IDL.Text,
    'user' : IDL.Text,
    'aPaterno' : IDL.Text,
  });
  const metaUsuarioInput = IDL.Record({
    'aMaterno' : IDL.Text,
    'nombre' : IDL.Text,
    'password' : IDL.Text,
    'role' : IDL.Text,
    'user' : IDL.Text,
    'aPaterno' : IDL.Text,
  });
  return IDL.Service({
    'deleteUsuario' : IDL.Func([IDL.Text], [], []),
    'getUsuario' : IDL.Func([IDL.Text], [metaUsuario], ['query']),
    'newUsuario' : IDL.Func([IDL.Text, metaUsuarioInput], [], []),
    'updateUsuario' : IDL.Func([IDL.Text, metaUsuarioInput], [], []),
    'whoami' : IDL.Func([], [IDL.Principal], []),
  });
};
export const init = ({ IDL }) => { return []; };
