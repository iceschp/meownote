
import React from "react";
import { firebase } from "../firebase";

export const Checkbox = ({ id }) => {
    const archiveTasks = () => {
        firebase
        .firestore()
        .collection('tasks')
        .doc(id)
        .update({
            archived: true,
        });
    };
    return (
        <div className="checkbox-holder"
            data-testid="checkbox-action"
            onClick={() => archiveTasks()}
            onKeyDown={() => archiveTasks()}
            role="button"
            tabIndex={0}
        >
        <span className="checkbox" />
        </div>
    );
};