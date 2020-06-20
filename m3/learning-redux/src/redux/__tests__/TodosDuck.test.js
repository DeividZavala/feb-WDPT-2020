import createMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import reducer, { getTodos } from "../TodosDuck";
import mockAxios from "axios";

const mockStore = createMockStore([thunk]);

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
