import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';

import {connect} from 'react-redux';
import {openBackdropLibrary} from '../reducers/modals';
import {activateTab, COSTUMES_TAB_INDEX} from '../reducers/editor-tab';

import StageSelectorComponent from '../components/stage-selector/stage-selector.jsx';

import backdropLibraryContent from '../lib/libraries/backdrops.json';
import costumeLibraryContent from '../lib/libraries/costumes.json';
<<<<<<< HEAD
import {importBitmap} from 'scratch-svg-renderer';
import log from '../lib/log.js';
=======
import {handleFileUpload, costumeUpload} from '../lib/file-uploader.js';
>>>>>>> upstream/develop

class StageSelector extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleClick',
            'handleNewBackdrop',
            'handleSurpriseBackdrop',
            'handleEmptyBackdrop',
            'addBackdropFromLibraryItem',
            'handleFileUploadClick',
            'handleBackdropUpload',
            'setFileInput'
        ]);
    }
    addBackdropFromLibraryItem (item) {
        const vmBackdrop = {
            name: item.name,
            md5: item.md5,
            rotationCenterX: item.info[0] && item.info[0] / 2,
            rotationCenterY: item.info[1] && item.info[1] / 2,
            bitmapResolution: item.info.length > 2 ? item.info[2] : 1,
            skinId: null
        };
        this.handleNewBackdrop(vmBackdrop);
    }
    handleClick () {
        this.props.onSelect(this.props.id);
    }
    handleNewBackdrop (backdrop) {
        this.props.vm.addBackdrop(backdrop.md5, backdrop).then(() =>
            this.props.onActivateTab(COSTUMES_TAB_INDEX));
    }
    handleSurpriseBackdrop () {
        // @todo should this not add a backdrop you already have?
        const item = backdropLibraryContent[Math.floor(Math.random() * backdropLibraryContent.length)];
        this.addBackdropFromLibraryItem(item);
    }
    handleEmptyBackdrop () {
        // @todo this is brittle, will need to be refactored for localized libraries
        const emptyItem = costumeLibraryContent.find(item => item.name === 'Empty');
        if (emptyItem) {
            this.addBackdropFromLibraryItem(emptyItem);
        }
    }
    handleBackdropUpload (e) {
<<<<<<< HEAD
        const thisFileInput = e.target;
        let thisFile = null;
        const reader = new FileReader();
        reader.onload = () => {
            // Reset the file input value now that we have everything we need
            // so that the user can upload the same image multiple times
            // if they choose
            thisFileInput.value = null;
            // Cache the image in storage
            const storage = this.props.vm.runtime.storage;
            const fileType = thisFile.type; // check what the browser thinks this is
            // Only handling png and svg right now
            let backdropFormat = null;
            let assetType = null;
            if (fileType === 'image/svg+xml') {
                backdropFormat = storage.DataFormat.SVG;
                assetType = storage.AssetType.ImageVector;
            } else if (fileType === 'image/jpeg') {
                backdropFormat = storage.DataFormat.JPG;
                assetType = storage.AssetType.ImageBitmap;
            } else if (fileType === 'image/png') {
                backdropFormat = storage.DataFormat.PNG;
                assetType = storage.AssetType.ImageBitmap;
            }
            if (!backdropFormat) return;

            const addBackdropFromBuffer = (function (error, backdropBuffer) {
                if (error) {
                    log.warn(`An error occurred while trying to extract image data: ${error}`);
                    return;
                }

                const md5 = storage.builtinHelper.cache(
                    assetType, backdropFormat, backdropBuffer);

                const md5Ext = `${md5}.${backdropFormat}`;

                const vmBackdrop = {
                    name: 'backdrop1',
                    dataFormat: backdropFormat,
                    md5: `${md5Ext}`
                };

                this.props.vm.addBackdrop(md5Ext, vmBackdrop);
                this.props.onActivateTab(COSTUMES_TAB_INDEX);
            }).bind(this);

            if (backdropFormat === storage.DataFormat.SVG) {
                // Must pass in file data as a Uint8Array,
                // passing in an array buffer causes the sprite/costume
                // thumbnails to not display because the data URI for the costume
                // is invalid
                addBackdropFromBuffer(null, new Uint8Array(reader.result));
            } else {
                // otherwise it's a bitmap
                importBitmap(reader.result, addBackdropFromBuffer);
            }
        };
        if (thisFileInput.files) {
            thisFile = thisFileInput.files[0];
            reader.readAsArrayBuffer(thisFile);
        }
=======
        const storage = this.props.vm.runtime.storage;
        handleFileUpload(e.target, (buffer, fileType, fileName) => {
            costumeUpload(buffer, fileType, fileName, storage, this.handleNewBackdrop);
        });
>>>>>>> upstream/develop
    }
    handleFileUploadClick () {
        this.fileInput.click();
    }
    setFileInput (input) {
        this.fileInput = input;
    }
    render () {
        const {
            /* eslint-disable no-unused-vars */
            assetId,
            id,
            onActivateTab,
            onSelect,
            /* eslint-enable no-unused-vars */
            ...componentProps
        } = this.props;
        return (
            <StageSelectorComponent
                fileInputRef={this.setFileInput}
                onBackdropFileUpload={this.handleBackdropUpload}
                onBackdropFileUploadClick={this.handleFileUploadClick}
                onClick={this.handleClick}
                onEmptyBackdropClick={this.handleEmptyBackdrop}
                onSurpriseBackdropClick={this.handleSurpriseBackdrop}

                {...componentProps}
            />
        );
    }
}
StageSelector.propTypes = {
    ...StageSelectorComponent.propTypes,
    id: PropTypes.string,
    onSelect: PropTypes.func
};

const mapStateToProps = (state, {assetId}) => ({
    url: assetId && state.vm.runtime.storage.get(assetId).encodeDataURI(),
    vm: state.vm
});

const mapDispatchToProps = dispatch => ({
    onNewBackdropClick: e => {
        e.preventDefault();
        dispatch(activateTab(COSTUMES_TAB_INDEX));
        dispatch(openBackdropLibrary());
    },
    onActivateTab: tabIndex => {
        dispatch(activateTab(tabIndex));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StageSelector);
