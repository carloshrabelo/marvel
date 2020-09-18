import authParams from "helpers/authParams";

const API = process.env.API;

const url = (characterId) =>
  `${API}characters/${characterId}/comics?${authParams}`;

const parserItem = ({
  id,
  title,
  creators,
  thumbnail: { path, extension },
}) => ({
  id,
  title,
  thumbnail: `${path}/portrait_fantastic.${extension}`,
  creators: creators?.items?.map(({ name }) => name),
});

const parser = ({ data: { results, ...data } }) => ({
  ...data,
  data: results.map(parserItem),
});

export default ({ query: { name } }, res) =>
  fetch(url(name))
    .then((response) => response.json())
    .then(parser)
    .then(res.json);
