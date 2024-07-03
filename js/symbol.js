const CHARACTERS =
  "傾ツエコ気隊タワ愛野ユヘミソ象者ハテ康我たしね住特み併負ノフリ経比記ツヌ側安嘘7衡モ江終";

export class Symbol {
  constructor(x, fontSize, height) {
    this.x = x;
    this.fontSize = fontSize;
    this.height = height;
    this.y = 0;
    this.isDrawing = false;
  }

  update(ctx) {
    if (!this.isDrawing) {
      this.isDrawing = Math.random() > 0.98;

      if (!this.isDrawing) return;
    }

    ctx.textAlign = "center";
    ctx.font = `${this.fontSize}px monospace`;
    // Random character
    const character = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
    ctx.fillText(character, this.x * this.fontSize, this.y * this.fontSize);

    if (this.y * this.fontSize > this.height) {
      this.y = 0;
      this.isDrawing = false;
    } else this.y += 1;
  }
}
