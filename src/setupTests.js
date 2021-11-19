import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true,
});

//big fix :\
//import EnzymeAdapter from 'enzyme-adapter-react-16';
//adapter: new EnzymeAdapter(),
//this import is no longor working
//

//Unit Tests
//These are test that tests a unit of code withoud any external dependencies
