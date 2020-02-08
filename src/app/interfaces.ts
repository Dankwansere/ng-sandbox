export interface StringGenerator {
    name: string;
    (chars: string, nums: number): string;
}

export interface DamageLogger {
    (reason: string): void;
}