import React, { useEffect, useRef, useState } from "react";
import { getJokeAction, updateOffset } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import {  Spinner } from "reactstrap";
import "./jokeSpot.css";
import emoji from "../../assets/emoji.png";
const Jokes = () => {
  const data = useSelector((store) => store);console.log(data)
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(5);
const ref = useRef()
  useEffect(() => {
    dispatch(getJokeAction(offset));
  }, [offset]);

  const loadMore = () => {
    setOffset((p) => p + 5);
    setTimeout(() => {
      dispatch(updateOffset(offset));
    }, 500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // console.log(entry);

        if (entry.isIntersecting) {
          //do your actions here
          // console.log('It works!')
          loadMore()
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  return (
    <div className="container-fluid">
      <div className="mx-auto">
        <div className="text-center">
          <h1 className="text-center joke_heading poppins_medium orange_c">
            JOKE SPOT
          </h1>
        </div>

        <div>
          <div>
            {data.jokes.map((item, n) => {
              return (
                <div key={n} className="d-flex joke_div justify-content-center">
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
          <div
            ref={ref}
            onClick={loadMore}
            disabled={data.loading}
            className="mb-5 load_more"
          >
            { (
              <span>
                <span className="me-3">Loading</span>
                <Spinner animation="border" size="sm" />
              </span>
            ) }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jokes;
