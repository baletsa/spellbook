// Import Dependencies
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

// Import Stylesheet
import styles from './modal.css';

class SpellDetail extends Component {
    render() {
        // child components, is the modal able to be closed by the user, type of modal (small, medium, large, etc)
        const { children } = this.props;
        // boolean denoting if modal is able to be close, and if modal is supposed to be shown
        const { isModalClosable, isModalOpen, modalType } = this.props.modalStore;
        // if modal is set to be open
        if (isModalOpen) {
            return (
                <div className={`${styles.modal} ${styles[modalType]}`}>
                    {isModalClosable ? <div className={`${styles.close}`} onClick={() => this.props.modalStore.setModalOptions({ isModalOpen: false })}>&times;</div> : null}
                    {children}
                </div>
            );
        }
        // otherwise render nothing
        return null;
    }

    static propTypes = {
        children: PropTypes.node
    };
}

export default Modal;