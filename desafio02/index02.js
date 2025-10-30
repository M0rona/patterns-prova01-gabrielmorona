// Decorator Pattern

class Message {
  constructor(text) {
    this.text = text;
  }

  getText() {
    return this.text;
  }
}

class MessageDecorator {
  constructor(message) {
    this.message = message;
  }

  getText() {
    return this.message.getText();
  }
}

class UppercaseDecorator extends MessageDecorator {
  getText() {
    return this.message.getText().toUpperCase();
  }
}

class ExclamationDecorator extends MessageDecorator {
  getText() {
    return this.message.getText() + "!";
  }
}

class PrefixDecorator extends MessageDecorator {
  constructor(message, prefix) {
    super(message);
    this.prefix = prefix;
  }

  getText() {
    return this.prefix + this.message.getText();
  }
}

// Cliente
const msg = new Message("hoje o dia está horrível");
console.log("Mensagem original:", msg.getText());

const msgUpper = new UppercaseDecorator(msg);
console.log("Mensagem em maiúsculas:", msgUpper.getText());

const msgWithExclamation = new ExclamationDecorator(msg);
console.log("Mensagem com exclamação:", msgWithExclamation.getText());

const msgDecorated = new PrefixDecorator(
  new ExclamationDecorator(new UppercaseDecorator(msg)),
  "[ALERTA] "
);
console.log("Mensagem decorada:", msgDecorated.getText());
