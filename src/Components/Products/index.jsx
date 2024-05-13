import SingleCard from "../SingleCard";
import intuitive from "../../Img/intuitive.png";
import detailed from "../../Img/detailed.png";
import accessible from "../../Img/accessible.png";

function Products(params) {
  return (
    <>
      <div className="flex justify-between w-[83%] m-auto">
        <SingleCard
          src={intuitive}
          title="Intuitiva"
          alt="Intuitiva"
          paragraph="Tus operaciones a unos clicks, sin complicación"
        />
        <SingleCard
          src={detailed}
          title="Detallada"
          alt="Detallada"
          paragraph="Toda la info que necesitas sobre tus operaciones, directo en tu móvil"
        />
        <SingleCard
          src={accessible}
          title="Accesible"
          alt="Accesible"
          paragraph="Desde el bosque, la playa o la oficina, nuestro PXM Exchange en cualquier lugar, en cualquier momento"
        />
      </div>
    </>
  );
}

export default Products;
