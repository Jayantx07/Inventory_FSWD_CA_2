import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function InventoryForm() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        quantity: '',
        price: ''
    });
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Convert quantity and price to numbers
            const itemData = {
                ...formData,
                quantity: Number(formData.quantity),
                price: Number(formData.price)
            };
            
            await axios.post('http://localhost:5001/api/inventory', itemData);
            
            setFormData({
                name: '',
                description: '',
                quantity: '',
                price: ''
            });
            
            navigate('/');
        } catch (error) {
            console.error('Error adding inventory item:', error);
        }
    };

    return (
        <div>
            <h2>Add Inventory Item</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Item Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                
                <div>
                    <label htmlFor="quantity">Quantity</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        min="0"
                        required
                    />
                </div>
                
                <div>
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                        required
                    />
                </div>
                
                <div>
                    <button type="submit">Add Item</button>
                    <button type="button" onClick={() => navigate('/')}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default InventoryForm;