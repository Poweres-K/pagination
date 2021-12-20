import React, { useState, useEffect } from "react";

const Follower = ({ followers }) => {
  const [currentpage, setCurrentPage] = useState(1);
  const [followerGroup, setFollowerGroup] = useState(followers[0]);

  const handlePageChange = (PageNumber) => {
    if (PageNumber === "Prev") {
      currentpage !== 1
        ? setCurrentPage((Prev) => Prev - 1)
        : setCurrentPage(followerGroup.length);
      return;
    }
    if (PageNumber === "Next") {
      currentpage !== followerGroup.length
        ? setCurrentPage((Prev) => Prev + 1)
        : setCurrentPage(1);
      return;
    }
    setCurrentPage(PageNumber);
  };

  useEffect(() => {
    setFollowerGroup(followers[currentpage - 1]);
  }, [currentpage, followers]);

  return (
    <section className="followers">
      <div className="container">
        {followerGroup.map((follower) => {
          const { id, avatar_url, login, html_url } = follower;
          return (
            <article className="card" key={id}>
              <img src={avatar_url} alt="Error" />
              <h4>{login}</h4>
              <a href={html_url} className="btn">
                View Profile
              </a>
            </article>
          );
        })}
      </div>
      <div className="btn-container">
        <button
          className="prev-btn"
          onClick={() => {
            handlePageChange("Prev");
          }}
        >
          prev
        </button>
        {followers.map((ele, index) => {
          const pageNumber = index + 1;
          return (
            <button
              className={
                currentpage === pageNumber
                  ? "page-btn active-btn"
                  : "page-btn null"
              }
              key={pageNumber}
              onClick={() => {
                handlePageChange(pageNumber);
              }}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className="next-btn"
          onClick={() => {
            handlePageChange("Next");
          }}
        >
          next
        </button>
      </div>
    </section>
  );
};

export default Follower;
