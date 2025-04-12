const helper = require('./helper.js');
const React = require('react');
const {createRoot} = require('react-dom/client');

const handleDeactivate = () => {
    e.preventDefault();
    helper.hideError();

    helper.sendPost(e.target.action, {});
    return false;
}

// Give the user a warning beforehand
const ConfirmWindow = (props) => {
    return (
        <form id="deactivateForm"
            name="deactivateForm"
            onSubmit={handleDeactivate}
            action="/deactivate"
            method="POST"
        >
            <h3>WARNING: You are about to delete your account. Continue?</h3>
            <input className="deactivate" type="submit" value="Delete Account" />
        </form>
    );
};

const init = () => {
    const root = createRoot(document.getElementById('warning'));
    root.render( <ConfirmWindow /> );
}

window.onload = init;