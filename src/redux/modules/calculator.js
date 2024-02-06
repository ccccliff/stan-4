// 초기 상태값
const initialState = {
  number: 0,
};
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";

export const add = (value) => ({
  type: ADD,
  value,
});

export const subtract = (value) => ({
  type: SUBTRACT,
  value,
});
// 리듀서
const calculator = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, number: state.number + action.value };
    case SUBTRACT:
      return { ...state, number: state.number - action.value };

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default calculator;
