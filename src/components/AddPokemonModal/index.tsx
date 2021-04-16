import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import Modal from "antd/es/modal";
import { hideAddPokemonModal } from "./store/actions";
import { RootState } from "../../store/rootReducer";
import { isAddPokemonModalVisible, isLoading } from "./store";
import Labeled from "../Labeled";
import Select from "antd/es/select";
import { TextFieldContainer } from "./add-pokemon-modal.styles";

type FavoriteType = "yes" | "no";

interface Props {
  hideAddPokemonModal: typeof hideAddPokemonModal;
  isAddPokemonModalVisible: boolean;
  isLoading: boolean;
}

const AddPokemonModal: React.FC<Props> = ({
  hideAddPokemonModal,
  isAddPokemonModalVisible,
  isLoading,
}) => {
  const [isFavorite, setIsFavorite] = useState<FavoriteType>("no");
  const [name, setName] = useState<string>("");

  const handleOkClick = useCallback(() => {}, []);
  const handleHideClick = useCallback(() => hideAddPokemonModal(), [hideAddPokemonModal]);

  return (
    <Modal
      okButtonProps={{ loading: isLoading }}
      onCancel={handleHideClick}
      onOk={handleOkClick}
      title="Add Pokemon"
      visible={isAddPokemonModalVisible}
    >
      <TextFieldContainer label="Pokemon Name" onChange={setName} required value={name} />
      <Labeled label="Favorite?">
        <Select<FavoriteType>
          dropdownMatchSelectWidth={false}
          onChange={setIsFavorite}
          style={{ width: "100%" }}
          value={isFavorite}
        >
          <Select.Option value="no">No</Select.Option>
          <Select.Option value="yes">Yes</Select.Option>
        </Select>
      </Labeled>
    </Modal>
  );
};

const mapStateToProps = (state: RootState) => ({
  isAddPokemonModalVisible: isAddPokemonModalVisible(state),
  isLoading: isLoading(state),
});

const mapDispatchToProps = {
  hideAddPokemonModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPokemonModal);
