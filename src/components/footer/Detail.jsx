function Detail({ title, min }) {
  return (
    <div className="detail">
      <span>{title}</span>
      <span className="detail-time">{min}min</span>
    </div>
  );
}

export default Detail;
