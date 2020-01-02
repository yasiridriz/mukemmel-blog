import { useRouter } from 'next/router';
import Layout from '../components/layout';

const titleVariants = {
  initial: { scale: 1.07, y: 0, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: .7, ease: [0.48, 0.15, 0.25, 0.96], when: "beforeChildren", delay: 0.2  } },
  exit: {
      scale: 0.6,
      y: 100,
      opacity: 0,
      transition: { duration: 0.25, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};
const contentVariants = {
  initial: { scale: 1, y: 60, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.48, 0.15, 0.25, 0.96], staggerChildren: 0.5 } },
  exit: {
      scale: 0.6,
      y: 100,
      opacity: 0,
      transition: { duration: 0.25, ease: [0.48, 0.15, 0.25, 0.96] }
  },
}

const Page = () => {
  const router = useRouter();

  return (
    <div>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </div>
  );
};

export default Page;