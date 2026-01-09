import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CharacterCardResume } from "../components/CharacterCardResume.jsx";

export const HomePage = () => {

	const { store } = useGlobalReducer()

	return (
	<div className="container-fluid">

			<div className="row">

				{store.characterList.map((character, index) => (
					<div className="col-3" key={index}>
						<CharacterCardResume character={character}/>
					</div>))}

			</div>
		</div>
	);
}; 