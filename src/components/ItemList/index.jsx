const ItemList = (props) => {
  return (
    <ul>
      {props.quotes.map((quote) => {
        return <li>{quote}</li>;
      })}
    </ul>
  );
};
export default ItemList;
