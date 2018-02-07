import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';
import Box from '../box/box.jsx';
import {defineMessages, injectIntl, intlShape, FormattedMessage} from 'react-intl';

import styles from './preview-modal.css';
import catIcon from './happy-cat.png';

const messages = defineMessages({
    label: {
        id: 'gui.previewInfo.label',
        defaultMessage: 'Try Cognimates Extensions for Scratch 3.0',
        description: 'Cognimates Extensions for Scratch 3.0'
    }
});

const PreviewModal = ({intl, ...props}) => (
    <ReactModal
        isOpen
        className={styles.modalContent}
        contentLabel={intl.formatMessage({...messages.label})}
        overlayClassName={styles.modalOverlay}
        onRequestClose={props.onTryIt}
    >
        <Box className={styles.illustration} />

        <Box className={styles.body}>
            <h2>
                <FormattedMessage
                    defaultMessage="Welcome to Cognimates Extensions for Scratch 3.0"
                    description="Header for Preview Info Modal"
                    id="gui.previewInfo.welcome"
                />
            </h2>
            <p>
                <FormattedMessage
                    defaultMessage="I developed these extensions for my study on AI for kids and families"
                    description="Invitation to try Cognimates Extensions"
                    id="gui.previewInfo.invitation"
                />
            </p>

            <Box className={styles.buttonRow}>
                {/* <button
                    className={styles.noButton}
                    onClick={props.onCancel}
                >
                    <FormattedMessage
                        defaultMessage="Not Now"
                        description="Label for button to back out of trying Scratch 3.0 preview"
                        id="gui.previewInfo.notnow"
                    />
                </button> */}
                <button
                    className={styles.okButton}
                    title="tryit"
                    onClick={props.onTryIt}
                >
                    <FormattedMessage
                        defaultMessage="Try them!"
                        description="Label for button to try Scratch 3.0 preview"
                        id="gui.previewModal.tryit"
                        values={{
                            caticon: (
                                <img
                                    className={styles.catIcon}
                                    src={catIcon}
                                />
                            )
                        }}
                    />
                </button>
            </Box>
            <Box className={styles.faqLinkText}>
                <FormattedMessage
                    defaultMessage="To learn more, go to the {projectpage}."
                    description="Invitation to try 3.0 preview"
                    id="gui.previewInfo.projectpage"
                    values={{
                        projectpage: (
                            <a
                                className={styles.faqLink}
                                href="/media.mit.edu/projects/cognimates/overview/"
                            >
                                <FormattedMessage
                                    defaultMessage="Project Page"
                                    description="link to Cognimates projectpage"
                                    id="gui.previewInfo.project"
                                />
                            </a>
                        )
                    }}
                />
            </Box>
        </Box>
    </ReactModal>
);

PreviewModal.propTypes = {
    intl: intlShape.isRequired,
    onCancel: PropTypes.func.isRequired,
    onTryIt: PropTypes.func.isRequired
};

export default injectIntl(PreviewModal);
