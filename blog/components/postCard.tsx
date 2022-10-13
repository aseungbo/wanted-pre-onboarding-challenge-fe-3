import Link from "next/link";

type Props = {
  title: string;
  slug: string;
  excerpt: string;
  styles?: any;
};

const PostCard = ({ title, slug, styles, excerpt }: Props) => {
  return (
    <section className={styles}>
      <div>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </div>
      <div>
        <p>{excerpt}</p>
      </div>
    </section>
  );
};

export default PostCard;
