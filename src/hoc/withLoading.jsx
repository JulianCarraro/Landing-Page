import Spinner from "react-bootstrap/Spinner";

export const withLoading = (Component) => {
  function ComponentWithLoading(props) {
    const isLoading =
      (!props.items && !props.item) ||              
      (Array.isArray(props.items) && props.items.length < 1);

    if (isLoading) {
      return (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "200px" }}
        >
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Cargando...</span>
          </Spinner>
        </div>
      );
    }

    return <Component {...props} />;
  }

  return ComponentWithLoading;
};