// src/controllers/siteController.js
import { Site } from '../db/models/Site.js';

export const createSite = async (req, res) => {
    try {
        console.log('Request body:', req.body); // Log the request body
        const { data, error } = await Site.create(req.body);
        if (error) {
            console.error('Error creating site:', error); // Log any errors
            throw new Error(JSON.stringify(error)); // Convert error object to string
        }
        console.log('Created site data:', data); // Log the created site data
        res.status(201).json(data);
    } catch (error) {
        console.error('Error in createSite:', error.message); // Log the error message
        res.status(400).json({ error: error.message });
    }
};

export const getSiteById = async (req, res) => {
    try {
        const { data, error } = await Site.getById(req.params.id);
        if (error) throw error;
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateSite = async (req, res) => {
    try {
        const { data, error } = await Site.update(req.params.id, req.body);
        if (error) throw error;
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteSite = async (req, res) => {
    try {
        const { data, error } = await Site.delete(req.params.id);
        if (error) throw error;
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getMultiplierById = async (req, res) => {
    try {
        const { data, error } = await Site.getMultiplierById(req.params.id);
        if (error) throw error;
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};