export function getBuffer(data) {
    return (input => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i++) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(data);
  }

  export default class ArrayBufferConverter {
    static load(buffer) {
      this.buffer = buffer;
    }
  
    static toString() {
      return [...new Uint16Array(this.buffer)].map(e => String.fromCharCode(e)).join('');
    }
  }
