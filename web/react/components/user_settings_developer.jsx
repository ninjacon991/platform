// Copyright (c) 2015 Spinpunch, Inc. All Rights Reserved.
// See License.txt for license information.

var SettingItemMin = require('./setting_item_min.jsx');
var SettingItemMax = require('./setting_item_max.jsx');

module.exports = React.createClass({
    register: function() {
        $('#user_settings1').modal('hide');
        $('#register_app').modal('show');
    },
    getInitialState: function() {
        return {};
    },
    render: function() {
        var appSection;
        var self = this;
        if (this.props.activeSection === 'app') {
            var inputs = [];

            inputs.push(
                <div className="form-group">
                    <div className="col-sm-7">
                        <a className="btn btn-sm btn-primary" onClick={this.register}>Register New Application</a>
                    </div>
                </div>
            );

            appSection = (
                <SettingItemMax
                    title="Applications"
                    inputs={inputs}
                    updateSection={function(e){self.props.updateSection("");e.preventDefault();}}
                />
            );
        } else {
            appSection = (
                <SettingItemMin
                    title="Applications"
                    describe="Open to register a new third-party application"
                    updateSection={function(){self.props.updateSection("app");}}
                />
            );
        }

        return (
            <div>
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title" ref="title"><i className="modal-back"></i>Developer Settings</h4>
                </div>
                <div className="user-settings">
                    <h3 className="tab-header">Developer Settings</h3>
                    <div className="divider-dark first"/>
                    { appSection }
                    <div className="divider-dark"/>
                </div>
            </div>
        );
    }
});
