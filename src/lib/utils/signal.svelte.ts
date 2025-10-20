class Signal {
  signal = $state({
    tipo: '',
    data: {},
  });

  resetSignal() {
    this.signal = {
      tipo: '',
      data: {},
    };
  }
  sendSignal(tipo: string, data?: any) {
    this.signal = {
      tipo,
      data,
    };
    setTimeout(() => this.resetSignal(), 200);
  }
}

const sinalizador = new Signal();

export default sinalizador;
