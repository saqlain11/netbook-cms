import { Layout, Spin } from "antd";
import styles from "./loader.module.scss";
const Loader: React.FC = () => {
  return (
    <Layout className={styles["loader"]}>
      <Spin size="large" tip="Loading..."></Spin>
    </Layout>
  );
};

export default Loader;
