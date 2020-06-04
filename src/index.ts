class Fukubiki {
  private maxLength: number;
  private length: number;
  private pod: number[];
  private autoReset: boolean;
  private callback: () => void;

  constructor(length: number = 0, param: {
    autoReset?: boolean;
    callback?: () => void;
  } = {}) {
    this.maxLength = this.length = length;
    this.pod = [];
    this.autoReset = param.autoReset || false;
    this.callback = param.callback || function() {};

    for (let i = 0; i < this.length; ++i) {
      this.pod.push(i);
    }
  }

  public reset(): void {
    this.pod.splice(0, this.pod.length);

    for (let i = 0; i < this.maxLength; ++i) {
      this.pod.push(i);
    }

    this.length = this.maxLength;
  }

  public select(): number | null {
    const num = this.pod.splice(Math.random() * this.pod.length | 0, 1)[0];

    this.length = this.pod.length;

    if (!this.pod.length) {
      if (this.autoReset) {
        this.reset();
      }

      this.callback.call(this);
    }

    return typeof num === 'number' ? num : null;
  }
}

export default Fukubiki;