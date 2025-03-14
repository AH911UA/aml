
export async function readableStreamToJson<T = any>(readableStream: ReadableStream): Promise<T> {
    const reader = readableStream.getReader();
    let chunks: Uint8Array[] = [];
    let totalLength = 0;

    while (true) {
        const { done, value } = await reader.read();

        if (done) {
            break;
        }

        chunks.push(value);
        totalLength += value.length;
    }

    const combinedChunks = new Uint8Array(totalLength);
    let offset = 0;
    for (const chunk of chunks) {
        combinedChunks.set(chunk, offset);
        offset += chunk.length;
    }

    const decoder = new TextDecoder();
    const text = decoder.decode(combinedChunks);

    try {
        return JSON.parse(text);
    } catch (error) {
        console.error('Error parsing JSON:', error);
        throw error;
    }
}


export class Calculate {
    value: number;

    constructor(v: number) {
        this.value = v * 100000;
    }

    add(a: number) {
        const result = new Calculate(a);
        this.value = Math.floor(this.value + a * 100000);
        return this;
    }

    subtract(a: number) {
        this.value = Math.floor(this.value - a * 100000);
        return this;
    }

    multiply(a: number) {
        this.value = this.value * (a * 100000);
        return this;
    }

    result() {
        return Math.floor(this.value / 100000);
    }
}