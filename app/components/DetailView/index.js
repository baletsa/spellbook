// Import Dependencies
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

// Import Stylesheet
import styles from './detail.css';

class DetailView extends Component {
    render() {

        const { children } = this.props;

        const { isModalClosable, isModalOpen, modalType } = this.props.modalStore;

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