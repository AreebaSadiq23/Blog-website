"use client";

import { useState, useEffect } from "react";

interface Comment {
  id: number;
  username: string;
  text: string;
  timestamp: string;
}

export default function Comments({ postId }: { postId: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editingCommentText, setEditingCommentText] = useState("");

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/comments?postId=${postId}`);
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      alert("Please enter your name before posting a comment.");
      return;
    }
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId,
          username,
          text: newComment,
        }),
      });
      if (response.ok) {
        setNewComment("");
        fetchComments();
      }
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  const handleDelete = async (commentId: number) => {
    try {
      const response = await fetch(
        `/api/comments?postId=${postId}&commentId=${commentId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setComments((prevComments) =>
          prevComments.filter((comment) => comment.id !== commentId)
        );
      } else {
        console.error("Failed to delete comment");
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleEdit = async () => {
    if (!editingCommentText.trim()) {
      alert("Comment text cannot be empty.");
      return;
    }
    try {
      const response = await fetch("/api/comments", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId,
          commentId: editingCommentId,
          text: editingCommentText,
        }),
      });
      if (response.ok) {
        setEditingCommentId(null);
        setEditingCommentText("");
        fetchComments();
      }
    } catch (error) {
      console.error("Error editing comment:", error);
    }
  };

  return (
    <div className="mt-10 max-w-xl mx-auto border border-gray-400 bg-opacity-80 p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-400">
        Feel free to leave your comments below!
      </h2>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Enter your name"
            required
          />
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            rows={4}
            placeholder="Leave a comment..."
            required
          />
        </div>
        <button className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group">
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute bottom-0 left-0 h-full -ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-auto h-full opacity-100 object-stretch"
              viewBox="0 0 487 487"
            >
              <path
                fill-opacity=".1"
                fill-rule="nonzero"
                fill="#FFF"
                d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
              ></path>
            </svg>
          </span>
          <span className="absolute top-0 right-0 w-12 h-full -mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="object-cover w-full h-full"
              viewBox="0 0 487 487"
            >
              <path
                fill-opacity=".1"
                fill-rule="nonzero"
                fill="#FFF"
                d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
              ></path>
            </svg>
          </span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>
          <span className="relative text-base font-semibold">Post Comment</span>
        </button>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white p-4 shadow-md rounded-lg border border-gray-200"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-gray-700">
                {comment.username}
              </span>
              <span className="text-sm text-gray-500">
                {new Date(comment.timestamp).toLocaleString()}
              </span>
            </div>
            {editingCommentId === comment.id ? (
              <div>
                <textarea
                  value={editingCommentText}
                  onChange={(e) => setEditingCommentText(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  rows={3}
                />
                <div className="flex space-x-4">
                <button
                  onClick={handleEdit}
                  className="cursor-pointer flex items-center fill-lime-400 bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 p-2"
                  title="Save"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 -0.5 25 25"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span className="text-sm text-lime-400 font-bold pr-1">
                    Save
                  </span>
                </button>
                <button
                  onClick={() => setEditingCommentId(null)}
                  className="bg-gray-950 text-gray-400 border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                >
                  <span className="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-0 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  Cancel
                </button>
                </div>
              </div>
            ) : (
              <p className="text-gray-700 ">{comment.text}</p>
            )}

            <div className="flex items-center mt-4 space-x-4">
              <button
                onClick={() => {
                  setEditingCommentId(comment.id);
                  setEditingCommentText(comment.text);
                }}
                className="bg-gray-950 text-gray-400 border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              >
                <span className="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Edit
              </button>
              <button
                onClick={() => handleDelete(comment.id)}
                className="group relative flex h-10 w-14 flex-col items-center justify-center overflow-hidden rounded-md border-2 border-red-800 bg-red-400 hover:bg-red-600"
              >
                <svg
                  viewBox="0 0 1.625 1.625"
                  className="absolute -top-7 fill-white delay-100 group-hover:top-6 group-hover:animate-[spin_1.4s] group-hover:duration-1000"
                  height="15"
                  width="15"
                >
                  <path d="M.471 1.024v-.52a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099h-.39c-.107 0-.195 0-.195-.195"></path>
                  <path d="M1.219.601h-.163A.1.1 0 0 1 .959.504V.341A.033.033 0 0 0 .926.309h-.26a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099v-.39a.033.033 0 0 0-.032-.033"></path>
                  <path d="m1.245.465-.15-.15a.02.02 0 0 0-.016-.006.023.023 0 0 0-.023.022v.108c0 .036.029.065.065.065h.107a.023.023 0 0 0 .023-.023.02.02 0 0 0-.007-.016"></path>
                </svg>
                <svg
                  width="16"
                  fill="none"
                  viewBox="0 0 39 7"
                  className="origin-right duration-500 group-hover:rotate-90"
                >
                  <line
                    stroke-width="4"
                    stroke="white"
                    y2="5"
                    x2="39"
                    y1="5"
                  ></line>
                  <line
                    stroke-width="3"
                    stroke="white"
                    y2="1.5"
                    x2="26.0357"
                    y1="1.5"
                    x1="12"
                  ></line>
                </svg>
                <svg width="16" fill="none" viewBox="0 0 33 39" className="">
                  <mask fill="white" id="path-1-inside-1_8_19">
                    <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
                  </mask>
                  <path
                    mask="url(#path-1-inside-1_8_19)"
                    fill="white"
                    d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                  ></path>
                  <path stroke-width="4" stroke="white" d="M12 6L12 29"></path>
                  <path stroke-width="4" stroke="white" d="M21 6V29"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
