/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { render } from "@testing-library/react";
import Layout from ".";

jest.mock("containers/Search", () => ({ children }) => <> {children}</>);
describe("<Layout/>", () => {
  it("Should render a Component", async () => {
    const { container, queryByText } = render(
      <Layout>
        <p>Content</p>
      </Layout>
    );
    expect(container).toBeInTheDocument();
    expect(queryByText("Content")).toBeInTheDocument();
    expect(queryByText("Marvelous")).toBeInTheDocument();
  });
});
