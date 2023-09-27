import Button from "../components/Button";
import { GoBell, GoDatabase } from "react-icons/go";

function ButtonPage() {
    const handleClick = () => {
    }

  return (
    <div>
      <div>
        <Button primary rounded className="mb-5" onClick={handleClick}>
          <GoBell/>
          Click me
        </Button>
      </div>
      <div>
        <Button secondary rounded onMouseEnter={handleClick}>
          <GoDatabase />
          Buy now
        </Button>
      </div>
      <div>
        <Button success rounded onMouseLeave={handleClick}>
          <GoBell />
          Search
        </Button>
      </div>
      <div>
        <Button warning rounded>
          <GoDatabase />
          Add to Cart
        </Button>
      </div>
      <div>
        <Button danger rounded>
          <GoBell />
          Reserve
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
