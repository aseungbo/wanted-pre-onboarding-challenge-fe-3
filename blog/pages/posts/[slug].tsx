// TODO [slug].tsx 알아보기
// TODO 코드를 뜯어보고 없는 페이지인 경우 자동으로 404로 redirect되는 이유 파악하기
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import type PostType from "../../interfaces/post";
import PostCard from "../../components/postCard";
import styles from "../../styles/Home.module.css";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  return (
    <Container>
      {router.isFallback ? (
        <h2>Loading…</h2>
      ) : (
        <>
          <article className={styles.main}>
            <Head>
              <title>{post.title}</title>
            </Head>
            <h2>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </>
      )}
    </Container>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, ["title", "slug", "content"]);
  console.log(post);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: true,
  };
}
