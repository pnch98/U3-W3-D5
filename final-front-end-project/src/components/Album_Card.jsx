const Album_Card = ({ album }) => {
  return (
    <div className="col text-center" id={album.id}>
      <img className="img-fluid" src={album.cover_medium} alt="track" />
      <p>{album.title}</p>
    </div>
  );
};
export default Album_Card;
