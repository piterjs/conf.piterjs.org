export const lazy = <Args extends Array<unknown>, Return>(f: (...as: Args) => Return, ...as: Args): (() => Return) => () => f(...as);
