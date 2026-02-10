import express, { type Request, type Response } from 'express';
import { type GuardianResponse, type GuardianResult } from '../lib/interfaces.ts';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export async function GetUnitedStates(req: Request, res: Response) {
    try {
        const apiKey = process.env.GUARDIAN_API_KEY;
        console.log(apiKey);

        const response = await axios.get<GuardianResponse>(
            `https://content.guardianapis.com/us-news?api-key=${apiKey}&show-fields=headline,thumbnail&page-size=20`,
        );

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch news' });
    }
}

// Get news by section
/* async getNewsBySection(req: Request, res: Response): Promise<void> {
        try {
            const { section } = req.params;
            const apiKey = process.env.GUARDIAN_API_KEY;

            const response = await axios.get<GuardianResponse>(`https://content.guardianapis.com/${section}?api-key=${apiKey}&page-size=20`);

            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch news' });
        }
    }

    // Search news
    async searchNews(req: Request, res: Response): Promise<void> {
        try {
            const { q, pageSize = 10 } = req.query;
            const apiKey = process.env.GUARDIAN_API_KEY;

            const response = await axios.get<GuardianResponse>(`https://content.guardianapis.com/search?api-key=${apiKey}&q=${q}&page-size=${pageSize}`);

            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: 'Failed to search news' });
        }
    } */
