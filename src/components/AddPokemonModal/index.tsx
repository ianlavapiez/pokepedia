import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import Modal from "antd/es/modal";
import TextField from "../Input/TextField";
import { hideAddPokemonModal } from "./store/actions";
import { RootState } from "../../store/rootReducer";
import { isAddPokemonModalVisible, isLoading } from "./store";

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
      <TextField label="Name" onChange={setName} required value={name} />
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
