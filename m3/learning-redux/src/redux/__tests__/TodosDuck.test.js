import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import reducer, { getTodos, loadingTodos, getTodosSuccess } from "../TodosDuck";
import mockAxios from "axios";

const mockStore = configureStore([thunk]);

const buildState = (changes) => ({
  loading: false,
  status: "", // pending | success | error
  results: {},
  error: null,
  ...changes,
});

describe("todo actions creator", () => {
  it("should handle getTodos action success", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: [{ id: 1, title: "test", body: "test" }] })
    );
    const store = mockStore();
    await store.dispatch(getTodos());
    const expectedActions = [
      { type: "irontodos/todos/LOADING" },
      {
        type: "irontodos/todos/GET_TODOS_SUCCESS",
        payload: [{ id: 1, title: "test", body: "test" }],
      },
    ];
    const actions = store.getActions();
    expect(actions).toStrictEqual(expectedActions);
  });

  it("should handle getTodos action error", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject({ response: { data: { error: "algo salio mal" } } })
    );
    const store = mockStore();
    const expectedActions = [
      { type: "irontodos/todos/LOADING" },
      {
        type: "irontodos/todos/GET_TODOS_ERROR",
        error: { error: "algo salio mal" },
      },
    ];
    await store.dispatch(getTodos());
    const actions = store.getActions();
    expect(actions).toStrictEqual(expectedActions);
  });
});

describe("todo reducer", () => {
  it("should return the initial state on default", () => {
    const initialState = buildState();
    const state = reducer(initialState, {});
    expect(state).toStrictEqual(initialState);
  });

  it("should be loading", () => {
    const initialState = buildState({ loading: true });
    const action = loadingTodos();
    const state = reducer(initialState, action);
    expect(state).toStrictEqual(initialState);
  });

  it("should return results", () => {
    const initialState = buildState({
      results: { 1: { id: 1, title: "test", body: "test" } },
    });
    const action = getTodosSuccess([{ id: 1, title: "test", body: "test" }]);
    const state = reducer(initialState, action);
    expect(state).toStrictEqual(initialState);
  });
});
