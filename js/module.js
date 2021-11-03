import LoadLua from './lua_loader.js';

export class Lua {
  _currentCode = '';

  constructor(code, execFn) {
    this.code = code;
    this._exec = execFn;
  }

  static async new(code) {
    if (code) this.code = code;
    const program = await LoadLua();
    return new Lua(code, program.cwrap('exec_lua', 'string', ['string']));
  }

  exec() {
    return this._exec(this.code);
  }

  set code(value) {
    this._currentCode = value;
  }

  get code() {
    return this._currentCode;
  }
}
