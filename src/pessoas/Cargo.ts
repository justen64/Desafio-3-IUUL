export class Cargo {
    private nomeCargo: string;
  
    constructor(nomeCargo: string) {
      this.nomeCargo = nomeCargo;
    }

   public getNomeCargo(): string{
        return this.nomeCargo;
    }
  }