import React, { useState } from "react";
import { useHttp } from "../hook/useHttp.js";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { newsCreated } from "../redux/actions.js";

function NewsAddForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const { newsLoadingStatus, filter } = useSelector((state) => state);
  const dispatch = useDispatch();
  const request = useHttp();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newNews = { id: v4(), name, description, category };
    request("http://localhost:3001/news", "POST", JSON.stringify(newNews))
      .then((res) => console.log("Success", res))
      .then(dispatch(newsCreated(newNews)))
      .catch((err) => console.log(err));

    setName("");
    setCategory("");
    setDescription("");
  };

  return (
    <form
      className="border news-add p-4 shadow-lg rounded"
      onSubmit={onSubmitHandler}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name for new News:
        </label>
        <input
          type="text"
          required
          name="name"
          className="form-control"
          id="name"
          placeholder="What is name of news?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="text" className="form-label">
          Description:
        </label>
        <textarea
          type="text"
          name="text"
          required
          className="form-control"
          id="text"
          placeholder="What is your news about?"
          style={{ height: "120px" }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Choose category of news:
        </label>
        <select
          required
          className="form-select"
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>News about...?</option>
          <option value="Hot News">Hot News</option>
          <option value="Sport News">Sport News</option>
          <option value="World News">World News</option>
        </select>
      </div>
      <button type="submit" className="btn shadow-lg w-100 text-light btn-dark">
        Create News
      </button>
    </form>
  );
}

export default NewsAddForm;
