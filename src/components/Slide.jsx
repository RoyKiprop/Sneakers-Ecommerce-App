
function CustomSlide(props) {
    const { index, ...otherProps } = props;
    return (
      <div {...otherProps}>
        <h3>{index}</h3>
      </div>
    );
  }