export default class Gugudan {
  private dan: number;

  constructor(dan: number) {
    this.dan = dan;
  }

  public display(dom: Element) {
    const result = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    dom.innerHTML = `<h3>${this.dan}단</h3>`;
    result.forEach(i => {
      dom.innerHTML += `<div>${this.dan} * ${i} = ${this.dan * i}</div>`
    });

  }
};