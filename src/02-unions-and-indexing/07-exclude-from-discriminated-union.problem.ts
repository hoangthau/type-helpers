import { Equal, Expect } from "../helpers/type-utils";

export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

type NonKeyDownEvents = unknown;

interface A {
  id: string;
  name: number
}


type tests = [
  Expect<
    Equal<
      NonKeyDownEvents,
      | { type: "click"; event: MouseEvent }
      | { type: "focus"; event: FocusEvent }
    >
  >,
];
