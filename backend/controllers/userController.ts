import { Request, Response } from "express"
import * as Sentry from '@sentry/node'
import { prisma } from "../config/prisma.js";


// Get user credits
export const getUserCredits = async (req: Request, res: Response) => {
    try {

        const { userId } = req.auth();
        if (!userId) {
            return res.status(401).json({ msg: "Unauthorized" })
        }

        const user = await prisma.user.findUnique({
            where: { id: userId }
        })

        res.json({ credits: user?.credits })


    } catch (error: any) {
        Sentry.captureException(error);
        res.status(500).json({ msg: error.msg || error.code })
    }
}

// Get all user projects

export const getAllProjects = async (req: Request, res: Response) => {
    try {

        const { userId } = req.auth();
        if (!userId) {
            return res.status(401).json({ msg: "Unauthorized" })
        }
        const projects = await prisma.project.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' }
        })

        res.json({ projects })


    } catch (error: any) {
        Sentry.captureException(error);
        res.status(500).json({ msg: error.msg || error.code })
    }
}

// Get project by id

export const getProjectById = async (req: Request, res: Response) => {
    try {

        const { userId } = req.auth();
        const { projectId } = req.params as { projectId: string };

        const project = await prisma.project.findUnique({
            where: { id: projectId, userId },

        })

        if (!project) {
            return res.status(404).json({ msg: "Project not found" })
        }

        res.json({ project })

    } catch (error: any) {
        Sentry.captureException(error);
        res.status(500).json({ msg: error.msg || error.code })
    }
}

// Publish / Unpublish

export const toggleProjectPublic = async (req: Request, res: Response) => {
    try {

        const { userId } = req.auth();
        const { projectId } = req.params as { projectId: string };

        const project = await prisma.project.findUnique({
            where: { id: projectId, userId },

        })

        if (!project) {
            return res.status(404).json({ msg: "Project not found" })
        }

        if (!project?.generatedImage && !project?.generatedVideo) {
            return res.status(404).json({ msg: "Image or video not generated" })
        }

        await prisma.project.update({
            where: { id: projectId },
            data: { isPublished: !project.isPublished }
        })

        res.json({ isPublished: !project.isPublished })

    } catch (error: any) {
        Sentry.captureException(error);
        res.status(500).json({ msg: error.msg || error.code })
    }
}