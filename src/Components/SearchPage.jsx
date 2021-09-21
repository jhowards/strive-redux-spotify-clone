import React from "react";
import AlbumList from "./AlbumList";
import { useHistory } from "react-router-dom";
import { FormControl, Form, Button } from "react-bootstrap";

const SearchPage = () => {
  const history = useHistory();

  const handleSubmit = (e) => {
    console.log("submitted");
    e.preventDefault();
  };
  return (
    <div className="container-fluid mainbody px-0">
      <div className="stickynav">
        <div className="navcontent">
          <div className="arrows">
            <a
              className="linkclear"
              onClick={() => {
                history.goBack();
              }}
            >
              <div className="circle mr-3">
                <div className="arrow left"></div>
              </div>
            </a>
            <a
              className="linkclear"
              onClick={() => {
                history.goForward();
              }}
            >
              <div className="circle">
                <div className="arrow right"></div>
              </div>
            </a>
          </div>
          <Form
            inline
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <FormControl
              type="text"
              placeholder="Artists, songs, or podcasts"
              className="mr-sm-2"
            />
            <Button type="submit" variant="outline-success">
              Search
            </Button>
          </Form>
          <div className="useraccount d-none d-lg-block mr-5">
            <span className="persontext ml-3">James</span>
          </div>
        </div>
      </div>

      <div className="container-fluid bodycontent pl-4">
        <p className="morningtext mt-5">Recent Searches</p>

        <AlbumList />
      </div>
      <div className="container-fluid mt-5"></div>
    </div>
  );
};

export default SearchPage;
