import Layout from "../components/Layout";
import LikerProfile from "../components/LikerProfile";

function like() {
  return (
    <Layout>
      <div>
        <LikerProfile />
        <LikerProfile />
        <LikerProfile />
      </div>
    </Layout>
  );
}

export default like;
