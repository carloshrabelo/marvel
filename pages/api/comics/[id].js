import authParams from "helpers/authParams";

const API = process.env.API;

const url = (comicId) => `${API}comics/${comicId}?${authParams}`;

const getCreators = (regex) => ({ items }) =>
  items
    .filter(({ role }) => regex.test(role))
    .map(({ name }) => name)
    .join(", ");

const getWriter = getCreators(/(?:writer)/i);
const getPenciler = getCreators(/(?:penciler|penciller|inker)/i);

const parserItem = ({
  description,
  title,
  dates,
  creators,
  thumbnail: { path, extension },
}) => {
  const date = dates.find(({ type }) => type === "onsaleDate")?.date;

  return {
    description,
    title,
    date: date && new Intl.DateTimeFormat("pt-BR").format(new Date(date)),
    thumbnail: `${path}.${extension}`,
    writer: getWriter(creators),
    penciler: getPenciler(creators),
  };
};

const parser = ({ data: { results } }) => parserItem(results[0]);

export default ({ query: { id } }, res) =>
  fetch(url(id))
    .then((response) => response.json())
    .then(parser)
    .then(res.json);
