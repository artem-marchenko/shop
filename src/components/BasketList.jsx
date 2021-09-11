import { BasketItem } from './BasketItem';

const BasketList = (props) => {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    addQuantity = Function.prototype,
    removeQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className='collection basket-list'>
      <li className='collection-item active'>
        Корзина
        <span
          className='secondary-content basket-close'
          onClick={handleBasketShow}
        >
          <i className='material-icons'>close</i>
        </span>
      </li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
            removeFromBasket={removeFromBasket}
            addQuantity={addQuantity}
            removeQuantity={removeQuantity}
          />
        ))
      ) : (
        <li className='collection-item'>Корзина пуста</li>
      )}
      <li className='collection-item active'>
        Общая стоимость: {totalPrice}
      </li>
      <li className='collection-item'>
        <button className='btn'>Оформить</button>
      </li>
    </ul>
  );
};

export { BasketList };
