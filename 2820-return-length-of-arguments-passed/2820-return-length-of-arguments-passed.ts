function argumentsLength(...args: any[]): number {
    return [...args].map((el) => 1).reduce((acc, cur) => acc + cur, 0)
}


/**
 * argumentsLength(1, 2, 3); // 3
 */