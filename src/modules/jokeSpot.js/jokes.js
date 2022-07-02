import React, { useEffect, useState } from "react";
import { requestApiData } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Spinner } from "reactstrap";
import "./jokeSpot.css";
import emoji from "../../assets/emoji.png";
const Jokes = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    loadJokes();
  }, []);
  const loadJokes = () => {
    setLoading(true);
    dispatch(requestApiData(onSuccess, onError));
  };
  const onSuccess = (data) => {
    setData(data?.jokes);
    setLoading(false);
  };

  const onError = (message) => {
    console.log(message);
    setLoading(false);
  };
  console.log(data);
  return (
    <div>
      <div className="mx-auto">
        <div className="text-center">
          <h1 className="text-center joke_heading poppins_medium orange_c">JOKE SPOT</h1>
          <button
            className="load_moreBtn poppins_medium lightGrey_bg text-center mt-4 mb-3"
            onClick={() => loadJokes()}
          >
            More....
          </button>
        </div>

        <div>
          {loading ? (
            <div className="text-center myProfileSpinner mx-auto mt-5 mb-5">
              <Spinner
                animation="border"
                style={{ color: "#f77233" }}
                size="lg"
              />
            </div>
          ) : (
            <div>
              {Object.values(data).map((item) => {
                return (
                  <div className="d-flex joke_div justify-content-center">
                    <p className="joke_category">{item?.category}</p>
                    <p className="joke_bubble">
                      {item.joke}
                      <span>
                        <img
                          src={emoji}
                          alt="emoji"
                          className="joke_emoji ml-5 img-fluid"
                        />
                      </span>
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jokes;
