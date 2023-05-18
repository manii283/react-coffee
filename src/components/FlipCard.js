function FlipCard(props) {
  return (
    <div class="half">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={props.img} alt="pizza" className="img-flip" />
          </div>
          <div class="flip-card-back">
            <h3>{props.menu}</h3>
            <p>{props.para}</p>
            <h3>₹ COST</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
