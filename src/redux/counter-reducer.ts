import { Dispatch } from "redux";

export type AppInitialStateType = {
  startValue: number;
  maxValue: number;
  buttonDisable: boolean;
  error: boolean;
  displayMessage: string;
};

const initialState: AppInitialStateType = {
  startValue: 0,
  maxValue: 1,
  buttonDisable: false,
  error: false,
  displayMessage: "Enter values and press 'set'",
};

export const counterReducer = (
  state: AppInitialStateType = initialState,
  action: ActionsType
): AppInitialStateType => {
  switch (action.type) {
    case "SET-START_VALUE":
      return { ...state, startValue: action.startValue };
    case "SET-MAX_VALUE":
      return { ...state, maxValue: action.maxValue };
    case "SET-BUTTON_DISABLE":
      return { ...state, buttonDisable: action.value };
    case "SET-ERROR":
      return { ...state, error: action.value };
    case "SET-DISPLAY_MESSAGE":
      return { ...state, displayMessage: action.message };

    default:
      return state;
  }
};

export const setStartValueAC = (startValue: number) =>
  ({ type: "SET-START_VALUE", startValue } as const);
export const setMaxValueAC = (maxValue: number) =>
  ({ type: "SET-MAX_VALUE", maxValue } as const);
export const setButtonDisableAC = (value: boolean) =>
  ({ type: "SET-BUTTON_DISABLE", value } as const);
export const setErrorAC = (value: boolean) =>
  ({ type: "SET-ERROR", value } as const);
export const setDisplayMessageAC = (message: string) =>
  ({ type: "SET-DISPLAY_MESSAGE", message } as const);

export type setStartValueActionType = ReturnType<typeof setStartValueAC>;
export type setMaxValueActionType = ReturnType<typeof setMaxValueAC>;
export type setButtonDisableActionType = ReturnType<typeof setButtonDisableAC>;
export type setErrorActionType = ReturnType<typeof setErrorAC>;
export type setDisplayMessageActionType = ReturnType<
  typeof setDisplayMessageAC
>;

type ActionsType =
  | setStartValueActionType
  | setMaxValueActionType
  | setButtonDisableActionType
  | setErrorActionType
  | setDisplayMessageActionType;
