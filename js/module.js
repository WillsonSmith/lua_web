import LoadLua from './lua_loader.js';

async function lua(code) {
  const raw = code.raw[0];
  const module = await LoadLua();
  const l = module.cwrap('exec_lua', 'string', ['string']);

  return l(raw);
}

lua.addModule = (code, module_name)  => {
  /**
   * Whatever
   */
}

/** Convert Array or Object to Lua table */
lua.table = (item) => {
  if (Array.isArray(item)) {
    return item.join(', ') // rudimentary, not good enough, doens't do nested etc.
  }
  /**
   * key val in object
   * {[key] = val, ...}
   */
}
