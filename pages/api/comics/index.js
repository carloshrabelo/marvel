import authParams from "helpers/authParams";

const API = process.env.API;

const url = `${API}comics?${authParams}`;

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

const parser = ({ data }) => data.results.map(parserItem);

export default (req, res) =>
  fetch(url)
    .then((response) => response.json())
    .then(parser)
    .then(res.json);
