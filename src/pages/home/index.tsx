import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import Button from "antd/es/button";
import { HomeContainer, ImageContainer } from "./Home.styles";
import Table from "./components/Table";
import Title from "antd/lib/typography/Title";
import AddPokemonModal from "../../components/AddPokemonModal";
import { showAddPokemonModal } from "../../components/AddPokemonModal/store/actions";
import { initialize } from "./store/actions";

interface Props {
  initialize: typeof initialize.request;
  showAddPokemonModal: typeof showAddPokemonModal;
}

export const Home: React.FC<Props> = ({ initialize, showAddPokemonModal }) => {
  const handleCreateRouteClick = useCallback(() => showAddPokemonModal(), [showAddPokemonModal]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <HomeContainer>
      <ImageContainer>
        <img
          alt="Pokepedia Logo"
          width={300}
          src="https://fontmeme.com/permalink/210408/01ff6da0be4e3c441f0f9d6f230873b8.png"
        />
        <Title level={2}>Add your all-time pokemon favorites here!</Title>
        <AddPokemonModal />
        <Button type="primary" onClick={handleCreateRouteClick}>
          Add Pokemon
        </Button>
      </ImageContainer>
      <div>
        <Table />
      </div>
    </HomeContainer>
  );
};

const mapDispatchToProps = {
  initialize: initialize.request,
  showAddPokemonModal,
};

export default connect(null, mapDispatchToProps)(Home);
