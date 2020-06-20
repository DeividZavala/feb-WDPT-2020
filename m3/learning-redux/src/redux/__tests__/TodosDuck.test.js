import createMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import reducer, { getTodos } from "../TodosDuck";

const mockStore = createMockStore([thunk]);

describe("todos actions creators", () => {
  it("should handle success action", () => {
    const store = mockStore();
    store.dispatch(getTodos());
    const actions = store.getActions();
    console.log(actions);
  });
});
