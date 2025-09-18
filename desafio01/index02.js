class Config {
  constructor() {
    if (Config.instance) {
      return Config.instance;
    }

    this.settings = {};
    Config.instance = this;
  }

  setConfig(key, value) {
    this.settings[key] = value;
  }

  getConfig(key) {
    return this.settings[key];
  }

  static getInstance() {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }

  static resetInstance() {
    Config.instance = null;
  }
}

console.log("=== Demonstração do Padrão Singleton ===");

const c1 = new Config();
c1.setConfig("lang", "pt-BR");
c1.setConfig("theme", "dark");
c1.setConfig("university", "UNISATC");

const c2 = new Config();
console.log("Configuração de idioma (c2):", c2.getConfig("lang"));
console.log("Configuração de tema (c2):", c2.getConfig("theme"));
console.log("Configuração da universidade (c2):", c2.getConfig("university"));

console.log("c1 e c2 são a mesma instância?", c1 === c2);

const c3 = Config.getInstance();
console.log("Configuração via getInstance():", c3.getConfig("lang"));

c3.setConfig("version", "1.0.0");
console.log("Nova configuração adicionada via c3:", c1.getConfig("version"));

console.log("Todas as instâncias são iguais?", c1 === c2 && c2 === c3);
