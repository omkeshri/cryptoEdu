const Cards = () => {
  return (
    <div className="card w-[19rem] shadow-lg space-y-4 p-2 transition-custom cursor-pointer rounded-lg">
      <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
      <img src={""} alt="i" className="rounded-lg h-40 border border-black"></img>
      <div className="p-3 pt-2 space-y-2">
        <button className="py-2 px-4 bg-blue-600 text-white text-xs font-semibold rounded-md">
          Price
        </button>
        <h1 className="text-lg font-semibold text-white">
          We have announced our new product
        </h1>
        <p className="font-semibold text-sm text-[#fff] tracking-wide">
          Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt sed do incididunt sed.
        </p>
      </div>
    </div>
  );
};

export default Cards;
