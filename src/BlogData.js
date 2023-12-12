
import React, { useEffect, useState } from "react";
import "./Blog.css";

function BlogData({ allBlogs }) {
  const [CommentData, setCommentData] = useState({});
  const [Comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await fetch("http://localhost:5000/getAllComments");

      if (response.ok) {
        const allComments = await response.json();
        setComments(allComments || []);
      } else {
        console.error("Failed to fetch comments");
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleCommentSubmit = async (blogId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/addComment/${blogId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content: CommentData[blogId] || "" }),
        }
      );

      if (response.ok) {
        fetchComments();
        setCommentData((prevData) => ({ ...prevData, [blogId]: "" }));
      } else {
        console.error("Failed to add comment");
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleCommentDelete = async (commentId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/deleteComment/${commentId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        fetchComments();
      } else {
        console.error("Failed to delete comment");
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-5 bg-sky-300 relative">
      <div className="flex flex-col items-center absolute top-0">
     
      </div>
      <div className="max-w-screen-xl mx-auto mt-8">
        <table className="w-full border-collapse border border-neutral-200">
          <thead>
            <tr>
              <th className="p-2 border border-neutral-200">Title</th>
              <th className="p-2 border border-neutral-200">Author</th>
              <th className="p-2 border border-neutral-200">Content</th>
              <th className="p-2 border border-neutral-200">Comment</th>
            </tr>
          </thead>
          <tbody>
            {allBlogs.map((item) => (
              <tr key={item.id}>
                <td className="p-2 border border-neutral-200 text-title-case">{item.title} </td>
                <td className="p-2 border border-neutral-200 text-title-case">{item.author} </td>
                <td className="p-2 border border-neutral-200 label-sentence-case">{item.content}</td>

                <td className="p-2 border border-neutral-200">
                  <div className="flex">
                    <input
                      required
                      value={CommentData[item.id] || ""}
                      placeholder="type comment.."
                      onChange={(e) =>
                        setCommentData((prevData) => ({
                          ...prevData,
                          [item.id]: e.target.value,
                        }))
                      }
                      className="h-10 px-4 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex-grow"
                    ></input>
                    <button
                      onClick={() => handleCommentSubmit(item.id)}
                      type="button"
                      className="w-auto inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ml-3"
                    >
                      Submit
                    </button>
                  </div>
                  {Comments.filter((comment) => comment.blogId === item.id).map(
                    (comment, index) => (
                      <div key={index} className="mt-2">
                        <p className="label-title-lowercase">
                          <span className="text-title-case">Comment:</span>{" "}
                          {comment.content}
                        </p>
                        <button
                          type="button"
                          onClick={() => handleCommentDelete(comment.id)}
                          className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                          Delete
                        </button>
                      </div>
                    )
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BlogData;
