import { useRouter } from 'next/router';
import Link from 'next/link';
const About = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <div>About page</div>
      <Link href="/dynamic/123/2345">hello world</Link>
      <Link
        href={{
          pathname: '/dynamic',
          query: { id: '1234', projecdtId: '34567' },
        }}
      >
        Testing
      </Link>

      <button
        onClick={() => {
          router.push('/dynamic/1234/54');
        }}
      >
        using button and router instead of link
      </button>
    </div>
  );
};

export default About;
