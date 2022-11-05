import React, { useEffect, useContext,useState } from "react";
import ShowsContext from "../context/shows/showsContext";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const Detailpage = (props) => {
  const [name, setName] = useState("");
  const [seats, setSeats] = useState("");
  const { getSingleShow, singleShow, loading } = useContext(ShowsContext);
  let { id } = useParams();
  useEffect(() => {
    getSingleShow(id);
    // eslint-disable-next-line
  },[]);

  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  const handleNameChange=(event)=>{
    setName(event.target.value)
  }
  const handleSeatsChange = (event) => {
    setSeats(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("Name", name);
    localStorage.setItem("seats", seats);
    console.log(localStorage.getItem('Name'));
    console.log(localStorage.getItem("seats"));
    alert("Booked seats successfully for "+name+" with number of seats "+seats)
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="p-5 mb-4 bg-light rounded-3">
              <div className="container-fluid py-5">
                <h3 className="display-6 fw-bold">{singleShow.name}</h3>

                {singleShow.genres &&
                  singleShow.genres.map((genre) => (
                    <span class="badge text-bg-dark my-3 " key={genre}>
                      {genre}
                    </span>
                  ))}
                <p>
                  <strong>Status:</strong>{" "}
                  {singleShow.status && singleShow.status}
                </p>
                <p>
                  <strong>Rating:</strong>{" "}
                  {singleShow.rating ? singleShow.rating.average : "No rating"}
                </p>
                <p>
                  <strong>Offical Site:</strong>{" "}
                  {singleShow.officalSite ? (
                    <a
                      href={singleShow.officalSite}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {singleShow.officalSite}
                    </a>
                  ) : (
                    "No offical site"
                  )}
                </p>

                <p className="col-md-10 fs-6">
                  {singleShow.summary && removeTags(singleShow.summary)}
                </p>
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-whatever="@mdo"
                >
                  Book Tickets
                </button>
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          {singleShow.name}
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <form>
                          <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">
                              Name:
                            </label>
                            <input
                              value={name}
                              onChange={handleNameChange}
                              type="text"
                              class="form-control"
                              id="seats"
                            />
                          </div>
                          <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">
                              No of seats:
                            </label>
                            <input
                              value={seats}
                              onChange={handleSeatsChange}
                              type="text"
                              class="form-control"
                              id="seats"
                            />
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          class="btn btn-dark"
                          onClick={handleSubmit}
                        >
                          Book Tickets
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <img
              style={{ marginTop: "150px" }}
              src={
                singleShow.image
                  ? singleShow.image.medium
                  : "data:image/jpeg;base64,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"
              }
              alt=""
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Detailpage;
