import { render } from "@testing-library/react";
import ComicDetails from ".";

const props = {
  description: "description",
  title: "title",
  date: new Intl.DateTimeFormat("pt-BR").format(Date.now()),
  thumbnail: "http://google.com/",
  writers: ["Jeff Christiansen", "Anthony Flamini", "Richard Green"],
  pencilers: ["Ronald Byrd", "Tom Grummett"],
};

describe("<Comic/>", () => {
  it("renders a Comic component", () => {
    const { getByText, container } = render(<ComicDetails {...props} />);
    const arraySearch = (writer) =>
      expect(getByText(new RegExp(writer))).toBeInTheDocument();

    const img = container.querySelector("img");

    expect(getByText(props.description)).toBeInTheDocument();
    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(props.date)).toBeInTheDocument();

    props.writers.forEach(arraySearch);
    props.pencilers.forEach(arraySearch);

    expect(img).toBeInTheDocument();
    expect(img.src).toBe(props.thumbnail);
  });

  it("display labels in singular", () => {
    const { getByText } = render(
      <ComicDetails
        {...props}
        writers={[props.writers[0]]}
        pencilers={[props.pencilers[0]]}
      />
    );
    expect(getByText("Escritor")).toBeInTheDocument();
    expect(getByText("Desenhista")).toBeInTheDocument();
  });

  it("display labels in plural", () => {
    const { getByText } = render(<ComicDetails {...props} />);
    expect(getByText("Escritores")).toBeInTheDocument();
    expect(getByText("Desenhistas")).toBeInTheDocument();
  });

  it("display labels in plural", () => {
    const { getByText } = render(<ComicDetails {...props} />);
    expect(getByText("Escritores")).toBeInTheDocument();
    expect(getByText("Desenhistas")).toBeInTheDocument();
  });

  it("display '(?)' when hasn't data about writers", () => {
    const { getByText } = render(<ComicDetails {...props} pencilers={[]} />);
    expect(getByText("(?)")).toBeInTheDocument();
  });

  it("display '(?)' when hasn't data about pencilers", () => {
    const { getByText } = render(<ComicDetails {...props} writers={[]} />);
    expect(getByText("(?)")).toBeInTheDocument();
  });
});
