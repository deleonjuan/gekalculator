import { connect } from 'react-redux';
import { actions } from '../../../redux/Auth';
import LoginScreen from './LoginScreen';

const mstp = state => ({
    ...state.auth,
});

const mdtp = {
	...actions,
};

export default connect(mstp, mdtp)(LoginScreen)