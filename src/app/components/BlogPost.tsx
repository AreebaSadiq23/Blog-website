import Link from "next/link";
import Image from "next/image";

interface BlogPostProps {
  id: string;
  title: string;
  content: string;
  description: string;  
  imageUrl: string;
  date: string;
}

export default function BlogPost({
  id,
  title,
  content,
  description,
  imageUrl,
  date,
  
}: BlogPostProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h2>
        <p className="text-gray-600 dark:text-white mb-4">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-500">{date}</p>
          <Link
            href={`/blogpage/${id}`}
            className="text-indigo-600 dark:text-slate-500 hover:underline"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
