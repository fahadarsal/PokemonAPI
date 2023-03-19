import { Pokemon } from "../services/openapi";
import "./Pokemon.css";
import { pokemonTypes } from "./pokemonTypes";
interface PokemonComponentProps {
  pokemon: Pokemon;
}
const PokemonComponent: React.FC<PokemonComponentProps> = (props) => {
  const item = props.pokemon;
  //   const color = "green";
  const type = pokemonTypes.filter(
    (type) => type?.name === item?.type![0].toLowerCase()
  );
  const color = type[0]?.color ?? "rgb(172	107	202)";
  return (
    <>
      <div
        className="card"
        key={item.id}
        // onClick={() => infoPokemon(item)}
        style={{ backgroundColor: `${color}` }}
      >
        <span className="card-name">#{item.id}</span>
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${item.id}.png`}
            height={128}
            width={128}
            alt=""
          />
          <div className="card-stats">
            <p>Attck:{item.base?.attack}</p>
            <p>Defense:{item.base?.defense}</p>
            <p> HP:{item.base?.hp}</p>
            <p> Speed:{item.base?.speed}</p>
          </div>
        </div>

        <span className="card-name">{item.name?.english}</span>
      </div>
    </>
  );
};

export default PokemonComponent;
