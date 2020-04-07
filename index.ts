/**
 * Use this Error to simulate static and runtime exhaustiveness checks in
 * `switch/case` and `if` statements.
 * This is extremely useful to statically catch newly added, unhandled values in
 * an enum or type union.
 *
 * ```ts
 * enum NoYes {
 *   No,
 *   Yes
 * }
 *
 * function toGerman(x: NoYes) {
 *   switch (x) {
 *     case NoYes.No: return 'Nein';
 *     // case NoYes.Yes: return 'Ja';
 *     default: throw new UnsupportedValueError(x);
 *     // => TS2345: Static TS error: Argument of type 'NoYes.Yes' is not assignable to parameter of type 'never'.
 *     // => Runtime: Unsupported value: 'yes'
 *   }
 * }
 * ```
 *
 * @see https://2ality.com/2020/02/typescript-exhaustiveness-checks-via-exceptions.html
 */
export class UnsupportedValueError extends TypeError {
  constructor(value: never) {
    super(`Unsupported value: '${value}'`);
  }
}
