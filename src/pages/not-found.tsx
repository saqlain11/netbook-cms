import { Button, Result } from "@netbook/components";
import React from "react";
import { useNavigate } from "react-router-dom";
import STATIC_TEXT from "@netbook/__Fixtures__/ui-static-text";
import styles from "./not-found.module.scss";
const { notFound } = STATIC_TEXT;
const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Result
      className={styles["not-found"]}
      status={404}
      title={notFound.status}
      subTitle={notFound.description}
      extra={
        <Button type="primary" onClick={() => navigate(-1)}>
          {notFound.backHome}
        </Button>
      }
    />
  );
};

export default NotFound;
