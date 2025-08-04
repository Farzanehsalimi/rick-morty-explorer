import { useParams } from "react-router-dom";
// import useMoveBack from "../../../hooks/useMoveBack";

function CharacterDetail() {
  const { id } = useParams();
  // const moveBack = useMoveBack();
  return (
    <div>
      {/* <button onClick={moveBack}>back</button> */}
      <p>character detail: {id}</p>
    </div>
  );
}

export default CharacterDetail;
