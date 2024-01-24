import Gugudan from './Gugudan';

export default class App {
  private domRoot: Element | null;
  constructor(id: string) {
    this.domRoot = document.getElementById(id);
  }

  public display(gugudan: Gugudan) {
    gugudan.display(this.domRoot!);
  }
};