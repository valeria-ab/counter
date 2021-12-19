import { Dispatch } from "redux";

export type AppInitialStateType = {
  startValue: number;
  maxValue: number;
  currentValue: null | number;
  maxValueInputError: boolean;
  startValueInputError: boolean;
  buttonDisable: boolean;
  error: boolean;
  displayMessage: string;
};

const initialState: AppInitialStateType = {
  startValue: 0,
  maxValue: 1,
  startValueInputError: false,
  maxValueInputError: false,
  currentValue: null,
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
    case "SET-CURRENT_VALUE":
      return { ...state, currentValue: action.currentValue };
    case "SET-CURRENT_VALUE":
      return { ...state, currentValue: action.currentValue };
    case "SET-START_VALUE_INPUT_ERROR":
      return { ...state, startValueInputError: action.value };
    case "SET-MAX_VALUE_INPUT_ERROR":
      return { ...state, maxValueInputError: action.value };

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
export const setCurrentValueAC = (currentValue: number) =>
  ({ type: "SET-CURRENT_VALUE", currentValue } as const);
export const setStartValueInputErrorAC = (value: boolean) =>
  ({ type: "SET-START_VALUE_INPUT_ERROR", value } as const);
export const setMaxValueInputErrorAC = (value: boolean) =>
  ({ type: "SET-MAX_VALUE_INPUT_ERROR", value } as const);

export type setStartValueActionType = ReturnType<typeof setStartValueAC>;
export type setStartValueInputErrorActionType = ReturnType<
  typeof setStartValueInputErrorAC
>;
export type setMaxValueInputErrorActionType = ReturnType<
  typeof setMaxValueInputErrorAC
>;
export type setMaxValueActionType = ReturnType<typeof setMaxValueAC>;
export type setButtonDisableActionType = ReturnType<typeof setButtonDisableAC>;
export type setErrorActionType = ReturnType<typeof setErrorAC>;
export type setDisplayMessageActionType = ReturnType<
  typeof setDisplayMessageAC
>;
export type setsetCurrentValueActionType = ReturnType<typeof setCurrentValueAC>;

type ActionsType =
  | setStartValueActionType
  | setMaxValueActionType
  | setButtonDisableActionType
  | setErrorActionType
  | setDisplayMessageActionType
  | setsetCurrentValueActionType
  | setStartValueInputErrorActionType
  | setMaxValueInputErrorActionType;
