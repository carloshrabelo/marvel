/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { render } from "@testing-library/react";
import Header from ".";

jest.mock("containers/Search", () => ({ children }) => <> {children}</>);
describe("<Header/>", () => {
  it("Should render a Component", async () => {
    const { container, queryByText } = render(<Header />);
    expect(container).toBeInTheDocument();
    expect(queryByText("Marvelous")).toBeInTheDocument();
  });
});
