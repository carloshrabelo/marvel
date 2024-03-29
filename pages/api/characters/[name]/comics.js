import authParams from "helpers/authParams";

const API = process.env.API;

const url = (characterId) =>
  `${API}characters/${characterId}/comics?${authParams}`;

const parser = ({ id, title, creators, thumbnail: { path, extension } }) => ({
  id,
  title,
  thumbnail: `${path}/portrait_fantastic.${extension}`,
  creators: creators?.items?.map(({ name }) => name),
});

export default ({ query }, res) => {
  const { page = 1, pageSize = 100, name } = query;

  const params = {
    offset: (page - 1) * pageSize,
    limit: pageSize,
  };

  const _params = new URLSearchParams(params).toString();

  return fetch(`${url(name)}&${_params}`)
    .then((response) => response.json())
    .then(({ data: { total, results } }) => ({
      page: page * 1,
      pageSize: pageSize * 1,
      pages: Math.ceil(total / pageSize),
      data: results.map(parser),
    }))
    .then(res.json);
};
