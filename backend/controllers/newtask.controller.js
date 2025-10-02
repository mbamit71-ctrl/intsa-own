import express from "express"
import mongoose from "mongoose"
import newTask from "../models/newtask.model.js"


const createTask = async (req, res) => {
    try {
        const { taskname, time, priority } = req.body;

        if (!taskname || !time || !priority) {
            return res.status(400).json({
                message: "Please provide all required fields",
                success: false
            });
        }

        const task = await newTask.create({
            taskname,
            time,
            priority
        });

        return res.status(201).json({
            message: "Task created successfully",
            success: true,
            task
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error",
            success: false
        });
    }
}

export default createTask;
