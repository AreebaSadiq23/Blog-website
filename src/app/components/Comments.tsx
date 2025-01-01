"use client";

import { useState, useEffect, useCallback } from "react";

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

  const fetchComments = useCallback(async () => {
    try {
      const response = await fetch(`/api/comments?postId=${postId}`);
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }, [postId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

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
                        d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.6311 17.0513 12.974 17.0539L14.507 17.853L18.3593 20.2545C18.5553 20.642 18.8411 20.8411 19.2537 20.853C19.6663 20.8411 19.952 20.642 19.8537 20.2545C19.7554 19.866 19.4726 19.6754 19.0857 19.675C18.7426 19.675 18.4171 19.7968 18.107 19.853L14.507 17.853L11.507 14.853L8.50705 17.853V6.034H14.507V17.853Z"
                      ></path>
                    </svg>
                  </button>
                  <button
                    onClick={() => setEditingCommentId(null)}
                    className="cursor-pointer flex items-center text-red-600 bg-transparent hover:bg-red-100 active:border active:border-red-600 rounded-md duration-100 p-2"
                    title="Cancel"
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
                        d="M13.399 12.325C13.617 12.107 13.617 11.859 13.399 11.641L11.641 9.883C11.423 9.665 11.175 9.665 10.957 9.883L8.599 12.241L6.241 9.883C6.023 9.665 5.775 9.665 5.557 9.883L3.799 11.641C3.581 11.859 3.581 12.107 3.799 12.325L6.157 14.983L3.799 17.341C3.581 17.559 3.581 17.807 3.799 18.025L5.557 19.783C5.775 20.001 6.023 20.001 6.241 19.783L8.599 17.425L10.957 19.783C11.175 20.001 11.423 20.001 11.641 19.783L13.399 18.025C13.617 17.807 13.617 17.559 13.399 17.341L11.641 14.983L13.399 12.325Z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p className="text-gray-700">{comment.text}</p>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => {
                      setEditingCommentId(comment.id);
                      setEditingCommentText(comment.text);
                    }}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(comment.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
