import Layout from '../components/layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const PostLink = props => (
  <li>
    <Link href="/post/[id]" as={`/post/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <div className="box">
        <h3 className="title">My Blog</h3>
      </div>
    </Layout>
  );
}