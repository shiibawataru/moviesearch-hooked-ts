type Props = {
  text: string;
};

export const Header = (props: Props) => {
  return (
    <header className="navbar is-primary columns is-centered">
      {/* <div className="is-centered"> */}
      <h1 className="is-size-1">{props.text}</h1>
      {/* </div> */}
    </header>
  );
};
