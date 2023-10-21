import FoodCard from "../../../Component/FoodCard/FoodCard";
import Container from "../../../Shared/Container/Container";

const OrderTab = ({ items }) => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </Container>
  );
};

export default OrderTab;
