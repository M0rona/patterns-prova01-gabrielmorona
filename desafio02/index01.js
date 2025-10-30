// Adapter Pattern

class ModernPaymentAPI {
  process(amountInCents) {
    console.log(`Pagamento de R$${amountInCents / 100} via API moderna.`);
  }
}

class PaymentAdapter {
  constructor(modernAPI) {
    this.modernAPI = modernAPI;
  }

  makePayment(amount) {
    const amountInCents = amount * 100;
    this.modernAPI.process(amountInCents);
  }
}

class PaymentProcessor {
  constructor(system) {
    this.system = system;
  }

  pay(amount) {
    this.system.makePayment(amount);
  }
}

// Cliente
const modernAPI = new ModernPaymentAPI();
const adapter = new PaymentAdapter(modernAPI);
const processor = new PaymentProcessor(adapter);
processor.pay(100);
