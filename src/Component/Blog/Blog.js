import React, { useEffect, useState } from "react";
import BlogData from "./BlogData";
import "./Blog.css"
import Header from "../Header.js/Header";
export default function Blog() {
  const [BlogTitle, setBlogTitle] = useState("");
  const [BlogAuthor, setBlogAuthor] = useState("");
  const [BlogContent, setBlogContent] = useState("");
  const [BlogRes, setBlogRes] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/createBlog", {
      method: "post",
      body: JSON.stringify({
        BlogContent: BlogContent,
        BlogAuthor: BlogAuthor,
        BlogTitle: BlogTitle,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          throw new Error("something went wrong");
        } else {
          console.log(data);
          FetchAllBlog();
          alert("blog created successfully");
        }
      })
      .catch((err) => alert("error ", err));
    setBlogAuthor("");
    setBlogContent("");
    setBlogTitle("");
  };
  const FetchAllBlog = () => {
    fetch("http://localhost:5000/getAllBlogs", {
      method: "get",
    })
      .then((res) => res.json())

      .then((data) => {
        setAllBlogs(data);
      })

      .catch((err) => console.log("something went wrong"));
  };
  useEffect(() => {
    FetchAllBlog();
  }, []);
  return (
    <div class=" flex  ">
  
      <form
        onSubmit={formSubmitHandler}
        class="bg-gray-50 rounded-lg shadow-lg p-8 w-96"
      >
        <div class="mb-4">
          <label class="font-semibold mb-2 block label-title-case">Blog <span className="label-title-lowercase">title</span></label>
          <input
            type="text"
            value={BlogTitle}

            class="border rounded px-2 py-2 w-full "
            onChange={(e) => setBlogTitle(e.target.value)}
            required
          />
        </div>
        <div class="mb-4">
          <label

            class="font-semibold mb-2 block label-title-case"
          >
            Blog Auther
          </label>

          <input
            type="text"
            value={BlogAuthor}
            onChange={(e) => setBlogAuthor(e.target.value)}

            class="border rounded px-2 py-2 w-full"
            required
          />
        </div>
        <div class="mb-6">
          <label for="support" class="font-semibold mb-2 block label-title-case">
            Blog Content
          </label>
          <textarea
            value={BlogContent}
            onChange={(e) => setBlogContent(e.target.value)}

            class="border rounded px-2 py-2 w-full h-24"
            required
          ></textarea>
        </div>
        <div class="flex justify-between items-center">
          <button
            class="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-700"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <BlogData allBlogs={allBlogs}></BlogData>
    </div>
  );
}
