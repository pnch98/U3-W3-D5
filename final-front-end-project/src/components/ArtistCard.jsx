const ArtistCard = ({ artist }) => {
  return (
    <div className="col text-center" id={artist.id}>
      <img className="img-fluid" src={artist.picture_medium} alt="track" />
      <p>Artist: {artist.name}</p>
    </div>
  );
};
export default ArtistCard;
