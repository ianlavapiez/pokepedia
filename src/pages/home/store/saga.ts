import { v4 as uuidv4 } from "uuid";
import { put, take, takeLatest } from "redux-saga/effects";
import { addPokemon, deletePokemon, initialize, updatePokemon } from "./actions";
import { firestore } from "../../../firebase/firebase.utils";
import Pokemon from "../../../types/Pokemon";

export function* onInitialize() {
  try {
    let isEmpty: boolean = false;
    const reference = firestore.collection("pokemon");
    yield reference.get().then((snapshot) => (isEmpty = snapshot.empty));

    const pokemon: Pokemon[] = [];

    if (isEmpty) {
      console.log("i was called");
      yield put(initialize.success({ pokemon }));
    } else {
      yield reference.get().then((snapshot) =>
        snapshot.forEach((data) => {
          let pokemonData = {
            id: data.id,
            isFavorite: data.data().isFavorite,
            name: data.data().name,
          };

          pokemon.push(pokemonData);
        })
      );

      yield put(initialize.success({ pokemon }));
    }
  } catch (error) {
    yield put(initialize.failure(error));
  }
}

export function* onAddPokemon() {
  try {
    const { payload }: ReturnType<typeof addPokemon.request> = yield take(addPokemon.request);
    const id = uuidv4();
    const reference = firestore.collection("pokemon").doc(id);

    yield reference.set({
      id,
      isFavorite: payload.isFavorite,
      name: payload.name,
    });

    yield put(addPokemon.success());
  } catch (error) {
    yield put(addPokemon.failure(error));
  }
}

export function* onUpdatePokemon() {
  try {
    const { payload }: ReturnType<typeof updatePokemon.request> = yield take(updatePokemon.request);
    const reference = firestore.collection("pokemon").doc(payload.id);

    yield reference.update({
      id: payload.id,
      isFavorite: payload.isFavorite,
      name: payload.name,
    });

    yield put(updatePokemon.success());
  } catch (error) {
    yield put(updatePokemon.failure(error));
  }
}

export function* onDeletePokemon() {
  try {
    const { payload }: ReturnType<typeof deletePokemon.request> = yield take(deletePokemon.request);
    yield firestore.collection("pokemon").doc(payload.id).delete;

    yield put(deletePokemon.success());
  } catch (error) {
    yield put(deletePokemon.failure(error));
  }
}

export function* homeSaga() {
  yield takeLatest(initialize.request, onInitialize);
  yield takeLatest(addPokemon.request, onAddPokemon);
  yield takeLatest(deletePokemon.request, onDeletePokemon);
  yield takeLatest(updatePokemon.request, onUpdatePokemon);
}
