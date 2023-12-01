// fill out this container
import { connect } from "react-redux";
import Import from "../components/Import";
import { fetchMakes, deleteMake } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    makes: state.makes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMakes: (index) => dispatch(fetchMakes(index)),
    deleteMake: (index) => dispatch(deleteMake(index)),
  };
};
// note currying syntax - also called partial application
export default connect(mapStateToProps, mapDispatchToProps)(Import);