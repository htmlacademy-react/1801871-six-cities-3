import { ErrorData } from "../../api/error-type";
import errorSliceReducer from './error-slice';
import { setError } from "./error-slice";


type stateType = {
    errorData: ErrorData | null;
}

describe('error-slice', ()=>{
  it('should return initial state with empty action',()=>{


    const emptyAction = { type: '' };

    const expectedState:stateType = {
    errorData: null,
    };

    const result = errorSliceReducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return  default initial state with empty action',()=>{

    const emptyAction = { type: '' };

    const expectedState:stateType = {
    errorData: null,
    };

    const result = errorSliceReducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

    it('should set errorData in state when action "setError"',()=>{
    
    const payload:ErrorData =  {
        path: '/path',
        type: "global"
    }

    const action = { type: setError, payload:payload };

    const expectedState:stateType = {
        errorData: payload
    };

    const result = errorSliceReducer(undefined, action);

    expect(result).toEqual(expectedState);
  });
});


