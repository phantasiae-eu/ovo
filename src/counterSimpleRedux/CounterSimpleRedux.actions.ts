import { ActionCreator } from "redux";

export const INCREMENT = "INCREMENT";

export interface AIncrement {
  type: typeof INCREMENT;
}

export const incrementACreator: ActionCreator<AIncrement> = (): AIncrement => ({
  type: INCREMENT
});
