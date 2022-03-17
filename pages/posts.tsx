import { NextPage } from "next";
import Link from "next/link";

const posts = [
  { category: "sport", subcategory: "tennis", title: "123" },
  { category: "food", subcategory: "cakes", title: "chocolate-cake" },
];

const Posts: NextPage = () => {
  return (
    <div style={{ padding: "50px" }}>
      <h1 style={{ marginBottom: "20px" }}>Posts</h1>
      <ul>
        {posts.map(({ title, category, subcategory }) => (
          <li key={title}>
            <Link href={`/category/${category}/${subcategory}/${title}`}>
              <a>Post: {title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
