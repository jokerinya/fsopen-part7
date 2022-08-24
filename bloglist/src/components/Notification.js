import React from 'react';
import { useSelector } from 'react-redux';

const Notification = ({ message }) => {
    const notification = useSelector((state) => state.notification);

    if (notification.type === null || notification.content === null) {
        return null;
    }
    return <div className={notification.type}>{notification.content}</div>;
};

export default Notification;
