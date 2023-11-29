// fill out this container
import { connect } from "react-redux";
import Import from "../components/Import";
import { fetchMakes, deleteMake } from "../redux/actions";

/*
 * Now we are going to write a `mapDispatchToProps` function. Remember, it takes one argument called "dispatch" and it returns an object whose keys are the props you want to pass. For us we will create a key called "addCar" and we'll set its value to a function that dispatches our "addCar" action creator. It looks like this: `(car) => dispatch(addCar(car))`. The car on the left will be passed from our component when we call this function. It will then be passed onto the inner "addCar" function.


const mapStateToProps = (state) => {
  return {
    cars: state.cars,
  };
};

 */

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