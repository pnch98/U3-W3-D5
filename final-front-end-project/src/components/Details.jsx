import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();
  const type = params.type;
  const id = params.id;
};
export default Details;
