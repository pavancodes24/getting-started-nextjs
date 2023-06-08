import { useRouter } from 'next/router';
const TestingSlug = () => {
  const router = useRouter();

  console.log(router.pathname, router.query);
  return <div>Testing slug ...</div>;
};

export default TestingSlug;
