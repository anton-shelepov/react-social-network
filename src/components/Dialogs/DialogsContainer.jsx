import { addMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getDialogs, getMessages } from "../../redux/selectors/dialogs-selectors";


const mapStateToProps = (state) => {
    return {
        dialogs: getDialogs(state),
        messages: getMessages(state)
    }
}

export default compose(
    connect(mapStateToProps, { addMessageCreator }),
    withAuthRedirect
)(Dialogs)