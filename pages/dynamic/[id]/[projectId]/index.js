import { useRouter } from 'next/router';

const ProjectData = () => {
  const router = useRouter();
  console.log(router.query, router.pathname);
  return (
    <div> This is project id which is inside of another dynamic id of id</div>
  );
};

export default ProjectData;
