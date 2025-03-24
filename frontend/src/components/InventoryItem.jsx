import React from 'react';
import { Link } from 'react-router-dom';

function InventoryItem({ item, onDelete }) {
    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete ${item.name}?`)) {
            onDelete(item._id);
        }
    };

    return (
        <div className="inventory-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="item-details">
                <p><strong>Quantity:</strong> {item.quantity}</p>
                <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
            </div>
            <div className="item-actions">
                <button onClick={handleDelete} className="btn btn-danger">Delete</button>
            </div>
        </div>
    );
}

export default InventoryItem;