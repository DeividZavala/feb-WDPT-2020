import createMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import reducer, {
  getTodos,
  loadingTodos,
  getTodosSuccess,
  getTodosError,
} from "../TodosDuck";
import mockAxios from "axios";

const mockStore = createMockStore([thunk]);

const buildState = (changes) => ({
  loading: false,
  status: "",
  results: {},
  error: null,
  ...changes,
});

describe("todos actions creators", () => {
  it("should handle success action", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: [{ id: 1, title: "test", body: "test" }] })
    );
    const store = mockStore();
    await store.dispatch(getTodos());
    const actions = store.getActions();
    const expectedActions = [
      { type: "irontodos/todos/LOADING" },
      {
        type: "irontodos/todos/GET_TODOS_SUCCESS",
        payload: [{ id: 1, title: "test", body: "test" }],
      },
    ];
    expect(actions).toStrictEqual(expectedActions);
  });

  it("should handle error action", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject({ response: { data: { error: "algo salio mal" } } })
    );
    const store = mockStore();
    await store.dispatch(getTodos());
    const actions = store.getActions();
    const expectedActions = [
      { type: "irontodos/todos/LOADING" },
      {
        type: "irontodos/todos/GET_TODOS_ERROR",
        error: { error: "algo salio mal" },
      },
    ];
    expect(actions).toStrictEqual(expectedActions);
  });
});

describe("todos reducer", () => {
  it("should return initial state if no action", () => {
    const state = reducer(undefined, {});
    expect(state).toStrictEqual(buildState());
  });

  it("should handle loading action", () => {
    const action = loadingTodos();
    const state = reducer(undefined, action);
    expect(state).toStrictEqual(buildState({ loading: true }));
  });

  it("should handle getTodosSuccess action", () => {
    const action = getTodosSuccess([{ id: 1, title: "title", body: "body" }]);
    const state = reducer(undefined, action);
    expect(state).toStrictEqual(
      buildState({ results: { 1: { id: 1, title: "title", body: "body" } } })
    );
  });

  it("should handle getTodoError", () => {
    const action = getTodosError("algo salio mal");
    const state = reducer(undefined, action);
    expect(state).toStrictEqual(buildState({ error: "algo salio mal" }));
  });
});
