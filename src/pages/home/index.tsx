import React from "react";
import Col from "antd/es/col";
import Row from "antd/es/row";
import { HomeContainer } from "./home.styles";

interface Props {}

export const Home: React.FC<Props> = () => {
  return (
    <HomeContainer>
      <Row>
        <Col span={24}>
          <img
            alt="Pokepedia Logo"
            width={300}
            src="https://fontmeme.com/permalink/210408/01ff6da0be4e3c441f0f9d6f230873b8.png"
          />
        </Col>
      </Row>
    </HomeContainer>
  );
};

export default Home;
