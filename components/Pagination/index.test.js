import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pagination from "./";

const onChange = jest.spyOn(Pagination.defaultProps, "onChange");

const props = {
  pages: 50,
  page: 3,
};

describe("<Pagination/>", () => {
  describe("#render", () => {
    it("Should display the firsts pages", () => {
      const { queryByText } = render(<Pagination {...props} />);
      Array.from(
        Array(Pagination.defaultProps.length).keys(),
        (index) => ++index
      ).forEach((page) => expect(queryByText(`${page}`)).toBeInTheDocument());
      expect(
        queryByText(`${Pagination.defaultProps.length + 1}`)
      ).not.toBeInTheDocument();
    });
    it("Should display the last pages", () => {
      const { queryByText } = render(
        <Pagination {...props} page={props.pages} />
      );
      Array.from(
        Array(Pagination.defaultProps.length).keys(),
        (index) => props.pages - index
      ).forEach((page) => expect(queryByText(`${page}`)).toBeInTheDocument());
      expect(
        queryByText(`${props.pages - Pagination.defaultProps.length - 1}`)
      ).not.toBeInTheDocument();
    });
    it("Shouldn't render without pages", () => {
      const { container } = render(<Pagination page={props.page} />);
      expect(container.firstChild).toBeNull();
    });
  });
  describe("#onChange", () => {
    it("Shouldn't call if btn is active", () => {
      const { queryByText } = render(
        <Pagination {...props} onChange={onChange} />
      );

      userEvent.click(queryByText(`${props.page}`));
      expect(onChange).not.toBeCalled();
    });

    it("Shouldn't call if btn is disabled", () => {
      const { getByTestId } = render(
        <Pagination {...props} page={1} onChange={onChange} />
      );

      userEvent.click(getByTestId("item-first"));
      expect(onChange).not.toBeCalled();
    });

    it("Should call if btn is valid", () => {
      const { queryByText } = render(
        <Pagination {...props} onChange={onChange} />
      );
      const nextPage = props.page + 1;
      userEvent.click(queryByText(`${nextPage}`));
      expect(onChange).toBeCalledWith(nextPage);
    });

    it("Should call next page", () => {
      const { getByTestId } = render(
        <Pagination {...props} onChange={onChange} />
      );
      const nextPage = props.page + 1;
      userEvent.click(getByTestId("item-next"));
      expect(onChange).toBeCalledWith(nextPage);
    });

    it("Should call previous page", () => {
      const { getByTestId } = render(
        <Pagination {...props} onChange={onChange} />
      );
      const prevPage = props.page - 1;
      userEvent.click(getByTestId("item-prev"));
      expect(onChange).toBeCalledWith(prevPage);
    });

    it("Should call the fist page", () => {
      const { getByTestId } = render(
        <Pagination {...props} onChange={onChange} />
      );
      userEvent.click(getByTestId("item-first"));
      expect(onChange).toBeCalledWith(1);
    });

    it("Should call last page", () => {
      const { getByTestId } = render(
        <Pagination {...props} onChange={onChange} />
      );
      userEvent.click(getByTestId("item-last"));
      expect(onChange).toBeCalledWith(props.pages);
    });
  });
});
