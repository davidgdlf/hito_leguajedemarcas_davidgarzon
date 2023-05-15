class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '/',
            multiplicar: 'x',
            restar: '-', 
        }
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        if (tipo === 'cuadrado' || tipo === 'raizCuadrada' || tipo === 'porcentaje') {
        const valorActual = parseFloat(this.valorActual);
        if (isNaN(valorActual)) return;
        this.valorActual = this.calculador[tipo](valorActual);
        this.imprimirValores();
        return;
        }
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
       }
       

    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);
      
        if (isNaN(valorActual) || isNaN(valorAnterior)) return;
      
        let resultado;
      
        switch (this.tipoOperacion) {
          case 'sumar':
            resultado = this.calculador.sumar(valorAnterior, valorActual);
            break;
          case 'restar':
            resultado = this.calculador.restar(valorAnterior, valorActual);
            break;
          case 'multiplicar':
            resultado = this.calculador.multiplicar(valorAnterior, valorActual);
            break;
          case 'dividir':
            resultado = this.calculador.dividir(valorAnterior, valorActual);
            break;
          default:
            return;
        }
      
        this.valorActual = resultado.toString();
      }
      
}