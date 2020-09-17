import authParams from "helpers/authParams";

const API = process.env.API;

const url = (name) =>
  `${API}characters?${authParams}&nameStartsWith=${name}&orderBy=name`;

const parserItem = ({
  id,
  name,
  description,
  thumbnail: { path, extension },
}) => ({
  id,
  name,
  description,
  thumbnail: `${path}/portrait_small.${extension}`,
});

const parser = ({ data: { results } }) => results.map(parserItem);

export default ({ query: { name } }, res) =>
  fetch(url(name))
    .then((response) => response.json())
    .then(parser)
    .then(res.json);
