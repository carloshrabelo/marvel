import debounce from "./debounce";

const fn = jest.fn();
const time = 100;

const waitTime = (lessTime = 0) =>
  new Promise((resolve) => setTimeout(resolve, time - lessTime));

afterEach(() => {
  jest.clearAllMocks();
});

describe("debounce", () => {
  it("Executes debounce function immediately", () => {
    const callFn = debounce(fn, time, true);
    callFn("first");
    callFn("second");
    callFn("third");

    expect(fn).toBeCalledTimes(1);
    expect(fn).toBeCalledWith("first");
  });

  it("Executes only last debounce function ", async () => {
    const callFn = debounce(fn, time);
    callFn("first");
    callFn("second");
    callFn("third");

    await waitTime();
    expect(fn).toBeCalledTimes(1);
    expect(fn).toBeCalledWith("third");
  });

  it("Don't call function if another is called before times end", async () => {
    const callFn = debounce(fn, time);
    callFn("first");

    await waitTime(1);
    expect(fn).toBeCalledTimes(0);
    callFn("second");

    await waitTime(1);
    expect(fn).toBeCalledTimes(0);
    callFn("third");

    await waitTime();
    expect(fn).toBeCalledTimes(1);
    expect(fn).toBeCalledWith("third");
    callFn("fourth");

    await waitTime();
    expect(fn).toBeCalledTimes(2);
    expect(fn).toBeCalledWith("fourth");
  });
});
