import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Comic from "components/Comic";

const Home = () => {
  const router = useRouter();
  const { id } = router.query;
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`/api/comics/${id}`)
      .then((results) => results.json())
      .then(setList);
  }, []);

  return (
    <main>
      <h1>Marvelous {id}</h1>
      <div
        style={{
          gridGap: "8px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 175px)",
          justifyContent: "space-evenly",
        }}
      >
        {list.map((data) => (
          <Comic key={data.id} {...data} />
        ))}
      </div>
      {/* portrait_uncanny */}
    </main>
  );
};
export default Home;
