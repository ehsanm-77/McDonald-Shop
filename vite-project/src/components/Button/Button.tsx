type btn = {
  style: string;
  children: string;
  onClick?: any;
};
export const Button = (props: btn) => {
  return (
    <>
      <button onClick={props.onClick} className={props.style}>
        {props.children}
      </button>
    </>
  );
};
