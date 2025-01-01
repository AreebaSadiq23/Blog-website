import { NextResponse } from "next/server";

// Define a Comment type
interface Comment {
  id: number;
  username: string;
  text: string;
  timestamp: string;
}


// Define a comments type (object where each postId has an array of Comment)
const comments: { [key: string]: Comment[] } = {};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get("postId");

  if (!postId) {
    return NextResponse.json({ error: "Post ID is required" }, { status: 400 });
  }

  return NextResponse.json(comments[postId] || []);
}

export async function POST(request: Request) {
  const { postId, username, text } = await request.json();

  if (!postId || !username || !text) {
    return NextResponse.json(
      { error: "Post ID, username, and text are required" },
      { status: 400 }
    );
  }

  const newComment: Comment = {
    id: Date.now(),
    username,
    text,
    timestamp: new Date().toISOString(),
  };

  if (!comments[postId]) {
    comments[postId] = [];
  }

  comments[postId].push(newComment);

  return NextResponse.json(newComment, { status: 201 });
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get("postId");
  const commentId = searchParams.get("commentId");

  if (!postId || !commentId) {
    return NextResponse.json(
      { error: "Post ID and comment ID are required" },
      { status: 400 }
    );
  }

  if (!comments[postId]) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  comments[postId] = comments[postId].filter(
    (comment) => comment.id !== parseInt(commentId)
  );

  return NextResponse.json({ success: true }, { status: 200 });
}

export async function PUT(request: Request) {
  const { postId, commentId, text } = await request.json();

  if (!postId || !commentId || !text) {
    return NextResponse.json(
      { error: "Post ID, comment ID, and new text are required" },
      { status: 400 }
    );
  }

  if (!comments[postId]) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  const commentIndex = comments[postId].findIndex(
    (comment) => comment.id === commentId
  );

  if (commentIndex === -1) {
    return NextResponse.json({ error: "Comment not found" }, { status: 404 });
  }

  comments[postId][commentIndex].text = text;
  comments[postId][commentIndex].timestamp = new Date().toISOString();

  return NextResponse.json(comments[postId][commentIndex], { status: 200 });
}
