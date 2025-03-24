
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import InventoryItem from './InventoryItem';

function InventoryList() {
    const [inventoryItems, setInventoryItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch inventory items from the API
    const fetchInventoryItems = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:5001/api/inventory');
            setInventoryItems(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching inventory items:', error);
            setLoading(false);
        }
    };

    // Delete an inventory item
    const handleDelete = async (itemId) => {
        try {
            await axios.delete(`http://localhost:5001/api/inventory/${itemId}`);
            // Refresh the inventory list
            fetchInventoryItems();
        } catch (error) {
            console.error('Error deleting inventory item:', error);
        }
    };

    // Load inventory items when component mounts
    useEffect(() => {
        fetchInventoryItems();
    }, []);

    return (
        <div className="inventory-list">
            <div className="inventory-header">
                <h2>Inventory Items</h2>
                <Link to="/add" className="btn btn-primary">Add New Item</Link>
            </div>
            
            {loading ? (
                <p>Loading inventory items...</p>
            ) : inventoryItems.length === 0 ? (
                <p>No inventory items found. Add some items to get started.</p>
            ) : (
                <div className="items-container">
                    {inventoryItems.map(item => (
                        <InventoryItem 
                            key={item._id} 
                            item={item}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default InventoryList;